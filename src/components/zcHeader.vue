<template>
  <div class="header">
    <div class="header_logo">
      utzc
    </div>
    <div class="header_navbar">
      <span>产品中心</span>
      <span>新闻中心</span>
      <span>核心优势</span>
      <span>关于我们</span>
    </div>
    <div class="header_btn">
      联系我们
    </div>
  </div>
</template>

<script>
export default {
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  width: 100%;
  padding: 0 22.2rem;
  box-sizing: border-box;
  color: #fff;
  height: 3rem;
  line-height: 3rem;
  box-shadow: 0rem -0.06rem 0rem 0rem;
  .header_navbar {
    color: #a2a6ac;
    font-size: 0.88rem;
    span {
      cursor: pointer;
    }
    span:not(:last-child) {
      margin-right: 3rem;
    }
  }
  .header_btn {
    width: 6.5rem;
    height: 2rem;
    line-height: 2rem;
    color: #000;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 1rem;
    cursor: pointer;
  }
}
</style>
