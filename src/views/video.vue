<template>
  <div class="video">
    <div class="video_center">
      <div>
        <video src="http://cdn.withpush.cn/youtezhichu/result.pc.mp4" class="shipin" controls></video>
      </div>
      <div class="close" @click="goBack">
        <svg-icon icon-class="close1" class-name="svg_close"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 58.69rem;
  background: #131318;
  display: flex;
  justify-content: center;
  // position: relative;
  overflow: hidden;
  .video_center {
    width: 61.25rem;
    height: 34.37rem;
    position: relative;
    margin: 0 auto;
    margin-top: 9rem;
    // // float: left;
    // div:first-child{
    //     float: left;
    // }
  }
  .shipin {
    width: 61.25rem;
    height: 100%;
    outline: none;
    // float: left;
  }
  .close {
    margin-left: 1rem;
    width: 3rem;
    height: 3rem;
    position: absolute;
    top:0;
    right: -4rem;
    cursor: pointer;
    .svg_close {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>