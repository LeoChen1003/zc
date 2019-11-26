<template>
    <div class="mach">
        <div class="mach_con">
            <div class="mach_con_hd">
                <p>智能配件</p>
                <p>全面打通餐饮产业链</p>
            </div>
            <div class="mach_con_cen1">
                <div class="mach_con_cen1_l">
                    <p>智能打菜机</p>
                    <p>无感支付快速结账，提高用户体验<br>减重式称重扣费，绝对公平按价取菜自动感应翻盖防逃单，保持食品卫生内嵌式加热系统维持菜温前后厅信息互通，实时插单加菜，提高管理效率</p>
                </div>
                <div class="mach_con_cen1_r">
                    <img src="../assets/coreAdvantage/machine1.jpg" alt="">
                </div>
            </div>
            <div class="mach_con_cen2">
                <div class="mach_con_cen2_l">
                    <img src="../assets/coreAdvantage/machine2.jpg" alt="">
                </div>
                <div class="mach_con_cen2_r">
                    <p>智能配送箱</p>
                    <p>蓝牙锁管控配送过程<br>解决食品安全卫生问题2~8℃ 保温保鲜长达12小时</p>
                </div>
            </div>
            <div class="mach_con_cen1">
                <div class="mach_con_cen1_l">
                    <p>智能取餐柜</p>
                    <p>热柜具备热菜保温功能<br>冷柜具备凉菜冷藏功能、净菜冷藏功能冷柜和热柜可级联、结合场景按需组合模块具备自动除菌功能支持多种送餐取餐方式</p>
                </div>
                <div class="mach_con_cen1_r">
                    <img src="../assets/coreAdvantage/machine3.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="mach_close" @click="cancel"></div>
    </div>
</template>

<script>
export default {
    methods:{
        cancel(){
            this.$router.push("/coreAdvantage");
        }
    }
}
</script>

<style lang="scss" scoped>
.mach{
    background-color: #000;
    width: 100%;
    overflow: hidden;
    .mach_con{
        width: 60rem;
        height: 111rem;
        margin: 3rem auto 0;
        overflow: hidden;
        border-radius: 0.62rem;
        .mach_con_hd{
            width: 100%;
            height: 33.75rem;
            background: url("../assets/coreAdvantage/machineHeader.jpg");
            overflow: hidden;
            p:first-child{
                width:8.5rem;
                height:3rem;
                font-size:2.12rem;
                font-weight:600;
                color:#fff;
                margin: 14.44rem auto 0;
            }
            p:nth-child(2){
                width:9rem;
                height:1.38rem;
                font-size:1rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                margin: 0.5rem auto 0;
                line-height: 2rem;
            }
        }
        .mach_con_cen1{
            width:100%;
            height: 26.12rem;
            .mach_con_cen1_l,.mach_con_cen1_r{
                width: 50%;
                height: 100%;
                float: left;
            }
            .mach_con_cen1_l{
                background-color: #fff;
                p:first-child{
                    width:8.12rem;
                    height:2.31rem;
                    font-size:1.62rem;
                    font-weight:600;
                    color:rgba(0,0,0,1);
                    margin-top: 6.44rem;
                    margin-left: 4.68rem;
                }
                p:nth-child(2){
                    width:21.37rem;
                    height:10.19rem;
                    font-size:1rem;
                    font-weight:600;
                    color:#333333;
                    margin-left: 4.68rem;
                    margin-top: 1.44rem;
                    line-height: 2rem;
                }
            }
        }
        .mach_con_cen2{
            width:100%;
            height: 25rem;
            .mach_con_cen2_l,.mach_con_cen2_r{
                width: 50%;
                height: 100%;
                float: left;
            }
            .mach_con_cen2_r{
                background-color: #fff;
                p:first-child{
                    width:8.12rem;
                    height:2.31rem;
                    font-size:1.62rem;
                    font-weight:600;
                    color:rgba(0,0,0,1);
                    margin-top: 7.87rem;
                    margin-left: 6.25rem;
                }
                p:nth-child(2){
                    width:16.25rem;
                    height:5.38rem;
                    font-size:1rem;
                    font-weight:600;
                    color:#333333;
                    margin-left: 6.25rem;
                    margin-top: 1.44rem;
                    line-height: 2rem;
                }
            }
        }
    }
    .mach_close{
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
    .mach_close:before,.mach_close:after{
        position: absolute;
        content: ' ';
        height: 1.81rem;
        width: 0.13rem;
        left: 1.5rem;
        top: 0.56rem;
        background-color: #fff;
    }
    .mach_close:before{
        transform: rotate(45deg);
    }
    .mach_close:after{
        transform: rotate(-45deg);
    }
}
</style>