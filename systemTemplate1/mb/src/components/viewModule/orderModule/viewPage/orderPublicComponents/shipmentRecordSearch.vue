<template>
  <div class="myForm">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="时段选择">
        <datePicker/>
      </el-form-item>
      <el-form-item label="">
        <publicCheckbox :checked="form.checked" @handle-change="handleChange" desc="按商品合并"/>
      </el-form-item>
      <el-form-item label="选择商品" v-show="buttonToggle">
        <el-radio v-model="form.selectGoods" :label="1">名称</el-radio>
        <el-radio v-model="form.selectGoods" :label="2">类别</el-radio>
        <div v-show="form.selectGoods==1" class="selectGoods">
          <el-input v-model="form.goodsName" placeholder="商品名称/编码/条形码/关键字"/>
        </div>
        <div v-show="form.selectGoods==2" class="selectGoods">
          <el-select v-model="form.goodsType">
            <el-option label="全部" :value="1"/>
            <el-option label="食品" :value="2"/>
            <el-option label="鲜花" :value="3"/>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
        <el-button type="text"
                   class="hiddenButton"
                   @click="handleToggle"
        ><span ref="hiddenButton" >隐藏 <i class="iconfont iconxiangshangjiantou" style="color: #555"/></span></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import datePicker from './datePicker'
  import publicCheckbox from './publicCheckbox'
  @Component({components: {datePicker, publicCheckbox}})
  export default class shipmentRecordSearch extends Vue {
    buttonToggle = true
    form= {
        checked: true,
        date1: '',
        date2: '',
        selectGoods: 1,
        goodsType: 2,
        goodsName: ''
      }
    // radio 传递过来的值
    handleChange (e) {
      console.log('父' + e)
    }
      onSubmit () {
        console.log('submit!')
      }
    handleToggle () {
      if (this.buttonToggle) {
          this.buttonToggle = false
          this.$refs.hiddenButton.innerHTML = `更多查询条件 <i class="iconfont iconxiangxiajiantou" style="color: #555"/>`
      } else {
        this.buttonToggle = true
        this.$refs.hiddenButton.innerHTML = `隐藏 <i class="iconfont iconxiangshangjiantou" style="color: #555"/>`
      }
    }
  }
</script>
<style lang="less">
  @import "../../../../../themes/orderModule/orderLess";
  .myForm{
    .publicRadio();
    .publicButton ()
  }
</style>
<style scoped lang="less">
  @import "../../../../../themes/orderModule/orderLess";
  .myForm{
    padding-left: 20px;
    box-sizing: border-box;
    .selectGoods{
      width: 400px;
      .el-select{
        width: 400px;
      }
    }
    .el-button--text{
      color: @font-color;
    }
    .hiddenButton{
      margin-left: 30px;
    }
    .el-form-item {
      margin-bottom: 10px;
    }
  }
</style>
