<template>
  <div class="myTable">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"/>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class orderTable extends Vue {
    tableData = [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }
</script>

<style scoped lang="less">
  .myTable{
    .el-table th{
      background: #f7f7f7!important;
    }
  }
</style>
