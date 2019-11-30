<template>
  <div class="data">
    <div class="data_con" ref="dataCon">
      <div class="data_con_hd">
        <p>智能数据管控</p>
        <p>智能管理前厅、后厨数据，实现成本、利润全透明化</p>
      </div>
      <div class="data_con_cen1">
        <div class="data_con_cen1_l">
          <p>设备管理平台</p>
          <p>门店数据运筹帷幄，设备运行数据一目了然，成本透明，合理管理设备。</p>
        </div>
        <div class="data_con_cen1_r">
          <img src="../assets/coreAdvantage/data1.jpg" alt />
        </div>
      </div>
      <div class="data_con_cen2" style="overflow:hidden;border-radius:0 0 0.62rem 0.62rem;">
        <div class="data_con_cen2_l">
          <img src="../assets/coreAdvantage/data2.jpg" alt />
        </div>
        <div class="data_con_cen2_r">
          <p>门店管理平台</p>
          <p>订单任务、运行状态、故障能源消耗全程可视化；设备能耗数据分析管理。</p>
        </div>
      </div>
      <div class="data_chose" @click="cancel" :style="`left:${left}px`">
        <svg-icon icon-class="close1" class-name="svg"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      left: 0
    };
  },
  methods: {
    cancel() {
      this.$parent.modelData = false;
      this.canScroll();
    }
  },
  computed: {
    ...mapState({
      windowWidth: "windowWidth"
    })
  },
  mounted(){
      this.left = this.$refs.dataCon.offsetLeft + 960 + 16
  },
  watch: {
    windowWidth() {
        this.left = this.$refs.dataCon.offsetLeft + 960 + 16
        window.console.log(this.$refs.dataCon.offsetLeft )
    }
  }
};
</script>

<style lang="scss" scoped>
.data {
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  overflow: auto;
  .data_con {
    width: 60rem;
    height: 80.87rem;
    margin: 3rem auto 0;
    margin-bottom: 9.06rem;
    position: relative;
    .data_con_hd {
      width: 100%;
      height: 33.75rem;
      background: url("../assets/coreAdvantage/dataHeader.jpg");
      overflow: hidden;
      border-radius: 0.62rem 0.62rem 0 0;
      p:first-child {
        width: 12.75rem;
        height: 3rem;
        font-size: 2.12rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        margin: 14.44rem auto 0;
      }
      p:nth-child(2) {
        width: 23rem;
        height: 1.38rem;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin: 0.5rem auto 0;
        line-height: 2rem;
      }
    }
    .data_con_cen1 {
      width: 100%;
      height: 26.12rem;
      .data_con_cen1_l,
      .data_con_cen1_r {
        width: 50%;
        float: left;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .data_con_cen1_l {
        background-color: #fff;
        p:first-child {
          width: 9.75rem;
          height: 2.31rem;
          font-size: 1.62rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
          margin-top: 9.37rem;
          margin-left: 7.19rem;
        }
        p:nth-child(2) {
          width: 16.25rem;
          height: 3.69rem;
          font-size: 1rem;
          font-weight: 400;
          color: #333333;
          margin-top: 1.44rem;
          margin-left: 7.19rem;
          line-height: 2rem;
        }
      }
    }
    .data_con_cen2 {
      width: 100%;
      height: 25rem;
      .data_con_cen2_l,
      .data_con_cen2_r {
        width: 50%;
        float: left;
        height: 100%;
      }
      .data_con_cen2_r {
        background-color: #fff;
        p:first-child {
          width: 9.75rem;
          height: 2.31rem;
          font-size: 1.62rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
          margin-top: 8.75rem;
          margin-left: 7.19rem;
        }
        p:nth-child(2) {
          width: 16.25rem;
          height: 3.69rem;
          font-size: 1rem;
          font-weight: 400;
          color: #333333;
          margin-top: 1.44rem;
          margin-left: 7.19rem;
          line-height: 2rem;
        }
      }
    }
  }
  .data_chose {
    width: 3rem;
    height: 3rem;
    position: fixed;
    top: 3rem;
    left: 85.1%;
    cursor: pointer;
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>