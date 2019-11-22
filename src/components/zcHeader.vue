<template>
  <div class="whiteBack">
    <div class="header headerW">
      <div class="header_logo">
        UTZC
      </div>
      <div class="header_navbar">
        <span @click="product" class="productCenter" @mousemove="showPro" @mouseleave="hidePro">产品中心</span>
        <span @click="newCenter">新闻中心</span> 
        <span @click="coreAdvantage">核心优势</span>
        <span @mousemove="show" @mouseleave="hide" @click="withUs">关于我们</span>
      </div>
      <div class="header_btn" @click="concat">
        联系我们
      </div>
      <div class="show" @mousemove="show" @mouseleave="hide">
        <p @click="intro">企业介绍</p>
        <p @click="inven">专利发明</p>
        <p @click="lab">实验室</p>
      </div>
      <div class="showPro" @mousemove="showPro" @mouseout="hidePro">
        <div class="showPro_l">
          <div class="showPro_l_btn1" @click="changeColor1">旗舰智厨产品</div>
          <div class="showPro_l_btn2" @click="changeColor2">更多智厨产品</div>
          <div class="showPro_l_btn3">其他智能产品</div>
        </div>
        <div class="showPro_line">
          <div class="showPro_line_small"></div>
        </div>
        <div class="showPro_line1">
          <div class="showPro_line_small"></div>
        </div>
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
        <div class="showPro_r2">
          <div class="d1">
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <span class="sp1">智能多头平面炉</span>
            <span class="sp2">智能多头平面炉</span>
            <span class="sp3">智能多头平面炉</span>
            <span class="sp4">智能多头平面炉</span>
          </div>
          <div class="d2">
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <span class="sp5">智能多头平面炉</span>
            <span class="sp6">智能多头平面炉</span>
            <span class="sp7">智能多头平面炉</span>
            <span class="sp8">智能多头平面炉</span>
          </div>
          <div class="d3 d3_r">
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <svg-icon icon-class="pingmianlu" class="icon3"></svg-icon>
            <span class="sp9">智能多头平面炉</span>
            <span class="sp10">智能多头平面炉</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      tab: 0
    }
  },
  components:{
    
  },
  methods:{
    intro(){
      this.tab = 0;
      this.$emit("changeTab",this.tab);
    },
    inven(){
      this.tab = 1;
      this.$emit("changeTab",this.tab);
    },
    lab(){
      this.tab = 2;
      this.$emit("changeTab",this.tab);
    },
    show(){
      var show = document.getElementsByClassName("show")[0];
      show.style.display = "block";
    },
    hide(){
      var show = document.getElementsByClassName("show")[0];
      show.style.display = "none";
    },
    product(){
      this.$router.push("/product");
    },
    newCenter(){
      this.$router.push("/new");
    },
    coreAdvantage(){
      this.$router.push("/coreAdvantage");
    },
    withUs(){
      this.$router.push("/with");
    },
    concat(){
      this.$router.push("/contact");
    },
    showPro(){
      var showPro = document.getElementsByClassName("showPro")[0];
      showPro.style.display = "block";
    },
    hidePro(){
      var showPro = document.getElementsByClassName("showPro")[0];
      showPro.style.display = "none";
    },
    changeColor1(){
      var btn2 = document.getElementsByClassName("showPro_l_btn2")[0];
      btn2.style.backgroundColor = "#fff";
      btn2.style.color = "#000";
      var right1  = document.getElementsByClassName("showPro_r1")[0];
      right1.style.display = "block";
      var right2 = document.getElementsByClassName("showPro_r2")[0];
      right2.style.display = "none";
      var btn1 = document.getElementsByClassName("showPro_l_btn1")[0];
      btn1.style.backgroundColor = "#000";
      btn1.style.color = "#fff";
      var line1 = document.getElementsByClassName("showPro_line")[0];
      var line2 = document.getElementsByClassName("showPro_line1")[0];
      line1.style.display = "block";
      line2.style.display = "none";
    },
    changeColor2(){
      var btn2 = document.getElementsByClassName("showPro_l_btn2")[0];
      var right1  = document.getElementsByClassName("showPro_r1")[0];
      right1.style.display = "none";
      btn2.style.backgroundColor = "#000";
      btn2.style.color = "#fff";
      var right2 = document.getElementsByClassName("showPro_r2")[0];
      right2.style.display = "block";
      var btn1 = document.getElementsByClassName("showPro_l_btn1")[0];
      btn1.style.backgroundColor = "#fff";
      btn1.style.color = "#000";
      var line1 = document.getElementsByClassName("showPro_line")[0];
      var line2 = document.getElementsByClassName("showPro_line1")[0];
      line1.style.display = "none";
      line2.style.display = "block";
    },
    cai(){
      this.$router.push("/product/proCai");
    },
    aio(){
      this.$router.push("/product/proAIO");
    }
  },
  mounted(){
    // this.$emit("changeTab",this.tab);
    // window.console.log(this.tab);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.whiteBack,.whiteBack1{
  height: 3rem;
  min-width: 89rem;
  .header {
    min-width: 89rem;
    z-index: 99;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0rem;
    padding: 0 22.2rem;
    box-sizing: border-box;
    height: 3rem;
    line-height: 3rem;
    box-shadow: 0rem -0.06rem 0rem 0rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  .header_logo {
    color: #000;
    font-size: 1.6rem;
    font-weight: bolder;
  }
  .header_navbar {
    color: #333333;
    font-size: 0.88rem;
    font-weight: 400;
    span {
      cursor: pointer;
    }
    span:not(:last-child) {
      margin-right: 3rem;
      padding-bottom: 1rem;
    }
    span:last-child{
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
    cursor: pointer;
  }
  .show{
    width: 90rem;
    height: 10.75rem;
    display: none;
    position: absolute;
    margin-top: 6.94rem;
    margin-left: -23.12rem;
    background:linear-gradient(180deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 12%,rgba(255,255,255,1) 100%);
    p{
      cursor: pointer;
      width: 3.5rem;
      height: 1.25rem;
      font-size: 0.87rem;
      color: #000;
      margin-left: 52.5rem;
    }
    p:first-child{
      margin-top: 2rem;
    }
    p:nth-child(2){
      margin-top: 1rem;
    }
    p:last-child{
      margin-top: 1rem;
    }
  }
  .showPro{
    display: none;
    position: absolute;
    width: 100%;
    // height: 16.87rem;
    background:linear-gradient(180deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 12%,rgba(255,255,255,1) 100%);
    top: 3rem;
    left: 0rem;
    padding-bottom: 3.44rem;
    .showPro_l,.showPro_r1{
      float: left;
    }
    .showPro_l{
      width: 34.93rem;
      height: 100%;
      .showPro_l_btn1,.showPro_l_btn2,.showPro_l_btn3{
        width:8.25rem;
        height:2rem;
        background:rgba(0,0,0,1);
        border-radius:1rem;
        font-size:14px;
        font-weight:600;
        color:rgba(252,253,254,1);
        line-height:2rem;
        text-align: center;
        margin-left: 20.12rem;
        margin-top: 3.62rem;
        cursor: pointer;
      }
      .showPro_l_btn2,.showPro_l_btn3{
        margin-top: 1.5rem;
        background: #fff;
        color: #000;
      }
    }
    .showPro_line{
      display: block;
      width: 0.07rem;
      height: 9.5rem;
      position: absolute;
      background-color: #ECECEC;
      left: 32.93rem;
      top: 3.68rem;
      .showPro_line_small{
        width: 0.12rem;
        height: 2rem;
        background-color: #2CC6C0;
        margin-left: -0.02rem;
      }
    }
    .showPro_line1{
      display: none;
      width: 0.07rem;
      height: 29.56rem;
      position: absolute;
      background-color: #ECECEC;
      left: 32.93rem;
      top: 3.68rem;
      .showPro_line_small{
        width: 0.12rem;
        height: 2rem;
        background-color: #2CC6C0;
        margin-left: -0.02rem;
      }
    }
    .showPro_r1{
      display: block;
      .showPro_r1_cai,.showPro_r1_AIO{
        float: left;
        width: 12rem;
        height: 100%;
        cursor: pointer;
        .icon{
          display: block;
          width: 7.5rem;
          height: 7.5rem;
          margin-top: 3.44rem;
          margin-left: 4.5rem;
        }
        p:nth-child(2){
          font-size:0.87rem;
          font-weight:400;
          color:rgba(51,51,51,1);
          margin-left: 5rem;
        }
        p:nth-child(3){
          width:1.5rem;
          height:1.07rem;
          font-size:0.75rem;
          font-weight:400;
          color:rgba(44,198,192,1);
          line-height:1.07rem;
          text-align: center;
          margin-left: 7.5rem;
        }
        .showPro_r1_AIO{
          p:nth-child(2){
            margin-left: 6rem !important;
          }
        }
      }
    }
    .showPro_r2{
      display:none;
      .d1,.d2,.d3{
        float: left;
        width: 48rem;
        height: 8.75rem;
        margin-top: 3rem;
        span{
          position: absolute;
          width:98px;
          height:20px;
          font-size:0.87rem;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .sp1{
          top: 9rem;
          left: 38.5rem;
        }
        .sp2{
          top: 9rem;
          left: 49.5rem;
        }
        .sp3{
          top: 9rem;
          left: 60rem;
        }
        .sp4{
          top: 9rem;
          left: 70.5rem;
        }
        .sp5{
          top: 20rem;
          left: 38.5rem;
        }
        .sp6{
          top: 20rem;
          left: 49.5rem;
        }
        .sp7{
          top: 20rem;
          left: 60rem;
        }
        .sp8{
          top: 20rem;
          left: 70.5rem;
        }
        .sp9{
          top: 31rem;
          left: 38.5rem;
        }
        .sp10{
          top: 31rem;
          left: 49.5rem;
        }
        .icon3{
          width: 7.5rem;
          height: 7.5rem;
          margin-left: 3rem;
        }
      }
      .d2,.d3{
        margin-top: 2rem;
      }
      .d3_r{
        margin-left: 35rem;
      }
    }
  }
}
.headerB {
  color: #fff;
  background: #000;
  .header_navbar {
    color: #333333;
    font-weight: 400;
  }
  .header_btn {
    color: #000;
    background: rgba(255, 255, 255, 1);
  }
}
.headerW {
  color: #333;
  background: #ffffff;
  .header_navbar {
    color: #333333;
  }
  .header_btn {
    color: #fff;
    background: rgba(0, 0, 0, 1);
  }
}
}
.whiteBack1{
  transition: all 2s;
}
.blackBack,.blackBack1{
  height: 3rem;
  min-width: 89rem;
  .header {
    min-width: 89rem;
    z-index: 99;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 22.2rem;
    box-sizing: border-box;
    height: 3rem;
    line-height: 3rem;
    box-shadow: 0rem -0.06rem 0rem 0rem;
    background-color: #000;
  .header_logo {
    color: #fff;
    font-size: 1.6rem;
    font-weight: bolder;
  }
  .header_navbar {
    color: #fff;
    font-size: 0.88rem;
    font-weight: 400;
    span {
      cursor: pointer;
    }
    span:not(:last-child) {
      margin-right: 3rem;
      padding-bottom: 1rem;
    }
    span:last-child{
      padding-bottom: 1rem;
    }
  }
  .header_btn {
    width: 6.5rem;
    height: 2rem;
    line-height: 2rem;
    color: #000;
    text-align: center;
    background: #fff;
    border-radius: 1rem;
    cursor: pointer;
  }
  .show{
    width: 90rem;
    height: 10.75rem;
    display: none;
    position: absolute;
    margin-top: 6.94rem;
    margin-left: -23.12rem;
    background:linear-gradient(180deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 12%,rgba(255,255,255,1) 100%);
    p{
      cursor: pointer;
      width: 3.5rem;
      height: 1.25rem;
      font-size: 0.87rem;
      color: #000;
      margin-left: 52.5rem;
    }
    p:first-child{
      margin-top: 2rem;
    }
    p:nth-child(2){
      margin-top: 1rem;
    }
    p:last-child{
      margin-top: 1rem;
    }
  }
  .showPro{
    display: none;
    position: absolute;
    width: 100%;
    // height: 16.87rem;
    background:linear-gradient(180deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 12%,rgba(255,255,255,1) 100%);
    top: 3rem;
    left: 0rem;
    padding-bottom: 3.44rem;
    .showPro_l,.showPro_r1{
      float: left;
    }
    .showPro_l{
      width: 34.93rem;
      height: 100%;
      .showPro_l_btn1,.showPro_l_btn2,.showPro_l_btn3{
        width:8.25rem;
        height:2rem;
        background:rgba(0,0,0,1);
        border-radius:1rem;
        font-size:14px;
        font-weight:600;
        color:rgba(252,253,254,1);
        line-height:2rem;
        text-align: center;
        margin-left: 20.12rem;
        margin-top: 3.62rem;
        cursor: pointer;
      }
      .showPro_l_btn2,.showPro_l_btn3{
        margin-top: 1.5rem;
        background: #fff;
        color: #000;
      }
    }
    .showPro_line{
      width: 0.07rem;
      height: 9.5rem;
      position: absolute;
      background-color: #ECECEC;
      left: 32.93rem;
      top: 3.68rem;
      .showPro_line_small{
        width: 0.12rem;
        height: 2rem;
        margin-left: -0.02rem;
        background-color: #2CC6C0;
      }
    }
    .showPro_line1{
      display:none;
      width: 0.07rem;
      height: 29.56rem;
      position: absolute;
      background-color: #ECECEC;
      left: 32.93rem;
      top: 3.68rem;
      .showPro_line_small{
        width: 0.12rem;
        height: 2rem;
        background-color: #2CC6C0;
        margin-left: -0.02rem;
      }
    }
    .showPro_r1{
      display: block;
      .showPro_r1_cai,.showPro_r1_AIO{
        float: left;
        width: 12rem;
        height: 100%;
        .icon{
          display: block;
          width: 7.5rem;
          height: 7.5rem;
          margin-top: 3.44rem;
          margin-left: 4.5rem;
        }
        p:nth-child(2){
          font-size:0.87rem;
          font-weight:400;
          color:rgba(51,51,51,1);
          margin-left: 5rem;
        }
        p:nth-child(3){
          width:1.5rem;
          height:1.07rem;
          font-size:0.75rem;
          font-weight:400;
          color:rgba(44,198,192,1);
          line-height:1.07rem;
          text-align: center;
          margin-left: 7.5rem;
        }
        .showPro_r1_AIO{
          p:nth-child(2){
            margin-left: 6rem !important;
          }
        }
      }
    }
    .showPro_r2{
      display: none;
      .d1,.d2,.d3{
        float: left;
        width: 48rem;
        height: 8.75rem;
        margin-top: 3rem;
        span{
          position: absolute;
          width:98px;
          height:20px;
          font-size:0.87rem;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
        .sp1{
          top: 9rem;
          left: 38.5rem;
        }
        .sp2{
          top: 9rem;
          left: 49.5rem;
        }
        .sp3{
          top: 9rem;
          left: 60rem;
        }
        .sp4{
          top: 9rem;
          left: 70.5rem;
        }
        .sp5{
          top: 20rem;
          left: 38.5rem;
        }
        .sp6{
          top: 20rem;
          left: 49.5rem;
        }
        .sp7{
          top: 20rem;
          left: 60rem;
        }
        .sp8{
          top: 20rem;
          left: 70.5rem;
        }
        .sp9{
          top: 31rem;
          left: 38.5rem;
        }
        .sp10{
          top: 31rem;
          left: 49.5rem;
        }
        .icon3{
          width: 7.5rem;
          height: 7.5rem;
          margin-left: 3rem;
        }
      }
      .d2,.d3{
        margin-top: 2rem;
      }
      .d3_r{
        margin-left: 35rem;
      }
    }
  }
}
.headerB {
  color: #000;
  background: #fff;
  .header_navbar {
    color: #fff;
    font-weight: 400;
  }
  .header_btn {
    color: #fff;
    background: #000;
  }
}
.headerW {
  color: #fff;
  background: #000;
  .header_navbar {
    color: #fff;
  }
  .header_btn {
    color: #000;
    background: #fff;
  }
}
}
.blackBack1{
  transition: all 2s;
}
</style>
