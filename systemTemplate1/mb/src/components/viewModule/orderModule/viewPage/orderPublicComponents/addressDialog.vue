<template>
  <div>
    <el-dialog title="修改收货信息"
               :visible.sync="dialogVisible"
               width="50%"
               class="myDialog">
      <el-form :model="form">
        <el-form-item label="" label-width="100">
          <div class="myInput">
            <el-input placeholder="请输入客户名称/收货人/手机号/电话"/>
            <i class="el-icon-search a"/>
          </div>
        </el-form-item>
        <ul class="myRadio">
          <li>
            <el-radio v-model="radio" label="1">公司地址    1  <span>（默认地址）</span>  15802003263</el-radio>
            <div><el-button type="text">修改</el-button><el-button type="text">删除</el-button><el-button type="text">设为默认</el-button></div>
          </li>
          <li>
            <el-radio v-model="radio" label="2">使用新地址</el-radio>
          </li>
          <div v-if="radio == 2" class="myForm">
            <el-form ref="form"
                     :model="addressForm"
                     label-width="80px"
                     size="mini">
              <el-form-item label="客户名称">
                <el-input v-model="addressForm.name"/>
              </el-form-item>
              <el-form-item label="收货人">
                <el-input v-model="addressForm.name"/>
              </el-form-item>
              <el-form-item label="手机">
                <el-input v-model="addressForm.name"/>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="addressForm.name"/>
              </el-form-item>
              <el-form-item label="收货地址">
                <el-input v-model="addressForm.name"/>
              </el-form-item>
              <el-form-item>
                <el-button type="text">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </ul>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddressClick">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Emit, Watch, Prop } from 'vue-property-decorator'
    @Component()
  export default class addressDialog extends Vue {
      dialogVisible = false // 修改收货信息的模态框
      radio = 1
      addressForm=[]
      form={desc: ''}
      @Prop() dialogAddressVisible
      @Watch('dialogAddressVisible')
      handleChange (val) {
        this.dialogVisible = val
      }
      @Emit()
      handleAddressClick () {
        this.dialogVisible = false
        return this.dialogVisible
      }
  }
</script>

<style lang="less">
  @import "../../../../../themes/orderModule/orderLess";
  @import "../../../../../themes/publicStyle/default";
  .myDialog{
    .el-input{
      width: 300px;
    }
    .myInput{
      height: 40px;
      width: 300px;
      position: relative;
      .el-input{
        width: 300px;
        position: absolute;
        left: 0;
        padding: 0 30px 0 5px;
      }
      i{
        display: block;
        position: absolute;
        right: 15px;
        top: 50%;
        padding: 10px;
        margin-top: -17px;
      }
      .el-input__inner{
        border-radius: 20px;
      }
    }
    .myForm{
      margin-top: 20px;
    }
    .myRadio{
      li{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .el-button--text:focus, .el-button--text:hover{
        color: @bg-color;
      }
      .el-button--text{
        color: @bg-color;
      }
    }
    .publicRadio ()
  }
</style>
