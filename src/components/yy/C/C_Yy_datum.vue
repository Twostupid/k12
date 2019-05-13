<!--完善资料-->
<template>
  <div class="all">
    <template>
      <transition name="my">
        <div v-show="flag" class="haos">
<span class="glyphicon glyphicon-ok-circle diss">
  <span class="zis">修改成功</span>
</span>
        </div>
      </transition>
      <div data-v-c8b2ec34="" class="el-row" style="padding-top: 10px;">
        <form data-v-c8b2ec34="" class="el-form el-form--label-right">
          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
                                                              style="width: 120px;">昵称：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner"><!----><!----><!----></div>
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item is-required"><label for="" class="el-form-item__label"
                                                                          style="width: 120px;">姓氏：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner" v-model="num"
                                                                     @blur="confirms" :class="boor?red:gud">
                <span class="names" v-show="boor">请输入您的姓氏</span>
              </div>
              <!--              123123-->
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item is-required"><label for="gender" class="el-form-item__label"
            <div class="el-form-item__content" style="margin-left: 120px;">
              <template>
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
              </template>
            </div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
                                                              style="width: 120px;">邮箱：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner"><!----><!----><!----></div>
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
                                                              style="width: 120px;">生日：</label>
            <template>
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </template>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item is-required"><label for="address" class="el-form-item__label"
                                                                          style="width: 120px;">城市：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner" v-model="num1"
                                                                     @blur="confirms" :class="boor1?red:gud">
                <span class="names" v-show="boor1">请输入您的城市</span>
                <!----><!----><!----></div>
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
                                                              style="width: 120px;">微信号：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner"><!----><!----><!----></div>
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner"><!----><!----><!----></div>
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
                                                              style="width: 120px;">孩子就读学校：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner"><!----><!----><!----></div>
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item is-required"><label for="childGrade" class="el-form-item__label"
                                                                          style="width: 120px;">孩子在读年级:</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner" :class="boor2?red:gud"
                                                                     v-model="num2" @blur="confirms">
                <span class="names" v-show="boor2">请输入您的孩子在读年级</span>
                <!----><!----><!----></div>
              <!----></div>
          </div>


          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
                                                              style="width: 120px;">孩子生日：</label>
            <template>
              <div class="block">
                <span class="demonstration">  </span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </template>
          </div>


          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
                                                              style="width: 120px;">个性签名：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-textarea"><textarea class="el-textarea__inner"
                                                                    style="min-height: 33px;"></textarea></div><!---->
            </div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item"><!---->
            <div class="el-form-item__content" style="margin-left: 120px;">
              <button data-v-c8b2ec34="" type="button" class="el-button el-button--primary" @click="confirm"><!---->
                <!----><span>确定</span>
              </button><!----></div>
          </div>
        </form>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        boor: true,
        boor1: true,
        boor2: true,
        num: "",
        num1: "",
        num2: '',
        red: "red",
        gud: "gud",
        flag: false,
        radio: '1'
      };
    },
    methods: {
      confirm() {
        if (!this.boor || !this.boor1 || !this.boor2) {
          // 三项必填h才可以提交
          //把修改后数据上传
          // this.$axios.get('/api').then(res => {
          //   console.log(res.data)
          // }).catch(err => {
          //   console.log(err)
          // })


          this.flag = true
          this.time()

        } else {
          if (this.num == 0) {
            this.boor = true

          } else {
            this.boor = false
          }
          if (this.num1 == 0) {
            this.boor1 = true
          } else {
            this.boor1 = false
          }
          if (this.num2 == 0) {
            this.boor2 = true

          } else {
            this.boor2 = false
          }
        }

      },
      confirms() {
        if (this.num == 0) {
          this.boor = true

        } else {
          this.boor = false
        }
        if (this.num1 == 0) {
          this.boor1 = true
        } else {
          this.boor1 = false
        }
        if (this.num2 == 0) {
          this.boor2 = true

        } else {
          this.boor2 = false
        }
      }
      , time() {
        let times = setInterval(() => {
          this.flag = false
          // this.flay=false
          clearInterval(times);
          //此时的this指向是该vue组件，不管在哪个地方使用，指向都是该vue组件。
        }, 3000)
      },

    }
  };
</script>

<style scoped>
  .el-input__inner {
    width: 420px;
    border: 1px solid gainsboro;
  }
  .el-form-item {
    margin-left: 150px;
    margin-bottom: 16px;
  }
  .names {
    /*line-height: 17px;*/
    /*margin-bottom: -20px;*/
    position: relative;
    top: 30px;
    font-size: 12px;
    left: -420px;
    color: #f56c6c;
  }

  .red {
    border: 1px solid red;
  }

  .gud {
    border: 1px solid greenyellow;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translateX(500px);
  }

  .v-enter-active, .v-leave-active {
    transition: all .3s;

  }

  .my-enter, .my-leave-to {
    opacity: 0;
    transform: translateY(-200px);
    color: pink;
  }

  .my-enter-active, .my-leave-active {
    transition: all 1.3s;

  }

  .haos {
    width: 450px;
    height: 50px;
    background-color: greenyellow;
    opacity: 0.5;
    position: fixed;
    top: 20px;
    left: 50%;
    margin-left: -175px;
    z-index: 100;
  }

  .diss {
    line-height: 40px;
    font-size: 14px;
    color: black;
    margin-left: 40px;

  }

  .zis {
    margin-left: 10px;
  }


</style>
