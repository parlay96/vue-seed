<template>
  <div class="noticPagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class noticPagination extends Vue {
    currentPage4 = 5
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    }
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
</script>
<style lang="less">
  @import "../../../../themes/orderModule/orderLess";
  .noticPagination{
    float: right;
    .el-pager li.active{
      color: @font-color;
    }
    .el-pager li:hover {
      color: @font-color;
    }
    .el-select .el-input.is-focus .el-input__inner{
      border-color: @bg-color;
    }
    .el-input.is-active .el-input__inner, .el-input__inner:focus {
      border-color: @bg-color;
    }
  }
  .el-select-dropdown__item.selected{
    color: @font-color;
  }
</style>
