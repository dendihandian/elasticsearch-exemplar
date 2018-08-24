<template lang="html">
  <v-navigation-drawer
    :mini-variant="miniVariant"
    :clipped="clipped"
    :value="drawer"
    fixed
    app
    dark
  >
    <v-list>
      <v-list-tile
        router
        :to="item.to"
        :key="i"
        v-for="(item, i) in items"
        exact
        active-class="cyan--text"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        items: [
          { icon: 'apps', title: 'Home', to: '/' },
          { icon: 'bubble_chart', title: 'Products', to: '/products' },
          { icon: 'add', title: 'Product Create', to: '/products/create' },
          { icon: 'contacts', title: 'Contacts', to: '/contacts' }
        ],
        miniVariant: false,
      }
    },
    computed: {
      drawer () {
        return this.$store.getters.drawer
      }
    }
  }
</script>

<style lang="css">
</style>
