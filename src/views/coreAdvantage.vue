<template>
    <div class="core">
        <zcHeader></zcHeader>
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
                <img src="../assets/coreAdvantage/iconAddBlack.png" alt="">
                <p>了解更多</p>
            </div>
        </div>
        <div class="core_tech">
            <p>以智能解构中餐</p>
            <router-link to="/coreAdvantage/intelligencTech">智能技术</router-link>
            <p>简单易用的智能，背后藏着强大的科技</p>
            <img src="../assets/coreAdvantage/coreTech.png" alt="">
            <div class="core_tech_btn" @click="tech">
                <img src="../assets/coreAdvantage/iconAddWhite.png" alt="">
                <p>了解更多</p>
            </div>
        </div>
        <div class="core_data">
            <p>以智能解构中餐</p>
            <router-link to="/coreAdvantage/intelligenceData">智能数据管控</router-link>
            <p>智能管理前厅、后厨数据，实现成本、利润全透明化</p>
            <img src="../assets/coreAdvantage/coreData.png" alt="">
            <div class="core_data_btn" @click="data">
                <img src="../assets/coreAdvantage/iconAddBlack.png" alt="">
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
                <img src="../assets/coreAdvantage/iconAddWhite.png" alt="">
                <p>了解更多</p>
            </div>
        </div>
        <div class="core_star">
            <img src="../assets/coreAdvantage/coreStar.png" alt="">
            <router-link to="/coreAdvantage/intelligenceStar">7 星尊享服务体系</router-link>
            <p>优特智厨科技有限公司配备专业的技术、研发、营销、运营及售后团队。让客户从了解产品第一刻起，即享受专业、周到的服务</p>
            <img src="../assets/coreAdvantage/coreService.png" alt="">
            <div class="core_star_btn" @click="star">
                <img src="../assets/coreAdvantage/iconAddWhite.png" alt="">
                <p>了解更多</p>
            </div>
        </div>
        <zcFooter></zcFooter>
    </div>
</template>

<script>
import zcHeader from '@/components/zcHeader.vue'
import zcFooter from '@/components/zcFooter.vue'
import '../styles/variables.scss';
export default {
    name: "coreAdvan",
    components:{
        zcHeader,
        zcFooter
    },
    methods:{
        os(){
            this.$router.push("/coreAdvantage/intelligenceSystem");
        },
        tech(){
            this.$router.push("/coreAdvantage/intelligenceTech");
        },
        data(){
            this.$router.push("/coreAdvantage/intelligenceData");
        },
        mach(){
            this.$router.push("/coreAdvantage/intelligenceMachine");
        },
        star(){
            this.$router.push("/coreAdvantage/intelligenceStar");
        }
    },
    mounted(){
        var hder  = document.getElementsByClassName("whiteBack")[0];
        window.onscroll = function(){
            var top = document.documentElement.scrollTop;
            // window.console.log(document.documentElement.scrollTop);
            if(top >= 776 && top <= 1497){
                hder.className = "blackBack1";
            }else if(top >= 1497 && top <= 2218){
                hder.className = "whiteBack1";
            }else if(top >= 2218){
                hder.className = "blackBack1";
            }else{
                hder.className = "whiteBack1";
            }
        }
    },
}
</script>

<style lang="scss" scoped>
p{
    font-family: PingFangSC-Regular,PingFang SC;
}
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
            img{
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
        img{
            display: block;
            margin: 0 auto;
            margin-top: 4rem;
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
            img{
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
        img{
            display: block;
            margin: 4.87rem auto 0;
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
            img{
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
            img{
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
            width: 54.19rem;
            height: 20rem;
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            margin-left: 17rem;
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
        img:nth-child(4){
            display: block;
            margin: 4rem auto 0;
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
            img{
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
</style>