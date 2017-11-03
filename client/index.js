import Vue from 'vue'
import VueResource from 'vue-resource'
import moment from 'moment'
import App from './App'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).fromNow();
  }
});
Vue.use(VueResource);
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
