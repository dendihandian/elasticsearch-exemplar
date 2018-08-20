export default function ({ store, redirect }) {
  if (!store.state.auth.loggedIn) {
    store.dispatch('setSnack', {
      message: 'You need to login first to access this page',
      color: 'red'
    })
    return redirect('/')
  }
}
