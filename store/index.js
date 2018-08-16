import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      drawer: false,
      token: null,
      user: null
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
      clearToken (state) {
        state.token = null
      }
    },
    actions: {
      drawerToggle (vuexContext) {
        vuexContext.commit('drawerToggle')
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
      }
    }
  })
}

export default createStore
