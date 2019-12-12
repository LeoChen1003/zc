<template>
  <div class="wrapper">
    <div class="new_header">
      <div class="title">新闻动态</div>
      <div class="con">对我们了解更多</div>
    </div>
    <div class="new_detail">
      <!-- {{ info }} -->
      <div class="top" v-if="info.top == 1">置顶</div>
      <div class="time">
        {{ info.updatedAt ? info.updatedAt.slice(0, 4) : '' }}年{{
          info.updatedAt ? info.updatedAt.slice(5, 7) : ''
        }}月{{ info.updatedAt ? info.updatedAt.slice(8, 10) : '' }}日
      </div>
      <div class="title">
        {{ info.title }}
      </div>
      <div class="content" v-html="info.content"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from '@/utils/request.js'

let self
export default {
  metaInfo:{
      title:'新闻中心 - 优特智厨',
      meta:[{
        name:'keywords',
        content:'新闻中心'
      }]
    },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      info: {}
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  created() {
    self = this
  },
  mounted() {
    // self.info = JSON.parse(localStorage.getItem('newDetail'))
    let id = self.$route.query.id
    request({
      url: '/outside/post/' + id,
      method: 'get'
    }).then(res => {
      self.info = res.data
    })
  }
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.wrapper {
  min-height: 100vh;
  padding-top: 3rem;
  box-sizing: border-box;
  background: #f8f9fb;
}

.new_header {
  height: 5.63rem;
  background: rgba(256, 256, 256, 0) url('../../assets/wap/new/new_top.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2.13rem;
  box-sizing: border-box;

  .title {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 0.19rem;
  }

  .con {
    font-size: 0.69rem;
    color: rgba(22, 22, 22, 1);
  }
}

.new_detail {
  padding: 1.38rem 1.25rem 2.44rem 1.25rem;
  box-sizing: border-box;

  .top {
    width: 4.19rem;
    height: 2rem;
    background: rgba(44, 198, 192, 1);
    border-radius: 0.63rem 0rem 0.63rem 0rem;
    font-size: 0.69rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 2rem;
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .time {
    font-size: 0.69rem;
    font-weight: 500;
    color: rgba(98, 98, 98, 1);
    margin-bottom: 1.38rem;
  }

  .title {
    font-size: 1.13rem;
    font-weight: 600;
    color: rgba(22, 22, 22, 1);
    margin-bottom: 1.63rem;
  }

  .content {
    width: 100%;
    padding: 1.5rem 0;
    box-sizing: border-box;
    border-top: 0.06rem solid #d4d4d4;
    border-bottom: 0.06rem solid #d4d4d4;
    font-size: 0.81rem;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: rgba(22, 22, 22, 1);
    line-height: 1.87rem;

    .img {
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
.new_detail .content img {
  width: 100%;
  height: auto;
  margin: 1.5rem 0;
  object-fit: contain;
}
</style>
