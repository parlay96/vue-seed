<template>
  <div class="clearfix"
       style="padding-bottom:120px">
    <div class="lz-goodsIndexListOne fl"
         v-for="item in 10"
         :key="item">
      <div class="lz-box">
        <!-- 图片盒子 -->
        <div class="item-img-box">
          <img src="https://35dinghuo.oss-cn-hangzhou.aliyuncs.com/smdh-imgs/userfiles/59050/originalImages/commodity/2018/11/26/commodityImage_12089762870509297.jpg"
               width="100%"
               height="100%"
               alt="">
        </div>
        <!-- 价格 -->
        <div class="item-price">
          ￥25.00 <span class="label">直降</span>
        </div>
        <!-- 名字的盒子 -->
        <div class="item-name">
          莎拉公主 奥地利水晶项链 天使泪水晶项链
        </div>
        <!-- 隐藏起来的盒子 -->
        <div class="item-hidden">
          <div class="hidden-group">
            <div class="group-left">材质</div>
            <div class="group-right">
              <lzSelect />
            </div>
          </div>
          <div class="hidden-group">
            <div class="group-left">材质</div>
            <div class="group-right">
              <lzSelect />
            </div>
          </div>
          <div class="hidden-group">
            <div class="group-left">数量</div>
            <div class="group-right">
              <input type="text"><span>件</span>
            </div>
          </div>
        </div>
        <!-- 按钮盒子 -->
        <div class="item-btns"><i class="iconfont iconshangpinzhongxin" />加入购物车</div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import lzSelect from '../../components/lz-select'
@Component({ components: { lzSelect } })
  export default class goodsIndexListOne extends Vue {
  }
</script>

<style lang="less" scoped>
.lz-goodsIndexListOne {
  position: relative;
  height: 400px;
  width: 270px;
  margin-right: 10px;
  margin-bottom: 10px;
  .lz-box {
    padding: 10px;
    border: 1px solid #eee;
    width: 250px;
    background: white;
    // 隐藏盒子
    .item-hidden {
      display: none;
      .hidden-group {
        padding-bottom: 10px;
        font-size: 0;
        .group-left,
        .group-right {
          display: inline-block;
          font-size: 12px;
          vertical-align: middle;
        }
        .group-left {
          width: 30%;
        }
        .group-right {
          width: 70%;
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
          span {
            margin-left: 6px;
          }
        }
      }
    }
    &:hover {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      border: 2px solid #1ab399;
      .item-hidden {
        display: block;
      }
    }
    // 图片盒子
    .item-img-box {
      width: 250px;
    }
    // 价格相关的盒子
    .item-price {
      font-size: 20px;
      color: #c00;
      line-height: 35px;
      padding: 0 5px;
      .label {
        vertical-align: middle;
        text-align: center;
        height: 15px;
        display: inline-block;
        color: #fff;
        font-size: 12px;
        font-style: normal;
        line-height: 15px;
        padding: 2px 3px;
        border-radius: 3px;
        background: #1ab399;
        margin-top: -5px;
      }
    }
    // 名字的盒子
    .item-name {
      font-size: 12px;
      height: 40px;
      line-height: 20px;
      color: #666;
      margin-bottom: 5px;
      overflow: hidden;
      word-break: break-all;
    }
    // 按钮盒子
    .item-btns {
      text-align: center;
      display: block;
      height: 35px;
      line-height: 35px;
      color: #333;
      background: #f3f3f3;
      font-size: 14px;
      cursor: pointer;
      .iconfont {
        margin-right: 5px;
        color: #1ab399;
      }
      &:hover {
        background: #1ab399;
        color: white;
        .iconfont {
          color: white;
        }
      }
    }
  }
}
</style>
