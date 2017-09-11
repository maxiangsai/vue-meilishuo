import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Category from '@/views/category'
import Cart from '@/views/cart'
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
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
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
