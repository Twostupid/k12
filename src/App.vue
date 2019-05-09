<template>
  <div id="app">
    <!--lx-->
    <header id="header" class="header">
      <div class="container">
        <nav class="nav-bar">
          <router-link to="/" class="logo">
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
            <router-link to="/">
              <li class="el-menu-item is-active text-active register  btn-hover">
                <router-link to="/" class="ulinkr">注册
                </router-link>
              </li>
            </router-link>
            <router-link to="/login">
              <li class="el-menu-item">
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
    <footer data-v-7dd795f5="" class="footer container">
      <div data-v-7dd795f5="" class="container-1200">
        <div data-v-7dd795f5="" class="row">
          <div data-v-7dd795f5="" class="col"><img data-v-7dd795f5="" src="http://yefengedu.com/static/img/logo1.4a14481.png"></div>
          <div data-v-7dd795f5="" class="col"><h2 data-v-7dd795f5="">帮助中心</h2>
            <p data-v-7dd795f5=""><a data-v-7dd795f5="" href="/app.html#/understand">了解晔枫</a></p>
            <p data-v-7dd795f5=""><a data-v-7dd795f5="" href="/app.html#/join">加入晔枫</a></p>
            <p data-v-7dd795f5=""><a data-v-7dd795f5="" href="/app.html#/problem">常见问题</a></p></div>
          <div data-v-7dd795f5="" class="col"><h2 data-v-7dd795f5="">服务协议</h2>
            <p data-v-7dd795f5=""><a data-v-7dd795f5="" href="/app.html#/protocol">用户协议</a></p>
            <p data-v-7dd795f5=""><a data-v-7dd795f5="" href="/app.html#/statement">免责声明</a></p>
            <p data-v-7dd795f5=""><a data-v-7dd795f5="" href="/app.html#/privacy">隐私政策</a></p></div>
          <div data-v-7dd795f5="" class="col"><h2 data-v-7dd795f5="">微信公众号</h2>
            <p data-v-7dd795f5=""><a data-v-7dd795f5=""><img data-v-7dd795f5=""
                                                             src="http://yefengedu.com/static/img/gongzhonghao.8168dbd.png"
                                                             alt="gongzhonghao" width="110" height="110"></a></p></div>
          <div data-v-7dd795f5="" class="col"><h2 data-v-7dd795f5="">客户服务</h2>
            <h1 data-v-7dd795f5="">400-1168-805</h1>
            <p data-v-7dd795f5="">(9:30-17:30)</p></div>
        </div>
      </div>
    </footer>

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
