<template>
  <div class="home">
    <zcHeader></zcHeader>
    <div class="home_video">
      <div class="home_video_title">优特智厨 人工智能时代的餐饮革命</div>
      <div class="home_video_p">以智能解构中餐，用科技为餐饮业赋能</div>
      <div class="home_video_c">
        <div>
          <span>观</span>
          <span>看</span>
        </div>
        <div class="home_video_c_btn">
          <div class="home_video_c_btn_c"></div>
        </div>
        <div>
          <span>视</span>
          <span style="margin-right:0;">频</span>
        </div>
      </div>
      <div class="home_video_bottom">
        <div class="home_video_bottom_c"></div>
      </div>
    </div>
    <div class="home_data">
      <div class="home_data_item">
        <div>更高效</div>
        <div>后厨员工提效 :</div>
        <div><span>300</span> %</div>
        <div>1 个小工可以替代 3 位大厨</div>
      </div>
      <div class="home_data_item">
        <div>更专业</div>
        <div>专利及专利申请 :</div>
        <div><span>466</span> 件</div>
        <div>远超行业平均水平</div>
      </div>
      <div class="home_data_item">
        <div>更丰富</div>
        <div>云菜谱数量 :</div>
        <div><span>1000</span> 道</div>
        <div>1 台设备拥有 20 名大厨的手艺</div>
      </div>
      <div class="home_data_item">
        <div>更标准</div>
        <div>菜肴口味还原度 :</div>
        <div><span>99.9</span> %</div>
        <div>精准投料智能控温还原菜肴</div>
      </div>
    </div>
    <div class="home_pro_one">
      <div class="home_title_top">“星级大厨”带你体验舌尖上的美味</div>
      <div class="home_pro_one_title">智能一拖三炒菜机</div>
      <div class="home_pro_one_tip">
        <span>智能云菜谱</span>
        <span class="home_pro_one_tip_line">|</span>
        <span>智能大滚筒炒菜机</span>
        <span class="home_pro_one_tip_line">|</span>
        <span>中控任务管理</span>
        <span class="home_pro_one_tip_line">|</span>
        <span>智能调料机</span>
        <span class="home_pro_one_tip_line">|</span>
        <span>气压站</span>
      </div>
      <div class="home_line"></div>
      <div class="home_pro_one_detail">
        <div class="home_pro_one_item">
          <div>星级口味</div>
          <p>百种星级主厨菜谱，顶级烹饪手法精确复现</p>
        </div>
        <div class="home_pro_one_item">
          <div>中控软件</div>
          <p>通过中控系统，智能控制硬件，实现软硬件精准配合</p>
        </div>
        <div class="home_pro_one_item">
          <div>云端菜谱</div>
          <p>链接云端海量专属定制化菜谱，经过多道标准化工序，极大程度还原星级大厨餐饮品质</p>
        </div>
        <div class="home_pro_one_item">
          <div>精准调控</div>
          <p>全自动翻炒，精准喷料至每1克，精准控温至1℃，让美味有保证。</p>
        </div>
      </div>
    </div>
    <div class="home_pro_two">
      <div class="home_pro_two_top">超级烹饪专家</div>
      <div class="home_pro_two_title">智能精炒一体机</div>
      <div class="home_line"></div>
      <div class="home_pro_two_detail">
        <div class="home_pro_two_item">
          <div>星级菜谱</div>
          <p>海量星级主厨菜谱，顶级烹饪手法精确复现</p>
        </div>
        <div class="home_pro_two_item">
          <div>智能提醒</div>
          <p>智能屏+语音实时提醒，0基础新手复制大厨烹饪行为，还原顶级厨师口味</p>
        </div>
        <div class="home_pro_two_item">
          <div>精准投料</div>
          <p>智能精准投料,精准至0.1g，美味丝毫不差</p>
        </div>
        <div class="home_pro_two_item">
          <div>精准控温</div>
          <p>11级火力智能调节，满足“煸炒”、“烧”、“煮”等多种烹调行为</p>
        </div>
      </div>
    </div>
    <div class="home_product_more">
      <div class="home_product_more_item1">
        <div>更多智厨产品</div>
        <div>更多智厨产品</div>
        <div></div>
      </div>
      <div class="home_product_more_item2">
        <div>其他产品</div>
        <div>其他智能产品</div>
      </div>
    </div>
    <div class="home_news">
      <div class="home_news_header">
        <div class="home_news_header_title">
          <div class="home_title_top">对我们了解更多</div>
          <div>新闻中心</div>
        </div>
        <div class="home_news_header_btn">
          <svg-icon icon-class="homeKnowMore"
                    class-name="svg_size"></svg-icon>
          <span>了解更多</span>
        </div>
      </div>
      <div class="home_news_circle">
        <homeSwiper></homeSwiper>
      </div>
    </div>
    <div class="home_img">
    </div>
    <div class="home_about">
      <div class="home_about_left">
        <div class="home_title_top">优特智厨</div>
        <div>关于我们</div>
        <div class="home_line"></div>
        <div class="home_about_left_btn">
          <svg-icon icon-class="homeKnowMore"
                    class-name="svg_size"></svg-icon>
          <span>了解更多</span>
        </div>
      </div>
      <div class="home_about_right">
        <div class="home_about_right_item">
          <div>以智能解构中餐，用科技为餐饮业赋能</div>
          <p>优特智厨隶属于优特集团，起步于2007年，经12年的发展，已经成长为一家集智能厨电产品研发、设计、生产和销售于一体的高新技术公司。目前公司员工超200人，珠海、杭州和深圳三地协同发展。优特智厨以“互联网+”、“智能+”为战略思路，以复制大厨烹饪技艺为核心技术，以推行中餐标准化为企业使命，致力于打造新型餐饮生态服务体系。</p>
        </div>
        <div class="home_about_right_item">
          <div>优特集团</div>
          <p>珠海优特科技集团（简称“优特集团”） 资产总值超100亿，员工1700人，子公司将近10个，覆盖工业安全与智能化、物联网、地产与商业运营等多个产业。集团先后获得2004年“国家规划布局重点软件企业”“国家火炬计划软件骨干企业”，2017年获“中国专利优秀奖”等称号。</p>
        </div>
      </div>
    </div>
    <zcFooter></zcFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import zcHeader from '@/components/zcHeader.vue'
