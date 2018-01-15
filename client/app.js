import Vue from 'vue'
import VueResource from 'vue-resource'
import VTooltip from 'v-tooltip'
import moment from 'moment'
import App from './App.vue'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).fromNow();
  }
});
Vue.use(VueResource);
Vue.use(VTooltip, {defaultOffset: 5})
Vue.config.debug = true

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