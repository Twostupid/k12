import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'homep'
    },
    //注册
    {
      path: '/register',
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
    {
      path: '/homep',
      name: 'homep',
      component: (resolve) => require(['../components/B_ey_home.vue'],resolve)
    },
    //新闻咨询123
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
    //帮助中心
    {
      path: '/help',
      name: 'help',
      component: (resolve) => require(['../components/B_dm_helpcentre.vue'],resolve),
      children:[
        {
          path: 'understand',
          name: 'understand',
          component: (resolve) => require(['../components/C_dm_understand.vue'],resolve)
        },
        {
          path: '/help',
          redirect:'understand'
        },
        {
          path: 'joinus',
          name: 'joinus',
          component: (resolve) => require(['../components/C_dm_joinus.vue'],resolve)
        },
        {
          path: 'problem',
          name: 'problem',
          component: (resolve) => require(['../components/C_dm_problem.vue'],resolve)
        },
      ]
    },


  ]
})
