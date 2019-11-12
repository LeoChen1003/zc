<template>
    <div class="pro">
        <zcHeader></zcHeader>
        <div class="pro_title1">
            旗舰智厨产品
        </div>
        <div class="pro_con1">
            <div class="pro_con1_l">
                <div class="pro_con1_l_tag">旗舰</div>
                <p class="p1">“星级大厨”带你体验舌尖上的美味</p>
                <p class="p2">智能一拖三炒菜机</p>
                <p class="p3">智能一拖三炒菜机是高度集成优特智厨智能厨电技术，在行业率先实现自动喷投多种类型调料，同时满足中餐标准化和规模化的烹饪要求的智能炒菜设备。</p>
                <div class="pro_con1_l_btn">
                    <div class="pro_con1_l_btn_1">立即预约</div>
                    <div class="pro_con1_l_btn_2">
                        
                    </div>
                </div>
            </div>
            <div class="pro_con1_r">
                <img src="../assets/product/一拖三.jpg" alt="">
            </div>
        </div>
        <zcFooter></zcFooter>
    </div>
</template>

<script>
import zcHeader from '@/components/zcHeader.vue';
import zcFooter from '@/components/zcFooter.vue';
import '../styles/variables.scss';
export default {
    name: 'product',
    components:{
        zcHeader,
        zcFooter,
    }
}
</script>

<style lang="scss" scoped>
p{
    background:rgba(255,255,255,1);
}
.pro{
    width: 100%;
    height: 100%;
    background-color: #F8F9FB;
    .pro_title1{
        width: 8.25rem;
        height: 2rem;
        background-color: #000;
        color: #fff;
        line-height: 2rem;
        text-align: center;
        margin: 5.06rem auto 0;
        border-radius: 1rem;
        font-size: 0.87rem;
    }
    .pro_con1{
        width: 75rem;
        height:30rem;
        background: #fff;
        box-shadow:0px 10px 20px 0px rgba(5,21,44,0.02);
        border-radius:0.625rem;
        margin: 2rem auto 0;
        .pro_con1_l,.pro_con1_r{
            float: left;
            height: 100%;
        }
        .pro_con1_l{
            width: 40rem;
            position: relative;
            .pro_con1_l_tag{
                width:4.75rem;
                height:2rem;
                background:#2CC6C0;
                border-radius:10px 0px 10px 0px;
                color: #fff;
                text-align: center;
                line-height: 2rem;
                font-size: 0.875rem;
                font-weight: 600;
            }
            p{
                position: absolute;
                left: 5rem;
            }
            .p1{
                top: 6rem;
                width:13.25rem;
                height:1.25rem;
                font-size:0.87rem;
                font-weight:400;
                color:#333333;
            }
            .p2{
                top: 7.75rem;
                width:16rem;
                height:2.81rem;
                font-size:2rem;
                font-weight:600;
                color:rgba(0,0,0,1);
            }
            .p3{
                top: 11.62rem;
                width:28.82rem;
                height:3.38rem;
                font-size:0.87rem;
                font-weight:400;
                color:#333333;
            }
            .pro_con1_l_btn{
                position: absolute;
                top: 23.37rem;
                left: 5rem;
                .pro_con1_l_btn_1,.pro_con1_l_btn_2{
                    float: left;
                }
                .pro_con1_l_btn_1{
                    width: 7rem;
                    height: 2.625rem;
                    border-radius: 1.44rem;
                    background-color: #000;
                    font-size: 1rem;
                    color: #fff;
                    text-align: center;
                    line-height: 2.625rem;
                }
            }
        }
        .pro_con1_r{
            width: 35rem;
        }
    }
}
</style>