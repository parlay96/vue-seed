<template>
  <div class="shipmentRecord">
    <shipmentRecordSearch/>
    <statisticSum :list="list"/>
    <shipmentRecordTable/>
    <p class="contentDesc"> 统计说明：1.出库发货对账数据最早从2015-06-12 00:00 开始统计，之前数据暂不提供    2.作废的订/退货单不计入统计    3.运费不计入统计</p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import shipmentRecordSearch from '../../orderPublicComponents/shipmentRecordSearch'
  import statisticSum from '../../orderPublicComponents/statisticSum'
  import shipmentRecordTable from '../../orderPublicComponents/shipmentRecordTable'
  @Component({components: {shipmentRecordSearch, statisticSum, shipmentRecordTable}})
  export default class shipmentRecord extends Vue {
    list = {
      orderNumber: 10,
      goodsNumber: 10,
      priceNumber: 100
    }
  }
</script>

<style scoped>
  .contentDesc{
    font-size: 14px;
    color: #555;
    margin-top: 10px;
  }
</style>
