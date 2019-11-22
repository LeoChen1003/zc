<template>
  <div class="wrapper">
    <!-- 智能系统 -->
    <div class="cell cell_1">
      <svg-icon icon-class="core_circle_h" class-name="circle"></svg-icon>
      <div class="title">智能系统 OS</div>
      <div class="tip">简单易用的智能，背后藏着强大的科技</div>
      <div class="cell_box">
        <div class="cell_item">
          <svg-icon icon-class="core_zk" class-name="box_svg"></svg-icon>
          <div class="box_text">大滚筒套机中控屏</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_ytj" class-name="box_svg"></svg-icon>
          <div class="box_text">精炒一体机屏幕</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_phone" class-name="box_svg"></svg-icon>
          <div class="box_text">手机端 App</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_dn" class-name="box_svg"></svg-icon>
          <div class="box_text">电脑端后台管理</div>
        </div>
      </div>
      <div class="cell_btn">
        <div class="moore_btn" @click="modelXT = true">
          <svg-icon
            icon-class="homeKnowMore"
            style="width:0.88rem;height:0.88rem;margin-right:2px;"
          ></svg-icon
          >了解更多
        </div>
      </div>
    </div>
    <!-- 智能技术 -->
    <div class="cell cell_2">
      <div class="top_title">以智能解构中餐</div>
      <div class="title">智能技术</div>
      <div class="tip">简单易用的智能，背后藏着强大的科技</div>
      <div class="cell_box">
        <div class="cell_item">
          <svg-icon icon-class="core_js_1" class-name="box_svg"></svg-icon>
          <div class="box_text">精准投放调料</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_js_2" class-name="box_svg"></svg-icon>
          <div class="box_text">智能补料</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_js_3" class-name="box_svg"></svg-icon>
          <div class="box_text">智能翻炒</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_js_4" class-name="box_svg"></svg-icon>
          <div class="box_text">智能提醒</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_js_5" class-name="box_svg"></svg-icon>
          <div class="box_text">智能调整角度</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_js_6" class-name="box_svg"></svg-icon>
          <div class="box_text">智能控温</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_js_7" class-name="box_svg"></svg-icon>
          <div class="box_text">一键清洗</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_js_8" class-name="box_svg"></svg-icon>
          <div class="box_text">智能菜谱</div>
        </div>
      </div>
      <div class="cell_btn">
        <div class="moore_btn" @click="modelJS = true">
          <svg-icon
            icon-class="white_add"
            style="width:0.88rem;height:0.88rem;margin-right:2px;"
          ></svg-icon
          >了解更多
        </div>
      </div>
    </div>
    <!-- 智能数据管控 -->
    <div class="cell cell_3">
      <div class="top_title">以智能解构中餐</div>
      <div class="title">智能数据管控</div>
      <div class="tip">智能管理前厅、后厨数据，实现成本、利润全透明化</div>
      <div class="cell_box">
        <div class="cell_item">
          <svg-icon icon-class="core_gk_1" class-name="box_svg"></svg-icon>
          <div class="box_title">设备管理平台</div>
          <div class="box_content">
            门店数据运筹帷幄，设备运行数据一目了然，成本透明，合理管理设备
          </div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_gk_2" class-name="box_svg"></svg-icon>
          <div class="box_title">门店管理平台</div>
          <div class="box_content">
            订单任务、运行状态、故障能源消耗全程可视化；设备能耗数据分析管理
          </div>
        </div>
      </div>
      <div class="cell_btn">
        <div class="moore_btn" @click="modelGK = true">
          <svg-icon
            icon-class="homeKnowMore"
            style="width:0.88rem;height:0.88rem;margin-right:2px;"
          ></svg-icon
          >了解更多
        </div>
      </div>
    </div>
    <!-- 智能配件 -->
    <div class="cell cell_4">
      <div class="top_title">以智能解构中餐</div>
      <div class="title">智能配件</div>
      <div class="tip">智能管理前厅、后厨数据，实现成本、利润全透明化</div>
      <div class="cell_box">
        <div class="cell_item">
          <svg-icon icon-class="core_pj_1" class-name="box_svg"></svg-icon>
          <div class="box_title">智能打菜机</div>
          <div class="box_content">智能测算菜品营养值</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_pj_2" class-name="box_svg"></svg-icon>
          <div class="box_title">智能取餐柜</div>
          <div class="box_content">保温保鲜</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_pj_3" class-name="box_svg"></svg-icon>
          <div class="box_title">智能配送保温箱</div>
          <div class="box_content">智能调节温度保温</div>
        </div>
      </div>
      <div class="cell_btn">
        <div class="moore_btn" @click="modelPJ = true">
          <svg-icon
            icon-class="white_add"
            style="width:0.88rem;height:0.88rem;margin-right:2px;"
          ></svg-icon
          >了解更多
        </div>
      </div>
    </div>
    <!-- 7 星尊享服务体系 -->
    <div class="cell cell_5">
      <img
        src="../../assets/wap/coreAdvantages/fw_xx.png"
        alt="fw_xx"
        class="star"
      />
      <div class="title">7 星尊享服务体系</div>
      <div class="tip">智能管理前厅、后厨数据，实现成本、利润全透明化</div>
      <div class="cell_box">
        <div class="cell_item">
          <svg-icon icon-class="core_fw_1" class-name="box_svg"></svg-icon>
          <div class="box_title">全方位项目咨询</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_fw_2" class-name="box_svg"></svg-icon>
          <div class="box_title">全方位规划设计</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_fw_3" class-name="box_svg"></svg-icon>
          <div class="box_title">全方位安装调试</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_fw_4" class-name="box_svg"></svg-icon>
          <div class="box_title">全方位回访跟踪</div>
        </div>
      </div>
      <div class="cell_box_row">
        <div class="cell_item">
          <svg-icon icon-class="core_fw_5" class-name="box_svg"></svg-icon>
          <div class="box_title">全方位使用培训</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_fw_6" class-name="box_svg"></svg-icon>
          <div class="box_title">全方位检测保养</div>
        </div>
        <div class="cell_item">
          <svg-icon icon-class="core_fw_7" class-name="box_svg"></svg-icon>
          <div class="box_title">全方位配件维修</div>
        </div>
      </div>
      <div class="cell_btn">
        <div class="moore_btn" @click="modelFW = true">
          <svg-icon
            icon-class="white_add"
            style="width:0.88rem;height:0.88rem;margin-right:2px;"
          ></svg-icon
          >了解更多
        </div>
      </div>
    </div>
    <!-- 了解更多 -->
    <transition name="fade">
      <div>
        <div
          class="model"
          v-if="modelXT || modelJS || modelGK || modelPJ || modelFW"
          @click="
            modelXT = false
            modelJS = false
            modelGK = false
            modelPJ = false
            modelFW = false
          "
        ></div>
        <div class="dialog" v-if="modelXT">
          <div class="xt_more">
            <div @click="modelXT = false">
              <svg-icon icon-class="close1" class-name="close"></svg-icon>
            </div>

            <div class="detail_1">
              <div class="title">智能系统 OS</div>
              <div class="text">简单易用的智能，背后藏着强大的科技</div>
            </div>
            <div class="detail">
              <div class="title">中控系统</div>
              <div class="text">
                后厨智能大脑，实时在线同步管理，集调料机、炉头为一体，实现从智能控温、自动投料、智能翻炒烹饪步骤全流程SOP，结合精简的UI布局，1人即可同时完成多人操作，更高效、更稳定、更低成本。
              </div>
            </div>
            <div class="bg bg_1"></div>
            <div class="detail">
              <div class="title">移动端 App</div>
              <div class="text">
                平台在线提供海量精美菜谱，可供用户任意挑选使用，还可在平台进行自主菜谱创作，通过线下设备实现智能烹饪，并配备数字化智能管理系统，轻松实现可视化厨房料理。
              </div>
            </div>
            <div class="bg bg_2"></div>
            <div class="detail">
              <div class="title">商家管理后台</div>
              <div class="text">
                为商家提供线上门店日常管理功能，例如查看门店基础信息、设备绑定信息、菜谱信息、烹饪任务信息等等。菜谱商城提供大量智能菜谱，供商家门店选用。
              </div>
            </div>
            <div class="bg bg_3"></div>
          </div>
        </div>
        <div class="dialog" v-if="modelJS">
          <div class="js_more">
            <div @click="modelJS = false">
              <svg-icon icon-class="close1" class-name="close"></svg-icon>
            </div>

            <div class="detail_1">
              <div class="title">智能技术</div>
              <div class="text">简单易用的智能，背后藏着强大的科技</div>
            </div>
            <div class="detail">
              <div class="title">精准投放调料</div>
              <div class="text">
                智能灶接受中控主机指令，精准测算所需调料，及时响应投放指令。
              </div>
            </div>
            <div class="bg bg_1"></div>
            <div class="detail">
              <div class="title">智能补料</div>
              <div class="text">
                智能判断投料柜液体调料是否充足，并自动完成补料。
              </div>
            </div>
            <div class="bg bg_2"></div>
            <div class="detail">
              <div class="title">智能调整角度</div>
              <div class="text">
                智能判断烹饪方式、菜量，自动调整工位，满足多烹饪工位需求。
              </div>
            </div>
            <div class="bg bg_3"></div>
            <div class="detail">
              <div class="title">智能控温</div>
              <div class="text">
                实时控制温度，通过转速、工位、功率自动调节，高度还原大厨烹饪温度环境。
              </div>
            </div>
            <div class="bg bg_4"></div>
            <div class="detail">
              <div class="title">智能翻炒</div>
              <div class="text">
                智能判断烹饪方式，实现顺/逆时针智能翻炒，翻炒更均匀。
              </div>
            </div>
            <div class="bg bg_5"></div>
            <div class="detail">
              <div class="title">智能提醒</div>
              <div class="text">
                语音/文字智能提醒操作步骤，指导还原大厨烹饪行为。
              </div>
            </div>
            <div class="bg bg_6"></div>
            <div class="detail">
              <div class="title">一键清洗</div>
              <div class="text">
                多种清洗方式选择，智能完成清洗、消毒、烘干步骤。
              </div>
            </div>
            <div class="bg bg_7"></div>
            <div class="detail">
              <div class="title">智能菜谱</div>
              <div class="text">
                智能电子菜谱实时操控，让我们的生活更方便哦。
              </div>
            </div>
            <div class="bg bg_8"></div>
          </div>
        </div>
        <div class="dialog" v-if="modelGK">
          <div class="gk_more">
            <div @click="modelGK = false">
              <svg-icon icon-class="close1" class-name="close"></svg-icon>
            </div>

            <div class="detail_1">
              <div class="title">智能数据管控</div>
              <div class="text">
                智能管理前厅、后厨数据，实现成本、利润全透明化
              </div>
            </div>
            <div class="detail">
              <div class="title">设备管理平台</div>
              <div class="text">
                门店数据运筹帷幄，设备运行数据一目了然，成本透明，合理管理设备。
              </div>
            </div>
            <div class="bg bg_1"></div>
            <div class="detail">
              <div class="title">门店管理平台</div>
              <div class="text">
                订单任务、运行状态、故障能源消耗全程可视化；设备能耗数据分析管理。
              </div>
            </div>
            <div class="bg bg_2"></div>
          </div>
        </div>
        <div class="dialog" v-if="modelPJ">
          <div class="pj_more">
            <div @click="modelPJ = false">
              <svg-icon icon-class="close1" class-name="close"></svg-icon>
            </div>

            <div class="detail_1">
              <div class="title">智能配件</div>
              <div class="text">
                智能管理前厅、后厨数据，实现成本、利润全透明化
              </div>
            </div>
            <div class="detail">
              <div class="title">智能打菜机</div>
              <div class="sub">无感支付快速结账，提高用户体验</div>
              <div class="text">
                减重式称重扣费，绝对公平按价取菜
                自动感应翻盖防逃单，保持食品卫生 内嵌式加热系统维持菜温
                前后厅信息互通，实时插单加菜，提高管理效率
              </div>
            </div>
            <div class="bg bg_1"></div>
            <div class="detail">
              <div class="title">智能配送保温箱</div>
              <div class="sub">蓝牙锁管控配送过程</div>
              <div class="text">
                解决食品安全卫生问题 2~8℃ 保温保鲜长达12小时
              </div>
            </div>
            <div class="bg bg_2"></div>
            <div class="detail">
              <div class="title">智能取餐柜</div>
              <div class="sub">热柜具备热菜保温功能</div>
              <div class="text">
                冷柜具备凉菜冷藏功能、净菜冷藏功能冷柜和热柜可级联、结合场景按需组合模块具备自动除菌功能支持多种送餐取餐方式
              </div>
            </div>
            <div class="bg bg_3"></div>
          </div>
        </div>
        <div class="dialog" v-if="modelFW">
          <div class="fw_more">
            <div @click="modelFW = false">
              <svg-icon icon-class="close1" class-name="close"></svg-icon>
            </div>

            <div class="detail_1">
              <div class="title">7 星尊享服务体系</div>
              <div class="text">
                优特智厨科技有限公司配备专业的技术、研发、营销、运营及售后团队。让客户从了解产品第一刻起，即享受专业、周到的服务
              </div>
            </div>
            <div class="detail">
              <div class="title">全方位项目咨询</div>
              <div class="text">
                根据客户需求，展开咨询工作，制定项目计划。
              </div>
            </div>
            <div class="bg bg_1"></div>
            <div class="detail">
              <div class="title">全方位规划设计</div>
              <div class="text">
                根据厨房实际情况，进行产品规划和空间规划。
              </div>
            </div>
            <div class="bg bg_2"></div>
            <div class="detail">
              <div class="title">全方位安装调试</div>
              <div class="text">
                XXXXXXXXXXXXXXXXX
              </div>
            </div>
            <div class="bg bg_3"></div>
            <div class="detail">
              <div class="title">全方位使用培训</div>
              <div class="text">
                专业售后团队现场培训指导，长期远程服务。
              </div>
            </div>
            <div class="bg bg_4"></div>
            <div class="detail">
              <div class="title">全方位检测保养</div>
              <div class="text">
                设备定期全面检测、保养，减少设备故障、延长使用寿命。
              </div>
            </div>
            <div class="bg bg_5"></div>
            <div class="detail">
              <div class="title">全方位配件维修</div>
              <div class="text">
                XXXXXXXXXXXX
              </div>
            </div>
            <div class="bg bg_6"></div>
            <div class="detail">
              <div class="title">全方位回访跟踪</div>
              <div class="text">
                不定期进行回访，全面了解客户使用体验，提高服务质量。
              </div>
            </div>
            <div class="bg bg_7"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

