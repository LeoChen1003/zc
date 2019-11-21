<template>
  <div class="wrapper">
    <div class="ab_header">
      <div class="name">优特智厨</div>
      <div class="ab">关于我们</div>
    </div>
    <AboutChose :title="'实验室'"></AboutChose>
    <div class="lab_content">
      <div class="lab_title">智能实验室</div>
      <div class="sub_title">国家级实验室</div>
      <div class="content">
        获得国家认可委员会实验室认可。严格执行检验标准、规划，确保检测方法的科学性。引入LVO2HC4:358
        SHIYAN 实验室管理体系，达标国际级标准。
      </div>
      <img src="../../assets/wap/about/lab_1.jpg" alt="1" />
      <div class="sub_title">高学历人才</div>
      <div class="content">
        引入高学历人才，实验室人员均为本科以上学历，保证实验操作的科学与严谨。
      </div>
      <img src="../../assets/wap/about/lab_2.jpg" alt="2" />
      <div class="sub_title">专业化实验设备</div>
      <div class="content">
        划分7个专业化实验室，引入专业化实验设备。实验室涵盖电磁兼容实验室、环境实验室、高压实验室等。
      </div>
      <img src="../../assets/wap/about/lab_3.jpg" alt="3" />
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
  mounted() {}
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

.lab_content {
  width: 100%;
  padding: 1.63rem 1.88rem 0 1.88rem;
  box-sizing: border-box;

  .lab_title {
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 3.31rem;
  }

  .sub_title {
    font-size: 1.13rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 1rem;
  }

  .content {
    font-size: 0.88rem;
    color: rgba(51, 51, 51, 1);
    line-height: 1.88rem;
    margin-bottom: 1.69rem;
  }

  img {
    width: 100%;
    margin-bottom: 3.56rem;
  }
}
</style>
