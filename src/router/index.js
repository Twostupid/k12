import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect:'/building'
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: (resolve) => require(['../components/B_Yy_lgion.vue'],resolve)
    // },
    //积木编程

    {
      path: '/building',
      name: 'building',
      component: (resolve) => require(['../components/B_dm_building_jimn.vue'],resolve)
    },

  ]
})
