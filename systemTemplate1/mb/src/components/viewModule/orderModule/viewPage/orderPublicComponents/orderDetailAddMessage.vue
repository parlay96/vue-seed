<template>
  <div class="addMessage">
    <div class="messageBox">
      <div class="messageLabel">备注信息:</div>
      <div class="content">
        <ul class="info" ref="info">
          <li class="ready" style="display: list-item"/>
        </ul>
        <el-button type="text" icon="el-icon-plus" @click="dialogDescVisible = true" >添加备注</el-button>
      </div>
    </div>
    <div class="messageBox">
      <div class="messageLabel">收货信息:</div>
      <div class="content">
        <ul class="info">
          <li class="ready" style="display: list-item">客户名称：公司地址,  收货人：谢亚,  联系电话：18888888888,  收货地址：江苏省新圩镇塘吓产径管理区奥博富塑胶</li>
        </ul>
        <el-button type="text" icon="el-icon-edit-outline" @click="dialogAddressVisible = true" >修改地址</el-button>
      </div>
    </div>
    <div class="messageBox">
      <div class="messageLabel">制单人:</div>
      <div class="content">
        <ul class="info" >
          <li class="ready" style="display: list-item">谢亚</li>
        </ul>
      </div>
    </div>
    <div class="messageBox">
      <div class="messageLabel">交货日期:</div>
      <div class="content">
        <ul class="info" >
          <li class="ready" style="display: list-item">2019-03-12</li>
        </ul>
      </div>
    </div>
    <div class="messageBox">
      <div class="messageLabel">附件信息:</div>
      <div class="content">
        <ul class="info" >
          <li class="ready" style="display: list-item">暂无</li>
        </ul>
        <el-button type="text" icon="el-icon-edit-outline" @click="dialogAttachmentVisible = true" >管理附件</el-button>
      </div>
    </div>
    <div class="messageBox cursor" @click="handleShowTable">
      <div class="messageLabel">展开日志 <span style="font-size: 10px"><i :class="['iconfont', icon]"/></span></div>
    </div>
    <div class="tableBox" v-show="showtable">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="公司名称"
          width="180"/>
        <el-table-column
          prop="name"
          label="操作人"
          width="180"/>
        <el-table-column
          prop="date"
          label="时间"
          width="180"/>
        <el-table-column
          prop="date"
          label="操作类别"
          width="180"/>
        <el-table-column
          prop="address"
          label="操作日志"/>
      </el-table>
    </div>
    <el-dialog title="添加商品备注" :visible.sync="dialogDescVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="备注信息" label-width="100">
          <textarea name=""
                    id="goodsDesc"
                    cols="30"
                    rows="10"
                    v-model="form.desc"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDescVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleDescClick">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改收货信息"
               :visible.sync="dialogAddressVisible"
               width="50%"
               class="myDialog">
      <el-form :model="form">
        <el-form-item label="" label-width="100">
          <div class="myInput">
            <el-input placeholder="请输入客户名称/收货人/手机号/电话"/>
            <i class="el-icon-search"/>
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
        <el-button @click="dialogAddressVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddressClick">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="管理附件" :visible.sync="dialogAttachmentVisible" width="50%">
      <div>暂无附件</div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleChange"
      >
        <el-button size="small" type="text">+ 新增附件</el-button>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAttachmentVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAttachmentClick">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class orderTable extends Vue {
    radio = 1
    dialogDescVisible = false // 添加商品备注的模态框
    dialogAddressVisible = false // 修改收货信息的模态框
    dialogAttachmentVisible = false // 修改上传附件的模态框
    showtable = false
    icon = 'iconsanjiaoxia'
    tableData=[{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }]
    form={desc: ''}
    addressForm=[]
    handleDescClick () {
      this.dialogDescVisible = false
      if (this.form.desc) {
        // console.log(this.$refs.info)
        // this.$refs.info.appendChild(`<li class="ready" style="display: list-item">${this.form.desc}</li>`)
        // this.$refs.info.appendChild(`<div>123</div>`)
      }
    }
    handleAddressClick () {
      this.dialogAddressVisible = false
    }
    handleAttachmentClick () {
      this.dialogAttachmentVisible = false
    }
    handleShowTable () {
      if (this.showtable) {
        this.showtable = false
        this.icon = 'iconsanjiaoxia'
      } else {
        this.showtable = true
        this.icon = 'iconsanjiaoshang'
      }
    }
    // 上传附件
    handleChange () {
      //
    }
  }
</script>

<style lang="less">
@import "../../../../../themes/orderModule/orderLess";
  .el-input__inner:focus {
    border-color: @bg-color;
  }
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
.el-button--text:focus, .el-button--text:hover {
  color: @bg-color;
}
.el-button:focus, .el-button:hover {
  color: #fff;
}
  .addMessage{
    .el-table th{
      background: #f7f7f7!important;//修改表头背景色
    }
    margin-top: 20px;
    .tableBox{
      padding-left: 110px;
      box-sizing: border-box;
      margin-top: 60px;
    }
    .messageBox{
      margin-bottom: 10px;
      &.cursor{
        cursor: pointer;
      }
      &.cursor:hover{
        color: @bg-color;
      }
      .messageLabel{
        width: 110px;
        float: left;
        height: 32px;
        line-height: 32px;
        text-align: right;
      }
      .content{
        float: none;
        margin-left: 120px;
        overflow: hidden;
        border-bottom: 1px solid #d6dee3;
        min-height: 32px;
        .info{
          float: left;
          margin-right: 110px;
          line-height: 32px;
          word-break: break-all;
        }
        .el-button{
          margin-left: -70px;
          float: right;
          color: @font-color;
        }
      }
    }
  }
  #goodsDesc{
    resize:none;
    width: 100%;
    height: 100px;
    &:focus{
      border: 1px solid @bg-color;
      outline-color:@bg-color;
    }
  }
</style>
