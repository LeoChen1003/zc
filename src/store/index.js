import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth:0
  },
  mutations: {
    GET_WINDOW_WIDTH(state, newWidth) {
      state.windowWidth = newWidth
    }
  },
  actions: {
  },
  modules: {
  }
})
