<template>
    <div class="new">
        <zcHeader></zcHeader>
        <newHeader></newHeader>
        <div class="new_content">
            <div class="new_con_del" v-for="(messNew,index) of messNews" :key="index">
                <div class="new_con_del_l">
                    <img :src="messNew.image" alt="">
                </div>
                <div class="new_con_del_r">
                    <p>{{messNew.updatedAt.slice(0,4)}}年{{messNew.updatedAt.slice(5,7)}}月{{messNew.updatedAt.slice(8,10)}}日  <a class="a1" href="javascript:;">更新</a></p>
                    <router-link to="/new/detail1">{{messNew.title}}</router-link>
                    <p v-html="messNew.content">{{messNew.content}}</p>
                </div>
            </div>
            <div class="line"></div>
            <div class="new_footer">
                <div class="new_footer_l" @mouseover="hover1" @mouseout="leave1">
                    <svg-icon icon-class="leftArrow" class-name="new_svg"></svg-icon>
                </div>
                <div class="new_footer_l1" ref="left" @mouseover="hover1" @mouseout="leave1">
                    <svg-icon icon-class="leftHover" class-name="new_svg"></svg-icon>
                </div>
                <div class="new_footer_c">{{page}}页 16</div>
                <div class="new_footer_r" @mouseover="hover2" @mouseout="leave2">
                    <svg-icon icon-class="rightArrow" class-name="new_svg"></svg-icon>
                </div>
                <div class="new_footer_r1" ref="right" @mouseover="hover2" @mouseout="leave2">
                    <svg-icon icon-class="rightHover" class-name="new_svg"></svg-icon>
                </div>
            </div>
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
    name: 'new',
    data(){
        return{
            messNews: [],
            page: 1
        }
    },
    components:{
        zcHeader,
        zcFooter,
        newHeader
    },
    methods:{
        hover1(){
            var left1 = document.getElementsByClassName("new_footer_l1")[0];
            left1.style.display = "block";
            var left = document.getElementsByClassName("new_footer_l")[0];
            left.style.display = "none";
        },
        leave1(){
            var left1 = document.getElementsByClassName("new_footer_l1")[0];
            left1.style.display = "none";
            var left = document.getElementsByClassName("new_footer_l")[0];
            left.style.display = "block";
        },
        hover2(){
            var right1 = document.getElementsByClassName("new_footer_r1")[0];
            right1.style.display = "block";
            var right = document.getElementsByClassName("new_footer_r")[0];
            right.style.display = "none";
        },
        leave2(){
            var right1 = document.getElementsByClassName("new_footer_r1")[0];
            right1.style.display = "none";
            var right = document.getElementsByClassName("new_footer_r")[0];
            right.style.display = "block";
        },
        getNews(){
            // let param = {
            //     page: this.page
            // }
            request({
                url: '/outside/posts',
                method: 'get'
            }).then(res=>{
                this.messNews = res.data.content;
                window.console.log(this.messNews);
                // window.console.log(res.data);
            })
        }
    },
    mounted(){
        this.getNews();
    }
}
</script>

<style lang="scss" scope>
    a{
        text-decoration: none;
    }
    .new{
        width: 100%;
        background-color: #F8F9FB;
        .new_content{
            background-color: #F8F9FB;
            width: 58%;
            margin: 0 auto;
            padding-top: 6rem;
            .line{
                width: 100%;
                height: 0.06rem;
                background-color: rgb(230, 227, 227);      
            }
            .new_con_del{
                width: 100%;
                margin-right: 22.75rem;
                height: 10rem;
                margin-bottom: 3.5rem;
            }
            .new_con_del_l{
                width: 29%;
                height: 10rem;
                border: 1px solid #ccc;
                float: left;
                border-radius: 10px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
            .new_con_del_r{
                float: left;
                margin-left: 2.18rem;
                height: 10rem;
                width: 66%;
                p:first-child{
                    font-size: 0.87rem;
                    margin-top: 0.3rem;
                    .a1{
                        color: #0074FF;
                    }
                }
                p:nth-child(2),a:nth-child(2){
                    display: block;
                    margin-top: 0.5rem;
                    font-size: 1.25rem;
                    color: #161616;
                    font-weight: 600;
                }
                p:last-child{
                    font-size: 1.12rem;
                    color: #333333;
                    font-weight: 300;
                }
            }
            .new_footer{
                margin-top: 6.12rem;
                height: 5rem;
                .new_footer_l,
                .new_footer_r,
                .new_footer_l1,
                .new_footer_r1{
                    float: left;
                    width:2.25rem;
                    height:2.25rem;
                    cursor: pointer;
                    .new_svg{
                        width: 100%;
                        height: 100%;
                    }
                }
                .new_footer_c{
                    float: left;
                    font-size: 1rem;
                    margin-top: 0.5rem;
                    margin-left: 4.75rem;
                }
                .new_footer_r{
                    margin-left: 4.75rem;
                }
                .new_footer_l1,
                .new_footer_r1{
                    display: none;
                }
                .new_footer_r1{
                    margin-left: 4.6rem;
                }
                .new_footer_l,
                .new_footer_r{
                    display: block;
                }
            }
        }
    }
</style>