<template>
  <div class="mySteep">
    <el-steps :active="active" finish-status="success" align-center>
      <el-step title="提交订单"/>
      <el-step title="订单审核"/>
      <el-step title="财务审核"/>
      <el-step title="出库审核"/>
      <el-step title="发货确认"/>
      <el-step title="收货确认"/>
      <el-step title="完成"/>
    </el-steps>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
    @Component()
  export default class publicSteep extends Vue {
      active=1
  }
</script>

<style lang="less">
  @import "../../../../../themes/orderModule/orderLess";
  .mySteep{
    .el-step__head.is-success {
      color: @bg-color;
      border-color: @bg-color;
    }
    .el-step__title.is-success {
      color: @bg-color;
    }
    .el-step__title.is-process {
      color: #c0c4cc;
    }
    .el-step__head.is-process {
      color: #c0c4cc;
      border-color: #c0c4cc;
    }
  }
</style>
