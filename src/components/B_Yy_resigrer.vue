<template>
  <div>
    <!--      登录背景图-->
    <div class="bgb">
<!--      弹出框-->
          <transition name="my">
      <div v-show="boor"  class="tan">
        <span class="glyphicon glyphicon-remove-sign hs" ><span class="zi">{{msgs}}</span></span>
      </div>
          </transition>
      <!--        登录框-->
      <div class="frame">
        <div class="top">
          <div class="xian"><span>登录平台</span></div>
        </div>
        <!--          input 框-->
        <div class="shur">
          <ul class="verify">
            <li>
              <input type="text" placeholder="手机号码" v-model="name">

            </li>
            <li>
              <input v-if="flag" class="tops" type="text" placeholder="密码" v-model="pwss">
              <input v-else class="tops" type="text" placeholder="验证码" v-model="pwss">

              <button  v-if="!flag" class="haomeds" :class="isok?haomas:haomed"  :disabled="!isok" @click="disw">{{shabi}}</button>
            </li>
          </ul>
<div class="yan">
<a href="" class="yan" @click.prevent="flag=!flag"> 验证码登录</a>

</div>
          <!--      点击事件登录annu-->
          <div class="nub" @click="logins">
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
        flag:true,
        name:'',
        pwss:'',
        boor:false,
        msgs:'',
        isok:true,
        haomed:"haomed",
        haomas:"haomas",
        shabi:'验证码登录'
      }
    },

    component: {},
    methods:{

      // 登录注册
      logins(){
        //判断电话号码
        function codeVerification(phone){
          let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
          return phoneCodeVerification.test(phone);
        }
        //判断密码账号不为空
        console.log(this.pwss)
        if(!codeVerification(this.name)||this.pwss==0){

        this.boor=true;
          this.msgs='账号验证码不能为空'
          this.time()
        }else{
        //  数据库请求 判断名字是否注册
        //  如果没注册返回false
        //   this.boor=true;
        //   this.msgs='用户未注册'
        //   this.time()
        //  请求数据库 如果用户纯在 进行判断密码是否正确
        //     this.boor=true;
        //     this.msgs=''
        //     this.time()
        //登录成功后
        //  給首页传值 进行切换组件 并且跳转
          window.location.href="/homep"




        }
      },
      time(){
        let times=setInterval(() => {
          this.boor=false;
          // this.flay=false
          clearInterval(times);
          //此时的this指向是该vue组件，不管在哪个地方使用，指向都是该vue组件。
        }, 3000)
      },
    //  倒计时
      disw(){
        console.log(123)
        let num=60
        this.isok=false
             let times=setInterval(() => {
               num--
               this.shabi="重新发送 ("+num+")"
               if(num==0){
                 clearInterval(times);
                 this.flay=false;
                 this.isok=true
                 this.shabi='获取验证码'
               }

               //此时的this指向是该vue组件，不管在哪个地方使用，指向都是该vue组件。
             }, 1000)
      }




    },
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
    right: 10%;
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
  .tan{

    width: 350px;
    height: 45px;
    background-color: red;
    opacity: 0.5;
    position: absolute;
    top: -45px;
    left: 50%;
    margin-left:-175px;
    z-index: 100;

  }
  .hs{
    line-height: 44px;
    font-size: 14px;
    color: white;
    margin-left: 40px;
  }
  .zi{
    margin-left: 10px;
  }
  .v-enter, .v-leave-to{
    opacity: 0;
    transform:translateX(500px);
  }
  .v-enter-active, .v-leave-active{
    transition:all .3s;

  }
  .my-enter, .my-leave-to{
    opacity: 0;
    transform:translateY(-200px);
    color: pink;
  }
  .my-enter-active, .my-leave-active{
    transition:all 1.3s;

  }
  haomas{

    background: #E51C23;
  }
  .haomeds{
    position: absolute;
    width: 30%;
    line-height: 37px;
    border: none;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    background: #E51C23;
    right: 10%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    outline: none;
  }
  .haomed{
    background-color: gainsboro;
  }
  .haos{
    width: 450px;
    height: 40px;
    background-color: greenyellow;
    opacity: 0.5;
    position: absolute;
    top: -40px;
    left: 50%;
    margin-left:-175px;
    z-index: 10;
  }
  .diss{
    line-height: 40px;
    font-size: 14px;
    color: black;
    margin-left: 40px;

  }
  .zis{
    margin-left: 10px;
  }

</style>




