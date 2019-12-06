import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '@/components/pages/shoppingMall'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import GoodsInfo from '@/components/pages/GoodsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMall',
      component: shoppingMall
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {path: '/Goods',
    name: 'Goods',
    component: Goods
  },
    {path: '/GoodsInfo/:ID',
    name: 'GoodsInfo',
    component: GoodsInfo},
  ]
})
