// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap3/dist/css/bootstrap.css'
import '../static/css/main.css'
import moment from 'moment/moment'
Vue.config.productionTip = false;
import $ from 'jquery'
import '../node_modules/bootstrap3/dist/js/bootstrap.min.js'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios= axios;

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment(value).format(formatString);
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
