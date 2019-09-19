<template>
  <div>
    <tableSelect :down-order-show="downOrderShow"/>
    <returnOrderTable/>
    <orderSheetPagination/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import returnOrderTable from '../../orderPublicComponents/returnOrderTable'
  import tableSelect from '../../orderPublicComponents/orderSheetSelect'
  import orderSheetPagination from '../../orderPublicComponents/orderSheetPagination'
  @Component({components: {returnOrderTable, tableSelect, orderSheetPagination}})
  export default class returnOrderSheet extends Vue {
    downOrderShow = false // 控制下单方式的显示与隐藏
  }
</script>

<style scoped>

</style>
