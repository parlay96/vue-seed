<template>
  <section class="card-box guide promotion-detail">
    <div class="promotion-header">
      <h3>
        <i class="iTagStyle"
           :style="{'background-color':bgcolor}">{{ cuxiaoDetail.cuxiaoText }}</i>
        <b>{{ cuxiaoDetail.cuxioaTatil }}</b>
        <span>结束时间:{{ endDate }}</span>
      </h3>
      <p>{{ cuxiaoDetail.goodsName }}</p>
      <p>{{ cuxiaoDetail.goodsCuxiaoDetail }}</p>
      <p>说明：多单位商品按最小单位计件数。</p>
    </div>
    <div class="table-total">
      已选购<span class="red combinedPromotion-productNumber">0</span>件商品，共计<span class="red combinedPromotion-priceSubtotal">0.00</span>元
    </div>
    <el-table :data="tableData"
              empty-text="没有促销内容"
              :header-cell-style="{'background-color': '#f5f6f7','color': '#555','font-size':'14px'}">
      <el-table-column label="商品名称"
                       width="500">
        <el-row>
          <el-col :span="6">
            <img src="../../../../../assets/page/001.jpg">
          </el-col>
          <el-col :span="18">
            <p>
              <a href="#">商品编码:203415</a>
            </p>
            <a href="#">西门子（SIEMENS）5TG01171CC1 开关插座 远景两位音响插座插座（雅白色）</a>
          </el-col>
        </el-row>
      </el-table-column>
      <el-table-column label="参数" />
      <el-table-column label="价格">
        <template slot-scope="scope">￥{{ scope.row.money }}</template>
      </el-table-column>
      <el-table-column prop="count"
                       label="订购数量">
        <el-input slot-scope="scope"
                  v-model="scope.row.count" />
      </el-table-column>
      <el-table-column label="单位">
        <span slot-scope="scope">{{ scope.row.danwei }}</span>
      </el-table-column>
      <el-table-column label="操作">
        <a href="javascript:;">详情</a>
      </el-table-column>
    </el-table>
    <div class="table-total bgf7">
      已选购<span class="red combinedPromotion-productNumber">0</span>件商品，共计<span class="red combinedPromotion-priceSubtotal">0.00</span>元
    </div>
  </section>
</template>
<script>
  import Vue from 'vue'
  import moment from 'moment'
  import { Component } from 'vue-property-decorator'
@Component()
  export default class promotionIndex extends Vue {
  tableData = [
    {
      money: '1',
      count: '0',
      danwei: '个'
    }, {
      money: '2',
      count: '99',
      danwei: '个'
    }
  ]
  endDate = moment(new Date()).format('YYYY-MM-DD')
  bgcolor = '#fa552c'
  cuxiaoDetail = {
    cuxiaoText: '满减',
    cuxioaTatil: '订单促销',
    goodsName: '"羽合 毛巾家纺 素色缎条毛巾四条装"',
    goodsCuxiaoDetail: '订购数量每满3盒，获赠品 “瑞士进口Lindt瑞士莲经典排装提子果仁牛奶巧克力100g”1个'
  }
  mounted () { }
  }
</script>
<style lang="less" scoped>
@import "../../../../../themes/publicStyle/common.less";
.promotion-detail {
  padding: 36px 20px 80px;
  .promotion-header {
    padding-left: 20px;
    h3 {
      margin-bottom: 10px;
      span {
        color: #bbb;
        margin-left: 20px;
        font-weight: 400;
      }
    }
    p {
      color: #888;
      padding: 2px 10px 5px;
      font-weight: 400;
      &:last-child {
        color: red;
      }
    }
  }
  .table-total {
    font-size: 14px;
    color: #555;
    font-weight: 700;
    text-align: right;
    padding-right: 20px;
    span {
      color: red;
    }
  }
  .el-table {
    margin: 20px 0;
    a:hover {
      text-decoration: underline;
    }
    .el-row {
      img {
        display: inline-block;
        width: 100px;
        height: 100px;
      }
      a {
        color: #555;
        &:hover {
          color: @dh-color;
        }
      }
      p {
        a {
          color: #999;
        }
      }
    }
  }
  .bgf7 {
    height: 50px;
    line-height: 50px;
    background-color: #f7f7f7;
  }
}
</style>
