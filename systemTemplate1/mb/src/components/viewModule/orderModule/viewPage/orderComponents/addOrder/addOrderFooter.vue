<template>
  <div class="addOrderFooter">
    <el-form ref="form"
             :model="form"
             label-width="80px"
             v-if="bodyType === 'add'">
      <el-form-item label="填写备注:">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="交货日期:">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="选择日期"/>
      </el-form-item>
      <el-form-item label="收货信息:">
        <i class="el-icon-edit-outline defultColor" @click="dialogAddressVisible = true"/> <span>客户名称：公司地址,  收货人：1,  联系电话：15802003263,  收货地址：</span>
      </el-form-item>
      <el-form-item label="附件信息:">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="handleSuccess"
        >
          <el-button size="small" type="text">+新增附件</el-button>
          <span style="color: #999">（附件最大20M，支持格式：PDF、Word、Excel、Txt、JPG、PNG、BMP、GIF、RAR、ZIP）</span>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-form ref="form"
             :model="form"
             label-width="80px"
             v-else>
      <el-form-item label="填写备注:">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="退款信息:">
        <i class="el-icon-edit-outline defultColor" @click="dialogFormVisible = true"/> <span>客户名称：公司地址,  收货人：1,  联系电话：15802003263,  收货地址：</span>
      </el-form-item>
      <el-form-item label="附件信息:">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="handleSuccess"
        >
          <el-button size="small" type="text">+新增附件</el-button>
          <span style="color: #999">（附件最大20M，支持格式：PDF、Word、Excel、Txt、JPG、PNG、BMP、GIF、RAR、ZIP）</span>
        </el-upload>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button class="handleBack">取消</el-button>
    </div>
    <myDialog :dialog-address-visible="dialogAddressVisible" @handle-address-click="handleAddressClick"/>
    <el-dialog title="修改退款信息" :visible.sync="dialogFormVisible">
      <el-form :model="MessageForm">
        <el-form-item label="退款人" :label-width="formLabelWidth">
          <el-input v-model="MessageForm.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input v-model="MessageForm.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="开户名称" :label-width="formLabelWidth">
          <el-input v-model="MessageForm.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="开户银行" :label-width="formLabelWidth">
          <el-input v-model="MessageForm.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="开户账号" :label-width="formLabelWidth">
          <el-input v-model="MessageForm.name" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import myDialog from '../../orderPublicComponents/addressDialog'
  @Component({components: {myDialog}})
  export default class addOrderFooter extends Vue {
    @Prop({default: 'add'}) bodyType
    formLabelWidth = 180
    dialogAddressVisible = false // 修改地址
    dialogFormVisible = false // 修改退款信息
    form = {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    } // 添加订单的表单信息
    MessageForm = {
      name: ''
    } // 退款信息表单信息
    onSubmit () {
      console.log('submit!')
    }
    handleBack () {
      //
    }
    // 上传附件
    handleSuccess (response, file, fileList) {
      //
    }
    // 模态框的显隐
    handleAddressClick (e) {
      this.dialogAddressVisible = e
    }
  }
</script>

<style scoped lang="less">
  .addOrderFooter{
    padding-left: 30px;
  }
  .defultColor{
    text-decoration: none;
    color: #1ab399;
    cursor: pointer;
  }
</style>
