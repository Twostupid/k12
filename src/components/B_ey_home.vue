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
    <section class="section-1">
      <div class="container">
        <div class="titleContent"><h1 class="text-center tcimp">积木编程</h1></div>
        <p class="text-center-content">
          晔枫积木编程是一套在线闯关游戏类课程，由1500个层层递进的关卡组成，寓教于乐。让孩子在中小学阶段，高效的使用碎片时间，学习计算机编程和数字化技能，为接轨信息奥赛和人工智能打下基础。
        </p>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-6 col-lg-3 text-center"><a href="/app.html#/grade/0"><img
            src="http://yefengedu.com/static/images/v2.0/icon1.png" alt="icon1" class="img-responsive"
            style="height: 182px; margin: auto;"></a>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6 col-lg-3 text-center"><a href="/app.html#/grade/1"><img
            src="http://yefengedu.com/static/images/v2.0/icon2.png" alt="icon2" class="img-responsive"
            style="height: 182px; margin: auto;"></a>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6 col-lg-3 text-center"><a href="/app.html#/grade/2"><img
            src="http://yefengedu.com/static/images/v2.0/icon3.png" alt="icon3" class="img-responsive"
            style="height: 182px; margin: auto;"></a>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6 col-lg-3 text-center"><img
            src="http://yefengedu.com/static/images/v2.0/icon4.png"
            alt="icon4" class="img-responsive"
            style="height: 182px; margin: auto;"></div>
        </div>
      </div>
    </section>
    <section class="section-2">
      <div class="container">
        <div class="titleContent"><h1 class="text-center tcimp">精品课堂</h1></div>
        <p class="text-center-content">
          课程不枯燥，迅速上手，提高专注力。零基础起步直通代码编程。涵盖编程知识方方面面。玩中练、练中学，让孩子爱上编程。线上课程，别人通勤时间就是我的学习时间。教学体系和学习效果远超Scratch。直播+夏令营，与“大咖”面对面。
        </p>
        <div class="row">
          <div class=" col-lg-6 col-sm-12 col-xs-12 col-md-6 text-center" style="margin-bottom: 15px;"  @click="video"><img
            src="http://yefengedu.com/static/images/v2.0/video-cover1.png" alt="" width="100%" style="cursor: pointer;">
          </div>
          <div class=" col-lg-6 col-sm-12 col-xs-12 col-md-6 text-center" @click="video"><img
            src="http://yefengedu.com/static/images/v2.0/video-cover2.png" alt="" width="100%" style="cursor: pointer;">
          </div>
        </div>
      </div>
    </section>
    <section class="section-3">
      <div class="container">
        <div class="titleContent"><h1 class="text-center tcimp">为什么学习编程</h1></div>
        <p class="text-center-content">
          优化孩子学习的逻辑思维模式，提孩子的升理解能力，锻炼孩子的空间想象能力，培养孩子的专注度和细心度，催化孩子整理信息、融汇贯通的能力，提升孩子的国际性沟通能力和竞争力。</p>
        <div class="row">
          <div class="col-md-12 col-xs-12 col-lg-4 text-center">
            <div class="reason">
              <div class="reason-content"><h2>编程决定了<br>孩子未来择业或创业</h2>
                <p>
                  目前社会逐渐进入人工智能时代，互联网、AI技术等新型技术性人才越来越多，编程将会是以后最基础的教育知识，现在学编程，将决定着孩子以后在竞争激烈的环境中事业发展程度。
                </p></div>
            </div>
          </div>
          <div class="col-md-12 col-xs-12 col-lg-4 text-center">
            <div class="reason">
              <div class="reason-content"><h2>全球几十个国家<br>中小学都在学的科目</h2>
                <p>
                  美国前总统奥巴马发起“编程一小时”运动。目前，美国小学生从一年级就要开始学习编程课程。全球中英国、法国、加拿大、以色列、日本、新加坡等国家已将编程教育纳入中小学必修课。
                </p></div>
            </div>
          </div>
          <div class="col-md-12 col-xs-12 col-lg-4 text-center">
            <div class="reason">
              <div class="reason-content"><h2>编程能力已成为<br>未来孩子的基本技能</h2>
                <p>
                  强化孩子的逻辑思维能力，极大程度开发创造力和动手能力。计算机编程正成为未来孩子的一项基本技能，没有编程能力，孩子将难以适应未来社会的要求。
                </p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-4">
      <div class="container">
        <div class="titleContent"><h1 class="text-center tcimp">专家团队</h1></div>
        <p class="text-center-content">
          严格遵守全美计算机教学标准构建课程体系，师从美国最具影响力的编程教学机构Codeorg，以Google技术替代Scratch，融合了编程、STEAM教学、儿童认知心理学、人工智能和大数据等各方面的专家的研究成果。</p>
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12 col-lg-4 text-center">
            <div class="person"><img src="http://yefengedu.com/static/images/v2.0/person1.png" alt="person1"
                                     class="img-circle">
              <h1>王辉</h1>
              <p>英国伦敦帝国理工大学信息管理学博士</p>
              <p>大连理工大学计算机硕士</p></div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12 col-lg-4 text-center">
            <div class="person"><img src="http://yefengedu.com/static/images/v2.0/person2.png" alt="person1"
                                     class="img-circle">
              <h1>宁博</h1>
              <p>大连海事大学信息科学与技术学院</p>
              <p>副教授、硕士生导师</p></div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12 col-lg-4 text-center">
            <div class="person"><img src="http://yefengedu.com/static/images/v2.0/person3.png" alt="person1"
                                     class="img-circle">
              <h1>马融</h1>
              <p>上海交通大学计算机系毕业</p></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-5">
      <div class="container">
        <div class="titleContent"><h1 class="text-center tcimp">课程体系</h1></div>
        <p class="text-center-content">
          从零基础的积木编程，到进阶的循环判断，再到嵌套递归算法；从Hello World!到万物互联，从冒泡排序到人工智能；从操作系统到手机APP，从网站搭建到机器学习 – 晔枫教育一站备齐，一学到底。
        </p> <img src="http://yefengedu.com/static/images/v2.0/pyramid.png" alt="pyramid" class="img-responsive"></div>
    </section>
    <section class="section-6">
      <div class="container">
        <div class="titleContent"><h1 class="text-center tcimp">早学编程有竞争优势</h1></div>
        <p class="text-center-content">
          闻名世界的亿万富翁在讲到学习经历时多数都提及过学习编程的经历。数不清的科学界大佬，在小学二三年级就开始学习编程。孩子学编程不一定就要去做程序员，但是学了编程的孩子会比其他人多一种思考问题的方式。
        </p>
      </div>
      <div class="swiperBox" style=" width: 100%;
    height: 500px;">
        <swiper :options="swiperOption" ref="mySwiper" style="width: 75%;
    height: 400px;">
          <!-- 这部分放置需要渲染的内容 -->
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color:white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/1.png)
 ">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">特拉维斯·卡兰尼克</p>
              <p style="padding-left: 320px; line-height: 30px;">Uber创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width: 60%;border-radius:3px;background-color:white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/2.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">马化腾</p>
              <p style="padding-left: 320px; line-height: 30px;">腾讯创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color: white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/3.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">李彦宏</p>
              <p style="padding-left: 320px; line-height: 30px;">百度创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">程序员出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color:white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/4.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">特拉维斯·卡兰尼克</p>
              <p style="padding-left: 320px; line-height: 30px;">Uber创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color: white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/5.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">特拉维斯·卡兰尼克</p>
              <p style="padding-left: 320px; line-height: 30px;">Uber创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color:white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/6.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">特拉维斯·卡兰尼克</p>
              <p style="padding-left: 320px; line-height: 30px;">Uber创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color:white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/7.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">特拉维斯·卡兰尼克</p>
              <p style="padding-left: 320px; line-height: 30px;">Uber创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color:white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/8.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">特拉维斯·卡兰尼克</p>
              <p style="padding-left: 320px; line-height: 30px;">Uber创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color:white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide" style="background-image:url(http://yefengedu.com/static/images/v2.0/9.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">特拉维斯·卡兰尼克</p>
              <p style="padding-left: 320px; line-height: 30px;">Uber创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>
          <swiper-slide
            style="width:  60%;border-radius:3px;background-color:white; moz-box-shadow:1px 1px 1px 1px #999 ; -webkit-box-shadow:1px 1px 1px 1px #999 ; box-shadow:1px 1px 1px 1px #999 ;">
            <div class="swiper-slide"
                 style="background-image:url(http://yefengedu.com/static/images/v2.0/10.png)">
              <p style="padding-left: 320px; padding-top: 80px; font-size: 24px; padding-bottom: 10px;">特拉维斯·卡兰尼克</p>
              <p style="padding-left: 320px; line-height: 30px;">Uber创始人</p>
              <p style="padding-left: 320px; line-height: 30px;">软件工程师出身</p>

            </div>
          </swiper-slide>


          <div class="swiper-pagination " slot="pagination"></div>
        </swiper>
      </div>


    </section>
    <section class="section-7">
      <div class="container">
        <div class="titleContent"><h1 class="text-center tcimp_1">课程价格</h1></div>
        <p class="text-center-content">
          让编程就像搭积木一样简单，只要识字便能开始学习编程。极灵兔编程还将编程的知识点设计为一个个的闯关游戏，让孩子可以在趣味闯关中，循序渐进地掌握编程技能。极灵兔编程是少儿学编程软件好选择！</p>
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12 col-lg-4 text-center">
            <div class="section-content">
              <router-link to="/"><img src="http://yefengedu.com/static//images//v2.0/section1.png" width="380"
                                       height="533" class="img-responsive taocanyi"></router-link>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12 col-lg-4 text-center">
            <div class="section-content">
              <router-link to="/"><img src="http://yefengedu.com/static//images//v2.0/section2.png" width="380"
                                       height="533" class="img-responsive taocaner"></router-link>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12 col-lg-4 text-center">
            <div class="section-content">
              <router-link to="/"><img src="http://yefengedu.com/static//images//v2.0/section3.png" width="380"
                                       height="533" class="img-responsive taocansan"></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--视频弹窗-->
    <div class="vedioStyle" style="position: fixed;top:0;z-index: 9999; background-color: rgba(0,0,0,.5); width: 1583px; height:1000px;" v-show="flag">
      <div role="dialog" aria-modal="true" aria-label="视频" class="el-dialog video-wrap" style=" margin-top:5%;width:50%;">


      <div class="el-dialog__header"><span class="el-dialog__title">视频</span>
        <button type="button" aria-label="Close" class="el-dialog__headerbtn" @click="video"><i
          class="el-dialog__close el-icon el-icon-close"></i></button>
      </div>
      <div class="el-dialog__body">
        <video v-if="flag"
          src="http://video.yefengedu.com/9caf9bbeb1134893b7f8f6657e8ea090/59e802771a1c4a829a971754fa0447dd-64538795cae0fc059c2d62659a89baa6-od-S00000001-200000.mp4"
          controls="controls" autoplay="autoplay" width="100%" controlslist="nodownload" id="stopVideo">
          您的浏览器不支持 video 标签。
        </video>
      </div>
      <div class="el-dialog__footer"><span class="dialog-footer"><button type="button"
                                                                         class="el-button el-button--primary" @click="video"><!---->
        <!----><span>确 定</span></button></span></div>
    </div>
    </div>
  </div>
</template>

<script>

  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'B_ey_home',

    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        flag:false,
        swiperOption: {
          notNextTick: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            bulletElement: 'span',//设置分页器小圆点标签，默认为span标签
            clickable: true,
            paginationClickable: true,
            notNextTick: true,
            bulletClass: 'bullet-class',
            bulletActiveClass: 'bullet-active-class',


          },
          effect: 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 60,
            modifier: 3,
            slideShadows: false,
          },
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },

          loop: true,
          disableOnInteraction: true,

          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          onSlideChangeEnd: swiper => {
            //这个位置放置swiper的回调方法
            this.page = swiper.realIndex + 1;
            this.index = swiper.realIndex;
          }
        }
      }
    },
    computed: {
      //定义这个swiper对象
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },

    mounted() {
      //这边就可以使用swiper这个对象或使用swiper官网中的方法
      // var that=this;
      // this.swiper.slideTo(0,0,false);
      // //自动播放
      // setInterval(function(){
      //   that.swiper.slideNext()
      // },2000)
      this.swiper.el.onmouseover = function () {
        this.swiper.autoplay.stop();

      },
        this.swiper.el.onmouseout = function () {
          this.swiper.autoplay.start();
        }
    },
    methods:{
      video(){
        this.flag=!this.flag;
      }
    }
  }
</script>

<style>


  　　
</style>
