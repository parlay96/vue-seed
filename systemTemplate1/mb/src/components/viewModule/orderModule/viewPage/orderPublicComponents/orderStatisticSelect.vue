<template>
  <div class="mySelect">
    <div class="left">
      <span>时段选择</span>
      <datePicker class="datePicker"/>
      <el-button type="primary" size="small">查询</el-button>
    </div>
    <div class="left">
      <publicCheckbox :checked="checked" @handle-change="handleChange" desc="仅统计已完成的订货单/退货单"/>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import datePicker from './datePicker'
  import publicCheckbox from './publicCheckbox'
  @Component({components: {datePicker, publicCheckbox}})
  export default class orderStatisticSelect extends Vue {
    checked=true
    handleChange (e) {
      console.log('父' + e)
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../../../themes/orderModule/orderLess";
  .mySelect{
    color: #555;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      display: flex;
      align-items: center;
      .datePicker{
        margin: 0 10px;
      }
    }
    .el-button--primary {
      background-color: @bg-color;
      border-color: @font-color;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label {
      color: @font-color;
    }
  }
</style>
