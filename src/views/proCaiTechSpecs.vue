<template>
    <div class="specs">
        <zcHeader></zcHeader>
        <div class="specs_hd">
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
            <span>智能云菜谱</span>
            <span>|</span>
            <span>智能大滚筒炒菜机</span>
            <span>|</span>
            <span>中控任务管理</span>
            <span>|</span>
            <span>智能调料机</span>
            <span>|</span>
            <span>气压站</span>
            <productSwiper></productSwiper>
        </div>
        <div class="specs_txt">
            <span>产品参数</span>
            <span>智能大滚筒炒菜机</span>
            <p>型号：SYZNZ01A<br>
            额定功率：3000-18000W<br>
            电源电压：AC380V/50HZ<br>
            整机尺寸：1000*820*1100<br>
            屏幕尺寸：4.3寸<br>
            锅口径：390mm<br>
            配置：水枪，菜盆</p>
        </div>
        <div class="specs_txt">
            <span>产品参数</span>
            <span>中控任务管理</span>
            <p>型号：K-QT156<br>
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
                存储温度： -20℃ — 60℃</p>
        </div>
        <div class="specs_txt">
            <span>产品参数</span>
            <span>智能调料机</span>
            <p>型号：PLZJ-1A<br>
                额定功率：2200W<br>
                电源电压：AC220V/50HZ<br>
                整机尺寸：950*600*1265mm<br>
                屏幕尺寸：7寸电阻屏<br>
                存储调料：生抽、老抽、陈醋、白醋、料酒、白酒、盐、糖、鸡精、淀粉<br>
                配置：与补料柜和投料器组成配料系统</p>
        </div>
        <div class="specs_txt last">
            <span>产品参数</span>
            <span>气压站</span>
            <p>型号：UCQYZ-1<br>
                额定功率：3000W<br>
                电源电压：AC380V/50HZ<br>
                整机尺寸：900*800*1500mm</p>
        </div>
        <zcFooter></zcFooter>
    </div>
</template>

<script>
import zcHeader from '@/components/zcHeader.vue';
import zcFooter from '@/components/zcFooter.vue';
import '../styles/variables.scss';
import productSwiper from '@/components/productSwiper.vue';
export default {
    name: 'proCaiTechSpecs',
    data(){
        return {
            imgs: [
                {
                    src: require("../assets/product/carousel1.png"),
                    imgWidth: 800,
                    imgHeight: 400
                },
                {
                    src: require('../assets/product/carousel2.png'),
                    imgWidth: 570,
                    imgHeight: 400
                },
                {
                    src: require('../assets/product/carousel3.png'),
                    imgWidth: 1022,
                    imgHeight: 373
                },
                {
                    src: require('../assets/product/carousel4.png'),
                    imgWidth: 666,
                    imgHeight: 400
                },
                {
                    src: require('../assets/product/carousel5.png'),
                    imgWidth: 512,
                    imgHeight: 377
                }
            ],
            i:0,
            currentIndex:0
        }
    },
    components:{
        zcHeader,
        zcFooter,
        productSwiper
    },
    mounted(){
        var hder  = document.getElementsByClassName("whiteBack")[0];
        hder.className = "blackBack";
        window.onscroll = function(){
            var top = document.documentElement.scrollTop;
            if(top>=755){
                hder.className = "whiteBack";
            }else{
                hder.className = "blackBack";
            }
        }
    },
    methods:{
        moveTo(x){
            this.currentIndex = x;
            this.$refs.pic.src = require('../assets/product/carousel'+x+'.png');
        },
        buy(){
            this.$router.push("/buyConsult");
        }
    }
}
</script>

<style lang="scss" scoped>
p{
    font-family:PingFangSC-Semibold,PingFang SC;
}
.specs{
    width: 100%;
    overflow: hidden;
    .specs_hd{
        width: 100%;
        height: 3rem;
        border-top: 1px solid #000;
        background-color: #000;
        p:first-child{
            float: left;
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
            margin-left: 9.62rem;
        }
        a:nth-child(3){
            width: 3rem;
            font-weight: 600;
            margin-left: 1.5rem;
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
            margin-left: 14.00rem;
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
        }
        span{
            height:1.25rem;
            font-size:0.88rem;
            font-weight:400;
            color:rgba(133,133,133,1);
            line-height:1.25rem;
            margin-top: 1rem;
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
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(51,51,51,1);
            margin-top: 5rem;
        }
        span:nth-child(2){
            margin-left: 10.5rem;
        }
        p{
            width:12.07rem;
            font-size:1rem;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:2rem;
            margin-left: 15.5rem;
            margin-top: 1.38rem;
        }
    }
    .last{
        border-bottom: 1px solid #ECECEC;
        margin-bottom: 5rem;
        p{
            margin-bottom: 4.81rem;
        }
    }
}
</style>