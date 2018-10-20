/*global VERSION*/
import Vue from 'vue'
import App from './App.vue'
var VueTruncate = require('vue-truncate-filter')

Vue.config.productionTip = false
Vue.use(VueTruncate)

new Vue({
  render: h => h(App, {
    props: {
      version: VERSION
    } 
  })
}).$mount('#app')
