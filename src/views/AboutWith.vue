<template>
    <div class="about">
        <zcHeader></zcHeader>
        <div class="about_pic">
            <p>优特智厨</p>
            <p>关于我们</p>
        </div>
        <div class="about_item">
            <span @click="toggleTab('comIntro')" :style="style1" ref="item" class="item_span">企业介绍</span>
            <span @click="toggleTab('inven')" :style="style2" ref="item" class="item_span">专利发明</span>
            <span @click="toggleTab('labor')" :style="style2" ref="item" class="item_span">实验室</span>
        </div>
        <comIntro :is="currentTab"></comIntro>
        <zcFooter></zcFooter>
    </div>
</template>

<script>
import zcHeader from '@/components/zcHeader.vue';
import zcFooter from '@/components/zcFooter.vue';
import comIntro from '@/components/comIntro.vue';
import labor from '@/components/laboratory.vue';
import inven from '@/components/invention.vue';
import '../styles/variables.scss';
export default {
    name: 'with',
    data(){
        return {
            currentTab : 'comIntro',
            style1 : {color:"#000000",fontWeight:600},
            style2 : {color:"#333333",fontWeight:300}
        }
    },
    components:{
        zcHeader,
        zcFooter,
        comIntro,
        labor,
        inven
    },
    methods:{
        toggleTab:function(tab){
            this.currentTab = tab;
        }
    },
    mounted(){
        var items = this.$refs.item;
        for(var i = 0; i < items.length; i++){
            items[i].onclick = function(){
                for(var i = 0; i < items.length; i++){
                    items[i].style=this.style1;
                }
                this.style = this.style2;
            }
        }
    }
}
</script>

<style lang="scss" scope>
    .time1{
        color: #2CC6C0;
        font-size: 1.75rem;
    }
    .time2{
        font-size: 1.75rem;
        color: #cccccc;
    }
    .about{
        width: 1425px;
        height: 100%;
        overflow: hidden;
        .about_pic{
            width: 100%;
            height: 15rem;
            background: url("../assets/aboutUs/header.jpg");
            overflow: hidden;
            background-size: 100% 100%;
            p:first-child{
                width:3.5rem;
                height:1.25rem;
                font-size:0.87rem;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(255,255,255,1);
                margin: 5.94rem auto 0;
            }
            p:nth-child(2){
                width:8rem;
                font-size:2rem;
                font-family:PingFangSC-Semibold,PingFang SC;
                font-weight:600;
                color:rgba(255,255,255,1);
                margin: 0 auto;
            }
        }
        .about_item{
            width: 100%;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                margin-left: 1.67rem;
                cursor: pointer;
            }
        }
    }
</style>