<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12 sm6>
        <v-container>
          <h2>{{ product.name }}</h2>
          <br>
          <h4>Price: {{ product.price }}</h4>
          <h4>Stock: {{ product.stock }}</h4>
          <br>
          <p>{{ product.description }}</p>
          <router-link :to="'/products/' + product.id + '/edit'" >
            <v-btn class="success white--text">Edit</v-btn>
          </router-link>
          <v-btn class="error white--text" @click="dialog = true">Delete</v-btn>
        </v-container>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Deletion Confirmation</v-card-title>
        <v-card-text>
          Are you sure want to delete this product?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="deleteProduct"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
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
    methods: {
      deleteProduct () {
        this.dialog = false
        if (this.product.id) {
          this.$axios.$delete('/products/' + this.product.id)
            .then(result => {
              this.$store.dispatch('setSnack', {
                message: result.message,
                color: 'green'
              })
              this.$router.push('/products')
            })
            .catch(error => {
              this.$store.dispatch('setSnack', {
                message: error.message,
                color: 'red'
              })
            })
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