import zcFooter from '@/components/zcFooter.vue'
import homeSwiper from '@/components/homeSwiper.vue'
import '../styles/variables.scss'
export default {
  name: 'home',
  components: {
    zcFooter,
    zcHeader,
    homeSwiper
  },
  mounted(){
    var hder  = document.getElementsByClassName("whiteBack")[0];
    hder.className = "blackBack";
    window.onscroll = function(){
      var top = document.documentElement.scrollTop;
      // window.console.log(document.documentElement.scrollTop);
      if(top >= 1005 && top <= 1897){
        hder.className = "whiteBack1";
      }else if(top >= 1897 && top <= 2783){
        hder.className = "blackBack1";
      }else if(top >= 2783){
        hder.className = "whiteBack1";
      }else{
        hder.className = "blackBack1";
      }
    }
  },
  methods:{
    
  }
}
</script>

<style lang='scss' scope>
.home {
  height: 100%;
  width: 100%;
  .home_video {
    background: url("../assets/home/home_videoBg2x.png") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 47.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .home_video_title {
      font-size: 3.13rem;
      font-weight: 600;
      color: #fff;
      margin-top: 12.5rem;
    }
    .home_video_p {
      font-size: 1.13rem;
      margin-top: 3rem;
      color: #ffffff;
    }
    .home_video_c {
      color: #fff;
      margin-top: 7.13rem;
      display: flex;
      align-items: center;
      span {
        margin-right: 3.5rem;
      }
      .home_video_c_btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.25rem;
        height: 5.25rem;
        background: rgba(216, 216, 216, 0);
        border: 0.06rem solid #2cc6c0;
        border-radius: 50%;
        margin-right: 3.5rem;
        cursor: pointer;
        .home_video_c_btn_c {
          width: 0;
          height: 0;
          border-top: 0.35rem solid transparent;
          border-left: 0.6rem solid #fff;
          border-bottom: 0.35rem solid transparent;
        }
      }
    }
    .home_video_bottom {
      display: flex;
      justify-content: center;
      width: 1.5rem;
      height: 2.25rem;
      margin-top: 8.94rem;
      background: rgba(216, 216, 216, 0);
      border-radius: 1rem;
      border: 0.06rem solid rgba(255, 255, 255, 1);
      .home_video_bottom_c {
        width: 0.25rem;
        height: 0.25rem;
        background: rgba(255, 255, 255, 1);
        margin-top: 0.63rem;
      }
    }
  }
  .home_data {
    display: flex;
    justify-content: space-between;
    padding: 4rem 15%;
    box-sizing: border-box;
    width: 100%;
    height: 18.25rem;
    background: #000;
    .home_data_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      div:first-child {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      div:nth-child(2),
      div:nth-child(4) {
        font-size: 0.88rem;
        font-weight: 400;
        color: #999;
      }
      div:nth-child(3) {
        font-size: 0.88rem;
        font-weight: 600;
        color: #fff;
        span {
          font-size: 3.75rem;
        }
      }
    }
  }
  .home_product_more {
    display: flex;
    .home_product_more_item1,.home_product_more_item2 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 50%;
      height: 26.25rem;
      div:first-child {
        font-size: 1.5rem;
        font-weight: 600;
        color: #000;
        margin-top: 5rem;
      }
      div:nth-child(2) {
        font-size: 0.88rem;
        color: #333;
        margin-top: 0.38rem;
      }
    }
    .home_product_more_item1{
      background: url("../assets/home/zcEquipment.jpg");
      background-position: 46% 0;
    }
    .home_product_more_item2{
      background: url("../assets/home/otherPro.jpg");
      background-position: 46% 0;
    }
  }
  .home_news {
    height: 55rem;
    background: linear-gradient(
      177deg,
      rgba(231, 234, 241, 1) 0%,
      rgba(231, 232, 239, 1) 6%,
      rgba(247, 248, 249, 1) 39%,
      rgba(255, 255, 255, 1) 60%,
      rgba(235, 237, 243, 1) 84%,
      rgba(223, 226, 235, 1) 100%
    );
    padding: 6.63rem 0;
    position: relative;
    .home_news_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15%;
      box-sizing: border-box;
      .home_news_header_title {
        div:nth-child(2) {
          font-size: 2rem;
          color: #000;
          font-weight: 600;
        }
      }
    }
    .home_news_circle {
      width: 35.63rem;
      height: 35.63rem;
      background: rgba(216, 216, 216, 0);
      border: 0.06rem solid rgba(44, 198, 192, 1);
      border-radius: 50%;
      margin: 9rem auto;
    }
  }
  .home_img {
    height: 12.8rem;
    background: url("../assets/home/aboutUs.jpg");
    background-size: cover;
  }
  .home_about {
    display: flex;
    justify-content: space-between;
    height: 46.88rem;
    background: #fff;
    padding: 6.63rem 15%;
    box-sizing: border-box;
    .home_about_left {
      div:nth-child(2) {
        font-size: 2rem;
        font-weight: 600;
        color: #000;
        margin-bottom: 2.5rem;
      }
    }
    .home_about_right {
      width: 39.31rem;
      .home_about_right_item {
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        div:nth-child(1) {
          font-size: 1.75rem;
          font-weight: 600;
          color: #000;
          margin-bottom: 1.5rem;
        }
        div:nth-child(2) {
          font-size: 1rem;
          font-weight: 400;
          color: #333;
        }
      }
    }
  }
  .home_pro_one {
    height: 40.62rem;
    background:url("../assets/home/drumFryingMachine.jpg");
    background-size: 90rem 55.62rem;
    padding: 7.5rem 14%;
    .home_pro_one_title {
      font-size: 2.5rem;
      color: #000;
      margin-bottom: 1rem;
    }
    .home_pro_one_tip {
      font-size: 0.88rem;
      color: #333;
      margin-bottom: 2.5rem;
      .home_pro_one_tip_line {
        color: #ccc;
        margin-right: 1.25rem;
        margin-left: 1.25rem;
      }
    }
    .home_pro_one_detail {
      display: flex;
      .home_pro_one_item {
        margin-right: 3rem;
        div {
          width: 4.5rem;
          height: 1.5rem;
          background: rgba(8, 8, 8, 1);
          border-radius: 0.19rem;
          font-size: 0.88rem;
          font-weight: 600;
          line-height: 1.5rem;
          color: #fff;
          text-align: center;
          margin-bottom: 0.88rem;
        }
        p {
          font-size: 0.88rem;
          font-weight: 400;
          color: #333;
          width: 12.25rem;
        }
      }
    }
  }
  .home_pro_two {
    height: 41.77rem;
    background: #000;
    background-image: url('../assets/home/AIO.png');
    background-size: 90rem 55.62rem;
    padding: 13.88rem 0 0 56%;
    .home_pro_two_top {
      font-size: 0.88rem;
      color: #999;
      margin-bottom: 0.5rem;
    }
    .home_pro_two_title {
      font-size: 2.5rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 2rem;
    }
    .home_pro_two_item {
      div {
        width: 4.5rem;
        height: 1.5rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.19rem;
        margin-bottom: 0.75rem;
        color: #080808;
        text-align: center;
        line-height: 1.5rem;
        font-size: 0.88rem;
      }
      p {
        font-size: 0.88rem;
        color: #999;
        margin-bottom: 1.5rem;
      }
    }
  }
}
// 了解更多
.home_about_left_btn,
.home_news_header_btn {
  width: 6.75rem;
  height: 2.25rem;
  background: rgba(255, 255, 255, 0);
  border-radius: 1.13rem;
  border: 0.06rem solid rgba(0, 0, 0, 1);
  text-align: center;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .svg_size {
    width: 1.13rem;
    height: 1.13rem;
  }
  span {
    margin-left: 0.3rem;
  }
}
.home_title_top {
  font-size: 0.88rem;
  color: #333;
  margin-bottom: 0.5rem;
}
.home_line {
  border-bottom: 1px solid #2cc6c0;
  width: 1.5rem;
  height: 0.13rem;
  margin-bottom: 2.5rem;
}
</style>

<style lang='scss'>
.swiper-button-prev,
.swiper-button-next {
  top: 80% !important;
}
.swiper-button-prev {
  left: 15% !important;
}
.swiper-button-next {
  left: 20% !important;
}
</style>
