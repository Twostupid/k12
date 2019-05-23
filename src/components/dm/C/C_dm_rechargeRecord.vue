<template>
  <div class="block">

    <table class="table table-striped">
      <tr class="active">
        <td>发生时间</td>
        <td>消费金额</td>
        <td>消费商品</td>
      </tr>
      <tr v-for="item in list">
        <td class="active">{{item.id}}</td>
        <td class="active">{{item.status}}</td>
        <td class="active">{{item.name}}</td>
      </tr>
    </table>


    <div class="numblock">
      <span>共 {{count}} 条</span>&nbsp;
      <div style="display: inline-block">
        <select style="width: 40px; height: 23px">
          <option value="10" @click="jumppage(1,10)">10</option>
          <option value="20" @click="jumppage(1,20)">20</option>
          <option value="50" @click="jumppage(1,30)">30</option>
        </select>
        &nbsp;
      </div>
      <button @click="jumppage(1,10)" class="glyphicon glyphicon-menu-left" style="margin-top: 17px"></button>
      <button v-for="item in pagenumb" @click="jumppage(item,10)">&nbsp;&nbsp;&nbsp;{{item}}&nbsp;&nbsp;&nbsp;</button>
      <button @click="jumppage(2,10)" class="glyphicon glyphicon-menu-right" style="margin-top: 17px"></button>
      <div class="goto" style="display: inline-block">
        前往&nbsp;&nbsp;<input type="text" @input="jumppage(pagenow,10)" style="width: 30px"/>&nbsp;&nbsp;页
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "C_dm_rechargeRecord",
      data(){
        return{
          list:"",
          count:"",
          pagenumb:'',
          pagesize:10,
          pagenow: "1",

        }
      },
      methods:{
        getdata(){
          // this.$axios.get('/api/course/categories').then(res=> {
          //   let dataone = res.data;
          //   this.pagenumb = Number(dataone.data.length)/this.pagesize;
          //   // console.log(dataone.data);
          // })
        },
        jumppage(a,b){
          // if (a==1){
          //   this.pagenow--;
          // }else if (a==2){
          //   this.pagenow++;
          // }
          // this.$axios.get('/api/course/categories?page='+this.pagenow+'&size='+this.pagesize+'').then(res=>{
            // console.log(res./**/data.data);
          // })
        },
      },
      mounted(){
        this.getdata();
        this.jumppage()
      }
    }
</script>

<style scoped>
  .block{
    padding: 20px;
    width: 100%;
    text-align: center;
  }
  .numblock{
    margin: auto;
    width: 500px;
    text-align: center;
  }
</style>
