<template>
  <div style="background: rgb(247, 243, 243); overflow: hidden; min-height: 117px;">
    <div class="pay-container">
      <div class="head-title">1.选择套餐类型</div>
      <div class="members">
        <a class="member member-gold" v-for="(item,index) in plist" :class="{active:changeOrange==index}" @click="oran(index,item.price)">
        <div class="title">{{item.ptitle}}</div>
        <div class="price"><!----> <em >{{item.price}}</em> 元</div>
          <sapn class="glyphicon glyphicon-ok" aria-hidden="true" style="color:white;z-index: 99999;position: absolute;top: 5px;left: 213px;width: 18px;width: 18px;font-size: 16px"></sapn>
        <div class="desc">{{item.con}}</div>
        </a>
      </div>
      <div class="head-title">2.选择付款方式</div>
      <div role="radiogroup" class="el-radio-group pay-channel"><label
        role="radio" tabindex="0"
        class="el-radio"><span
        class="el-radio__input"><span class="el-radio__inner"></span><input type="radio" tabindex="-1"
                                                                            class="el-radio__original"
                                                                            value="wxpay"></span><span
        class="el-radio__label"><img src="http://yefengedu.com//static/img/wlogo.0980c80.png">微信支付<!----></span></label>
        <label role="radio" tabindex="-1" class="el-radio"><span class="el-radio__input"><span
          class="el-radio__inner"></span><input type="radio" tabindex="-1" class="el-radio__original"
                                                value="alipay"></span><span class="el-radio__label"><img
          src="http://yefengedu.com/static/img/alogo.16d43cd.png">支付宝<!----></span></label></div>
      <div class="head-title">3.确定后付款</div>
      <div class="footer">
        <div class="bill">应付金额：<span class="price"><em
          id="pricePreview">{{price}}</em>元</span>
        </div>
        <button type="button">去付款</button>
      </div>
    </div>
    <div id="wxPayMode" class="mode" style="display: none;">
      <div class="mask"></div>
      <div class="dialog">
        <div class="dialog-heading"><a class="close">×</a></div>
        <div class="dialog-body"><h2>打开微信扫一扫</h2> <img src="">
          <p>支付过程中，请勿刷新或关闭页面</p></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "B_ey_payment",
    data(){
      return{
        plist:[
          {"ptitle":'基础算法',"price":'88',"con":"积木编程基础知识30课时（含教学视频）"},
          {"ptitle":'进阶知识',"price":'388',"con":"积木编程基础知识+进阶知识80课时（含教学视频）"},
          {"ptitle":'算法强化',"price":'888',"con":"积木编程基础+进阶+算法强化140课时（含教学视频）"}
        ],
        changeOrange:'',
        price:''
      }
    },
    created(){
      this.changeOrange= this.$route.query.number;
      this.price=this.plist[this.$route.query.number].price
    },
    methods:{
      oran:function (index,price) {
        this.changeOrange=index
        this.price=price;
      }
    }
  }
</script>

<style scoped>
  .pay-container {
    margin: 20px auto;
    width: 960px;
    /* height: 900px; */
    padding: 10px 40px;
    background: #fff;
  }
  .pay-container .head-title {
    font-size: medium;
    padding: 20px 0;
    margin: 20px 0;
    display: block;
  }
  .pay-container .members {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .pay-container .members .member {
    background: white;
    position: relative;
    cursor: pointer;
    display: block;
    width: 240px;
    height: 270px;
    border: solid 1px #DDDDDD;
    border-radius: 6px;
    text-align: center;
    overflow: hidden;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  .pay-container .members .member .price em {
    font-style: normal;
    font-size: 48px;
    color: #ff470a;
  }
  .pay-container .members .member .title {
    color: #666161;
    font-size: 20px;
    height: 70px;
    line-height: 70px;
  }
  .pay-container .members .member .split{
    height: 1px;
    background-color: #dddddd;
    margin: 30px 20px 10px 20px;
  }
  .pay-container .members .member .desc {
    padding: 0 15px;
    line-height: 1.5;
    color: #666161;
    font-size: 16px;
    text-align: left;
  }
  .pay-container .pay-channel {
    padding-left: 40px;
  }
  .el-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;
  }
  .el-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    outline: 0;
    position: relative;
    display: inline-block;
  }
  .el-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    line-height: 1;
    vertical-align: middle;
  }
  .el-radio, .el-radio__inner, .el-radio__input {
    position: relative;
    display: inline-block;
  }
  .el-radio__inner {
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .el-radio__inner::after {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%) scale(0);
    transform: translate(-50%,-50%) scale(0);
    -webkit-transition: -webkit-transform .15s ease-in;
    transition: -webkit-transform .15s ease-in;
    transition: transform .15s ease-in;
    transition: transform .15s ease-in,-webkit-transform .15s ease-in;
  }
  .el-radio__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }
  .el-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }

  .el-radio, .el-radio--medium.is-bordered  {
    font-size: 14px;
  }
  .pay-container .pay-channel img {
    vertical-align: sub;
    margin-right: 10px;
    height: 32px;
    width: 36px;
    height: 32px;
  }

  img {
    border: none;
  }
  .pay-container .footer {
    color: gray;
    font-size: 14px;
    position: relative;
    height: 100px;
    background-color: white;
  }
  .pay-container .footer .bill {
    left: 0;
    top: 20px;
    position: absolute;
    font-size: 14px;
  }
  .pay-container .footer .bill .price {
    font-style: normal;
    color: #ff470a;

  }
  .pay-container .footer .bill .price em {
    font-style: normal;
    font-size: 48px;
  }
  .pay-container .footer button{
    top: 30px;
    left: 50%;
    width: 200px;
    height: 48px;
    margin-left: -100px;
    position: absolute;
    border: none;
    background-color: #ff470a;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
  .pay-container .members .member.active:after {
    position: absolute;
    top: -10px;
    right: -50px;
    background-color: #ff470a;
    content: '';
    width: 100px;
    height: 50px;
    z-index: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }



  .pay-container .members .member.active {
    border: solid 2px #ff470a;
  }

</style>
