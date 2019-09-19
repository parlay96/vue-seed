<template>
  <div class="myCheckbox">
    <el-checkbox v-model="myChecked" @change="handleChange">{{ desc }}</el-checkbox>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component, Prop, Emit, Watch } from 'vue-property-decorator'
  @Component()
  export default class orderStatisticSelect extends Vue {
    myChecked=true
    @Prop() checked
    @Prop() desc
    @Watch('checked')
    changeValue (val) {
      this.myChecked = val
    }
    @Emit()
    handleChange (e) {
      console.log(e)
      return e
    }
  }
</script>
<style lang="less">
  @import "../../../../../themes/orderModule/orderLess";
  .myCheckbox{
    .publicCheckbox()
  }
</style>
<style lang="less" scoped>
  @import "../../../../../themes/orderModule/orderLess";
  .myCheckbox{
    color: #555;
    .el-checkbox__input.is-checked+.el-checkbox__label {
      color: @font-color;
    }
  }
</style>
