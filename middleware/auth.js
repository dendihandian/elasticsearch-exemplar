export default function (context) {
  // console.log('[middleware] auth')
  if (!context.store.getters.isAuthenticated) {
    context.store.dispatch('setSnackbar', {
      message: 'You need to login first to view this page'
    })
    context.redirect('/')
  }
}
