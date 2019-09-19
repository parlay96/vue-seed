<template>
  <div class="lz-productClass">
    <div class="pro-title">
      商品类别
    </div>
    <div>
      <el-tree :data="data"
               :props="defaultProps"
               @node-click="handleNodeClick" />
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

@Component({})
  export default class index extends Vue {
    data () {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
    handleNodeClick (data) {
      console.log(data)
    }
  }
</script>

<style lang="less" scoped>
.lz-productClass {
  // 头部
  .pro-title {
    height: 48px;
    line-height: 48px;
    background-color: #f7f7f7;
    border: 0;
    color: #555;
    font-weight: 700;
    font-size: 14px;
    text-indent: 10px;
  }
}
</style>
