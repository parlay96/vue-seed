<template>
  <div class="filterHead clearfix">
    <div class="lz-left fl">
      <el-dropdown @command="handleClickF"
                   v-for="(item,i) in filterList"
                   :key="i">
        <span class="el-dropdown-link">
          <span>排序：</span>
          <span class="green">{{ item.checked }}<i class="el-icon-arrow-down el-icon--right" /></span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(data,n) in item.list"
                            :key="n"
                            :command="data.value">{{ data.itemName }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-checkbox v-model="checked"
                   fill="#1ab399"
                   text-color="#1ab399">有货</el-checkbox>
      <div class="classPro">显示商品分类</div>
    </div>
    <div class="lz-right fr">
      <i class="iconfont iconfenlei2"
         @click="modeF(1)" />
      <i class="iconfont iconfenlei"
         @click="modeF(2)" />
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
@Component()
  export default class index extends Vue {
  filterList = [
    {
      checked: '默认排序',
      list: [
        { itemName: '默认排序', value: 1 }
      ]
    },
    {
      checked: '默认排序1',
      list: [
        { itemName: '默认排序', value: 1 }
      ]
    }
  ]
  checked = false // 单选框
  // 选中后的执行方法
  handleClickF (val) {
    console.log(val, 111)
  }
  // 选择以何种方式
  modeF (val) {
    this.mode = val
  }
  }
</script>

<style lang="less" scoped>
@import "../../../../../themes/publicStyle/common";
.filterHead {
  padding-bottom: 20px;
  // 左边盒子
  .lz-left {
    .el-dropdown {
      margin-right: 20px;
    }
    .el-dropdown-link .green {
      cursor: pointer;
      color: @dh-color;
    }
    .classPro {
      font-size: 14px;
      display: inline-block;
      color: @dh-color;
      cursor: pointer;
    }
  }
  // 右边盒子
  .lz-right {
    .iconfont {
      cursor: pointer;
      font-size: 24px;
      margin-right: 10px;
      color: #868686;
    }
    .iconfont:hover {
      opacity: 0.6;
    }
  }
}
</style>
