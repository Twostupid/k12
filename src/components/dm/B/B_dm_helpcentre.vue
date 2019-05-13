<template>
    <div class="help_father">
      <div class="help_father_left">
        <ul>
          <li class="help_everyone"><router-link to="/help/understand" active-class = "num2">了解晔枫</router-link></li>
          <li class="help_everyone" ><router-link to="/help/joinus" active-class = "num2">加入晔枫</router-link></li>
          <li class="help_everyone" ><router-link to="/help/problem" active-class = "num2">常见问题</router-link></li>
          <li class="help_everyone"  ><router-link to="/help/agreement" active-class = "num2">用户协议</router-link></li>
          <li class="help_everyone"  ><router-link to="/help/disclaimer" active-class = "num2">免责声明</router-link></li>
          <li class="help_everyone"  ><router-link to="/help/privacy" active-class = "num2">隐私策略</router-link></li>
        </ul>
      </div>
      <div class="help_father_right">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "B_dm_helpcentre"
    }
</script>

<style scoped>
  .help_father{
    width: 1200px;
    margin: auto;
    margin-top: 20px;
  }
  .help_father_left{
    width: 262px;
    /*height: 360px;*/
    background-color: white;
    margin-right: 20px;
    float: left;
  }
  .help_everyone{
    width: 262px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    margin-bottom: 0px !important;
  }
  .help_father_right{
    float: left;
  }
  .num2{
    display: inline-block;
    height: 60px;
    width: 257px;

    border-left: 5px solid red;
    position: relative;
    float: left;
  }



</style>
