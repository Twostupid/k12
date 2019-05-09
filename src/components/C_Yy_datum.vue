<template>
  <div class="all">
    <template>
      <div data-v-c8b2ec34="" class="el-row" style="padding-top: 10px;">
        <form data-v-c8b2ec34="" class="el-form el-form--label-right">
          <div data-v-c8b2ec34="" class="el-form-item"><label class="el-form-item__label"
                                                              style="width: 120px;">昵称：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner"><!----><!----><!----></div>
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item is-required"><label for="surname" class="el-form-item__label"
                                                                          style="width: 120px;">姓氏：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner"><!----><!----><!----></div>
              <!----></div>
          </div>
          <div data-v-c8b2ec34="" class="el-form-item is-required"><label for="gender" class="el-form-item__label"
                                                                          style="width: 120px;">性别：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" role="radiogroup" class="el-radio-group"><label data-v-c8b2ec34="" role="radio"
                                                                                      tabindex="0"
                                                                                      class="el-radio is-checked"
                                                                                      aria-checked="true"><span
                class="el-radio__input is-checked"><span class="el-radio__inner"></span><input type="radio"
                                                                                               tabindex="-1"
                                                                                               class="el-radio__original"
                                                                                               value="1"></span><span
                class="el-radio__label">男<!----></span></label> <label data-v-c8b2ec34="" role="radio" tabindex="-1"
                                                                       class="el-radio"><span
                class="el-radio__input"><span class="el-radio__inner"></span><input type="radio" tabindex="-1"
                                                                                    class="el-radio__original"
                                                                                    value="0"></span><span
                class="el-radio__label">女<!----></span></label></div><!----></div>
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
                                                                     class="el-input__inner"><!----><!----><!----></div>
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
                                                              style="width: 120px;">孩子姓名：</label>
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
                                                                          style="width: 120px;">孩子在读年级：</label>
            <div class="el-form-item__content" style="margin-left: 120px;">
              <div data-v-c8b2ec34="" class="el-input"><!----><input type="text" autocomplete="off"
                                                                     class="el-input__inner"><!----><!----><!----></div>
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
              <button data-v-c8b2ec34="" type="button" class="el-button el-button--primary"><!---->
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
      };
    }
  };
</script>

<style scoped>
  .el-input__inner{
    width: 420px;
  }
  .el-form-item{
    margin-left: 160px;
  }




  /*  */


</style>
