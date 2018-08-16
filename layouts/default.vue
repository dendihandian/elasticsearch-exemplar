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
  </v-app>
</template>

<script>
  import AppToolbar from '~/components/AppToolbar'
  import AppSidebar from '~/components/AppSidebar'
  import AppFooter from '~/components/AppFooter'
  export default {
    components: {
      AppToolbar,
      AppSidebar,
      AppFooter
    }
  }
</script>
