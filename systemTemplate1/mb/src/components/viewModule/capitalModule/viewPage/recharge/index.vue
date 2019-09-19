<template>
  <section class="card-box guide recharge"
           id="rechargeId">
    <el-tabs type="border-card"
             :value="getWay?'second':'first'">
      <el-tab-pane label="在线支付"
                   :disabled="getWay"
                   name="first" />
      <el-tab-pane label="线下支付"
                   name="second">
        <p :style="{color: '#f6b55a',fontSize: '12px'}">如您已通过网上银行、线下银行网点或其他方式付款，可在此添加支付记录。管理员核实确认后该笔支付记录方可生效。</p>
        <el-form :inline="true"
                 label-width="80px"
                 :model="formData"
                 label-position="left">
          <div>
            <el-form-item label="充值金额"
                          prop="money">
              <el-input style="width: calc(100% - 4rem);" />&emsp;<span style="color:#999">元</span>
            </el-form-item>
          </div>
          <p>
            <i class="el-icon-plus" />
            <a href="javascript:;"
               @click="dialogVisibleBank=true">&nbsp;选择收款银行账号</a>
          </p>
          <el-form-item label="账户名称">
            <el-input disabled
                      value="深圳云计算有限公司" />
          </el-form-item>
          <el-form-item label="付款日期">
            <el-date-picker v-model="date"
                            clearable
                            style="width:202px"
                            placeholder="选择日期" />
          </el-form-item>
          <el-form-item label="开户银行">
            <el-input disabled
                      value="中国建设银行深圳市中旅公馆支行" />
          </el-form-item>
          <el-form-item label="开户账号">
            <el-input disabled
                      type="number"
                      value="44201015700052508420" />
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea"
                      :rows="2"
                      style="width:202px"
                      placeholder="请输入内容"
                      v-model="textarea" />
          </el-form-item>
        </el-form>
        <div class="accessory">
          <button><i class="el-icon-plus" />上传附件</button>
          <span>仅支持JPG//PNG//Word//Excel//Txt格式，大小不超过4M</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="6"
                  :offset="18">
            <el-button @click="dialogVisible = true">立即充值</el-button>
          </el-col>
        </el-row>
        <el-dialog title="提示"
                   :close-on-click-modal="false"
                   :visible.sync="dialogVisible"
                   width="30%">
          <p>充值完成，请等待管理员确认！</p>
          <div slot="footer">
            <el-button type="primary"
                       @click="handleOK">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="选择收款银行账号"
                   :close-on-click-modal="false"
                   :visible.sync="dialogVisibleBank">
          <el-table :data="tableData"
                    empty-text="没有绑定的银行账号"
                    :header-cell-style="{'background-color': '#f5f6f7','color':'#555'}">
            <el-table-column prop="index"
                             label="账户名称">
              <template slot-scope="scope">
                <el-radio v-model="bankRadio"
                          :label="scope.row.index">{{ scope.row.name }}</el-radio>
              </template>
            </el-table-column>
            <el-table-column prop="name"
                             label="开户银行" />
            <el-table-column prop="money"
                             label="开户账户" />
          </el-table>
          <el-pagination :current-page="currentPage"
                         :page-sizes="[10, 30, 50]"
                         :page-size="10"
                         :total="400"
                         layout="total, sizes, prev, pager, next, jumper" />
          <div slot="footer">
            <el-button @click="dialogVisibleBank = false">确 定</el-button>
            <el-button style="background-color: #e4e9eb;color: #555555;"
                       @click="dialogVisibleBank = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
@Component()
  export default class capitalIndex extends Vue {
  currentPage = 4
  bankRadio = '1'
  tableData = [{
    index: '1',
    name: '现金账户',
    money: 100
  }, {
    index: '2',
    name: '王小虎',
    money: 100
  }, {
    index: '3',
    name: '王小虎',
    money: 100
  }]
  date = new Date()
  textarea = ''
  getWay = true
  dialogVisible = false
  dialogVisibleBank = false
  formData = {}
  // 分页变化
  handleSizeChange (val) {
    console.log(`每页 ${val} 条`)
  }
  handleCurrentChange (val) {
    console.log(`当前页: ${val}`)
  }
  // 充值确定
  handleOK () {
    this.dialogVisible = false
    this.$router.push({ path: '/capital/index', query: { key: 'second' } })
  }
  }
</script>

<style lang="less" scoped>
@import "../../../../../themes/publicStyle/common.less";
.recharge {
  .el-tabs--border-card {
    .el-form--inline {
      p {
        padding-left: 68px;
        margin-top: 20px;
        i {
          color: @dh-color;
          font-size: 22px;
          font-weight: bold;
        }
        a {
          color: #555;
          font-size: 14px;
          vertical-align: text-top;
          &:hover {
            color: @dh-color;
          }
        }
      }
      .el-form-item {
        margin-top: 20px;
        margin-bottom: 0px;
      }
    }
    .accessory {
      background-color: #f5f5f5;
      position: relative;
      margin-top: 20px;
      button {
        cursor: pointer;
        background-color: #f0f0f0;
        color: #555;
        border: 0;
        min-width: 90px;
        width: auto;
        padding: 0 5px;
        line-height: 32px;
        height: 32px;
        i {
          font-weight: bold;
        }
      }
      span {
        position: absolute;
        right: 0;
        top: 8px;
        padding-right: 20px;
        color: #999;
        font-size: 12px;
      }
    }
    .el-row {
      .el-button {
        margin-top: 60px;
        font-size: 20px;
        border-radius: 3px;
      }
    }
    .el-button {
      background-color: @dh-color;
      color: #fff;
      border: 0;
    }
    .el-dialog__body {
      .el-pagination {
        text-align: right;
        margin-top: 20px;
        font-weight: 400;
        color: #606266;
      }
    }
  }
}
</style>
<style lang="less">
#rechargeId.guide.card-box {
  .el-tabs--border-card {
    .el-tabs__header {
      .el-tabs__nav {
        .el-tabs__item {
          text-decoration: none;
        }
      }
    }
    .el-tabs__content {
      .el-dialog__header {
        background-color: #f5f5f5;
        border-bottom: 1px solid #dce2e7;
      }
      .el-dialog__body {
        text-align: center;
      }
      .el-dialog__footer {
        background-color: #f5f5f5;
        padding: 6px 10px;
        border-top: 1px solid #dce2e7;
        .el-button {
          border-radius: 0;
        }
      }
    }
  }
}
</style>
