import Vue from 'vue'
import Router from 'vue-router'
import shoppingMal from '@/components/pages/shoppingMall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMal',
      component: shoppingMal
    }
  ]
})
