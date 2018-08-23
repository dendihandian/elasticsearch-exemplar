<template lang="html">
  <v-container>
    <form @submit.prevent="submitProduct">
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="254"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          ></v-text-field>
        </v-flex>
        <v-flex xs9 mt-4>
          <v-slider
            label="Stock"
            v-model="stock"
            :max="999"
            :min="1"
            :step="1"
          ></v-slider>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <v-text-field
            v-model="stock"
            type="number"
            max="999"
            min="1"
          ></v-text-field>
        </v-flex>
        <v-flex xs9 mt-4>
          <v-slider
            label="Price"
            v-model="price"
            :max="999"
            :min="1"
            :step="1"
          ></v-slider>
        </v-flex>
        <v-flex xs2 offset-xs1>
          <v-text-field
            v-model="price"
            max="999"
            min="1"
            type="number"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-textarea
          v-model="description"
          label="Description"
          hint="Minimum 5 characters"
          ></v-textarea>
        </v-flex>
        <v-flex xs12>
          <v-btn type="submit" color="success">Update</v-btn>
          <v-btn @click="clearProductForm" color="warning">clear</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, minLength: minLength(3), maxLength: maxLength(254) },
      description: { minLength: minLength(5) },
    },

    created () {
      this.$axios.$get('/products/' + this.$route.params.slug)
        .then(result => {
          this.name = result.data.name
          this.description = result.data.description
          this.stock = result.data.stock
          this.price = result.data.price
        })
        .catch(error => {
          this.$store.dispatch('setSnack', {
            message: error.message,
            color: 'red'
          })
        })
    },

    data: () => ({
      name: '',
      description: '',
      stock: 1,
      price: 1
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 254 characters long')
        !this.$v.name.minLength && errors.push('Name must be at least 3 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      }
    },

    methods: {
      submitProduct () {
        this.$v.$touch()
        this.$axios.$patch('/products/' + this.$route.params.slug, {
          name: this.name,
          stock: this.stock,
          price: this.price,
          description: this.description
        })
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
      },
      clearProductForm () {
        this.$v.$reset()
        this.name = ''
        this.description = ''
        this.stock = 1
        this.price = 1
      }
    }
  }
</script>

<style lang="css">
</style>
