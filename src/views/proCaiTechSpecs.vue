<template>
    <div class="specs">
        <zcHeader :isWhite="isWhite"></zcHeader>
        <div class="specs_hd" :class="isActive?'colorWhite':''">
            <p>智能大滚筒炒菜机套机</p>
            <router-link to="/product/proCai">概览</router-link>
            <router-link to="/product/proCai/proCaiTechSpecs">技术规格</router-link>
            <div class="specs_hd_btn" @click="buy">
                立即预约
            </div>
        </div>
        <div class="specs_con1">
            <p>“星级大厨”带你体验舌尖上的美味</p>
            <p>智能一拖三炒菜机</p>
            <span :class="curIndex == 0 ? 'activeColor' : ''" @click="changeSwiper(0)">智能云菜谱</span>
            <span>|</span>
            <span :class="curIndex == 1 ? 'activeColor' : ''" @click="changeSwiper(1)">智能大滚筒炒菜机</span>
            <span>|</span>
            <span :class="curIndex == 2 ? 'activeColor' : ''" @click="changeSwiper(2)">中控任务管理</span>
            <span>|</span>
            <span :class="curIndex == 3 ? 'activeColor' : ''" @click="changeSwiper(3)">智能调料机</span>
            <span>|</span>
            <span :class="curIndex == 4 ? 'activeColor' : ''" @click="changeSwiper(4)">气压站</span>
            <div class="pro_swiper">
                <swiper :options="swiperOption" ref="product_swiper">
                    <swiper-slide>
                        <div class="item">
                            <img class="img1" src="../assets/product/carousel1.png" alt="">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="item">
                            <img class="img2" src="../assets/product/carousel2.png" alt="">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="item">
                            <img class="img3" src="../assets/product/carousel3.png" alt="">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="item">
                            <img class="img4" src="../assets/product/carousel4.png" alt="">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="item">
                            <img class="img5" src="../assets/product/carousel5.png" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="specs_txt">
            <span>产品参数</span>
            <span>智能大滚筒炒菜机</span>
            <span>型号：SYZNZ01A<br>
            额定功率：3000-18000W<br>
            电源电压：AC380V/50HZ<br>
            整机尺寸：1000*820*1100<br>
            屏幕尺寸：4.3寸<br>
            锅口径：390mm<br>
            配置：水枪，菜盆</span>
        </div>
        <div class="specs_txt">
            <span>产品参数</span>
            <span>中控任务管理</span>
            <span>型号：K-QT156<br>
                额定功率：30W<br>
                电源电压：AC220V<br>
                尺寸：15.6英寸<br>
                屏体分辨率：1920*1080<br>
                颜色：16.7M<br>
                亮度：250cd/m2<br>
                对比度：1000:01:00<br>
                响应时间：4ms<br>
                屏幕比例：16:10<br>
                点距：0.0163mm x 0.0620mm x RGB<br>
                可视角度(上/下/左/右)：89/89/70/55<br>
                功率：30W<br>
                接口类型：.LVDS<br>
                工作温度：0℃ — 50℃ <br>
                存储温度： -20℃ — 60℃</span>
        </div>
        <div class="specs_txt">
            <span>产品参数</span>
            <span>智能调料机</span>
            <span>型号：PLZJ-1A<br>
                额定功率：2200W<br>
                电源电压：AC220V/50HZ<br>
                整机尺寸：950*600*1265mm<br>
                屏幕尺寸：7寸电阻屏<br>
                存储调料：生抽、老抽、陈醋、白醋、料酒、白酒、盐、糖、鸡精、淀粉<br>
                配置：与补料柜和投料器组成配料系统</span>
        </div>
        <div class="specs_txt last">
            <span>产品参数</span>
            <span>气压站</span>
            <span>型号：UCQYZ-1<br>
                额定功率：3000W<br>
                电源电压：AC380V/50HZ<br>
                整机尺寸：900*800*1500mm</span>
        </div>
        <transition name="fade">
            <buyConsult v-if="isBuy"></buyConsult>
        </transition>
        <zcFooter></zcFooter>
    </div>
</template>

<script>
import zcHeader from '@/components/zcHeader.vue';
import zcFooter from '@/components/zcFooter.vue';
import '../styles/variables.scss';
import buyConsult from '@/components/buyConsult.vue';
let self;
export default {
    name: 'proCaiTechSpecs',
    data(){
        return {
            isActive:false,
            curIndex:0,
            isWhite:false,
            isBuy:false,
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
                        self.curIndex = self.$refs.product_swiper.swiper.activeIndex;
                    }
                }
            }
        }
    },
    components:{
        zcHeader,
        zcFooter,
        buyConsult
    },
    mounted(){
        var hder  = document.getElementsByClassName("blackBack")[0];
        hder.className = "blackBack";
        window.onscroll =()=>{
            var top = document.documentElement.scrollTop;
            if(top>=755){
                hder.className = "whiteBack";
                this.isActive = true;
                this.isWhite = true;
            }else{
                hder.className = "blackBack";
                this.isActive = false;
                this.isWhite = false;
            }
        }
    },
    methods:{
        buy(){
            this.isBuy = true;
        },
        changeSwiper(index) {
            self.curIndex = index
            self.$refs.product_swiper.swiper.slideTo(index)
        }
    },
    created() {
        self = this
    },
}
</script>

