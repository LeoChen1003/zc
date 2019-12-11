<template>
    <div class="os">
        <div class="os_con" ref="osCon">
            <div class="os_con_hd">
                <div class="os_con_hd_1">
                    <svg-icon icon-class="os" class-name="svgIcon"></svg-icon>
                    <div class="os_con_hd_cirL">
                        <div class="os_con_hd_cirS"></div>
                    </div>
                    <p class="p1">智能系统 OS</p>
                    <p class="p2">简单易用的智能，背后藏着强大的科技</p>
                </div>
            </div>
            <div class="os_con_cen1">
                <div class="os_con_cen1_l">
                    <p>中控系统</p>
                    <p>后厨智能大脑，实时在线同步管理，集调料机、炉头为一体，实现从智能控温、自动投料、智能翻炒烹饪步骤全流程SOP，结合精简的UI布局，1人即可同时完成多人操作，更高效、更稳定、更低成本。</p>
                </div>
                <div class="os_con_cen1_r">
                    <img src="../assets/coreAdvantage/system_os1.jpg" alt="">
                </div>
            </div>
            <div class="os_con_cen2">
                <div class="os_con_cen2_l">
                    <img src="../assets/coreAdvantage/system_os2.jpg" alt="">
                </div>
                <div class="os_con_cen2_r">
                    <p>移动端 App</p>
                    <p>平台在线提供海量精美菜谱，可供用户任意挑选使用，还可在平台进行自主菜谱创作，通过线下设备实现智能烹饪，并配备数字化智能管理系统，轻松实现可视化厨房料理。</p>
                </div>
            </div>
            <div class="os_con_cen3">
                <div class="os_con_cen3_l">
                    <p>商家管理后台</p>
                    <p>为商家提供线上门店日常管理功能，例如查看门店基础信息、设备绑定信息、菜谱信息、烹饪任务信息等等。菜谱商城提供大量智能菜谱，供商家门店选用。</p>
                </div>
                <div class="os_con_cen3_r">
                    <img src="../assets/coreAdvantage/system_os3.jpg" alt="">
                </div>
            </div>
            <div class="os_chose" @click="cancel" :style="`left:${left}px`">
                <svg-icon icon-class="close1" class-name="svg"></svg-icon>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'sytOs',
    data(){
        return{
            left:0
        }
    },
    methods:{
        cancel(){
            this.$parent.modelSystem = false;
            this.canScroll()
        }
    },
    computed: {
        ...mapState({
            windowWidth: "windowWidth"
        })
    },
    mounted(){
        this.left = this.$refs.osCon.offsetLeft + 980 + 16
    },
    watch: {
        windowWidth() {
            this.left = this.$refs.osCon.offsetLeft + 980 + 16
        }
    }
}
</script>

<style lang="scss" scoped>
    .os{
        background-color: rgba(0, 0, 0, 0.9);
        width: 100%;
        position: fixed;
        top:0;
        left: 0;
        height: 100vh;
        z-index: 1000;
        overflow: auto;
        .os_con{
            width: 61.25rem;
            height: 111rem;
            border-radius: 0.62rem;
            background-color: #fff;
            margin: 3rem auto 0;
            position: relative;
            margin-bottom: 9.06rem;
            .os_con_hd{
                width: 100%;
                height: 33.75rem;
                overflow: hidden;
                // background:linear-gradient(225deg,rgba(47,132,203,1) 0%,rgba(18,159,154,1) 100%);
                background: #ECFDFC;
                border-radius:10px 10px 0px 0px;
                .os_con_hd_1{
                    width: 100%;
                    height: 100%;
                    // background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 57%,rgba(239,255,253,1) 83%,rgba(219,247,247,1) 100%);
                    .svgIcon{
                        float: left;
                        width: 51.19rem;
                        height: 30.88rem;
                        z-index: 0;
                    }
                    .os_con_hd_cirL{
                        float: left;
                        z-index: 1;
                        width: 10rem;
                        height: 10rem;
                        background-color: #2CC6C0;
                        border-radius: 50%;
                        margin: 6.5rem auto 0;
                        margin-left: -25.62rem;
                        position: relative;
                        .os_con_hd_cirS{
                            z-index: 1;
                            position: absolute;
                            width: 5rem;
                            height: 5rem;
                            background-color: #fff;
                            border-radius: 50%;
                            top: 50%;
                            left: 50%;
                            margin-top: -2.5rem;
                            margin-left: -2.5rem;
                        }
                    }
                    .p1{
                        z-index: 1;
                        // width: 12.25rem;
                        height: 3rem;
                        font-weight: 600;
                        color: #000;
                        float: left;
                        margin-top: -12.81rem;
                        margin-left: 24.56rem;
                        font-size: 2.12rem;
                    }
                    .p2{
                        z-index: 1;
                        width: 17rem;
                        height: 1.38rem;
                        float: left;
                        margin-top: -9.38rem;
                        margin-left: 22.12rem;
                        font-size: 1rem;
                        font-weight: 400;
                        color: #000;
                    }
                }
                
            }
            .os_con_cen1{
                width: 100%;
                height: 26.13rem;
                .os_con_cen1_l{
                    float: left;
                    width: 50%;
                    height: 100%;
                    p:first-child{
                        padding-left: 7.18rem;
                        padding-top: 5.38rem;
                        color: #000;
                        font-size: 1.62rem;
                        font-weight: 600;
                    }
                    p:last-child{
                        width: 16.25rem;
                        height: 11.25rem;
                        color: #333333;
                        margin-left: 7.18rem;
                        margin-top: 1.44rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 2rem;
                    }
                }
                .os_con_cen1_r{
                    float: left;
                    width: 50%;
                    height: 100%;
                }
            }
            .os_con_cen2{
                width: 100%;
                height: 25rem;
                .os_con_cen2_l{
                    float: left;
                    width: 50%;
                    height: 100%;
                }
                .os_con_cen2_r{
                    float: left;
                    width: 50%;
                    height: 100%;
                    p:first-child{
                        padding-left: 7.18rem;
                        padding-top: 5.5rem;
                        color: #000;
                        font-size: 1.62rem;
                        font-weight: 600;
                    }
                    p:last-child{
                        width: 16.25rem;
                        height: 11.25rem;
                        color: #333333;
                        margin-left: 7.18rem;
                        margin-top: 1.44rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 2rem;
                    }
                }
            }
            .os_con_cen3{
                width: 100%;
                height: 26.13rem;
                overflow: hidden;
                border-radius: 0 0 10px 10px;
                .os_con_cen3_l{
                    float: left;
                    width: 50%;
                    height: 100%;
                    p:first-child{
                        padding-left: 7.18rem;
                        padding-top: 5.38rem;
                        color: #000;
                        font-size: 1.62rem;
                        font-weight: 600;
                    }
                    p:last-child{
                        width: 16.25rem;
                        height: 11.25rem;
                        color: #333333;
                        margin-left: 7.18rem;
                        margin-top: 1.44rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 2rem;
                    }
                }
                .os_con_cen3_r{
                    float: left;
                    width: 50%;
                    height: 100%;
                }
            }
        }
        .os_chose{
            width: 3rem;
            height: 3rem;
            position: fixed;
            top:3rem;
            left: 85.1%;
            cursor: pointer;
            svg{
                width: 3rem;
                height: 3rem;
            }
        }
        
    }
</style>