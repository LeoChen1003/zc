<template>
    <div class="consult">
        <p class="p1">订购咨询</p>
        <p class="p2">填写并提交以下信息，我们的工作人员将在2个工作日内与您联系</p>
        <form class="consult_commit">  
            <div class="consult_commit_input">
                <span>称呼</span><svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon><input class="input1" type="name" placeholder="例如：王先生"/><br>
            </div>
            <div class="consult_commit_input">
                <span>电话</span><svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon><input class="input2" placeholder="请填写电话" /><br>
            </div>
            <div class="consult_commit_input">
                <span>省市</span><input class="input3" placeholder="例如：浙江省杭州市" /><br>
            </div>
            <div class="consult_commit_input">
                <span>需求设备</span><input placeholder="请选择需求设备…" class="input4"/><div class="arrow" @click="open" ><svg-icon :icon-class="iconClass" class-name="xia_arrow"></svg-icon></div><br>
                <div :style="{display:selectDisplay}" class="consult_commit_input_select" ref="select">
                    <p v-for="(item,i) of machine" @click="changeTxt(i)" :key="i" :class="{blue:changeColor==i}">{{machine[i]}}</p>
                </div>
            </div>
            <div class="consult_commit_input">
                <span>需求数量</span><input placeholder="请填写需求数量…" /><br>
            </div>
        </form>
        <div class="consult_commit_btn">
            提交意愿
        </div>
        <div class="close" @click="goBack">
            <svg-icon icon-class="close" class-name="svg_close"></svg-icon>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectDisplay : 'none',
            iconClass: 'xia',
            machine:["智能大滚筒炒菜机套机","智能精炒一体机","其他设备"],
            changeColor: -1
        }
    },
    methods:{
        open(){
            this.selectDisplay = "block";
            this.iconClass = "shang";
        },
        changeTxt(index){
            var input4 = document.getElementsByClassName("input4")[0];
            input4.value = this.machine[index];
            this.changeColor = index;
        },
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.consult{
    width:100%;
    height: 51rem;
    background:#F8F9FB;
    opacity: 0.8;
    overflow: hidden;
    position: relative;
    .close{
        cursor: pointer;
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 7.5rem;
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
                background-color: #F8F9FB;
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
                width: 0.75rem;
                height: 0.44rem;
                position: absolute;
                top: 1.5rem;
                right: 0;
                .xia_arrow{
                    position: absolute;
                    width: 0.75rem;
                    height: 0.44rem;
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
                p{
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
                    background-color: #2CC6C0;
                }
                p:nth-child(2){
                    border-top: 1px solid rgba(236,236,236,1);
                    border-bottom: 1px solid rgba(236,236,236,1);
                }
            }
        }
        .consult_commit_input:not(:first-child){
            margin-top: 1rem;
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

