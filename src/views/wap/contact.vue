<template>
  <div class="wrapper">
    <div class="contact_header">
      <div class="con">联系我们</div>
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
        ><input class="input1" type="name" v-model="name" placeholder="例如：王先生" /><br />
      </div>
      <div class="contact_commit_input">
        <div class="input_name">电话</div>
        <svg-icon icon-class="icon_star" class-name="icon_star"></svg-icon
        ><input class="input2" v-model="phone" placeholder="请填写电话" /><br />
      </div>
      <div class="contact_commit_input">
        <div class="input_name">省市</div>
        <input class="input3" v-model="provice" placeholder="例如：浙江省杭州市" /><br />
      </div>
      <div class="contact_commit_input">
        <div class="input_name">需求设备</div>
        <input placeholder="请选择需求设备…" class="input4" v-model="equipment"/>
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
        <input placeholder="请填写需求数量…" v-model="amount"/><br />
      </div>
    </form>
    <div class="contact_commit_btn">
      <div class="btn" @click="sendMessage">
        提交意愿
      </div>
    </div>
    <div class="contact_d2">
      <div class="p1">咨询合作</div>
      <div class="p2">咨询合作联系邮箱</div>
      <div class="contact_commit_email">
        <div class="email_item">
          <div class="email_name">品牌合作邮箱：</div>
          <div class="email">zhaochenghua@ut.com</div>
        </div>
        <div class="email_item">
          <div class="email_name">媒体合作邮箱：</div>
          <div class="email">zhaochenghua@ut.com</div>
        </div>
        <div class="email_item">
          <div class="email_name">人才招聘：</div>
          <div class="email">hr@ut.com</div>
        </div>
      </div>
    </div>
    <div class="contact_d3">
      <div class="title">企业位置</div>
      <div class="contact_d3_content">
        <div class="contact_d3_map">
          <svg-icon icon-class="china" class-name="svg_china"></svg-icon>
          <div
            class="contact_d3_circle1"
            :class="{
              cir_white: target === 'btn3',
              cir_blue: target !== 'btn3'
            }"
          ></div>
          <div
            class="contact_d3_circle2"
            :class="{
              cir_white: target === 'btn2',
              cir_blue: target !== 'btn2'
            }"
          ></div>
          <div
            class="contact_d3_circle3"
            :class="{
              cir_white: target === 'btn1',
              cir_blue: target !== 'btn1'
            }"
          ></div>
        </div>

        <div class="contact_d3_location">
          <div class="contact_d3_location_city">
            <div
              class="contact_d3_location_city_zh"
              @click="changeCity('btn1')"
              :class="{ white: target === 'btn1', light: target !== 'btn1' }"
            >
              <div class="location_left">
                <svg-icon
                  icon-class="city_zh"
                  class-name="city_zh city_svg"
                ></svg-icon>
                <div class="location_city">珠海</div>
              </div>
              <div class="location_right">
                <div class="location_name">硬件研发中心 (总部)</div>
                <div class="location_detail">
                  广东省珠海市香洲区银桦路102号优特科技大厦
                </div>
              </div>
            </div>
            <div
              class="contact_d3_location_city_sz"
              @click="changeCity('btn2')"
              :class="{ white: target === 'btn2', light: target !== 'btn2' }"
            >
              <div class="location_left">
                <svg-icon
                  icon-class="city_sz"
                  class-name="city_sz city_svg"
                ></svg-icon>
                <div class="location_city">深圳</div>
              </div>
              <div class="location_right">
                <div class="location_name">工业设计中心</div>
                <div class="location_detail">
                  广东省深圳市广东省深圳市塘朗金骐智谷大厦1705
                </div>
              </div>
            </div>
            <div
              class="contact_d3_location_city_hz"
              @click="changeCity('btn3')"
              :class="{ white: target === 'btn3', light: target !== 'btn3' }"
            >
              <div class="location_left">
                <svg-icon
                  icon-class="city_hz"
                  class-name="city_hz city_svg"
                ></svg-icon>
                <div class="location_city">杭州</div>
              </div>
              <div class="location_right">
                <div class="location_name">软件研发中心</div>
                <div class="location_detail">
                  浙江省杭州市文一西路西溪八方城9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from '@/utils/request.js'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      selectDisplay: 'none',
      iconClass: 'xia',
      machine: ['智能大滚筒炒菜机套机', '智能精炒一体机', '其他设备'],
      changeColor: -1,
      cityColor: false,
      target: 'btn1',
      visible: false,
      dropdown: false,
      name: null,
      phone: null,
      amount: null,
      equipment: null,
      changeEquip:null,
      provice: null
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    open() {
      this.dropdown = !this.dropdown
    },
    changeTxt(index) {
      var input4 = document.getElementsByClassName('input4')[0]
      input4.value = this.machine[index]
      this.changeColor = index
      this.dropdown = false
    },
    changeCity(index) {
      this.target = index
    },
    sendMessage(){
            if(this.name===null){
                this.$message({
                    showClose: true,
                    message: '称呼不能为空',
                    type: 'warning'
                })
                return;
            }
            if(this.phone===null){
                this.$message({
                    showClose: true,
                    message: '电话不能为空',
                    type: 'warning'
                })
                return;
            }
            if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                this.$message({
                    showClose: true,
                    message: '电话号码格式错误',
                    type: 'warning'
                })
                return;
            }
            if(this.equipment == "智能大滚筒炒菜机套机"){
                this.changeEquip = "BIG_BIZ_MACHINE";
            }else if(this.equipment == "智能精炒一体机"){
                this.changeEquip = "SMALL_SMART";
            }else if(this.equipment == "其他设备"){
                this.changeEquip = "OTHER";
            }
            let formData = {
                who: this.name,
                mobile: this.phone,
                zone: this.provice,
                deviceType: this.changeEquip,
                howMany: this.amount
            }
            request({
                url: '/outside/book',
                method: 'post',
                data: formData
            }).then(res=>{
                this.$message({
                    showClose: true,
                    message: '提交成功',
                    type: 'success'
                })
                window.console.log(res.data);
            }).catch(function(error){
                window.console.log(error);
            })
        }
  },
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

