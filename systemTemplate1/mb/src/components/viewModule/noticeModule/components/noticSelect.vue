<template>
  <div class="selectBox">
    <div class="left">
      <span class="selectName">筛选:</span>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ orderName }}<i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="公司公告">公司公告</el-dropdown-item>
          <el-dropdown-item command="政策发文">政策发文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="handleCommands" v-show="downOrderShow">
        <span class="el-dropdown-link">
          {{ downOrderName }}<i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="全部时间">全部时间</el-dropdown-item>
          <el-dropdown-item command="最近一天">最近一天</el-dropdown-item>
          <el-dropdown-item command="最近一周">最近一周</el-dropdown-item>
          <el-dropdown-item command="最近一月">最近一月</el-dropdown-item>
          <el-dropdown-item command="最近一年">最近一年</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="right" v-if="buttonShow">
      <el-checkbox v-model="checkeds"
                   fill="#1ab399"
                   text-color="#1ab399">只显示未读</el-checkbox>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  @Component()
  export default class noticSelect extends Vue {
    orderName = '全部订单'
    downOrderName = '全部'
    checkeds = false
    @Prop({default: true}) downOrderShow
    @Prop({default: true}) buttonShow
    handleCommand (command) {
      this.orderName = command
    }
    handleCommands (command) {
      this.downOrderName = command
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../../themes/orderModule/orderLess";
  .selectBox{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
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
