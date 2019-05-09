<template>
    <div class="news_all">
      <div class="news_left">
        <div class="news_list">
          <router-link to="/">
            <div class="news_list_everyone" v-for="item in list">
              <img v-bind:src="item.cover" class="news_list_everyone_img" alt="">
              <div class="news_list_everyone_main">
                <h4 class="everyone_main_title">{{item.name}}</h4>
                <span>{{item.time|moment}}</span>
              </div>
            </div>
          </router-link>

        </div>
        <div class="pager">
          <span>共  条</span>
          <div>
            <select >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">30</option>
            </select>
          </div>
          <a href=""> < </a>
          <span v-for="item in pagenumb">{{item}}</span>
          <a href=""> > </a>
          <div class="goto">
            前往<input type="text"/>页
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
              pagesize:10
            }
        },
        methods:{
          getdata(){
            this.$axios.get('/api/course/categories?page=1&size=30').then(res => {
              let dataone = res.data;
              this.list = res.data.data
              console.log(res.data.data);
              this.pagenumb = Number(this.list.length)/this.pagesize

            })
          }
        },
      mounted(){
        this.getdata();
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
    width: 600px;
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
    width: 30px;
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
