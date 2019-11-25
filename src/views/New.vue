<template>
    <div class="new">
        <zcHeader :tab2="tab"></zcHeader>
        <newHeader></newHeader>
        <div class="new_content">
            <div class="new_con_del" v-for="(messNew,index) of messNews" :key="index" @click="detail(messNew)">
                <div class="new_con_del_l">
                    <img :src="messNew.image" alt="">
                </div>
                <div class="new_con_del_r">
                    <p>{{messNew.updatedAt.slice(0,4)}}年{{messNew.updatedAt.slice(5,7)}}月{{messNew.updatedAt.slice(8,10)}}日  <a class="a1" href="javascript:;">更新</a></p>
                    <router-link to="/new/detail1">{{messNew.title}}</router-link>
                    <p>{{messNew.shortContent}}</p>
                </div>
            </div>
            <div class="line"></div>
            <div class="new_footer">
                <div class="new_footer_l" @click="prev">
                    <svg-icon :icon-class="isFirst ? 'leftDisable' : activeLeft?'leftHover':'leftArrow'" class-name="new_svg"></svg-icon>
                </div>
                <div class="new_footer_c">{{page+1}}页 {{total}}</div>
                <div class="new_footer_r" @click="next">
                    <svg-icon :icon-class="isLast ? 'rightDisable' : activeRight?'rightHover': 'rightArrow'" class-name="new_svg"></svg-icon>
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
            page: 0,
            total: 1,
            pageSize: 20,
            activeLeft: false,
            activeRight: false,
            isFirst: true,
            isLast: false,
            tab: 0
        }
    },
    components:{
        zcHeader,
        zcFooter,
        newHeader
    },
    methods:{
        getNews(){
            request({
                url: '/outside/posts',
                method: 'get',
                params: {
                    page: this.page,
                    pageSize: this.pageSize
                }
            }).then(res=>{
                this.messNews = res.data.content;
                this.total = res.data.totalPages;
                this.isLast = res.data.last;
                this.isFirst = res.data.first;
                window.console.log(this.messNews);
            })
        },
        prev(){
            if(!this.isFirst){
                this.activeLeft = true;
                setTimeout(() => {
                    this.activeLeft = false;
                }, 200)
                this.page = this.page - 1;
                this.getNews();
            }
        },
        next(){
            if (!this.isLast) {
                this.activeRight = true;
                setTimeout(() => {
                    this.activeRight = false;
                }, 200)
                this.page = this.page + 1;
                this.getNews();
            }
        },
        detail(row){
            this.$router.push({
                path: '/new/detail1',
                query: {
                    id: row.id
                }
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
                cursor: pointer;
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
                cursor: pointer;
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
                    cursor: pointer;
                }
                p:last-child{
                    font-size: 1.12rem;
                    color: #333333;
                    font-weight: 300;
                    cursor: pointer;
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
