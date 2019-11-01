<template>
  <div class="footer">
    <div class="footer_left">
      <ul>
        <li>产品中心</li>
        <li>智能精炒一体机</li>
        <li>智能炒菜机套装</li>
        <li>其他智厨产品</li>
        <li>其他智厨产品</li>
      </ul>
      <ul>
        <li>新闻中心</li>
      </ul>
      <ul>
        <li>核心优势</li>
        <li>适用场景</li>
        <li>智能系统</li>
        <li>智能技术</li>
        <li>智能数据管控</li>
        <li>智能配件</li>
        <li>智能服务体系</li>
      </ul>
      <ul>
        <li>关于我们</li>
        <li>企业简介</li>
        <li>发展历程</li>
        <li>企业实力</li>
      </ul>
      <ul>
        <li>联系我们</li>
        <li>申请使用</li>
      </ul>
      <div class="footer_right">
        <div class="footer_right_tel">4000-666-888</div>
        <div class="footer_right_time">
          <div>客服联系电话</div>
          <div>周一至周日 8:00-20:00</div>
        </div>
        <div class="footer_right_about">
          <span>关注我们：</span>
          <svg-icon icon-class="homeWeixin"
                    style="margin-right:1rem;"
                    class-name="svg_size"></svg-icon>
          <svg-icon icon-class="homeWeibo"
                    class-name="svg_size"></svg-icon>
        </div>
      </div>
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
.footer {
  background: #020202;
  width: 100%;
  padding: 3.75rem 13.5rem 5.88rem 13.5rem;
  color: #fff;
  box-sizing: border-box;
}
.footer_left {
  display: flex;
  justify-content: space-between;
  ul > li:first-child {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }
  ul > li:not(:first-child) {
    font-size: 0.88rem;
    color: #888888;
    margin-bottom: 1rem;
    cursor: pointer;
  }
}
.footer_right {
  text-align: right;
  margin-top: -1rem;
  margin-left: 9.88rem;
  color: #888888;
  font-size: 0.88rem;
  .footer_right_tel {
    font-size: 2.5rem;
    color: #fff;
    font-family: Oswald-Regular_Light, Oswald;
    font-weight: normal;
    margin-bottom: 0.88rem;
  }
  .footer_right_time {
    margin-bottom: 1.5rem;
    div {
      margin-bottom: 0.5rem;
    }
  }
  .footer_right_about {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      margin-right: 1rem;
    }
    .svg_size {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
