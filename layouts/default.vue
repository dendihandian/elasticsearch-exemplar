<template>
  <v-app>
    <AppSidebar />
    <AppToolbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <AppFooter />
    <AppSnackbar v-if="snackbar" />
  </v-app>
</template>

<script>
  import AppToolbar from '~/components/AppToolbar'
  import AppSidebar from '~/components/AppSidebar'
  import AppFooter from '~/components/AppFooter'
  import AppSnackbar from '~/components/AppSnackbar'

  export default {
    components: {
      AppToolbar,
      AppSidebar,
      AppFooter,
      AppSnackbar
    },
    computed: {
      snackbar () {
        return this.$store.getters.snackbar
      }
    }
  }
</script>
