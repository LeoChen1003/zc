<template>
    <div class="star">
        <div class="star_con">
            <div class="star_con_hd">
                <p>7 星尊享服务体系</p>
                <p>优特智厨科技有限公司配备专业的技术、研发、营销、运营及售后团队。让客户从了解产品第一刻起，即享受专业、周到的服务</p>
            </div>
            <div class="star_con_cen1">
                <div class="star_con_cen1_l">
                    <p>全方位项目咨询</p>
                    <p>根据客户需求，展开咨询工作，制定项目计划。</p>
                </div>
                <div class="star_con_cen1_r">
                    <img src="../assets/coreAdvantage/star1.jpg" alt="">
                </div>
            </div>
            <div class="star_con_cen2">
                <div class="star_con_cen2_l">
                    <img src="../assets/coreAdvantage/star2.jpg" alt="">
                </div>
                <div class="star_con_cen2_r">
                    <p>全方位规划设计</p>
                    <p>根据厨房实际情况，进行产品规划和空间规划。</p>
                </div>
            </div>
            <div class="star_con_cen1">
                <div class="star_con_cen1_l">
                    <p>全方位安装调试</p>
                    <p>专业团队现场安装调试，保障设备高效运行</p>
                </div>
                <div class="star_con_cen1_r">
                    <img src="../assets/coreAdvantage/star3.jpg" alt="">
                </div>
            </div>
            <div class="star_con_cen3">
                <div class="star_con_cen3_l">
                    <img src="../assets/coreAdvantage/star4.jpg" alt="">
                </div>
                <div class="star_con_cen3_r">
                    <p>全方位使用培训</p>
                    <p>专业售后团队现场培训指导，长期远程服务。</p>
                </div>
            </div>
            <div class="star_con_cen1">
                <div class="star_con_cen1_l">
                    <p>全方位检测保养</p>
                    <p>设备定期全面检测、保养，减少设备故障、延长使用寿命。</p>
                </div>
                <div class="star_con_cen1_r">
                    <img src="../assets/coreAdvantage/star5.jpg" alt="">
                </div>
            </div>
            <div class="star_con_cen4">
                <div class="star_con_cen4_l">
                    <img src="../assets/coreAdvantage/star6.jpg" alt="">
                </div>
                <div class="star_con_cen4_r">
                    <p>全方位配件维修</p>
                    <p>专业设备零部件维修服务，提供贴心保障</p>
                </div>
            </div>
            <div class="star_con_cen1" style="overflow:hidden;border-radius:0 0 10px 10px;">
                <div class="star_con_cen1_l">
                    <p>全方位回访跟踪</p>
                    <p>不定期进行回访，全面了解客户使用体验，提高服务质量。</p>
                </div>
                <div class="star_con_cen1_r">
                    <img src="../assets/coreAdvantage/star7.jpg" alt="">
                </div>
            </div>
            <div class="star_chose" @click="cancel">
                <svg-icon icon-class="close1" class-name="svg"></svg-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'intellStar',
    methods:{
        cancel(){
            this.$parent.modelStar = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.star{
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    overflow: auto;
    .star_con{
        width: 60rem;
        height: 213.25rem;
        margin: 3rem auto 0;
        position: relative;
        margin-bottom: 9.06rem;
        .star_con_hd{
            background: url("../assets/coreAdvantage/starHeader.jpg");
            width: 100%;
            height: 33.75rem;
            border-radius: 0.62rem;
            overflow: hidden;
            p:first-child{
                width:16.81rem;
                height:3rem;
                font-size:2.12rem;
                font-weight:600;
                color:rgba(255,255,255,1);
                margin: 13.75rem auto 0;
            }
            p:nth-child(2){
                width:32rem;
                height:2.75rem;
                font-size:1rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                margin: 0.5rem auto 0;
                text-align: center;
                line-height: 2rem;
            }
        }
        .star_con_cen1{
            width:100%;
            height: 26.12rem;
            .star_con_cen1_l,.star_con_cen1_r{
                width: 50%;
                height: 100%;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                    background-size: 100% 100%;
                }
            }
            .star_con_cen1_l{
                background-color: #fff;
                p:first-child{
                    width:11.37rem;
                    height:2.32rem;
                    font-size:1.62rem;
                    font-weight:600;
                    color:#000;
                    margin-top: 9.25rem;
                    margin-left: 7.19rem;
                }
                p:nth-child(2){
                    width:16.25rem;
                    height:3.94rem;
                    font-size:1rem;
                    font-weight:400;
                    color:#333333;
                    margin-left: 7.19rem;
                    margin-top: 1.44rem;
                    line-height: 2rem;
                }
            }
        }
        .star_con_cen2{
            width:100%;
            height: 25rem;
            .star_con_cen2_l,.star_con_cen2_r{
                width: 50%;
                height: 100%;
                float: left;
            }
            .star_con_cen2_r{
                background-color: #fff;
                p:first-child{
                    width:11.37rem;
                    height:2.32rem;
                    font-size:1.62rem;
                    font-weight:600;
                    color:#000;
                    margin-top: 8.62rem;
                    margin-left: 7.19rem;
                }
                p:nth-child(2){
                    width:16.25rem;
                    height:3.94rem;
                    font-size:1rem;
                    font-weight:400;
                    color:#333333;
                    margin-left: 7.19rem;
                    margin-top: 1.44rem;
                    line-height: 2rem;
                }
            }
        }
        .star_con_cen3{
            width:100%;
            height: 25.13rem;
            .star_con_cen3_l,.star_con_cen3_r{
                width: 50%;
                height: 100%;
                float: left;
            }
            .star_con_cen3_r{
                background-color: #fff;
                p:first-child{
                    width:11.37rem;
                    height:2.32rem;
                    font-size:1.62rem;
                    font-weight:600;
                    color:#000;
                    margin-top: 8.62rem;
                    margin-left: 7.19rem;
                }
                p:nth-child(2){
                    width:16.25rem;
                    height:3.94rem;
                    font-size:1rem;
                    font-weight:400;
                    color:#333333;
                    margin-left: 7.19rem;
                    margin-top: 1.44rem;
                    line-height: 2rem;
                }
            }
        }
        .star_con_cen4{
            width:100%;
            height: 25.125rem;
            .star_con_cen4_l,.star_con_cen4_r{
                width: 50%;
                height: 100%;
                float: left;
            }
            .star_con_cen4_r{
                background-color: #fff;
                p:first-child{
                    width:11.37rem;
                    height:2.32rem;
                    font-size:1.62rem;
                    font-weight:600;
                    color:#000;
                    margin-top: 8.62rem;
                    margin-left: 7.19rem;
                }
                p:nth-child(2){
                    width:16.25rem;
                    height:3.94rem;
                    font-size:1rem;
                    font-weight:400;
                    color:#333333;
                    margin-left: 7.19rem;
                    margin-top: 1.44rem;
                    line-height: 2rem;
                }
            }
        }
    }
    .star_chose{
            width: 3rem;
            height: 3rem;
            position: absolute;
            top: 0;
            right: -4rem;
            cursor: pointer;
            svg{
                width: 3rem;
                height: 3rem;
            }
    }
}
</style>