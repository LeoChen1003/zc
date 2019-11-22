<!-- index -->
<template>
  <div class="wrapper">
    <div class="cell cell-1">
      <div class="title-1">优特智厨</div>
      <div class="title-2">人工智能时代的餐饮革命</div>
      <div class="title-3">以智能解构中餐，用科技为餐饮业赋能</div>
      <div class="video-box">
        <div class="view-text">观</div>
        <div class="view-text">看</div>
        <div class="video-button" @click="toVideo">
          <div class="video-btn—c"></div>
        </div>
        <div class="view-text">视</div>
        <div class="view-text">频</div>
      </div>
    </div>
    <div class="cell cell-2">
      <div class="info-box">
        <div class="title">更高效</div>
        <div class="sub-title">后厨员工提效 :</div>
        <div class="number">600<span>%</span></div>
        <div class="bottom">1个小工可以替代3位大厨</div>
      </div>
      <div class="info-box">
        <div class="title">更专业</div>
        <div class="sub-title">专利及专利申请 :</div>
        <div class="number">466<span>件</span></div>
        <div class="bottom">专利多显得我们专业牛逼啊</div>
      </div>
      <div class="info-box">
        <div class="title">更丰富</div>
        <div class="sub-title">云菜谱数量 :</div>
        <div class="number">1000<span>道</span></div>
        <div class="bottom">1台设备拥有20名大厨的手艺</div>
      </div>
      <div class="info-box">
        <div class="title">更标准</div>
        <div class="sub-title">菜肴口味还原度 :</div>
        <div class="number">99.9<span>%</span></div>
        <div class="bottom">精准投料智能控温还原菜肴</div>
      </div>
    </div>
    <div class="cell cell-3">
      <div class="sub-title">超级烹饪专家</div>
      <div class="title">智能精炒一体机</div>
      <div class="bar"></div>
      <div class="label">
        <div class="title">星级菜谱</div>
        <div class="text">百种星级主厨菜谱，顶级烹饪手法精确复现</div>
      </div>
      <div class="label">
        <div class="title">智能提醒</div>
        <div class="text">
          智能屏+语音实时提醒，0基础新手复制大厨烹饪行为，还原顶级厨师口味
        </div>
      </div>
      <div class="label">
        <div class="title">精准投料</div>
        <div class="text">智能精准投料,精准至0.1g，美味丝毫不差</div>
      </div>
      <div class="label">
        <div class="title">精准控温</div>
        <div class="text">
          11级火力智能调节，满足“煸炒”、“烧”、“煮”等多种烹调行为
        </div>
      </div>
      <img src="../../assets/home/jcytj.png" />
    </div>
    <div class="cell cell-4">
      <div class="sub-title">“星级大厨”带你体验舌尖上的美味</div>
      <div class="title">智能大滚筒炒菜机套机</div>
      <div class="text">
        智能云菜谱 | 智能大滚筒炒菜机 | 中控任务管理 | 智能调料机 | 气压站
      </div>
      <div class="bar"></div>
      <div class="label">
        <div class="title">星级口味</div>
        <div class="text">百种星级主厨菜谱，顶级烹饪手法精确复现</div>
      </div>
      <div class="label">
        <div class="title">中控软件</div>
        <div class="text">通过中控系统，智能控制硬件，实现软硬件精准配合</div>
      </div>
      <div class="label">
        <div class="title">云端菜谱</div>
        <div class="text">
          链接云端海量专属定制化菜谱，经过多道标准化工序，极大程度还原星级大厨餐饮品质
        </div>
      </div>
      <div class="label">
        <div class="title">精准调控</div>
        <div class="text">
          全自动翻炒，精准喷料至每1克，精准控温至1℃，让美味有保证。
        </div>
      </div>
    </div>
    <div class="cell cell-5">
      <div class="cell-header">
        更多智厨产品
      </div>
      <div class="sub-title">
        更多智厨产品
      </div>
    </div>
    <div class="cell cell-6">
      <div class="cell-header">
        其他产品
      </div>
      <div class="sub-title">
        其他智能产品
      </div>
    </div>
    <div class="cell cell-7">
      <div class="cell-header">
        <div class="sub-title">对我们了解更多</div>
        <div class="inline">
          <div class="title">新闻中心</div>
          <div class="btn">
            <svg-icon
              icon-class="homeKnowMore"
              style="width:0.88rem;height:0.88rem;margin-right:2px;"
            ></svg-icon>
            了解更多
          </div>
        </div>
      </div>
      <div class="swiper">
        <div class="bg"></div>
        <swiper :options="swiperOption">
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
          <swiper-slide>
            <div class="ph"></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="cell cell-8">
      <img src="../../assets/wap/index/aboutBg.jpg" alt="" />
      <div class="cell-header">
        <div class="sub-title">优特智厨</div>
        <div class="inline">
          <div class="title">关于我们</div>
          <div class="btn">
            <svg-icon
              icon-class="homeKnowMore"
              style="width:0.88rem;height:0.88rem;margin-right:2px;"
            ></svg-icon
            >了解更多
          </div>
        </div>
      </div>
      <div class="text-box">
        <div class="title">以智能解构中餐，用科技为餐饮业赋能</div>
        <div class="text">
          优特智厨隶属于优特集团，以“互联网+”、“智能+”为战略思路，致力于打造新型餐饮生态服务体系。优特智厨以复制大厨烹饪技艺为核心的技术，实现中餐标准化，突破传统餐饮行业对厨师的依赖，让“星级大厨”走进千家万店。
        </div>
        <div class="title">使命</div>
        <div class="text">
          我们的使命是推行中餐标准化，提升餐饮品质，让中餐更美味、更安全、更便捷，助力传统中餐走遍全球。
        </div>
        <div class="title">愿景</div>
        <div class="text">
          我们的使命是推行中餐标准化，提升餐饮品质，让中餐更美味、更安全、更便捷，助力传统中餐走遍全球。
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
/* eslint-disable no-alert, no-console*/

