<template>
    <div class="core">
        <zcHeader :tab3="tab" :isWhite="isWhite"></zcHeader>
        <div class="core_syt">
            <div class="core_syt_cir">
                <svg-icon icon-class="circle"></svg-icon>
            </div>
            <router-link to="/coreAdvantage/intelligenceSystem" class="core_syt_p1">智能系统 OS</router-link>
            <p class="core_syt_p2">简单易用的智能，背后藏着强大的科技</p>
            <div class="core_syt_pic">
                <div>
                    <img src="../assets/coreAdvantage/osZK.png"/>
                    <p class="core_syt_pic_p1">大滚筒套机中控屏</p>
                </div>
                <div>
                    <img src="../assets/coreAdvantage/osYT.png"/>
                    <p class="core_syt_pic_p2">精炒一体机屏幕</p>
                </div>
                <div>
                    <img src="../assets/coreAdvantage/osPhone.png"/>
                    <p class="core_syt_pic_p3">手机端 App</p>
                </div>
                <div>
                    <img src="../assets/coreAdvantage/osCompute.png"/>
                    <p class="core_syt_pic_p4">电脑端后台管理</p>
                </div>
            </div>
            <div class="core_syt_btn" @click="os">
                <svg-icon icon-class="add" class-name="svg"></svg-icon>
                <p>了解更多</p>
            </div>
        </div>
        <div class="core_tech">
            <p>以智能解构中餐</p>
            <router-link to="/coreAdvantage/intelligencTech">智能技术</router-link>
            <p>简单易用的智能，背后藏着强大的科技</p>
            <div class="core_tech_center">
                <div>
                    <svg-icon icon-class="1" class-name="svg"></svg-icon>
                    <p>精准投放调料</p>
                </div>
                <div>
                    <svg-icon icon-class="2" class-name="svg"></svg-icon>
                    <p>智能补料</p>
                </div>
                <div>
                    <svg-icon icon-class="3" class-name="svg"></svg-icon>
                    <p>智能调整角度</p>
                </div>
                <div>
                    <svg-icon icon-class="4" class-name="svg"></svg-icon>
                    <p>智能控温</p>
                </div>
                <div>
                    <svg-icon icon-class="5" class-name="svg"></svg-icon>
                    <p>智能翻炒</p>
                </div>
                <div>
                    <svg-icon icon-class="6" class-name="svg"></svg-icon>
                    <p>智能提醒</p>
                </div>
                <div>
                    <svg-icon icon-class="7" class-name="svg"></svg-icon>
                    <p>一键清洗</p>
                </div>
                <div>
                    <svg-icon icon-class="8" class-name="svg"></svg-icon>
                    <p>智能菜谱</p>
                </div>
            </div>
            <div class="core_tech_btn" @click="tech">
                <svg-icon icon-class="white_add" class-name="svg"></svg-icon>
                <p>了解更多</p>
            </div>
        </div>
        <div class="core_data">
            <p>以智能解构中餐</p>
            <router-link to="/coreAdvantage/intelligenceData">智能数据管控</router-link>
            <p>智能管理前厅、后厨数据，实现成本、利润全透明化</p>
            <div class="core_data_center">
                <div>
                    <svg-icon icon-class="data_1" class="svg"></svg-icon>
                    <p>设备管理平台</p>
                    <p>门店数据运筹帷幄，设备运行数据一目了然，成本透明，合理管理设备</p>
                </div>
                <div>
                    <svg-icon icon-class="data_2" class="svg"></svg-icon>
                    <p>门店管理平台</p>
                    <p>订单任务、运行状态、故障能源消耗全程可视化；设备能耗数据分析管理</p>
                </div>
            </div>
            <div class="core_data_btn" @click="data">
                <svg-icon icon-class="add" class-name="svg"></svg-icon>
                <p>了解更多</p>
            </div>
        </div>
        <div class="core_mach">
            <p>以智能解构中餐</p>
            <router-link to="/coreAdvantage/intelligenceMachine">智能配件</router-link>
            <p>智能管理前厅、后厨数据，实现成本、利润全透明化</p>
            <div class="core_mach_svg">
                <div>
                    <svg-icon icon-class="cai" class-name="svg"></svg-icon>
                    <p class="p1">智能打菜机</p>
                    <p class="p2">智能测算菜品营养值</p>
                </div>
                <div>
                    <svg-icon icon-class="xiang" class-name="svg"></svg-icon>
                    <p class="p3">智能配送保温箱</p>
                    <p class="p4">智能调节温度保温</p>
                </div>
                <div>
                    <svg-icon icon-class="can" class-name="svg"></svg-icon>
                    <p class="p5">智能取餐柜</p>
                    <p class="p6">保温保鲜</p>
                </div>
            </div>
            <div class="core_mach_btn" @click="mach">
                <svg-icon icon-class="white_add" class-name="svg"></svg-icon>
                <p>了解更多</p>
            </div>
        </div>
        <div class="core_star">
            <img src="../assets/coreAdvantage/coreStar.png" alt="">
            <router-link to="/coreAdvantage/intelligenceStar">7 星尊享服务体系</router-link>
            <p>优特智厨科技有限公司配备专业的技术、研发、营销、运营及售后团队。让客户从了解产品第一刻起，即享受专业、周到的服务</p>
            <div class="core_star_center">
                <div class="core_star_center_1">
                    <div>
                        <svg-icon icon-class="star_1" class="svg"></svg-icon>
                        <p>全方位项目咨询</p>
                    </div>
                    <div>
                        <svg-icon icon-class="star_2" class="svg"></svg-icon>
                        <p>全方位安装调试</p>
                    </div>
                    <div>
                        <svg-icon icon-class="star_3" class="svg"></svg-icon>
                        <p>全方位项目咨询</p>
                    </div>
                    <div>
                        <svg-icon icon-class="star_4" class="svg"></svg-icon>
                        <p>全方位回访跟踪</p>
                    </div>
                </div>
                <div class="core_star_center_2">
                    <div>
                        <svg-icon icon-class="star_5" class="svg"></svg-icon>
                        <p>全方位使用培训</p>
                    </div>
                    <div>
                        <svg-icon icon-class="star_6" class="svg"></svg-icon>
                        <p>全方位检测保养</p>
                    </div>
                    <div>
                        <svg-icon icon-class="star_7" class="svg"></svg-icon>
                        <p>全方位配件维修</p>
                    </div>
                </div>
            </div>
            <div class="core_star_btn" @click="star">
                <svg-icon icon-class="white_add" class-name="svg"></svg-icon>
                <p>了解更多</p>
            </div>
        </div>
        <transition name="fade">
            <dataModel v-if="modelData"></dataModel>
        </transition>
        <transition name="fade">
            <machineModel v-if="modelMachine"></machineModel>
        </transition>
        <transition name="fade">
            <techModel v-if="modelTech"></techModel>
        </transition>
        <transition name="fade">
            <systemModel v-if="modelSystem"></systemModel>
        </transition>
        <transition name="fade">
            <starModel v-if="modelStar"></starModel>
        </transition>
        <zcFooter></zcFooter>
    </div>
