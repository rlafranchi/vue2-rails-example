import Vue from 'vue'
import App from './App'
console.log(process.env.RAILS_URL)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
