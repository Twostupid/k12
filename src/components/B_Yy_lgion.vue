<template>
    <div>
      <!--登录背景图-->
      <div class="bgb">
        <!--登录框-->
        <div class="frame">
          <div class="top">
            <h2>用户注册</h2>
          </div>
          <!--input 框-->
          <div class="shur">


          </div>
          <div>

          </div>

        </div>

    </div>
    </div>
</template>

<script>
    export default {
        name: "T_Yy_lgion",
        data() {
            return {
                msg: ""
            }
        },
        component: {}
    }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  .bgb{
    width: 100%;
    height:652px;
    background-image: url("http://yefengedu.com/static/img/bg_login.d936fa5.png");
    background-repeat: no-repeat;
    position: relative;

  }
  .frame{
    width: 350px;
    height: 365px;
    background-color: #fff;
    margin-left: 67.6667%;
    position: relative;
    top: 20%;


  }
  .top{
    width: 100%;
    height: 60px;
    background-color: red;
    text-align: center;
  }
  .shur{
    margin-top: 45px;
    width: 100%;
    height: 235px;
    background-color: greenyellow;
  }

</style>
