<template>
    <div class="help_father">
      <div class="help_father_left">
        <ul>
          <router-link to="/help/understand"><li class="help_everyone">了解晔枫</li></router-link>
          <router-link to="/help/joinus"><li class="help_everyone">加入晔枫</li></router-link>
          <router-link to="/help/problem"><li class="help_everyone">常见问题</li></router-link>
          <router-link to="/"><li class="help_everyone">用户协议</li></router-link>
          <router-link to="/"><li class="help_everyone">免责声明</li></router-link>
          <router-link to="/"><li class="help_everyone">隐私策略</li></router-link>
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
    height: 360px;
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
  }
  .help_father_right{
    float: left;
  }

</style>
