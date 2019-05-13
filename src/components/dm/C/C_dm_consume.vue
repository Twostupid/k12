<template>
  <div class="block">

    <table class="table table-striped">
      <tr class="active">
        <td>发生时间</td>
        <td>消费金额</td>
        <td>消费商品</td>
      </tr>
      <tr v-for="item in list2">
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
        <a @click="jumppage(1,10)" class="glyphicon glyphicon-menu-left" style="margin-top: 17px"></a>
        <span v-for="item in pagenumb" @click="jumppage(item,10)">&nbsp;&nbsp;&nbsp;{{item}}&nbsp;&nbsp;&nbsp;</span>
        <a @click="jumppage(2,10)" class="glyphicon glyphicon-menu-right" style="margin-top: 17px"></a>
      <div class="goto" style="display: inline-block">
        前往&nbsp;&nbsp;<input type="text" @input="jumppage(pagenow,10)" style="width: 30px"/>&nbsp;&nbsp;页
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "C_dm_consume",
      data(){
        return{
          list:[
            {
              tiem:"2019/01/01",
              money: "20.00",
              name: "1"
            },
            {
              tiem:"2019/01/02",
              money: "20.00",
              name: "2"
            },
            {
              tiem:"2019/01/03",
              money: "20.00",
              name: "3"
            },
            {
              tiem:"2019/01/04",
              money: "20.00",
              name: "4"
            },
            {
              tiem:"2019/01/05",
              money: "20.00",
              name: "5"
            },
            {
              tiem:"2019/01/06",
              money: "20.00",
              name: "6"
            },
            {
              tiem:"2019/01/07",
              money: "20.00",
              name: "7"
            },
            {
              tiem:"2019/01/08",
              money: "20.00",
              name: "8"
            },
            {
              tiem:"2019/01/09",
              money: "20.00",
              name: "9"
            },
            {
              tiem:"2019/01/10",
              money: "20.00",
              name: "10"
            },
            {
              tiem:"2019/01/11",
              money: "20.00",
              name: "11"
            },
            {
              tiem:"2019/01/12",
              money: "20.00",
              name: "12"
            },
            {
              tiem:"2019/01/13",
              money: "20.00",
              name: "13"
            },
            {
              tiem:"2019/01/14",
              money: "20.00",
              name: "14"
            },
            {
              tiem:"2019/01/15",
              money: "20.00",
              name: "15"
            },
            {
              tiem:"2019/01/16",
              money: "20.00",
              name: "16"
            },
            {
              tiem:"2019/01/17",
              money: "20.00",
              name: "17"
            },
            {
              tiem:"2019/01/18",
              money: "20.00",
              name: "18"
            },
            {
              tiem:"2019/01/19",
              money: "20.00",
              name: "19"
            },
            {
              tiem:"2019/01/20",
              money: "20.00",
              name: "20"
            },
            {
              tiem:"2019/01/21",
              money: "20.00",
              name: "21"
            },
            {
              tiem:"2019/01/22",
              money: "20.00",
              name: "22"
            },
            {
              tiem:"2019/01/23",
              money: "20.00",
              name: "23"
            },
            {
              tiem:"2019/01/24",
              money: "20.00",
              name: "24"
            },
            {
              tiem:"2019/01/25",
              money: "20.00",
              name: "25"
            }
          ],
          list2:[],
          count:"",
          pagenumb:'',
          pagesize:10,
          pagenow: "1"
        }
      },
      methods:{
        getdata(){
          this.count = this.list.length;
          this.pagenumb = Math.ceil(parseInt(this.list.length)/parseInt(this.pagesize));
        },
        jumppage(a,b){
          if (a==1){
            this.pagenow--;
          }else if (a==2){
            this.pagenow++;
          }
          this.$axios.get('/api/course/categories?page='+this.pagenow+'&size='+this.pagesize+'').then(res=>{
            this.list2 = res.data.data
          })
        }
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
