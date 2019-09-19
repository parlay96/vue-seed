<template>
  <div class="lz-productDetailsHead">
    <div class="lz-head clearfix">
      <!-- 头部左边 -->
      <div class="head-left fl">
        <div class="item-img">
          <img src="https://oss.dinghuo123.com/images/productImage/1000030/p9a82c754-f78e-4c15-966b-a2dd85fb0cf7.jpg@480w_480h.jpg"
               width="100%"
               height="100%"
               alt="">
        </div>
        <div class="item-smallImgs clearfix">
          <a class="prev disabled fl" />
          <a class="next fr" />
          <div class="items fl">
            <ul>
              <li>
                <img src="https://oss.dinghuo123.com/images/productImage/1000030/p3651975d-08f1-4c2e-8bb3-03fe78570f3c.jpg@60w_60h.jpg"
                     data-bigsrc="https://oss.dinghuo123.com/images/productImage/1000030/p3651975d-08f1-4c2e-8bb3-03fe78570f3c.jpg@480w_480h.jpg"
                     data-superbigsrc="javascript:void(0)"
                     :class="{'img-active':1===1}"
                     alt=""></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 头部右边 -->
      <div class="head-right fl">
        <div class="item-title">
          <h1>莎拉公主 奥地利水晶项链 天使泪水晶项链 </h1>
          <div class="title-class">
            <span>分类：家居家纺</span>
            <span>编码：P72205808</span>
            <span>条形码：</span>
          </div>
        </div>
        <!-- 价格 -->
        <div class="item-price">
          <div class="price-group">
            <span>市场价格：</span>
            <span>￥198</span>
          </div>
          <div class="price-group">
            <span>订货价格：</span>
            <span class="price-red">￥138.6</span>
          </div>
        </div>
        <!-- 规格选择 -->
        <div class="itme-specBox">
          <div class="spec-group">
            <div class="group-left">选择材质：</div>
            <div class="group-right">
              <div class="group-right-box">
                <div class="group-active">
                  123
                </div>
              </div>
            </div>
          </div>
          <div class="spec-group">
            <div class="group-left">选择材质：</div>
            <div class="group-right">
              <div class="group-right-box">
                <div class="group-active">
                  123
                </div>
              </div>
            </div>
          </div>
          <div class="spec-group">
            <div class="group-left">选择材质：</div>
            <div class="group-right">
              件
            </div>
          </div>
          <div class="spec-group">
            <div class="group-left">商品标签：</div>
            <div class="group-right">
              <span class="group-tag">新品上架</span>
            </div>
          </div>
          <div class="spec-group">
            <div class="group-left">购买数量：</div>
            <div class="group-right">
              <input class="commonInput"
                     type="text">
            </div>
          </div>
        </div>
        <div class="itme-btns">
          <div class="shopcar">
            <i class="iconfont icon03f">加入购物车
            </i>
          </div>
          <div class="collection">
            <i class="iconfont icon03f">加入收藏
            </i>
          </div>
        </div>
        <div class="moreBuy"><span @click="buyClickF">多选购买</span></div>
      </div>
    </div>
    <el-dialog title="莎拉公主 奥地利水晶项链 天使泪水晶项链"
               :visible.sync="dialogTableVisible">
      <el-table :data="gridData"
                height="350px">
        <el-table-column property="date"
                         label="规格"
                         width="200" />
        <el-table-column property="name"
                         label="订货价" />
        <el-table-column property="name"
                         label="库存" />
        <el-table-column property="name"
                         label="起订量" />
        <el-table-column property="name"
                         label="数量">
          <input class="commonInput"
                 type="text"
                 style="width:40px">
        </el-table-column>
      </el-table>
      <div class="clearfix computedPrice-bottom">
        <div class="fl">
          <div><span class="f14">合计数量：</span> <span class="f16">0</span> <span class="f14">件</span></div>
          <div><span class="f14">合计金额：</span> <span class="f14">￥</span><span class="f16">0.00</span></div>
        </div>
        <div class="fr">
          <div>
            <input type="text"
                   class="commonInput"
                   style="width:60px"
                   maxlength="5"
                   placeholder="数量统一">
            <span class="probtn">
              确定
            </span>
          </div>
          <div class="bottom-btn">
            <span class="probtn">
              加入购物车
            </span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
@Component({})
  export default class index extends Vue {
  gridData = [{
    date: '材质：水晶，颜色：橄榄绿',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }]
  dialogTableVisible = false
  buyClickF () {
    this.dialogTableVisible = true
  }
  }
