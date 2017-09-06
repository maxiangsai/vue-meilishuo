import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import My from '@/views/my'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
