<template>
  <div class='reservationBtn'>
    <div class="btn">立即预约</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {

  },
  created () {

  },
  mounted () {

  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.btn {
  width: 5.38rem;
  height: 1.88rem;
  background: rgba(44, 198, 192, 1);
  border-radius: 1.13rem;
  border: 0.06rem solid rgba(44, 198, 192, 1);
  font-size: 0.88rem;
  text-align: center;
  color: #fff;
  line-height: 1.88rem;
}
</style>