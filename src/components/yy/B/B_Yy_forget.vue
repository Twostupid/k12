<template>
  <div>
    <!--登录背景图-->
    <div class="bgb">
      <!--登录框-->
      <!--        弹出框-->
      <transition name="my">
        <div v-show="boor" class="tan">
          <span class="glyphicon glyphicon-remove-sign hs" ><span class="zi">{{ming}}</span></span>
        </div>
      </transition>
      <!--      点击获取号码框-->
      <transition name="my">
        <div v-show="flay" class="haos">
<span class="glyphicon glyphicon-ok-circle diss">
  <span class="zis">{{mings}}</span>
</span>
        </div>
      </transition>
      <div class="frame">
        <div class="top">
          <div class="xian"> <span>重置/找回密码</span></div>
        </div>
        <!--input 框-->
        <div class="shur">
          <ul class="verify">
            <li>
              <input v-if="mima" type="text" placeholder="手机号码" v-model="name">
              <input v-else="mima" type="password" placeholder="设置密码" v-model="num1">
            </li>
            <li>
              <input v-if="mima" class="tops" type="text" placeholder="验证码" v-model="pwss">
              <input v-else="mima" type="password" placeholder="确认密码" v-model="num2">
              <button v-if="diss"  class="haomeds" :class="isok?haomas:haomed"  @click="disw">{{shabi}}</button>
            </li>
          </ul>
          <!--          用户须知-->
          <!--      点击事件注册annu-->
          <div v-if="mima" class="nub" @click="forget">
            下一步
          </div>
          <div v-else="mima" class="nub" @click="forgets">
            完成
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
        boor:false,
        ming:'',
        name:'',
        pwss:'',
        shabi:"获取验证号码",
        haomed:"haomed",
        haomas:"haomas",
        isok:true,
        flay:false,
        mings:'',
        mima:true,
        diss:true,
        num1:'',
        num2:''
      }
    },
    component: {},
    methods:{
      forget(){
        function codeVerification(phone){
          let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
          return phoneCodeVerification.test(phone);
        }
        if(!codeVerification(this.name)||this.pwss==0){
          this.boor=true
          this.ming='请填写完整信息'
          this.time()
        }else{
        //  数据库获取 进行比较 看账号是否祖册
        //   this.boor=true
        //   this.ming='账号未注册'
        //   this.time()

        //  账号存在后进行判断成功 进行验证码
        //进行下一步
          this.mima=false;
          this.diss=false;

        }

      },
      time(){
        let times=setInterval(() => {
          this.boor=false;
          this.flay=false;
          // this.flay=false
          clearInterval(times);
          //此时的this指向是该vue组件，不管在哪个地方使用，指向都是该vue组件。
        }, 3000)
      },
      disw(){
        console.log(123)
        this.flay=true
        this.time()
        this.mings="验证码已经发送到"+this.name+"的手机上,请在分钟完成操作"
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
      },
      //找回密码 完成后
      forgets(){
        console.log(this.num1,this.num2)
        if (this.num1==0||this.num2==0){
          this.boor=true
          this.ming='请填写完整信息'
          this.time()
        }else{
          if(this.num1==this.num2){
          //  密码相同后
            //传值通过电话号码 进行修改密码
          //   this.$axios.post('/api/v2/movie/top250').then(res => {
          //     console.log(res)
          //   }).catch(err => {
          //     console.log(err)
          //   })
          // }


          this.flay=true
            this.time()
            this.mings="修改密码成功";
            let time=setInterval(() => {
              window.location.href="/login"
              clearInterval(time);
              //此时的this指向是该vue组件，不管在哪个地方使用，指向都是该vue组件。
            }, 3000)


          }else{
            this.boor=true
            this.ming='两次密码不同'
            this.time()
          }
        }

      }
    }
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
    line-height: 41px;
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
  .tan{

    width: 350px;
    height: 45px;
    background-color: red;
    opacity: 0.5;
    position: absolute;
    top: -45px;
    left: 50%;
    margin-left:-175px;
    z-index: 10;

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
    top: 50px;
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
