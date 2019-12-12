<template>
    <div class="aio">
        <div :style="isBuy?'filter:blur(20px)':''">
            <zcHeader :isWhite="isWhite"></zcHeader>
            <div class="aio_hd">
                <div>
                    <p>智能精炒一体机</p>
                    <div class="aio_hd_center">
                        <router-link to="/product/proAIO">概览</router-link>
                        <router-link to="/product/proAIO/proAIOTechSpecs">技术规格</router-link>
                    </div>
                    <div class="aio_hd_btn" @click="buy" :class="isShow1?'btn_show1':''">
                        立即预约
                    </div>
                </div>
                
            </div>
            <div class="aio_con1" :style="`height:${height1}px;`">
                <p>超级烹饪专家</p>
                <p>智能精炒一体机</p>
                <p>三合一体，中高级餐饮店的御用超级“厨神”</p>
                <div class="aio_con1_btn" @click="buy">
                    立即预约
                </div>
            </div>
            <div class="aio_con2" :style="`height:${height2}px;`">
                <div class="aio_con2_center">
                    <div class="aio_con2_d1">
                        <p>更丰富</p>
                        <p>高级定制菜谱</p>
                        <div><span>1000</span> 道</div>
                        <p>海量星级菜谱涵盖 8 大菜系</p>
                        <div>
                            <svg-icon icon-class="up1" class-name="up1"></svg-icon>
                        </div>
                    </div>
                    <div class="aio_con2_d2">
                        <p>更精准</p>
                        <p>复现星级厨师美味</p>
                        <div><span>99.9</span> %</div>
                        <p>精准投料智能控温还原菜肴</p>
                    </div>
                    <div class="aio_con2_d3">
                        <p>更前沿</p>
                        <p>智能人机交互提示</p>
                        <div><span>0</span> 基础</div>
                        <p>无门槛复制大厨烹饪行为</p>
                    </div>
                    <div class="aio_con2_d4">
                        <p>更便捷</p>
                        <p>火力智能自动调节</p>
                        <div><span>11</span> 级</div>
                        <p>精准控温包租多种烹饪需求</p>
                    </div>
                </div>     
            </div>
            <div class="aio_con3">
                <div class="aio_con3_center">
                <div class="aio_con3_title">智能精炒一体机</div>
                <p>精准复制，星级美味。</p>
                <p><span>·</span>海量定制化星厨菜谱，并支持自主录入 <br><span>·</span>调料智能精准测量，精准至0.1g<br><span>·</span>锅体嵌入式多点测温，蓝牙实时反馈精确到0.1秒<br><span>·</span>11级火力智能调节，满足多种菜品烹饪需求</p>
                <div class="aio_con3_txt1">
                    <p class="p1">0.1g</p>
                    <p class="p2">投料精准至</p>
                </div>
                <div class="aio_con3_txt2">
                    <p class="p1">0.1 秒</p>
                    <p class="p2">蓝牙反馈精准至</p>
                </div>
                <div class="aio_con3_txt3">
                    <p class="p1">11 级</p>
                    <p class="p2">火力调节</p>
                </div>
                <div class="aio_con3_pic">
                    <img src="../assets/product/AIO1.png" alt="">
                </div>
                </div>
            </div>
            <div class="aio_con4">
                <div class="aio_con4_center">
                <p class="aio_con4_p1">语音提示，操作便捷。</p>
                <p class="aio_con4_p2"><span>·</span>  全程语音提示，一秒上手，操作无难度<br><span>·</span> DIY自由烹饪与菜谱指导烹饪随心切换<br><span>·</span> 故障自诊提示</p>
                <div class="aio_con4_txt1">
                    <p>智能提示</p>
                    <p>0基础门槛</p>
                </div>
                <div class="aio_con4_txt2">
                    <p>故障自诊</p>
                    <p>操作无难度</p>
                </div>
                <div class="aio_con4_pic">
                    <img src="../assets/product/AIO2.png" alt="">
                </div>
                </div>
            </div>
            <div class="aio_con5">
                <div class="aio_con5_center">
                <p class="p1">外观时尚，潮流前沿。</p>
                <p class="p2"><span>·</span> 符合人体工学设计，两种灶台选择<br><span>·</span> 专属面板，可根据家居风格随心搭配<br><span>·</span> 电磁灶、调料机、油烟机、三合一体，有效提高空间利用率</p>
                <div class="d1">
                    <p>三合一体</p>
                    <p>电磁灶 + 调料机 + 油烟机</p>
                </div>
                <div class="d2">
                    <p>双灶台</p>
                    <p>平底锅 + 炒锅</p>
                </div>
                
                <div class="aio_con5_pic">
                    <img src="../assets/product/AIO3.png" alt="">
                </div></div>
            </div>
            <div class="aio_con6">
                <div class="aio_con6_center">
                <p class="p1">贴心设计，享健康下厨体验。</p>
                <p class="p2"><span>·</span> 油烟机、电磁灶联动，一键开启<br><span>·</span> 优质控烟、近吸直排，油烟速排不拐弯</p>
                <div class="d">
                    <p>优质控烟</p>
                    <p>油烟速排</p>
                </div>
                </div>
                <div class="aio_con6_pic">
                    <img src="../assets/product/AIO4.png" alt="">
                </div>
            </div>
            <div class="aio_con7">
                <div class="aio_con7_center">
                <div class="aio_con7_title">智能大滚筒炒菜机</div>
                <p class="p1">APP 智能联动，远程同步菜谱。</p>
                <p class="p2">每道菜谱都可精准控制烹饪的火力曲线、翻炒速度与角度。酥软、适中、有嚼劲，不同口感，不同烹饪方式。自定义菜谱的口味与口感，同步最新营养菜谱，APP 端统统意见搞定，开启智能数据厨房。</p>
                <div class="d1">
                    <p>DIY 菜谱</p>
                    <p>自定义修改口味与口感</p>
                </div>
                <div class="d2">
                    <p>自定义烹饪</p>
                    <p>自定义修改翻炒方式</p>
                </div>
                </div>
                <div class="aio_con7_pic">
                    <svg-icon icon-class="productHd" class-name="con7_svg"></svg-icon>
                    <img src="../assets/product/phone1.png" alt="">
                </div>
            </div>
            <div class="aio_con8">
                <div class="aio_con8_center">
                <p class="p1">不止是一台厨具，更是一名星级大厨。</p>
                <p class="p2">海量云菜谱实时更新，连接网络后，APP端还有多种烹饪菜单键选择，支持自定义分组。从火辣的川湘菜到清鲜美味的南方江浙菜肴，均可简单完成，菜谱涵盖8大菜系，配合智能语音提示，零基础无门槛，不用调温不用投料，只需简单跟着提示投入主食材，便可让你使用一台厨具就能享用20名不同类型大厨的美味。</p>
                <div class="d1">
                    <p>实时更新</p>
                    <p>海量云菜谱</p>
                </div>
                <div class="d2">
                    <p>＞1000道</p>
                    <p>理论菜谱支持</p>
                </div>
                <div class="d3">
                    <p>8大菜系</p>
                    <p>菜谱涵盖</p>
                </div>
                </div>
                <div class="aio_con8_pic">
                    <img src="../assets/product/phone2.png" alt="">
                </div>
            </div>
            <div class="aio_con9" :style="`height:${height2}px;`">
                <div class="aio_con9_btn" @click="specs">
                    <img src="../assets/product/addWhite.png" alt="">
                    <span>了解参数明细</span>
                </div>
            </div>
        </div>
        <transition name="fade">
            <buyConsult v-if="isBuy"></buyConsult>
        </transition>
        <zcFooter></zcFooter>
    </div>
