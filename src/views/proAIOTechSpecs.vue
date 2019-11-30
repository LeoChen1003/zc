<template>
    <div class="aio_specs">
        <div :style="isBuy?'filter:blur(5px)':''">
            <zcHeader :isWhite="isWhite"></zcHeader>
            <div class="aio_specs_hd" :class="isActive?'colorWhite':''">
                <p>智能精炒一体机</p>
                <div class="aio_specs_hd_center">
                    <router-link to="/product/proAIO">概览</router-link>
                    <router-link to="/product/proAIO/proAIOTechSpecs">技术规格</router-link>
                </div>
                <div class="aio_specs_hd_btn" @click="buy">
                    立即预约
                </div>
            </div>
            <div class="aio_specs_con">
                <p>超级烹饪专家</p>
                <p>智能精炒一体机</p>
                <p>三合一体，中高级餐饮店的御用超级“厨神”</p>
                <div class="aio_specs_con_pic">
                    <img src="../assets/product/AIO5.png" alt="">
                </div>
            </div>
            <div class="aio_specs_txt">
                <span>产品参数</span>
                <p>型号：SZZNYTJ-1B<br>
                额定功率：8200W<br>
                电源电压：220V/50HZ<br>
                整机尺寸：900*650*1505mm<br>
                净重：110kg<br>
                配置：内嵌抽油烟机</p>
            </div>
            <div class="aio_specs_txt">
                <span>产品参数</span>
                <p>型号：SZZNYTJ-1A<br>
                额定功率：6700W<br>
                电源电压：220V/50HZ<br>
                整机尺寸：900*650*1505mm<br>
                净重：115kg<br>
                配置：内嵌抽油烟机</p>
            </div>
            <div class="aio_specs_txt aio_last">
                <span>产品参数</span>
                <p>型号：DZZNYTJ-1A<br>
                    额定功率：4500W<br>
                    电源电压：220V/50HZ<br>
                    整机尺寸：900*650*1505mm<br>
                    净重：90kg<br>
                    配置：内嵌抽油烟机</p>
            </div>
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
export default {
    name: 'proAIOTechSpecs',
    components:{
        zcHeader,
        zcFooter,
        buyConsult
    },
    data(){
        return {
            isActive:false,
            isWhite:false,
            isBuy:false
        }
    },
    mounted(){
        this.canScroll()
        var hder  = document.getElementsByClassName("blackBack")[0];
        hder.className = "blackBack";
        window.onscroll = ()=>{
            var top = document.documentElement.scrollTop;
            // window.console.log(document.documentElement.scrollTop);
            if(top>=774 && top<= 2066){
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
            this.noScroll()
        }
    }
}
</script>

<style lang="scss" scope>
.aio_specs{
    width: 100%;
    overflow: hidden;
    .colorWhite{
        background-color: #fff !important;
        border-top: none !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        p:first-child{
            color: #000 !important;
        }
        .aio_specs_hd_center{
            a:first-child,a:nth-child(2){
                color: #000 !important;
            }
        }
        
    }
    .aio_specs_hd{
        position: fixed;
        z-index: 2;
        transition: all 0.5s;
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
            margin-left: 21%;
            margin-top: 0.88rem;
        }
        .aio_specs_hd_center{
            width: 6.5rem;
            margin: 0 auto;
            a{
                float: left;
                height:1.06rem;
                font-size:0.75rem;
                color:#fff;
                margin-top: 0.88rem;
            }
            a:first-child{
                width:1.5rem;
                font-weight:400;
            }
            a:nth-child(2){
                width: 3rem;
                font-weight: 600;
                margin-left: 1.5rem;
            }
        }
        .aio_specs_hd_btn{
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
            margin-left: 19%;
            margin-top: 0.5rem;
            cursor: pointer;
        }
    }
    .aio_specs_con{
        width:100%;
        height:44rem;
        background:linear-gradient(180deg,rgba(17,17,17,1) 0%,rgba(30,31,33,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        overflow: hidden;
        position: relative;
        p:first-child{
            font-size:0.88rem;
            font-weight:400;
            color:rgba(136,136,136,1);
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
        p:nth-child(3){
            font-size:0.88rem;
            font-weight:400;
            color:rgba(133,133,133,1);
            margin-left: 21%;
            margin-top: 1rem;
        }
        .aio_specs_con_pic{
            width: 33.13rem;
            height: 33rem;
            position: absolute;
            right: 13.4%;;
            bottom: -1.7rem;
        }
    }
    .aio_specs_txt{
        width: 67.1%;
        border-top: 1px solid #ECECEC;
        margin: 5rem auto 0;
        overflow: hidden;
        span{
            float: left;
            display: inline-block;
            font-size:1.25rem;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(51,51,51,1);
            margin-top: 5rem;
            // float: left;
        }
        p{
            float: left;
            width:12.07rem;
            font-size:1rem;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:2rem;
            margin-left: 15.5rem;
            margin-top: 5rem;
        }
    }
    .aio_last{
        border-bottom: 1px solid #ECECEC;
        margin-bottom: 5rem;
        p{
            margin-bottom: 4.81rem;
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