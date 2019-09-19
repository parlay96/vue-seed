<template>
  <div class="addOrderHeader">
    <div class="box clearfix" v-if="bodyType === 'add'">
      <div class="left fl">
        <span>发票类型： </span>
        <el-select v-model="value" placeholder="请选择" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </div>
      <div class="right fr">
        <span class="desc">订单金额每满￥1000，立减￥100</span>
        <el-tooltip class="item"
                    effect="dark"
                    content="订单金额每满￥1000，立减￥100"
                    placement="left">
          <span>详情></span>
        </el-tooltip>
      </div>
    </div>
    <div class="box clearfix" v-else>
      <el-button type="text" @click="dialogTableVisible = true">如需关联订单号，请点此进入。</el-button>
      <el-dialog title="选择关联订单号" :visible.sync="dialogTableVisible">
        <div class="search clearfix">
          <el-input class="fl"
                    v-model="input"
                    placeholder="请输入已完成的订货单号进行查询"
                    size="small"/>
          <el-button type="info" class="searchBtn fl" size="small">搜索</el-button>
        </div>
        <el-table :data="gridData" size="small" max-height="300px">
          <el-table-column property="date" label="订单号/下单时间" width="150"/>
          <el-table-column property="name" label="订单状态" width="200"/>
          <el-table-column property="address" label="金额"/>
          <el-table-column property="address" label="付款状态"/>
          <el-table-column property="address" label="商品数量"/>
        </el-table>
        <div class="myPagination">
          <myPagination :small="true"/>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import myPagination from '../../orderPublicComponents/orderSheetPagination'
  @Component({components: {myPagination}})
  export default class addOrderHeader extends Vue {
    @Prop({default: 'add'}) bodyType
    value = '1'
    options = [
      {
      value: '1',
      label: '不开发票'
    }, {
      value: '2',
      label: '增值税普通发票'
    }, {
      value: '3',
      label: '增值税专用发票 '
    }]
    gridData=[
      {
      date: '2016-05-02',
      name: '王小虎',
      address: ' 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: ' 1518 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: ' 1518 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: ' 1518 弄'
    }, {
        date: '2016-05-02',
        name: '王小虎',
        address: ' 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: ' 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: ' 1518 弄'
      }]
    dialogTableVisible = false
    input=''
  }
</script>

<style scoped lang="less">
  @import "../../../../../../themes/publicStyle/default";
  .box{
    .left{
      float: left;
    }
    .right{
      float: right;
      .desc{
        color: #f60;
        margin-right: 10px;
      }
    }
    .search{
      .searchBtn{
        margin-left: 20px;
      }
      .el-input{
        width: 300px;
        margin-bottom: 10px;
      }
    }
    .myPagination{
      padding: 10px;
    }
  }
</style>
