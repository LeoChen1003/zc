<template>
    <div class="about">
        <zcHeader></zcHeader>
        <div class="about_pic">
            图片
        </div>
        <div class="about_item">
            <span @click="toggleTab('comIntro')">企业介绍</span>
            <span @click="toggleTab('inven')">专利发明</span>
            <span @click="toggleTab('labor')">实验室</span>
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
            currentTab : 'comIntro'
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
        .about_pic{
            width: 100%;
            height: 15rem;
            background-color: rgb(250, 246, 246);
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