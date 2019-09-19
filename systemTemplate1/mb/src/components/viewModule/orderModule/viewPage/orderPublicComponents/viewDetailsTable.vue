<template>
  <div class="myTable">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="number"
        label="单号"
        align="left"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.number }}</span> <span class="numberType" v-if="scope.row.type">{{ scope.row.type }}</span>
          <p class="orderDate">{{ scope.row.date }}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="money"
        align="center"
        label="金额"/>
      <el-table-column
        prop="address"
        align="center"
        label="收货地址">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="bottom">
            <p>收货地址: {{ scope.row.address }}</p>
            <p>联系方式: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <p>张生</p>
              <span><i class="el-icon-location orderAddress"/>地址<i class="el-icon-caret-bottom" /></span>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="shipments"
        align="center"
        width="160"
        label="出库/发货">
        <template slot-scope="scope">
          <p>{{ scope.row.shipments }}</p>
          <div v-if="scope.row.shipmentsType == 2">
            <span><i class="iconfont iconwuliupeisong- auditStatus"/><router-link :to="{path: '/notice'}" tag="span" class="routerLink"> 物流信息</router-link><i class="el-icon-caret-bottom" /></span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="auditStatus"
        align="center"
        width="160"
        label="审核状态">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="bottom">
            <div class="auditTableData">
              <el-table
                :data="auditTableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="处理时间"
                  width="200"/>
                <el-table-column
                  prop="message"
                  label="处理信息"
                  width="200"/>
              </el-table>
            </div>
            <div slot="reference" class="name-wrapper">
              <p class="auditStatus">{{ scope.row.auditStatus }}</p>
              <span><i class="iconfont iconshijian auditStatus"/> 跟踪 <i class="el-icon-caret-bottom" /></span>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="160">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">订单详情</el-button>
          <el-button type="text" size="small">付款</el-button>
          <el-button type="primary"
                     size="mini"
                     v-if="scope.row.shipmentsType == 2">收货确认</el-button>
        </template>
      </el-table-column>
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
      this.$router.push({path: 'details'})
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
