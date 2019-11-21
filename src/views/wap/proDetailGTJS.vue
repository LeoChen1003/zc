<template>
  <div class="wrapper proDetail">
    <GTHeader
      :type="'js'"
      :name="'智能大滚筒炒菜机套机'"
      :glUrl="'/wap/proDetailGTGL'"
      :jsUrl="'/wap/proDetailGTJS'"
    ></GTHeader>
    <div class="wrapper_content">
      <div class="swiper">
        <div class="top_title">“星级大厨”带你体验舌尖上的美味</div>
        <div class="title">智能大滚筒炒菜机套机</div>
        <div class="detail">
          <span :class="curIndex == 0 ? 'activeColor' : ''">智能云菜谱</span>
          <span>|</span>
          <span :class="curIndex == 1 ? 'activeColor' : ''"
            >智能大滚筒炒菜机</span
          >
          <span>|</span>
          <span :class="curIndex == 2 ? 'activeColor' : ''">中控任务管理</span>
          <span>|</span>
          <span :class="curIndex == 3 ? 'activeColor' : ''">智能调料机</span>
          <span>|</span>
          <span :class="curIndex == 4 ? 'activeColor' : ''">气压站</span>
        </div>
        <swiper :options="swiperOption" ref="myswiper">
          <swiper-slide>
            <div class="ph">
              <img
                src="../../assets/wap/productCenter/GT_swiper_2.png"
                alt="2"
                style="width:20.19rem;height:10.94rem;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="ph">
              <img
                src="../../assets/wap/productCenter/GT_swiper_1.png"
                alt="1"
                style="width:19.25rem;height:13.38rem;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="ph">
              <img
                src="../../assets/wap/productCenter/GT_swiper_3.png"
                alt="3"
                style="width:100%;height:10.13rem;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="ph">
              <img
                src="../../assets/wap/productCenter/GT_swiper_4.png"
                alt="4"
                style="width:20.25rem;height:11.63rem;"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="ph">
              <img
                src="../../assets/wap/productCenter/GT_swiper_5.png"
                alt="5"
                style="width:15.56rem;height:11.44rem;"
              />
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="content">
        <div class="content_item">
          <div class="title">智能大滚筒炒菜机</div>
          <div class="text">
            型号：SYZNZ01A <br />
            额定功率：3000-18000W <br />
            电源电压：AC380V/50HZ <br />
            整机尺寸：1000*820*1100 <br />
            屏幕尺寸：4.3寸 <br />
            锅口径：390mm <br />
            配置：水枪，菜盆
          </div>
        </div>
        <div class="content_item">
          <div class="title">中控任务管理</div>
          <div class="text">
            型号：K-QT156 <br />
            额定功率：30W <br />
            电源电压：AC220V <br />
            尺寸：15.6英寸 <br />
            屏体分辨率：1920*1080 <br />
            颜色：16.7M <br />
            亮度：250cd/m2 <br />
            对比度：1000:01:00 <br />
            响应时间：4ms <br />
            屏幕比例：16:10 <br />
            点距：0.0163mm x 0.0620mm x RGB <br />
            可视角度(上/下/左/右)：89/89/70/55 <br />
            功率：30W <br />
            接口类型：.LVDS <br />
            工作温度：0℃ — 50℃ <br />
            存储温度： -20℃ — 60℃
          </div>
        </div>
        <div class="content_item">
          <div class="title">智能调料机</div>
          <div class="text">
            型号：PLZJ-1A <br />
            额定功率：2200W <br />
            电源电压：AC220V/50HZ <br />
            整机尺寸：950*600*1265mm <br />
            屏幕尺寸：7寸电阻屏 <br />
            存储调料：生抽、老抽、陈醋、白醋、料酒、白酒、盐、糖、鸡精、淀粉
            <br />
            配置：与补料柜和投料器组成配料系统
          </div>
        </div>
        <div class="content_item">
          <div class="title">气压站</div>
          <div class="text">
            型号：UCQYZ-1 <br />
            额定功率：3000W <br />
            电源电压：AC380V/50HZ <br />
            整机尺寸：900*800*1500mm
          </div>
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
  data() {
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
          slideChangeTransitionEnd: function() {
            // 切换结束时，告诉我现在是第几个slide
            self.curIndex = self.$refs.myswiper.swiper.activeIndex
          }
        }
      }
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  created() {
    self = this
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
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
  position: relative;

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
  .swiper-container {
    margin-left: -34px;
    margin-top: -13px;
  }

  .swiper-slide {
    width: 100%;
    height: 18.75rem;
  }
  .ph {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    margin-right: 1rem;

    img {
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

<style lang="scss">
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

  .swiper-container-horizontal
    > .swiper-pagination-bullets
    .swiper-pagination-bullet:focus {
    border: none;
    border: none;
    outline-style: none;
    box-shadow: none !important;
  }

  .swiper-slide-active {
    // margin-left: -1rem;
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
