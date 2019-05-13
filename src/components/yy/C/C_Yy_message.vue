<template>
    <div>
      <div class="box">
          <span class="wen">您好,</span><span class="wens">(ID:{{msg}})</span>

      </div>
      <div class="box1">
        <span class="wen1">您的账户账号：</span>
        <span class="wen3">{{monry}}</span>
        <span class="wen1">晔枫币</span>
      </div>
      <button type="button" class="btn btn-danger buttons">充值</button>
    </div>
</template>

<script>
    export default {
        name: "C_Yy_message",
        data() {
            return {
                msg: "1125232264876265472",
              monry:'0.00'
            }
        },
        component: {}
    }
</script>

<style scoped>
  .box{
    margin: 25px;
  }
.wen{
  font-size: 20px;
}
  .wens{
    font-size: 17px;
    margin-left: 10px;
  }
  .box1{
    margin: 25px;
    /*margin-top: 10px;*/
  }
  .wen1{
    font-size: 18px;
    color: #606266;
  }
  .wen3{
    font-size: 22px;
    color: #cf4038;
    margin: 0 10px 0 10px;
  }
  .buttons{
    width: 70px;
    height: 40px;
    margin-top: 10px;
    border: 1px solid #f56c6c;
    background-color: #f56c6c;
    text-align: center;
    margin-left: 20px;
  }
</style>
