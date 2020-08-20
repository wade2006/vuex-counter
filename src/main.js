/*
入口js
 */
import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store.js'

new Vue({
  el: '#app',
  components: {
    Counter
  },
  template: '<Counter/>',
  store   //所有用 vuex 管理的组件中都多了一个属性$store,
 
})