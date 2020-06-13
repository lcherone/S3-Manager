import Vue from 'vue'
import Router from 'vue-router'

import pages from './pages/*.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  // scroll to top on navigate (not refresh or back button)
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      path: '/',
      component: () => import('./pages/index.vue'),
      props: true
    },{
      path: '/host/:host_key',
      component: () => import('./pages/host.vue'),
      props: true
    }, {
      path: '/host/:host_key/:bucket',
      component: () => import('./pages/host.vue'),
      props: true
    },
    // not found
    {
      path: '*',
      component: pages['not-found'].default,
      props: true
    }
  ]
})
