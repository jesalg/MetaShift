import Vue from 'vue'
import Home from './Home.vue'

Vue.config.debug = true

new Vue({
  el: '#home',
  data: {
    
  },
  render (createElement) {
    return createElement(Home)
  },
  beforeMount() {

  }
})
