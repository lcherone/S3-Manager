import {
  ajax
} from 'jquery'

//
const Plugin = {
  //
  install(Vue) {
    /**
     * singleton
     */
    if (this.installed) return
    this.installed = true

    /**
     * Get csrf token from session only cookie
     */
    const csrf = () => {
      let v = document.cookie.match('(^|;) ?csrf-token=([^;]*)(;|$)')
      return v && v[2] ? v[2] : ''
    }

    /**
     * Request helper
     */
    const request = (action, method, data) => {
      if (data && (method === 'PUT' || method === 'POST' || method === 'DELETE')) {
        data = JSON.stringify(data)
      }
      return ajax({
        url: action,
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        method,
        type: method,
        data,
        dataType: 'json',
        cache: false,
        contentType: 'application/json;charset=UTF-8',
        beforeSend: (xhr) => {
          xhr.setRequestHeader('csrf-token', csrf())
          xhr.setRequestHeader('usertoken', localStorage.getItem('usertoken'))
          xhr.setRequestHeader('refreshtoken', localStorage.getItem('refreshtoken'))
        },
        complete: (xhr, textStatus) => {
          if (xhr.status === 401) {
            location.reload()
          }
          let usertoken = xhr.getResponseHeader('usertoken')
          let refreshtoken = xhr.getResponseHeader('refreshtoken')

          if (usertoken && refreshtoken) {
            localStorage.setItem('usertoken', usertoken)
            localStorage.setItem('refreshtoken', refreshtoken)
          }
        }
      })
    }

    /**
     * Vue plugin property
     */
    Vue.prototype.$ajax = {
      get: (action, data) => request(action, 'GET', data),
      post: (action, data) => request(action, 'POST', data),
      put: (action, data) => request(action, 'PUT', data),
      delete: (action, data) => request(action, 'DELETE', data)
    }
  }
}

export default Plugin
