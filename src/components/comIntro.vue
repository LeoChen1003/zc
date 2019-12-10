<template>
  <div class="intro">
    <div class="about_con1">
      <div class="about_con1_ct">
        <div class="about_con1_ct_l">01</div>
        <div class="about_con1_ct_r" ref="aboutCon1">
          <p>以智能解构中餐，用科技为餐饮业赋能</p>
          <p>优特智厨隶属于优特集团，起步于2007年，经12年的发展，已经成长为一家集智能厨电产品研发、设计、生产和销售于一体的高新技术公司。目前公司员工超200人，珠海、杭州和深圳三地协同发展。优特智厨以“互联网+”、“智能+”为战略思路，以复制大厨烹饪技艺为核心技术，以推行中餐标准化为企业使命，致力于打造新型餐饮生态服务体系。</p>
          <p>优特集团</p>
          <p>珠海优特科技集团（简称“优特集团”） 资产总值超100亿，员工1700人，子公司将近10个，覆盖工业安全与智能化、物联网、地产与商业运营等多个产业。集团先后获得2004年“国家规划布局重点软件企业”“国家火炬计划软件骨干企业”，2017年获“中国专利优秀奖”等称号。</p>
        </div>
      </div>
    </div>
    <div class="line1"></div>
    <div class="about_con2">
      <div class="about_con2_ct">
        <div class="about_con2_ct_l">02</div>
        <div class="about_con2_ct_r" ref="aboutCon2">
          <p>企业实力</p>
          <p>珠海优特科技集团（简称“优特集团”） 资产总值超100亿，员工1700人，子公司将近10个，覆盖工业安全、物联产业、云计算、地产及商业管理等多个行业。</p>
          <p>优特集团斥资2亿，投入员工200余人，历时12年深度研发智能炒菜机，2018年3月，正式成立优特智厨科技有限公司，公司现拥有440项专利技术。</p>
          <p>研发背景</p>
          <p>优特深耕电力安全领域30年,将综合自动化、智能化应用于电力、石化及轨道交通行业,覆盖三万座发电厂及变电站。</p>
          <p>在智能领域浸淫30多年，优特集团成立优特智厨科技有限公司，正式涉足餐饮领域，通过智能化与自动化，以智能解构中餐，推行中餐标准化，用科技为餐饮业赋能。</p>
        </div>
      </div>
    </div>
    <div class="line1"></div>
    <div class="about_con3">
      <div class="about_con3_ct">
        <div class="about_con3_ct_l">03</div>
        <div class="about_con3_ct_r"  ref="aboutCon3">
          <p>发展历程</p>
        </div>
      </div>
      <div class="out">
        <div class="block">
          <el-timeline :reverse="reverse">
            <el-timeline-item
              v-for="(activity,index) in activities"
              :key="index"
              :size="activity.size"
              :color="activity.color"
            >
              <p
                style="font-size:2.13rem;font-family:mFont1;"
                :class="t[index]"
              >{{activity.timestamp}}</p>
              <p>{{activity.content}}</p>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// let self;
export default {
  props: ["intro"],
  data() {
    return {
      reverse: false,
      activities: [
        {
          content: "开启智能实验室",
          timestamp: "2018",
          size: "large",
          color: "#2CC6C0"
        },
        {
          content: "产品打磨迭代",
          timestamp: "2015-2017",
          size: "large"
        },
        {
          content: "研发智能一体机，集调料机、灶、烟机、消毒柜于一体",
          timestamp: "2014",
          size: "large"
        },
        {
          content: "研发商用智能灶",
          timestamp: "2013",
          size: "large"
        },
        {
          content: "研发智能调料机，实现固体调料精准投放",
          timestamp: "2012",
          size: "large"
        },
        {
          content: "自主研发智能电磁炉，实现电磁炉智能人机交互",
          timestamp: "2011",
          size: "large"
        },
        {
          content: "项目启动",
          timestamp: "2007",
          size: "large"
        }
      ],
      t: ["time1", "time2", "time2", "time2", "time2", "time2", "time2"]
    };
  },
  mounted() {
    var tLine = document.getElementsByClassName("el-timeline")[0];
    var tTail = tLine.getElementsByClassName("el-timeline-item__tail")[0];
    tTail.style.borderColor = "#2CC6C0";
    var tLarge = document.getElementsByClassName(
      "el-timeline-item__node--large"
    );
    for (var i = 0; i < tLarge.length; i++) {
      var div = document.createElement("div");
      var tSmall = tLarge[i].appendChild(div);
      tSmall.className = "el-timeline-item__node--small";
    }
  },
  // created() {
  //   self = this;
  // }
};
</script>

