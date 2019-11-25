<template>
    <div class="product">
        <zcHeader :tab1="tab"></zcHeader>
        <div class="product_header">
            <p @click="jump(0)">旗舰智厨产品</p>
            <p>···</p>
            <p @click="jump(1)">更多智厨产品</p>
            <p>···</p>
            <p @click="jump(2)">其他智能产品</p>
        </div>
        <div class="pro">
            <div class="pro_title1 d_jump" ref="pro1">
                旗舰智厨产品
            </div>
            <div class="pro_con1">
                <div class="pro_con1_l">
                    <div class="pro_con1_l_tag">旗舰</div>
                    <p class="p1">“星级大厨”带你体验舌尖上的美味</p>
                    <p class="p2" @click="proCai">智能一拖三炒菜机</p>
                    <p class="p3">智能一拖三炒菜机是高度集成优特智厨智能厨电技术，在行业率先实现自动喷投多种类型调料，同时满足中餐标准化和规模化的烹饪要求的智能炒菜设备。</p>
                    <div class="pro_con1_l_btn">
                        <div class="pro_con1_l_btn_1" @click="buy">立即预约</div>
                        <div class="pro_con1_l_btn_2" @click="proCai">
                            <img src="../assets/product/addBlack.png" alt="">
                            <p>了解更多</p>
                        </div>
                    </div>
                </div>
                <div class="pro_con1_r">
                    <img src="../assets/product/ODT.jpg" alt="">
                </div>
            </div>
            <div class="pro_con2">
                <div class="pro_con2_l">
                    <div class="pro_con2_l_tag">旗舰</div>
                    <p class="p1">超级烹饪专家</p>
                    <p class="p2" @click="proAIO">智能精炒一体机</p>
                    <p class="p3">智能精炒一体机是优特智厨为小份精炒用户量身打造的“超级烹饪专家”。既能通过对温度、调料的智能控制实现菜品口味100%的复刻，又能实现人人都能当大厨的愿望。</p>
                    <div class="pro_con2_l_btn">
                        <div class="pro_con2_l_btn_1" @click="buy">立即预约</div>
                        <div class="pro_con2_l_btn_2" @click="proAIO">
                            <img src="../assets/product/addWhite.png" alt="">
                            <p>了解更多</p>
                        </div>
                    </div>
                </div>
                <div class="pro_con2_r">
                    <img src="../assets/product/AIO.jpg" alt="">
                </div>
            </div>
            <div class="pro_title2 d_jump" ref="pro2">
                其他智厨产品
            </div>
            <div class="pro_con3">
                <div class="pro_con3_l">
                    <p>智能多头平面炉</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>海量智能菜谱，并支持更新</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>火力与时间的精准掌控</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>防干烧，防漏电，安全可靠</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-CL02-3.5X4<br>
                        功率: 3.5kW*4<br>
                        电源电压: 380V / 50Hz<br>
                        整机尺寸: 800*900*(810+160)mm<br>
                        防水等级:  IPX4 <br>
                        辅助配置: 8档 (可定制)
                    </div>
                    <div class="pro_con3_pic">
                        <img src="../assets/product/pro1.png" alt="">
                    </div>
                </div>
                <div class="pro_con3_r">
                    <p>智能单头凹面炒炉</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>智能菜谱，自动控制</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>大火力，出品快</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>机身可拆卸，易清洁</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-CL01-5<br>
                        功率: 5kW<br>
                        电源电压: 220V<br>
                        整机尺寸: 400*750*950mm<br>
                        锅口直径: 340mm<br>
                        屏幕尺寸: 5英寸彩色液晶屏<br>
                        辅助配置: 蓝牙测温锅，400/600柜座
                    </div>
                    <div class="pro_con3_pic1">
                        <img src="../assets/product/pro2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pro_con3">
                <div class="pro_con3_l">
                    <p>智能单头单尾凹面炒炉</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>高清彩色大屏 + 语言实时提醒</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>火力与时间的精准掌控</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>大火力，出品快</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-CL02-3.5X4<br>
                        功率: 3.5kW*4<br>
                        电源电压: 380V / 50Hz<br>
                        整机尺寸: 800*900*(810+160)mm<br>
                        防水等级:  IPX4 <br>
                        辅助配置: 8档 (可定制)
                    </div>
                    <div class="pro_con3_pic">
                        <img src="../assets/product/pro3.png" alt="">
                    </div>
                </div>
                <div class="pro_con3_r">
                    <p>智能海鲜蒸柜</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>黄金温度曲线匹配微压蒸制</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>独立温控，实时探测食物温度</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>防干烧，防漏电，智能安全</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-ZG01-25<br>
                        功率: 30kW<br>
                        屯源屯圧: 380V/50Hz<br>
                        整机尺寸: 1270* 800*1750mm<br>
                        温度凋整范围: 常温~102℃<br>
                        防水等級: IPX4<br>
                        輔助配置: 2+2+4盘<br>
                    </div>
                    <div class="pro_con3_pic1">
                        <img src="../assets/product/pro4.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pro_con3">
                <div class="pro_con3_l">
                    <p>智能蒸饭柜</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>独特温度曲线，微压蒸制更出味</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>定制化智能菜谱，蒸饭更美味</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>水量控制防干烧，智能安全</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-ZF01-15<br>
                        功率: 15kW<br>
                        电源电压: 380V / 50Hz<br>
                        整机尺寸: 750* 800*1870mm<br>
                        温度调整范围: 常温~100℃<br>
                        防水等级: IPX4<br>
                        辅助配置: 蒸盘*12
                    </div>
                    <div class="pro_con3_pic1">
                        <img src="../assets/product/pro5.png" alt="">
                    </div>
                </div>
                <div class="pro_con3_r">
                    <p>智能蒸点炉</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>海量菜谱可选，一键轻松操作</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>多种类型混蒸，到时分类提醒</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>快速上蒸汽，高效节能</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-ZD01-18<br>
                        功率: 18kW<br>
                        电源电压: 380V / 50Hz<br>
                        整机尺寸: 800*900*(810+160)mm<br>
                        温度调整范围: 常温~100℃<br>
                        防水等级: IPX4<br>
                        辅助配置: 七星孔
                    </div>
                    <div class="pro_con3_pic">
                        <img src="../assets/product/pro6.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pro_con3">
                <div class="pro_con3_l">
                    <p>智能烤箱</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>智能菜谱，一键烘焙</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>行业领先算法与腔体智能温控设计</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>接入管理云平台，高效运维设备</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-KX01-4 .5XN<br>
                        功率: 4.5kW/单层<br>
                        电源电压: 220V(单层) 380V(两层/三层)<br>
                        整机尺寸: 1370*830*420mm<br>
                        屏幕尺寸: 10英寸彩 色液晶屏<br>
                        辅助配置: 单层、两层、三层可组合
                    </div>
                    <div class="pro_con3_pic1">
                        <img src="../assets/product/pro7.png" alt="">
                    </div>
                </div>
                <div class="pro_con3_r">
                    <p>智能炸炉</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>海量智能菜谱</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>精准控温，分段定时</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>自动滤油，一键循环过滤</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-ZL01-84 5KW<br>
                        功率: 8kW<br>
                        电源电压: 380V / 50Hz<br>
                        整机尺寸: 700*900*(810+ 160)mm<br>
                        温度调整范围: 室温 ~200°C<br>
                        防水等级: IPX4<br>
                        辅助配置: 滤油车
                    </div>
                    <div class="pro_con3_pic">
                        <img src="../assets/product/pro8.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pro_con3">
                <div class="pro_con3_l">
                    <p>智能煮面机</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>机械臂自动升降</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>可同时烹制不同种类美食</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>自动水量控制，智能安全</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-ZM01-12<br>
                        功率: 12kW<br>
                        电源电压: 380V / 50Hz<br>
                        整机尺寸: 600*900*(810+160)mm<br>
                        温度调整范围: 室温~100℃<br>
                        防水等级: IPX4<br>
                        辅助配置: 煮面篮*6
                    </div>
                    <div class="pro_con3_pic1">
                        <img src="../assets/product/pro9.png" alt="">
                    </div>
                </div>
                <div class="pro_con3_r">
                    <p>智能矮汤炉</p>
                    <div class="pro_con3_l_c1">
                        <div>1</div>
                        <p>最佳火候曲线匹配</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c2">
                        <div>2</div>
                        <p>灯光/语音智能提醒</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_c3">
                        <div>3</div>
                        <p>自动控制水量，智能安全</p>
                    </div>
                    <br>
                    <div class="pro_con3_l_det">
                        型号: UDOT-TL01-15<br>
                        功率: 15kW<br>
                        屯源屯圧: 380V / 50Hz<br>
                        整机尺寸: 650*730*(500+ 700)mm<br>
                        屏幕尺寸: 5英寸彩色液晶屏<br>
                        锅口直径: 500mm<br>
                        防水等級: IPX4
                    </div>
                    <div class="pro_con3_pic">
                        <img src="../assets/product/pro10.png" alt="">
                    </div>
                </div>
            </div>
            <div class="pro_title3 d_jump" ref="pro3">
                其他智能产品
            </div>
            <div class="pro_con4">
                <div class="pro_con4_l">
                    <p>优特智能打菜机</p>
                    <div class="pro_con4_l_c1">
                        <div>1</div>
                        <p>无感支付快速结账，提高用户体验</p>
                    </div>
                    <br>
                    <div class="pro_con4_l_c2">
                        <div>2</div>
                        <p>减重式称重扣费，绝对公平按价取菜</p>
                    </div>
                    <br>
                    <div class="pro_con4_l_c3">
                        <div>3</div>
                        <p>自动感应翻盖防逃单，保持食品卫生</p>
                    </div>
                    <br>
                    <div class="pro_con4_l_c4">
                        <div>4</div>
                        <p>内嵌式加热系统维持菜温</p>
                    </div>
                    <br>
                    <div class="pro_con4_l_c5">
                        <div>5</div>
                        <p>前后厅信息互通，实时插单加菜，提高管理效率</p>
                    </div>
                </div>
                <div class="pro_con4_r">
                    <img src="../assets/product/pro11.jpg" alt="">
                </div>
                <div class="pro_con4_icon">
                    <img src="../assets/home/addBlack2.png" alt="">
                </div>
            </div>
            <div class="pro_con5">
                <div class="pro_con5_l">
                    <p>优特配送箱</p>
                    <div class="pro_con5_l_c1">
                        <div>1</div>
                        <p>蓝牙锁管控配送过程</p>
                    </div>
                    <br>
                    <div class="pro_con5_l_c2">
                        <div>2</div>
                        <p>解决食品安全卫生问题</p>
                    </div>
                    <br>
                    <div class="pro_con5_l_c3">
                        <div>3</div>
                        <p>2~8℃ 保温保鲜长达12小时</p>
                    </div>
                    <div class="pro_con5_pic">
                        <img src="../assets/product/pro12.jpg" alt="">
                    </div>
                    <div class="pro_con5_icon">
                        <img src="../assets/home/addBlack2.png" alt="">
                    </div>
                </div>
                <div class="pro_con5_r">
                    <p>优特智能取餐柜</p>
                    <div class="pro_con5_l_c1">
                        <div>1</div>
                        <p>热柜具备热菜保温功能</p>
                    </div>
                    <br>
                    <div class="pro_con5_l_c2">
                        <div>2</div>
                        <p>冷柜具备凉菜冷藏功能、净菜冷藏功能</p>
                    </div>
                    <br>
                    <div class="pro_con5_l_c3">
                        <div>3</div>
                        <p>冷柜和热柜可级联、结合场景按需组合模块</p>
                    </div>
                    <br>
                    <div class="pro_con5_l_c4">
                        <div>4</div>
                        <p>具备自动除菌功能</p>
                    </div>
                    <br>
                    <div class="pro_con5_l_c5">
                        <div>5</div>
                        <p>支持多种送餐取餐方式</p>
                    </div>
                    <div class="pro_con5_pic1">
                        <img src="../assets/product/pro13.jpg" alt="">
                    </div>
                    <div class="pro_con5_icon">
                        <img src="../assets/home/addBlack2.png" alt="">
                    </div>
                </div>
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
    },
    data(){
        return {
            tab: 0
        }
    },
    methods:{
        proCai(){
            this.$router.push("/product/proCai");
        },
        proAIO(){
            this.$router.push("/product/proAIO");
        },
        buy(){
            this.$router.push("/buyConsult");
        },
        jump(i){
            let jump = document.getElementsByClassName("d_jump");
            //获取当前滚动条与窗体顶部的距离
            let distance = document.documentElement.scrollTop || document.body.scrollTop;
            //获取需要滚动的距离
            let total = jump[i].offsetTop - 48;
            //计算每小段的距离
            let step = total / 50;
            if(total > distance){
                moveDown();
            }else{
                let newTotal = distance - total
                step = newTotal / 50;
                moveUp();
            }
            function moveDown(){
                if(distance < total){
                    distance += step;
                    document.body.scrollTop = distance;
                    document.documentElement.scrollTop = distance;
                    setTimeout(moveDown,10);
                }else{
                    document.body.scrollTop = distance;
                    document.documentElement.scrollTop = total;
                }
            }
            function moveUp(){
                if(distance > total){
                    distance -= step;
                    document.body.scrollTop = distance;
                    document.documentElement.scrollTop = distance;
                    setTimeout(moveUp,10);
                }else{
                    document.body.scrollTop = total;
                    document.documentElement.scrollTop = total;
                }
            }
        }
    }
}
</script>

