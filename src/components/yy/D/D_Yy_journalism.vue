<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "D_Yy_journalism",
        data() {
            return {
                msg: ""
            }
        },
        component: {},
      mounted(){
          console.log(12213)
        let library_id=''
        library_id = this.$route.query.ids;
        console.log(library_id);
        // this.$axios.get('/api/',)
        //   .then(res=> {
        //   let dataone = res.data;
        //   // console.log(dataone);
        //   this.pagenumb = Number(dataone.data.length)/this.pagesize;
        //   this.count = dataone.data.length
        // })

      },
    }
</script>

<style scoped>
</style>
