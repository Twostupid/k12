<template>
  <div class="buyPay_father">
    <div class="pay-container">
    <div class="head-title">充值RMB 充值部分的余额不能用于提现</div>
    <div class="members">
      <a class="member member-gold" v-for="(item,index) in list">
        <div class="price" :class="{ active:index==isActive,aaa:index==isActive }" @click="changeValue(index,item.numb)">充值<em >{{item.numb}}</em> <span class="moneyla">元</span></div>
        <span class="glyphicon glyphicon-ok" style="color: #ffffff;font-size:10px;position: absolute; right: 11px; top: -37px;"></span>
      </a>
    </div>
    <div class="head-title">2.选择付款方式</div>
    <div class="el-radio-group pay-channel">
      <label tabindex="0" class="el-radio">
        <span class="el-radio__input">
          <span class="el-radio__inner">
          </span>
          <input type="radio" tabindex="-1" class="el-radio__original" value="wxpay">
        </span>
        <span class="el-radio__label">
          <img src="http://yefengedu.com/static/img/wlogo.0980c80.png" class="payimg">微信支付
        </span></label>
      <label role="radio" tabindex="-1" class="el-radio">
        <span class="el-radio__input">
          <span class="el-radio__inner"></span>
          <input type="radio" tabindex="-1" class="el-radio__original" value="alipay">
        </span>
        <span class="el-radio__label">
          <img src="http://yefengedu.com/static/img/alogo.16d43cd.png" class="payimg">支付宝
        </span>
      </label>
    </div>
    <div class="head-title">3.确定后付款</div>
    <div class="payfooter">
      <div class="bill">应付金额：<em id="pricePreview">{{money}}</em>元</div>
      <button type="button">去付款</button>
    </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: "C_dm_buyPay",
      data(){
        return{
          list:[
            {id:1,numb:"100"},
            {id:2,numb:"150"},
            {id:3,numb:"300"},
            {id:4,numb:"500"},
            {id:5,numb:"800"},
            {id:6,numb:"1000"},
          ],
          isActive:false,
          money:"100"
        }
      },
      methods:{
        changeValue(index,b){
          this.isActive=index;
          this.money = b
        }
      },
    }
</script>

<style scoped>
  .buyPay_father{
    width: 930px;
    padding: 20px;
  }
  .pay-container{
    padding: 10px 40px;
  }
  .head-title{
    font-size: x-large;
    padding: 20px 0;
    display: block;
    /*color: #565c6b;*/
  }
  .member{
    position: relative;
    text-decoration: none;
  }
  .price{
    display: inline-block;
    width: 120px;
    height: 52px;
    color: gray;
    font-size: 14px;
  }
  em{
    font-style: normal;
    font-size: 24px;
    color: #ff470a;
  }
  .price{
    position: relative;
    cursor: pointer;
    display: inline-block;
    /*width: 130px;*/
    line-height: 48px;
    border: solid 1px #DDDDDD;
    border-radius: 6px;
    text-align: center;
    overflow: hidden;
    margin: 0 5px;
  }
  .payimg{
    width: 36px;
    height: 32px;
    margin-right: 10px;
  }
  .bill{
    width: 200px;
    height: 57px;
    font-size: 14px;
  }
  #pricePreview{
    font-size: 48px;
  }
  .payfooter>button{
    display: inline-block;
    width: 200px;
    height: 48px;
    border: none;
    background-color: #ff470a;
    color: white;
    font-size: 18px;
    cursor: pointer;
    float: right;
    margin-top: -50px;
    margin-right: 200px;

  }
  .active::after{
    position: absolute;
    top: -20px;
    right: -50px;
    background-color: #ff470a;
    content: '';
    width: 70px;
    height: 50px;
    z-index: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .aaa{
    border:1px solid #FB5B62;
  }
  .members .member:last-child span{
    right: 7px;
  }
  .moneyla{
    color: #FB5B62;
  }
</style>
