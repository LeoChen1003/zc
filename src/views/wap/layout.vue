<!-- layout -->
<template>
  <div>
    <div class="header" :class="dropdown ? 'header-dropdown' : ''">
      <div class="icon" @click="dropdown = !dropdown"></div>
      <div class="logo"></div>
      <div class="contact"></div>
    </div>
    <div class="placeholder"></div>
    <transition name="dropdown">
      <div class="dropdown" v-if="dropdown">
        <div
          class="ul"
          :class="item.show ? 'open-ul' : ''"
          v-for="(item, index) in route"
          :key="index"
        >
          <div
            class="li-box"
            @click="
              item.children
                ? (item.show = !item.show)
                : $router.push({ path: item.url })
            "
          >
            <div class="li">{{ item.name }}</div>
            <div class="li-arrow"></div>
          </div>
          <transition name="fade">
            <div
              v-if="item.children"
              v-show="item.show"
              style="margin-top:1rem;"
            >
              <div
                class="children"
                v-for="(children, idx) in item.children"
                @click="
                  $router.push({ path: children.url })
                  dropdown = false
                "
                :key="index + idx"
              >
                {{ children.name }}
              </div>
            </div>
          </transition>
        </div>
        <div class="contact-us" @click="$router.push('/wap/contact')">
          联系我们
        </div>
      </div>
    </transition>
    <router-view />
    <div class="footer"></div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console*/
let self
export default {
  created() {
    self = this
  },
  data() {
    return {
      dropdown: false,
      route: [
        {
          name: '产品中心',
          children: [
            {
              name: '产品中心-1',
              url: '/wap/productCenter'
            },
            {
              name: '智能大滚筒炒菜机套机',
              url: '/wap/proDetailGTGL'
            },
            {
              name: '智能精炒一体机',
              url: '/wap/proDetailYTJGL'
            }
          ],
          show: false
        },
        {
          name: '新闻中心',
          url: '/wap/new'
        },
        {
          name: '核心优势',
          url: '/wap/coreAdvantages'
        },
        {
          name: '关于我们',
          children: [
            {
              name: '企业介绍',
              url: '/wap/aboutIntro'
            },
            {
              name: '专利发明',
              url: '/wap/aboutPatent'
            },
            {
              name: '实验室',
              url: '/wap/aboutLab'
            }
          ],
          show: false
        }
      ],
      windowHeight: ''
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // handleScroll () {
    //   console.log(document.documentElement.scrollTop)
    //   console.log('aa')
    // },
  },
  watch: {
    $route() {
      self.dropdown = false
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 3rem;
  background: #000000;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1rem;
  transition: all 0.4s;

  .icon {
    width: 2rem;
    height: 2rem;
    background: red;
    transition: all 0.4s;
  }
}

.header-dropdown {
  background: #fff;

  .icon {
    background: blue;
  }
}

.dropdown {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 3rem;
  z-index: 999;
  overflow: hidden;

  .ul {
    box-sizing: border-box;
    margin: 0 2rem;
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
  }

  .li-box {
    display: flex;
    justify-content: space-between;

    .li-arrow {
      width: 0.7rem;
      height: 0.7rem;
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      transform: rotate(45deg);
      transition: all 0.4s;
    }
  }

  .open-ul {
    .li-arrow {
      transform: rotate(-135deg);
    }
  }

  .li {
    font-size: 0.94rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 1.31rem;
  }

  .children {
    font-size: 0.81rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 1.13rem;
    box-sizing: border-box;
    padding: 0 0.6rem;
    margin-bottom: 1rem;
  }

  .children:last-child {
    margin: 0;
  }

  .contact-us {
    width: 20.94rem;
    height: 2.25rem;
    background: rgba(0, 0, 0, 1);
    border-radius: 1.13rem;
    font-size: 0.88rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 2.25rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s;
}

.dropdown-enter,
.dropdown-leave-to {
  height: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.placeholder {
  height: auto;
}
</style>
