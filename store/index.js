import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      drawer : false
    },
    mutations: {
      drawerToggle (state) {
        state.drawer = !state.drawer
      }
    },
    actions: {
      drawerToggle (vuexContext) {
        vuexContext.commit('drawerToggle')
      }
    },
    getters: {
      drawer (state) {
        return state.drawer
      }
    }
  })
}

export default createStore
