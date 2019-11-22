<template>
  <div class="wrapper proDetail">
    <GTHeader
      :type="'js'"
      :name="'智能精炒一体机'"
      :glUrl="'/wap/proDetailYTJGL'"
      :jsUrl="'/wap/proDetailYTJJS'"
      :isWhite="true"
    ></GTHeader>
    <div class="wrapper_content">
      <div class="top">
        <div class="top_title">超级烹饪专家</div>
        <div class="title">智能精炒一体机</div>
        <div class="tip">三合一体，中高级餐饮店的御用超级“厨神”</div>
        <img src="../../assets/wap/productCenter/YTJ_cs.png" alt="cs" />
      </div>
      <div class="content">
        <div class="content_item">
          <div class="title">产品功能</div>
          <div class="text">
            <div class="margin_bottom">
              大功率立体自动加热功能与火力精确控制
            </div>
            <div>
              自动调节大功率抽油烟<br />
              扫描菜谱二维码，自动烹饪；自动定量，储备加固体和液体调料；自动定量，储备勾芡；人机交互平台可触摸操作10.1寸显示屏；语音,文字操作提示,
              故障自诊提示；联网云端下载菜谱。
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="title">产品参数</div>
          <div class="text">
            <div class="margin_bottom">
              输入电源电压、频率 AC220V/50Hz AC220V/50Hz
            </div>
            <div class="margin_bottom">
              额定功率 4kw 6kw<br />
              外形尺寸(长×宽×高) 600×600×1500 900×600×1500<br />
              热源功率范围 3.5KW平炉或凹炉 2.2KW平炉、3.5KW凹炉
            </div>
            <div class="margin_bottom">
              净重 80kg(预计) 100kg<br />
              平均烹饪周期 3min/次 3min/次<br />
              最大出品量 1kg/次 1kg/次
            </div>
            <div>
              固体液体调料存储量 175mL 175mL<br />
              固体调料精度 Min-20g:±5%；21g～100g：±3%
              Min-20g:±5%；21g～100g：±3%
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="title">应用场景</div>
          <div class="text">
            <div class="margin_bottom">智能一体机精确控制</div>
            <div class="margin_bottom">
              智能一体机精确控制火力，自动控制调料，精确复现菜肴，实现智能控制“煸炒”、“烧”、“煮”等多种烹调工艺方法的智能烹饪机器。解决了传统厨房环境向智能厨房环境平稳过渡的问题，智能一体机提高家庭自动化水平。
            </div>
            <div>
              该产品是为了家庭，精致小炒，连锁餐饮等开发的新机型。整机开放式设计，体积紧凑、操作便捷、清洗方便。加热效率高，无烟尘，使用安全卫生。易清洁，美观大方，经济实用。该产品是为了家庭，精致小炒，连锁餐饮等开发的新机型。
            </div>
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

.top {
  height: 32rem;
  background: linear-gradient(
    180deg,
    rgba(39, 40, 41, 1) 0%,
    rgba(30, 31, 33, 1) 100%
  );
  padding: 2.31rem 2.5rem 0 2.31rem;
  box-sizing: border-box;
  position: relative;

  .top_title {
    font-size: 0.69rem;
    margin-bottom: 1.25rem;
    color: #888;
  }

  .title {
    font-size: 1.38rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 0.81rem;
  }

  .tip {
    font-size: 0.69rem;
    line-height: 1.25rem;
    color: #858585;
    margin-bottom: 3rem;
  }

  img {
    width: 16.19rem;
    height: 18.88rem;
    position: absolute;
    left: 3.69rem;
    bottom: 0;
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

.margin_bottom {
  margin-bottom: 0.75rem;
}
</style>
