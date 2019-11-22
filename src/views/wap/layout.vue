<!-- layout -->
<template>
  <div ref="wapHeader">
    <div
      class="header"
      :class="dropdown ? 'header-dropdown' : isWhite ? 'headerW' : ''"
    >
      <div class="icon" @click="dropdown = !dropdown">
        <svg-icon
          :icon-class="
            dropdown
              ? 'wap_index_close'
              : isWhite
              ? 'wap_index_more_b'
              : 'wap_index_more_w'
          "
          class-name="index_svg"
        ></svg-icon>
      </div>
      <div
        class="logo"
        :style="isWhite ? 'color:#000;' : 'color:#fff;'"
        @click="$router.push('/wap/index')"
      >
        <!-- <svg-icon icon-class="logo" class-name="index_svg"></svg-icon> -->
        ut
      </div>
      <div class="contact" @click="$router.push('/wap/contact')">
        联系我们
      </div>
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
            <div class="li-arrow" v-if="item.children"></div>
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
    <transition name="fade-transform" mode="out-in">
      <router-view @setisWhite="setisWhite" @setisBlack="setisBlack"
    /></transition>
    <div class="footer">
      <div class="footer_item" v-for="(item, index) in route" :key="index">
        <div class="footer_item_box" @click="item.footshow = !item.footshow">
          <div>{{ item.name }}</div>
          <div class="item_icon">
            <svg-icon
              icon-class="wap_index_bottom"
              class-name="item_icon_svg"
              :style="
                item.footshow
                  ? 'transform: rotate(0deg);'
                  : 'transform: rotate(45deg);'
              "
            ></svg-icon>
          </div>
        </div>
        <transition name="fade">
          <div
            v-if="item.children"
            v-show="item.footshow"
            style="margin-top:1rem;"
          >
            <div
              class="children"
              v-for="(children, idx) in item.children"
              @click="footerActive(children.url, item)"
              :key="index + idx"
            >
              {{ children.name }}
            </div>
          </div>
        </transition>
      </div>
      <div class="footer_info">
        <div class="footer_info_left">
          <div class="phone">4000-666-888</div>
          <div class="working_time">
            客服联系电话<br />
            周一至周日 8:00-20:00
          </div>
        </div>
        <div class="footer_info_right">
          <div class="icon">
            <svg-icon
              icon-class="homeWeixin"
              style="margin-right:1rem;"
              class-name="svg_size"
            ></svg-icon>
            <svg-icon icon-class="homeWeibo" class-name="svg_size"></svg-icon>
          </div>
          <div class="tip">关注我们</div>
        </div>
      </div>
    </div>
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
      isWhite: false,
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
          show: false,
          footshow: false
        },
        {
          name: '新闻中心',
          url: '/wap/new',
          show: false,
          footshow: false
        },
        {
          name: '核心优势',
          children: [
            {
              name: '智能系统 OS',
              url: '/wap/coreAdvantages?type=modelXT'
            },
            {
              name: '智能技术',
              url: '/wap/coreAdvantages?type=modelJS'
            },
            {
              name: '智能数据管控',
              url: '/wap/coreAdvantages?type=modelGK'
            },
            {
              name: '智能配件',
              url: '/wap/coreAdvantages?type=modelPJ'
            },
            {
              name: '7 星尊享服务体系',
              url: '/wap/coreAdvantages?type=modelFW'
            }
          ],
          show: false,
          footshow: false
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
          show: false,
          footshow: false
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
    footerActive(url, row) {
      self.$router.push({ path: url })
      row.footshow = false
    },
    setisWhite() {
      self.isWhite = true
    },
    setisBlack() {
      self.isWhite = false
    }
  },
  watch: {
    $route() {
      self.dropdown = false
      document.documentElement.scrollTop = 0
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
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 1rem;
  transition: all 0.4s;

  .icon {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .index_svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .contact {
    width: 5.38rem;
    height: 1.88rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 1rem;
    font-size: 0.88rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 1.88rem;
    text-align: center;
  }
}

.headerW {
  background: #fff;

  .contact {
    background: #030303;
    color: #fff;
  }
}

.header-dropdown {
  background: #fff;

  .contact {
    display: none;
  }

  .logo {
    display: none;
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

.footer {
  padding: 2.5rem;
  box-sizing: border-box;
  background: rgba(2, 2, 2, 1);

  .footer_item {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 1);
    padding: 0.94rem 0;
    box-sizing: border-box;
    border-bottom: 1px solid #555555;

    .footer_item_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item_icon {
        width: 0.63rem;
        height: 0.63rem;

        .item_icon_svg {
          width: 100%;
          height: 100%;
          transition: all 0.3s;
        }
      }
    }

    .children {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.65);
      margin-bottom: 0.44rem;
      margin-left: 0.75rem;
    }

    .children:last-child {
      margin-bottom: 0;
    }
  }

  .footer_info {
    display: flex;
    justify-content: space-between;
    margin-top: 2.38rem;

    .footer_info_left {
      .phone {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 0.81rem;
      }

      .working_time {
        font-size: 0.69rem;
        color: rgba(136, 136, 136, 1);
        line-height: 1.13rem;
      }
    }

    .footer_info_right {
      text-align: right;
      .icon {
        display: flex;
        margin-top: 0.5rem;
        margin-bottom: 0.94rem;

        .svg_size {
          width: 1.5rem;
          height: 1.19rem;
        }
      }

      .tip {
        font-size: 0.69rem;
        color: rgba(136, 136, 136, 1);
      }
    }
  }
}

// transition

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

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
