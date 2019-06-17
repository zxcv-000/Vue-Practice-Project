// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './axios/configure'

console.log(store)


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// 自定义一个自动聚焦的全局指令
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
