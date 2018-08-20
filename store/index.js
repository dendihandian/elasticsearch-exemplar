import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      drawer: false,
      snack: null,
      products: []
    },
    mutations: {
      drawerToggle (state) {
        state.drawer = !state.drawer
      },
      setSnack (state, snack) {
        state.snack = snack
      },
      clearSnack (state) {
        state.snack = null
      },
      setProducts (state, products) {
        state.products = products
      }
    },
    actions: {
      drawerToggle (vuexContext) {
        vuexContext.commit('drawerToggle')
      },
      setSnack (vuexContext, snack) {
        vuexContext.commit('setSnack', snack)
      },
      clearSnack (vuexContext) {
        vuexContext.commit('clearSnack')
      },
      setProducts (vuexContext, products) {
        vuexContext.commit('setProducts', products)
      }
    },
    getters: {
      drawer (state) {
        return state.drawer
      },
      snack (state) {
        return state.snack
      },
      products (state) {
        return state.products
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
