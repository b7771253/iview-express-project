import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loadingMsg:null
  },
  mutations: {
      loading (state) {
          state.loadingMsg = this.$Message.loading({
              content: 'Loading...',
              duration: 0
          });
      },
      loaded(state){
          setTimeout(state.loadingMsg, 500);
      }
  },
  actions: {
    
  }
})

export default store