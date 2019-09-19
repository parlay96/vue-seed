<template>
  <div class="lz-goodsIndexListTwo">
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="date"
                       width="500"
                       label="商品">
        <template slot-scope="scope">
          <div class="proBox">
            <div class="lz-img itemBox">
              <img src="https://35dinghuo.oss-cn-hangzhou.aliyuncs.com/smdh-imgs/userfiles/59050/originalImages/commodity/2018/11/26/commodityImage_12089762870509297.jpg"
                   width="64"
                   height="64"
                   alt="">
            </div>
            <div class="itemBox">
              <div>编号：p12121</div>
              <div>奥斯陆的</div>
              <div class="itemGroup">
                <div class="group-left">材质</div>
                <div class="group-right">
                  <lzSelect />
                </div>
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name"
                       label="参数" />
      <el-table-column prop="province"
                       label="价格" />
      <el-table-column prop="city"
                       label="订购数量">
        <div class="proInput">
          <input type="text">
        </div>
      </el-table-column>
      <el-table-column prop="address"
                       label="单位" />
      <el-table-column prop="zip"
                       label="操作" />
    </el-table>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import lzSelect from '../../components/lz-select'
@Component({ components: { lzSelect } })
  export default class goodsIndexListTwo extends Vue {
    data () {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '米',
          zip: '操作'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '米',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '米',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '米',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '米',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '米',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '米',
          zip: 200333
        }]
      }
    }
  }
</script>

<style lang="less" scoped>
.lz-goodsIndexListTwo {
  .proBox {
    .itemBox {
      display: inline-block;
      vertical-align: top;
    }
    .lz-img {
      width: 64px;
      height: 64px;
      border: 1px solid #ccc;
      margin-right: 10px;
    }
    .itemGroup {
      padding-bottom: 10px;
      font-size: 0;
      width: 200px;
      .group-left,
      .group-right {
        display: inline-block;
        font-size: 12px;
        vertical-align: middle;
      }
      .group-left {
        width: 20%;
      }
      .group-right {
        width: 80%;
        height: 30px;
        span {
          margin-left: 6px;
        }
      }
    }
  }
  .proInput {
    input {
      padding: 5px 12px;
      height: 20px;
      vertical-align: middle;
      line-height: 20px;
      border: 1px solid #eee;
      color: #555;
      font-family: verdana, "宋体", "Microsoft Yahei", Tahoma, Arial;
      font-size: 12px;
      outline: 0;
      width: 70%;
    }
  }
}
</style>
