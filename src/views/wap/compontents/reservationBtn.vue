<template>
  <div class="reservationBtn">
    <div class="btn" @click="show = true">立即预约</div>
    <transition name="dropdown">
      <div class="dialog" v-if="show">
        <div class="svg_close" @click="show = false">
          <svg-icon
            icon-class="close"
            style="width:1.88rem;height:1.88rem;"
          ></svg-icon>
        </div>

        <div class="contact_d1">
          <div class="title">订购咨询</div>
          <div class="tip">
            填写并提交以下信息，我们的工作人员将在2个工作日内与您联系
          </div>
        </div>
        <form class="contact_commit">
          <div class="contact_commit_input">
            <div class="input_name">称呼</div>
            <svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon
            ><input
              class="input1"
              type="name"
              placeholder="例如：王先生"
            /><br />
          </div>
          <div class="contact_commit_input">
            <div class="input_name">电话</div>
            <svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon
            ><input class="input2" placeholder="请填写电话" /><br />
          </div>
          <div class="contact_commit_input">
            <div class="input_name">省市</div>
            <input class="input3" placeholder="例如：浙江省杭州市" /><br />
          </div>
          <div class="contact_commit_input">
            <div class="input_name">需求设备</div>
            <input placeholder="请选择需求设备…" class="input4" />
            <div class="arrow" @click="open">
              <div class="li_arrow" :class="dropdown ? 'open' : ''"></div>
            </div>
            <br />
            <div v-show="dropdown" class="contact_commit_input_select" id="sel">
              <div
                v-for="(item, i) of machine"
                @click="changeTxt(i)"
                :key="i"
                class="select_item"
                :class="{ blue: changeColor == i }"
                style="color:#000;"
              >
                {{ machine[i] }}
              </div>
            </div>
          </div>
          <div class="contact_commit_input">
            <div class="input_name">需求数量</div>
            <input placeholder="请填写需求数量…" /><br />
          </div>
        </form>
        <div class="contact_commit_btn">
          <div class="btn" @click="show = false">
            提交意愿
          </div>
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
  data() {
    return {
      show: false,
      selectDisplay: 'none',
      iconClass: 'xia',
      machine: ['智能大滚筒炒菜机套机', '智能精炒一体机', '其他设备'],
      changeColor: -1,
      cityColor: false,
      target: 'btn1',
      visible: false,
      dropdown: false
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    open() {
      this.dropdown = !this.dropdown
    }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
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

.dialog {
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;

  .svg_close {
    position: absolute;
    top: 1.19rem;
    right: 1.75rem;
  }
}

.contact_d1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.88rem;
  margin-bottom: 3.81rem;

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 0.38rem;
  }
  .tip {
    text-align: center;
    width: 12.75rem;
    font-size: 0.69rem;
    color: rgba(0, 0, 0, 1);
    line-height: 1rem;
  }
}

.contact_commit {
  padding: 0 1.88rem;
  box-sizing: border-box;
  .contact_commit_input {
    width: 100%;
    padding: 1.13rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    position: relative;
    .icon_star {
      position: absolute;
      width: 0.31rem;
      height: 0.31rem;
      top: 1rem;
      left: 2.8rem;
    }
    .input_name {
      width: 4rem;
      margin-right: 1.5rem;
      font-size: 0.94rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      line-height: 1.31rem;
    }
    input {
      border: none;
      display: inline-block;
      height: 1.5rem;
      outline: none;
      font-size: 0.94rem;
      color: rgba(204, 204, 204, 1);
      line-height: 1.31rem;
    }
    input::-webkit-input-placeholder {
      font-size: 0.94rem;
      color: #cccccc;
    }
    input::-moz-placeholder {
      font-size: 0.94rem;
      color: #cccccc;
    }
    input:-moz-placeholder {
      font-size: 0.94rem;
      color: #cccccc;
    }
    input:-ms-input-placeholder {
      font-size: 0.94rem;
      color: #cccccc;
    }
  }
  .contact_commit_input:nth-child(4) {
    position: relative;
    .arrow {
      position: absolute;
      right: 0.5rem;
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

    .contact_commit_input_select {
      position: absolute;
      top: 3.9rem;
      left: 4.5rem;
      width: calc(100vw - 8.26rem);
      height: 13.38rem;
      z-index: 1;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.19rem;
      border: 0.06rem solid rgba(236, 236, 236, 1);
      .select_item {
        box-sizing: border-box;
        padding: 1.25rem 0.81rem;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
      }
      .blue {
        background: rgba(44, 198, 192, 0.1);
      }
      .select_item:nth-child(2) {
        border-top: 1px solid rgba(236, 236, 236, 1);
        border-bottom: 1px solid rgba(236, 236, 236, 1);
      }
    }
  }
}
.contact_commit_btn {
  padding: 0 1.88rem;
  box-sizing: border-box;
  margin-top: 2.5rem;

  .btn {
    width: 100%;
    height: 2.25rem;
    background: rgba(0, 0, 0, 1);
    border-radius: 1.13rem;
    font-size: 0.88rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 2.25rem;
    text-align: center;
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.5s;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}
</style>