</template>

<script>
import zcHeader from '@/components/zcHeader.vue'
import zcFooter from '@/components/zcFooter.vue'
import dataModel from '../components/intelligenceData.vue'
import machineModel from '@/components/intelligenceMachine'
import starModel from '@/components/intelligenceStar'
import techModel from '@/components/intelligenceTech'
import systemModel from '@/components/intelligenceSystem'
import '../styles/variables.scss';
export default {
    name: "coreAdvan",
    data(){
        return {
            tab:0,
            isWhite: true,
            modelData:false,
            modelMachine:false,
            modelTech: false,
            modelSystem: false,
            modelStar: false
        }
    },
    components:{
        zcHeader,
        zcFooter,
        dataModel,
        machineModel,
        techModel,
        systemModel,
        starModel
    },
    methods:{
        os(){
            // this.$router.push("/coreAdvantage/intelligenceSystem");
            this.modelSystem = true;
            this.noScroll()
        },
        tech(){
            // this.$router.push("/coreAdvantage/intelligenceTech");
            this.modelTech = true;
            this.noScroll()
        },
        data(){
            // this.$router.push("/coreAdvantage/intelligenceData");
            this.modelData = true
            this.noScroll()
        },
        mach(){
            // this.$router.push("/coreAdvantage/intelligenceMachine");
            this.modelMachine = true;
            this.noScroll()
        },
        star(){
            // this.$router.push("/coreAdvantage/intelligenceStar");
            this.modelStar = true;
            this.noScroll()
        }
    },
    watch:{
        $route(){
            let type = this.$route.query.type
            // window.console.log(type)
            if(type == 'modelData'){
                this.modelData = true;
            }else if(type == "modelSt"){
                this.modelSystem = true;
            }else if(type == "modelTech"){
                this.modelTech = true;
            }else if(type == "modelMc"){
                this.modelMachine = true;
            }else if(type == "modelSe"){
                this.modelStar = true;
            }
        }
    },
    mounted(){
        this.canScroll()
        var hder  = document.getElementsByClassName("whiteBack")[0];
        window.onscroll = ()=>{
            var top = document.documentElement.scrollTop;
            // window.console.log(document.documentElement.scrollTop);
            if(top >= 776 && top <= 1497){
                hder.className = "blackBack1";
                this.isWhite = false;
            }else if(top >= 1497 && top <= 2218){
                hder.className = "whiteBack1";
                this.isWhite = true;
            }else if(top >= 2218){
                hder.className = "blackBack1";
                this.isWhite = false;
            }else{
                hder.className = "whiteBack1";
                this.isWhite = true;
            }
        }
        let type = this.$route.query.type;
        if(type == 'modelData'){
            this.modelData = true;
        }else if(type == "modelSt"){
            this.modelSystem = true;
        }else if(type == "modelTech"){
            this.modelTech = true;
        }else if(type == "modelMc"){
            this.modelMachine = true;
        }else if(type == "modelSe"){
            this.modelStar = true;
        }
    },
}
</script>

