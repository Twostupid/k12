<template>
    <div class="problem_father">
      <div class="main">
        <h1>【常见问题】</h1>
        <div class="text">
          <ul>
            <li>
              <p class="title">可以免费试听吗？</p>
              <p class="content">可以免费试听，点击“公开课”即可免费试听相关课程，还能获取最新线上线下公开课讯息。</p>
            </li>
            <li>
              <p class="title">上课是在电脑上还是手机上呢？</p>
              <p class="content">上课是通过手机或者ipad都可以。</p>
            </li>
            <li>
              <p class="title">家长需要参与课程吗？</p>
              <p class="content">大部分时间，家长不用参与到课程中。在孩子完成作业后，绑定亲子账户的家长会收到短信通知，实时掌握孩子的学习进度。</p>
            </li>
            <li>
              <p class="title">孩子没有基础，应该学习什么呢？</p>
              <p class="content">零基础的孩子建议从积木编程入门学习起，一步步提起孩子兴趣，过渡引导到后面代码编程语言。</p>
            </li>
            <li>
              <p class="title">你们APP叫什么名字，怎么下载？</p>
              <p class="content">我们APP叫“极灵兔编程”，在应用商店搜索应用名称即可下载，另外也可以点击官网中”APP下载“扫描二维码进行下载。</p>
            </li>
            <li>
              <p class="title">你们积木编程是免费玩吗？</p>
              <p class="content">我们在官网中开放的积木编程游戏关卡都是免费的，如果想学习更多的积木编程请下载极灵兔编程APP 购买。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "C_dm_problem"
    }
</script>

<style scoped>
  .problem_father{
    width: 900px;
    background-color: white;
    padding-bottom: 20px;
    overflow: hidden;
  }
  .main>h1{
    text-align: center;
    font-size: 26px;
    color: #454545;
    line-height: 126px;
    margin-top: 0px;
  }
  .main .title{
    font-size: 18px;
    color: #4D4949;
    height: 50px;
    line-height: 50px;
    margin: 10px 0 16px;
    padding-left: 10px;
    font-weight: 600;
  }
  .main .content{
    height: 75px;
    line-height: 75px;
    font-size: 14px;
    color: #666161;
    padding-left: 20px;
    background: #f8eeee;
  }
</style>
