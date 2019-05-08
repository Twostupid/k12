<template>
  <div id="app">

    <router-link to="/building"></router-link>
    <router-view></router-view>

  </div>
</template>
<script>



  export default {
  name: 'App',
    components:{

    },
    mounted(){
      this.$axios.get('/api/course/categories?page=1&size=30').then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }





}
</script>

<style>

</style>
