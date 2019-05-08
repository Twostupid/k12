<template>
    <div>
      <!--登录背景图-->
      <div class="bgb">
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
                <button class="haoma">获取验证号码</button>
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
              name:'',
              pass:''
            }
        },
      methods:{
        resiger(){
          console.log(this.name,this.pass)
          //正则判断号码
          function codeVerification(phone){
            let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
            return phoneCodeVerification.test(phone);
          }
          if(!codeVerification(this.name)){
            // alert('请检查手机号');
            window.alert = function(str)
            {
              var shield = document.createElement("DIV");
              shield.id = "shield";
              shield.style.position = "absolute";
              shield.style.left = "0px";
              shield.style.top = "0px";
              shield.style.width = "100%";
              shield.style.height = document.body.scrollHeight+"px";
//弹出对话框时的背景颜色
              shield.style.background = "#fff";
              shield.style.textAlign = "center";
              shield.style.zIndex = "25";
//背景透明 IE有效
//shield.style.filter = "alpha(opacity=0)";
              var alertFram = document.createElement("DIV");
              alertFram.id="alertFram";
              alertFram.style.position = "absolute";
              alertFram.style.left = "50%";
              alertFram.style.top = "50%";
              alertFram.style.marginLeft = "-225px";
              alertFram.style.marginTop = "-75px";
              alertFram.style.width = "450px";
              alertFram.style.height = "150px";
              alertFram.style.background = "#ff0000";
              alertFram.style.textAlign = "center";
              alertFram.style.lineHeight = "150px";
              alertFram.style.zIndex = "300";
              strHtml = "<ul style=\"list-style:none;margin:0px;padding:0px;width:100%\">\n";
              strHtml += " <li style=\"background:#DD828D;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;height:25px;line-height:25px;border:1px solid #F9CADE;\">[自定义提示]</li>\n";
              strHtml += " <li style=\"background:#fff;text-align:center;font-size:12px;height:120px;line-height:120px;border-left:1px solid #F9CADE;border-right:1px solid #F9CADE;\">"+str+"</li>\n";
              strHtml += " <li style=\"background:#FDEEF4;text-align:center;font-weight:bold;height:25px;line-height:25px; border:1px solid #F9CADE;\"><input type=\"button\" value=\"确 定\" onclick=\"doOk()\" /></li>\n";
              strHtml += "</ul>\n";
              alertFram.innerHTML = strHtml;
              document.body.appendChild(alertFram);
              document.body.appendChild(shield);
              var ad = setInterval("doAlpha()",5);
              this.doOk = function(){
                alertFram.style.display = "none";
                shield.style.display = "none";
              }
              alertFram.focus();
              document.body.onselectstart = function(){return false;};
            }
            return false;
          }
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

  .haoma{
    position: absolute;
    width: 30%;
    line-height: 37px;
    border: none;
    background: #E51C23;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    right: 7%;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    outline: none;
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
    /*padding: 0 10px;*/
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

</style>