<style  lang="scss" scope>
@font-face {
  font-family: mFont1;
  src: url("../assets/font/Oswald-SemiBold.ttf");
}
.intro {
  border-top: 1px solid rgb(218, 216, 216);
  .block {
    position: absolute;
    // left: 534px;
    // margin-left: 0;
    .el-timeline {
      // margin-left: -3%;
    }
    .el-timeline-item__tail {
      border-left: 8px solid #ececec;
      top: 1px;
    }
    .el-timeline-item__node--large {
      width: 1.25rem;
      height: 1.25rem;
      .el-timeline-item__node--small {
        position: absolute;
        background-color: #fff;
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
      }
    }
    .el-timeline-item__wrapper {
      top: -1rem;
    }
  }
  .line1 {
    // margin-left: 21%;
    // width: 62%;
    width: 61rem;
    margin: 0 auto;
    height: 0.06rem;
    background-color: rgb(230, 227, 227);
  }
  .about_con1 {
    width: 100%;
    height: 40.12rem;
    margin-top: 5rem;
    .about_con1_ct {
      margin: 0 auto;
      // margin-top: 5rem;
      // width: 59%;
      width: 61rem;
      height: 27.6rem;
      position: relative;
    }
    .about_con1_ct_l {
      float: left;
      font-size: 3rem;
      color: #2cc6c0;
      // left: 21%;
      position: absolute;
      font-family: mFont1;
    }
    .about_con1_ct_r {
      float: left;
      // position: absolute;
      margin-left: 350px;
    //   left: 40%;
      p:first-child,
      p:nth-child(3) {
        font-size: 1.75rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 2.5rem;
      }
      p:nth-child(2),
      p:last-child {
        font-size: 1rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 1.87rem;
      }
      p:first-child {
        height: 2.5rem;
      }
      p:nth-child(2) {
        width: 38.75rem;
        height: 9.56rem;
        margin-top: 1.5rem;
      }
      p:nth-child(3) {
        height: 2.5rem;
        margin-top: 1.5rem;
      }
      p:last-child {
        width: 38.75rem;
        height: 7.5rem;
        margin-top: 1.5rem;
      }
    }
  }
  .about_con2 {
    width: 100%;
    height: 37.56rem;
    margin-top: 4rem;
    .about_con2_ct {
      margin: 0 auto;
      // margin-top: 4rem;
      //   width: 59%;
      width: 61rem;
      height: 27.6rem;
      position: relative;
    }
    .about_con2_ct_l {
      position: absolute;
      float: left;
      font-size: 3rem;
      color: #2cc6c0;
      // margin-left: 21%;
      font-family: mFont1;
    }
    .about_con2_ct_r {
      float: left;
      position: absolute;
      margin-left: 350px;
      p:first-child,
      p:nth-child(4) {
        font-size: 1.75rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 1.6rem;
      }
      p:nth-child(2),
      p:nth-child(3),
      p:nth-child(5),
      p:last-child {
        font-size: 1rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 1.87rem;
      }
      p:first-child {
        height: 2.5rem;
      }
      p:nth-child(2) {
        width: 38.75rem;
        height: 3.75rem;
        margin-top: 1.5rem;
      }
      p:nth-child(3) {
        width: 38.75rem;
        height: 3.75rem;
        margin-top: 1rem;
      }
      p:nth-child(4) {
        height: 2.5rem;
        margin-top: 2.5rem;
      }
      p:nth-child(5) {
        width: 38.75rem;
        height: 3.75rem;
        margin-top: 1.5rem;
      }
      p:last-child {
        width: 38.75rem;
        height: 7.5rem;
        margin-top: 1rem;
      }
    }
  }
  .about_con3 {
    width: 100%;
    height: 58rem;
    margin-top: 4rem;
    .out{
      // margin-top: 1rem;
      width: 61rem;
      margin: 0 auto;
      height: 707px;
    }
    .block {
      margin-top: 1rem;
      // margin-left: 42.5%;
      margin-left: 350px;
    }
    .about_con3_ct {
    //   margin: 0 auto;
      width: 61rem;
      margin: 0 auto;
      // margin-top: 4rem;
      height: 4rem;
      position: relative;
    }
    .about_con3_ct_l {
        position: absolute;
      float: left;
      font-size: 3rem;
      color: #2cc6c0;
      // margin-left: 21%;
      font-family: mFont1;
    }
    .about_con3_ct_r {
         position: absolute;
      float: left;
      margin-left: 350px;
      p:first-child {
        height: 40px;
        font-size: 28px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 40px;
      }
    }
  }
}
</style>