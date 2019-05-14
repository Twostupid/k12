import Vue from 'vue'
import Router from 'vue-router'

import C_dm_agreement from "@/components/dm/C/C_dm_agreement";
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
     redirect: '/homep'
    },
    //注册
    {
      path: '/register',
      name: 'home',
      component: (resolve) => require(['../components/yy/B/B_Yy_lgion.vue'],resolve)
    },
    //付款
    {
      path: '/payment',
      name: 'payment',
      component: (resolve) => require(['../components/ey/B/B_ey_payment.vue'],resolve)
    },
    //积木编程

    {
      path: '/building',
      name: 'building',
      component: (resolve) => require(['../components/dm/B/B_dm_building_jimn.vue'],resolve)
    },
    //登录

    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['../components/yy/B/B_Yy_resigrer.vue'],resolve)
    },
    {
      path: '/homep',
      name: 'homep',
      component: (resolve) => require(['../components/ey/B/B_ey_home.vue'],resolve)
    },

    //新闻咨询123
    {
      path: '/news',
      name: 'news',
      component: (resolve) => require(['../components/dm/B/B_dm_news.vue'], resolve)
    },
    //  忘记密码
    {
      path: '/forget',
      name: 'forget',
      component: (resolve) => require(['../components/yy/B/B_Yy_forget.vue'], resolve)
    },
    //帮助中心
    {
      path: '/help',
      name: 'help',
      component: (resolve) => require(['../components/dm/B/B_dm_helpcentre.vue'],resolve),
      children:[
        {
          path: 'understand',
          name: 'understand',
          component: (resolve) => require(['../components/dm/C/C_dm_understand.vue'],resolve)
        },
        {
          path: '/help',
          redirect:'understand'
        },
        {
          path: 'joinus',
          name: 'joinus',
          component: (resolve) => require(['../components/dm/C/C_dm_joinus.vue'],resolve)
        },
        {
          path: 'problem',
          name: 'problem',
          component: (resolve) => require(['../components/dm/C/C_dm_problem.vue'],resolve)
        },
        {
          path:'agreement',
          name:'agreement',
          component: (resolve) => require(['../components/dm/C/C_dm_agreement.vue'],resolve)
        },
        {
          path:'disclaimer',
          name:'disclaimer',
          component: (resolve) => require(['../components/dm/C/C_dm_disclaimer.vue'],resolve)
        },
        {
          path:'privacy',
          name:'privacy',
          component: (resolve) => require(['../components/dm/C/C_dm_privacy.vue'],resolve)
        }
      ]
    },

  //  个人中心路由
    //  个人中心路由
    {
      path: '/personal',
      name: 'personal',
      component: (resolve) => require(['../components/yy/B/B_Yy_personal.vue'], resolve),
      children: [
        //完善资料
        {
          path: 'datum',
          name: 'datum',
          component: (resolve) => require(['../components/yy/C/C_Yy_datum.vue'], resolve)
        },
        {
          path: 'profile',
          name: 'profile',
          component: (resolve) => require(['../components/yy/C/C_Yy_profile.vue'], resolve)
        },
        {
          path: 'address',
          name: 'address',
          component: (resolve) => require(['../components/dm/C/C_dm_address.vue'], resolve)
        },
        {
          path: 'order',
          name: 'order',
          component: (resolve) => require(['../components/ey/C/C_ey_order.vue'], resolve)
        },
        {
          path: 'course',
          name: 'course',
          component: (resolve) => require(['../components/ey/C/C_ey_course.vue'], resolve)
        },
        {
          path: 'bps',
          name: 'bps',
          component: (resolve) => require(['../components/ey/C/C_ey_bps.vue'], resolve)
        },
        {
          path: 'grow',
          name: 'grow',
          component: (resolve) => require(['../components/ey/C/C_ey_grow.vue'], resolve)
        },


        //修改密码
        {
          path: 'password',
          name: 'password',
          component: (resolve) => require(['../components/yy/C/C_Yy_pwssmi.vue'], resolve)
        },
        //关卡兑换劵
        {
          path: 'customs',
          name: 'customs',
          component: (resolve) => require(['../components/yy/C/C_Yy_customs.vue'], resolve)
        },
        //课程兑换券
        {
          path: 'courses',
          name: 'courses',
          component: (resolve) => require(['../components/yy/C/C_Yy_courses.vue'], resolve)
        },
        //勋章图
        {
          path: 'medal',
          name: 'medal',
          component: (resolve) => require(['../components/yy/C/C_Yy_medal.vue'], resolve)
        },
        //关卡进度
        {
          path: 'progress',
          name: 'progress',
          component: (resolve) => require(['../components/yy/C/C_Yy_progress.vue'], resolve)
        },
        //
        {
          path: 'message',
          name: 'message',
          component: (resolve) => require(['../components/yy/C/C_Yy_message.vue'], resolve)
        },

        {
          path:'consume',
          name:'consume',
          component:(resolve) => require(['../components/dm/C/C_dm_consume.vue'], resolve)
        },
        {
          path:'buyPay',
          name:'buyPay',
          component:(resolve) => require(['../components/dm/C/C_dm_buyPay.vue'], resolve)
        },
        {
          path:'rechargeRecord',
          name:'rechargeRecord',
          component:(resolve) => require(['../components/dm/C/C_dm_rechargeRecord.vue'], resolve)
        }
      ]
    },

  ]
})
