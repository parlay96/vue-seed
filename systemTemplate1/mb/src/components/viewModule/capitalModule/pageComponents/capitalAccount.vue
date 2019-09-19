<template>
  <section>
    <el-table :data="tableData3"
              :cell-style="e=>e.columnIndex === 0?{ 'background-color': '#f5f6f7' }:false"
              :header-cell-style="{'background-color': '#f5f6f7','color': '#555'}"
              border>
      <el-table-column prop="index"
                       align="center"
                       label=""
                       width="30%" />
      <el-table-column prop="name"
                       align="center"
                       label="账户" />
      <el-table-column prop="money"
                       align="center"
                       label="余额" />
      <el-table-column prop="city"
                       align="center"
                       label="操作">
        <template slot-scope="scope">
          <router-link :to="{path: `${scope.row.city?'/capital/recharge':''}`}"
                       target="_blank">
            {{ scope.row.city?'充值':'' }}
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-form :inline="true"
             :model="formInline"
             class="demo-form-inline">
      <el-row>
        <el-col :span="20">
          <el-form-item label="资金账户">
            <el-select v-model="formInline.region">
              <el-option label="全部账户"
                         value="all" />
              <el-option label="现金账户"
                         value="money" />
              <el-option label="预付款账户"
                         value="yufukuan" />
              <el-option label="返点帐户"
                         value="fandian" />
            </el-select>
          </el-form-item>
          <el-form-item label="选择时间">
            <el-date-picker v-model="value6"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期" />
          </el-form-item>
          <el-form-item label="最近">
            <a href="javascript:;">1个月</a>
            <a href="javascript:;">3个月</a>
            <a href="javascript:;">半年</a>&emsp;
            <a href="javascript:;"
               @click="()=>more=!more">更多<i :class="more?'el-icon-arrow-up':'el-icon-arrow-down'" /></a>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="success"
                       @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <div v-if="more">
        <el-form-item label="充值/扣款">
          <el-select v-model="formInline.region">
            <el-option label="全部"
                       value="all" />
            <el-option label="充值"
                       value="chongzhi" />
            <el-option label="扣款"
                       value="koukuan" />
          </el-select>
        </el-form-item>
        <el-form-item label="摘要">
          <el-select v-model="formInline.region">
            <el-option label="全部摘要"
                       value="all" />
            <el-option label="现金充值"
                       value="chongzhi" />
            <el-option label="销售返点"
                       value="koukuan" />
            <el-option label="退款"
                       value="koukuan" />
            <el-option label="其他充值"
                       value="koukuan" />
            <el-option label="订单付款"
                       value="koukuan" />
            <el-option label="其他付款"
                       value="koukuan" />
            <el-option label="红冲"
                       value="koukuan" />
            <el-option label="订单退款"
                       value="koukuan" />
            <el-option label="收款单充值"
                       value="koukuan" />
            <el-option label="付款单充值"
                       value="koukuan" />
            <el-option label="付款单扣款"
                       value="koukuan" />
            <el-option label="退货单退款"
                       value="koukuan" />
          </el-select>
        </el-form-item>
        <el-form-item label="关键字">
          <el-input v-model="formInline.keyWords"
                    placeholder="支付流水号/订单号" />
        </el-form-item>
      </div>
    </el-form>
    <el-table :data="tableData"
              empty-text="没有收支明细记录"
              :header-cell-style="{'background-color': '#f5f6f7','color': '#555'}">
      <el-table-column v-for="(item,index) in moneyTable"
                       :prop="item.value"
                       align="center"
                       :key="index"
                       :label="item.label" />
    </el-table>
  </section>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
@Component()
  export default class capitalIndex extends Vue {
  moneyTable = [
    {
      label: '支付流水号',
      value: 'zhifu'
    },
    {
      label: '日期',
      value: 'riqi'
    },
    {
      label: '资金账户',
      value: 'zijin'
    },
    {
      label: '摘要',
      value: 'zhaiyao'
    },
    {
      label: '充值',
      value: 'chongzhi'
    },
    {
      label: '扣款',
      value: 'koukuan'
    },
    {
      label: '账户余额',
      value: 'zhanghuyue'
    },
    {
      label: '操作',
      value: 'caozuo'
    }
  ]
  tableData = []
  more = false
  value6 = ''
  formInline = {
    user: '',
    region: 'all'
  }
  tableData3 = [
    {
      index: '1',
      name: '现金账户',
      money: 100,
      city: true
    }, {
      index: '2',
      name: '王小虎',
      money: 100
    }, {
      index: '3',
      name: '王小虎',
      money: 100
    },
    { name: '总计', money: 0.00 }
  ]
  onSubmit () {
    console.log('submit!', this.formInline)
  }
  }
</script>

<style lang="less" scoped>
@import "../../../../themes/publicStyle/common.less";
a {
  color: #555;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    text-decoration: underline;
    color: @dh-color;
  }
}
.el-table {
  a {
    color: @dh-color;
  }
}
.el-form--inline {
  margin-top: 20px;
}
</style>
