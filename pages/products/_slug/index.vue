<template lang="html">
  <v-container>
    <v-layout>
      <v-flex xs6>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs6>
        <v-container>
          <h2>{{ product.name }}</h2>
          <br>
          <h4>Price: {{ product.price }}</h4>
          <h4>Stock: {{ product.stock }}</h4>
          <br>
          <p>{{ product.description }}</p>
          <v-btn class="success white--text">Edit</v-btn>
          <v-btn class="error white--text">Delete</v-btn>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        product: {
          name: '',
          slug: '',
          price: '',
          stock: '',
          description: '',
        }
      }
    },
    created () {
      this.$axios.$get('/products/' + this.$route.params.slug)
        .then(result => {
          this.product = result.data
        })
        .catch(error => {
          this.$store.dispatch('setSnack', {
            message: error.message,
            color: 'red'
          })
        })
    }
  }
</script>

<style lang="css">
</style>
