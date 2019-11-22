<template>
  <div class="wrapper">
    <div class="ab_header">
      <div class="name">优特智厨</div>
      <div class="ab">关于我们</div>
    </div>
    <AboutChose :title="'发明专利'"></AboutChose>
    <div class="ab_content">
      <svg-icon icon-class="about_patent"></svg-icon>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import AboutChose from './compontents/aboutChose'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { AboutChose },
  data() {
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  created() {},
  mounted() {
    this.$emit('setisWhite')
  }
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.wrapper {
  padding-top: 3rem;
  box-sizing: border-box;
}

.ab_header {
  height: 5.63rem;
  background: rgba(256, 256, 256, 0) url('../../assets/wap/about/about_top.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .name {
    font-size: 0.69rem;
    color: rgba(255, 255, 255, 1);
    line-height: 1rem;
    margin-top: 1.94rem;
  }

  .ab {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 1.38rem;
  }
}

.ab_content {
  width: 100%;
}
</style>
