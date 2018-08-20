<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="submit">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row class>
                  <v-flex class="text-xs-center">
                    <v-btn class="warning black--text" type="submit">Sign In</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    middleware: 'guest',
    data () {
      return {
        email: null,
        password: null
      }
    },
    methods: {
      async submit () {
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })

          this.$store.dispatch('setSnack', {
            message: 'Login Succesful',
            color: 'green'
          })

          this.$router.push('/')
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style lang="css">
</style>
