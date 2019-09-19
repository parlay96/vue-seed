<template>
  <div>
    <tableSelect/>
    <orderTable/>
    <orderSheetPagination/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import orderTable from '../../orderPublicComponents/orderSheetTable'
  import tableSelect from '../../orderPublicComponents/orderSheetSelect'
  import orderSheetPagination from '../../orderPublicComponents/orderSheetPagination'
  @Component({components: {orderTable, tableSelect, orderSheetPagination}})
  export default class orderSheet extends Vue {
  }
</script>

<style scoped>

</style>
