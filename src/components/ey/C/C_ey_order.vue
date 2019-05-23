<template>
  <div class="order_wrap">
    <template>
      <div>
        <el-radio-group v-model="radio1">
          <el-radio-button label="未付款"></el-radio-button>
          <el-radio-button label="已付款"></el-radio-button>
          <el-radio-button label="全部"></el-radio-button>

        </el-radio-group>
      </div>

    </template>
    <table cellspacing="0" cellpadding="0"  border="1" class="twrap" style="width: 929px; border:1px solid #ebeef5 ">

      <thead class="has-gutter">
      <tr class="table_row">
        <th class="">
          <div class="cell">订单编号</div>
        </th>
        <th class="">
          <div class="cell">创建时间</div>
        </th>
        <th class="">
          <div class="cell">订单金额（元）</div>
        </th>
        <th class="">
          <div class="cell">支付信息</div>
        </th>
        <th  class="">
          <div class="cell">订单状态</div>
        </th>

      </tr>
      </thead>
      <tbody>
      <tr style="height: 60px;text-align: center;color: #909399;">
        <td colspan="5">暂无数据</td>

      </tr>
      </tbody>
    </table>
    <template>

      <div class="block">

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="0">
        </el-pagination>
      </div>
    </template>

  </div>
</template>


<script>
  export default {
    name: 'C_ey_order',
    data() {
      return {

        radio1: '全部',
        currentPage4: 4

      };

      },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }


    }
  }
</script>


<style scoped>
  .order_wrap {
    padding: 15px;
  }
  .twrap{
    margin-top: 15px;
  }
  .table_row{
    height: 48px;
  }
  .table_row th{
    text-align: center;
   color: #909399;
    font-size: 14px;
  }
</style>
