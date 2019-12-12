<template>
  <div class="wrapper">
    <video
      class="index_video"
      src="http://cdn.withpush.cn/youtezhichu/result.mobile.mp4"
      preload="auto"
      controls="controls"
      autoplay="autoplay"
      playsinline="true"
      webkit-playsinline="true"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
    >
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    metaInfo:{
      title:'优特智厨 - 官方网站',
      meta:[{
        name:'keywords',
        content:'视频'
      }]
    },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.wrapper {
  // padding-top: 3rem;
  margin-top: 3rem;
  height: calc(100vh - 3rem);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
}

.index_video {
  width: 100%;
}
</style>
