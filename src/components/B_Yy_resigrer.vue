<template>
  <div>
    <!--      登录背景图-->
    <div class="bgb">
      <!--        登录框-->
      <div class="frame">
        <div class="top">
          <div class="xian"><span>登录平台</span></div>
        </div>
        <!--          input 框-->
        <div class="shur">
          <ul class="verify">
            <li>
              <input type="text" placeholder="手机号码">
            </li>
            <li>
              <input v-if="flag" class="tops" type="text" placeholder="密码">
              <input v-else class="tops" type="text" placeholder="验证码">

              <button v-if="!flag" class="haoma">获取验证号码</button>
            </li>
          </ul>
<div class="yan">
<a href="" class="yan" @click.prevent="flag=!flag"> 验证码登录</a>
</div>
          <!--      点击事件注册annu-->
          <div class="nub">
            登录
          </div>
          <!--            已用账号-->
          <div class="deng">
            <router-link to="register">注册</router-link>
            <router-link to="forget" id="wang_i">忘记密码？</router-link>
          </div>
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
        msg: "",
        flag:true
      }
    },
    component: {}
  }
</script>

<style scoped>
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
    text-align: center;
  }
  .shur{
    margin-top: 45px;
    width: 100%;
    height: 235px;
  }

  .xian{
    width: 200px;
    height: 100%;
    margin: 0 auto;
    line-height: 60px;
    border-bottom: 3px solid #38adff;
  }
  .xian span{
    color: #303133;
    font-size: 20px;
  }
  .verify{
    width: 100%;
    height: 101px;
    /*background-color: red;*/
    list-style: none;
  }
  .verify li{
    width: 100%;
    height: 38px;
    margin-top: 20px;
    text-align: center;
    /*background-color: #42b983;*/
  }
  .verify li input{
    width: 80%;
    padding: 10px;
    line-height: 1.2;
    font-size: 14px;
    color: #666666;

    border-radius: 3px;
    border: 1px solid #f1f1f1;
  }

  .haoma{
    position: absolute;
    width: 30%;
    line-height: 37px;
    border: none;
    background: #E51C23;
    font-size: 14px;
    text-align: center;
    color: #ffffff;

    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    outline: none;
  }
  .nub{
    margin: 0 auto;
    width: 80%;
    line-height: 35px;
    text-align: center;
    background-color: #38adff;
    font-size: 18px;
    color: #ffffff;
    border-radius: 5px;
  }
  .yan{
    margin-bottom: 10px;
    margin-left: 20px;
    text-decoration: none;
    color: #38adff;
  }
  .deng{
    width:100%;
    font-size: 14px;
    margin-top: 20px;
    text-decoration:none;
    margin-left: 40px;
  }
  .deng a{
    text-decoration:none;
    color:#38adff ;
  }
  #wang_i{
    margin-left: 170px;
    color: red;
  }

</style>
