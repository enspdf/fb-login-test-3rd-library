import Vue from 'vue'
import Router from 'vue-router'
import FB from '@/components/FbLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FbLogin',
      component: FB
    }
  ]
})
