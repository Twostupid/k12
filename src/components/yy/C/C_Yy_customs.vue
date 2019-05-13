<template>
    <div>
      <transition name="my">
      <el-alert
        title='请输入兑换码'
        type="error"
        show-icon class="tan" v-show="flay">
      </el-alert>
      </transition>
        <transition name="my">
      <el-alert
        title='兑换码错误'
        type="error"
        show-icon class="tan" v-show="boor">
      </el-alert>
      </transition>
      <div class="wenzi">尊敬的用户,请输入兑换码后，点击确认查询:</div>
      <div class="inpus"  >
        <el-input placeholder="请输入内容" v-model="msg"  class="inpuss">
<!--          <template slot="append"  style="background-color: red">兑换</template>-->

        </el-input>
        <el-button type="danger" class="ds" @click="huan">兑换</el-button>
      </div>
      <h2>兑换记录</h2>
      <div class="shu">
        <span>兑换劵</span>
        <span>兑换时间</span>
        <span>详情</span>

      </div>
      <div class="shu1" v-show="flag" v-for="shuju in arr">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div class="shu3" v-show="!flag">
        暂无数据
      </div>
      </div>
</template>

<script>
    export default {
        name: "C_Yy_customs",
        data() {
            return {
                msg: "",
              flay:false,
              boor:false,
              arr:[],
              flag:false

            }
        },
        component: {},
      methods:{
          huan(){
            if(this.msg==0){
              this.flay=true
              this.time()
            }else{
              console.log(123)
              this.boor=true
              this.time()
              //进行对兑换码进行验证
              //成功后没写 不知道啥样
              // if(this.msg==){
              //
              // }

            }

          },
        time(){
          let times=setInterval(() => {
            this.flay=false
            this.flay=boor;
            clearInterval(times);
            //此时的this指向是该vue组件，不管在哪个地方使用，指向都是该vue组件。
          }, 3000)
        },

      },
      mounted() {
      //    判断是否有数据

        if(this.arr!=0){
          //   this.flag=true
        }
      }
    }
</script>

<style scoped>
.inpus{
  width: 340px;
  margin-top: 20px  ;
  margin-left: 30px;


}
.inpuss{
  box-shadow: #ccc 0px 0px 20px;
}
.wenzi{
  font-size: 18px;
  margin-top: 40px;
  margin-left: 30px;
 }
  .ds{
    position: relative;
    top: -40px;
    left: 270px;
    border-radius: 0 5px 5px 0;
  }
  .tan{
    width: 300px;
    line-height: 30px;
    margin: auto;
    position: fixed;
    top: 70px;
    left: 50%;
    margin-left: -150px;
  }
.v-enter, .v-leave-to{
  opacity: 0;
  transform:translateX(500px);
}
.v-enter-active, .v-leave-active{
  transition:all .3s;

}
.my-enter, .my-leave-to{
  opacity: 0;
  transform:translateY(-200px);
  color: pink;
}
.my-enter-active, .my-leave-active{
  transition:all 1.3s;

}
h2{
  font-size: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
}
.shu{
  width: 910px;
  height: 60px;
  margin: 0 auto;
  border-top:1px solid gainsboro ;
  border-bottom:1px solid gainsboro ;

}
.shu3{
  width: 910px;
  height: 60px;
  margin: 0 auto;
  text-align: center;
  line-height: 60px;
  border-bottom:1px solid gainsboro ;

}
  .shu span{
    display: inline-block;
    width: 300px;
    height: 60px;
    font-size: 16px;
    line-height: 60px;
    text-align: center;
  }
  .shu1{
    width: 910px;
    height: 60px;
    margin: 0 auto;
    border-bottom:1px solid gainsboro ;

  }
.shu1 span{
  display: inline-block;
  width: 300px;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  text-align: center;
}
</style>
