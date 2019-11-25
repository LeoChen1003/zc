<template>
    <div class="newDel">
        <zcHeader></zcHeader>
        <newHeader></newHeader>
        <div class="newDel_con">
            <div class="newDel_con_hd">
                <div class="newDel_con_hd_l" v-if="info.top == 1">置顶</div>
                <p class="newDel_con_hd_r">{{info.updatedAt?info.updatedAt.slice(0,4):''}}年{{info.updatedAt?info.updatedAt.slice(5,7):''}}月{{info.updatedAt?info.updatedAt.slice(8,10):''}}日</p>
            </div>
            <p class="newDel_con_title">{{info.title}}</p>
            <div class="line"></div>
            <div class="content" v-html="info.content"></div>
            <div class="line1"></div>
        </div>
        <div v-if="isShow" ref="toTop" class="arrow">
            <svg-icon icon-class="returnUp" class="up"></svg-icon>
        </div>
        <div v-else ref="toTop" class="fix">
            <svg-icon icon-class="returnUp" class="up"></svg-icon>
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
import request from '@/utils/request.js';
export default {
    name: 'newDetail1',
    data(){
        return {
            info:{},
            isShow: true
        }
    },
    components:{
        zcHeader,
        zcFooter,
        newHeader
    },
    mounted(){
        this.$refs.toTop.onclick = function(){
            scrollTo(0,0);
        }
        window.onscroll = ()=>{
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > 867){
                this.isShow = false;
            }else{
                this.isShow = true;
            }
        }
        let id = this.$route.query.id
        request({
            url: '/outside/post/' + id,
            method: 'get'
        }).then(res => {
            this.info = res.data;
        })
    }
}
</script>

<style lang="scss" scope>
.newDel{
    position: relative;
    overflow: hidden;
    .fix{
        position: fixed;
        display: block;
        width: 3.25rem;
        height: 3.25rem;
        left: 85%;
        top: 49%;
        cursor: pointer;
        .up{
            width: 100%;
            height: 100%;
        }
    }
    .arrow{
        display: none;
        position: absolute;
        width: 3.25rem;
        height: 3.25rem;
        left: 85%;
        top: 49%;
        cursor: pointer;
        .up{
            width: 100%;
            height: 100%;
        }
    }
    .newDel_con{
        width: 50rem;
        margin: 0 auto;
        margin-bottom: 6.75rem;
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
        .content{
            margin-top: 2.3rem;
        }
    }
}
</style>