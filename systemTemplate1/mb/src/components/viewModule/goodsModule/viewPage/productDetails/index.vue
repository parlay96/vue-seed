<template>
  <div class="lz-productDtails">
    <!-- 上半部分 -->
    <lzproductDetailsHead />
    <!-- 下面的tab切换 -->
    <div class="lz-underTab">
      <lzTabs @tab-click="tabClick"
              type='tabTopBorder'
              :tablist="tablist">
        <component :is="tabName" />
      </lztabs>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import lzproductDetailsHead from '../../pageComponents/productDetails/lz-productDetailsHead'
  import lzTabs from '../../../../publicComponent/lz-tabs'
  import lzProIntroduction from '../../pageComponents/productDetails/lz-proIntroduction'
  import lzProEnclosure from '../../pageComponents/productDetails/lz-proEnclosure'

@Component({ components: { lzproductDetailsHead, lzTabs, lzProIntroduction, lzProEnclosure } })
  export default class index extends Vue {
  tablist = [{
    title: '商品介绍',
    name: 'lzProIntroduction'
  }, {
    title: '商品附件',
    name: 'lzProEnclosure'
  }]
  tabName = 'lzProIntroduction'
  // 组件的切换
  tabClick (obj) {
    this.tabName = obj.name
  }
  }
</script>

<style lang="less" scoped>
.lz-productDtails {
  background-color: #fff;
  padding: 20px 20px 80px;
  min-height: 450px;
  .lz-underTab {
    margin-top: 30px;
  }
}
</style>