// let self
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // handleScroll () {
    //   console.log(document.documentElement.scrollTop)
    //   console.log('bb')
    // },
    toVideo() {
      this.$router.push('/wap/video')
      // window.open('http://cdn.withpush.cn/youtezhichu/result.mobile.mp4')
    }
  },
  created() {
    // self = this
  }
}
</script>
<style scoped lang="scss">
.cell-1 {
  width: 100%;
  height: 33.5rem;
  background: url('../../assets/home/wap_bg_1.png');
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  box-sizing: border-box;
  padding-top: 7.5rem;

  .title-1 {
    font-size: 1.63rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 2.31rem;
    margin-bottom: 0.6rem;
  }

  .title-2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 1.75rem;
    margin-bottom: 1.8rem;
  }

  .title-3 {
    font-size: 0.81rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 1.13rem;
    margin-bottom: 5rem;
  }

  .video-box {
    display: flex;
    justify-content: space-around;
    color: #fff;
    font-size: 0.81rem;
    align-items: center;
    box-sizing: border-box;
    padding: 0 2rem;
    .video-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.75rem;
      height: 3.75rem;
      background: rgba(216, 216, 216, 0);
      border: 0.06rem solid #2cc6c0;
      border-radius: 50%;
      cursor: pointer;
      .video-btn—c {
        width: 0;
        height: 0;
        border-top: 0.35rem solid transparent;
        border-left: 0.6rem solid #fff;
        border-bottom: 0.35rem solid transparent;
      }
    }
  }
}

.cell-2 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: rgba(0, 0, 0, 1) url('../../assets/wap/productCenter/sjbj.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;

  .info-box {
    width: 50%;
    box-sizing: border-box;
    padding: 2rem 1rem;
    text-align: center;

    .title {
      font-size: 0.88rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 1.25rem;
    }

    .sub-title {
      font-size: 0.69rem;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 1rem;
    }

    .number {
      font-size: 2.19rem;
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
      line-height: 3.25rem;

      span {
        font-size: 0.75rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 1.06rem;
      }
    }

    .bottom {
      font-size: 0.69rem;
      font-weight: 400;
      color: #999999;
      line-height: 1rem;
    }
  }
}

.cell-3 {
  width: 100%;
  box-sizing: border-box;
  padding: 1.8rem 2.5rem;
  padding-bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 1) 0%,
    rgba(13, 13, 13, 1) 100%
  );

  .sub-title {
    font-size: 0.69rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 1rem;
    margin-bottom: 0.3rem;
  }

  .title {
    font-size: 1.38rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 1.88rem;
    margin-bottom: 0.9rem;
  }

  .bar {
    width: 1.5rem;
    height: 0.13rem;
    background: rgba(44, 198, 192, 1);
    border-radius: 0.13rem;
  }

  .label {
    margin-top: 1rem;

    .title {
      width: 3.63rem;
      height: 1.19rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.19rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: rgba(8, 8, 8, 1);
      line-height: 1.19rem;
      text-align: center;
      margin-bottom: 0.4rem;
    }

    .text {
      font-size: 0.69rem;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 1rem;
    }
  }

  img {
    width: 100%;
    margin-top: 2rem;
    transform: translateY(0.25rem) translateX(-2rem);
  }
}

