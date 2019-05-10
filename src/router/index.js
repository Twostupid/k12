import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homep'
    },
    //从定向回登录99

    //注册
    {
      path: '/register',
      name: 'home',
      component: (resolve) => require(['../components/B_Yy_lgion.vue'], resolve)
    },
    //积木编程

    {
      path: '/building',
      name: 'building',
      component: (resolve) => require(['../components/B_dm_building_jimn.vue'], resolve)
    },
    //登录

    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../components/B_Yy_resigrer.vue'], resolve)
    },
    {
      path: '/homep',
      name: 'homep',
      component: (resolve) => require(['../components/B_ey_home.vue'], resolve)
    },
    //新闻咨询123
    {
      path: '/news',
      name: 'news',
      component: (resolve) => require(['../components/B_dm_news.vue'], resolve)
    },
    //  忘记密码
    {
      path: '/forget',
      name: 'forget',
      component: (resolve) => require(['../components/B_Yy_forget.vue'], resolve)
    },
    //  个人中心路由
    {
      path: '/personal',
      name: 'personal',
      component: (resolve) => require(['../components/B_Yy_personal.vue'], resolve),
      children: [
        //完善资料
        {
          path: 'datum',
          name: 'datum',
          component: (resolve) => require(['../components/C_Yy_datum.vue'], resolve)
        },
        {
          path: 'profile',
          name: 'profile',
          component: (resolve) => require(['../components/C_Yy_profile.vue'], resolve)
        }
      ]
    },

  ]
})
