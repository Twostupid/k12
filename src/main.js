// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap3/dist/css/bootstrap.css'
import '../static/css/main.css'
import '../static/css/cropper.css'
import moment from 'moment/moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false;
import $ from 'jquery'
import '../node_modules/bootstrap3/dist/js/bootstrap.min.js'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '../node_modules/swiper/dist/js/swiper.min.js'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios= axios;
Vue.use(ElementUI)
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
