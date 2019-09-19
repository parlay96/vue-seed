<template>
  <div class="myTable">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="number"
        label="支付流水号"
        align="left"
        width="180"/>
      <el-table-column
        prop="money"
        align="center"
        label="时间"/>
      <el-table-column
        prop="money"
        align="center"
        label="付款金额"/>
      <el-table-column
        prop="auditStatus"
        align="center"
        width="160"
        label="支付方式"/>
      <el-table-column
        prop="paymentStatus"
        align="center"
        label="资金账户"/>
      <el-table-column
        prop="paymentStatus"
        align="center"
        label="交易类型"/>
      <el-table-column
        prop="paymentStatus"
        align="center"
        label="状态"/>
      <el-table-column
        align="center"
        label="操作"
        width="160">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"
                     type="text"
                     size="small"
                     ref="btn">{{ btnValue }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="orderPayment" v-show="orderPayment">
      <p class="contentTitle">订单付款</p>
      <div class="contentBox">
        <span>日期：</span><span class="contentInfo">2019-03-28 00:00:00</span>
        <span>金额：</span><span class="contentInfo">￥198.00</span>
        <span>支付方式：</span><span class="contentInfo">线下支付</span>
        <span>订单号：</span><span class="contentInfo">DH-O-20190328-265863</span>
      </div>
      <div class="contentBox border-bottom">
        <span>备注：</span><span class="contentInfo">无</span>
      </div>
      <div class="contentBox">
        <span>流水号：</span><span class="contentInfo">201903280100002600275072</span>
        <span>操作人：</span><span class="contentInfo">谢亚(ydhcst1000026f)</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class paymentRecordTable extends Vue {
    tableData = [
      {
        number: '20160502',
        date: '2018-08-11 18:21',
        name: '王小',
        money: '20',
        address: '上海市普陀区金沙江路 1518 弄',
        shipments: '备货中/待发货',
        shipmentsType: 1,
        auditStatus: '待订单审核',
        paymentStatus: '未付款',
        type: '代下单'
      }
      ]
    btnValue = '详情'
    orderPayment = false
    handleClick (e) {
      if (this.orderPayment) {
        this.orderPayment = false
        this.btnValue = '详情'
      } else {
        this.orderPayment = true
        this.btnValue = '收起'
      }
    }
  }
</script>
<style lang="less">
  .myTable{
    .el-table th{
      background: #f7f7f7!important;//修改表头背景色
    }
  }
  .name-wrapper{
    text-align: center;
  }
  .auditTableData{
    .el-table{
      font-size: 12px;
    }
  }
</style>
<style scoped lang="less">
  @import "../../../../../themes/orderModule/orderLess";
  .myTable{
    width: 100%;
    .border-bottom{
      border-bottom: 1px solid #eee;
    }
    .orderPayment{
      font-size: 12px;
      border:1px solid #eee;
      padding: 20px;
      border-top: none;
      .contentTitle{
        margin-bottom: 30px;
      }
      .contentBox{
        padding: 10px;
      }
      .contentInfo{
        margin-right: 20px;
      }
    }
    .numberType{
      background: @bg-color;
      color: #ffffff;
      padding: 3px;
    }
    .orderDate{
      font-size: 12px;
      color: #999;
      line-height: 20px;
    }
    .auditStatus{
      color: #f60;
    }
    .orderAddress{
      color: @bg-color;
    }
    .el-button--text{
      color: @font-color;
    }
    .el-button--primary {
      background-color: @bg-color;
      border-color: @font-color;
    }
    .routerLink{
       cursor: pointer;
     }
    .routerLink:hover{
      color: @font-color;
      border-bottom: 1px solid @font-color;
    }
  }
</style>
