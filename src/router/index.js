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
    //积木编程

    {
      path: '/building',
      name: 'building',
      component: (resolve) => require(['../components/B_dm_building_jimn.vue'],resolve)
    },
    //登录

    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../components/B_Yy_resigrer.vue'],resolve)
    },
    //新闻咨询
    {
      path:'/news',
      name:'news',
      component:(resolve) => require(['../components/B_dm_news.vue'],resolve)
    },
  //  忘记密码
    {
      path: '/forget',
      name: 'forget',
      component: (resolve) => require(['../components/B_Yy_forget.vue'],resolve)
    },

  ]
})
