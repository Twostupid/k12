<template>
  <div class="wrap">

    <div data-v-002e6e64="" id="gameProgress">
      <div class="my-box-card box-card-primary">
        <div class="my-box-header"><i class="fa fa-dashboard"></i> <span>概要</span></div>
        <div class="my-box-body">
          <div class="el-row" style="margin-left: -10px; margin-right: -10px;">
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <div class="box-view"><p>课程数量</p>
                <h2>6</h2></div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <div class="box-view"><p>总关卡</p>
                <h2>69</h2></div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <div class="box-view"><p>已过关卡</p>
                <h2>0</h2></div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <div class="box-view"><p>未过关卡</p>
                <h2>0</h2></div>
            </div>
          </div>
          <br>
          <div class="el-row" style="margin-left: -10px; margin-right: -10px;">
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <div class="box-view"><p>未做关卡</p>
                <h2>69</h2></div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <div class="box-view"><p>过关速度</p>
                <h2>0.00秒/关</h2></div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <div class="box-view"><p>正确率</p>
                <h2>0%</h2></div>
            </div>
            <div class="el-col el-col-6" style="padding-left: 10px; padding-right: 10px;">
              <div class="box-view"><p>累计耗时</p>
                <h2>0.00小时</h2></div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="el-row" style="margin-left: -10px; margin-right: -10px;">
        <div class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
          <div class="my-box-card  box-card-success">
            <div class="my-box-header"><i class="fa fa-pie-chart"></i> <span>完成度</span></div>
            <div class=" my-box-body">
              <div id="radar" class="chart" _echarts_instance_="ec_1557712574627" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                <div id = 'mychart' style="position: relative; overflow: hidden; width: 398px; height: 400px; padding: 0px; margin: 0px; border-width: 0px;">

                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
          <div class="my-box-card  box-card-warning">
            <div class="my-box-header"><i class="fa fa-bar-chart"></i> <span>对比图</span></div>
            <div class=" my-box-body">
              <div id="pillar" class="chart" _echarts_instance_="ec_1557712574628" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                <div id="chart_1" style="position: relative; overflow: hidden; width: 398px; height: 400px; padding: 0px; margin: 0px; border-width: 0px;">

                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: "C_Yy_progress",
    data() {
      return {
        msg: ""
      }
    },
    component: {},
    mounted(){
      this.drawLine();
      this.drawLine_1()
    },
    methods: {
      drawLine_1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart_1 = this.$echarts.init(document.getElementById('chart_1'))
        // 绘制图表
        myChart_1.setOption({
       tooltip:{
         show:true,
         islandFormatter: '{a} < br/>{b} : {c}',

       },

          xAxis: {
            data: ["过关速度","正确率"]
          },
          yAxis : [
            {
              type : 'value'
            }
          ],
          series: [{
            name: '正确率',
            type: 'bar',
            data: [20, 80],
            barWidth : 60,
          }]
        });
      },

      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mychart'))
        // 绘制图表
        myChart.setOption({
          legend: {

            x : 'center',
            data:['已过关卡','未过关卡','未做关卡']
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {

            feature : {



              magicType : {

                type: ['pie', 'funnel'],
                option: {
                  funnel: {
                    x: '25%',
                    width: '50%',
                    funnelAlign: 'left',
                    max: 1548
                  }
                }
              },

            }
          },

          series : [
            {
              name:'访问来源',
              type:'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:0, name:'已过关卡'},
                {value:0, name:'未过关卡'},
                {value:100, name:'未做关卡'},

              ]
            }
          ]
        });
      }
    }

  }
</script>

<style scoped>
  .wrap{
    padding: 30px!important;
  }
  #gameProgress .my-box-card {
    font-size: 14px;
    border-radius: 4px;
    overflow: hidden;
  }

  #gameProgress .box-card-primary {
    background-color: #409EFF;
  }
  #gameProgress .my-box-card {
    font-size: 14px;
    border-radius: 4px;
    overflow: hidden;
  }
  #gameProgress .box-card-primary {
    background-color: #409EFF;
  }
  #gameProgress .my-box-card .my-box-header {
    padding: 10px 20px;
    color: white;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #gameProgress .my-box-card .my-box-body {
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    background-color: white;
    padding: 20px;
  }
  #gameProgress .box-card-primary .my-box-body {
    border: solid 1px #409EFF;
  }
  element.style {
    padding-left: 10px;
    padding-right: 10px;
  }
  .el-col-6 {
    width: 25%;
  }
  [class*=el-col-] {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  #gameProgress .box-card-primary .box-view {
    border: solid 1px #DCDFE6;
    padding: 20px;
    border-radius: 4px;
    overflow: hidden;
  }
  #gameProgress .box-card-primary .box-view p {
    color: #909399;
    text-align: center;
  }
  #gameProgress .box-card-primary .box-view h2 {
    color: #606266;
    margin-top: 10px;
    text-align: center;
   font-size: 16px;
    font-weight: 800;
  }
  #gameProgress .my-box-card {
    font-size: 14px;
    border-radius: 4px;
    overflow: hidden;
  }
  #gameProgress .box-card-success {
    background-color: #67C23A;
  }

  #gameProgress .my-box-card .my-box-header {
    padding: 10px 20px;
    color: white;
  }

  #gameProgress .my-box-card .my-box-body {
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    background-color: white;
    padding: 20px;
  }

  #gameProgress .box-card-success .my-box-body {
    border: solid 1px #67C23A;
  }
  #gameProgress .my-box-card {
    font-size: 14px;
    border-radius: 4px;
    overflow: hidden;
  }
  #gameProgress .box-card-warning {
    background-color: #E6A23C;
  }
  #gameProgress .my-box-card .my-box-body {
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    background-color: white;
    padding: 20px;
  }
  #gameProgress .box-card-warning .my-box-body {
    border: solid 1px #E6A23C;
  }
</style>
