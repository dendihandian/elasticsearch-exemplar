<template lang="html">
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="254"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-slider
      label="Stock"
      v-model="stock"
      :max="999"
      :min="1"
      :step="1"
    ></v-slider>
    <v-slider
      label="Price"
      v-model="price"
      :max="999999"
      :min="1"
      :step="1"
    ></v-slider>
    <v-textarea
      v-model="description"
      label="Description"
      hint="Minimum 5 characters"
    ></v-textarea>
    <v-btn @click="submit" color="success">Create</v-btn>
    <v-btn @click="clear" color="warning">clear</v-btn>
  </form>
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
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.description = ''
      }
    }
  }
</script>

<style lang="css">
</style>