<style lang="scss">
.whiteBlack{
    .header{
        .header_navbar{
            .productCenter{
                font-weight: 600;
            }
        }
    }
}

</style>

<style lang="scss" scoped>
p{
    font-family:PingFangSC-Semibold,PingFang SC;
}
.product {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .product_header{
        width: 100%;
        height: 3rem;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1;
        p{
            float: left;
            color: #333333;
            font-size:0.75rem;
        }
        p:first-child{
            font-weight: 600;
            cursor: pointer;
        }
        p:nth-child(3),p:nth-child(5){
            font-weight: 400;
            cursor: pointer;
        }
        p:not(:first-child){
            margin-left: 1rem;
        }
    }
    .pro{
        overflow: hidden;
        width: 100%;
        background-color: #F8F9FB;
        position: relative;
        padding-top: 5rem;
    .pro_title1,.pro_title2,.pro_title3{
        width: 8.25rem;
        height: 2rem;
        background-color: #000;
        color: #fff;
        line-height: 2rem;
        text-align: center;
        border-radius: 1rem;
        font-size: 0.87rem;
        // position: absolute;
    }
    .pro_title1{
        // margin: 5.06rem auto 0;
        margin: 0 auto;
    }
    .pro_title2,.pro_title3{
        margin: 5rem auto 0;
    }
    .pro_con1{
        width: 72%;
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
            width: 53%;
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
                left: 12%;
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
                cursor: pointer;
                color:rgba(0,0,0,1);
            }
            .p3{
                top: 11.62rem;
                width:72%;
                height:3.38rem;
                font-size:0.87rem;
                font-weight:400;
                color:#333333;
            }
            .pro_con1_l_btn{
                position: absolute;
                top: 23.37rem;
                left: 12%;
                width: 40%;
                .pro_con1_l_btn_1,.pro_con1_l_btn_2{
                    cursor: pointer;
                    float: left;
                }
                .pro_con1_l_btn_1{
                    width: 44%;
                    height: 2.625rem;
                    border-radius: 1.44rem;
                    background-color: #000;
                    font-size: 1rem;
                    color: #fff;
                    text-align: center;
                    line-height: 2.625rem;
                }
                .pro_con1_l_btn_2{
                    box-sizing: border-box;
                    width: 48%;
                    height: 2.625rem;
                    margin-left: 5%;
                    border: 2px solid #000;
                    border-radius: 21px;
                    img{
                        margin-left: 12%;
                        margin-top: 0.75rem;
                    }
                    p{
                        font-weight: 600;
                        font-size: 1rem;
                        margin-left: 51%;
                        margin-top: -1.48rem;
                    }
                }
            }
        }
        .pro_con1_r{
            width: 47%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .pro_con2{
        width: 72%;
        height:30rem;
        background:linear-gradient(180deg,rgba(36,36,38,1) 0%,rgba(30,30,33,1) 100%);
        box-shadow:0px 10px 20px 0px rgba(0,0,0,0.02);
        border-radius:0.625rem;
        margin: 2rem auto 0;
        .pro_con2_l,.pro_con2_r{
            float: left;
            height: 100%;
        }
        .pro_con2_l{
            width: 53%;
            position: relative;
            .pro_con2_l_tag{
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
                left: 12%;
                background: #242426;
            }
            .p1{
                top: 6rem;
                font-size:0.87rem;
                font-weight:400;
                color:#888888;
            }
            .p2{
                top: 7.75rem;
                font-size:2rem;
                font-weight:600;
                color:#fff;
                cursor: pointer;
            }
            .p3{
                top: 11.62rem;
                width:72%;
                height:3.38rem;
                font-size:0.87rem;
                font-weight:400;
                color:#888;
            }
            .pro_con2_l_btn{
                position: absolute;
                top: 23.37rem;
                left: 12%;
                width: 40%;
                .pro_con2_l_btn_1,.pro_con2_l_btn_2{
                    float: left;
                    cursor: pointer;
                }
                .pro_con2_l_btn_1{
                    width: 44%;
                    height: 2.625rem;
                    border-radius: 1.44rem;
                    background-color: #fff;
                    font-size: 1rem;
                    color: #000;
                    text-align: center;
                    line-height: 2.625rem;
                }
                .pro_con2_l_btn_2{
                    box-sizing: border-box;
                    width: 48%;
                    height: 2.625rem;
                    margin-left: 6%;
                    border: 2px solid #fff;
                    border-radius: 21px;
                    img{
                        margin-left: 12%;
                        margin-top: 0.75rem;
                    }
                    p{
                        font-weight: 600;
                        font-size: 1rem;
                        margin-left: 52%;
                        margin-top: -1.48rem;
                        color: #fff;
                    }
                }
            }
        }
        .pro_con2_r{
            width: 47%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .pro_con3{
        width: 72%;
        height: 27.5rem;
        margin: 2rem auto 0; 
        .pro_con3_l,.pro_con3_r{
            float: left;
            height: 100%;
            width: 48.6%;
            background: #fff;
            border-radius: 0.625rem;
        }
        .pro_con3_l,.pro_con3_r{
            p{
                font-size:1.5rem;
                font-weight:600;
                color:rgba(22,22,22,1);
                margin-top: 3.5rem;
                margin-left: 12.3%;
            }
            .pro_con3_l_c1,.pro_con3_l_c2,.pro_con3_l_c3{
                margin-top: 1.5rem;
                margin-left: 12.3%;
                div{
                    float: left;
                    width: 1.125rem;
                    height: 1.125rem;
                    text-align: center;
                    line-height: 1.125rem;
                    background-color: #000;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 0.75rem;
                }
                p{
                    float: left;
                    font-size:0.81rem;
                    font-weight:500;
                    color:#161616;
                    margin-top: -0.03rem;
                    margin-left: 0.5rem;
                }
            }
            .pro_con3_l_c2,.pro_con3_l_c3{
                margin-top: 0.5rem;
            }
            .pro_con3_l_det{
                margin-left: 12.3%;
                margin-top: 1rem;
                color: #808080;
                width:20.07rem;
                height:9.38rem;
                font-size:0.81rem;
                font-weight:300;
                line-height: 1.56rem;
            }
            .pro_con3_pic,.pro_con3_pic1{
                float: left;
                width: 50%;
                height: 100%;
                margin-top: -67%;
                margin-left: 50%;
                img{
                    width: 90%;
                    height: 90%;
                    margin-left: 10%;
                }
            }
            .pro_con3_pic1{
                margin-left: 53%;
            }
        }
        .pro_con3_r{
            margin-left: 2.6%;
        }
    }
    .pro_con4{
        width:72%;
        height:27.5rem;
        background:rgba(255,255,255,1);
        border-radius:0.625rem;
        margin: 2rem auto 0;
        position: relative;
        .pro_con4_l{
            float: left;
            height: 100%;
            margin-left: 10%;
            p:first-child{
                width:10.5rem;
                height:2.06rem;
                font-size:1.5rem;
                font-weight:600;
                color:#161616;
                margin-top: 8.5rem;
            }
            .pro_con4_l_c1{
                margin-top: 1.5rem;
                div{
                    float: left;
                    width: 1.25rem;
                    height: 1.25rem;
                    text-align: center;
                    line-height: 1.25rem;
                    background-color: #000;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 0.75rem;
                }
                p{
                    float: left;
                    width:13.13rem;
                    height:1.25rem;
                    font-size:0.875rem;
                    font-weight:500;
                    color:#161616;
                    margin-top: -0.03rem;
                    margin-left: 0.5rem;
                }
            }
            .pro_con4_l_c2,.pro_con4_l_c3,.pro_con4_l_c4,.pro_con4_l_c5{
                margin-top: 0.5rem;
                div{
                    float: left;
                    width: 1.25rem;
                    height: 1.25rem;
                    text-align: center;
                    line-height: 1.25rem;
                    background-color: #000;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 0.75rem;
                }
                p{
                    float: left;
                    width:18.38rem;
                    height:1.25rem;
                    font-size:0.875rem;
                    font-weight:500;
                    color:#161616;
                    margin-top: -0.03rem;
                    margin-left: 0.5rem;
                }
            }
            .pro_con4_l_det{
                margin-left: 4.5rem;
                margin-top: 1rem;
                color: #808080;
                width:20.07rem;
                height:9.38rem;
                font-size:0.875rem;
                font-weight:300;
                line-height: 1.56rem;
            }
        }
        .pro_con4_r{
            width: 46%;
            height: 19.6rem;
            float: left;
            position: absolute;
            top: 3.94rem;
            left: 44%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .pro_con4_icon{
            float: left;
            position: absolute;
            width: 2rem;
            height: 2rem;
            top: 2rem;
            right: 2rem;
            cursor: pointer;
            img{
                width: 2rem;
                height: 2rem;
            }
        }
    }
    .pro_con5{
        width: 72%;
        height: 27.5rem;
        margin: 2rem auto 5rem;
        .pro_con5_l,.pro_con5_r{
            position: relative;
            background-color: #fff;
            width: 48.6%;
            height: 27.5rem;
            float: left;
            border-radius: 0.625rem;
        }
        .pro_con5_l{
            .pro_con5_pic{
                width: 16.68rem;
                height: 10.8rem;
                position: absolute;
                left: 40%;
                top: 14.18rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .pro_con5_l,.pro_con5_r{
            .pro_con5_icon{
                float: left;
                position: absolute;
                width: 2rem;
                height: 2rem;
                top: 2rem;
                right: 2rem;
                cursor: pointer;
            img{
                width: 2rem;
                height: 2rem;
            }
        }
            p:first-child{
                margin-top: 2.13rem;
                margin-left: 13.6%;
                width:10.5rem;
                height:2.07rem;
                font-size:1.5rem;
                font-weight:600;
                color:#161616;
            }
            .pro_con5_l_c1{
                margin-top: 1.5rem;
                margin-left: 13.5%;
                div{
                    float: left;
                    width: 1.25rem;
                    height: 1.25rem;
                    text-align: center;
                    line-height: 1.25rem;
                    background-color: #000;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 0.75rem;
                }
                p{
                    float: left;
                    width:10.5rem;
                    height:1.25rem;
                    font-size:0.875rem;
                    font-weight:500;
                    color:#161616;
                    margin-top: -0.03rem;
                    margin-left: 0.5rem;
                }
            }
            .pro_con5_l_c2,.pro_con5_l_c3,.pro_con5_l_c4,.pro_con5_l_c5{
                margin-top: 0.5rem;
                margin-left: 13.6%;
                div{
                    float: left;
                    width: 1.25rem;
                    height: 1.25rem;
                    text-align: center;
                    line-height: 1.25rem;
                    background-color: #000;
                    color: #fff;
                    border-radius: 50%;
                    font-size: 0.75rem;
                }
                p{
                    float: left;
                    width:16.63rem;
                    height:1.25rem;
                    font-size:0.875rem;
                    font-weight:500;
                    color:#161616;
                    margin-top: -0.03rem;
                    margin-left: 0.5rem;
                }
            }
        }
        .pro_con5_r{
            margin-left: 2.7%;
            .pro_con5_pic1{
                position: absolute;
                width: 21.5rem;
                height: 10.56rem;
                left: 30%;
                top: 14.9rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
}
</style>