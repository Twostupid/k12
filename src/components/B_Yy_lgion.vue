<template>
    <div>
      <!--登录背景图-->
      <div class="bgb">
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
        <!--登录框-->
        <div class="frame">
          <div class="top">
            <div class="xian"> <h2>用户注册</h2></div>
          </div>
          <!--input 框-->
          <div class="shur">
            <ul class="verify">
              <li>
                <input type="text" placeholder="手机号码" v-model="name">
              </li>
              <li>
                <input class="tops" type="text" placeholder="验证码" v-model="pass">
<!--                使用三木判断样式-->
                <button class="haomeds" :class="isok?haomed:haomas"  :disabled="!isok" @click="haoma">{{shabi}}</button>

              </li>
            </ul>
            <!--          用户须知-->
            <div class="kehu">
              <input  type="checkbox" checked="checked" id="check-this">
              同意 <a href="">用户协议</a> 才可以注册
            </div>
<!--      点击事件注册annu-->
          <div class="nub" @click="resiger">
            注册
          </div>
<!--            已用账号-->
            <div class="deng">
              已经有账号,去
              <router-link to="login">登录</router-link>
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
              haomed:"haomed",
              haomas:"haomas",
              name:'',
              pass:'',
              ming:"",
              boor:false,
              mings:'',
              isok:true,
              flay:false,
              shabi:'获取验证码',
              banban:false,
              biubiu:false
            }
        },
      methods:{
        //  注册时用户电话号判断
        resiger(){
          // console.log(this.name,this.pass)
          //正则判断号码格式
          function codeVerification(phone){
            let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
            return phoneCodeVerification.test(phone);
          }
          if(!codeVerification(this.name)){
            this.ming="请检查手机号";
            this.boor=true
          this.time()
          }else{


            //判断号码是否重复f返回true
            //axios 接口假的 /api 以解决跨域问题

            //   this.$axios.post('/api/v2/movie/top250').then(res => {
            //     console.log(res)
            //   }).catch(err => {
            //     console.log(err)
            //   })
            // }

            this.banban=true;
            if(this.biubiu){
            //  进行判断验证码是否正确
              //axios 接口假的 /api 以解决跨域问题
              //   this.$axios.post('/api/v2/movie/top250').then(res => {
              //     console.log(res)
              //   }).catch(err => {
              //     console.log(err)
              //   })
              // }

            //  返回true跳转登录页面


            }else{
              this.ming="请获取验证码";
              this.boor=true;
              this.time();
            }

          }
        },
        //  点击验证后
        haoma(){
          //如果号码未注册返回true进行获取验证
          if(this.banban){
            this.biubiu=true
          this.mings="验证码已经发送到"+this.name+"的手机上,请在分钟完成操作"
          this.flay=true;
          this.isok=false
          this.time()
          //60秒后从新获取
          let num=60
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
          }else{
            this.ming="请检查手机号";
            this.boor=true
            this.time()
          }

        },
        time(){
          let times=setInterval(() => {
            this.boor=false
            this.flay=false
            clearInterval(times);
            //此时的this指向是该vue组件，不管在哪个地方使用，指向都是该vue组件。
          }, 3000)
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
    height: 375px;
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
  .xian h2{
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
  haomas{
    background-color: greenyellow;
  }
  .haomeds{
    position: absolute;
    width: 30%;
    line-height: 37px;
    border: none;

    font-size: 14px;
    text-align: center;
    color: #ffffff;
    right: 7%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    outline: none;
  }
  .haomed{
    background: #E51C23;
  }
  .kehu{
    width: 100%;
    height: 19px;
   margin-left: 50px;
    font-size: 13px;
    color: #606266;
    margin-bottom: 20px;
  }
  .kehu a{
    color: red;
    text-decoration: none;
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
  .deng{

    width: 100%;
    margin-top: 20px;
    font-size: 14px;
    margin-bottom: 20px;
    text-align: center;
    color: #38adff;
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
