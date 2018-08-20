<template lang="html">
  <v-snackbar
    :value="snackbar"
    bottom
    right
    :timeout="timeout"
    :color="snackbar.color"
  >
    {{ snackbar.message }}
    <v-btn
      color="white"
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
        return this.$store.getters.snack
      }
    },
    methods: {
      clearSnackbar () {
        this.$store.dispatch('clearSnack')
      }
    }
  }

</script>

<style lang="css">
</style>
