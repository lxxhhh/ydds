// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Row,Col,Swipe, SwipeItem,Lazyload,List} from 'vant'

 
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

function changeSize(){
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if(htmlWidth>750){htmlWidth=750}
  let htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 20 + 'px';
 
}
changeSize();
window.onresize = function(){
  changeSize();
} 