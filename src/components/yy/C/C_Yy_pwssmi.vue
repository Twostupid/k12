<template>
   <div class="all">
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
      <div class="num">当前密码(未设置密码用户可以不填)</div>
       <el-form-item label="" prop="age" class="kuang">
         <el-input v-model.number="ruleForm.age" class="num1"></el-input>
       </el-form-item>

       <div class="num">密码</div>
       <el-form-item label="" prop="pass" class="kuang">
         <el-input type="password" class="num1" v-model="ruleForm.pass" autocomplete="off"></el-input>
       </el-form-item>

       <div class="num">确认密码</div>
       <el-form-item label="" prop="checkPass" class="kuang">

         <el-input type="password" class="num1" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item>
         <el-button type="primary" @click="submitForm('ruleForm')" class="num2">修改密码</el-button>
<!--         <el-button @click="resetForm('ruleForm')">重置</el-button>-->
       </el-form-item>
     </el-form>
   </div>
</template>

<script>
  export default {
    name:'C_Yy_pwssmi',
    data() {
      var checkAge = (rule, value, callback) => {
        console.log(value)
        if (!value) {

          return callback(new Error('密码不正确'));
        }
        //axios 请求密码  给input 当前密码 进行判断
      //  一进个人中心 获取数据 进行传值

      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            //  提交成功后
            //  axios 请求/api
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.num1{
  width: 700px;
}
  .num{
    margin-left: 120px;
    margin-bottom: 25px;
    margin-top: 20px;

  }
  .num2{
    margin-left: 120px;
    padding-bottom: 20px;
    height: 30px;
    line-height: 10px;

  }
  .all{
    margin-top: 40px;
  }
  .kuang{
    position: relative;
    left: 120px;
  }
</style>
