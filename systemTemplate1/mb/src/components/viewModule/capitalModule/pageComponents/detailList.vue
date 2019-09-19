<template>
  <section>
    <el-form :inline="true"
             :model="formDetail">
      <div>
        <el-row>
          <el-col :span="20">
            <el-form-item label="">
              <el-input v-model="formDetail.orderNumber"
                        placeholder="支付流水号 / 订单号" />
            </el-form-item>
            <el-form-item label="支付时间">
              <el-date-picker v-model="formDetail.date"
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期" />
            </el-form-item>
            <el-form-item label="">
              <a href="javascript:;"
                 @click="()=>detailMore=!detailMore">更多<i :class="detailMore?'el-icon-arrow-up':'el-icon-arrow-down'" /></a>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item class="searchData">
              <el-button type="success"
                         @click="onSubmitDetail">查询</el-button>&emsp;<a href="javascript:;"><i class="el-icon-upload2" />导出</a>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <div v-if="detailMore">
        <el-form-item label="摘要">
          <el-select v-model="formDetail.region">
            <el-option label="全部摘要"
                       value="all" />
            <el-option label="现金充值"
                       value="chongzhi" />
            <el-option label="销售返点"
                       value="koukuan" />
            <el-option label="退款"
                       value="koukuan" />
            <el-option label="其他充值"
                       value="koukuan" />
            <el-option label="订单付款"
                       value="koukuan" />
            <el-option label="其他付款"
                       value="koukuan" />
            <el-option label="红冲"
                       value="koukuan" />
            <el-option label="订单退款"
                       value="koukuan" />
            <el-option label="收款单充值"
                       value="koukuan" />
            <el-option label="付款单充值"
                       value="koukuan" />
            <el-option label="付款单扣款"
                       value="koukuan" />
            <el-option label="退货单退款"
                       value="koukuan" />
          </el-select>
        </el-form-item>
        <el-form-item label="支付方式">
          <el-select v-model="formDetail.way">
            <el-option label="全部"
                       value="all" />
            <el-option label="充值"
                       value="chongzhi" />
            <el-option label="扣款"
                       value="koukuan" />
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <el-table ref="table"
              id="expandTable"
              highlight-current-row
              :header-cell-style="{'background-color': '#f5f6f7','color': '#555'}"
              empty-text="没有收支明细记录"
              :data="tableDataDetail">
      <el-table-column label="支付流水号"
                       align="center"
                       prop="id" />
      <el-table-column label="时间"
                       align="center"
                       prop="name" />
      <el-table-column label="摘要"
                       align="center"
                       prop="desc" />
      <el-table-column label="金额"
                       align="center"
                       prop="money" />
      <el-table-column label="支付方式"
                       align="center"
                       prop="way" />
      <el-table-column label="状态"
                       align="center"
                       prop="state" />
      <el-table-column label="操作"
                       align="center">
        <template slot-scope="scope">
          <a @click="e=>toogleExpand(scope.row,e)">{{ contentText }}</a>
        </template>
      </el-table-column>
      <el-table-column type="expand"
                       width="1">
        <template slot-scope="props">
          <h3>{{ props.row.way }}充值</h3>
          <span>
            充值资金账户：现金账户
          </span>
          <span>
            日期：2019-03-28 00:00:00
          </span>
          <span>
            金额：￥1.00
          </span>
          <span>
            备注：无
          </span>
          <div>
            <span>流水号：201903280100002100203553</span>
            <span>操作人：周先生(ydhcst1000021b)</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="currentPage"
                   :page-sizes="[10, 30, 50]"
                   :page-size="10"
                   :total="400"
                   layout="total, sizes, prev, pager, next, jumper" />
  </section>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
@Component()
  export default class capitalIndex extends Vue {
  currentPage = 1
  tableDataDetail = [{ id: '1',
    name: '好滋好味鸡蛋仔1',
    desc: '荷兰优质淡奶，奶香浓而不腻1',
    money: 100,
    way: 'wx',
    state: '已开通'
  }, {
    id: '2',
    name: '好滋好味鸡蛋仔2',
    desc: '荷兰优质淡奶，奶香浓而不腻2'
  }, {
    id: '3',
    name: '好滋好味鸡蛋仔3',
    desc: '荷兰优质淡奶，奶香浓而不腻3'
  }, {
    id: '4',
    name: '好滋好味鸡蛋仔4',
    desc: '荷兰优质淡奶，奶香浓而不腻4'
  }]
  formDetail = {}
  detailMore = false
  contentText = '详情'
  // 支付明细
  onSubmitDetail () {
    console.log('submit!', this.formDetail)
  }
  // 行展开收起
  toogleExpand (row, e) {
    let $table = this.$refs.table
    e.target.innerText = `${e.target.innerText}` === '收起' ? '详情' : '收起'
    this.tableDataDetail.map((item) => {
      if (row.id !== item.id) {
        $table.toggleRowExpansion(item, false)
      }
    })
    $table.toggleRowExpansion(row)
  }
  }
</script>
<style lang="less" scoped>
@import "../../../../themes/publicStyle/common.less";
a {
  color: #555;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    text-decoration: underline;
    color: @dh-color;
  }
}
.el-form--inline {
  margin-top: 20px;
  .searchData {
    a {
      color: @dh-color;
    }
  }
}
.el-table {
  a {
    color: @dh-color;
  }
  .el-table__expanded-cell {
    h3 {
      height: 40px;
      line-height: 40px;
      color: @dh-color;
      font-weight: 400;
      font-size: 16px;
    }
    div {
      height: 50px;
      line-height: 50px;
      border-top: 1px solid #eee;
      margin-top: 10px;
    }
    span {
      margin-right: 20px;
      line-height: 32px;
    }
  }
}
.el-pagination {
  text-align: right;
  margin-top: 20px;
  font-weight: 400;
  color: #606266;
}
</style>
