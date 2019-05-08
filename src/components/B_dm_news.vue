<template>
    <div class="news_all">
      <div class="news_left">
        <div class="news_list"></div>
        <div class="news_page"></div>
      </div>
      <div class="news_right"></div>
    </div>
</template>

<script>
    export default {
        name: "B_dm_news",
        data(){
            return{
              list:""
            }
        },
        methods:{
          getdata(){
            this.$axios.get('/users/course/categories?page=1&size=30').then(res => {
              console.log(res.data)
            }).catch(err => {
              console.log(err)
            })

          }
        },
      mounted(){
        // this.getdata();
      }
    }
</script>

<style scoped>

</style>
