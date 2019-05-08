<template>
  <div>
    <!--登录背景图-->
    <div class="bgb">
      <!--登录框-->
      <div class="frame">
        <div class="top">
          <div class="xian"> <span>重置/找回密码</span></div>
        </div>
        <!--input 框-->
        <div class="shur">
          <ul class="verify">
            <li>
              <input type="text" placeholder="手机号码">
            </li>
            <li>
              <input class="tops" type="text" placeholder="验证码">
              <button class="haoma">获取验证号码</button>
            </li>
          </ul>
          <!--          用户须知-->
          <!--      点击事件注册annu-->
          <div class="nub">
            下一步
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
        msg: ""
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
    height: 355px;
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
    font-size: 20px;
    color: #303133;
  }
  .verify{
    width: 100%;
    height: 101px;
    list-style: none;
    text-align: center;
  }
  .verify li{
    width: 100%;
    height: 38px;
    margin-top: 20px;
  }
  .verify li input{
    width: 80%;
    padding:10px;
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
    right:10%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    outline: none;
  }
  .nub{
    margin: 0 auto;
    width: 80%;
    /*padding: 0 10px;*/
    line-height: 35px;
    text-align: center;
    background-color: #38adff;
    font-size: 18px;
    color: #ffffff;
    border-radius: 5px;
    margin-top: 30px;
  }

</style>
