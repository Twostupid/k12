// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap3/dist/css/bootstrap.css'
import '../static/css/main.css'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios= axios;
// Vue.use(axios);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
