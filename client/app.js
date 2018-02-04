import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import VTooltip from 'v-tooltip'
import moment from 'moment'
import App from './App.vue'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).fromNow();
  }
});
Vue.use(VeeValidate);
Vue.use(VueResource);
Vue.use(VTooltip, {defaultOffset: 5})

new Vue({
  el: '#app',
  data: {
    link: {}
  },
  render (createElement) {
    return createElement(App)
  },
  beforeMount() {
    this.link = JSON.parse(this.$el.dataset.linkJson)
  }
})
