<template>
  <div class="scroll">
    <swiper :options="swiperOption"
            ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="item">I'm Slide 1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="item"> I'm Slide 2</div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"
         slot="button-prev"></div>
    <div class="swiper-button-next"
         slot="button-next"></div>

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,//notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        grabCursor: true,//鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true,//Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          },
        },
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperSlides: [1, 2, 3, 4],


    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted () {
    //可以使用swiper这个对象去使用swiper官网中的那些方法  
    // console.log('this is current swiper instance object', this.swiper);
    // this.swiper.slideTo(0, 0, false);
  }
}
</script>
