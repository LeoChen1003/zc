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
                    <img src="../assets/coreAdvan/star1.jpg" alt="">
                </div>
            </div>
            <div class="star_con_cen2">
                <div class="star_con_cen2_l">
                    <img src="../assets/coreAdvan/star2.jpg" alt="">
                </div>
                <div class="star_con_cen2_r">
                    <p>全方位规划设计</p>
                    <p>根据厨房实际情况，进行产品规划和空间规划。</p>
                </div>
            </div>
            <div class="star_con_cen1">
                <div class="star_con_cen1_l">
                    <p>全方位安装调试</p>
                    <p>XXXXXXXXXXXXXXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX。</p>
                </div>
                <div class="star_con_cen1_r">
                    <img src="../assets/coreAdvan/star3.jpg" alt="">
                </div>
            </div>
            <div class="star_con_cen3">
                <div class="star_con_cen3_l">
                    <img src="../assets/coreAdvan/star4.jpg" alt="">
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
                    <img src="../assets/coreAdvan/star5.jpg" alt="">
                </div>
            </div>
            <div class="star_con_cen4">
                <div class="star_con_cen4_l">
                    <img src="../assets/coreAdvan/star6.jpg" alt="">
                </div>
                <div class="star_con_cen4_r">
                    <p>全方位配件维修</p>
                    <p>XXXXXXXXXXXXXXXXXXXXXXXXX<br> sXXXXXXXXXXXXXXXXX。</p>
                </div>
            </div>
            <div class="star_con_cen1">
                <div class="star_con_cen1_l">
                    <p>全方位回访跟踪</p>
                    <p>不定期进行回访，全面了解客户使用体验，提高服务质量。</p>
                </div>
                <div class="star_con_cen1_r">
                    <img src="../assets/coreAdvan/star7.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="star_close" @click="cancel"></div>
    </div>
</template>

<script>
export default {
    name: 'intellStar',
    methods:{
        cancel(){
            this.$router.push("/coreAdvan");
        }
    }
}
</script>

<style lang="scss" scoped>
p{
    font-family: PingFangSC-Regular,PingFang SC;
}
.star{
    background-color: #000;
    width: 100%;
    overflow: hidden;
    .star_con{
        width: 60rem;
        height: 213.25rem;
        margin: 3rem auto 0;
        overflow: hidden;
        border-radius: 0.62rem;
        .star_con_hd{
            background: url("../assets/coreAdvan/starHd.jpg");
            width: 100%;
            height: 33.75rem;
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
            }
        }
        .star_con_cen1{
            width:100%;
            height: 26.12rem;
            .star_con_cen1_l,.star_con_cen1_r{
                width: 50%;
                height: 100%;
                float: left;
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
                }
            }
        }
    }
    .star_close{
        width: 3rem;
        height: 3rem;
        background-color: transparent;
        border: 2px solid #fff;
        position: fixed;
        top: 3.12rem;
        right: 9.87rem;
        border-radius: 50%;
        cursor: pointer;
    }
    .star_close:before,.star_close:after{
        position: absolute;
        content: ' ';
        height: 1.81rem;
        width: 0.13rem;
        left: 1.5rem;
        top: 0.56rem;
        background-color: #fff;
    }
    .star_close:before{
        transform: rotate(45deg);
    }
    .star_close:after{
        transform: rotate(-45deg);
    }
}
</style>