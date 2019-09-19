<template>
  <div class="card-box guide noticIndex boxSizing">
    <notic-select/>
    <notic-table/>
    <div class="botm overflowHidden">
      <div class="fl">
        <el-checkbox v-model="checkedRead"
                     fill="#1ab399"
                     text-color="#1ab399">标为已读</el-checkbox>
      </div>
      <div class="fr">
        <notic-pagination/>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import noticSelect from '../components/noticSelect'
  import noticTable from '../components/noticTable'
  import noticPagination from '../components/noticPagination'
  @Component({
    components: { noticSelect, noticTable, noticPagination }
  })
  export default class noticIndex extends Vue {
    checkedRead = false
  }
</script>

<style lang="less" scoped>
  .noticIndex {
    .botm {
      box-sizing: border-box;
      padding: 0 20px 0 34px;
    }
  }
</style>
