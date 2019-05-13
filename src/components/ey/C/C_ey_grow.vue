<template>
  <div style=" padding: 20px;">
    <p class="hello">您好,15734121521(ID:456789056789056789)</p>
    <p class="balance">您的成长值</p>
    <p class="growvalue">0</p>
    <p class="balance">您的成长记录</p>
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
  </div>
</template>

<script>
    export default {
        name: "C_ey_grow"
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
    border-top:1px solid #ebeef5 ;
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
  .growvalue{
    margin: 20px 0;
    font-size: 18px;
    text-align: center;
    width: 55%;
  }

</style>
