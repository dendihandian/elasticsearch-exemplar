<template lang="html">
  <v-container>
    <v-alert
      v-model="alert"
      dismissible
      type="info"
      >
      Products are set publicly, which means anyone can read and write without authentication.
    </v-alert>
    <v-layout row wrap mt-4>
      <v-flex
        v-for="product in products"
        :key="product.id"
        xs12 sm6 md4 lg3
        >
        <v-card flat tile pa-2>
          <v-card-media
            :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
            height="150px"
          ></v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ product.name.substring(0,16) }}</div>
              <span class="orange--text">${{ product.price }}</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      alert: true
    }
  },
  computed: {
    products () {
      return this.$store.getters.products
    }
  },
  created () {
    // console.log('created')

    this.$axios.$get('/products')
      .then(result => {
        // console.log(result)
        this.$store.dispatch('setProducts', result.data)
      })
      .catch(error => {
        // console.log(error)
        this.$store.dispatch('setSnack', {
          message: error.message,
          color: 'red'
        })
      })
  },
  mounted () {
    console.log('mounted')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style lang="css">
</style>
