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

    // 首页
    {
      path: '/',
      name: 'shoppingMall',
      component: shoppingMall
    },
    // 注册
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  //全部商品
    {path: '/Goods',
    name: 'Goods',
    component: Goods
  },
  // 商品详细信息
    {path: '/GoodsInfo/:ID',
    name: 'GoodsInfo',
    component: GoodsInfo},
  ]
})
