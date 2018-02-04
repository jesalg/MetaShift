import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import VTooltip from 'v-tooltip'
import Home from './Home.vue'

Vue.use(VeeValidate);
Vue.use(VueResource);
Vue.use(VTooltip, {defaultOffset: 5})

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
