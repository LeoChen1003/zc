<template>
  <div class="about">
    <zcHeader v-on:changeTab="receive" :tab4="tab1" :isWhite="true"></zcHeader>
    <div class="about_pic">
      <p>优特智厨</p>
      <p>关于我们</p>
    </div>
    <div class="about_item">
      <span
        @click="toggleTab('comIntro')"
        :class="isActive1?'bolder':'normal'"
        ref="aboutComIntro"
      >企业介绍</span>
      <span @click="toggleTab('inven')" :class="isActive2?'bolder':'normal'">专利发明</span>
      <span @click="toggleTab('labor')" :class="isActive3?'bolder':'normal'">实验室</span>
    </div>
    <comIntro :is="currentTab" :intro="left"></comIntro>
    <zcFooter></zcFooter>
  </div>
</template>

<script>
import { mapState } from "vuex";
import zcHeader from "@/components/zcHeader.vue";
import zcFooter from "@/components/zcFooter.vue";
import comIntro from "@/components/comIntro.vue";
import labor from "@/components/laboratory.vue";
import inven from "@/components/invention.vue";
import "../styles/variables.scss";
export default {
  name: "with",
  data() {
    return {
      currentTab: "comIntro",
      isActive1: true,
      isActive2: false,
      isActive3: false,
      items: [],
      tab: 0,
      tab1: 0,
      left: 0
    };
  },
  components: {
    zcHeader,
    zcFooter,
    comIntro,
    labor,
    inven
  },
  methods: {
    toggleTab: function(tab) {
      this.currentTab = tab;
      if (tab == "comIntro") {
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
      } else if (tab == "inven") {
        this.isActive2 = true;
        this.isActive1 = false;
        this.isActive3 = false;
      } else if (tab == "labor") {
        this.isActive3 = true;
        this.isActive2 = false;
        this.isActive1 = false;
      }
    },
    receive(val) {
      this.tab = val;
      if (this.tab === 0) {
        this.currentTab = "comIntro";
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
      } else if (this.tab === 1) {
        this.currentTab = "inven";
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
      } else if (this.tab === 2) {
        this.currentTab = "labor";
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
      }
    }
  },
  computed: {
    ...mapState({
      windowWidth: "windowWidth"
    })
  },
  mounted() {
    this.left = this.$refs.aboutComIntro.offsetLeft;
    let type = this.$route.query.type;
    if (type == "about_intro") {
      this.toggleTab("comIntro");
    } else if (type == "about_inven" || type == "inven") {
      this.toggleTab("inven");
    } else if (type == "about_lab" || type == "lab") {
      this.toggleTab("labor");
    }
  },
  watch: {
    $route() {
      let type = this.$route.query.type;
      if (type == "about_intro") {
        this.toggleTab("comIntro");
      } else if (type == "about_inven" || type == "inven") {
        this.toggleTab("inven");
      } else if (type == "about_lab" || type == "lab") {
        this.toggleTab("labor");
      }
    },
    windowWidth() {
      this.left = this.$refs.aboutComIntro.offsetLeft;
    }
  }
};
</script>

<style lang="scss" scope>
.time1 {
  color: #2cc6c0;
  font-size: 1.75rem;
}
.time2 {
  font-size: 1.75rem;
  color: #cccccc;
}
.about {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .about_pic {
    width: 100%;
    height: 15rem;
    background: url("../assets/aboutUs/header.jpg");
    overflow: hidden;
    background-size: 100% 100%;
    p:first-child {
      width: 3.5rem;
      height: 1.25rem;
      font-size: 0.87rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin: 5.94rem auto 0;
    }
    p:nth-child(2) {
      width: 8rem;
      font-size: 2rem;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      margin: 0 auto;
    }
  }
  .about_item {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span:not(:first-child) {
      margin-left: 3rem;
      cursor: pointer;
    }
    .bolder {
      font-weight: 600;
      color: #000;
    }
    .normal {
      font-weight: 300;
      color: #333;
    }
  }
}
</style>