<template lang="html">
  <v-toolbar fixed app :clipped-left="clipped" class="cyan darken-3">
    <v-toolbar-side-icon @click="drawerToggle" class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/auth/login" v-if="!isAuthenticated">
      <v-btn flat class="white--text">Login</v-btn>
    </router-link>
    <router-link to="/auth/register" v-if="!isAuthenticated">
      <v-btn flat class="white--text">Register</v-btn>
    </router-link>
    <v-btn flat v-if="isAuthenticated" class="white--text">
      <v-icon>person</v-icon> &nbsp; {{ loggedInUser.username }}
    </v-btn>
    <v-btn flat v-if="isAuthenticated" class="white--text" @click="logout">
      <v-icon>exit_to_app</v-icon> &nbsp; Logout
    </v-btn>
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
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      },
      loggedInUser () {
        return this.$store.getters.loggedInUser
      }
    },
    methods: {
      drawerToggle () {
        this.$store.dispatch('drawerToggle')
      },
      async logout () {
        await this.$auth.logout();
      }
    }
  }
</script>

<style lang="css">
</style>
