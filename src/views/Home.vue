<template>
  <div class="home pc_index">
    <zcHeader :isWhite="isWhite" :tab0="tab"></zcHeader>
    <div class="home_v" ref="homeV" :style="`height:${height1}px;`">
      <video loop autoplay="autoplay" src="http://cdn.withpush.cn/youtezhichu/result.bg.mp4">
      </video>
    </div>
    <div class="home_mask" ref="homeMask" :style="`height:${height1}px;`"></div>
    <div class="home_video" ref="homeVideo" :style="`height:${height1}px;`">
      <div class="home_video_title">智慧餐饮整体解决方案生态平台，致力中餐标准化，把中餐推向全球</div>
      <div class="home_video_p">用机器智造大师级风味菜，立志成为厨电界爱因斯坦</div>
      <div class="home_video_c">
        <div>
          <span>观</span>
          <span>看</span>
        </div>
        <div class="home_video_c_btn" @click="video">
          <div @mousemove="videoHover" @mouseleave="videoOut">
            <svg-icon v-if="isHover==false" icon-class="video_play" class-name="svg"></svg-icon>
            <svg-icon v-else icon-class="hover" class-name="svg"></svg-icon>
          </div>
        </div>
        <div>
          <span>视</span>
          <span style="margin-right:0;">频</span>
        </div>
      </div>
      <div class="home_video_bottom">
        <svg-icon icon-class="small_white" class-name="svg"></svg-icon>
      </div>
    </div>
    <div class="home_data" :style="`height:${height2}px;`">
      <div class="home_data_items">
        <div class="home_data_item">
          <div>员工更高效</div>
          <div>人员提效 :</div>
          <div><span>300</span> %</div>
          <div>1位小工即可代替3位大厨职能</div>
        </div>
        <div class="home_data_item">
          <div>资质更优越</div>
          <div>专利申请 :</div>
          <div><span>522</span> 件</div>
          <div>超过50%以上的行业水平</div>
        </div>
        <div class="home_data_item">
          <div>菜谱更丰富</div>
          <div>设备云储菜谱 :</div>
          <div><span>1000</span> 道<svg-icon icon-class="up1" class="svg"></svg-icon></div>
          <div>1台设备=20名大厨手艺</div>
        </div>
        <div class="home_data_item">
          <div>口味更标准</div>
          <div>菜品还原度高达 :</div>
          <div><span>99.9</span> %</div>
          <div>精准投料智能控温</div>
        </div>
      </div>
    </div>
    <div class="home_pro_one" @click="cai" :style="`height:${height3}px;`" ref="pro1">
      <div class="home_pro_one_con">
        <div class="home_title_top">“星级大厨”带你体验舌尖上的美味</div>
        <div class="home_pro_one_title" >智能一拖三炒菜机</div>
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
            <span>百种星级主厨菜谱，顶级烹饪手法精确复现</span>
          </div>
          <div class="home_pro_one_item">
            <div>中控软件</div>
            <span>通过中控系统，智能控制硬件，实现软硬件精准配合</span>
          </div>
          <div class="home_pro_one_item">
            <div>云端菜谱</div>
            <span>
              链接云端海量专属定制化菜谱，经过多道标准化工序，极大程度还原星级大厨餐饮品质
            </span>
          </div>
          <div class="home_pro_one_item">
            <div>精准调控</div>
            <span>全自动翻炒，精准喷料至每1克，精准控温至1℃，让美味有保证。</span>

          </div>
        </div>
      </div>
    </div>
    <div class="home_pro_two" @click="AIO" :style="`height:${height3}px;`" ref="pro2">
      <div class="home_pro_two_con">
          <div class="home_pro_two_top">超级烹饪专家</div>
        <div class="home_pro_two_title">智能精炒一体机</div>
        <div class="home_line"></div>
        <div class="home_pro_two_detail">
          <div class="home_pro_two_item">
            <div>星级菜谱</div>
            <span>海量星级主厨菜谱，顶级烹饪手法精确复现</span>
          </div>
          <div class="home_pro_two_item">
            <div>智能提醒</div>
            <span>
              智能屏+语音实时提醒，0基础新手复制大厨烹饪行为，还原顶级厨师口味
            </span>
          </div>
          <div class="home_pro_two_item">
            <div>精准投料</div>
            <span>智能精准投料,精准至0.1g，美味丝毫不差</span>

          </div>
          <div class="home_pro_two_item">
            <div>精准控温</div>
            <span>11级火力智能调节，满足“煸炒”、“烧”、“煮”等多种烹调行为</span>
          </div>
        </div>
      </div>

    </div>
    <div class="home_product_more" :style="`height:${height4}px;`" ref="pro3">
      <div class="home_product_more_item1" @click="more_pro">
        <div>更多智厨产品</div>
        <div>更多智厨产品</div>
        <div></div>
      </div>
      <div class="home_product_more_item2" @click="other_pro">
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
        <div class="home_news_header_btn" @click="news">
          <svg-icon icon-class="homeKnowMore" class-name="svg_size"></svg-icon>
          <span>了解更多</span>
        </div>
      </div>
      <div class="home_news_circle">
        <div class="swiper">
          <div class="bg"></div>
          <swiper :options="swiperOption" ref="indexswiper">
            <swiper-slide v-for="(item, index) in newList" :key="index">
              <div class="ph">
                <div class="ph_img">
                  <img :src="item.image" alt="" />
                </div>
                <div class="ph_content">
                  <div class="ph_content_title">{{ item.title }}</div>
                  <div class="ph_content_short">{{item.shortContent}}</div>
                  <div class="ph_content_bottom">
                    <div class="time">
                      {{ item.updatedAt.slice(0, 4) }}/{{
                      item.updatedAt.slice(5, 7)
                      }}/{{ item.updatedAt.slice(8, 10) }}
                    </div>
                    <div class="detail" @click="toDetail(item)">
                      <div>
                        查看详情
                      </div>
                      <svg-icon
                              icon-class="wap_index_detail"
                              class-name="svg"
                      ></svg-icon>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="home_img"></div>
    <div class="home_about">
      <div class="home_about_con">
          <div class="home_about_left">
          <div class="home_title_top">优特智厨</div>
          <div>关于我们</div>
          <div class="home_line"></div>
          <div class="home_about_left_btn" @click="aboutUs">
            <svg-icon icon-class="homeKnowMore" class-name="svg_size"></svg-icon>
            <span>了解更多</span>
          </div>
        </div>
        <div class="home_about_right">
          <div class="home_about_right_item">
            <div>以智能解构中餐，用科技为餐饮业赋能</div>
            <span>
              优特智厨隶属于优特集团，起步于2007年，经12年的发展，已经成长为一家集智能厨电产品研发、设计、生产和销售于一体的高新技术公司。目前公司员工超200人，珠海、杭州和深圳三地协同发展。优特智厨以“互联网+”、“智能+”为战略思路，以复制大厨烹饪技艺为核心技术，以推行中餐标准化为企业使命，致力于打造新型餐饮生态服务体系。
            </span>
          </div>
          <div class="home_about_right_item">
            <div>优特集团</div>
            <p>
              珠海优特科技集团（简称“优特集团”）
              资产总值超100亿，员工1700人，子公司将近10个，覆盖工业安全与智能化、物联网、地产与商业运营等多个产业。集团先后获得2004年“国家规划布局重点软件企业”“国家火炬计划软件骨干企业”，2017年获“中国专利优秀奖”等称号。
            </p>
          </div>
        </div>
      </div>

    </div>
    <zcFooter></zcFooter>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  // @ is an alias to /src
  import zcHeader from '@/components/zcHeader.vue'
  import zcFooter from '@/components/zcFooter.vue'
  import '../styles/variables.scss'
  import request from '@/utils/request.js'

  let self
  export default {
    name: 'home',
    components: {
      zcFooter,
      zcHeader
    },
    metaInfo:{
      title:'优特智厨 - 官方网站',
      meta:[{
        name:'description',
        content:'智慧餐饮整体解决方案生态平台，致力中餐标准化，把中餐推向全球'
      }]
    },
    data(){
      return{
        isWhite: false,
        tab:0,
        isHover:false,
        height1: 0,
        height2: 0,
        height3: 0,
        height4: 0,
        oTop:0,
        swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 0,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          initialSlide: 0,
          on: {
            slideChangeTransitionEnd: function() {
              // 切换结束时，告诉我现在是第几个slide
              if (self.$refs.indexswiper.swiper) {
                self.curIndex = self.$refs.indexswiper.swiper.activeIndex
              }

            }
          }
        },
        curIndex: 0,
        newList: []
      }
    },
    mounted(){
      this.height1 = document.documentElement.clientWidth/(1680/760);
      this.height2 = document.documentElement.clientWidth/(1680/292);
      this.height3 = document.documentElement.clientWidth/(1680/890);
      this.height4 = document.documentElement.clientWidth/(1680/420);
      var hder = document.getElementsByClassName('blackBack')[0];
      hder.className = 'blackBack';
      window.onscroll = ()=>{
        var top = document.documentElement.scrollTop;
        this.oTop1 =  this.$refs.pro1.offsetTop - 48;
        this.oTop2 = this.$refs.pro2.offsetTop - 48;
        this.oTop3 = this.$refs.pro3.offsetTop - 48;
        if(top >= this.oTop1 && top <= this.oTop2){
          hder.className = 'whiteBack'
          self.isWhite = true
        }else if( top >= this.oTop2 && top <= this.oTop3){
          hder.className = 'blackBack'
          self.isWhite = false;
        }else if( top >= this.oTop3){
          hder.className = 'whiteBack'
          self.isWhite = true;
        }else{
          hder.className = 'blackBack'
          self.isWhite = false;
        }
      }
      request({
        url: '/outside/posts/top',
        method: 'get'
      }).then(res => {
        self.newList = res.data.content
      })
    },
    created(){
      self= this
    },
    methods:{
      videoHover(){
        this.isHover = true;
      },
      videoOut(){
        this.isHover = false;
      },
      video(){
        this.$router.push('/home/video')
      },
      news(){
        this.$router.push('/new')
      },
      aboutUs(){
        this.$router.push('/with')
      },
      cai(){
        this.$router.push('/product/proCai')
      },
      AIO(){
        this.$router.push('/product/proAIO')
      },
      toDetail(row) {
        self.$router.push({
          path: '/new/detail1',
          query: {
            id: row.id
          }
        })
        // localStorage.setItem('newDetail', JSON.stringify(row))
      },
      more_pro(){
        this.$router.push({
          path:"/product",
          query:{
            type:'more_pro'
          }
        })
      },
      other_pro(){
        this.$router.push({
          path:"/product",
          query:{
            type:'other_pro'
          }
        })
      }
    },
    computed: {
        ...mapState({
            windowWidth: "windowWidth"
        })
    },
    watch:{
      windowWidth(){
        this.height1 = document.documentElement.clientWidth/(1680/760);
        this.height2 = document.documentElement.clientWidth/(1680/292);
        this.height3 = document.documentElement.clientWidth/(1680/890);
        this.height4 = document.documentElement.clientWidth/(1680/420);
      }
    }
  }
