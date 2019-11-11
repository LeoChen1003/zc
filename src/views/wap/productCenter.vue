<!-- 产品中心 -->
<template>
  <div class="wrapper">
    <div class="title-btn">旗舰智厨产品</div>
    <div class="product-item product-1">
      <div class="tag">旗舰</div>
      <div class="sub-title">“星级大厨”带你体验舌尖上的美味</div>
      <div class="title">智能大滚筒炒菜机套机</div>
      <div class="text">智能云菜谱 | 智能大滚筒炒菜机 | 中控任务管理 | 智能调料机 | 气压站</div>
      <div class="btn-box">
        <div class="btn-1">立即预约</div>
        <div class="btn-2">
          <div class="icon"></div>
          <div class="btn-text">了解更多</div>
        </div>
      </div>
    </div>
    <div class="product-item product-2">
      <div class="tag">旗舰</div>
      <div class="sub-title">超级烹饪专家</div>
      <div class="title">智能精炒一体机</div>
      <div class="text">
        <div>百种星级主厨菜谱,顶级烹饪手法精确复现;</div>
        <div>智能屏+语音实时提醒，0基础新手复制大厨烹饪行为，还原顶级厨师口味;</div>
        <div>智能精准投料,精准至0.1g，美味丝毫不差;</div>
        <div>精准控温, 11级火力智能调节，满足“煸炒”、“烧”、“煮”等多种烹调行为。</div>
      </div>
      <div class="btn-box">
        <div class="btn-1">立即预约</div>
        <div class="btn-2">
          <div class="icon"></div>
          <div class="btn-text">了解更多</div>
        </div>
      </div>
    </div>
    <div class="title-btn">其他智厨产品</div>
    <div class="other-item">
      <div class="title">智能多头平面炉</div>
      <div class="li">❶海量智能菜谱，并支持更新</div>
      <div class="li">❷火力与时间的精准掌控</div>
      <div class="li">➌防干烧，防漏电，安全可靠</div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    };
  },
  mounted () { },
  methods: {}
}

</script>
<style scoped lang="scss">
.wrapper {
  background: rgba(248, 249, 251, 1);
}

.title-btn {
  width: 5.06rem;
  height: 1.5rem;
  background: rgba(0, 0, 0, 1);
  border-radius: 1rem;
  font-size: 0.56rem;
  font-weight: 600;
  color: rgba(252, 253, 254, 1);
  text-align: center;
  line-height: 1.5rem;
  margin: 1rem auto;
}

.product-item {
  width: 19.69rem;
  height: 32.13rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 2.9rem 1.6rem 15rem 1.6rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 1.38rem;

  .sub-title {
    font-size: 0.69rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 1rem;
    margin-bottom: 0.8rem;
  }

  .title {
    font-size: 1.63rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 2.31rem;
    margin-bottom: 0.8rem;
  }

  .text {
    font-size: 0.69rem;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 1rem;
    margin-bottom: 6.4rem;
  }

  .tag {
    width: 3.75rem;
    height: 1.5rem;
    background: rgba(44, 198, 192, 1);
    border-radius: 0.63rem 0rem 0.63rem 0rem;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 0.69rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 1.5rem;
  }

  .btn-box {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 1rem;
    text-align: center;

    .btn-1 {
      width: 5.38rem;
      height: 1.88rem;
      background: rgba(0, 0, 0, 1);
      border-radius: 1.13rem;
      border: 0.06rem solid rgba(0, 0, 0, 1);
      font-size: 0.88rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 1.88rem;
    }

    .btn-2 {
      width: 6.38rem;
      height: 1.88rem;
      background: rgba(255, 255, 255, 0);
      border-radius: 1.13rem;
      border: 0.06rem solid rgba(0, 0, 0, 1);

      .btn-text {
        font-size: 0.88rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 1.88rem;
      }
    }
  }
}

.product-1 {
  background: rgba(255, 255, 255, 1) url("../../assets/productCenter/yts.jpg");
  background-repeat: no-repeat;
  background-size: 180%;
  background-position: 60% 200%;
}

.product-2 {
  background: rgba(0, 0, 0, 1) url("../../assets/productCenter/ytj.jpg");
  background-repeat: no-repeat;
  background-size: 180%;
  background-position: 60% 200%;

  .sub-title {
    color: #888888;
  }

  .title {
    color: #ffffff;
  }

  .text {
    color: #888888;
  }

  .btn-1 {
    background: rgba(255, 255, 255, 1);
  }
}
</style>