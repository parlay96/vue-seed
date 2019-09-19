<template>
  <div class="selectBox">
    <div class="left">
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
      <span class="selectName" v-show="downOrderShow">下单方式:</span>
      <el-dropdown @command="handleCommands" v-show="downOrderShow">
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
    <div class="right" v-if="buttonShow">
      <el-button type="primary"
                 size="small"
                 icon="el-icon-plus"
                 @click="handleJump">新增</el-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  @Component()
  export default class tableSelect extends Vue {
    orderName = '全部订单'
    downOrderName = '全部'
    @Prop({default: true}) downOrderShow
    @Prop({default: true}) buttonShow
    handleCommand (command) {
      this.orderName = command
    }
    handleCommands (command) {
      this.downOrderName = command
    }
    // 跳到新增货单页面
    handleJump () {
      if (this.downOrderShow) {
        this.$router.push({ path: 'addOrder', query: {type: 'add'} })
      } else {
        this.$router.push({ path: 'addOrder', query: {type: 'addReturn'} })
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../../../themes/orderModule/orderLess";
  .selectBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    .el-dropdown-link {
      cursor: pointer;
      color: @font-color;
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
    .el-button--primary {
      background-color: @bg-color;
      border-color: @font-color;
    }
  }
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:hover {
    color: @font-color!important;
  }
</style>
