<template>
  <div style=" padding: 20px;">
    <p class="hello">您好,15734121521(ID:456789056789056789)</p>
    <p class="balance">您的积分余额:<span>0</span></p>
    <template>
      <div style="margin-top: 30px">
        <el-radio-group v-model="radio1">
          <el-radio-button label="兑换积分"><span  @click="bpclick">兑换积分</span></el-radio-button>
          <el-radio-button label="积分记录"></el-radio-button>
          <el-radio-button label="积分兑换记录"></el-radio-button>

        </el-radio-group>
      </div>

    </template>
    <table border="0">
      <tr class="row">
        <th>途径</th>
        <th>时间</th>
        <th>详情</th>

      </tr>
      <tr class="nodata">
        <td colspan="4">
          暂无数据
        </td>
      </tr>
    </table>
    <div class="el-dialog__wrapper" style="z-index: 2004; background-color: rgba(0,0,0,.5); width: 1583px; height:1000px;" v-show="flag">
      <div class="el-dialog el-dialog--center" style="width: 400px; margin-top: 15vh;">
        <div class="el-dialog__header"><span class="el-dialog__title">积分兑换</span>
          <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="close"><i
            class="el-dialog__close el-icon el-icon-close"></i></button>
        </div>
        <div class="el-dialog__body">
          <div class="mark-main el-row">
            <div class="el-col el-col-24" style="margin-bottom: 20px"><span style="color: red;">积分兑换规则 ：</span></div>
            <div class="el-col el-col-24 "><p >100积分可以兑换1晔枫币，1晔枫币同等于1元人民币</p></div>
            <div class="el-col el-col-24 small_wrap"><h3><strong style="font-size: 19px">可兑换积分
              ：</strong><span style="color: #10A6D8;font-size: 19px">0</span></h3></div>
            <div class="el-col el-col-24 small_wrap"><h3><strong style="font-size: 19px">可兑换晔枫币
              ：</strong><span  style="color: #7BAE3F; font-size: 19px">0.00</span></h3></div>
          </div>
        </div>
        <div class="el-dialog__footer"><span class="dialog-footer"><button
                                                                                              disabled="disabled"
                                                                                              type="button"
                                                                                              class="el-button el-button--primary is-disabled"><!---->
          <!----><span>确认兑换</span></button></span></div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "C_ey_bps",
    data() {
      return {
        radio1: '积分记录',
        flag:false,
        tableData: [{
          way: '',
          time: '',
          details: ''
        }]
      }
    },
    methods:{
      bpclick(){
        this.flag=true;
        console.log("lallal");
      },
      close(){
        this.flag=false;
      }
    }


  }
</script>

<style scoped>
  .hello {
    color: #333;
    font-size: 18px;
    margin-bottom: 30px;

  }

  .balance {
    font-size: 18px;
    color: #606266;
  }

  .balance span {
    color: red;
    margin-left: 20px;
    font-weight: 800;

  }

  table {
    margin-top: 20px;
    width: 100%
  }

  .row {
    height: 48px;
    border-bottom: 1px solid #ebeef5;
    line-height: 48px;
  }

  .row th {
    font-size: 15px;
    color: #909399;
    text-align: center;

  }

  .nodata {
    font-size: 15px;
    height: 48px;
    border-bottom: 1px solid #ebeef5;
    line-height: 48px;
    text-align: center;
    color: #909399;
  }
  .el-dialog__title{
    font-weight: 800;
  }
  .small_wrap{
    border: 1px dotted red;
    border-radius: 4px;
    margin-bottom: 10px;

    padding: 13px 15px;
  }

</style>
