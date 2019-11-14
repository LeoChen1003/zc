<template>
  <div class="whiteBack">
    <div class="header headerW">
      <div class="header_logo">
        UTZC
      </div>
      <div class="header_navbar">
        <span @click="product" class="productCenter">产品中心</span>
        <span @click="newCenter">新闻中心</span> 
        <span @click="coreAdvantage">核心优势</span>
        <span @mousemove="show" @mouseleave="hide" @click="withUs">关于我们</span>
      </div>
      <div class="header_btn">
        联系我们
      </div>
      <div class="show">
        <p>企业介绍</p>
        <p>专利发明</p>
        <p>实验室</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      
    }
  },
  methods:{
    show(){
      var show = document.getElementsByClassName("show")[0];
      show.style.display = "block";
    },
    hide(){
      var show = document.getElementsByClassName("show")[0];
      show.style.display = "none";
    },
    product(){
      this.$router.push("/product");
    },
    newCenter(){
      this.$router.push("/new");
    },
    coreAdvantage(){
      this.$router.push("/coreAdvantage");
    },
    withUs(){
      this.$router.push("/with");
    }
  },
  mounted(){
    var spans = document.getElementsByTagName("span");
    for(var i = 0; i < spans.length; i++){
      spans[i].onclick = function(){
        for(var i = 0; i < spans.length; i++){
          spans[i].style.color = "#333333";
          spans[i].style.fontWeight = 400;
        }
        this.style.color = "#000000";
        this.style.fontWeight = 600;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.whiteBack,.whiteBack1{
  height: 3rem;
  .header {
    z-index: 99;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0rem;
    padding: 0 22.2rem;
    box-sizing: border-box;
    height: 3rem;
    line-height: 3rem;
    box-shadow: 0rem -0.06rem 0rem 0rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  .header_logo {
    color: #000;
    font-size: 1.6rem;
    font-weight: bolder;
  }
  .header_navbar {
    color: #333333;
    font-size: 0.88rem;
    font-weight: 400;
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
    color: #fff;
    text-align: center;
    background: rgba(0, 0, 0, 1);
    border-radius: 1rem;
    cursor: pointer;
  }
  .show{
    width: 90rem;
    height: 10.75rem;
    display: none;
    position: absolute;
    margin-top: 6.94rem;
    margin-left: -23.12rem;
    background:linear-gradient(180deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 12%,rgba(255,255,255,1) 100%);
    p{
      cursor: pointer;
      width: 3.5rem;
      height: 1.25rem;
      font-size: 0.87rem;
      color: #000;
      margin-left: 52.5rem;
    }
    p:first-child{
      margin-top: 2rem;
    }
    p:nth-child(2){
      margin-top: 1rem;
    }
    p:last-child{
      margin-top: 1rem;
    }
  }
}
.headerB {
  color: #fff;
  background: #000;
  .header_navbar {
    color: #333333;
    font-weight: 400;
  }
  .header_btn {
    color: #000;
    background: rgba(255, 255, 255, 1);
  }
}
.headerW {
  color: #333;
  background: #ffffff;
  .header_navbar {
    color: #333333;
  }
  .header_btn {
    color: #fff;
    background: rgba(0, 0, 0, 1);
  }
}
}
.whiteBack1{
  transition: all 2s;
}
.blackBack,.blackBack1{
  height: 3rem;
  .header {
    z-index: 99;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 22.2rem;
    box-sizing: border-box;
    height: 3rem;
    line-height: 3rem;
    box-shadow: 0rem -0.06rem 0rem 0rem;
    background-color: #000;
  .header_logo {
    color: #fff;
    font-size: 1.6rem;
    font-weight: bolder;
  }
  .header_navbar {
    color: #fff;
    font-size: 0.88rem;
    font-weight: 400;
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
    background: #fff;
    border-radius: 1rem;
    cursor: pointer;
  }
  .show{
    width: 90rem;
    height: 10.75rem;
    display: none;
    position: absolute;
    margin-top: 6.94rem;
    margin-left: -23.12rem;
    background:linear-gradient(180deg,rgba(240,240,240,1) 0%,rgba(255,255,255,1) 12%,rgba(255,255,255,1) 100%);
    p{
      cursor: pointer;
      width: 3.5rem;
      height: 1.25rem;
      font-size: 0.87rem;
      color: #000;
      margin-left: 52.5rem;
    }
    p:first-child{
      margin-top: 2rem;
    }
    p:nth-child(2){
      margin-top: 1rem;
    }
    p:last-child{
      margin-top: 1rem;
    }
  }
}
.headerB {
  color: #000;
  background: #fff;
  .header_navbar {
    color: #fff;
    font-weight: 400;
  }
  .header_btn {
    color: #fff;
    background: #000;
  }
}
.headerW {
  color: #fff;
  background: #000;
  .header_navbar {
    color: #fff;
  }
  .header_btn {
    color: #000;
    background: #fff;
  }
}
}
.blackBack1{
  transition: all 2s;
}
</style>