<style lang="scss">
.specs{
    width: 100%;
    overflow: hidden;
    .colorWhite{
        background-color: #fff !important;
        border-top: none !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        p:first-child{
            color: #000 !important;
        }
        a:nth-child(2),a:nth-child(3){
            color: #000 !important;
        }
    }
    .specs_hd{
        transition: all 0.5s;
        width: 100%;
        height: 3rem;
        border-top: 1px solid #000;
        background-color: #000;
        position: fixed;
        z-index:2;
        p:first-child{
            float: left;
            display: block;
            width:8.75rem;
            height:1.25rem;
            font-size:0.87rem;
            font-weight:400;
            color:#fff;
            margin-left: 22.12rem;
            margin-top: 0.88rem;
        }
        a:nth-child(2),a:nth-child(3){
            float: left;
            height:1.06rem;
            font-size:0.75rem;
            color:#fff;
            margin-top: 0.88rem;
        }
        a:nth-child(2){
            width:1.5rem;
            font-weight:400;
            margin-left: 11%;
        }
        a:nth-child(3){
            width: 3rem;
            font-weight: 600;
            margin-left: 3%;
        }
        .specs_hd_btn{
            float: left;
            width:6.5rem;
            height:2rem;
            background:rgba(44,198,192,1);
            border-radius:1rem;
            font-size:0.88rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:2rem;
            text-align: center;
            margin-left: 16.4%;
            margin-top: 0.5rem;
            cursor: pointer;
        }
    }
    .specs_con1{
        width: 100%;
        height: 44rem;
        background:linear-gradient(180deg,rgba(39,40,41,1) 0%,rgba(30,31,33,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        overflow: hidden;
        position: relative;
        .activeColor {
            font-weight: 500;
            color: #fff;
        }
        p:first-child{
            height:1.25rem;
            font-size:0.88rem;
            font-weight:400;
            color:rgba(136,136,136,1);
            line-height:1.25rem;
            margin-left: 21%;
            margin-top: 7.5rem;
        }
        p:nth-child(2){
            font-size:2.5rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            margin-top: 0.5rem;
            margin-left: 21%;
            margin-bottom: 1rem;
        }
        span{
            height:1.25rem;
            font-size:0.88rem;
            font-weight:400;
            color:rgba(133,133,133,1);
            line-height:1.25rem;
        }
        span:nth-child(2n+1){
            cursor: pointer;
        }
        span:first-of-type{
            margin-left: 21%;
        }
        span:not(:first-of-type){
            margin-left: 1rem;
        }
        .icon{
            width: 1.5rem;
            height: 0.125rem;
            float: left;
            position: absolute;
            bottom: 4rem;
            background-color: #fff;
            left: 22%;
        }
        .icon:nth-last-child(5){
            left: 22%;
        }
        .icon:nth-last-child(4){
            left: 24%;
        }
        .icon:nth-last-child(3){
            left: 26%;
        }
        .icon:nth-last-child(2){
            left: 28%;
        }
        .icon:last-child{
            left: 30%;
        }
        .active{
            background-color: #858585;
        }
    }
    .specs_txt{
        width: 67.1%;
        border-top: 1px solid #ECECEC;
        margin: 5rem auto 0;
        overflow: hidden;
        span{
            display: inline-block;
            font-size:1.25rem;
            font-weight:600;
            color:rgba(51,51,51,1);
            margin-top: 5rem;
        }
        span:nth-child(2){
            margin-left: 10.5rem;
        }
        span:nth-child(3){
            display: block;
            width:12.07rem;
            font-size:1rem;
            font-weight:400;
            color:#333;
            line-height:2rem;
            margin-left: 15.5rem;
            margin-top: 1.38rem;
        }
    }
    .last{
        border-bottom: 1px solid #ECECEC;
        margin-bottom: 5rem;
        span:nth-child(3){
            margin-bottom: 4.81rem;
        }
    }
}
.pro_swiper{
    width: 100%;
    margin-top: 7.41rem;
    position: relative;
    .item{
        position: relative;
        width: 100%;
        height: 100%;
        .img1{
            margin-left: 39%;
            width: 47%;
            margin-top: 4.1%;
        }
        .img2{
            position: absolute;
            left: 50%;
            width: 34%;
            margin-top: 3.4%;
        }
        .img3{
            width: 60.8%;
            margin-left: 39%;
            margin-top: 7.3%;
        }
        .img4{
            width: 39.6%;
            margin-left: 44%;
            margin-top: 2%;
        }
        .img5{
            width: 31%;
            margin-left: 49%;
            margin-top: 2.4%;
        }
    }
    .swiper-pagination{
        top: 73%;
        left: 21%;
        .swiper-pagination-bullet{
            width: 1.5rem !important;
            height: 3px !important;
            background-color: #858585;
            border-radius: 0;
            margin-left: 5px;
        }
        .swiper-pagination-bullet:focus{
            border: none;
            outline-style: none;
            box-shadow: none !important;
        }
        .swiper-pagination-bullet:first-child{
            margin-left: 0;
        }
        .swiper-pagination-bullet-active{
            background: #fff;
        }
    }
    .swiper-container-autoheight{
        height: 400px;
    }
    .swiper-wrapper{
        height: 25rem;
    }
    // .swiper-slide-active{
    //     margin-left: 32rem;
    // }
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