</script>

<style lang="scss" scope>
  @font-face {
    font-family: mFont;
    src: url('../assets/font/Oswald-SemiBold.ttf');
  }

  .home {
    height: 100%;
    width: 100%;
    position: relative;
    .home_v{
      width: 100%;
      // height: 47.5rem;
      video{
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }

    .home_mask{
      width: 100%;
      // height: 47.5rem;
      background-color: rgba(0,0,0,0.6);
      position: absolute;
      top: 3rem;
      left: 0;
    }
    .home_video {
      z-index: 1;
      position: absolute;
      width: 100%;
      top: 3rem;
      // height: 47.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .home_video_title {
        font-size: 3.13rem;
        font-weight: 600;
        width: 51rem;
        text-align: center;
        color: #fff;
        // margin-top: 12.5rem;
        // margin-top: 12%;
        margin-top: 10%;
      }

      .home_video_p {
        font-size: 1.13rem;
        // margin-top: 3rem;
        margin-top: 2.8%;
        color: #ffffff;
      }

      .home_video_c {
        color: #fff;
        // margin-top: 7.13rem;
        margin-top: 6.7%;
        display: flex;
        align-items: center;

        span {
          margin-right: 3.5rem;
        }

        .home_video_c_btn {
          width: 5.25rem;
          height: 5.25rem;
          margin-right: 3.5rem;
          cursor: pointer;
          .svg{
            width: 5.25rem;
            height: 5.25rem;
          }
          // .home_video_c_btn_c {
          //   width: 0;
          //   height: 0;
          //   border-top: 0.35rem solid transparent;
          //   border-left: 0.6rem solid #fff;
          //   border-bottom: 0.35rem solid transparent;
          // }
        }
      }

      .home_video_bottom {
        position: absolute;
        width: 1.5rem;
        height: 2.25rem;
        bottom: 40px;
        .svg{
          width: 1.5rem;
          height: 2.25rem;
          // margin-top: 0.63rem;
        }
      }
    }

    .home_data {
      box-sizing: border-box;
      width: 100%;
      // height: 18.25rem;
      background: url('../assets/home/data.jpg');
      background-size: cover;
      .home_data_items{
        display: flex;
        justify-content: space-between;
        width: 56.44rem;
        height: 100%;
        margin: 0 auto;
      }
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
          color: #fff;
          position: relative;
          span {
            font-size: 3.75rem;
            font-family: mFont;
            font-weight: normal;
          }
          .svg{
            position: absolute;
            width: 0.87rem;
            height: 0.87rem;
            top: 1.2rem;
            left: 7.9rem;
          }
        }
      }
    }

    .home_product_more {
      display: flex;
      width: 100%;

      .home_product_more_item1, .home_product_more_item2 {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50%;
        height: 100%;
        cursor: pointer;

        div:first-child {
          font-size: 1.5rem;
          font-weight: 600;
          color: #000;
          // margin-top: 5rem;
          margin-top: 9.5%;
        }

        div:nth-child(2) {
          font-size: 0.88rem;
          color: #333;
          margin-top: 0.38rem;
        }
      }

      .home_product_more_item1 {
        background: url('../assets/home/zcEquipment.jpg');
        background-size: cover;
        // background-position: center bottom;
      }

      .home_product_more_item2 {
        background: url('../assets/home/otherPro.jpg');
        background-size: cover;
        // background-position: center bottom;
      }
    }

    .home_news {
      height: 55rem;
      overflow: hidden;
      background: linear-gradient(
                      177deg,
                      rgba(231, 234, 241, 1) 0%,
                      rgba(231, 232, 239, 1) 6%,
                      rgba(247, 248, 249, 1) 39%,
                      rgba(255, 255, 255, 1) 60%,
                      rgba(235, 237, 243, 1) 84%,
                      rgba(223, 226, 235, 1) 100%
      );
      // padding: 6.63rem 0;
      padding-top: 6.63rem;
      position: relative;

      .home_news_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // padding: 0 15%;
        width: 61rem;
        margin:  0 auto;
        box-sizing: border-box;

        .home_news_header_title {
          div:nth-child(2) {
            font-size: 2rem;
            color: #000;
            font-weight: 600;
          }
        }
      }

      .carousel {
        position: relative;
        float: left;
        width: 100%;
        height: 20rem;
        overflow: hidden;
        top: 16.8rem;

        .pic, .pic1, .pic2, .pic3, .pic4 {
          position: absolute;
          width: 42.5rem;
          height: 100%;
          background-color: #E7EAF1;
          border-radius: 10px;
        }

        .pic {
          margin-left: -26%;
        }

        .pic1 {
          margin-left: 26%;
        }

        .pic2 {
          margin-left: 76%;
        }

        .pic3 {
          margin-left: 126%;
        }

        .pic4 {
          margin-left: 176%;
        }
      }

      .home_news_circle {
        width: 35.63rem;
        height: 35.63rem;
        background: rgba(216, 216, 216, 0);
        border: 0.06rem solid rgba(44, 198, 192, 1);
        border-radius: 50%;
        // margin: 9rem auto;
        margin: 0 auto;
        margin-top: 3rem;
        // margin-bottom: 6rem;

        .swiper-slide {
          width: 42.5rem;
          height: 35.63rem;
          margin-right: 2.5rem;
          display: flex;
          align-items: center;
        }

        .ph {
          width: 42.5rem;
          height: 20rem;
          background: rgba(231, 234, 241, 1);
          border-radius: 0.25rem;
          overflow: hidden;
          display: flex;

          .ph_img {
            width: 20rem;
            height: 20rem;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .btn_prev,
          .btn_next {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            position: absolute;
            background-color: #000;
            cursor: pointer;
            margin-top: 45rem;
          }

          .ph_content {
            padding: 2rem;
            width: 22.5rem;
            box-sizing: border-box;
            position: relative;

            .ph_content_short {
              margin-top: 1rem;
              font-size: 0.88rem;
              color: #333;
              line-height: 1.5rem;
            }

            .ph_content_title {
              font-size: 1.5rem;
              font-weight: 600;
              color: rgba(0, 0, 0, 1);
              line-height: 2.06rem;
            }

            .ph_content_bottom {
              position: absolute;
              bottom: 1.88rem;
              width: 100%;
              display: flex;
              align-items: center;

              .time {
                font-size: 0.88rem;
                font-family: Oswald;
                color: #999;
                margin-right: 7.25rem;
              }

              .detail {
                font-size: 0.88rem;
                color: rgba(51, 51, 51, 1);
                display: flex;
                font-weight: 400;
                align-items: center;

                div {
                  margin-right: 0.75rem;
                  cursor: pointer;
                }

                .svg {
                  width: 2.25rem;
                  height: 2.25rem;
                  cursor: pointer;
                }
              }
            }
          }

          .btn_next {
            margin-left: 50px;
          }
        }


      }
    }

    .home_pro_one {
      width: 100%;
      // height: 55.63rem;
      background: url('../assets/home/drumFryingMachine.jpg');
      background-size: cover;
      background-position: bottom;
      cursor: pointer;
      overflow: hidden;

      // padding: 7.5rem 14%;
      .home_pro_one_con{
        width: 61rem;
        height: 100%;
        overflow: hidden;
        margin: 0 auto;
        // margin-left: 21%;
        // margin-top: 7.5rem;
        margin-top: 7.1%;
      }
      .home_pro_one_title {
        font-size: 2.5rem;
        color: #000;
        margin-bottom: 1rem;
        cursor: pointer;
        font-weight: 600;

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

          span {
            display: block;
            font-size: 0.88rem;
            font-weight: 400;
            color: #333;
            width: 12.25rem;
          }
        }
      }
    }

    .home_pro_two {
      cursor: pointer;

      // height: 55.63rem;
      // background: #000;
      background-image: url('../assets/home/AIO.png');
      background-size: cover;
      overflow: hidden;

      // padding: 13.88rem 0 0 56%;
      .home_pro_two_con{
        width: 28.19rem;
        // margin-top: 13.88rem;
        margin-top: 13.2%;
        overflow: hidden;
        margin-left: 55.9%;
      }

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
        cursor: pointer;
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

        span {
          display: block;
          font-size: 0.88rem;
          color: #999;
          margin-bottom: 1.5rem;
        }
      }
    }

    .home_img {
      height: 12.8rem;
      background: url('../assets/home/aboutUs.jpg');
      background-size: cover;
    }

    .home_about {
      display: flex;
      justify-content: space-between;
      height: 46.88rem;
      background: #fff;
      // padding: 6.63rem 15%;
      box-sizing: border-box;
      overflow: hidden;
      .home_about_con{
        width: 61rem;
        margin: 0 auto;
        margin-top: 6.63rem;
        display: flex;
        justify-content: space-between;
      }
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
        span{
          line-height: 1.88rem;
        }

        .home_about_right_item {
          margin-top: 1.5rem;
          margin-bottom: 2rem;
          p{
              line-height: 1.88rem;
            }
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
        cursor: pointer;
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
        width: 1.5rem;
        height: 2px;
        border-radius: 1rem;
        margin-bottom: 2.5rem;
        background: #2cc6c0;
      }
  }
