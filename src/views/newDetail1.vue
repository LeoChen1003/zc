<template>
    <div class="newDel">
        <zcHeader></zcHeader>
        <newHeader></newHeader>
        <div class="newDel_con">
            <div class="newDel_con_hd">
                <div class="newDel_con_hd_l">置顶</div>
                <p class="newDel_con_hd_r">2019年09月19日</p>
            </div>
            <p class="newDel_con_title">优特智能炒菜机 开启中餐标准化时代</p>
            <div class="line"></div>
            <p class="newDel_con_p p1">近年来，餐饮行业陷入三高一低的困境，面对行业不断洗牌，餐饮企业一次次陷入困局。优特智厨一直在思考，如何通过智能化设备，直击餐饮行业痛点，解决问题。</p>
            <div class="newDel_con_pic1"></div>
            <p class="newDel_con_p p2">优特智厨历时 12 年、斥资 2 亿，自主研发出一套可录入菜谱、100%还原厨艺口味的智能厨电系统，配套推出了可使炒菜过程全自动化的商用智能炒菜机，致力于解决餐饮界的各大难题，实现中餐标准化。</p>
            <div class="newDel_con_pic2"></div>
            <p class="newDel_con_p p3">优特智厨打造智慧厨房，系统智能协调订单与生产管理，通过系统智能协调订单与生产管理，根据订单与智能菜谱，自动将订单分配到不同的智能设备中，工单合并实现更高效的后厨运作。同时，实时监控全套智能设备工作状态，远程云平台进行故障诊断，结合设备维护团队做到故障预防和提前处理，降低风险成本。</p>
            <p class="newDel_con_p p4">全套智能厨电设备能耗大数据接入厨房大脑进行能效统计分析管理、优化后厨能效成本。同时，实时监控全套智能设备工作状态，远程云平台进行故障诊断，结合设备维护团队做到故障预防和提前处理，降低风险成本。</p>
            <div class="newDel_con_pic3"></div>
            <p class="newDel_con_p p5">此外，优特智厨邀请星级酒店主厨录制菜谱，通过智能设备高度还原，让更多人花更少的钱，吃得更美味，更健康。同时，大厨可自行录入菜谱并共享，根据需求快速复制到各门店，确保各门店口味统一。</p>
            <div class="newDel_con_pic4"></div>
            <p class="newDel_con_p p6">中控主机配备触控显示器，操作台上有菜谱烹饪等选项可供选择，选择指定菜谱开始任务后，智能灶将按照指定操作进行智能烹饪，实现从预热、炒菜、加入调料、出锅等整个过程的全自动化。无论是产品还是技术本身，优特智能炒菜机作为智慧厨电的引领者无疑是走在行业前列。</p>
            <div class="line1"></div>
        </div>
        <zcFooter></zcFooter>
        <router-view></router-view>
    </div>
</template>

<script>
import zcHeader from '@/components/zcHeader.vue';
import zcFooter from '@/components/zcFooter.vue';
import newHeader from '@/components/newHeader.vue';
import '../styles/variables.scss';
export default {
    name: 'newDetail1',
    components:{
        zcHeader,
        zcFooter,
        newHeader
    }
}
</script>

<style lang="scss" scope>
.newDel{
    .newDel_con{
        width: 50rem;
        height: 200rem;
        margin: 0 auto;
        .newDel_con_hd{
            margin-top: 5.62rem;
            width: 100%;
            height: 2rem;
            .newDel_con_hd_l{
                float: left;
                width:4rem;
                height:2rem;
                background:rgba(44,198,192,1);
                border-radius:10px 0px 10px 0px;
                text-align: center;
                line-height: 2rem;
                color: #fff;
            }
            .newDel_con_hd_r{
                float: left;
                color: #626262;
                margin-left: 16rem;
                font-size: 1.12rem;
            }
        }
        .newDel_con_title{
            width: 40.87rem;
            color: #161616;
            font-size: 2.5rem;
            margin: 0 auto;
            margin-top: 2.75rem;
        }
        .line,.line1{
            width: 100%;
            height: 1px;
            background-color: #d4d4d4;
        }
        .line{
            margin-top: 2.25rem;
        }
        .line1{
            margin-top: 5.5rem;
        }
        .newDel_con_p{
            font-size: 1.25rem;
            color: #161616;
            font-weight: 300;
        }
        .p1{
            margin-top: 2.31rem;
        }
        .p2{
            margin-top: 2.25rem;
        }
        .p3{
            margin-top: 2.31rem;
        }
        .p4{
            margin-top: 0.75rem;
        }
        .p5{
            margin-top: 2.31rem;
        }
        .p6{
            margin-top: 2.31rem;
        }
        .newDel_con_pic1{
            width: 100%;
            height: 25rem;
            margin-top: 2.31rem;
            border: 1px solid #ccc;
        }
        .newDel_con_pic2{
            width: 100%;
            height: 33.25rem;
            margin-top: 2.44rem;
            border: 1px solid #ccc;
        }
        .newDel_con_pic3{
            width: 100%;
            height: 25.69rem;
            margin-top: 2.37rem;
            border: 1px solid #ccc;
        }
        .newDel_con_pic4{
            width: 100%;
            height: 33.25rem;
            margin-top: 2.31rem;
            border: 1px solid #ccc;
        }
    }
}
</style>