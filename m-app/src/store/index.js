import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import category from './modules/category'
import cart from './modules/cart'
import mine from './modules/mine'
import goods from './modules/goods'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    category,
    cart,
    mine,
    goods
  }
})

export default store;