let self
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      modelXT: false,
      modelJS: false,
      modelGK: false,
      modelPJ: false,
      modelFW: false
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(){
      self.modelXT=false
      self.modelJS=false
      self.modelGK=false
      self.modelPJ=false
      self.modelFW=false      
      let type = self.$route.query.type
    window.console.log(type == 'modelXT')
    switch (type) {
      case 'modelXT':
        self.modelXT = true
        break
      case 'modelJS':
        self.modelJS = true
        break
      case 'modelGK':
        self.modelGK = true
        break
      case 'modelPJ':
        self.modelPJ = true
        break
      case 'modelFW':
        self.modelFW = true
        break
      default:
        break
    }
    }
  },
  methods: {},
  created() {
    self = this
    
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.close {
  width: 1.88rem;
  height: 1.88rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.wrapper {
  padding-top: 3rem;
  box-sizing: border-box;
}

.cell {
  height: 41.25rem;
  padding: 3.31rem 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top_title {
    font-size: 0.81rem;
    color: rgba(136, 136, 136, 1);
    margin-bottom: 0.69rem;
  }

  .title {
    font-size: 1.38rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    line-height: 1.88rem;
  }

  .tip {
    font-size: 0.69rem;
    color: rgba(136, 136, 136, 1);
    line-height: 1.13rem;
  }

  .cell_btn {
    .moore_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6.38rem;
      height: 1.88rem;
      background: rgba(255, 255, 255, 0);
      border-radius: 1.13rem;
      border: 0.06rem solid rgba(0, 0, 0, 1);
      font-size: 0.88rem;
      color: rgba(0, 0, 0, 1);
      line-height: 1.88rem;
      text-align: center;
    }
  }
}

.cell_1 {
  background: rgba(0, 0, 0, 1)
    url('../../assets/wap/coreAdvantages/core_list_xt.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;
  padding: 3.31rem 0 0 0;
  box-sizing: border-box;

  .circle {
    width: 6.69rem;
    height: 6.69rem;
    margin-bottom: 0.75rem;
  }

  .title {
    color: #000;
  }

  .tip {
    margin-bottom: 3.81rem;
  }

  .cell_box {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4.44rem;
    box-sizing: border-box;
    justify-content: space-between;
    margin-bottom: 1rem;

    .cell_item {
      width: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3.19rem;

      .box_svg {
        width: 3.38rem;
        height: 2.75rem;
        margin-bottom: 0.5rem;
      }

      .box_text {
        font-size: 0.69rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
}

.cell_2 {
  background: rgba(0, 0, 0, 1)
    url('../../assets/wap/coreAdvantages/core_list_js.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;

  .tip {
    margin-bottom: 3.81rem;
  }

  .cell_box {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4.44rem;
    box-sizing: border-box;
    justify-content: space-between;
    margin-bottom: 1rem;

    .cell_item {
      width: 6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.88rem;

      .box_svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: 0.75rem;
      }

      .box_text {
        font-size: 0.69rem;
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .cell_btn {
    .moore_btn {
      border: 0.06rem solid #fff;
      color: #fff;
    }
  }
}

.cell_3 {
  padding-top: 4.19rem;
  background: rgba(0, 0, 0, 1)
    url('../../assets/wap/coreAdvantages/core_list_gk.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;

  .title {
    color: #000;
  }

  .tip {
    width: 14.3rem;
    margin-bottom: 3.63rem;
    line-height: 1.13rem;
    text-align: center;
  }

  .cell_box {
    display: flex;
    padding: 0 4.45rem;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    margin-bottom: 2.5rem;

    .cell_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 2.44rem;

      .box_svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: 0.81rem;
      }

      .box_title {
        font-size: 1rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 0.5rem;
      }

      .box_content {
        font-size: 0.69rem;
        color: #888;
        line-height: 1.13rem;
        text-align: center;
      }
    }
  }
}

.cell_4 {
  height: 47.5rem;
  background: rgba(0, 0, 0, 1)
    url('../../assets/wap/coreAdvantages/core_list_pj.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;

  .tip {
    margin-bottom: 4.56rem;
  }

  .cell_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    margin-bottom: 1rem;

    .cell_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.88rem;

      .box_svg {
        width: 3.5rem;
        height: 3.5rem;
      }

      .box_title {
        font-size: 0.81rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 0.5rem;
      }

      .box_content {
        padding: 0.19rem;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.19rem;
        font-size: 0.69rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
  .cell_btn {
    .moore_btn {
      border: 0.06rem solid #fff;
      color: #fff;
    }
  }
}

.cell_5 {
  padding-top: 3.94rem;
  background: rgba(0, 0, 0, 1)
    url('../../assets/wap/coreAdvantages/core_list_fw.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;

  .star {
    margin-bottom: 0.44rem;
  }

  .tip {
    width: 14.3rem;
    margin-bottom: 3.63rem;
    line-height: 1.13rem;
    text-align: center;
  }

  .cell_box {
    display: flex;
    padding: 0 5.94rem 0 6.63rem;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .cell_box_row {
    width: 100%;
    display: flex;
    padding: 0 2.88rem 0 3.56rem;
    box-sizing: border-box;
    justify-content: space-between;
    margin-bottom: 3.44rem;
  }

  .cell_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.44rem;

    .box_svg {
      width: 1.06rem;
      height: 1.06rem;
      margin-bottom: 0.33rem;
    }

    .box_title {
      width: 3.75rem;
      font-size: 0.69rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 1.13rem;
      text-align: center;
    }
  }
  .cell_btn {
    .moore_btn {
      border: 0.06rem solid #fff;
      color: #fff;
    }
  }
}

.model {
  position: fixed;
  width: 100%;
  top: 3rem;
  height: calc(100vh - 3rem);
  background: rgba(0, 0, 0, 0.9);
}

.dialog {
  position: fixed;
  z-index: 11;
  width: calc(100vw - 3.76rem);
  height: calc(100vh - 7.19rem);
  // background: rgba(0, 0, 0, 0.9);
  // padding: 1.13rem 1.88rem 3.06rem 1.88rem;
  padding: 1.13rem 0rem 3.06rem 0rem;
  box-sizing: border-box;
  top: 3rem;
  left: 1.88rem;

  .detail_1 {
    height: 10.88rem;

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 1.75rem;
    }

    .text {
      font-size: 0.69rem;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
    }
  }
  .detail {
    padding: 1.81rem;
    padding-bottom: 4.31rem;
    box-sizing: border-box;

    .title {
      font-size: 1.13rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 1.38rem;
    }

    .text {
      font-size: 0.69rem;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 1.13rem;
    }
  }

  .bg {
    height: 11.31rem;
    background: rgba(216, 216, 216, 1);
  }
}

.xt_more {
  height: calc(100vh - 6.06rem);
  background: #fff;
  border-radius: 0.6rem;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;

  .detail_1 {
    background: rgba(256, 256, 256, 0)
      url('../../assets/wap/coreAdvantages/xt_top.png');
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 5.75rem 0 1.88rem 4rem;
    box-sizing: border-box;
  }

  .bg_1 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/coreAdvantage/system_os1.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_2 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/coreAdvantage/system_os2.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_3 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/coreAdvantage/system_os3.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }
}

.js_more {
  height: calc(100vh - 6.06rem);
  background: #fff;
  border-radius: 0.8rem;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;

  .detail_1 {
    background: rgba(256, 256, 256, 0)
      url('../../assets/wap/coreAdvantages/js_top.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 4.25rem 0 1.88rem 2.25rem;
    box-sizing: border-box;
  }

  .detail {
    padding-right: 5.81rem;
  }

  .bg_1 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/js_1.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_2 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/js_2.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_3 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/js_3.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_4 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/js_4.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_5 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/js_5.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_6 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/js_6.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_7 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/js_7.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_8 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/js_8.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }
}

.gk_more {
  height: calc(100vh - 6.06rem);
  background: #fff;
  border-radius: 0.6rem;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;

  .detail_1 {
    background: rgba(256, 256, 256, 0)
      url('../../assets/wap/coreAdvantages/gk_top.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 4.31rem 0 1.88rem 2.63rem;
    box-sizing: border-box;
  }

  .bg_1 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/coreAdvantage/data1.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_2 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/coreAdvantage/data1.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }
}

.pj_more {
  height: calc(100vh - 6.06rem);
  background: #fff;
  border-radius: 0.6rem;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;

  .sub {
    font-size: 0.69rem;
    font-weight: 600;
    color: rgba(51, 51, 51, 1);
    line-height: 1.13rem;
  }

  .detail_1 {
    background: rgba(256, 256, 256, 0)
      url('../../assets/wap/coreAdvantages/pj_top.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 4.31rem 0 1.88rem 2.63rem;
    box-sizing: border-box;
  }

  .bg_1 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/pj_1.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_2 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/pj_2.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_3 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/pj_3.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }
}

.fw_more {
  height: calc(100vh - 6.06rem);
  background: #fff;
  border-radius: 0.8rem;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;

  .detail_1 {
    background: rgba(256, 256, 256, 0)
      url('../../assets/wap/coreAdvantages/fw_top.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 4.25rem 0 1.88rem 2.25rem;
    box-sizing: border-box;
  }

  .detail {
    padding-right: 5.81rem;
  }

  .bg_1 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/fw_1.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_2 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/fw_2.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_3 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/fw_3.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_4 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/fw_4.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_5 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/fw_5.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_6 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/fw_6.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 50%;
  }

  .bg_7 {
    background: rgba(245, 240, 239, 1)
      url('../../assets/wap/coreAdvantages/fw_7.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 100% 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
