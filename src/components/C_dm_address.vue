<template>
    <div class="address">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="收件人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="手机号码" prop="number">
          <el-input v-model="ruleForm.number"></el-input>
        </el-form-item>


        <el-form-item label="邮政编码" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item label="省市地区" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择区域">
            <el-option label="给我数据" value="shanghai"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="详细地址" prop="address">
          <el-input type="textarea" v-model="ruleForm.address" placeholder="请输入内容"></el-input>
        </el-form-item>



        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: "C_dm_address",
      data() {
        return {
          ruleForm: {
            name: '',
            number: '',
            region:'',
            email: '',
            address: '',
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }

            ],
            number: [
              { required:true, message: '请输入手机号', trigger: 'blur' },
              { min: 11, max: 11, message: '长度11字符', trigger: 'blur' }
            ],
            email: [
              { required: true, message: '请输入邮编', trigger: 'blur' },
              { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
            address: [
              { required: true, message: '请输入地址', trigger: 'blur' },
              { main:1, max:30,message: '请输入详细地址', trigger: 'blur' }
            ]

          }
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
              console.log(this.ruleForm.name  )
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
  .address{
    padding: 20px;
  }
</style>