.contact_header {
  height: 5.63rem;
  background: rgba(256, 256, 256, 0) url('../../assets/wap/contact/top.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .con {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 1.38rem;
  }
}

.contact_d1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.75rem;
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
      color: #000;
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
.contact_d2 {
  height: 24.38rem;
  padding: 6.44rem 0;
  margin-top: 3.06rem;
  box-sizing: border-box;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;

  .p1 {
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 2.44rem;
  }

  .p2 {
    padding-left: 6.25rem;
    box-sizing: border-box;
    font-size: 0.81rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 0.69rem;
  }

  .contact_commit_email {
    padding-left: 6.25rem;
    box-sizing: border-box;
    .email_item {
      display: flex;

      .email_name {
        font-size: 0.75rem;
        color: rgba(51, 51, 51, 1);
        line-height: 1.88rem;
      }

      .email {
        font-size: 0.75rem;
        font-weight: 600;
        color: rgba(44, 198, 192, 1);
        line-height: 1.88rem;
      }
    }
  }
}
.contact_d3 {
  width: 100%;
  margin-top: 2.75rem;

  .title {
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }

  .contact_d3_content {
    background: linear-gradient(
      180deg,
      rgba(61, 206, 203, 1) 0%,
      rgba(44, 198, 192, 1) 100%
    );
    margin-top: 1.63rem;
    padding-bottom: 3rem;
    box-sizing: border-box;
  }

  .contact_d3_map {
    width: 19.75rem;
    margin: 0rem auto 2.81rem;
    padding-top: 1.06rem;
    box-sizing: border-box;
    position: relative;

    .svg_china {
      width: 19.75rem;
      height: 16.31rem;
    }

    .contact_d3_circle1,
    .contact_d3_circle2,
    .contact_d3_circle3 {
      position: absolute;
      width: 0.45rem;
      height: 0.45rem;
      border: 3px solid rgba(255, 255, 255, 1);
      border-radius: 50%;
      z-index: 1;
    }

    .contact_d3_circle1 {
      left: 14.56rem;
      top: 11.63rem;
      // background: rgba(13, 168, 162, 1);
    }

    .contact_d3_circle2 {
      left: 12.88rem;
      top: 13.19rem;
      // background: rgb(208, 216, 216);
    }

    .contact_d3_circle3 {
      left: 13.5rem;
      top: 13.81rem;
      background-color: #fff;
    }

    .cir_blue {
      background: rgba(13, 168, 162, 1);
    }

    .cir_white {
      background-color: #fff;
    }
  }

  .contact_d3_location {
    width: 100%;
    position: relative;
    .contact_d3_location_city {
      width: 19.69rem;
      border-radius: 0.63rem;
      overflow: hidden;
      margin: 0 auto;
      .contact_d3_location_city_zh,
      .contact_d3_location_city_sz,
      .contact_d3_location_city_hz {
        width: 100%;
        padding: 1.06rem 1.81rem 1.13rem 1.87rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
      }
      .contact_d3_location_city_zh,
      .contact_d3_location_city_sz,
      .contact_d3_location_city_hz {
        .location_left {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 0.81rem;

          .city_svg {
            width: 3.63rem;
            height: 3.63rem;
            margin-bottom: 1.06rem;
          }

          .location_city {
            font-size: 0.75rem;
            color: rgba(51, 51, 51, 1);
          }
        }

        .location_right {
          .location_name {
            font-size: 0.88rem;
            font-weight: 600;
            color: rgba(0, 0, 0, 1);
            margin-bottom: 0.19rem;
          }

          .location_detail {
            font-size: 0.69rem;
            color: rgba(0, 0, 0, 1);
            line-height: 1rem;
          }
        }
      }
      .contact_d3_location_city_zh {
        background-color: #fff;
      }
      .contact_d3_location_city_sz,
      .contact_d3_location_city_hz {
        background-color: #eaf9f8;
      }
      .light {
        background-color: #eaf9f8;
      }
      .white {
        background-color: #fff;
      }
      .contact_d3_location_city_sz {
        border-radius: 0;
      }
      .contact_d3_location_city_hz {
        border-radius: 0 0 0.63rem 0.63rem;
        .svg_hz {
          width: 4.38rem;
          height: 4.38rem;
          position: absolute;
          left: 0.94rem;
          top: 1.06rem;
        }
      }
    }
  }
}
</style>
