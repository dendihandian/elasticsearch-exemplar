import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      drawer: false,
      snackbar: null
    },
    mutations: {
      drawerToggle (state) {
        state.drawer = !state.drawer
      },
      setSnackbar (state, snackbarData) {
        state.snackbar = snackbarData
      },
      clearSnackbar (state) {
        state.snackbar = null
      }
    },
    actions: {
      drawerToggle (vuexContext) {
        vuexContext.commit('drawerToggle')
      },
      setSnackbar (vuexContext, snackbarData) {
        vuexContext.commit('setSnackbar', snackbarData)
      }
    },
    getters: {
      drawer (state) {
        return state.drawer
      },
      snackbar (state) {
        return state.snackbar
      },

      // Getters For Auth Module
      isAuthenticated (state) {
        return state.auth.loggedIn
      },
      loggedInUser (state) {
        return state.auth.user
      }
    }
  })
}

export default createStore
