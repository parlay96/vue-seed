<template>
  <div class="myTable">
    <div style="margin:10px 0">退款金额</div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="number"
        label="退款金额"
        align="left"
        width="180"/>
      <el-table-column
        prop="money"
        align="center"
        label="退款原因"/>
      <el-table-column
        prop="money"
        align="center"
        label="退款时间"/>
      <el-table-column
        prop="auditStatus"
        align="center"
        width="160"
        label="状态"/>
    </el-table>
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
    overflow-x: scroll;
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
