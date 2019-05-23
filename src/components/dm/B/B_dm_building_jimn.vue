<template>
    <div class="buildingall">
      <header>
        <img src="../../../../static/img/banner.a5807c4.png" class="header_img">
      </header>
      <div class="main_up">

        <div class="left">
          <div class="col"  v-for="item in list">
            <div class="title">
              {{item.name}}
              <div class="line"></div>
            </div>
          </div>
        </div>

        <div class="right">

          <div class="cuboid" v-for="item in list2">
            <router-link :to="{path:'/knowledg', query: {ids:item.img}}">
              <img v-bind:src="item.img" alt="" class="left_img">
              <div class="right_main">
                <div class="logo_title">
                  <img v-bind:src="item.logio" alt="" class="small_logo">
                  <h3>{{item.title}}</h3>
                </div>
                <p class="schema">{{item.main}}</p>
              </div>
            </router-link>

          </div>
        </div>

      </div>
    </div>
</template>

<script>

    export default {
        name: "B_dm_building_jimn",
      data(){
          return{
            list:[
              {name:"基础"},
              {name:"进阶"},
              {name:'强化'},
              {name:'衔接'}
            ],
            list2:[
              {
                img:'http://yefengedu.com/static/img/00.468a1a3.png',
                logio:'http://yefengedu.com/static/img/icon_00.6317765.png',
                title:"基础知识",
                main:"了解计算机编程基础原理，熟悉图形化编程操作界面，了解顺序、条件、循环三种程序基础结构，训练空间想象力、逻辑性和耐久力，能够用15块左右的积木块完成谜题。",
              },
              {
                img:'http://yefengedu.com/static/img/01.072f9d7.png',
                logio:'http://yefengedu.com/static/img/icon_01.9f463c9.png',
                title:"进阶知识",
                main:"进入更复杂的程序结构，程序顺序、条件、循环交叉并行，充分理解程序执行步骤，充分练习增强难度的混合知识点，关注细节和准确性，以23块左右的积木完成谜题。",
              },
              {
                img:'http://yefengedu.com/static/img/02.c46b0bd.png',
                logio:'http://yefengedu.com/static/img/icon_02.55faa7e.png',
                title:"算法强化",
                main:"以多重嵌套循环精妙设计出的关卡展开教学，极大的增强了学员对于复杂问题的解决能力。通过巧妙的结合算法与数学，学生可以体验并享受到程序的逻辑美学。通过这一阶段训练的孩子，日常理科学习能力将得到极大的提升。",
              },
              {
                img:'http://yefengedu.com/static/img/03.3835fbe.png',
                logio:'http://yefengedu.com/static/img/icon_03.645927e.png',
                title:"基础知识",
                main:"熟悉的编程积木块被Python代码代替，但又可以通过反向解析获得积木块。站在积木编程的肩膀上，通过这一模块的训练，学生将无缝衔接到Python语言的学习。",
              },
            ]
          }
      }

    }
</script>

<style scoped>
  .buildingall{
    width: 1200px;
    height: 100%;
    margin: auto;
  }
  .header_img{
    width: 1200px;

  }
  .main_up{

    width: 1200px;
    background-color: #d6e3f3;
    padding: 40px 74px;
    box-sizing: border-box;
  }
  .left{
    width: 126px;
    margin-top: 60px;
    display: inline-block;
  }
  .col{
    width: 126px;
    height: 230px;
  }
  .title{
    background-color: red;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    color: white;
    line-height: 80px;
    text-align: center;
    font-size: 28px;
  }
  .line{
    height: 150px;
    border-left: 1px dashed red;
    position: relative;
    left: 40px;
  }
  .col:last-child .line{
    display: none;
  }
  .col:last-child{height: 150px}

  .cuboid{
    box-sizing: border-box;
    width: 880px;
    height: 210px;
    background-color: white;
    padding: 20px 30px;
    margin-bottom: 20px;
  }
  .left_img{
    width: 260px;
    height: 170px;
    float: left;
  }
  .right{
    display: inline-block;
    float: right;
  }
  .right_main{
    width: 540px;
    height: 170px;
    background-color: #f2f6fe;
    float: right;
    padding: 20px 40px;
    box-sizing: border-box;
  }
  .small_logo{
    width: 35px;
    height: 35px;
    margin-top: -10px;

  }
  a{
    color: black;
  }
  .logo_title{
    position: relative;
    top: -20px;
    width: 460px;
    height: 45px;
  }
  .logo_title h3{
    display: inline-block;
    margin-left: 10px;
  }
  .schema{
    font-size: 14px;
  }
</style>
