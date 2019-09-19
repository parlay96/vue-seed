<template>
  <div class="myTable">
    <div class="selectBox">
      <span class="desc">排序:</span>
      <el-radio v-model="radio" :label="1">按下单顺序</el-radio>
      <el-radio v-model="radio" :label="2">按商品编码</el-radio>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="number"
        label="主图"
        align="left"
        width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.number }}</span>
          <img :src="scope.row.number" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品编码"
        align="center"
        width="180"/>
      <el-table-column
        prop="money"
        align="center"
        label="商品名称"/>
      <el-table-column
        prop="address"
        align="center"
        label="商品规格"/>
      <el-table-column
        prop="address"
        align="center"
        label="参数"/>
      <el-table-column
        prop="address"
        align="center"
        label="单价"/>
      <el-table-column
        prop="address"
        align="center"
        label="数量"/>
      <el-table-column
        prop="address"
        align="center"
        label="金额小计"/>
      <el-table-column
        prop="paymentStatus"
        align="center"
        label="付款状态"/>
      <el-table-column
        align="center"
        label="备注"
        width="160">
        <template slot-scope="scope">
          <el-button @click="dialogFormVisible = true" type="text" size="small">添加</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加商品备注" :visible.sync="dialogFormVisible" width="30%">
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <div class="aggregate">
      <div class="aggregate-l">
        商品数量：1
      </div>
      <div class="aggregate-r">
        <div class="top">订单金额：<span>00</span></div>
        <div class="top">应付总额：<span class="red">￥00</span></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class orderTable extends Vue {
    radio = 1
    form={desc: ''}
    dialogFormVisible = false
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
    handleClick (e) {
      console.log(e)
      this.$router.push({path: 'details'})
    }
  }
</script>

<style lang="less">
@import "../../../../../themes/orderModule/orderLess";
  .myTable{
    font-size: 14px;
    .aggregate{
      border: 1px solid #e5e8ea;
      margin-top: -1px;
      padding: 20px 0;
      overflow: hidden;
      .aggregate-l{
        width: 70%;
        height: 100%;
        padding-right: 30px;
        box-sizing: border-box;
        float: left;
        text-align: right;
      }
      .aggregate-r{
        width: 30%;
        height: 100%;
        padding-right: 20px;
        box-sizing: border-box;
        float: right;
        text-align: left;
        span{
          margin-left: 30px;
          &.red{
            color: red;
          }
        }
      }
    }
    .el-table th{
      background: #f7f7f7!important;//修改表头背景色
    }
    .selectBox{
      margin-bottom: 10px;
      .publicRadio();
      .desc{
        margin-right: 15px;
      }
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
