import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      drawer: false,
      token: null,
      user: null,
      snackbar: null
    },
    mutations: {
      drawerToggle (state) {
        state.drawer = !state.drawer
      },
      setToken (state, token) {
        state.token = token
      },
      setUser (state, authenticatedUser) {
        state.user = authenticatedUser
      },
      setSnackbar (state, snackbarData) {
        state.snackbar = snackbarData
      },
      clearToken (state) {
        state.token = null
      },
      clearUser (state) {
        state.user = null
      },
      clearAlert (state) {
        state.snackbar = null
      }
    },
    actions: {
      drawerToggle (vuexContext) {
        vuexContext.commit('drawerToggle')
      },
      setSnackbar (vuexContext, snackbarData) {
        vuexContext.commit('setSnackbar', snackbarData)
      },
      authentication (vuexContext, authData) {
        return this.$axios.$post('/auth/login', {
          email: authData.email,
          password: authData.password
        })
        .then(result => {
          // state
          vuexContext.commit('setToken', result.data.token)
          vuexContext.commit('setUser', result.data.user)
          // localStorage
          localStorage.setItem('token', result.data.token)
          localStorage.setItem("tokenExpiration", Number.parseInt(result.data.tokenExpiration) * 1000)
        })
        .catch(e => console.log(e))
      },
      logout (vuexContext) {
        // state
        vuexContext.commit('clearToken')
        vuexContext.commit('clearUser')
        // localStorage
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      }
    },
    getters: {
      drawer (state) {
        return state.drawer
      },
      isAuthenticated (state) {
        return state.token != null
      },
      authenticatedUser (state) {
        return state.user
      },
      snackbar (state) {
        return state.snackbar
      }
    }
  })
}

export default createStore
