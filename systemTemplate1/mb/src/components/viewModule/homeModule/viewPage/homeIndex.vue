<template>
  <div class="card-box homeIndex guide">
    <div class="advBox fl boxSizing">
      <div class="adcB">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in advData" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="fenlei">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="7" v-for="(item, index) in fenleiData" :key="index">
            <div class="fls" :style="{ backgroundColor: item.color }">
              <img :src="item.icon">
              <span>{{ item.name }}</span>
              <sub v-if="item.num">{{ item.num }}</sub>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="latest-notice-op boxSizing width100" style="width: 100%">
        <dl>
          <dt class="overflowHidden">
            <span class="title">业务消息</span>
            <a class="more">更多&gt;</a>
          </dt>
          <dd class="download overflowHidden">
            暂无业务消息
          </dd>
        </dl>
      </div>
    </div>
    <div class="fr work-bench-r overflowHidden">
      <div class="tablesBox overflowHidden width100">
        <div class="fl latest-notice-op boxSizing">
          <dl>
            <dt class="overflowHidden">
              <span class="title">最新通知</span>
              <a class="more">更多&gt;</a>
            </dt>
            <dd class="linkst">
              <a title="关于微信订货端正式上线的通知" class="beyond fl">关于微信订货端正式上线的通知</a>
              <span class="datetime displayBock fr">2016-07-25</span>
            </dd>
            <dd class="linkst">
              <a title="关于微信订货端正式上线的通知" class="beyond fl">关于微信订货端正关于微信订货端正式上线的通知式上线的通知</a>
              <span class="datetime displayBock fr">2016-07-25</span>
            </dd>
            <dd class="linkst">
              <a title="关于微信订货端正式上线的通知" class="beyond fl">关于微信订货端正关于微信订货端正式上线的通知式上线的通知</a>
              <span class="datetime displayBock fr">2016-07-25</span>
            </dd>
            <dd class="linkst">
              <a title="关于微信订货端正式上线的通知" class="beyond fl">关于微信订货端正式上线的通知</a>
              <span class="datetime displayBock fr">2016-07-25</span>
            </dd>
            <dd class="linkst">
              <a title="关于微信订货端正式上线的通知" class="beyond fl">关于微信订货端正关于微信订货端正式上线的通知式上线的通知</a>
              <span class="datetime displayBock fr">2016-07-25</span>
            </dd>
          </dl>
        </div>
        <div class="fr latest-notice-op boxSizing">
          <dl>
            <dt class="overflowHidden">
              <span class="title">手机移动版下载</span>
            </dt>
            <dd class="download overflowHidden">
              <div class="app-download-link">
                <a class="download-android" target="_blank">
                  <em/>
                  安卓手机下载</a>
                <a class="download-ios" target="_blank">
                  <em/>
                  安卓手机下载</a>
              </div>
              <div class="qr-code">
                <div class="qr-code-img"><img src="../../../../assets/home/erweima.png"></div>
                <span class="lite-gray">扫一扫下载</span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div class="ecs width100 boxSizing">图表</div>
      <div class="ecs width100 boxSizing">图表</div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import searchIndex from '../../../publicComponent/pl-search/searchIndex'
  import bj1 from '../../../../assets/home/bj1.png'
  import bj2 from '../../../../assets/home/bj2.png'
  import sc from '../../../../assets/home/sc.png'
  import hd from '../../../../assets/home/hd.png'
  import xd from '../../../../assets/home/xd.png'
  @Component({
    components: { searchIndex }
  })
  export default class homeIndex extends Vue {
    advData = [bj1, bj2]
    fenleiData = [
      {name: '立即下单', icon: xd, color: '#4693d0'},
      {name: '最新促销', icon: hd, num: 0, color: '#d97340'},
      {name: '商品收藏', icon: sc, color: '#70aa4a'}
    ]
  }
</script>

<style lang="less">
  @import "../../../../themes/publicStyle/common";
  .homeIndex {padding: 20px;min-height: 450px;overflow: hidden;
    .advBox {width: 55%;padding-right: 20px;
      .adcB {
        height: 370px;
        img {
          display: block;
          height: 370px;
          width: 100%;
        }
        .el-carousel__indicators--outside {
          position: absolute !important;
          bottom: 0 !important;
          left: 45% !important;
        }
        .el-carousel__container {
          height: 370px;
        }
        .el-carousel__indicator.is-active button {
          background-color: @dh-color !important;
        }
      }
      .fenlei {
        width: 100%;
        padding: 15px 0;
        .fls {
          height: 80px;
          line-height: 80px;
          border-radius: 5px;
          position: relative;
          cursor: pointer;
          text-align: center;
          img {
            position: absolute;
            top: 20px;
            left: 20%;
          }
          span {
            font-size: 21px;
            color: #FFF;
            position: absolute;
            left: 40%;
            top: 0;
          }
          sub {
            position: absolute;
            right: 20px;
            bottom: -25px;
            color: #FFF;
            font-size: 16px;
          }
        }
      }
    }
    .work-bench-r {width: 45%;
      .ecs {
        border: 1px solid #f0f0f0;
        height: 200px;margin-top: 10px;
        font-size: 20px;
        text-align: center;line-height: 200px;
      }
    }
    .latest-notice-op {width: calc(50% - 5px);height: 290px;border: 1px solid #f0f0f0;padding-bottom: 15px;overflow: hidden;
      a:hover {color: @dh-color !important;text-decoration:underline;}
      dt {
        border-bottom: 1px solid #f0f0f0;
        font-size: 14px;
        font-weight: 700;
        padding: 0 15px;
        background-color: #f7f7f7;
        height: 36px;
        line-height: 36px;
        margin-bottom: 10px;
        .title{
          float: left;
          display: block;
          margin-right: 10px;
          font-size: 16px;
          color: @dh-color;
        }
        a {
          float: right;
          font-size: 12px;
          font-weight: 400;color: #555;
        }
      }
      .linkst {
        background: url('../../../../assets/home/menu.png')  -3px 11px no-repeat;
        padding-left: 10px;
        margin-left: 20px;
        line-height: 36px;
        font-size: 12px;
        overflow: hidden;
        padding: 0 20px;
        height: 36px;
        a {
          display: block;
          width: calc(100% - 100px);
          color: #555;
          font-size: 14px;
        }
        .datetime {
          width: 67px;
        }
      }
      .download {font-size: 12px;overflow: hidden;padding: 0 20px;padding-top: 40px;
        .app-download-link {
          float: left;
          padding: 0 10px;
          text-align: center;
          width: 50%;
          box-sizing: border-box;
          a {
            width: 100%;
            height: 40px;
            overflow: hidden;
            line-height: 36px;
            display: block;
            font-size: 14px;
            color: #555;
            margin-top: 15px;
            em{
              width: 40px;
              height: 40px;
              display: block;
              float: left;
              background: url("../../../../assets/home/xiazai.png") no-repeat;
            }
          }
        }
        .download-android em{
          background-position: 0 0 !important;
        }
        .download-ios em{
          background-position: -40px -40px !important;
        }
        .download-android:hover, .download-ios:hover {
          color: @dh-color;
          text-decoration:underline;
        }
        .download-android:hover {
          em {
            background-position: -40px 0 !important;
          }
        }
        .download-ios:hover {
          em {
            background-position: 0 -40px !important;
          }
        }
        .qr-code {float: left;width: 50%;box-sizing: border-box;text-align: center;overflow: hidden;
          .qr-code-img {width: 100%;height: 120px; img {width: 100%;height: 120px;} }
          .lite-gray {color: #999;}
        }
      }
    }
  }
</style>
