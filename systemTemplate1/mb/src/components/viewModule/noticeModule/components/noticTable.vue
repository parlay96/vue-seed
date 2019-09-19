<template>
  <div class="noticTable boxSizing">
    <el-table :data="tableData"
              max-height="500"
              style="width: 100%">
      <el-table-column type="selection" width="55"/>
      <el-table-column label="通知标题" align="left">
        <template slot-scope="scope"><a class="links">{{ scope.row.title }}</a></template>
      </el-table-column>
      <el-table-column
        prop="type"
        align="center"
        width="280"
        label="通知分类"/>
      <el-table-column
        prop="date"
        align="center"
        width="180"
        label="时间"/>
    </el-table>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class noticTable extends Vue {
    tableData = [
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', ype: '代下单'},
      {date: '2018-08-11 18:21', title: '上海市普陀区金沙江路 1518 弄', type: '代下单'}
     ]
  }
</script>
<style lang="less">
  .noticTable{
    padding: 0 20px;
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
<style lang="less">
  @import "../../../../themes/orderModule/orderLess";
  .noticTable{
    width: 100%;
    overflow-x: scroll;
    .links {
      color: #555;
      &:hover{
        color: @bg-color !important;
        text-decoration:underline;
      }
    }
    .publicCheckbox ();
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
