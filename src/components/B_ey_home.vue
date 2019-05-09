<template>
  <div>
    <div id="myCarousel" class="carousel slide cr_1" data-ride='carousel' data-interval="2000">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active noa" style="width: 30px;height: 2px"></li>
        <li data-target="#myCarousel" data-slide-to="1" class="noa" style="width: 30px;height: 2px"></li>
        <li data-target="#myCarousel" data-slide-to="2" class="noa" style="width: 30px;height: 2px"></li>
        <li data-target="#myCarousel" data-slide-to="3" class="noa" style="width: 30px;height: 2px"></li>
      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="http://yf-code-images.oss-cn-beijing.aliyuncs.com/1108673879162884096" alt="First slide">
        </div>
        <div class="item">
          <img src="http://yf-code-images.oss-cn-beijing.aliyuncs.com/1098788297024606208" alt="Second slide">
        </div>
        <div class="item">
          <img src="http://yf-code-images.oss-cn-beijing.aliyuncs.com/1091516534293139456" alt="Third slide">
        </div>
        <div class="item">
          <img src="http://yf-code-images.oss-cn-beijing.aliyuncs.com/1086203092736806912" alt="for slide">
        </div>

      </div>
      <!-- 轮播（Carousel）导航 -->

      <a id='ccl' class="left carousel-control ccl" href="#myCarousel" role="button" data-slide="prev">
        <button type="button" class="el-carousel__arrow el-carousel__arrow--left">
          <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
        </button>
      </a>
      <a id='ccr' class="right carousel-control ccr" href="#myCarousel" role="button" data-slide="next">
        <button type="button" class="el-carousel__arrow el-carousel__arrow--right">
          <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
        </button>
      </a>

    </div>

  </div>
</template>

<script>
  export default {
    name: "B_ey_home",

  }
</script>

<style scoped>

</style>
