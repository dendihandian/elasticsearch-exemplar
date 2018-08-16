<template lang="html">
  <v-toolbar fixed app :clipped-left="clipped">
    <v-toolbar-side-icon @click="drawerToggle"></v-toolbar-side-icon>
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        fixed: false,
        title: 'Vuetify.js'
      }
    },
    computed: {
      drawer () {
        return this.$store.getters.drawer
      }
    },
    methods: {
      drawerToggle () {
        this.$store.dispatch('drawerToggle')
      }
    }
  }
</script>

<style lang="css">
</style>
