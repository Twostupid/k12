<template>
  <div id="app">
    <!--lx-->
    <header id="header" class="header" v-model="headstyle">
      <div class="container">
        <nav class="nav-bar">
          <router-link to="/homep" class="logo">
            <img src="http://yefengedu.com/static/img/logo.cf4591a.png">
          </router-link>
          <ul class="menus el-menu">
            <li class="el-menu-item">
              <router-link to="/" class="rlStyle">首页</router-link>
            </li>
            <li class="el-menu-item">
              <router-link to="/building" class="rlStyle">积木编程</router-link>
            </li>
            <li class="el-menu-item">
              <router-link to="/" class="rlStyle">直播课程</router-link>
            </li>
            <li class="el-menu-item">
              <router-link to="/news" class="rlStyle">新闻资讯</router-link>
            </li>
            <li class="el-menu-item">
              <router-link to="/" class="rlStyle">APP下载</router-link>
            </li>
            <li class="el-menu-item">
              <router-link to="/" class="rlStyle">夏令营</router-link>
            </li>
          </ul>
          <ul class="user-area el-menu" @mouseenter="enter" @mouseleave="leave">
            <!--<router-link to="/register">-->
            <!--<li class="el-menu-item is-active text-active register  btn-hover">-->
            <!--<router-link to="/register" class="ulinkr">注册-->
            <!--</router-link>-->
            <!--</li>-->
            <!--</router-link>-->
            <!--<router-link to="/login">-->
            <!--<li class="el-menu-item loginTwo">-->
            <!--<span class="login-button btn-hover">-->
            <!--<router-link class="ulink" to="/login">登录</router-link>-->
            <!--</span>-->
            <!--</li>-->
            <!--</router-link>-->

            <li class="after_login"><img src="http://yefengedu.com/static/images/v2.0/img/logo.png" alt=""
                                         class="small_logo"></li>
            <li class="after_login">15734121521<span ref="myrou" class="glyphicon glyphicon-menu-down"
                                                     aria-hidden="true"></span></li>
            <div class="el-menu--horizontal"
                 style="position: fixed; top: 65px; left: 1120px; z-index: 2066;"
                 x-placement="bottom-start" ref="personu">
              <ul role="menu" class="el-menu el-menu--popup el-menu--popup-bottom-start" ref="personOpe" style="display: none">
                <li role="menuitem" tabindex="-1" class="el-menu-item_1 is-active"><a href="/app.html#/personal" style="color: rgb(151, 155, 159); text-decoration: none;"><img
                  src="http://yefengedu.com/static//images//v2.0/img/user.png" alt="" width="16"><span
                  style="vertical-align: middle; padding-left: 10px;">个人中心</span></a></li>
                <li role="menuitem" tabindex="-1" class="el-menu-item_1" style="color: rgb(151, 155, 159);"><img
                  src="http://yefengedu.com/static//images//v2.0/img/remind.png" alt="" width="16"><span
                  style="vertical-align: middle; padding-left: 10px;">退出登录</span></li>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </header>
    <router-link to="/home"></router-link>

    <router-link to="/building"></router-link>
    <router-view></router-view>
    <footer class="footer container">
      <div class="container-1200">
        <div class="row">
          <div class="col"><img src="http://yefengedu.com/static/img/logo1.4a14481.png"></div>
          <div class="col"><h2 data-v-7dd795f5="">帮助中心</h2>
            <p>
              <router-link to="/help">了解晔枫</router-link>
            </p>
            <p>
              <router-link to="/help/joinus">加入晔枫</router-link>
            </p>
            <p>
              <router-link to="/help/problem">常见问题</router-link>
            </p>
          </div>
          <div class="col"><h2>服务协议</h2>
            <p>
              <router-link to="/help/agreement">用户协议</router-link>
            </p>
            <p>
              <router-link to="/help/disclaimer">免责声明</router-link>
            </p>
            <p>
              <router-link to="/help/privacy">隐私政策</router-link>
            </p>
          </div>
          <div class="col"><h2>微信公众号</h2>
            <p>
              <router-link to="/"><img
                src="http://yefengedu.com/static/img/gongzhonghao.8168dbd.png"
                alt="gongzhonghao" width="110" height="110"></router-link>
            </p>
          </div>
          <div class="col"><h2>客户服务</h2>
            <h1>400-1168-805</h1>
            <p>(9:30-17:30)</p></div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      <div class="copyright-container"><p>上海晔枫教育科技有限公司 © 2009-2018 yefengedu.com 版权所有 ICP证：【沪ICP备18019568号-1】</p></div>
    </div>

  </div>
</template>
<script>

  export default {
    name: 'App',
    data(){
      return{
        headstyle:""
      }
    },
    components: {},
    methods: {
      enter() {
        this.$refs.myrou.style.transform = 'rotate(180deg)';
        this.$refs.myrou.style.transition = '0.5s ease-in-out'
        this.$refs.personOpe.style.display='block';



      },
      leave() {
        this.$refs.myrou.style.transform = 'rotate(-360deg)';
        this.$refs.myrou.style.transition = 'all 0.5s ease-in-out'
        this.$refs.personOpe.style.display='none';
      }

    }

  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

</style>
