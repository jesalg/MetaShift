import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'

Vue.use(VueResource);
Vue.config.debug = true

new Vue({
  el: '#app',
  render (createElement) {
    return createElement(App)
  }
})
