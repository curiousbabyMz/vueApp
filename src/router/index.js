import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Main from '@/components/Main'
import Index from '@/components/Index'
import Search from '@/components/Search'
import Vip from '@/components/Vip'
import Car from '@/components/Car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect: '/home'
    },
    {
      path: '/home',
      component: Main,
      children: [
        {
          path: '/',
          redirect: '/index'
        },
        {
          path: '/index',
          name: 'home',
          component: Index
        },
        {
          path: '/search',
          name: 'search',
          component: Search
        },
        {
          path: '/vip',
          name: 'vip',
          component: Vip
        }
      ]
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    }
  ]
})
