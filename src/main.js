import Vue from 'vue'
import app from './app.vue'
import router from './router'

import '@babel/polyfill'
import './plugins/bootstrap-jquery'
import './plugins/vue-fontawesome'
import './plugins/minio'
import ajax from './plugins/ajax'

Vue.use(ajax)

if (process.env.NODE_ENV === 'production') {
    Vue.config.devtools = false
    Vue.config.debug = false
    Vue.config.silent = true
}

new Vue({
    el: '#app',
    router,
    render: h => h(app)
})
