import { createStore } from 'vuex'

export default createStore({
  state: {
    login : false,
    message : 'tryme'
  },
  getters: {
    message : (state)=>state.message,
    login : (state)=> state.login
  },
  mutations: {
    changeMessage(state, item){
      state.message = item
    },
    Shownav(state, item){
      state.login = item
    }
  },
  actions: {

  },
  modules: {
  }
})