<style lang="scss" scoped>
.core{
    width: 100%;
    .core_syt{
        width: 100%;
        height: 45rem;
        border-top: 1px solid #cccccc;
        background: url("../assets/coreAdvantage/osBackground.jpg");
        background-size: 100% 100%;
        .core_syt_cir{
            width: 18.75rem;
            height: 10rem;
            margin: 4.5rem auto 0;
        }
        .core_syt_p1{
            width: 12.25rem;
            height: 3rem;
            color: #000;
            display: block;
            font-size: 2.12rem;
            font-weight: 600;
            margin: 0 auto;
            margin-top: 1.5rem;
            cursor: pointer;
        }
        .core_syt_p2{
            width: 17rem;
            height: 1.37rem;
            margin: 0 auto;
            margin-top: 0.5rem;
            color: #888888;
            font-weight: 300;
        }
        .core_syt_pic{
            width: 50%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 3rem;
            p{
                font-size: 1rem;
                font-weight: 600;
                color: #000;
                margin-top: 0.5rem;
            }
            .core_syt_pic_p1{
                margin-left: -1rem;
            }
            .core_syt_pic_p2{
                margin-left: -0.6rem;
            }
            .core_syt_pic_p3{
                margin-left: 0.3rem;
            }
            .core_syt_pic_p4{
                margin-left: -0.7rem;
            }
        }
        .core_syt_btn{
            width: 7.75rem;
            height: 2.62rem;
            margin: 0 auto;
            margin-top: 3.5rem;
            border-radius: 1.31rem;
            border: 2px solid #000;
            box-sizing: border-box;
            line-height: 2.62rem;
            cursor: pointer;
            .svg{
                float: left;
                margin-top: 0.6rem;
                margin-left: 1rem;
                width: 1.13rem;
                height: 1.13rem;
            }
            p{
                float: left;
                font-size: 1rem;
                font-weight: 600;
                margin-left: 4px;
                margin-top: -2px;
            }
        }
    }
    .core_tech{
        width: 100%;
        box-sizing: border-box;
        height: 45rem;
        background: url("../assets/coreAdvantage/techBackground.jpg");
        overflow: hidden;
        background-size: 100% 100%;   
        p:first-child{
            width: 7.87rem;
            height: 1.56rem;
            margin: 0 auto;
            font-size: 1.12rem;
            color: #888888;
            margin-top: 7.5rem;
            font-weight: 400;
        }
        a:nth-child(2){
            display: block;
            width: 8.5rem;
            height: 3rem;
            margin: 0 auto;
            font-weight: 600;
            margin-top: 0.5rem;
            font-size: 2.12rem;
            color: #fff;
        }
        p:nth-child(3){
            width: 17rem;
            height: 1.37rem;
            margin: 0 auto;
            margin-top: 1rem;
            color: #888888;
            font-weight: 400;
        }
        .core_tech_center{
            width: 40.88rem;
            height: 11.88rem;
            margin: 0 auto;
            margin-top: 4rem;
            display: flex;
            flex-wrap: wrap;
            div{
                width: 25%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .svg{
                    width: 1.88rem;
                    height: 1.88rem;
                }
                p{
                    color: #fff;
                    font-size: 1.13rem;
                    font-family: PingFangSC-Semibold,PingFang SC;
                    font-weight: 600;
                    line-height: 1.56rem;
                    margin-top: 1rem;
                }
            }
        }
        .core_tech_btn{
            width: 7.75rem;
            height: 2.62rem;
            margin: 0 auto;
            margin-top: 4rem;
            border-radius: 1.31rem;
            border: 2px solid #fff;
            box-sizing: border-box;
            line-height: 2.62rem;
            cursor: pointer;
            .svg{
                float: left;
                margin-top: 0.6rem;
                margin-left: 1rem;
                width: 1.13rem;
                height: 1.13rem;
            }
            p{
                float: left;
                font-size: 1rem;
                font-weight: 600;
                margin-left: 2.37rem;
                margin-top: -1.87rem;
                color: #fff;
            }
        }
    }
    .core_data{
        width: 100%;
        box-sizing: border-box;
        height: 45rem;
        background: url("../assets/coreAdvantage/dataBackground.jpg");
        overflow: hidden;
        background-size: 100% 100%;
        p:first-child{
            font-size: 1.12rem;
            width: 7.87rem;
            height: 1.56rem;
            margin: 7.5rem auto 0;
            font-weight: 400;
            color: #888888;
        }
        a:nth-child(2){
            display: block;
            width: 12.75rem;
            height: 3rem;
            font-size: 2.12rem;
            font-weight: 600;
            color: #000;
            margin: 0.5rem auto 0;
        }
        p:nth-child(3){
            width: 23rem;
            height: 1.38rem;
            font-size: 1rem;
            margin: 1rem auto 0;
            color: #888888;
            font-weight: 400;
        }
        .core_data_center{
            display: flex;
            width: 32.5rem;
            height: 9.63rem;
            margin: 4.87rem auto 0;
            justify-content:space-between;
            div{
                width: 38.5%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .svg{
                    width: 1.88rem;
                    height: 1.88rem;
                }
                p:nth-child(2){
                    font-size:1.25rem;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                    color:rgba(0,0,0,1);
                    line-height:1.75rem;
                    margin-top: 1rem;
                }
                p:nth-child(3){
                    width: 12.5rem;
                    text-align: center;
                    font-size:0.88rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(136,136,136,1);
                    line-height:1.5rem;
                    margin-top: 0.5rem;
                }
            }
        }
        .core_data_btn{
            width: 7.75rem;
            height: 2.62rem;
            margin: 0 auto;
            margin-top: 5.12rem;
            border-radius: 1.31rem;
            border: 2px solid #000;
            box-sizing: border-box;
            line-height: 2.62rem;
            cursor: pointer;
            .svg{
                float: left;
                margin-top: 0.6rem;
                margin-left: 1rem;
                width: 1.13rem;
                height: 1.13rem;
            }
            p{
                float: left;
                font-size: 1rem;
                font-weight: 600;
                margin-left: 2.37rem;
                margin-top: -1.87rem;
            }
        }
    }
    .core_mach{
        width: 100%;
        height: 45rem;
        background: url("../assets/coreAdvantage/machineBackground.jpg");
        overflow: hidden;
        background-size: 100% 100%;
        p:first-child{
            width: 7.88rem;
            height: 1.56rem;
            font-size: 1.12rem;
            color: #888888;
            margin: 7.5rem auto 0;
            font-weight: 400;
        }
        a:nth-child(2){
            display: block;
            width: 8.5rem;
            height: 3rem;
            font-weight: 600;
            color: #fff;
            margin: 0.5rem auto 0;
            font-size: 2.12rem;
        }
        p:nth-child(3){
            width: 23rem;
            height: 1.38rem;
            margin: 1rem auto 0;
            font-size: 1rem;
            color: #888888;
            font-weight: 400;
        }
        .core_mach_btn{
            width: 7.75rem;
            height: 2.62rem;
            margin: 0 auto;
            border-radius: 1.31rem;
            border: 2px solid #fff;
            box-sizing: border-box;
            line-height: 2.62rem;
            cursor: pointer;
            .svg{
                float: left;
                margin-top: 0.6rem;
                margin-left: 1rem;
                width: 1.13rem;
                height: 1.13rem;
            }
            p{
                color: #fff;
                float: left;
                font-size: 1rem;
                font-weight: 600;
                margin-left: 2.37rem;
                margin-top: -1.87rem;
            }
        }
        .core_mach_svg{
            width: 56.19rem;
            height: 20rem;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            margin-top: 2rem;
            div{
                .svg{
                    color: #fff;
                }
                .p1,.p3,.p5{
                    width:7.88rem;
                    height:1.56rem;
                    font-size:1.12rem;
                    font-weight:600;
                    color:rgba(255,255,255,1);
                }
                .p1{
                    margin-left: 6.5rem;
                }
                .p3{
                    margin-left: 5.7rem;
                }
                .p5{
                    margin-left: 6.6rem;
                }
                .p2,.p4,.p6{
                    font-size:14px;
                    font-weight:600;
                    color:rgba(0,0,0,1);
                    background-color: #fff;
                    padding: 0 0.5rem;
                    line-height: 24px;
                    border-radius: 2px;
                }
                .p2{
                    width:126px;
                    height:24px;
                }
                .p4{
                    width:112px;
                    height:24px;
                }
                .p6{
                    width:56px;
                    height:24px;
                }
            }
        }
    }
    .core_star{
        width: 100%;
        overflow: hidden;
        height: 45rem;
        background: url("../assets/coreAdvantage/starBackground.jpg");
        background-size: 100% 100%;
        img:first-child{
            display: block;
            margin: 7.5rem auto 0;
        }
        a:nth-child(2){
            display: block;
            width: 16.81rem;
            height: 3rem;
            font-weight: 600;
            font-size: 2.12rem;
            color: #fff;
            margin: 0.5rem auto 0;
        }
        p:nth-child(3){
            width: 29.12rem;
            height: 3rem;
            margin: 1rem auto 0;
            font-size: 1rem;
            font-weight: 400;
            color: #888888;
        }
        .core_star_center{
            display: flex;
            width: 46.5rem;
            margin: 4rem auto 0;
            flex-direction: column;
            .core_star_center_1{
                display: flex;
                justify-content:space-between;
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .svg{
                        width: 1.88rem;
                        height: 1.88rem;
                    }
                    p{
                        margin-top: 1rem;
                        font-size:1.13rem;
                        font-family:PingFangSC-Semibold,PingFang SC;
                        font-weight:600;
                        color:rgba(255,255,255,1);
                        line-height:1.56rem;
                    }
                }
            }
            .core_star_center_2{
                display: flex;
                justify-content:space-around;
                margin-top: 2rem;
                div{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .svg{
                        width: 1.88rem;
                        height: 1.88rem;
                    }
                    p{
                        margin-top: 1rem;
                        font-size:1.13rem;
                        font-family:PingFangSC-Semibold,PingFang SC;
                        font-weight:600;
                        color:rgba(255,255,255,1);
                        line-height:1.56rem;
                    }
                }
            }
        }
        .core_star_btn{
            width: 7.75rem;
            height: 2.62rem;
            margin: 0 auto;
            margin-top: 4rem;
            border-radius: 1.31rem;
            border: 2px solid #fff;
            box-sizing: border-box;
            line-height: 2.62rem;
            cursor: pointer;
            .svg{
                float: left;
                margin-top: 0.6rem;
                margin-left: 1rem;
                width: 1.13rem;
                height: 1.13rem;
            }
            p{
                color: #fff;
                float: left;
                font-size: 1rem;
                font-weight: 600;
                margin-left: 2.37rem;
                margin-top: -1.87rem;
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