<template>
  <div class="my">
    <div class="about_header" @click="dropdown = !dropdown">
      <div class="header_title">{{ title }}</div>
      <div class="li_arrow" :class="dropdown ? 'open' : ''"></div>
    </div>
    <div class="top_model" v-if="dropdown" @touchmove.prevent></div>
    <transition name="fade">
      <div
        class="model"
        v-if="dropdown"
        @touchmove.prevent
        @click="dropdown = false"
      ></div>
    </transition>
    <transition name="fade">
      <div class="dropdown" v-if="dropdown">
        <div
          class="dropdown_item"
          @click="
            $router.push(item.path)
            dropdown = false
          "
          v-for="(item, index) in routeList"
          :key="index"
          v-show="item.name != title"
        >
          {{ item.name }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ['title'],
  data() {
    return {
      routeList: [
        { name: '企业介绍', path: '/wap/aboutIntro' },
        { name: '发明专利', path: '/wap/aboutPatent' },
        { name: '实验室', path: '/wap/aboutLab' }
      ],
      dropdown: false
    }
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
.about_header {
  height: 3rem;
  padding: 0 1.81rem;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .li_arrow {
    width: 0.7rem;
    height: 0.7rem;
    margin-bottom: 0.35rem;
    border-right: 1px solid #000;
    border-bottom: 1px solid rgb(8, 8, 8);
    transform: rotate(45deg);
    transition: all 0.4s;
  }

  .open {
    transform: rotate(-135deg);
    margin-top: 0.35rem;
  }
}

.top_model {
  height: 5.63rem;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 3rem;
  left: 0;
}

.model {
  height: calc(100vh - 11.63rem);
  width: 100%;
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
}

.dropdown {
  color: #333;
  width: 100%;
  line-height: 3rem;
  font-size: 0.75rem;
  padding: 0 1.81rem;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
  background: #fff;
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: all 0.3s;
// }

// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
//   height: 0;
// }
</style>