</style>

<style lang="scss">
  .pc_index .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='36' viewBox='0 0 36 36' width='36' xmlns='http://www.w3.org/2000/svg'%3E %3Cg fill='none'%3E %3Crect fill='none' height='35' rx='17.5' stroke='%23000' width='35' x='.5' y='.5'/%3E %3Cpath d='m13.5036403 25.5-1.5036403-1.3287142 6.181824-6.1577919-6.101354-6.1130039 1.3961554-1.40049 7.5233746 7.5117712z' fill='%230c0c0c' transform='matrix(-1 0 0 1 33 0)'/%3E %3C/g%3E %3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100%;
    left: -34%;
    top: 93% !important;
  }

  .pc_index .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg height='36' viewBox='0 0 36 36' width='36' xmlns='http://www.w3.org/2000/svg'%3E %3Cg%3E %3Crect fill='none' height='35' rx='17.5' stroke='%23000' width='35' x='.5' y='.5'/%3E %3Cpath d='m16.5036403 25.5-1.5036403-1.3287142 6.181824-6.1577919-6.101354-6.1130039 1.3961554-1.40049 7.5233746 7.5117712z'/%3E %3C/g%3E %3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100%;
    left: -15%;
    top: 93% !important;
  }

  .pc_index .swiper-button-prev:focus,
  .pc_index .swiper-button-next:focus {
    border: none;
    outline-style: none;
    box-shadow: none !important;
  }

  .pc_index .swiper-wrapper {
    margin-top: 0rem;
  }

  .pc_index .swiper-wrapper,
  .pc_index .swiper-container {
    overflow: visible;
  }

  .pc_index .swiper-container {
    margin-left: 0.8rem;
  }
</style>
