<template>
  <div class="myTable">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="number"
        label="流水号"
        align="left"
        width="180"/>
      <el-table-column
        prop="name"
        label="商品"
        align="center"
        width="180"/>
      <el-table-column
        prop="money"
        align="center"
        label="发货时间"/>
      <el-table-column
        prop="number"
        align="center"
        label="订购数量"/>
      <el-table-column
        prop="number"
        align="center"
        label="已发货数量"/>
      <el-table-column
        prop="number"
        align="center"
        label="已发货商品金额"/>
    </el-table>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class orderTable extends Vue {
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
      },
      {
        number: '20160502',
        name: '王虎',
        money: '204',
        address: '上海市普陀区金沙江路 1518 弄',
        shipments: '已出库/已发货',
        shipmentsType: 2,
        auditStatus: '待订单审核',
        paymentStatus: '未付款',
        date: '2018-08-11 18:21',
        type: '代下单'
      },
      {
        number: '20160502',
        name: '小虎',
        money: '20',
        address: '上海市普陀区金沙江路 1518 弄',
        shipments: '备货中/待发货',
        auditStatus: '待订单审核',
        shipmentsType: 1,
        paymentStatus: '未付款',
        date: '2018-08-11 18:21',
        type: '代下单'
      },
      {
        number: '20160502',
        name: '小o虎',
        money: '720',
        address: '上海市普陀区金沙江路 1518 弄',
        shipments: '备货中/待发货',
        auditStatus: '待订单审核',
        shipmentsType: 1,
        paymentStatus: '未付款',
        date: '2018-08-11 18:21',
        type: '代下单'
      }]
    auditTableData = [
      {
        date: '2019-03-27 18:21:05',
        message: '订货单已确认发货'
      },
      {
        date: '2019-03-27 18:21:05',
        message: '订货单已通过出库审核'
      }
    ]
    handleClick (e) {
      console.log(e)
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
