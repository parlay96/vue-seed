<template>
  <div class="card-box guide promotion">
    <el-table :data="tableData"
              empty-text="没有促销内容"
              :header-cell-style="{'background-color': '#f5f6f7','color': '#555','font-size':'14px'}">
      <el-table-column prop="content"
                       label="促销内容">
        <el-tooltip placement="bottom-start"
                    popper-class="tooltipContent"
                    effect="light">
          <div slot="content">
            <p>
              <i class="iTagStyle"
                 :style="{'background-color':bgcolor}">{{ cuxiaoDetail.cuxiaoText }}</i>
              <b>{{ cuxiaoDetail.cuxioaTatil }}</b>
            </p>
            <p><b>{{ cuxiaoDetail.goodsName }}</b></p>
            <p>{{ cuxiaoDetail.goodsCuxiaoDetail }}</p>
          </div>
          <span>
            <i class="iTagStyle"
               :style="{'background-color':bgcolor}">{{ cuxiaoDetail.cuxiaoText }}</i>
            <template>
              <a v-if="superPlay"
                 href="/promotion/index/details/1"
                 target="_blank">{{ cuxiaoDetail.cuxioaTatil }}</a>
              <b v-else>{{ cuxiaoDetail.cuxioaTatil }}</b>
            </template>
            <template>
              <a href="javascript:;"
                 v-if="goodsLink">{{ cuxiaoDetail.goodsName }}</a>
              <span v-else>{{ cuxiaoDetail.goodsName }}</span>
            </template>
            <span>{{ cuxiaoDetail.goodsCuxiaoDetail }}</span>
          </span>
        </el-tooltip>
      </el-table-column>
      <el-table-column prop="date"
                       label="时间"
                       width="300px" />
    </el-table>
    <el-pagination :current-page="currentPage"
                   :page-sizes="[10, 30, 50]"
                   :page-size="10"
                   :total="400"
                   layout="total, sizes, prev, pager, next, jumper" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
@Component()
  export default class promotionIndex extends Vue {
  cuxiaoDetail = {
    cuxiaoText: '满减',
    cuxioaTatil: '订单促销',
    goodsName: '"羽合 毛巾家纺 素色缎条毛巾四条装"',
    goodsCuxiaoDetail: '订购数量每满3盒，获赠品 “瑞士进口Lindt瑞士莲经典排装提子果仁牛奶巧克力100g”1个'
  }
  goodsLink = false
  superPlay = true
  bgcolor = '#fa552c'
  currentPage = 1
  tableData = [
    {
      content: '1',
      date: '2019-3-28 17:58'
    }, {
      content: '2',
      date: '2019-3-28 17:58'
    }
  ]
  }
</script>

<style lang="less" scoped>
.promotion {
  padding: 36px 20px 80px;
  .el-table {
    font-size: 12px;
    a:hover {
      text-decoration: underline;
    }
  }
  .el-pagination {
    margin-top: 20px;
  }
}
</style>
<style lang="less">
.tooltipContent {
  border: 2px solid #edd28b !important;
  background-color: #fffef9 !important;
  border-radius: 0;
  p {
    line-height: 2rem;
  }
  &.el-tooltip__popper.is-light[x-placement^="bottom"] {
    .popper__arrow {
      border-bottom-color: #edd28b;
    }
  }
}
</style>
