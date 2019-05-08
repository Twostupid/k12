<template>
  <div id="app">
    <!--lx-->
    <header id="header" class="header" >
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

  </div>
</template>
<script>



  export default {
  name: 'App',
    components:{

    }

}
</script>

<style>

</style>
