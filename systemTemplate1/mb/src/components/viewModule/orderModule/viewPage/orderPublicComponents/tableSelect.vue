<template>
  <div class="selectBox">
    <div >
      <span class="selectName">筛选:</span>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ orderName }}<i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="全部订单">全部订单</el-dropdown-item>
          <el-dropdown-item command="待处理订单">待处理订单</el-dropdown-item>
          <el-dropdown-item command="已完成订单">已完成订单</el-dropdown-item>
          <el-dropdown-item command="已作废订单">已作废订单</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="selectName">下单方式:</span>
      <el-dropdown @command="handleCommands">
        <span class="el-dropdown-link">
          {{ downOrderName }}<i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="全部订单">全部</el-dropdown-item>
          <el-dropdown-item command="待处理订单">代下单</el-dropdown-item>
          <el-dropdown-item command="已完成订单">自主下单</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="right">
      <el-button type="primary" size="small">新增</el-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class tableSelect extends Vue {
    orderName = '全部订单'
    downOrderName = '全部'
    handleCommand (command) {
      this.orderName = command
    }
    handleCommands (command) {
      this.downOrderName = command
    }
  }
</script>

<style lang="less" scoped>
  .selectBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
    .selectName {
      font-size: 14px;
      color: #555;
      line-height: 34px;
      margin-right: 10px;
    }
    .el-dropdown{
      margin-right: 15px;
    }
  }

</style>
