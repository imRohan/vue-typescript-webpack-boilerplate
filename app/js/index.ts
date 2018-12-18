// External Libs
import Vue from 'vue'
require('bootstrapJs')

// Import Styles
require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css')
require('css/main.scss')

// Mixins

// Components

// Interfaces

new Vue({
  name: 'Vue Typescript Boilerplate',
  mixins: [],
  el: '#vue-main',
  components: {
  },
  data() {
    return {
      data: null
    }
  },
  methods: {
  },
  mounted() {
    console.log('Mounted Main')
    this.data = 'Hello World!'
  },
})
