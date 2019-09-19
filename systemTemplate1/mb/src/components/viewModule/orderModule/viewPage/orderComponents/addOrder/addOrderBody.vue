<template>
  <div class="addOrderBody">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="  "
        type="index"
        width="80"
        align="center"
        :index="1"/>
      <el-table-column label="  " align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            @click="handleDelete(scope.$index, tableData)"><i class="el-icon-minus"/></el-button>
          <el-button
            size="mini"
            type="text"
            @click="handleEdit(scope.$index, tableData)"><i class="el-icon-plus"/></el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="商品"
        align="center"
        prop="name"
        width="300"/>
      <el-table-column
        label="数量"
        align="center"
        prop="number"
        width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.number" @blur="handleBlur( scope.$index, scope.row)"/>
        </template>
      </el-table-column>
      <el-table-column
        label="单位"
        align="center"
        prop="unit"
        width="120"/>
      <el-table-column
        label="单价"
        align="center"
        prop="unitPrice"
        width="120"/>
      <el-table-column
        label="小计"
        align="center"
        prop="total"
        width="180"/>
      <el-table-column
        label="备注"
        align="center"
        prop="remark"
        width="180">
        <template slot-scope="scope">
          <el-button type="text">添加</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="aggregate" v-if="bodyType === 'add'">
      <div class="aggregate-l clearfix">
        <div class="fl">
          <el-checkbox v-model="checked">已申请特价，请输入获批订单金额</el-checkbox>
        </div>
        <div class="fr"><el-input v-model="orderPrice" :disabled="!checked"/></div>
      </div>
      <div class="aggregate-r">
        <div class="top">合 计：￥<span>00</span></div>
        <div class="top">特价金额：￥<span>00</span></div>
        <div class="top">应付总额：￥<span class="red">00</span></div>
      </div>
    </div>
    <div class="aggregate" v-else>
      <div class="aggregate-l clearfix">
        <div class="fl">
          <el-checkbox v-model="checked">已申请退货，获批退款金额为</el-checkbox>
        </div>
        <div class="fr"><el-input v-model="orderPrice" :disabled="!checked"/></div>
      </div>
      <div class="aggregate-r">
        <div class="top">合 计：￥<span>00</span></div>
        <div class="top">应付总额：￥<span class="red">00</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  @Component()
  export default class addOrderBody extends Vue {
    @Prop({default: 'add'}) bodyType
    checked = false // 申请特价的开关
    orderPrice = ''// 申请特价 输入的金额
    tableData= [
      {
        number: 2,
        name: '相连',
        unit: '件',
        unitPrice: 50,
        total: 50,
        remark: ''
      },
      {
        number: 1,
        name: '相连',
        unit: '件',
        unitPrice: 60,
        total: 50,
        remark: ''
      },
      {
        number: 1,
        name: '相连',
        unit: '件',
        unitPrice: 60,
        total: 50,
        remark: ''
      }]
    handleEdit (index, row) {
      row.push({})
      console.log(index)
    }
    handleDelete (index, row) {
      row.splice(index, 1)
      console.log(row)
    }
    handleBlur (index, row) {
      console.log(row.number)
      // var newObj = this.tableData
      // newObj[index].total = row.unitPrice + row.number
      // this.tableData = newObj
      // console.log(newObj[index].total)
    }
  }
</script>

<style lang="less">
  @import "../../../../../../themes/publicStyle/common";
  @import "../../../../../../themes/publicStyle/default";
 .addOrderBody{
   .el-input.is-disabled .el-input__inner{
     background: none;
   }
   margin: 10px 0;
   .el-input{
     .el-input__inner{
       border-color: #fff;
       text-align: center;
       &:focus{
         border-color: @dh-color;
       }
     }
   }
   .aggregate{
     border: 1px solid #e5e8ea;
     margin-top: -1px;
     padding: 20px 0;
     overflow: hidden;
     .aggregate-l{
       width: 70%;
       height: 100%;
       padding-left: 30px;
       box-sizing: border-box;
       float: left;
       text-align: left;
       div{
         float: left;
         .el-input{
           height: 30px;
           width: 150px;
           .el-input__inner{
             height: 30px;
             line-height: 30px;
             border:none;
             border-radius: 0;
             border-bottom: 1px solid #e6e8e9;
           }
         }
       }
     }
     .aggregate-r{
       width: 30%;
       height: 100%;
       padding-right: 20px;
       box-sizing: border-box;
       float: right;
       text-align: right;
       span{
         margin-left: 5px;
         &.red{
           color: red;
         }
       }
     }
   }
 }
</style>
