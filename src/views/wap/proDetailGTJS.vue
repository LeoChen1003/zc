<template>
  <div class='wrapper proDetail'>
    <GTHeader :type="'js'"></GTHeader>
    <div class="wrapper_content">
      <div class="swiper">
        <div class="top_title">“星级大厨”带你体验舌尖上的美味</div>
        <div class="title">智能大滚筒炒菜机套机</div>
        <div class="detail">
          <span :class="curIndex == 0?'activeColor':''">智能云菜谱</span>
          <span>|</span>
          <span :class="curIndex == 1?'activeColor':''">智能大滚筒炒菜机</span>
          <span>|</span>
          <span :class="curIndex == 2?'activeColor':''">中控任务管理</span>
          <span>|</span>
          <span :class="curIndex == 3?'activeColor':''">智能调料机</span>
          <span>|</span>
          <span :class="curIndex == 4?'activeColor':''">气压站</span>
        </div>
        <swiper :options="swiperOption"
                ref="myswiper">
          <swiper-slide>
            <div class="ph">
              <div class="content"></div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="ph">
              <div class="content"></div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="ph"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="ph"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="ph"></div>
          </swiper-slide>
          <div class="swiper-pagination"
               slot="pagination"></div>
        </swiper>
      </div>
      <div class="content">
        <div class="content_item"
             v-for="(item,index) in [{},{},{}]"
             :key="index">
          <div class="title">硬件参数</div>
          <div class='text text_h2'>1亿像素超旗舰三摄</div>
          <div class="text">1亿800万超清主摄
            <br />三星HMX , 1/1 .33'感光尺寸, 0.8μm ,四合一1 .6um大像素, f/1.69大光圈, 7P镜头OIS四轴光学防抖,激光自动对焦</div>
          <div class="text">1200万超级人像镜头, 2倍光学变焦
            <br />三星S5K2L7，1.4um，1/ 2.55'感光尺寸, f/2光圈, 6P镜头, Dual PD相位对焦,激光混合2000万超广角+微距镜头</div>
          <div class="text">SONY IMX350 , 20MP，1.0um，1/2.8'感光尺寸, FOV 117°，f/2.2 光圈，6P镜头激光自动对焦, 1 .5cm极限微距拍摄</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import GTHeader from './compontents/GTHeader'
/* eslint-disable no-alert, no-console*/

let self
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { GTHeader },
  data () {
    return {
      curIndex: 0,
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChangeTransitionEnd: function () {
            // 切换结束时，告诉我现在是第几个slide
            self.curIndex = self.$refs.myswiper.swiper.activeIndex
          }
        }
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {

  },
  created () {
    self = this
  },
  mounted () {

  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  padding-top: 3rem;
  box-sizing: border-box;
}

.swiper {
  width: 100%;
  height: 32rem;
  padding-top: 2.31rem;
  padding-left: 2.31rem;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(39, 40, 41, 1) 0%,
    rgba(30, 31, 33, 1) 100%
  );

  .top_title {
    font-size: 0.69rem;
    color: #888;
    margin-bottom: 1.25rem;
  }

  .title {
    font-size: 1.38rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.81rem;
  }

  .detail {
    font-size: 0.69rem;
    color: #858585;
    line-height: 1rem;
    width: 18.63rem;
    margin-bottom: 4.69rem;

    span {
      margin-right: 5px;
    }

    .activeColor {
      font-weight: 500;
      color: #fff;
    }
  }

  .swiper-slide {
    width: 60%;
    height: 18.75rem;
    padding: 0 2rem !important;
  }
  .ph {
    height: 18.75rem;
    width: 100%;

    .content {
      width: 100%;
    }
  }
}

.content {
  padding: 2.56rem 2.31rem;
  box-sizing: border-box;

  .content_item {
    padding-bottom: 2.63rem;
    box-sizing: border-box;
    border-bottom: 0.06rem solid #ececec;
    margin-bottom: 2.56rem;

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
      margin-bottom: 0.81rem;
    }

    .text {
      font-size: 0.81rem;
      color: #333;
      margin-bottom: 0.63rem;
      line-height: 1.13rem;
    }

    .text_h2 {
      line-height: 2rem;
    }
  }
}
</style>

<style lang='scss'>
.proDetail {
  .swiper-pagination-bullet {
    width: 1.5rem;
    height: 0.13rem;
    border-radius: 0;
    background: rgba(133, 133, 133, 1);
    opacity: 1;
  }

  .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet {
    margin: 0 0.5rem;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    top: 0;
    left: -2.31rem;
    width: 100%;
  }

  .swiper .swiper-slide[data-v-d2c4ce10] {
    width: 100%;
  }
}
</style>