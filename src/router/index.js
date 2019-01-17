import Vue from 'vue'
import Router from 'vue-router'
import Methods from '@/pages/methods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'methods',
      component: Methods
    }
  ]
})
