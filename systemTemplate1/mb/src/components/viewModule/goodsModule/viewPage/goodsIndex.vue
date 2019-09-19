<template>
  <div class="card-box guide lz-goodsIndex">
    <lzTabs @tab-click="tabClick"
            :tablist="editableTabs2">
      <template slot="right">
        <div>
          <plsearch />
        </div>
      </template>
      <filterHead />
      <div class="lz-scroll clearfix">
        <div class="fl lz-left">
          <lzProductClass />
        </div>
        <div class="fr lz-right">
          <component :is="tabName" />
        </div>
      </div>
    </lzTabs>
    <div class="block"
         style="text-align: right;">
      <el-pagination :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400" />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import goodsIndexListOne from '../pageComponents/goodsIndex/templateListOne'
  import templateListTwo from '../pageComponents/goodsIndex/templateListTwo'
  import filterHead from '../components/filterHead'// 筛选头部
  import lzProductClass from '../components/lz-productClass'// 筛选头部
  import lzTabs from '../../../publicComponent/lz-tabs'
  import plsearch from '../../../publicComponent/pl-search/searchIndex'
  import { Component } from 'vue-property-decorator'
@Component({ components: { goodsIndexListOne, templateListTwo, filterHead, lzTabs, plsearch, lzProductClass } })
  export default class goodsIndex extends Vue {
  editableTabs2 = [{
    title: '商品列表'
  }, {
    title: '商品收藏夹'
  }]
  tabName = 'templateListTwo'
  // 组件的切换
  tabClick (obj) {
    this.tabName = obj.name
  }
  }
</script>

<style lang="less" scoped>
.lz-goodsIndex {
  .lz-left {
    width: 200px;
  }
  .lz-right {
    width: calc(100% - 200px);
  }
}
.lz-scroll {
  height: 600px;
  overflow: scroll;
  &:hover::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background-color: rgba(144, 147, 153, 0.5);
  }
  /*Div失去焦点滑块样式*/
  &:focus::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>
<style lang="less">
.lz-goodsIndex {
  .lz-tabs .tabContent {
    padding-bottom: 20px !important;
  }
}
</style>
