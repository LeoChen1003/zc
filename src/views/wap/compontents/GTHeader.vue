<template>
  <div class="wrapper" :class="isWhite ? 'wrapperB' : 'wrapperW'">
    <div class="topFix">
      <div class="line" :class="isWhite ? 'line_b' : ''"></div>
      <div class="header_box">
        <div
          class="left"
          @click="dropdown = !dropdown"
          :style="
            (dropdown && type == 'js') || type == 'gl'
              ? 'width:97%;'
              : 'width:68%;'
          "
        >
          <div>{{ name }}</div>
          <div class="li_arrow" :class="dropdown ? 'open' : ''"></div>
        </div>
        <reservationBtn v-if="!dropdown && type == 'js'"></reservationBtn>
      </div>
      <transition name="fade">
        <div class="model" v-if="dropdown">
          <div class="dropdown" v-if="dropdown">
            <div
              class="dropdown_item dropdown_item_line"
              :class="type == 'gl' ? 'dropdown_item_active' : ''"
              @click="
                $router.push(glUrl)
                dropdown = false
              "
            >
              概览
            </div>
            <div
              class="dropdown_item"
              :class="type == 'js' ? 'dropdown_item_active' : ''"
              @click="
                $router.push(jsUrl)
                dropdown = false
              "
            >
              技术规格
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import reservationBtn from './reservationBtn'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { reservationBtn },
  props: ['type', 'name', 'glUrl', 'jsUrl', 'isWhite'],
  data() {
    return {
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
.wrapperW {
  .header_box {
    background: #fff;
    color: #333;

    .li_arrow {
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
    }
  }

  .dropdown {
    background: #fff;
  }
}

.wrapperB {
  .header_box {
    background: #000;
  }

  .dropdown {
    background: #000;
    color: rgba(255, 255, 255, 1);

    .dropdown_item_line {
      border-color: #262728;
    }
  }
}

.topFix {
  position: fixed;
  top: 3rem;
  z-index: 20;
  width: 100%;
}

.line {
  width: 100%;
  height: 0.06rem;
  background: #f2f2f2;
}

.line_b {
  background: #262728;
}

.header_box {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.88rem 1rem;
  color: #fff;
  box-sizing: border-box;

  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .li_arrow {
    width: 0.7rem;
    height: 0.7rem;
    margin-bottom: 0.35rem;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(45deg);
    transition: all 0.4s;
  }

  .open {
    transform: rotate(-135deg);
    margin-top: 0.35rem;
  }
}

.model {
  height: calc(100vh - 3rem);
  width: 100%;
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
}

.dropdown {
  color: #333;
  font-size: 0.75rem;
  padding: 0 2.38rem 1.12rem 2.38rem;
  box-sizing: border-box;
  .dropdown_item {
    padding: 0.75rem 0.63rem;
    box-sizing: border-box;
  }

  .dropdown_item_active {
    font-weight: 600;
  }

  .dropdown_item_line {
    border-bottom: 1px solid #f2f2f2;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
