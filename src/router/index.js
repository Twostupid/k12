import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect:'/'
    },
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['../components/B_Yy_lgion.vue'],resolve)
    },

  ]
})
