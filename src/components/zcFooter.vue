<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_left">
        <ul>
          <li>产品中心</li>
          <li @click="proCai">智能一拖三炒菜机</li>
          <li @click="proAIO">智能精炒一体机</li>
          <li @click="pro_more">更多智厨产品</li>
          <li @click="pro_other">其他智能产品</li>
        </ul>
        <ul>
          <li @click="news">新闻中心</li>
        </ul>
        <ul>
          <li @click="coreAdvantage">核心优势</li>
          <li @click="system">智能系统</li>
          <li @click="tech">智能技术</li>
          <li @click="data">智能数据管控</li>
          <li @click="mechine">智能配件</li>
          <li @click="service">智能服务体系</li>
        </ul>
        <ul>
          <li @click="about">关于我们</li>
          <li @click="about">企业介绍</li>
          <li @click="about_invor">发明专利</li>
          <li @click="about_lab">实验室</li>
        </ul>
        <ul>
          <li @click="contact">联系我们</li>
          <li @click="buy">预约订购</li>
          <li @click="company">商务合作</li>
          <li @click="location">企业位置</li>
        </ul>
      </div>
      <div class="footer_right">
          <div class="footer_right_tel">4000-666-888</div>
          <div class="footer_right_time">
            <div>客服联系电话</div>
            <div>周一至周日 8:00-20:00</div>
          </div>
          <div class="footer_right_about">
            <span>关注我们：</span>
            <svg-icon icon-class="homeWeixin"
                      style="margin-right:1rem;"
                      class-name="svg_size"></svg-icon>
            <svg-icon icon-class="homeWeibo"
                      class-name="svg_size"></svg-icon>
          </div>
      </div>
      <transition name="fade">
        <buyConsult v-if="isBuy"></buyConsult>
      </transition>
    </div>
    
  </div>
</template>

<script>
import buyConsult from "@/components/buyConsult.vue";
export default {
  data(){
    return {
      isBuy:false
    }
  },
  props: {
  },
  components:{
    buyConsult
  },
  methods:{
    pro_more(){
      this.$router.push({
        path:'/product',
        query:{
          type:'pro_more'
        }
      });
    },
    pro_other(){
      this.$router.push({
        path:'/product',
        query:{
          type:'pro_other'
        }
      });
    },
    proCai(){
      this.$router.push("/product/proCai");
    },
    proAIO(){
      this.$router.push("/product/proAIO");
    },
    news(){
      this.$router.push("/new");
    },
    coreAdvantage(){
      this.$router.push({
        path:"/coreAdvantage",
        query:{
          type:''
        }
      });
    },
    system(){
      this.$router.push({
        path:"/coreAdvantage",
        query:{
          type:'modelSt'
        }
      });
    },
    tech(){
      this.$router.push({
        path:"/coreAdvantage",
        query:{
          type:'modelTech'
        }
      });
    },
    data(){
      this.$router.push({
        path:"/coreAdvantage",
        query:{
          type:'modelData'
        }
      });
    },
    mechine(){
      this.$router.push({
        path:'/coreAdvantage',
        query:{
          type:'modelMc'
        }
      });
    },
    service(){
      this.$router.push({
        path:'/coreAdvantage',
        query:{
          type:'modelSe'
        }
      });
    },
    about(){
      this.$router.push("/with");
    },
    about_invor(){
      this.$router.push({
        path:'/with',
        query:{
          type:'inven'
        }
      });
    },
    about_lab(){
      this.$router.push({
        path:'/with',
        query:{
          type:'lab'
        }
      });
    },
    company(){
      this.$router.push({
        path:'/contact',
        query:{
          type:'company'
        }
      });
    },
    location(){
      this.$router.push({
        path:'/contact',
        query:{
          type:'location'
        }
      });
    },
    contact(){
      this.$router.push("/contact");
    },
    buy() {
      this.isBuy = true;
      this.noScroll();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.footer {
  // min-width: 89rem;
  background: #020202;
  width: 100%;
  // padding: 3.75rem 13.5rem 5.88rem 13.5rem;
  padding-top: 3.75rem;
  height: 25rem;
  color: #fff;
  box-sizing: border-box;
  li{
    cursor: pointer;
  }
  .footer_content{
    width: 74rem;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }
}
.footer::after{
  clear: both;
  content: '';
}
.footer_left {
  float: left;
  display: flex;
  justify-content: space-between;
  width: 50rem;
  ul > li:first-child {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }
  ul > li:not(:first-child) {
    font-size: 0.88rem;
    color: #888888;
    margin-bottom: 1rem;
    cursor: pointer;
  }
}
.footer_right {
  text-align: right;
  margin-top: -1rem;
  float: left;
  position: absolute;
  right: 0;
  // margin-left: 9.88rem;
  color: #888888;
  font-size: 0.88rem;
  .footer_right_tel {
    font-size: 2.5rem;
    color: #fff;
    font-family: Oswald-Regular_Light, Oswald;
    font-weight: normal;
    margin-bottom: 0.88rem;
  }
  .footer_right_time {
    margin-bottom: 1.5rem;
    div {
      margin-bottom: 0.5rem;
    }
  }
  .footer_right_about {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      margin-right: 1rem;
    }
    .svg_size {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