</template>

<script>
import { mapState } from "vuex";
import zcHeader from '@/components/zcHeader.vue';
import zcFooter from '@/components/zcFooter.vue';
import '../styles/variables.scss';
import buyConsult from '@/components/buyConsult.vue';
export default {
    name: 'proAIO',
    metaInfo:{
      title:'智能精炒一体机 - 优特智厨',
      meta:[{
        name:'description',
        content:'超级烹饪专家 智能精炒一体机 三合一体，中高级餐饮店的御用超级“厨神”'
      }]
    },
    components:{
        zcHeader,
        zcFooter,
        buyConsult
    },
    data(){
        return{
            isWhite: false,
            isBuy:false,
            isShow1:false,
            height1: 0,
            height2: 0
        }
    },
    computed: {
        ...mapState({
        windowWidth: "windowWidth"
        })
    },
    mounted(){
        this.height1 = document.documentElement.clientWidth/(1680/843);
        this.height2 = document.documentElement.clientWidth/(1680/292);
        this.canScroll()
        window.onscroll = ()=>{
            var top = document.documentElement.scrollTop;
            if(top<795){
                this.isShow1 = false;
            }else{
                this.isShow1 = true;
            }
        }
    },
    methods:{
        buy(){
            this.isBuy = true;
            this.noScroll()
        },
        specs(){
            this.$router.push("/product/proAIO/proAIOTechSpecs");
        }
    },
    watch:{
        windowWidth(){
            this.height1 = document.documentElement.clientWidth/(1680/843);
            this.height2 = document.documentElement.clientWidth/(1680/292);
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_show1{
    display: block !important;
}
.aio{
    width: 100%;
    overflow: hidden;
    .aio_hd{
        width: 100%;
        height: 3rem;
        border-top: 1px solid #000;
        background-color: #000;
        position: fixed;
        top: 3rem;
        z-index: 3;
        div:first-child{
            width: 61rem;
            margin: 0 auto;
            height: 100%;
            position: relative;
            p:first-child{
                float: left;
                width:8.75rem;
                height:1.25rem;
                font-size:0.87rem;
                font-weight:400;
                color:#fff;
                margin-top: 0.88rem;
            }
        }
        
        .aio_hd_center{
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
                font-weight:600;
            }
            a:nth-child(2){
                font-weight: 400;
                margin-left: 1.5rem;
            }
        }
        .aio_hd_btn{
            display: none;
            float: left;
            width:6.5rem;
            height:2rem;
            position: absolute;
            right: 0;
            background:rgba(44,198,192,1);
            border-radius:1rem;
            font-size:0.88rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:2rem;
            text-align: center;
            // margin-left: 19%;
            margin-top: 0.5rem;
            cursor: pointer;
        }
    }
    .aio_con1{
        width:100%;
        // height:52.69rem;
        background: url("../assets/product/aioHd.jpg");
        background-size: cover;
        background-position: center center;
        overflow: hidden; 
        margin-top: 3rem;
        p:first-child{
            text-align: center;
            font-size:0.88rem;
            font-weight:400;
            color:rgba(136,136,136,1);
            margin: 4.7% auto 0;
        }
        p:nth-child(2){
            text-align: center;
            font-size:2.5rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            margin: 0.5rem auto 0;
        }
        p:nth-child(3){
            text-align: center;
            font-size:0.88rem;
            font-weight:400;
            color:rgba(136,136,136,1);
            margin: 1rem auto 0;
        }
        .aio_con1_btn{
            width:9rem;
            height:2.63rem;
            background:rgba(44,198,192,1);
            border-radius:1.44rem;
            border:2px solid rgba(44,198,192,1);
            margin: 3rem auto 0;
            margin-top: 2.8%;
            font-size:1rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:2.63rem;
            text-align: center;
            cursor: pointer;
        }
    }
    .aio_con2{
        width: 100%;
        // height: 18.25rem;
        background: url("../assets/product/dataBack1.jpg");
        background-size: cover;
        overflow: hidden;
        .aio_con2_center{
            width: 57rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            // margin-top: 4rem;
            height: 100%;
        }
        .aio_con2_d1,.aio_con2_d2,.aio_con2_d3,.aio_con2_d4{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 10.25rem;
            p:first-child{
                font-size:1.25rem;
                font-weight:600;
                color:rgba(255,255,255,1);
                margin: 0 auto;
            }
            p:nth-child(2){
                font-size:0.88rem;
                font-weight:400;
                color:rgba(153,153,153,1);
                margin:0.5rem auto 0;
            }
            div:nth-child(3) {
                font-size: 0.88rem;
                color: #fff;
                span{
                    font-family: mFont;
                    font-size: 3.75rem;
                    font-weight: 600;
                }
            }
            p:nth-child(4){
                font-size:0.88rem;
                font-weight:400;
                color:rgba(153,153,153,1);
                margin: 0.19rem auto 0;
            }
        }
        .aio_con2_d1{
            position: relative;
            div:nth-child(5){
                position: absolute;
                top: 4.5rem;
                right: 1.2rem;
                width: 0.87rem;
                height: 0.87rem;
                .up1{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .aio_con3{
        width:100%;
        height:58.75rem;
        background:linear-gradient(180deg,rgba(33,33,35,1) 0%,rgba(12,14,16,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        overflow: hidden;
        position: relative;
        .aio_con3_center{
            width: 61rem;
            margin:  0 auto;
        }
        .aio_con3_title{
            width:7.13rem;
            height:1.5rem;
            background:rgba(44,198,192,1);
            border-radius:0.19rem;
            font-size:0.88rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:1.5rem;
            text-align: center;
            margin-top: 11.37rem;
        }
        p:nth-child(2){
            font-size:2.5rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            margin-top: 1.63rem;
            
        }
        p:nth-child(3){
            width:33.75rem;
            height:8rem;
            font-size:1rem;
            font-weight:400;
            color:#888888;
            line-height:2rem;
            
            margin-top: 2.5rem;
            span{
                color: rgba(44,198,192,1);
                margin-right: 0.5rem;
            }
        }
        .aio_con3_txt1,.aio_con3_txt2,.aio_con3_txt3{
            margin-top: 3.13rem;
            
            float: left;
            .p1{
                height: 3.13rem;
                font-size:2.25rem;
                font-weight:600;
                color:rgba(44,198,192,1);
            }
            .p2{
                font-size:1rem;
                font-weight:400;
                color:rgba(136,136,136,1);
                margin-top: 0.5rem;
                margin-left: 0rem;
            }
        }
        .aio_con3_txt2,.aio_con3_txt3{
            margin-left: 5.88rem;
        }
        .aio_con3_pic{
            position: absolute;
            width: 33.75rem;
            height: 35.56rem;
            // top: 28.5rem;
            bottom: 0;
            // right: 9%;
            margin-left: 39.06rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .aio_con4{
        width: 100%;
        position: relative;
        height:58.75rem;
        background:linear-gradient(180deg,rgba(30,31,33,1) 0%,rgba(4,5,6,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        overflow: hidden;
        .aio_con4_center{
            width: 57rem;
            margin:  0 auto;
        }
        .aio_con4_p1{
            font-size:2.5rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            text-align: right;
            margin-top: 27.5rem;
        }
        .aio_con4_p2{
            width:18.63rem;
            height:6rem;
            font-size:1rem;
            font-weight:400;
            color:#888888;
            line-height:2rem;
            margin-left: 56%;
            margin-top: 2.5rem;
            span{
                color: rgba(44,198,192,1);
            }
        }
        .aio_con4_txt1,.aio_con4_txt2{
            margin-left: 56%;
            margin-top: 3rem;
            float: left;
            p:first-child{
                font-size:2.25rem;
                font-weight:600;
                color:rgba(44,198,192,1);
            }
            p:nth-child(2){
                font-size:1rem;
                font-weight:400;
                color:rgba(136,136,136,1);
                margin-top: 0.5rem;
            }
        }
        .aio_con4_txt2{
            margin-left: 6.19rem;
        }
        .aio_con4_pic{
            position: absolute;
            width: 49.19rem;
            height: 41.44rem;
            top: 0;
            left: 16.8%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .aio_con5{
        width:100%;
        height:58.75rem;
        overflow: hidden;
        position: relative;
        background:linear-gradient(180deg,rgba(5,7,8,1) 0%,rgba(30,31,33,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        .aio_con5_center{
            width: 61rem;
            margin:  0 auto;
        }
        .p1{
            font-size:2.5rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            margin-top: 15rem;
            // 
        }
        .p2{
            width:52.5rem;
            height:6rem;
            font-size:1rem;
            font-weight:400;
            color: #888888;
            line-height:2rem;
            margin-top: 2.5rem;
            
            span{
                color:rgba(44,198,192,1);
            }
        }
        .d1,.d2{
            float: left;
            margin-top: 3rem;
            p:first-child{
                font-size:2rem;
                font-weight:600;
                color:rgba(44,198,192,1);
            }
            p:nth-child(2){
                font-size:1rem;
                font-weight:400;
                color:rgba(136,136,136,1);
                margin-top: 0.38rem;
            }
        }
        .d2{
            margin-left: 6rem;
        }
        .aio_con5_pic{
            position: absolute;
            width: 42.94rem;
            height: 42.69rem;
            // top: 43.3%;
            bottom: 0;
            // right: 5.56rem;
            margin-left: 30.63rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .aio_con6{
        width:100%;
        height:58.75rem;
        overflow: hidden;
        position: relative;
        background:linear-gradient(180deg,rgba(5,7,8,1) 0%,rgba(30,31,33,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        .aio_con6_center{
            width: 61rem;
            margin:  0 auto;
        }
        .p1{
            font-size:2.5rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            margin-top: 11.25rem;
            
        }
        .p2{
            width:52.5rem;
            height:4rem;
            font-size:1rem;
            font-weight:400;
            color: #888888;
            line-height:2rem;
            
            margin-top: 2.5rem;
            span{
                color:rgba(44,198,192,1);
            }
        }
        .d{
            
            margin-top: 3rem;
            p:first-child{
                font-size:2.25rem;
                font-weight:600;
                color:rgba(44,198,192,1);
            }
            p:nth-child(2){
                font-size:1rem;
                font-weight:400;
                color:rgba(136,136,136,1);
                margin-top: 0.38rem;
            }
        }
        .aio_con6_pic{
            width: 100%;
            height: 32.5rem;
            position: absolute;
            // top: 26.25rem;
            bottom: 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .aio_con7{
        width: 100%;
        height: 58.75rem;
        overflow: hidden;
        position: relative;
        background:linear-gradient(180deg,rgba(7,47,51,1) 0%,rgba(30,31,32,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        .aio_con7_center{
            width: 61rem;
            margin:  0 auto;
        }
        .aio_con7_title{
            margin-top: 7.5rem;
            
            width:8rem;
            height:1.5rem;
            background:rgba(44,198,192,1);
            border-radius:0.19rem;
            font-size:0.88rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:1.5rem;
            text-align: center;
        }
        .p1{
            // width:18.32rem;
            height:7rem;
            font-size:2.5rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height:3.5rem;
            margin-top: 1.63rem;
            
        }
        .p2{
            width:33.75rem;
            height:6rem;
            font-size:1rem;
            font-weight:400;
            color:rgba(136,136,136,1);
            line-height:2rem;
            
            margin-top: 2rem;
        }
        .d1,.d2{
            float: left;
            
            margin-top: 2.75rem;
            p:first-child{
                font-size:2.25rem;
                font-weight:600;
                color:rgba(44,198,192,1);
            }
            p:nth-child(2){
                font-size:1rem;
                font-weight:400;
                color:rgba(136,136,136,1);
                margin-top: 0.5rem;
            }
        }
        .d2{
            margin-left: 3.88rem;
        }
        .con7_svg {
            width: 75.13rem;
            // width: 71.5%;
            height: 23.75rem;
            // height: 40.4%;
            // margin-top: 1.13rem;
            position: absolute;
            bottom: 0;
            // left: 6.8rem;
            // left: 50%;
            // transform: translateX(-50%);
        }
        .aio_con7_pic {
        // width: 23.56rem;
        // // width: 22.4%;
        // // height: 54%;
        // height: 31.75rem;
        width: 75.13rem;
        // width: 71.5%;
        height: 23.75rem;
        margin: 0 auto;
        position: absolute;
        // top: 28.56rem;
        // right: 24.93rem;
        bottom: 0;
        // right: 18.57%;
        left: 50%;
        transform: translateX(-50%);
        img{
            z-index: 2;
            width: 23.56rem;
            height: 31.75rem;
            position: absolute;
            right: 4.56rem;
            bottom: 0;
        }
        }
        }
    .aio_con8{
        width:100%;
        height:58.75rem;
        overflow: hidden;
        position: relative;
        background:linear-gradient(180deg,rgba(7,47,51,1) 0%,rgba(30,31,32,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        .aio_con8_center{
            width: 61rem;
            margin:  0 auto;
        }
        .p1{
            margin-top: 7.5rem;
            
            font-size:2.5rem;
            font-weight:600;
            color:rgba(255,255,255,1);
        }
        .p2{
            margin-top: 2.5rem;
            
            width:52.5rem;
            height:6rem;
            font-size:1rem;
            font-weight:400;
            color:rgba(136,136,136,1);
            line-height:2rem;
        }
        .d1,.d2,.d3{
            margin-top: 3rem;
            
            float: left;
            p:first-child{
                font-size:2.25rem;
                font-weight:600;
                color:rgba(44,198,192,1);
            }
            p:nth-child(2){
                font-size:1rem;
                font-weight:400;
                color:rgba(136,136,136,1);
                margin-top: 0.5rem;
            }
        }
        .d2{
            margin-left: 7.31rem;
        }
        .d3{
            margin-left: 8.56rem;
        }
        .aio_con8_pic{
            width: 1040px;
            // margin: 0 auto;
            // margin-top: 14.2rem;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .aio_con9{
        width: 100%;
        height: 18.25rem;
        background: url("../assets/product/AIOBottom.jpg");
        background-size: cover;
        overflow: hidden;
        .aio_con9_btn{
            width:9.38rem;
            height:2rem;
            background:rgba(255,255,255,0);
            border-radius:1rem;
            border:1px solid rgba(255,255,255,1);
            // margin: 8.13rem auto 0;
            top: 50%;
            left: 50%;
            margin-left: -4.69rem;
            margin-top: -1rem;
            position: relative;
            cursor: pointer;
            img{
                width: 1.12rem;
                height: 1.12rem;
                margin-left: 1.25rem;
                margin-top: 0.44rem;
            }
            span{
                height:1.25rem;
                font-size:0.88rem;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:#fff;
                line-height:2rem;
                position: absolute;
                left: 2.63rem;
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