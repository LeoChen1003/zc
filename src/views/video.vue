<template>
    <div class="video">
        <video src="http://cdn.withpush.cn/youtezhichu/result.pc.mp4" class="shipin" controls></video>
        <div class="close" @click="goBack">
            <svg-icon icon-class="close1" class-name="svg_close"></svg-icon>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.video{
    width: 100%;
    height: 51rem;
    background: #000;
    position: relative;
    overflow: hidden;
    .shipin{
        width: 61.25rem;
        height: 34.37rem;
        top: 9rem;
        position: absolute;
        left: 14rem;
        outline: none;
    }
    .close{
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 10rem;
        right: 10rem;
        cursor: pointer;
        .svg_close{
            width: 3rem;
            height: 3rem;
        }
    }
}
</style>