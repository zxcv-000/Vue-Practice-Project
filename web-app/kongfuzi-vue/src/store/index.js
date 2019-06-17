import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import token from './modules/token';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    cart,
    token
  }
});

export default store;
