import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import My from '@/views/my'
import Detail from '@/views/detail'

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
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
