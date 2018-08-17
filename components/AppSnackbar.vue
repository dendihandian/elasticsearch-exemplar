<template lang="html">
  <v-snackbar
    v-model="snackbar"
    bottom
    right
    :timeout="timeout"
  >
    {{ snackbar.message }}
    <v-btn
      color="pink"
      flat
      @click="clearSnackbar"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    data () {
      return {
        timeout: 6000
      }
    },
    computed: {
      snackbar () {
        return this.$store.getters.snackbar
      }
    },
    methods: {
      clearSnackbar () {
        this.$store.dispatch('clearSnackbar')
      }
    }
  }

</script>

<style lang="css">
</style>
