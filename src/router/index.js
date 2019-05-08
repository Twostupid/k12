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
    //从定向回登录
    {
      path: ' /register',
      redirect:'/'
    },
    //注册
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['../components/B_Yy_lgion.vue'],resolve)
    },
    //登录

    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../components/B_Yy_resigrer.vue'],resolve)
    },

  ]
})