.cell-4 {
  width: 100%;
  box-sizing: border-box;
  padding: 1.8rem 2.5rem;
  padding-bottom: 7rem;
  background: url('../../assets/home/gtccj.png');
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;

  .sub-title {
    font-size: 0.69rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 1rem;
    margin-bottom: 0.3rem;
  }

  .title {
    font-size: 1.38rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 1.88rem;
    margin-bottom: 0.9rem;
  }

  .text {
    font-size: 0.69rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .bar {
    width: 1.5rem;
    height: 0.13rem;
    background: rgba(44, 198, 192, 1);
    border-radius: 0.13rem;
  }

  .label {
    margin-top: 1rem;

    .title {
      width: 3.63rem;
      height: 1.19rem;
      background: rgba(0, 0, 0, 1);
      border-radius: 0.19rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: #fefefe;
      line-height: 1.19rem;
      text-align: center;
      margin-bottom: 0.4rem;
    }

    .text {
      font-size: 0.69rem;
      font-weight: 400;
      color: #333333;
      line-height: 1rem;
    }
  }
}

.cell-5,
.cell-6 {
  width: 100%;
  height: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.25rem;
  box-sizing: border-box;

  .cell-header {
    font-size: 1.13rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.38rem;
  }

  .sub-title {
    font-size: 0.69rem;
    font-weight: 400;
    color: #333;
  }
}

.cell-5 {
  background: url('../../assets/wap/index/moredeivce.jpg');
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
}

.cell-6 {
  background: url('../../assets/wap/index/otherproduct.jpg');
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
}

.cell-7 {
  box-sizing: border-box;
  padding: 2.5rem 0;
  background: linear-gradient(
    177deg,
    rgba(231, 234, 241, 1) 0%,
    rgba(231, 232, 239, 1) 6%,
    rgba(247, 248, 249, 1) 39%,
    rgba(255, 255, 255, 1) 60%,
    rgba(235, 237, 243, 1) 84%,
    rgba(223, 226, 235, 1) 100%
  );

  .cell-header {
    box-sizing: border-box;
    padding: 0 2.5rem;
    margin-bottom: 3rem;

    .sub-title {
      font-size: 0.69rem;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 1rem;
    }

    .inline {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 1.38rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 1.88rem;
      }

      .btn {
        width: 6.38rem;
        height: 1.88rem;
        background: rgba(255, 255, 255, 0);
        border-radius: 1.13rem;
        border: 0.06rem solid rgba(0, 0, 0, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-size: 0.88rem;
        line-height: 1.88rem;
        text-align: center;
      }
    }
  }

  .bg {
    width: 18.75rem;
    height: 18.75rem;
    border: 0.1rem solid rgba(44, 198, 192, 1);
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -9.375rem;
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
      // width: 18.75rem;
      // height: 8.75rem;
      // background: rgba(231, 234, 241, 1);
      // border-radius: 0.25rem;
    }
  }
}

.cell-8 {
  img {
    width: 100%;
    margin-bottom: 2.5rem;
  }

  .cell-header {
    box-sizing: border-box;
    padding: 0 2.5rem;
    margin-bottom: 3rem;

    .sub-title {
      font-size: 0.69rem;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 1rem;
    }

    .inline {
      display: flex;
      justify-content: space-between;

      .title {
        font-size: 1.38rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 1.88rem;
      }

      .btn {
        width: 6.38rem;
        height: 1.88rem;
        background: rgba(255, 255, 255, 0);
        border-radius: 1.13rem;
        border: 0.06rem solid rgba(0, 0, 0, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-size: 0.88rem;
      }
    }
  }

  .text-box {
    box-sizing: border-box;
    padding: 0 2.5rem;

    .title {
      font-size: 0.94rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      line-height: 1.31rem;
      margin-bottom: 1rem;
    }

    .text {
      font-size: 0.69rem;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 1.13rem;
      margin-bottom: 1.8rem;
    }
  }
}
</style>
