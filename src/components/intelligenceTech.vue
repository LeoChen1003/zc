<template>
    <div class="tech">
        <div class="tech_con">
            <div class="tech_con_hd">
                <p>智能技术</p>
                <p>简单易用的智能，背后藏着强大的科技</p>
            </div>
            <div class="tech_con_cen1">
                <div class="tech_con_cen1_l">
                    <p>精准投放调料</p>
                    <p>智能灶接受中控主机指令，精准测算所需调料，及时响应投放指令。</p>
                </div>
                <div class="tech_con_cen1_r">
                    <img src="../assets/coreAdvantage/tech1.jpg" alt="">
                </div>
            </div> 
            <div class="tech_con_cen2">
                <div class="tech_con_cen2_l">
                    <img src="../assets/coreAdvantage/tech2.jpg" alt="">
                </div>
                <div class="tech_con_cen2_r">
                    <p>智能补料</p>
                    <p>智能判断投料柜液体调料是否充足，并自动完成补料。</p>
                </div>
            </div> 
            <div class="tech_con_cen1">
                <div class="tech_con_cen1_l">
                    <p>智能调整角度</p>
                    <p>智能判断烹饪方式、菜量，自动调整工位，满足多烹饪工位需求。</p>
                </div>
                <div class="tech_con_cen1_r">
                    <img src="../assets/coreAdvantage/tech3.jpg" alt="">
                </div>
            </div> 
            <div class="tech_con_cen2">
                <div class="tech_con_cen2_l">
                    <img src="../assets/coreAdvantage/tech4.jpg" alt="">
                </div>
                <div class="tech_con_cen2_r">
                    <p>智能控温</p>
                    <p>实时控制温度，通过转速、工位、功率自动调节，高度还原大厨烹饪温度环境。</p>
                </div>
            </div> 
            <div class="tech_con_cen1">
                <div class="tech_con_cen1_l">
                    <p>智能翻炒</p>
                    <p>智能判断烹饪方式，实现顺/逆时针智能翻炒，翻炒更均匀。</p>
                </div>
                <div class="tech_con_cen1_r">
                    <img src="../assets/coreAdvantage/tech5.jpg" alt="">
                </div>
            </div> 
            <div class="tech_con_cen2">
                <div class="tech_con_cen2_l">
                    <img src="../assets/coreAdvantage/tech6.jpg" alt="">
                </div>
                <div class="tech_con_cen2_r">
                    <p>智能提醒</p>
                    <p>语音/文字智能提醒操作步骤，指导还原大厨烹饪行为。</p>
                </div>
            </div> 
            <div class="tech_con_cen1">
                <div class="tech_con_cen1_l">
                    <p>一键清洗</p>
                    <p>多种清洗方式选择，智能完成清洗、消毒、烘干步骤。</p>
                </div>
                <div class="tech_con_cen1_r">
                    <img src="../assets/coreAdvantage/tech7.jpg" alt="">
                </div>
            </div> 
            <div class="tech_con_cen2" style="overflow:hidden;border-radius:0 0 0.62rem 0.62rem">
                <div class="tech_con_cen2_l">
                    <img src="../assets/coreAdvantage/tech8.jpg" alt="">
                </div>
                <div class="tech_con_cen2_r">
                    <p>智能菜谱</p>
                    <p>智能电子菜谱实时操控，让我们的生活更方便哦。</p>
                </div>
            </div> 
            <div class="tech_chose" @click="cancel">
                <svg-icon icon-class="close1" class-name="svg"></svg-icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        cancel(){
            this.$parent.modelTech = false;
            this.canScroll()
        }
    }
}
</script>

<style lang="scss" scoped>
.tech{
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    overflow: auto;
    .tech_con{
        width: 61.25rem;
        height: 238.25rem;
        margin: 3rem auto 0;
        margin-bottom: 9.06rem;
        position: relative;
        .tech_con_hd{
            width: 100%;
            height: 33.75rem;
            background: url("../assets/coreAdvantage/techHeader.jpg");
            overflow: hidden;
            border-radius: 0.62rem 0.62rem 0 0;
            p:first-child{
                width:8.5rem;
                height:3rem;
                font-size:2.12rem;
                font-weight:600;
                color:#fff;
                margin: 14.44rem auto 0;
            }
            p:nth-child(2){
                width: 17rem;
                height: 1.37rem;
                font-size: 1rem;
                font-weight:400;
                color:#fff;
                margin: 0.5rem auto 0;
            }
        }
        .tech_con_cen1{
            width: 100%;
            height: 26.12rem;
            .tech_con_cen1_l,.tech_con_cen1_r{
                float: left;
                width: 50%;
                height: 100%;
            }
            .tech_con_cen1_l{
                background-color: #fff;
                p:first-child{
                    width:9.75rem;
                    height:2.31rem;
                    font-size:1.62rem;
                    font-weight:600;
                    color:rgba(0,0,0,1);
                    margin-top: 9.37rem;
                    margin-left: 7.19rem;
                }
                p:nth-child(2){
                    width:16.25rem;
                    height:3.69rem;
                    font-size:1rem;
                    font-weight:400;
                    color:#333333;
                    margin-left: 7.19rem;
                    margin-top: 1.44rem;
                    line-height: 2rem;
                }
            }
        }
        .tech_con_cen2{
            width: 100%;
            height: 25rem;
            .tech_con_cen2_l,.tech_con_cen2_r{
                float: left;
                width: 50%;
                height: 100%;
            }
            .tech_con_cen2_r{
                background-color: #fff;
                p:first-child{
                    width:9.75rem;
                    height:2.31rem;
                    font-size:1.62rem;
                    font-weight:600;
                    color:rgba(0,0,0,1);
                    margin-top: 9.37rem;
                    margin-left: 7.19rem;
                }
                p:nth-child(2){
                    width:16.25rem;
                    height:3.69rem;
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
    .tech_chose{
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