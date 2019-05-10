<template>
  <div id="app">
    <!--lx-->
    <header id="header" class="header">
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
          <ul class="user-area el-menu">
            <router-link to="/register">
              <li class="el-menu-item is-active text-active register  btn-hover">
                <router-link to="/register" class="ulinkr">注册
                </router-link>
              </li>
            </router-link>
            <router-link to="/login">
              <li class="el-menu-item loginTwo">
              <span class="login-button btn-hover">
                <router-link class="ulink" to="/login">登录</router-link>
              </span>
              </li>
            </router-link>
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
              <router-link to="/">免责声明</router-link>
            </p>
            <p>
              <router-link to="/">隐私政策</router-link>
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
    components: {}

  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

</style>
