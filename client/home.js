import Vue from 'vue'
import VeeValidate from 'vee-validate';
import VTooltip from 'v-tooltip'
import Home from './Home.vue'

Vue.use(VeeValidate);
Vue.use(VTooltip, {defaultOffset: 5})
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
