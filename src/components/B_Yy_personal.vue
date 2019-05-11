<template>
    <div class="box">
      <div class="personal">
<!--      左面-->

<div class="left">
    <h3 class="left_one">个人中心</h3>
<!--  图片-->
  <div class="imgs">
    <img :src="url" alt="">
  </div>

  <ul class="left_personal">
     <h2>个人信息</h2>
    <li>
      <router-link to="/personal/datum">完善资料</router-link>
    </li>
    <li>
      <router-link to="/personal/profile" >修改头像</router-link>
    </li>
    <li>
      <router-link to="/personal/address">收货地址</router-link>
    </li>
    <li>
      <router-link to="">我的订单</router-link>
    </li>
    <li>
      <router-link to="">我的课程</router-link>
    </li>
    <li>
      <router-link to="/personal/course">我的课程</router-link>
    </li>

    <li>
      <router-link to="/personal/bps">我的积分</router-link>
      <router-link to="">我的积分</router-link>
    </li>
    <li><router-link to="/personal/grow">我的成长值</router-link></li>
    <li><router-link to="">关卡进度</router-link></li>
    <li><router-link to="">勋章墙</router-link></li>
    <li><router-link to="">课程兑换券</router-link></li>
    <li><router-link to="">我的成长值</router-link></li>
    <li><router-link to="/personal/progress">关卡进度</router-link></li>
    <li><router-link to="/personal/medal">勋章墙</router-link></li>
    <li><router-link to="/personal/course">课程兑换券</router-link></li>
    <li class="juan">
      <router-link to="">关卡兑换券</router-link></li>
    <li><router-link to="">修改密码</router-link></li>
    <h2>账号管理</h2>
    <li><router-link to="">账户信息</router-link></li>
    <li><router-link to="">账户充值</router-link></li>
    <li><router-link to="">充值记录</router-link></li>
    <li><router-link to="">消费计录</router-link></li>
  </ul>
</div>
<!--      右面-->
        <div class="right">
          <router-view></router-view>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "",
      data(){
        return{
          url:"",


        }
      },
      methods:{
          num(){
            this.url=this.$route.query.num
          }

      },
      watch:{
        $route(to,from){

          this.url=this.$route.query.num
        }
      }




    }
</script>

<style scoped>
  .box{
    width: 100%;
  }
  .personal{
    width: 1200px;
    height:830px;
    position: relative;
    left: 50%;
    margin-left: -600px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .left{
    width: 190px;
    height: 829px;
    float: left;
    background-color: white;
  }
  .left_one{
    width: 100%;
    height: 40px;
  }
  .left_one{
    line-height: 20px;
    margin-left: 25px;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  .left_personal h2{
    text-align: center;
    font-size: 1.8rem;
    font-weight: bolder;
    background-color: white;
  }
  .left_personal li{
    height: 34px;
    font-size: 14px;
    text-align: center;
    list-style: none;
  }
  .left_personal li a{
    line-height: 34px;
    color: grey;
    text-decoration: none;
  }
  .left_personal li:hover{
    background-color: #ececec;
  }
  .right{
    width: 970px;
    height: 100%;
    float: left;
    background-color: white;
    margin-left: 30px;
  }
  .juan :after{
    content: "12131";
    width: 41px;
    height: 16px;
    /*margin-left: 40px;*/
    position: absolute;
   color:rgb(0,0,0,0);
    background-size: 100% 100%;
    background-image: url("http://yefengedu.com/static/images/v2.0/img/20190116164838.png");
  }
  .imgs{
    margin: auto;
    width: 150px;
    height: 150px;
   background-image: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1911150647,1930869014&fm=26&gp=0.jpg");
  }
  .imgs img{
    width: 150px;
    height: 150px;
    background-size: 100% 100%;
  }

</style>
