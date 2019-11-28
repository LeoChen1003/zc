<template>
    <div class="consult">
        <div class="consult_bg"></div>
        <div class="consult_filter">
            <p class="p1">订购咨询</p>
            <div class="close" @click="goBack">
                <svg-icon icon-class="close" class-name="svg_close"></svg-icon>
            </div>
            <p class="p2">填写并提交以下信息，我们的工作人员将在2个工作日内与您联系</p>
            <form class="consult_commit">  
                <div class="consult_commit_input">
                    <span>称呼</span><svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon><input class="input1" type="name" v-model="name" placeholder="例如：王先生"/><br>
                </div>
                <div class="consult_commit_input">
                    <span>电话</span><svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon><input class="input2" v-model="phone" placeholder="请填写电话" /><br>
                </div>
                <div class="consult_commit_input">
                    <span>省市</span><input class="input3" v-model="provice" placeholder="例如：浙江省杭州市" /><br>
                </div>
                <div class="consult_commit_input">
                    <span>需求设备</span><input placeholder="请选择需求设备…" class="input4" @click="inputOpen"/><div class="arrow" @click="open" ><svg-icon :icon-class="iconClass" class-name="xia_arrow"></svg-icon></div><br>
                    <div v-show="visible" class="consult_commit_input_select" ref="select">
                        <div v-for="(item,i) of machine" @click="changeTxt(i)" :key="i" @mousemove="showBlue(i)" @mouseleave="hideBlue(i)">{{machine[i]}}</div>
                    </div>
                </div>
                <div class="consult_commit_input">
                    <span>需求数量</span><input v-model="amount" placeholder="请填写需求数量…" /><br>
                </div>
            </form>
            
            <div class="consult_commit_btn" @click="sendMessage">
                提交意愿
            </div>
            
        </div>
    </div>
</template>

<script>
import request from '@/utils/request.js';
export default {
    data(){
        return {
            visible: false,
            iconClass: 'xia',
            machine:["智能大滚筒炒菜机套机","智能精炒一体机","其他设备"],
            changeColor: -1,
            name: null,
            phone: null,
            provice: null,
            amount: null,
            equipment: null,
            changeEquip: null
        }
    },
    methods:{
        showBlue(index){
            var div = document.querySelectorAll(".consult_commit_input_select>div");
            div[index].className = "blue";
        },
        hideBlue(index){
            var div = document.querySelectorAll(".consult_commit_input_select>div");
            div[index].className = "";
        },
        inputOpen(){
            this.visible = true;
            this.iconClass = "shang";
            //获取所在的父级元素
            var sel = document.getElementsByClassName("consult_commit_input")[3];
            var select  = document.getElementsByClassName("consult_commit_input_select")[0];
            document.onclick = (e)=>{
                if(e.target.tagName=="use"){ //如果当前点击的对象是箭头
                    this.visible != this.visible;
                    if(select.style.opacity == 1){
                        select.style.opacity = 0;
                        setTimeout(()=>{
                            this.visible = false;
                            this.iconClass = "xia";
                        },500)
                    }else{
                        select.style.opacity = 1;
                        setTimeout(()=>{
                            this.visible = true;
                            this.iconClass = "shang";
                        },500)
                    }
                }else if(sel.contains(e.target) && e.target.tagName !=="use"){//如果当前点击的对象在这个父级元素中并且不是箭头
                    this.visible = true;
                    this.iconClass = "shang";
                    this.equipment = e.target.innerText;
                    select.style.opacity = 1;
                    if(e.target.className=="blue"){
                        select.style.opacity = 0;
                        setTimeout(()=>{
                            this.visible = false;
                            this.iconClass = "xia";
                        },500)
                    }
                }else{ //点击的是空白区域
                    this.visible = false;
                    this.iconClass = "xia";
                }
            }
        },
        open(){
            //每次点击箭头 把箭头方向两次相反
            this.iconClass == "shang" ? this.iconClass= "xia" : this.iconClass = "shang";
            //每次点击 如果下拉菜单是显示状态 就变为隐藏状态  反之变为显示状态
            this.visible = ! this.visible;
            //获取所在的父级元素
            var sel = document.getElementsByClassName("consult_commit_input")[3];
            var select  = document.getElementsByClassName("consult_commit_input_select")[0];
            document.onclick = (e)=>{
                if(e.target.tagName=="use"){ //如果当前点击的对象是箭头
                    this.visible != this.visible;
                    if(select.style.opacity == 1){
                        select.style.opacity = 0;
                        setTimeout(()=>{
                            this.visible = false;
                            this.iconClass = "xia";
                        },500)
                    }else{
                        select.style.opacity = 1;
                        setTimeout(()=>{
                            this.visible = true;
                            this.iconClass = "shang";
                        },500)
                    }
                }else if(sel.contains(e.target) && e.target.tagName !=="use"){//如果当前点击的对象在这个父级元素中并且不是箭头
                    this.visible = true;
                    this.iconClass = "shang";
                    this.equipment = e.target.innerText;
                    select.style.opacity = 1;
                    if(this.visible){
                        select.style.opacity = 0;
                        setTimeout(()=>{
                            this.visible = false;
                            this.iconClass = "xia";
                        },500)
                    }
                    
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
        goBack(){
            this.$parent.isBuy=false;
            this.canScroll()
        },
        sendMessage(){
            window.console.log(1);
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

.consult{
    transition: all 0.5s;
    width:100%;
    height: 51rem;
    // background:rgba(255, 255, 255, 0.8);
    // overflow: hidden;
    // position: relative;
    position: fixed;
    // filter: blur(5px);
    top:0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    .consult_bg{
        width: 100%;
        height: 100%;
        // background:rgba(255, 255, 255, 0.8);
        background: url('../assets/white.png') repeat;
        background-size: cover;
        opacity: 0.97;
        filter: blur(5px) !important;
        position: absolute;
        z-index: -2;
        top: 0;
        left: 0;
    }
    .consult_filter{
        width: 100%;
        // height: 100%;
        top: 0;
        left: 0;
        position: relative;
        // background:rgba(255, 255, 255, 0.8);
    }
    .close{
        cursor: pointer;
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 0;
        margin-left: 1rem;
        right: 17rem;
        .svg_close{
            width: 3rem;
            height: 3rem;
        }
    }
    .p1{
        width:7rem;
        height:2.5rem;
        font-size:1.75rem;
        font-weight:600;
        margin: 7.5rem auto 0;
    }
    .p2{
        width:25.06rem;
        height:1.25rem;
        font-size:0.87rem;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin: 0.25rem auto 0;
    }
    .consult_commit{
        width: 45rem;
        height: 19rem;
        margin: 0 auto;
        margin-top: 4rem;
        .consult_commit_input{
            width: 100%;
            height: 3.75rem;
            border-bottom: 1px solid rgba(0,0,0,.1);
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
                margin-top: 1rem;
                font-size: 1.25rem;
                font-weight: 600;
                color: #000;
            }
            input{
                padding-left: 1.5rem;
                border: none;
                display: inline-block;
                width: 37.5rem;
                // height: 1.5rem;
                outline: none;
                font-size: 1.25rem;
                background-color: transparent;
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
        .consult_commit_input:nth-child(4){
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
            
            .consult_commit_input_select{
                position: absolute;
                top: 2.8rem;
                left: 5.3rem;
                width: 39.5rem;
                height: 11.38rem;
                z-index: 1;
                background:rgba(255,255,255,1);
                border-radius:3px;
                border:1px solid rgba(236,236,236,1);
                transition: all 0.5s;
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
    }
    .consult_commit_btn{
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
}
</style>

