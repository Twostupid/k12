<template>
  <div>
    <div class="box">
    <div class="el-cards">
      <img src="http://yefengedu.com/static/img/base.a8b51c4.png" class="image">
      <div >
        <span data-v-4e9256a8="" class="medal">勋章名称：进阶知识</span>
        <div class="medal-bottom">
          <div>掌握更复杂的程序结构，程序顺序、条件、循环交叉并行，充分理解程序执行步骤，关注细节和准确性，以23块左右的积木完成闯关。</div>
        </div>
      </div>
    </div>
    </div>
    <div class="box">
      <div class="el-cards">
        <img src="http://yefengedu.com/static/img/advanced.b03cd48.png" class="image">
        <div >
          <span data-v-4e9256a8="" class="medal">勋章名称：算法强化</span>
          <div class="medal-bottom">
            <div>熟练掌握了多重嵌套循环以及变量，函数等高阶知识，增强了对于复杂问题的解决能力。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="el-cards">
        <img src="http://yefengedu.com/static/img/strength.23905cb.png" class="image">
        <div >
          <span data-v-4e9256a8="" class="medal">勋章名称：基础知识</span>
          <div class="medal-bottom">
            <div>了解计算机编程基础原理，熟练掌握了图形化编程操作界面，了解顺序、条件、循环三种程序基础结构，能够用15块左右的积木块完成闯关。</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "C_Yy_medal",
    data() {
      return {
        msg: ""
      }
    },
    component: {}
  }
</script>

<style scoped>
  .box{
    width: 300px;
    height: 350px;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 17px;
    float: left;
    border: 1px solid gainsboro;
  }
  .el-cards{
    width: 255px;
    height: 300px;
    /*margin: auto;*/
    margin: 22.5px;
  }
  .el-cards img{
    width: 100%;
    height: 152px;
    background-size: 100% 100%;
  }
  .medal{
    display: block;
    font-size: 16px;
    margin: 15px;
  }
  .medal-bottom{
    margin: 14px;
    font-size: 14px;
  }
</style>
