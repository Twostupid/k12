<template>
    <div class="news_all">
      <div class="news_left">
        <div class="news_list">
          <router-link to="/">
            <div class="news_list_everyone" v-for="item in list">
              <img v-bind:src="item.cover" class="news_list_everyone_img" alt="">
              <div class="news_list_everyone_main">
                <p class="everyone_main_title" style="font-size: 1.5em">{{item.name}}</p>
                <span>{{item.time|moment}}</span>
              </div>
            </div>
          </router-link>

        </div>
        <div class="pager">
          <span>共 {{count}} 条</span>&nbsp;
          <div>
            <select >
              <option value="10" @click="jumppage(1,10)">10</option>
              <option value="20" @click="jumppage(1,20)">20</option>
              <option value="50" @click="jumppage(1,30)">30</option>
            </select>
            &nbsp;
          </div>
          <a @click="jumppage(1,10)" class="glyphicon glyphicon-menu-left" style="margin-top: 17px"></a>
          <span v-for="item in pagenumb" @click="jumppage(item,10)">{{item}}</span>
          <a @click="jumppage(2,10)" class="glyphicon glyphicon-menu-right" style="margin-top: 17px"></a>
          <div class="goto">
            前往&nbsp;&nbsp;<input type="text" @input="jumppage(pagenow,10)"/>&nbsp;&nbsp;页
          </div>
          </div>
        </div>
      <div class="news_right">
        <img src="http://yefengedu.com/static/img/banner.3eee7fe.jpg" alt="">
        <div class="news_right_title">
          热门资讯
        </div>
        <div class="news_right_new" >
          <router-link to="/">
            <div class="news_right_new_small" v-for="(item, index) in list" v-if='index<5'>
              <div class="new_small_father">
                <span class="small_col">{{index+1}}</span>
                <span class="small_title">{{item.name}}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "B_dm_news",
        data(){
            return{
              list:"",
              pagenumb:'',
              pagesize:10,
              count:"",
              pagenow:'1'//当前第几页
            }
        },
        methods:{
          getdata(){
            this.$axios.get('/api/course/categories').then(res=> {
              let dataone = res.data;
              // console.log(dataone);
              this.pagenumb = Number(dataone.data.length)/this.pagesize;
              this.count = dataone.data.length
            })
          },
          jumppage(a,b){
            if (a==1){
              this.pagenow--;
            }else if (a==2){
              this.pagenow++;
            }
            this.$axios.get('/api/course/categories?page='+this.pagenow+'&size='+this.pagesize+'').then(res=>{
              console.log(res.data.data);
              this.list = res.data.data
            })
          },
        },
      mounted(){
        this.getdata();
        this.jumppage();
      }
    }
</script>

<style scoped>
  .news_all{
    width: 1200px;
    margin: auto;
    margin-top: 20px;
  }
  .news_list_everyone{
    width: 900px;
    height: 200px;
    padding: 25px;
    box-sizing: border-box;
    background-color: white;
    border-bottom: 1px solid #b2b2b2;
    color: #332c2f;
  }
  .news_left{
    width: 900px;
    display: inline-block;
    float: left;
    margin-right: 20px;
  }
  .news_list_everyone_img{
    width: 266px;
    height: 150px;
    display: inline-block;
    margin-right: 20px;
    float: left;
  }
  .news_list_everyone_main{
    width: 462px;
    height: 150px;
    float: left;
    display: inline-block;
  }
  .news_list_everyone_main>span{
    display: inline-block;
    margin-top: 20px;
  }
  .everyone_main_title:hover{

    color: #ff2a24;
    transition: all .5s;
  }
  .news_list_everyone_main>span:hover{
    color: #ff2a24;
    transition: all .5s;
  }
  .news_right{
    width: 280px;
    height: 550px;
    background-color: white;
    padding: 25px;
    display: inline-block;
    float: left;
  }
  .news_right>img{
    width: 230px;
    height: 320px;
  }
  .news_right_title{
    width: 230px;
    height: 16px;
    margin-top:25px;
    margin-bottom: 15px;
    font-size: 16px;
    color: #4c5561;
  }
  .news_right_new{
    width: 230px;
    height: 140px;
    border-top: 1px solid gray;
    padding-top: 15px;
  }
  .small_col{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: white;
    background-color: red;
    text-align: center;
    line-height: 20px;
    display: inline-block;
    /*margin-top: -10px;*/
    font-size: 12px;
    float: left;
  }
  .small_title{
    display: inline-block;
    width: 150px;
    height: 20px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 20px;
    font-family: "Tamil MN";
    float: left;
    margin-left: 10px;
    letter-spacing: 2px;
  }
  .new_small_father{
    width: 230px;
    height: 20px;
    margin-bottom: 5px;
    box-sizing: border-box;
  }
  .pager>span,.pager>a,.pager>select,.pager>div{
    float: left;
    margin-left: 10px;
  }

  .pager{
    width: 350px;
    margin: 0 auto;
    margin-top: 10px;
    height: 48px;
    line-height: 48px;
    margin-bottom: 40px;
  }

  .pager input,.pager select{
    height:30px;
    line-height:40px;
    outline:none;
    border:1px solid #888;
    padding:10px;
    box-sizing:border-box;
  }
  .pager input{
    width: 40px;
    height: 30px;
  }
  .pager .goto{
    margin-left: 20px;
  }
  .pager a{
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
  .pager a:hover{
    color: green;
  }
</style>
