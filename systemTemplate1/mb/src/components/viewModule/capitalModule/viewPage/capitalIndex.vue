<template>
  <div class="card-box guide capital"
       v-loading.fullscreen.lock="$store.state.toLoading">
    <lzTabs @tab-click="tabClick"
            :tablist="editableTabs2">
      <!-- <template slot="right">
        <div>
          <plsearch />
        </div>
      </template> -->
      <div>
        <component :is="tabName" />
      </div>
    </lzTabs>
  </div>
</template>

<script>
  import Vue from 'vue'
  import lzTabs from '../../../publicComponent/lz-tabs'
  import capitalAccount from '../pageComponents/capitalAccount'
  import detailList from '../pageComponents/detailList'
  // import plsearch from '../../../publicComponent/pl-search/searchIndex'
  import { Component } from 'vue-property-decorator'
@Component({ components: { lzTabs, capitalAccount, detailList } })
  export default class capitalIndex extends Vue {
  editableTabs2 = [{
    title: '资金账户',
    name: 'capitalAccount'
  }, {
    title: '收支明细',
    name: 'detailList'
  }]
  tabName = 'capitalAccount'
  mounted () {
  }
  // 组件的切换
  tabClick (obj) {
    this.tabName = obj.name
  }
  }
</script>
<style lang="less" scoped>
</style>

<style lang="less">
#expandTable {
  .el-table__row.expanded,
  .el-table__expanded-cell {
    border: 1px solid #bde3a7;
    background-color: #fcfefb;
  }
  .el-table__expanded-cell {
    font-size: 12px;
  }
  .current-row {
    td {
      border-top: 1px solid #bde3a7;
      background-color: #fcfefb;
      &:nth-child(1) {
        border-left: 1px solid #bde3a7;
      }
    }
  }
}
</style>
