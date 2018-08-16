<template lang="html">
  <v-toolbar fixed app :clipped-left="clipped" class="cyan darken-3">
    <v-toolbar-side-icon @click="drawerToggle" class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/auth/login">
      <v-btn flat class="white--text">Login</v-btn>
    </router-link>
    <router-link to="/auth/register">
      <v-btn flat class="white--text">Register</v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        fixed: false,
        title: 'ElasticExemplar'
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
