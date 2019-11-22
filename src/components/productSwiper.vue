<template>
  <div class="pro_swiper">
    <swiper :options="swiperOption" ref="swiper">
      <swiper-slide>
        <div class="item">
          <img class="img2" src="../assets/product/carousel1.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img class="img2" src="../assets/product/carousel2.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img class="img3" src="../assets/product/carousel3.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img class="img4" src="../assets/product/carousel4.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="item">
          <img class="img5" src="../assets/product/carousel5.png" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function() {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          }
        },
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="scss">
.pro_swiper {
  width: 100%;
  margin-top: 7.41rem;
  position: relative;
  //   .item {
  //     position: relative;
  //     .img2 {
  //       position: absolute;
  //       left: 8%;
  //     }
  //     .img3 {
  //       position: absolute;
  //       bottom: -359px;
  //     }
  //     .img4 {
  //       position: absolute;
  //       left: 5%;
  //     }
  //     .img5 {
  //       position: absolute;
  //       left: 12%;
  //     }
  //   }

  .swiper-pagination {
    top: 73%;
    left: 21%;
    transition: 0;
    transform: 0;
    -webkit-transition: 0;
    -webkit-transform: 0;
    .swiper-pagination-bullet {
      width: 1.5rem !important;
      height: 2px !important;
      background-color: #858585;
      border-radius: 0;
      margin-left: 5px;
    }
    .swiper-pagination-bullet:focus {
      border: none;
      outline-style: none;
      box-shadow: none !important;
    }
    .swiper-pagination-bullet:first-child {
      margin-left: 0;
    }
    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
  .swiper-container-autoheight {
    height: 400px;
  }
  .swiper-wrapper {
    height: 100%;
  }
  .swiper-slide-active {
    margin-left: 32rem;
  }
}
</style>
