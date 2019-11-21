<template>
  <div class="wrapper">
    <div class="new_header">
      <div class="title">新闻动态</div>
      <div class="con">对我们了解更多</div>
    </div>
    <div class="new"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
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
  padding-top: 3rem;
  box-sizing: border-box;
}

.new_header {
  height: 5.63rem;
  background: rgba(256, 256, 256, 0) url('../../assets/wap/new/new_top.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 0.19rem;
  }

  .con {
    font-size: 0.69rem;
    color: rgba(22, 22, 22, 1);
  }
}
</style>
