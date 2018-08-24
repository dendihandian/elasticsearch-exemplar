<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex flat xs11>
        <v-text-field
          v-model="query"
          required
        ></v-text-field>
      </v-flex>
      <v-flex flat xs1>
        <v-btn color="success" @click="searchProduct">Search</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex
        v-for="product in resultProducts"
        :key="product.id"
        xs12 sm6 md4 lg3
        >
        <router-link :to="'/products/' + product.id">
          <v-card flat tile style="padding:10px;">
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
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        query: '',
        resultProducts: []
      }
    },
    methods: {
      searchProduct () {
        if (this.query) {
          this.$axios.$get('/products/search/' + this.query)
            .then(result => {
              this.resultProducts = result.data
              if (result.data.length === 0) {
                this.$store.dispatch('setSnack', {
                  message: 'Search Result Not Found',
                  color: 'orange'
                })
              } else {
                this.$store.dispatch('setSnack', {
                  message: 'Found ' + result.data.length + ' Products',
                  color: 'green'
                })
              }
            })
            .catch(error => {
              this.$store.dispatch('setSnack', {
                message: error.message,
                color: 'red'
              })
            })
        }
      }
    }
  }
</script>

<style lang="css">
</style>
