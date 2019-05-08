<template>
  <div id="app">

    <router-link to="/home"></router-link>
    <router-view></router-view>
  </div>
</template>
<script>
/*
登录页面
 */


  export default {
  name: 'App',
    components:{
      // Bd_Yy_lgion
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
