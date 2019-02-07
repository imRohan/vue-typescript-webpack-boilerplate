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
    sayHello() {
      const _string: string = 'Hello World!'
      this.data = _string
    }
  },
  created() {
    this.sayHello()
  },
})