</script>

<style lang="less" scoped>
@import "../../../../../themes/publicStyle/common";
.lz-productDetailsHead {
  // input 框
  .commonInput {
    padding: 5px 14px;
    width: 100%;
    height: 20px;
    vertical-align: middle;
    line-height: 20px;
    border: 1px solid #d6dee3;
    font-family: verdana, "宋体", "Microsoft Yahei", Tahoma, Arial;
    font-size: 12px;
    outline: 0;
    &:focus {
      border-color: @dh-color;
    }
    &:hover {
      box-shadow: 0 0 1px #ddd;
    }
  }
  // 头部左边
  .head-left {
    // 主图
    .item-img {
      width: 350px;
      height: 350px;
      margin-bottom: 15px;
    }
    // 小图集合
    .item-smallImgs {
      position: relative;
      width: 350px;
      height: 56px;
      overflow: hidden;
      .next,
      .prev {
        display: block;
        width: 13px;
        height: 50px;
        background: 0 15px no-repeat;
        cursor: pointer;
      }
      .next {
        background-image: url(../../../../../assets/productDetails/pro-right.png);
      }
      .prev {
        background-image: url(../../../../../assets/productDetails/pro-left.png);
      }
      .disabled {
        cursor: default;
        opacity: 0.4;
      }
      .items {
        width: 320px;
        overflow: hidden;
      }
      ul {
        white-space: nowrap;
        li {
          width: 64px;
          text-align: center;
          display: inline-block;
          img {
            border: 1px solid transparent;
            padding: 2px;
            width: 50px;
            height: 50px;
          }
          .img-active {
            border-color: @dh-color;
          }
          &:hover {
            img {
              border-color: @dh-color;
            }
          }
        }
      }
    }
  }
  // 头部右边
  .head-right {
    color: #555;
    // 头部右边的头部
    .item-title {
      h1 {
        font-weight: 700;
        font-size: 18px;
        color: #333;
      }
      .title-class {
        line-height: 30px;
        span {
          margin-right: 20px;
        }
      }
    }
    // 价格
    .item-price {
      width: 700px;
      background-color: #f7f7f7;
      padding: 10px 0 10px 25px;
      .price-group {
        line-height: 30px;
      }
      .price-red {
        color: red;
        font-size: 20px;
      }
    }
    // 规格配置
    .itme-specBox {
      padding-left: 20px;
      margin-top: 10px;
      .spec-group {
        line-height: 40px;
        .group-left,
        .group-right {
          display: inline-block;
        }
        .group-right {
          .group-right-box {
            width: 600px;
            div {
              display: inline-block;
              border: 1px solid #c6cacc;
              margin: 0 10px 10px 0;
              padding: 4px 12px;
              line-height: 22px;
              cursor: pointer;
            }
            .group-active {
              border: 2px solid @dh-color;
              padding: 3px 11px;
              line-height: 22px;
            }
          }
          .group-tag {
            display: inline-block;
            line-height: 20px;
            padding: 3px 10px;
            background-color: @dh-color;
            color: #fff;
            margin-right: 10px;
          }
          input {
            width: 120px;
          }
        }
      }
    }
    // 按钮
    .itme-btns {
      padding: 20px 0 0 20px;
      div {
        width: 140px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        border-radius: 2px;
        text-align: center;
        display: inline-block;
        min-width: 90px;
        font-weight: 400;
        padding: 0 5px;
        margin-right: 20px;
        cursor: pointer;
      }
      .shopcar {
        color: #fff;
        background-color: @dh-color;
        &:hover {
          opacity: 0.8;
        }
      }
      .collection {
        color: #fff;
        background-color: #ccc;
        &:hover {
          background-color: #ddd;
        }
      }
    }
    // 多选购买
    .moreBuy {
      padding: 10px 0 10px 80px;
      span {
        color: @dh-color;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
  // 弹框底部
  .computedPrice-bottom {
    padding: 20px 20px 0 20px;
    line-height: 30px;
    .bottom-btn {
      margin-top: 10px;
      text-align: right;
      .probtn {
        color: #fff;
        background-color: #4bafbe;
      }
    }
    .probtn {
      width: auto;
      margin-bottom: 0;
      font-weight: 400;
      white-space: nowrap;
      padding: 0 5px;
      cursor: pointer;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      border: 1px solid #dce2e7;
      vertical-align: middle;
      background: #f1f1f1;
    }
  }
}
</style>
