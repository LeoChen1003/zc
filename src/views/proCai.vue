<template>
  <div class="cai">
    <div :style="isBuy?'filter:blur(5px)':''">
      <zcHeader :isWhite="isWhite"></zcHeader>
      <div class="cai_hd" :class="isActive?'colorBlack':''">
          <div>
            <p>智能大滚筒炒菜机套机</p>
            <div class="cai_hd_center">
              <span>概览</span>
              <router-link to="/product/proCai/proCaiTechSpecs">技术规格</router-link>
            </div>
            <div class="cai_hd_btn" @click="buy" :class="isShow?'btn_show':''">
                立即预约
            </div>
          </div>
      </div>
      <div class="cai_con1" :style="`height:${height1}px;`">
        <p>“星级大厨”带你体验舌尖上的美味</p>
        <p>智能一拖三炒菜机</p>
        <div class="cai_con1_tip">
            <span>智能云菜谱</span>
            <span class="cai_con1_tip_line">|</span>
            <span>智能大滚筒炒菜机</span>
            <span class="cai_con1_tip_line">|</span>
            <span>中控任务管理</span>
            <span class="cai_con1_tip_line">|</span>
            <span>智能调料机</span>
            <span class="cai_con1_tip_line">|</span>
            <span>气压站</span>
          </div>
        <div @click="buy" class="cai_con1_btn">立即预约</div>
        <div class="cai_con1_cir">
          <div></div>
        </div>
      </div>
      <div class="cai_con2" :style="`height:${height2}px;`" ref="cai1">
        <div class="cai_con2_center">
          <div class="cai_con2_data1">
            <p>更高效</p>
            <p>后厨员工提效 :</p>
            <div>
              <span>300</span> %
            </div>
            <p>1 个小工可以替代 3 位大厨</p>
          </div>
          <div class="cai_con2_data2">
            <p>更专研</p>
            <p>历史研发投入：</p>
            <div>
              <span>400</span> 万元
              <svg-icon icon-class="up" class-name="up"></svg-icon>
            </div>
            <p>12年持续研发创新</p>
          </div>
          <div class="cai_con2_data3">
            <p>更丰富</p>
            <p>云菜谱数量 :</p>
            <div>
              <span>1000</span> 道
              <svg-icon icon-class="up" class-name="up"></svg-icon>
            </div>
            <p>1 台设备拥有 20 名大厨的手艺</p>
          </div>
          <div class="cai_con2_data4">
            <p>更标准</p>
            <p>菜肴口味还原度 :</p>
            <div>
              <span>99.9</span> %
            </div>
            <p>精准投料智能控温还原菜肴</p>
          </div>
        </div>
      </div>
      <div class="cai_con3">
        <div class="cai_con3_center">
        <div class="cai_con2_title">智能一拖三炒菜机</div>
        <p>
          复刻星厨技艺，
          <br />稳定出菜品质，
          <br />降低对大厨的依赖。
        </p>
        <p>云端录入五星大厨烹饪技艺，100%复刻星厨技艺，小工也能替代大厨标准化操作流程，标准化计量控制，统一出菜品质减少后厨培训，降低多门店管理的成本自主录入菜谱，一键加密同步多门店，新菜品快速复制同步。</p>
        <div class="cai_con3_box">
          <div class="cai_con3_item">
            <span>100%</span>
            <span>标准化</span>
            <br />
          </div>
          <div class="cai_con3_item">
            <span>厨艺还原</span>
            <span>出菜品质</span>
          </div>
        </div>
        <div class="cai_con3_pic">
          <img src="../assets/product/rotary1.png" alt />
        </div></div>
      </div>
      <div class="cai_con4">
        <div class="cai_con4_center">
        <p class="p1">按需组合，提高产能。</p>
        <p
          class="p2"
        >一名操作工可以同时操作三台设备，一拖三效率更高18KW超大功率，球釜内锅立体环绕加热0-150°智能调节位置，4档火力自动控制3-5分钟轻松出菜5Kg，一小时可以出菜450份根据厨房空间可2-3工位自由组合选择。</p>
        <div class="cai_con4_text1">
          <p>4分钟</p>
          <p>平均每份菜</p>
        </div>
        <div class="cai_con4_text2">
          <p>＞10000次</p>
          <p>测试标准</p>
        </div>
        <div class="cai_con4_text3">
          <p>180KW</p>
          <p>超大功率</p>
        </div>
        <div class="cai_con4_text4">
          <p>450份</p>
          <p>平均1小时出菜量</p>
        </div>
        </div>
        <div class="cai_con4_pic">
          <img src="../assets/product/rotary2.png" alt />
        </div>
      </div>
      <div class="cai_con5" ref="cai2">
        <div class="cai_con5_center">
        <div class="cai_con5_title">智能调料机</div>
        <p>精准投料，保证出品。</p>
        <p>
          14种调料自动添加，精准度高，误差≤1%
          <br />航天级技术调料传输阀门，精准度高，耐压性强
          <br />支持14种中餐常用调料：
          <br />• 固体调料: 盐、糖、鸡精、淀粉
          <br />• 液体调料: 食用油、香油、生抽、老抽、陈醋、白醋、料酒、白酒、水淀粉、水
        </p>
        <p class="cai_con5_PL">14种</p>
        <p class="cai_con5_PM">调料自动添加</p>
        <p class="cai_con5_PL">≤1%</p>
        <p class="cai_con5_PM">调料投放误差</p>
        <p class="cai_con5_PL">航天级</p>
        <p class="cai_con5_PM">保证零配件精准度</p>
        </div>
        <div class="cai_con5_pic">
          <img src="../assets/product/seasoningMachine1.png" alt />
        </div>
      </div>
      <div class="cai_con6">
        <div class="cai_con6_pic">
          <img src="../assets/product/seasoningMachine2.png" alt />
        </div>
        <div class="cai_con6_center">
        <p class="p3">
          一键清洗，
          <br />操作便捷。
        </p>
        <p class="p4">一键锅体加热，高压水枪辅助冲刷。调料机臭氧水消毒，自动烘干。</p>
        <div class="cai_con6_txt1">
          <p class="p1">臭氧水消毒</p>
          <p class="p2">严格的卫生标准</p>
        </div>
        <div class="cai_con6_txt2">
          <p class="p1">自动烘干</p>
          <p  class="p2">安心无虑</p>
        </div>
      </div>
      </div>
      <div class="cai_con7" ref="cai3">
        <div class="cai_con7_center">
        <div class="cai_con7_title">中控任务管理</div>
        <p>
          智能中控系统，
          <br />厨房的大脑。
        </p>
        <p>智能管理烹饪任务，协调订单与生产管理实时监控全套智能设备工作状态，提前进行故障诊断统计分析后厨能耗数据，有效优化后厨成本。</p>
        <div class="cai_con7_txt1">
          <p>高效操作</p>
          <p class="p">控制多台设备运行</p>
        </div>
        <div class="cai_con7_txt2">
          <p>数据统计</p>
          <p class="p">优化后厨成本</p>
        </div>
        <br />
        <div class="cai_con7_txt3">
          <p>协调订单</p>
          <p class="p">联动操控</p>
        </div>
        <div class="cai_con7_txt4">
          <p>实时监控</p>
          <p class="p">动态变化一目了然</p>
        </div>
        <div class="cai_con7_pic">
          <img src="../assets/product/zhongkong1.png" alt />
        </div>
        </div>
      </div>
      <div class="cai_con8" ref="cai4">
        <div class="cai_con8_center">
        <div class="cai_con8_title">智能大滚筒炒菜机</div>
        <p class="cai_con8_p1">
          APP 智能联动，
          <br />远程同步菜谱。
        </p>
        <p
          class="cai_con8_p2"
        >每道菜谱都可精准控制烹饪的火力曲线、翻炒速度与角度。酥软、适中、有嚼劲，不同口感，不同烹饪方式。自定义菜谱的口味与口感，同步最新营养菜谱，APP 端统统意见搞定，开启智能数据厨房。</p>
        <div class="cai_con8_d1">
          <p>DIY 菜谱</p>
          <p>自定义修改口味与口感</p>
        </div>
        <div class="cai_con8_d2">
          <p>自定义烹饪</p>
          <p>自定义修改翻炒方式</p>
        </div>
        </div>
        <div class="cai_con8_pic">
          <svg-icon icon-class="productHd" class-name="cai_con8_svg"></svg-icon>
          <img src="../assets/product/phone1.png" alt />
        </div>
      </div>
      <div class="cai_con9">
        <div class="cai_con9_center">
        <p class="cai_con9_p1">不止是一台厨具，更是一名星级大厨。</p>
        <p
          class="cai_con9_p2"
        >海量云菜谱实时更新，连接网络后，APP端还有多种烹饪菜单键选择，支持自定义分组。从火辣的川湘菜到清鲜美味的南方江浙菜肴，均可简单完成，菜谱涵盖8大菜系，配合智能语音提示，零基础无门槛，不用调温不用投料，只需简单跟着提示投入主食材，便可让你使用一台厨具就能享用20名不同类型大厨的美味。</p>
        <div class="cai_con9_d1">
          <p>实时更新</p>
          <p>海量云菜谱</p>
        </div>
        <div class="cai_con9_d2">
          <p>＞1000道</p>
          <p>理论菜谱支持</p>
        </div>
        <div class="cai_con9_d3">
          <p>8大菜系</p>
          <p>菜谱涵盖</p>
        </div>
        </div>
        <div class="cai_con9_pic">
          <img src="../assets/product/phone2.png" alt />
        </div>
      </div>
      <div class="cai_bottom" ref="cai5">
        <div class="cai_bottom_btn" @click="tech">
          <img src="../assets/product/addBlack.png" alt />
          <span>了解参数明细</span>
        </div>
      </div>
    </div>
    <transition name="fade">
      <buyConsult v-if="isBuy"></buyConsult>
    </transition>
    <zcFooter></zcFooter>
  </div>
