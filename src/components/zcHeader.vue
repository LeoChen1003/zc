<template>
  <div :class="isWhite?'whiteBack':'blackBack'" ref="nav">
    <div class="header headerW">
      <div class="header_center">
        <div class="header_logo" @click="$router.push('/')">
          <svg-icon icon-class="logo" class-name="index_svg_b" style="width:7rem;height:1.12rem;"></svg-icon>
          <svg-icon icon-class="logo_w" class-name="index_svg_w" style="width:7rem;height:1.12rem;"></svg-icon>
        </div>
        <div class="header_navbar">
          <div class="header_navbar">
            <span @click="index" :class="tab0==0?'bold':'nor'">首页</span>
            <span
              @click="product"
              class="productCenter"
              @mousemove="showPro"
              @mouseleave="hidePro"
              :class="tab1==0?'bold':'nor'"
            >产品中心</span>
            <span @click="newCenter" :class="tab2==0?'bold':'nor'">新闻中心</span>
            <span @click="coreAdvantage" :class="tab3==0?'bold':'nor'">核心优势</span>
            <span
              @mousemove="show"
              @mouseleave="hide"
              @click="withUs"
              :class="tab4==0?'bold':'nor'"
            >关于我们</span>
          </div>
        </div>
        <div class="header_btn" @click="concat">联系我们</div>
      </div>
      
    </div>
    <div class="black"></div>
    <div style="position:relative;" class="header_bottom">
      <div class="show" @mousemove="show" @mouseleave="hide">
        <div class="show_center">
          <p @click="intro" :class="isBold?'bold':'nor'">企业介绍</p>
          <p @click="inven" :class="isBold1?'bold':'nor'">专利发明</p>
          <p @click="lab" :class="isBold2?'bold':'nor'">实验室</p>
        </div>
      </div>
      <div class="showPro" @mousemove="showPro" @mouseout="hidePro" :class="isHeight?'':isHeight1?'height':'height1'">
        <div class="showPro_center">
          <div class="showPro_l">
            <div class="showPro_l_btn1" @mousemove="changeColor1">旗舰智厨产品</div>
            <div class="showPro_l_btn2" @mousemove="changeColor2">更多智厨产品</div>
            <div class="showPro_l_btn3" @mousemove="changeColor3">其他智能产品</div>
          </div>
          <div class="showPro_line">
            <div :class="pos?'showPro_line_small':'showPro_line_small1'"></div>
          </div>
          <div class="showPro_line1">
            <div class="showPro_line_small1"></div>
            <!-- <div :class="pos?'showPro_line_small':'showPro_line_small1'"></div> -->
          </div>
          <div class="showPro_all">
            <div class="showPro_r1">
              <div class="showPro_r1_cai" @click="cai">
                <svg-icon icon-class="header_cai" class-name="icon"></svg-icon>
                <p>智能一拖三炒菜机</p>
                <p>旗舰</p>
              </div>
              <div class="showPro_r1_AIO" @click="aio">
                <svg-icon icon-class="header_AIO" class-name="icon"></svg-icon>
                <p>智能精炒一体机</p>
                <p>旗舰</p>
              </div>
            </div>
            <div class="showhh">
              <div class="showPro_r2">
                <div @click="morePro1">
                  <svg-icon icon-class="pingmianlu" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp1">智能多头平面炉</span>
                </div>
                <div @click="morePro2">
                  <svg-icon icon-class="header1" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp2">智能单头凹面炒炉</span>
                </div>
                <div @click="morePro3">
                  <svg-icon icon-class="header2" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp3">智能单头单尾凹面炒炉</span>
                </div>
                <div @click="morePro4">
                  <svg-icon icon-class="header3" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp4">智能海鲜蒸柜</span>
                </div>
                <div style="margin-top:2rem;"  @click="morePro5">
                  <svg-icon icon-class="header4" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp1">智能蒸饭柜</span>
                </div>
                <div style="margin-top:2rem;"  @click="morePro6">
                  <svg-icon icon-class="header5" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp2">智能蒸点炉</span>
                </div>
                <div style="margin-top:2rem;"  @click="morePro7">
                  <svg-icon icon-class="header6" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp3">智能烤箱</span>
                </div>
                <div style="margin-top:2rem;"  @click="morePro8">
                  <svg-icon icon-class="header7" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp4">智能炸炉</span>
                </div>
                <div style="margin-top:2rem;"  @click="morePro9">
                  <svg-icon icon-class="header8" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp3">智能煮面机</span>
                </div>
                <div style="margin-top:2rem;"  @click="morePro10">
                  <svg-icon icon-class="header9" class="icon3" style=" width: 7.5rem; height:7.5rem"></svg-icon>
                  <span class="sp4">智能矮汤炉</span>
                </div>
              </div>
            </div>
            <div class="showhh1">
                <div class="showPro_r3">
                <div class="showPro_r3_other1" @click="otherPro1">
                  <svg-icon icon-class="other1" class-name="svg"></svg-icon>
                  <p>智能配送保温箱</p>
                </div>
                <div class="showPro_r3_other2" @click="otherPro2">
                  <svg-icon icon-class="other2" class-name="svg"></svg-icon>
                  <p>智能取餐</p>
                </div>
                <div class="showPro_r3_other3" @click="otherPro3">
                  <svg-icon icon-class="other3" class-name="svg"></svg-icon>
                  <p>智能打菜机</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tab0","tab1", "tab2", "tab3", "tab4","isWhite"],
  data() {
    return {
      tab: 0,
      isHeight: true,
      isHeight1: true,
      pos: true,
      isBold:false,
      isBold1:false,
      isBold2: false
    };
  },
  components: {},
  methods: {
    index(){ 
      this.$router.push("/");
    },
    intro() {
      // this.tab = 0;
      // this.$emit("changeTab", this.tab);
      this.hide();
      this.isBold = true;
      this.isBold1 = false;
      this.isBold2 = false;
      this.$router.push({
        path:"/with",
        query:{
          type:'about_intro'
        }
      });
    },
    inven() {
      // this.tab = 1;
      // this.$emit("changeTab", this.tab);
      this.hide();
      this.isBold1 = true;
      this.isBold = false;
      this.isBold2 = false;
      this.$router.push({
        path:"/with",
        query:{
          type:'about_inven'
        }
      });
    },
    lab() {
      // this.tab = 2;
      // this.$emit("changeTab", this.tab);
      this.hide();
      this.isBold2 = true;
      this.isBold = false;
      this.isBold1 = false;
      this.$router.push({
        path:"/with",
        query:{
          type:'about_lab'
        }
      });
    },
    show() {
      var show = document.getElementsByClassName("show")[0];
      show.style.height="10.75rem";
      show.style.visibility="visible";
      this.$refs.nav.className = "whiteBack";
      var black = document.getElementsByClassName("black")[0]
      black.style.display = "block";
    },
    hide() {
      var show = document.getElementsByClassName("show")[0];
      show.style.visibility = "hidden";
      show.style.height=0;
      var black = document.getElementsByClassName("black")[0]
      black.style.display = "none";
      if(this.isWhite){
        this.$refs.nav.className = "whiteBack";
      }else{
        this.$refs.nav.className = "blackBack";
      }
    },
    product() {
      this.$router.push("/product");
    },
    newCenter() {
      this.$router.push("/new");
    },
    coreAdvantage() {
      this.$router.push("/coreAdvantage");
    },
    withUs() {
      this.$router.push("/with");
    },
    concat() {
      this.$router.push("/contact");
    },
    showPro() {
      var black = document.getElementsByClassName("black")[0];
      this.isHeight = false;
      black.style.display = "block";
      this.$refs.nav.className = "whiteBack";
      var all = document.getElementsByClassName("showPro_all")[0];
      all.style.display = "block";
    },
    hidePro() {
      var black = document.getElementsByClassName("black")[0];
      this.isHeight  = true;
      black.style.display = "none";
      var all = document.getElementsByClassName("showPro_all")[0];
      all.style.display = "none";
      if(this.isWhite){
        this.$refs.nav.className = "whiteBack";
      }else{
        this.$refs.nav.className = "blackBack";
      }
    },
    changeColor1() {
      this.isHeight = false;
      this.isHeight1 = true;
      this.pos = true;
      var btn2 = document.getElementsByClassName("showPro_l_btn2")[0];
      btn2.style.backgroundColor = "#fff";
      btn2.style.color = "#000";
      var btn3 = document.getElementsByClassName("showPro_l_btn3")[0];
      btn3.style.backgroundColor = "#fff";
      btn3.style.color = "#000";
      var right1 = document.getElementsByClassName("showPro_r1")[0];
      right1.style.display= "block";
      var right2 = document.getElementsByClassName("showhh")[0];
      right2.style.display= "none";
      var right3 = document.getElementsByClassName("showhh1")[0];
      right3.style.display= "none";
      var btn1 = document.getElementsByClassName("showPro_l_btn1")[0];
      btn1.style.backgroundColor = "#000";
      btn1.style.color = "#fff";
      var line1 = document.getElementsByClassName("showPro_line")[0];
      var line2 = document.getElementsByClassName("showPro_line1")[0];
      line1.style.display = "block";
      line2.style.display = "none";
    },
    changeColor2() {
      this.isHeight = false;
      this.isHeight1 = false;
      var btn3 = document.getElementsByClassName("showPro_l_btn3")[0];
      btn3.style.backgroundColor = "#fff";
      btn3.style.color = "#000";
      var right1 = document.getElementsByClassName("showPro_r1")[0];
      right1.style.display= "none";
      var right3 = document.getElementsByClassName("showhh1")[0];
      right3.style.display= "none";
      var right2 = document.getElementsByClassName("showhh")[0];
      right2.style.display= "block";
      var btn2 = document.getElementsByClassName("showPro_l_btn2")[0];
      btn2.style.backgroundColor = "#000";
      btn2.style.color = "#fff";
      var btn1 = document.getElementsByClassName("showPro_l_btn1")[0];
      btn1.style.backgroundColor = "#fff";
      btn1.style.color = "#000";
      var line1 = document.getElementsByClassName("showPro_line")[0];
      var line2 = document.getElementsByClassName("showPro_line1")[0];
      line1.style.display = "none";
      line2.style.display = "block";
    },
    changeColor3(){
      this.isHeight = false;
      this.isHeight1 = true;
      this.pos = false;
      var btn2 = document.getElementsByClassName("showPro_l_btn2")[0];
      btn2.style.backgroundColor = "#fff";
      btn2.style.color = "#000";
      var btn1 = document.getElementsByClassName("showPro_l_btn1")[0];
      btn1.style.backgroundColor = "#fff";
      btn1.style.color = "#000";
      var right1 = document.getElementsByClassName("showPro_r1")[0];
      right1.style.display= "none"
      var right2 = document.getElementsByClassName("showhh")[0];
      right2.style.display= "none";
      var right3 = document.getElementsByClassName("showhh1")[0];
      right3.style.display= "block";
      var btn3 = document.getElementsByClassName("showPro_l_btn3")[0];
      btn3.style.backgroundColor = "#000";
      btn3.style.color = "#fff";
      var line1 = document.getElementsByClassName("showPro_line")[0];
      var line2 = document.getElementsByClassName("showPro_line1")[0];
      line1.style.display = "block";
      line2.style.display = "none";
    },
    cai() {
      this.$router.push("/product/proCai");
    },
    aio() {
      this.$router.push("/product/proAIO");
    },
    otherPro3(){
      this.$router.push({
        path:"/product",
        query:{
          type:'other3'
        }
      });
      this.hideAll();
    },
    otherPro1(){
      this.$router.push({
        path:"/product",
        query:{
          type:'other1'
        }
      });
      this.hideAll();
    },
    otherPro2(){
      this.$router.push({
        path:"/product",
        query:{
          type:'other2'
        }
      });
      this.hideAll();
    },
    hideAll(){
      this.isHeight = true;
    },
    morePro1(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more1'
        }
      });
      this.hideAll();
    },
    morePro2(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more2'
        }
      });
      this.hideAll();
    },
    morePro3(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more3'
        }
      });
      this.hideAll();
    },
    morePro4(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more4'
        }
      });
      this.hideAll();
    },
    morePro5(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more5'
        }
      });
      this.hideAll();
    },
    morePro6(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more6'
        }
      });
      this.hideAll();
    },
    morePro7(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more7'
        }
      });
      this.hideAll();
    },
    morePro8(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more8'
        }
      });
      this.hideAll();
    },
    morePro9(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more9'
        }
      });
      this.hideAll();
    },
    morePro10(){
      this.$router.push({
        path:"/product",
        query:{
          type:'more10'
        }
      });
      this.hideAll();
    }
  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header .header_center{
  width: 53.49rem;
  position: relative;
  margin: 0 auto;
  .header_btn{
    position: absolute;
    right: 0;
  }
}
@keyframes key_showPro{
    0%{
      opacity: 0;
      transform: translateX(-.7rem);
    }
    100%{
      opacity: 1;
      transform: translateX(0);
    }
}
.height{
  height: 16.88rem !important;
  visibility: visible !important;
}
.height1{
  height: 37.06rem !important;
  visibility: visible !important;
}
.header_bottom {
  position: relative;
  .show {
    transition: all 0.5s;
    width: 100vw;
    height: 0;
    visibility: hidden;
    min-width: 89rem;
    position: fixed;
    z-index: 10;
    margin-top: 2.94rem;
    overflow: hidden;
    background: linear-gradient(
      180deg,
      rgba(240, 240, 240, 1) 0%,
      rgba(255, 255, 255, 1) 12%,
      rgba(255, 255, 255, 1) 100%
    );
    .show_center{
      width: 28rem;
      margin: 0 auto;
      position: relative;
      p {
        cursor: pointer;
        width: 3.5rem;
        height: 1.25rem;
        font-size: 0.87rem;
        color: #000;
        position: absolute;
        transition: all 0.5s;
        right: 0;
      }
      p:first-child {
        top: 2rem;
      }
      p:nth-child(2) {
        top: 4rem;
      }
      p:last-child {
        top: 6rem;
      }
    }
    
  }
  .showPro {
      // display: none;
      transition: all 0.5s;
      visibility: hidden;
      height: 0;
      min-width: 89rem;
      position: fixed;
      overflow: hidden;
      z-index: 10;
      width: 100%;
      // height: 16.87rem;
      background: linear-gradient(
        180deg,
        rgba(240, 240, 240, 1) 0%,
        rgba(255, 255, 255, 1) 12%,
        rgba(255, 255, 255, 1) 100%
      );
      top: 3rem;
      left: 0rem;
      padding-bottom: 3.44rem;
      // box-sizing: border-box;
      .showPro_center{
        width: 61rem;
        margin: 0 auto;
      }
      .showPro_l,
      .showPro_r1 {
        float: left;  
      }
      .showPro_l {
        // width: 32.93rem;
        width: 11rem;
        height: 100%;
        .showPro_l_btn1,
        .showPro_l_btn2,
        .showPro_l_btn3 {
          width: 8.25rem;
          height: 2rem;
          background: rgba(0, 0, 0, 1);
          border-radius: 1rem;
          font-size: 14px;
          font-weight: 400;
          color: rgba(252, 253, 254, 1);
          line-height: 2rem;
          text-align: center;
          // margin-left: 20.12rem;
          margin-top: 3.62rem;
          cursor: pointer;
        }
        .showPro_l_btn2,
        .showPro_l_btn3 {
          margin-top: 1.5rem;
          background: #fff;
          color: #000;
        }
      }
      .showPro_line {
        display: block;
        width: 0.07rem;
        height: 9.5rem;
        position: absolute;
        background-color: #ececec;
        left: 26rem;
        top: 3.68rem;
        float: left;
        .showPro_line_small,.showPro_line_small1 {
          position: absolute;
          width: 0.12rem;
          height: 2.5rem;
          background-color: #2cc6c0;
          margin-left: -0.02rem;
        }
        .showPro_line_small1{
          top: 6.9rem;
        }
      }
      .showPro_line1 {
        display: none;
        width: 0.07rem;
        height: 29.56rem;
        position: absolute;
        background-color: #ececec;
        left: 26rem;
        top: 3.68rem;
        // .showPro_line_small,
        .showPro_line_small1 {
          position: absolute;
          width: 0.12rem;
          height: 2.5rem;
          background-color: #2cc6c0;
          margin-left: -0.02rem;
          top: 3rem;
        }
      }
      .showPro_all{
        display: none;
      }
      .showPro_r1 {
        float: left;
        animation-name: key_showPro;
        animation-duration: 1s;
        animation-timing-function: ease;
        .showPro_r1_cai,
        .showPro_r1_AIO {
          float: left;
          width: 12rem;
          height: 100%;
          cursor: pointer;
          .icon {
            display: block;
            width: 7.5rem;
            height: 7.5rem;
            margin-top: 3.44rem;
            margin-left: 4.5rem;
          }
          p:nth-child(2) {
            font-size: 0.87rem;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-left: 5rem;
          }
          p:nth-child(3) {
            width: 1.5rem;
            height: 1.07rem;
            font-size: 0.75rem;
            font-weight: 400;
            color: rgba(44, 198, 192, 1);
            line-height: 1.07rem;
            text-align: center;
            margin-left: 7.5rem;
          }
          .showPro_r1_AIO {
            p:nth-child(2) {
              margin-left: 6rem !important;
            }
          }
        }
      }
      .showhh {
        display: none;
        float: left;
        // margin-left: 4.5rem;
        margin-left: 15.5rem;
        margin-top: -14rem;
        animation-name: key_showPro;
        animation-duration: 1s;
        animation-timing-function: ease;
        // min-width: 52rem;
        .showPro_r2 {
          width: 51rem;
          display: flex;
          flex-wrap: wrap;
          margin-top: 3.38rem;
          div {
            width: calc(25% - 4.5rem);
            margin-right: 4.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor:pointer;
          }
          div:nth-child(4n-1) {
            width: 10rem;
          }
          div:nth-child(4n) {
            margin-right: 0rem;
          }
        }
      }
      .showhh1{
        display: none;
        float: left;
        margin-left: 4.5rem;
        animation-name: key_showPro;
        animation-duration: 1s;
        animation-timing-function: ease;
          .showPro_r3{
          // display: none;
          display: flex;
          width: 35rem;
          justify-content: center;
          margin-top: 3.38rem;
          div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: 4.5rem;
            cursor: pointer;
            .svg{
              width: 7.5rem;
              height: 7.5rem;
            }
            p{

            }
          }
        }
      }
      
  }
}
.header {
  transition: all 0.5s;
}
.whiteBack,
.whiteBack1 {
  height: 3rem;
  // min-width: 89rem;
  position: relative;
  .header {
    // min-width: 89rem;
    z-index: 99;
    position: fixed;
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    width: 100%;
    // margin-top: 0rem;
    // padding: 0 20rem;
    box-sizing: border-box;
    height: 3rem;
    line-height: 3rem;
    box-shadow: 0rem -0.08rem 0rem 0rem;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    .header_logo {
      color: #fff;
      font-size: 1.6rem;
      font-weight: bolder;
      cursor: pointer;
      width: 7rem;
      height: 1.12rem;
    }
    .header_navbar {
      color: #333333;
      font-size: 0.88rem;
      font-weight: 400;
      width: 28rem;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      span {
        cursor: pointer;
      }
      span:not(:last-child) {
        margin-right: 3rem;
        padding-bottom: 1rem;
      }
      span:last-child {
        padding-bottom: 1rem;
      }
    }
    .header_btn {
      width: 6.5rem;
      height: 2rem;
      line-height: 2rem;
      color: #fff;
      text-align: center;
      background: rgba(0, 0, 0, 1);
      border-radius: 1rem;
      // margin-top: -0.7rem;
      font-size: 14px;
      cursor: pointer;
      font-weight: 600;
      margin-top: -0.7rem;
    }
  }
  .headerB {
    color: #fff;
    background: #000;
    overflow: hidden;
    .header_navbar {
      color: #333333;
      font-weight: 400;
    }
    .header_btn {
      color: #000;
      font-weight: 600;
      font-size: 14px;
      background: rgba(255, 255, 255, 1);
    }
    .index_svg_b {
      display: none;
    }
    .index_svg_w {
      display: block;
    }
  }
  .headerW {
    color: #333;
    background: #ffffff;
    overflow: hidden;
    .header_navbar {
      color: #333333;
    }
    .header_btn {
      color: #fff;
      font-weight: 600;
      background: rgba(0, 0, 0, 1);
      font-size: 14px;
    }
  }
  .black{
    display: none;
    position: fixed;
    top: 5rem;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 2;
  }
}
.blackBack,
.blackBack1 {
  height: 3rem;
  // min-width: 89rem;
  .header {
    // min-width: 89rem;
    z-index: 99;
    position: fixed;
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    width: 100%;
    // padding: 0 20rem;
    box-sizing: border-box;
    height: 3rem;
    line-height: 3rem;
    box-shadow: 0rem -0.06rem 0rem 0rem;
    background-color: #000;
    // .index_svg_b {
    //   display: block;
    // }
    // .index_svg_w {
    //   display: none;
    // }
    .header_logo {
      color: #fff;
      font-size: 1.6rem;
      font-weight: bolder;
      cursor: pointer;
      width: 7rem;
      height: 1.12rem;
    }
    .header_navbar {
      color: #a2a6ac;
      font-size: 0.88rem;
      font-weight: 400;
      width: 28rem;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      span {
        cursor: pointer;
      }
      span:not(:last-child) {
        margin-right: 3rem;
        padding-bottom: 1rem;
      }
      span:last-child {
        padding-bottom: 1rem;
      }
    }
    .header_btn {
      font-size: 14px;
      width: 6.5rem;
      height: 2rem;
      line-height: 2rem;
      color: #000;
      text-align: center;
      background: #fff;
      border-radius: 1rem;
      font-weight: 600;
      cursor: pointer;
      margin-top: -0.7rem;
    }
  }
  .headerB {
    color: #000;
    background: #fff;
    .header_navbar {
      color: #a2a6ac;
      font-weight: 400;
    }
    .header_btn {
      font-weight: 600;
      color: #fff;
      background: #000;
      font-size: 14px;
    }
  }
  .headerW {
    color: #333;
    background: #000;
    .header_navbar {
      color: #a2a6ac;
    }
    .header_btn {
      color: #000;
      font-weight: 600;
      background: #fff;
    }
    .index_svg_b {
      display: none;
    }

    // .index_svg_w {
    //   display: block;
    // }
  }
  .black{
    display: none;
    position: fixed;
    top: 5rem;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 2;
  }
}
.nor {
  font-weight: normal;
}
.bold {
  font-weight: bolder;
}
</style>
