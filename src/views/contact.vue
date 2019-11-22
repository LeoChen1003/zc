<template>
    <div class="contact">
        <zcHeader></zcHeader>
        <div class="contact_hd">
            <p>联系我们</p>
        </div>
        <div class="contact_d1">
            <p>订购咨询</p>
            <p>填写并提交以下信息，我们的工作人员将在2个工作日内与您联系</p>
        </div>
        <form class="contact_commit">  
            <div class="contact_commit_input">
                <span>称呼</span><svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon><input class="input1" type="name" v-model="name" placeholder="例如：王先生"/><br>
            </div>
            <div class="contact_commit_input">
                <span>电话</span><svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon><input class="input2" placeholder="请填写电话" v-model="phone" /><br>
            </div>
            <div class="contact_commit_input">
                <span>省市</span><input class="input3" v-model="provice" placeholder="例如：浙江省杭州市" /><br>
            </div>
            <div class="contact_commit_input">
                <span>需求设备</span><input placeholder="请选择需求设备…" class="input4"/><div class="arrow" @click="open" ><svg-icon :icon-class="iconClass" class-name="xia_arrow" id="icon"></svg-icon></div><br>
                <div v-show="visible" class="contact_commit_input_select" id="sel">
                    <div v-for="(item,i) of machine" @click="changeTxt(i)" :key="i" :class="{blue:changeColor==i}" style="color:#000;">{{machine[i]}}</div>
                </div>
            </div>
            <div class="contact_commit_input">
                <span>需求数量</span><input v-model="amount" placeholder="请填写需求数量…" /><br>
            </div>
        </form>
        <div class="contact_commit_btn" @click="sendMessage">
            提交意愿
        </div>
        <div class="contact_d2">
            <p class="p1">咨询合作</p>
            <p class="p2">咨询合作联系邮箱</p>
            <div class="contact_commit_email">
                <p>
                    <span>品牌合作邮箱：</span><span>zhaochenghua@ut.com</span>
                </p>
                <p>
                    <span>媒体合作邮箱：</span>
                    <span>zhaochenghua@ut.com</span>
                </p>
                <p>
                    <span>人才招聘：</span>
                    <span>hr@ut.com</span>
                </p>
            </div>
        </div>
        <div class="contact_d3">
            <p>企业位置</p>
            <div class="contact_d3_circle1" :class="{cir_white:target ==='btn3',cir_blue:target!=='btn3'}"></div>
            <div class="contact_d3_circle2" :class="{cir_white:target ==='btn2',cir_blue:target!=='btn2'}"></div>
            <div class="contact_d3_circle3" :class="{cir_white:target ==='btn1',cir_blue:target!=='btn1'}"></div>
            <div class="contact_d3_location">
                <svg-icon icon-class="china" class-name="svg_china"></svg-icon>
                <div class="contact_d3_location_city">
                    <div class="contact_d3_location_city_zh" @click="changeCity('btn1')" :class="{white:target==='btn1',light:target!=='btn1'}">
                        <svg-icon icon-class="city_zh" class-name="svg_zh"></svg-icon>
                        <p>珠海</p>
                        <p>硬件研发中心 (总部)</p>
                        <p>广东省珠海市香洲区银桦路102号优特科技大厦</p>
                    </div>
                    <div class="contact_d3_location_city_sz" @click="changeCity('btn2')" :class="{white:target==='btn2',light:target!=='btn2'}">
                        <svg-icon icon-class="city_sz" class-name="svg_zh"></svg-icon>
                        <p>深圳</p>
                        <p>工业设计中心</p>
                        <p>广东省深圳市广东省深圳市塘朗金骐智谷大厦1705</p>
                    </div>
                    <div class="contact_d3_location_city_hz" @click="changeCity('btn3')" :class="{white:target==='btn3',light:target!=='btn3'}">
                        <svg-icon icon-class="city_hz" class-name="svg_hz"></svg-icon>
                        <p>杭州</p>
                        <p>软件研发中心</p>
                        <p>浙江省杭州市文一西路西溪八方城9-503</p>
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
import request from '@/utils/request.js';
export default {
    name: 'contact',
    data(){
        return {
            selectDisplay : 'none',
            iconClass: 'xia',
            machine:["智能大滚筒炒菜机套机","智能精炒一体机","其他设备"],
            changeColor: -1,
            cityColor : false,
            target: 'btn1',
            visible: false,
            name: null,
            phone: null,
            provice: null,
            amount: null,
            equipment: null,
            changeEquip: null
        }
    },
    components:{
        zcHeader,
        zcFooter,
    },
    methods:{
        open(){
            //每次点击箭头 把箭头方向两次相反
            this.iconClass == "shang" ? this.iconClass= "xia" : this.iconClass = "shang";
            //每次点击 如果下拉菜单是显示状态 就变为隐藏状态  反之变为显示状态
            this.visible = ! this.visible;
            //获取所在的父级元素
            var sel = document.getElementsByClassName("contact_commit_input")[3];
            document.onclick = (e)=>{
                if(e.target.tagName=="use"){ //如果当前点击的对象是箭头
                    this.visible != this.visible;
                }else if(sel.contains(e.target) && e.target.tagName !=="use" && e.target.className !== "input4"){//如果当前点击的对象在这个父级元素中并且不是箭头
                    this.visible = true;
                    this.iconClass = "shang";
                    this.equipment = e.target.innerText;
                }else{ //点击的是空白区域
                    this.visible = false;
                    this.iconClass = "xia";
                }
            }
        },
        changeTxt(index){
            var input4 = document.getElementsByClassName("input4")[0];
            input4.value = this.machine[index];
            this.changeColor = index;
        },
        changeCity(index){
            this.target = index;
        },
        sendMessage(){
            if(this.name===null){
                this.$message({
                    showClose: true,
                    message: '称呼不能为空',
                    type: 'warning'
                })
                return;
            }
            if(this.phone===null){
                this.$message({
                    showClose: true,
                    message: '电话不能为空',
                    type: 'warning'
                })
                return;
            }
            if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                this.$message({
                    showClose: true,
                    message: '电话号码格式错误',
                    type: 'warning'
                })
                return;
            }
            if(this.equipment == "智能大滚筒炒菜机套机"){
                this.changeEquip = "BIG_BIZ_MACHINE";
            }else if(this.equipment == "智能精炒一体机"){
                this.changeEquip = "SMALL_SMART";
            }else if(this.equipment == "其他设备"){
                this.changeEquip = "OTHER";
            }
            let formData = {
                who: this.name,
                mobile: this.phone,
                zone: this.provice,
                deviceType: this.changeEquip,
                howMany: this.amount
            }
            request({
                url: '/outside/book',
                method: 'post',
                data: formData
            }).then(res=>{
                this.$message({
                    showClose: true,
                    message: '提交成功',
                    type: 'success'
                })
                window.console.log(res.data);
            }).catch(function(error){
                window.console.log(error);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.hide{
    display: none;
}
p{
    font-family:PingFangSC-Semibold,PingFang SC;
}
.contact{
    width: 100%;
    .contact_hd{
        width: 100%;
        height: 15rem;
        background:url("../assets/home/aboutUs.jpg");
        background-size: 100% 100%;
        p{
            width:8rem;
            height:2.81rem;
            font-size:2rem;
            font-weight:600;
            color:rgba(255,255,255,1);
            line-height: 15rem;
            margin: 0 auto;
        }
    }
    .contact_d1{
        width: 29rem;
        height: 4rem;
        margin: 0 auto;
        margin-top: 5rem;
        p:first-child{
            width:7rem;
            height:2.5rem;
            font-size:1.75rem;
            font-weight:600;
            color:rgba(0,0,0,1);
            margin: 0 auto;
        }
        p:nth-child(2){
            height:1.25rem;
            font-weight:400;
            color:rgba(0,0,0,1);
            margin-top: 0.25rem;
        }
    }
    .contact_commit{
        width: 45rem;
        height: 19rem;
        margin: 0 auto;
        margin-top: 4rem;
        .contact_commit_input{
            width: 100%;
            height: 2.75rem;
            border-bottom: 1px solid #cccccc;
            position: relative;
            .icon_star{
                position: absolute;
                width: 0.5rem;
                height: 0.56rem;
                top: 1rem;
                left: 2.8rem;
            }
            span{
                display: inline-block;
                margin-top: 0.8rem;
                font-size: 1.25rem;
            }
            input{
                padding-left: 1.5rem;
                border: none;
                display: inline-block;
                width: 37.5rem;
                height: 1.5rem;
                outline: none;
                font-size: 1.25rem;
            }
            .input1,.input2,.input3{
                padding-left: 4rem;
            }
            input::-webkit-input-placeholder{
                font-size:1.25rem;
                color: #cccccc;
            }
            input::-moz-placeholder{
                font-size:1.25rem;
                color: #cccccc;
            }
            input:-moz-placeholder{
                font-size:1.25rem;
                color: #cccccc;
            }
            input:-ms-input-placeholder{
                font-size:1.25rem;
                color: #cccccc;
            }
        }
        .contact_commit_input:nth-child(4){
            position: relative;
            .arrow{
                width: 1.2rem;
                height: 1rem;
                position: absolute;
                top: 1.5rem;
                right: 0;
                .xia_arrow{
                    position: absolute;
                    width: 1rem;
                    height: 0.8rem;
                    cursor: pointer;
                }
            }
            
            .contact_commit_input_select{
                position: absolute;
                top: 2.8rem;
                left: 5.3rem;
                width: 39.5rem;
                height: 11.38rem;
                z-index: 1;
                background:rgba(255,255,255,1);
                border-radius:3px;
                border:1px solid rgba(236,236,236,1);
                div{
                    box-sizing:border-box;
                    width: 100%;
                    height: 33.3%;
                    padding-left: 1rem;
                    padding-top: 1rem;
                    font-size:1.25rem;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    line-height:28px;
                    cursor: pointer;
                }
                .blue{
                    background:rgba(44,198,192,.1);
                }
                div:nth-child(2){
                    border-top: 1px solid rgba(236,236,236,1);
                    border-bottom: 1px solid rgba(236,236,236,1);
                }
            }
        }
        .contact_commit_input:not(:first-child){
            margin-top: 1rem;
        }
    }
    .contact_commit_btn{
        width:25rem;
        height:3.25rem;
        background:rgba(0,0,0,1);
        border-radius:2.06rem;
        margin: 4rem auto 0;
        font-size: 1.25rem;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:3.25rem;
        text-align: center;
        cursor: pointer;
    }
    .contact_d2{
        width: 70rem;
        height: 28.38rem;
        margin: 5rem auto 0;
        border-top: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
        position: relative;
        .p1{
            width:7rem;
            height:2.5rem;
            font-size:1.75rem;
            font-weight:600;
            color:rgba(0,0,0,1);
            margin: 5rem auto 0;
        }
        .p2{
            width:10rem;
            height:1.75rem;
            font-size:1.25rem;
            font-weight:600;
            color:rgba(0,0,0,1);
            position: absolute;
            top: 11.5rem;
            left: 12.69rem;
        }
        .contact_commit_email{
            position: absolute;
            left: 12.69rem;
            top: 14.25rem;
            span:first-child{
                font-size:1rem;
                font-weight:400;
                color:rgba(51,51,51,1);
            }
            span:nth-child(2){
                font-size:1rem;
                font-weight:600;
                color:rgba(44,198,192,1);
            }
            p:not(:first-child){
                margin-top: 0.5rem;
            }
        }
    }
    .contact_d3{
        width: 100%;
        margin: 5rem auto 0;
        position: relative;
        .contact_d3_circle1,.contact_d3_circle2,.contact_d3_circle3{
            position: absolute;
            width:1.38rem;
            height:1.38rem;
            border:3px solid rgba(255,255,255,1);
            border-radius: 50%;
            z-index: 1;
        }
        .contact_d3_circle1{
            left: 35.5rem;
            top: 30.06rem;
            background:rgba(13,168,162,1);
        }
        .contact_d3_circle2{
            left: 30.32rem;
            top: 33rem;
            background:rgba(13,168,162,1);
        }
        .contact_d3_circle3{
            left: 32.06rem;
            top: 33.89rem;
            background-color: #fff;
        }
        .cir_blue{
            background:rgba(13,168,162,1);
        }
        .cir_white{
            background-color: #fff;
        }
        p:first-child{
            width:7rem;
            height:2.5rem;
            font-size:1.75rem;
            font-weight:600;
            color:rgba(0,0,0,1);
            margin: 0 auto;
        }
        .contact_d3_location{
            width: 100%;
            height: 35rem;
            background:linear-gradient(180deg,rgba(61,206,203,1) 0%,rgba(44,198,192,1) 100%);
            margin-top: 5rem;
            position: relative;
            .svg_china{
                width: 37.5rem;
                height: 30.94rem;
                margin-top: 2rem;
                margin-left: 8.5rem;
                float: left;
            }
            .contact_d3_location_city{
                float: left;
                width: 27.75rem;
                height: 23.63rem;
                border-radius: 0.63rem;
                top: 5.68rem;
                right: 9.88rem;
                position: absolute;
                cursor: pointer;
                .contact_d3_location_city_zh,.contact_d3_location_city_sz,.contact_d3_location_city_hz{
                    width: 100%;
                    height: 7.87rem;
                    position: relative;
                }
                .contact_d3_location_city_zh,
                .contact_d3_location_city_sz,
                .contact_d3_location_city_hz{
                    // background-color: #fff;
                    border-radius: 0.63rem 0.63rem 0 0;
                    .svg_zh{
                        position: absolute;
                        width: 5rem;
                        height: 5rem;
                        top: 0.75rem;
                        left: 0.63rem;
                    }
                    p:nth-child(2){
                        position: absolute;
                        left: 2.12rem;
                        bottom: 0.75rem;
                        font-size:1rem;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                    }
                    p:nth-child(3){
                        position: absolute;
                        font-size:1.25rem;
                        top: 1.62rem;
                        left: 6.62rem;
                        font-weight:600;
                        color:rgba(0,0,0,1);
                    }
                    p:nth-child(4){
                        position: absolute;
                        font-size:0.88rem;
                        font-weight:400;
                        color:rgba(0,0,0,1);
                        bottom: 3rem;
                        left: 6.62rem;
                    }
                }
                .contact_d3_location_city_zh{
                    background-color: #fff;
                }
                .contact_d3_location_city_sz,.contact_d3_location_city_hz{
                    background-color: #EAF9F8;
                }
                .light{
                    background-color: #EAF9F8 ;
                }
                .white{
                    background-color: #fff;
                }
                .contact_d3_location_city_sz{
                    border-radius: 0;

                }
                .contact_d3_location_city_hz{
                    border-radius: 0 0 0.63rem 0.63rem;
                    .svg_hz{
                        width: 4.38rem;
                        height: 4.38rem;
                        position: absolute;
                        left: 0.94rem;
                        top: 1.06rem;
                    }
                }
            }
        }
    }
}
</style>