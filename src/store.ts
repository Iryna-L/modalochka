import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: false,
    size: "small"
  },
  mutations: {
    showModal: function(state) {
      state.isShow = true
    },
    hideModal: function(state) {
      state.isShow = false
    }
   
  },
  actions: {

  }
})
