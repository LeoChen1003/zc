<template>
    <div class="new_hd">
        <p>新闻动态</p>
        <p>对我们了解更多</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scope>
.new_hd{
    background: url("../assets/news/background.jpg");
    background-size: 100% 100%;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    p{
        font-family:PingFangSC-Semibold,PingFang SC;
        color: #161616;
        margin-left: 21.87rem;
    }
    p:first-child{
        margin-top: 3.5rem;
        font-weight: 600;
        font-size: 3.12rem;
        width: 20.5rem;
        height: 4.37rem;
    }
    p:last-child{
        margin-top: 1rem;
        font-weight: 400;
        width: 22.12rem;
        height: 2.06rem;
        font-size: 1.5rem;
    }
}
</style>