</template>

<script>
import { mapState } from "vuex";
import zcHeader from "@/components/zcHeader.vue";
import zcFooter from "@/components/zcFooter.vue";
import "../styles/variables.scss";
import buyConsult from "@/components/buyConsult.vue";
export default {
  name: "proCai",
  components: {
    zcHeader,
    zcFooter,
    buyConsult
  },
  data() {
    return {
      isWhite: true,
      isBuy: false,
      isActive:false,
      isShow:false,
      height1:0,
      height2:0
    };
  },
  mounted() {
    this.height1 = document.documentElement.clientWidth/(1680/843);
    this.height2 = document.documentElement.clientWidth/(1680/292);
    this.canScroll()
    var hder = document.getElementsByClassName("whiteBack")[0];
    window.onscroll = () => {
        var top = document.documentElement.scrollTop;
          window.console.log(document.documentElement.scrollTop);
        var cTop1 = this.$refs.cai1.offsetTop - 96;
        var cTop2 = this.$refs.cai2.offsetTop - 96;
        var cTop3 = this.$refs.cai3.offsetTop - 96;
        var cTop4 = this.$refs.cai4.offsetTop - 96;
        var cTop5 = this.$refs.cai5.offsetTop - 96;
        // window.console.log(cTop1);
        // window.console.log(document.documentElement.scrollTop)
        if(top<cTop1){
            this.isShow = false;
        }else{
            this.isShow = true;
        }
        if(top<cTop2){
          hder.className = "whiteBack";
          this.isWhite = true;
          this.isActive = false;
        }else if(top >= cTop2 && top <= cTop3){
          hder.className = "blackBack";
          this.isWhite = false;
          this.isActive = true;
        }else if(top>cTop3 && top<= cTop4){
          hder.className = "whiteBack";
          this.isWhite = true;
          this.isActive = false;
        }else if(top>=cTop4 && top<= cTop5){
          hder.className = "blackBack";
          this.isWhite = false;
          this.isActive = true;
        }else{
          hder.className = "whiteBack";
          this.isWhite = true;
          this.isActive = false;
        }
    };
  },
  methods: {
    buy() {
      this.isBuy = true;
      this.noScroll()
    },
    tech() {
      this.$router.push("/product/proCai/proCaiTechSpecs");
    }
  },
  computed: {
    ...mapState({
      windowWidth: "windowWidth"
    })
  },
  watch:{
    windowWidth(){
      this.height1 = document.documentElement.clientWidth/(1680/843);
      this.height2 = document.documentElement.clientWidth/(1680/292);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn_show{
    display: block !important;
}
.colorBlack{
    background-color: #000 !important;
    border-top: none !important;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    p:first-child{
        color: #fff !important;
    }
    div{
      span:first-child,a:nth-child(2){
        color: #fff !important;
      }
    }
    
}
.cai {
  width: 100%;
  .cai_hd {
    transition: all 0.5s;
    width: 100%;
    height: 3rem;
    // border-top: 1px solid #ccc;
    position: fixed;
    z-index: 3;
    top: 3rem;
    background-color: #fff;
    div:first-child{
      width: 53.49rem;
      margin: 0 auto;
      height: 100%;
      position: relative;
    }
    .cai_hd_center{
      width: 6.5rem;
      margin: 0 auto;
      span,a{
        float: left;
        height: 1.06rem;
        font-size: 0.75rem;
        color: #333;
        margin-top: 0.88rem;
      }
      span{
        width: 1.5rem;
        font-weight: 600;
        // margin-left: 11%;
      }
      a{
        width: 3rem;
        font-weight: 400;
        margin-left: 1.5rem;
      }
    }
    p:first-child {
      float: left;
      width: 8.75rem;
      height: 1.25rem;
      font-size: 0.87rem;
      font-weight: 400;
      color: #333;
      // margin-left: 21%;
      margin-top: 0.88rem;
    }
    .cai_hd_btn{
        display: none;
        float: left;
        position: absolute;
        right: 0;
        width:6.5rem;
        height:2rem;
        background:rgba(44,198,192,1);
        border-radius:1rem;
        font-size:0.88rem;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:2rem;
        text-align: center;
        // margin-left: 19%;
        margin-top: 0.5rem;
        cursor: pointer;
    }
  }
  .cai_con1 {
    width: 100%;
    // height: 52.68rem;
    background: url("../assets/product/caiHd.jpg");
    background-size: cover;
    overflow: hidden;
    margin-top: 3rem;
    position: relative;
    p:first-child {
      width: 13.25rem;
      height: 1.25rem;
      font-size: 0.87rem;
      font-weight: 400;
      color: #333;
      margin: 2.9% auto 0;
    }
    p:nth-child(2) {
      width: 20rem;
      height: 3.5rem;
      font-size: 2.5rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      margin: 0.5rem auto 0;
    }
    .cai_con1_tip {
        font-size: 0.88rem;
        width: 35rem;
        color: #333;
        margin: 0 auto;
        margin-top: 1rem;
        .cai_con1_tip_line {
          color: #ccc;
          margin-right: 1.25rem;
          margin-left: 1.25rem;
        }
      }
    .cai_con1_btn {
      width: 9rem;
      height: 2.62rem;
      background: #2cc6c0;
      border-radius: 1.44rem;
      border: 2px solid #2cc6c0;
      text-align: center;
      line-height: 2.62rem;
      font-size: 1rem;
      color: #fff;
      margin: 2.1% auto 0;
      cursor: pointer;
    }
    .cai_con1_cir {
      width: 1.5rem;
      height: 2.25rem;
      border-radius: 1rem;
      border: 1px solid rgba(0, 0, 0, 1);
      // margin: 0 auto;
      left: 50%;
      margin-left: -0.75rem;
      bottom: 2rem;
      position: absolute;
      div {
        width: 0.25rem;
        height: 0.25rem;
        background-color: #000;
        margin: 0 auto;
        margin-top: 0.4rem;
        border-radius: 50%;
      }
    }
  }
  .cai_con2 {
    width: 100%;
    // height: 18.25rem;
    background: url("../assets/product/dataBack.jpg");
    background-size: cover;
    overflow: hidden;
    .cai_con2_center {
      width: 57.6rem;
      margin: 0 auto;
      height: 100%;
      // margin-top: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cai_con2_data1,
    .cai_con2_data2,
    .cai_con2_data3,
    .cai_con2_data4 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p:first-child {
        width: 3.75rem;
        height: 1.75rem;
        font-size: 1.25rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
      }
      p:nth-child(2) {
        height: 1.75rem;
        font-size: 0.88rem;
        font-weight: 400;
        color: #333;
        margin-top: 0.5rem;
      }
      div:nth-child(3) {
        font-size: 0.88rem;
        color: #000;
        margin-top: -0.5rem;
        span {
          font-family: mFont;
          font-size: 3.75rem;
          font-weight: normal;
        }
      }
      p:last-child {
        color: #333;
        font-size: 0.88rem;
      }
    }
    .cai_con2_data1 {
      margin-right: 6.63rem;
    }
    .cai_con2_data2 {
      margin-right: 5.81rem;
      position: relative;
      .up {
        position: absolute;
        width: 0.88rem;
        height: 0.88rem;
        top: 4.8rem;
        left: 6.31rem;
      }
    }
    .cai_con2_data3 {
      margin-right: 4rem;
      position: relative;
      .up {
        position: absolute;
        width: 0.88rem;
        height: 0.88rem;
        top: 4.8rem;
        left: 9.5rem;
      }
    }
  }
  .cai_con3 {
    width: 100%;
    height: 58.75rem;
    background: linear-gradient(
      149deg,
      rgba(231, 238, 241, 1) 0%,
      rgba(231, 235, 239, 1) 6%,
      rgba(247, 248, 249, 1) 39%,
      rgba(255, 255, 255, 1) 60%,
      rgba(235, 240, 243, 1) 84%,
      rgba(223, 231, 235, 1) 100%
    );
    position: relative;
    overflow: hidden;
    .cai_con3_center{
      width: 52.49rem;
      margin: 0 auto;
    }
    .cai_con2_title {
      width: 8rem;
      height: 1.5rem;
      background: #2cc6c0;
      border-radius: 0.19rem;
      font-size: 0.88rem;
      text-align: center;
      color: #ffffff;
      margin-top: 10rem;
      // margin-top: 5.9%;
      // 
      line-height: 1.5rem;
    }
    p:nth-child(2) {
      // 
      width: 22.5rem;
      height: 11.25rem;
      font-size: 2.5rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      margin-top: 1.62rem;
      // margin-top: 0.9%;
    }
    p:nth-child(3) {
      width: 27.32rem;
      height: 8rem;
      font-size: 1rem;
      font-weight: 400;
      color: #333;
      margin-top: 2.5rem;
      // margin-top: 1.48%;
      font-family: PingFangSC-Regular, PingFang SC;
      line-height: 2rem;
    }
    .cai_con3_box {
      display: flex;
      
      margin-top: 3rem;
      // margin-top: 1.78%;
      width: 27rem;
      .cai_con3_item {
        display: flex;
        flex-direction: column;
        &:last-child {
          margin-left: 5rem;
        }
        span:nth-child(1) {
          font-size: 2.25rem;
          font-weight: 600;
          color: #2cc6c0;
        }
        span:nth-child(2) {
          font-size: 1rem;
          font-family: AlibabaPuHuiTiR;
          color: #333;
          margin-top: 0.5rem;
        }
      }
    }
    .cai_con3_pic {
      position: absolute;
      // width: 39.8%;
      width: 41.88rem;
      height: 26.88rem;
      // height: 26.875rem;
      // height: 45.7%;
      // top: 31.87rem;
      bottom: 0;
      margin-left: 31.88rem;
      // right: 8.4%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .cai_con4 {
    width: 100%;
    height: 58.75rem;
    background: linear-gradient(
      149deg,
      rgba(231, 238, 241, 1) 0%,
      rgba(231, 235, 239, 1) 6%,
      rgba(247, 248, 249, 1) 39%,
      rgba(255, 255, 255, 1) 60%,
      rgba(235, 240, 243, 1) 84%,
      rgba(223, 231, 235, 1) 100%
    );
    overflow: hidden;
    position: relative;
    .cai_con4_center{
      width: 52.49rem;
      margin: 0 auto;
    }
    .p1 {
      
      margin-top: 10rem;
      // margin-top: 5.9%;
      width: 25rem;
      height: 3.5rem;
      font-size: 2.5rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
    }
    .p2 {
      width: 52.2rem;
      height: 4rem;
      font-size: 1rem;
      font-weight: 400;
      color: #333;
      line-height: 2rem;
      
      margin-top: 2rem;
      // margin-top: 1.2%;
    }
    .cai_con4_text1 {
      float: left;
      width: 5.88rem;
      height: 5.63rem;
      
      margin-top: 3rem;
      // margin-top: 1.78%;
      p:first-child {
        font-size: 2.25rem;
        font-weight: 600;
        color: rgba(44, 198, 192, 1);
      }
      p:nth-child(2) {
        font-size: 1rem;
        color: rgba(51, 51, 51, 1);
        font-weight: 400;
        margin-top: 0.5rem;
      }
    }
    .cai_con4_text2,
    .cai_con4_text3,
    .cai_con4_text4 {
      float: left;
      width: 10.88rem;
      height: 5.63rem;
      margin-left: 6.5rem;
      margin-top: 3rem;
      // margin-top: 1.78%;
      p:first-child {
        font-size: 2.25rem;
        font-weight: 600;
        color: rgba(44, 198, 192, 1);
      }
      p:nth-child(2) {
        font-size: 1rem;
        color: rgba(51, 51, 51, 1);
        font-weight: 400;
        margin-top: 0.5rem;
      }
    }
    .cai_con4_text3 {
      width: 7.38rem;
    }
    .cai_con4_text4 {
      width: 7.44rem;
    }
    .cai_con4_pic {
      width: 77.88rem;
      // width: 74.17%;
      height: 19.82rem;
      // height: 33.72%;
      // margin: 0 auto;
      // margin-top: 20.82rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .cai_con5 {
    width: 100%;
    height: 58.75rem;
    background: linear-gradient(
      180deg,
      rgba(39, 40, 41, 1) 0%,
      rgba(30, 31, 33, 1) 100%
    );
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.02);
    overflow: hidden;
    position: relative;
    .cai_con5_center{
      width: 52.49rem;
      margin: 0 auto;
    }
    .cai_con5_title {
      width: 5.38rem;
      height: 1.5rem;
      background: rgba(44, 198, 192, 1);
      border-radius: 0.19rem;
      
      margin-top: 9rem;
      // margin-top: 5.3%;
      font-size: 0.88rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 1.5rem;
      text-align: center;
    }
    p:nth-child(2) {
      width: 25rem;
      height: 3.5rem;
      font-size: 2.5rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      
      margin-top: 1.5rem;
      // margin-top: 0.89%;
    }
    p:nth-child(3) {
      width: 37.07rem;
      height: 10rem;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(136, 136, 136, 1);
      line-height: 2rem;
      
      margin-top: 2rem;
      // margin-top: 1.2%;
    }
    .cai_con5_PL {
      font-size: 2.25rem;
      font-weight: 600;
      color: rgba(44, 198, 192, 1);
      line-height: 3.13rem;
      
      margin-top: 1.5rem;
      // margin-top: 0.89%;
    }
    p:nth-child(4) {
      margin-top: 3rem;
      // margin-top: 1.78%;
    }
    .cai_con5_PM {
      height: 2rem;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(136, 136, 136, 1);
      line-height: 2rem;
      
      margin-top: 0.5rem;
      // margin-top: 0.3%;
    }
    .cai_con5_pic {
      position: absolute;
      width: 48.82rem;
      // width: 46.49%;
      height: 29.06rem;
      height: 49.4%;
      bottom: 0;
      // right: 3.5%;
      right: 3.68rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .cai_con6 {
    width: 100%;
    height: 58.75rem;
    background: linear-gradient(
      180deg,
      rgba(39, 40, 41, 1) 0%,
      rgba(30, 31, 33, 1) 100%
    );
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.02);
    overflow: hidden;
    position: relative;
    .cai_con6_center{
      width: 52.49rem;
      margin: 0 auto;
      position: relative;
      .p3 {
          position: absolute;
          width: 12.5rem;
          height: 7rem;
          font-size: 2.5rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 3.5rem;
          left: 0;
          top: 25rem;
          // top: 42.5%;
      }
      .p4 {
        position: absolute;
        top: 34.5rem;
        // top: 58.72%;
        // left: 21.3%;
        left: 0;
        height: 2rem;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
        line-height: 2rem;
      }
      .cai_con6_txt1,
      .cai_con6_txt2 {
        position: absolute;
        // left: 21.3%;
        left: 0;
        top: 39.5rem;
        // top: 67.2%;
        width: 11.25rem;
        height: 5.63rem;
        .p1 {
          font-size: 2rem;
          font-weight: 600;
          color: rgba(44, 198, 192, 1);
        }
        .p2 {
          width: 7rem;
          height: 2rem;
          font-size: 1rem;
          font-weight: 400;
          color: rgba(136, 136, 136, 1);
          margin-top: 1rem; 
          // margin-left: -21.3%;
        }
      }
      .cai_con6_txt2 {
        left: 43%;
      }
    }
    .cai_con6_pic {
      position: absolute;
      width: 47.44rem;
      // width: 45.18%;
      height: 29.44rem;
      // height: 50.11%;
      right: 10.17rem;
      // right: 9.68%;
      top: 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .cai_con7 {
    width: 100%;
    height: 58.75rem;
    background: linear-gradient(
      149deg,
      rgba(231, 238, 241, 1) 0%,
      rgba(231, 235, 239, 1) 6%,
      rgba(247, 248, 249, 1) 39%,
      rgba(255, 255, 255, 1) 60%,
      rgba(235, 240, 243, 1) 84%,
      rgba(223, 231, 235, 1) 100%
    );
    overflow: hidden;
    position: relative;
    .cai_con7_center{
      width: 52.49rem;
      margin: 0 auto;
    }
    .cai_con7_title {
      width: 6.25rem;
      height: 1.5rem;
      background: #2cc6c0;
      border-radius: 0.18rem;
      // margin-top: 11.25rem;
      margin-top: 10.71%;
      
      font-size: 0.88rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 1.5rem;
      text-align: center;
    }
    p:nth-child(2) {
      width: 17.5rem;
      height: 7rem;
      font-size: 2.5rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      line-height: 3.5rem;
      
      margin-top: 1.63rem;
      // margin-top: 1.55%;
    }
    p:nth-child(3) {
      width: 25rem;
      height: 6rem;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 2rem;
      
      margin-top: 2.5rem;
      // margin-top: 2.38%;
    }
    .cai_con7_txt1,
    .cai_con7_txt2,
    .cai_con7_txt3,
    .cai_con7_txt4 {
      float: left;
      margin-top: 3rem;
      // margin-top: 2.8%;
      
      width: 9rem;
      height: 5.63rem;
      p:first-child {
        width: 9rem;
        height: 3.13rem;
        font-size: 2.25rem;
        font-weight: 600;
        color: rgba(44, 198, 192, 1);
        line-height: 3.13rem;
      }
      .p {
        width: 8rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 2rem;
        margin-left: 0rem;
        margin-top: 0rem;
      }
    }
    .cai_con7_txt2 {
      margin-left: 4.38rem;
    }
    .cai_con7_txt3 {
      margin-left: -22.4rem;
      margin-top: 9rem;
      // margin-top: 8.57%;
    }
    .cai_con7_txt4 {
      margin-left: -9.2rem;
      margin-top: 9rem;
      // margin-top: 8.57%;
    }
    .cai_con7_pic {
      position: absolute;
      width: 40.81rem;
      height: 33.13rem;
      height: 56.39%;
      // top: 25.6rem;
      bottom: 0;
      // right: 9%;
      margin-left: 31.88rem;
      // margin-left: 6.5%;
      // left: 54.7%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .cai_con8 {
    width: 100%;
    height: 58.75rem;
    position: relative;
    background: linear-gradient(
      180deg,
      rgba(7, 47, 51, 1) 0%,
      rgba(30, 31, 32, 1) 100%
    );
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.02);
    overflow: hidden;
    .cai_con8_center{
      width: 52.49rem;
      margin: 0 auto;
    }
    .cai_con8_title {
      
      margin-top: 7.5rem;
      // margin-top: 6.14%;
      width: 8rem;
      height: 1.5rem;
      background: rgba(44, 198, 192, 1);
      border-radius: 0.19rem;
      font-size: 0.88rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 1.5rem;
      text-align: center;
    }
    .cai_con8_p1 {
      width: 18.32rem;
      height: 7rem;
      font-size: 2.5rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      
      margin-top: 1.63rem;
      // margin-top: 1.55%;
    }
    .cai_con8_p2 {
      width: 33.75rem;
      height: 6rem;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(136, 136, 136, 1);
      
      margin-top: 2rem;
      // margin-top: 1%;
      line-height: 2rem;
    }
    .cai_con8_d1,
    .cai_con8_d2 {
      width: 10rem;
      height: 5.64rem;
      float: left;
      
      margin-top: 2.75rem;
      // margin-top: 1.6%;
      p:first-child {
        width: 9.07rem;
        height: 3.13rem;
        font-size: 2.25rem;
        font-weight: 600;
        color: rgba(44, 198, 192, 1);
        line-height: 3.13rem;
      }
      p:nth-child(2) {
        width: 10rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
        line-height: 2rem;
        margin-top: 0.5rem;
      }
    }
    .cai_con8_d2 {
      width: 11.25rem;
      margin-left: 3.88rem;
      p:first-child {
        width: 11.25rem;
      }
    }
    .cai_con8_svg {
      width: 75.13rem;
      // width: 71.5%;
      height: 23.75rem;
      // height: 40.4%;
      // margin-top: 1.13rem;
      position: absolute;
      bottom: 0;
      // left: 6.8rem;
      // left: 50%;
      // transform: translateX(-50%);
    }
    .cai_con8_pic {
      // width: 23.56rem;
      // // width: 22.4%;
      // // height: 54%;
      // height: 31.75rem;
      width: 75.13rem;
      // width: 71.5%;
      height: 23.75rem;
      margin: 0 auto;
      position: absolute;
      // top: 28.56rem;
      // right: 24.93rem;
      bottom: 0;
      // right: 18.57%;
      left: 50%;
      transform: translateX(-50%);
      img{
        z-index: 2;
        width: 23.56rem;
        height: 31.75rem;
        position: absolute;
        right: 4.56rem;
        bottom: 0;
      }
    }
  }
  .cai_con9 {
    width: 100%;
    height: 58.75rem;
    background: linear-gradient(
      180deg,
      rgba(7, 47, 51, 1) 0%,
      rgba(30, 31, 32, 1) 100%
    );
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.02);
    overflow: hidden;
    position: relative;
    .cai_con9_center{
      width: 52.49rem;
      margin: 0 auto;
    }
    .cai_con9_p1 {
      width: 42.5rem;
      height: 3.5rem;
      font-size: 2.5rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 3.5rem;
      margin-top: 7.5rem;
      // margin-top: 7.1%;
      
    }
    .cai_con9_p2 {
      
      margin-top: 2.5rem;
      // margin-top: 2.3%;
      width: 52.5rem;
      height: 6rem;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(136, 136, 136, 1);
      line-height: 2rem;
    }
    .cai_con9_d1,
    .cai_con9_d2,
    .cai_con9_d3 {
      width: 9rem;
      height: 5.23rem;
      float: left;
      
      margin-top: 3rem;
      // margin-top: 2.7%;
      p:first-child {
        width: 9rem;
        height: 3.13rem;
        font-size: 2.25rem;
        font-weight: 600;
        color: rgba(44, 198, 192, 1);
        line-height: 3.13rem;
      }
      p:nth-child(2) {
        width: 6rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
        line-height: 2rem;
        margin-top: 0.5rem;
      }
    }
    .cai_con9_d2 {
      width: 9.5rem;
      margin-left: 7.31rem;
      p:first-child {
        width: 9.5rem;
      }
    }
    .cai_con9_d3 {
      margin-left: 8.56rem;
    }
    .cai_con9_pic {
      width: 65.06rem;
      // width: 61.9%;
      // height: 42.34%;
      height: 24.88rem;
      margin: 13.7% auto 0;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .cai_bottom {
    width: 100%;
    height: 15rem;
    background: url("../assets/product/bottom.jpg");
    background-size: cover;
    overflow: hidden;
    .cai_bottom_btn {
      width: 9.38rem;
      height: 2rem;
      background: rgba(255, 255, 255, 0);
      border-radius: 1rem;
      border: 1px solid rgba(0, 0, 0, 1);
      // margin: 6.56rem auto 0;
      position: relative;
      left: 50%;
      top: 50%;
      margin-left: -4.69rem;
      margin-top: -1rem;
      cursor: pointer;
      img {
        position: absolute;
        top: 0.45rem;
        left: 1rem;
      }
      span {
        width: 5.3rem;
        height: 1.25rem;
        font-size: 0.88rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 2rem;
        position: absolute;
        left: 2.63rem;
      }
    }
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