<template style="width: 100%;height: 100%">
  <div class="loginBoxs">
    <div class="loginBox">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               class="demo-ruleForm formLogin">
        <el-form-item prop="name" class="name">
          <div class="iconName">用户:</div>
          <el-input v-model="ruleForm.name" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="password" class="name">
          <div class="iconName">密码:</div>
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item style="margin-bottom: 0px">
          <el-button style="width: 100%;letter-spacing:15px"
                     type="success"
                     @click="submitForm('ruleForm')"
                     plain>登录
          </el-button>
        </el-form-item>
      </el-form>
      <div v-if="kaikuan" style="text-align: center;line-height: 30px; height: 30px; text-align: center;"><span
        style="color: red;font-size: 13px">用户名或密码不正确!</span></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import {namespace, Mutation} from 'vuex-class'
  const accountModule = namespace('accountModule')
  @Component({
    components: {}
  })
  export default class login extends Vue {
    @accountModule.Action('login') Login
    @Mutation('SET_TOKEN') SET_TOKEN
    ruleForm = {name: '', password: ''}
    kaikuan = false
    // 验证密码
    validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    rules = {
      name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
      password: [{validator: this.validatePass, trigger: 'blur'}]
    }
    created () {
    }
    submitForm (ruleForm) {
      this.kaikuan = false
      // 表单验证
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let param = {username: this.ruleForm.name, password: this.ruleForm.password}
          this.Login(param).then(data => {
            if (data.code === 0) {
              this.SET_TOKEN(data.payload)
              this.$router.push({path: '/wel/index'})
            } else {
              this.$message.error(data.message)
            }
          }).catch(err => {
            if (err.response.status === 403) {
              this.kaikuan = true
              this.ruleForm.password = ''
            }
          })
        } else {
          return false
        }
      })
    }
  }
</script>

<style lang="less">
  body, html {
    height: 100%;
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  .loginBoxs {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #333333;
    .loginBox {
      width: 400px;
      height: 300px;
      border-radius: 7px;
      background-color: white;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -200px;
      margin-top: -150px;
      box-sizing: border-box;
      padding: 15px;
      .formLogin {
        margin: auto;
        margin-top: 52px;
        .name {
          position: relative;
          .iconName {
            position: absolute;
            top: 0;
            left: 0;
            color: #333333;
            z-index: 2;
            width: 45px;
            height: 100%;
            text-align: center;
          }
        }
        .el-input__inner {
          text-indent: 30px;
        }
      }
    }
  }
</style>
