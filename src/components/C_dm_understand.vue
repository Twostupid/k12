<template>
    <div class="understand">
      <img src="http://yefengedu.com/static/img/banner.b9cb827.png" class="understand_img_one">
      <div>
        <ul class="understand_father" >
          <li class="understand_imgarr" v-for="item in list">
            <h3>{{item.title}}</h3>
            <p>{{item.main}}</p>
          </li>
        </ul>
      </div>
      <div class="aboutthis">
        <h3 class="aboutthis_h3">关于晔枫</h3>
        <p class="aboutthis_p">上海晔枫教育科技有限公司致力于为国内5-16岁青少年儿童提供一套专业、系统性、国际最前沿的在线编程教育。形成以少儿编程、智能机器人编程和编程数学、科技赛事、物联网等课程为核心，目前已发展成为集少儿编程教育技术研发、课程体系、教学服务等于一体的“互联网+教育”平台。</p>
        <p class="aboutthis_p2">旗下品牌“极灵兔青少儿编程”拥有专业的教学研发团队，与国内外名校合作打造更适合中国孩子的编程系列课程，让中国孩子不输在IT互联网时代的起跑线上！并以此开发了移动端APP+教学助手软硬件等，培养孩子编程思维和创新与创造能力，帮助孩子享受AI时代的酷玩乐学。极灵兔搭建完善的青少儿编程学习成长体系，致力于推动中国编程教育普及，希望通过丰富的少儿编程教育体系，为中国儿童搭建起拥抱国际和迎接未来世界的能力桥梁，为我国培养在AI时代领先世界、跨学科、具备国际视野的未来人才。</p>
      </div>
      <div class="start_this"></div>
    </div>
</template>

<script>
    export default {
        name: "C_dm_understand",
      data(){
          return{
            list:[
              {title:'轻松入门',main:'0基础学习毫无压力'},
              {title:'寓教于乐',main:'高水准录播课程反复看'},
              {title:'尽享学习',main:'电脑手机随时可以看'},
              {title:'优良师资',main:'打造一流编程教育品牌'},
              {title:'独创模式',main:'玩中学、学中练、练中玩'},
              {title:'优质教学',main:'国际最前沿课程体系'},
            ]
          }
      }
    }
</script>

<style scoped>
  .understand{
    width: 898px;
    background-color: #FB5B62;
    height: 100%;
  }
  .understand_img_one{
    width: 898px;
  }
  .understand_father{
    height: 750px;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 0px;
  }

  .understand_father>.understand_imgarr{
    float: left;
    box-sizing: border-box;
    text-align: center;
  }
  .understand_father .understand_imgarr:nth-child(odd){
    width: 449px;
    height: 250px;
    background-image: url("http://yefengedu.com/static/img/bg_item_y.2942898.png");
    background-size: cover;
    color: white;
  }
  .understand_father .understand_imgarr:nth-child(even){
    width: 449px;
    height: 250px;
    background-image: url("http://yefengedu.com/static/img/bg_item_w.6a4fc80.png");
    background-size: cover;
    color: red;
  }
  .understand_imgarr h3{
    font-size: 30px;
    margin-top: 87px;

  }
  .understand_imgarr p{
    font-size: 20px;
    margin-top:20px;

  }
    .aboutthis{
      width: 900px;
      /*height: 330px;*/
      padding: 60px 100px;
      background-image: url("http://yefengedu.com/static/img/bg_text.fd8af6b.png");
      overflow: hidden;
      margin-bottom: 0px;
      margin-top: 0px;
      background-size: cover;
    }
  .aboutthis_h3{
    width: 698px;
    text-align: center;
    font-size: 32px;
    color: red;
  }
  .aboutthis_p{
     margin-top: 50px;
     font-size: 16px;
     text-indent: 33px;
    color: #6a6a6a;
   }
  .aboutthis_p2{
    margin-top: 50px;
    font-size: 16px;
    text-indent: 33px;
    color: #6a6a6a;
  }
  .start_this{
    width: 900px;
    height: 337px;
    background-image: url("http://yefengedu.com/static/img/bg_step.97074a4.png");
    background-size: cover;
  }
</style>
