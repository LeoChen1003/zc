<template>
  <div class='wrapper'>
    <GTHeader :type="'gl'"></GTHeader>
    <div class="detail_1">
      <div class="top_title">“星级大厨”带你体验舌尖上的美味</div>
      <div class="title">智能大滚筒炒菜机套机</div>
      <div class="tip">智能云菜谱 | 智能大滚筒炒菜机 | 中控任务管理 | 智能调料机 | 气压站</div>
      <reservationBtn class="detail_1_btn"></reservationBtn>
    </div>
    <div class="detail_2">
      <div class="info_box">
        <div class="title">更高效</div>
        <div class="sub_title">后厨员工提效 :</div>
        <div class="number">600<span>%</span></div>
        <div class="bottom">1个小工可以替代3位大厨</div>
      </div>
      <div class="info_box">
        <div class="title">更专业</div>
        <div class="sub_title">专利及专利申请 :</div>
        <div class="number">466<span>件</span></div>
        <div class="bottom">专利多显得我们专业牛逼啊</div>
      </div>
      <div class="info_box">
        <div class="title">更丰富</div>
        <div class="sub_title">云菜谱数量 :</div>
        <div class="number">1000<span>道</span></div>
        <div class="bottom">1台设备拥有20名大厨的手艺</div>
      </div>
      <div class="info_box">
        <div class="title">更标准</div>
        <div class="sub_title">菜肴口味还原度 :</div>
        <div class="number">99.9<span>%</span></div>
        <div class="bottom">精准投料智能控温还原菜肴</div>
      </div>
    </div>
    <div class="detail_3">
      <div class="tag">智能大滚筒炒菜机</div>
      <div class="slogan">品质升级，<br />
        全新绽放。</div>
      <div class="intro1">操控界面升级，OLED屏幕带来全新交互体验</div>
      <div class="intro2">米家压力IH电饭煲1S将操控界面升级为1.32英寸OLED屏幕，不仅可以显示更多信息内容，而且大大优化设备与用户之间的交互方式，提升设备与APP端配合的软硬件操控体验。连接APP后，海量云菜谱-键烹饪，所选菜谱清晰显示在电饭煲上，美味一目了然，开启全新下厨体验。</div>
      <div class="data_box">
        <div class="box_item">
          <div class="data">3分30秒</div>
          <div class="comment">平均每份菜</div>
        </div>
        <div class="box_item">
          <div class="data">＞10万次</div>
          <div class="comment">测试标准</div>
        </div>
      </div>
      <div class="data_box">
        <div class="box_item">
          <div class="data">65°</div>
          <div class="comment">人体工学角度</div>
        </div>
        <div class="box_item">
          <div class="data">国家级</div>
          <div class="comment">卫生标准</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import GTHeader from './compontents/GTHeader'
import reservationBtn from './compontents/reservationBtn'
/* eslint-disable no-alert, no-console*/

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { GTHeader, reservationBtn },
  data () {
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {

  },
  created () {
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

.detail_1 {
  width: 100%;
  height: 23.75rem;
  background: rgba(0, 0, 0, 1) url("../../assets/wap/productCenter/GT_dpt.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;
  padding: 2.44rem 2.5rem 0 2.5rem;
  box-sizing: border-box;

  .top_title {
    font-size: 0.69rem;
    margin-bottom: 0.69rem;
    color: #333;
  }

  .title {
    font-size: 1.38rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.63rem;
  }

  .tip {
    font-size: 0.69rem;
    line-height: 1.25rem;
    color: #333;
    margin-bottom: 2.19rem;
  }
  .detail_1_btn {
    display: flex;
    justify-content: center;
  }
}

.detail_2 {
  width: 100%;
  height: 23rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: rgba(0, 0, 0, 1) url("../../assets/wap/productCenter/GT_bg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;

  .info_box {
    width: 50%;
    box-sizing: border-box;
    padding: 2rem 1rem;
    text-align: center;

    .title {
      font-size: 0.88rem;
      font-weight: 600;
      color: #000;
      line-height: 1.25rem;
      margin-bottom: 0.31rem;
    }

    .sub_title {
      font-size: 0.69rem;
      font-weight: 400;
      color: #333;
      line-height: 1rem;
    }

    .number {
      font-size: 2.19rem;
      font-weight: normal;
      color: #000;
      line-height: 3.25rem;
      margin-bottom: 0.62rem;

      span {
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1.06rem;
      }
    }

    .bottom {
      font-size: 0.69rem;
      font-weight: 400;
      color: #333;
      line-height: 1rem;
    }
  }
}

.detail_3 {
  .tag {
    width: 6.5rem;
    height: 1.38rem;
    background: rgba(44, 198, 192, 1);
    border-radius: 0.19rem;
    font-size: 0.69rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 1.38rem;
  }
}
</style>