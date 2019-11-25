<template>
  <div class="wrapper">
    <div class="new_header">
      <div class="title">新闻动态</div>
      <div class="con">对我们了解更多</div>
    </div>
    <div class="new_container">
      <div class="new_list">
        <div
          class="new_item"
          v-for="(item, index) in newList"
          :key="index"
          @click="toDetail(item)"
        >
          <div class="new_item_left">
            <img :src="item.image" alt="" />
          </div>
          <div class="new_item_right">
            <div class="time">
              <div class="time_txt">
                {{ item.updatedAt.slice(0, 4) }}年{{
                  item.updatedAt.slice(5, 7)
                }}月{{ item.updatedAt.slice(8, 10) }}日
              </div>
            </div>
            <div class="title">{{ item.title }}</div>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="new_footer" v-if="newList.length > 0">
        <div class="new_footer_l" @click="prev">
          <svg-icon
            :icon-class="
              isFirst ? 'leftDisable' : activeLeft ? 'leftHover' : 'leftArrow'
            "
            :class-name="activeLeft ? 'active_new_svg' : 'new_svg'"
          ></svg-icon>
        </div>
        <div class="new_footer_c">{{ page + 1 }}页 {{ total }}</div>
        <div class="new_footer_r" @click="next">
          <svg-icon
            :icon-class="
              isLast
                ? 'rightDisable'
                : activeRight
                ? 'rightHover'
                : 'rightArrow'
            "
            :class-name="activeRight ? 'active_new_svg' : 'new_svg'"
          ></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import request from '@/utils/request.js'

let self
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      page: 0,
      pagesize: 20,
      total: 1,
      isFirst: true,
      isLast: false,
      newList: [],
      activeLeft: false,
      activeRight: false
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    getNewList() {
      request({
        url: '/outside/posts',
        method: 'get',
        params: {
          page: self.page,
          pagesize: self.pagesize
        }
      }).then(res => {
        self.newList = res.data.content
        self.isLast = res.data.last
        self.isFirst = res.data.first
        self.total = res.data.totalPages
      })
    },
    prev() {
      if (!self.isFirst) {
        self.activeLeft = true
        setTimeout(() => {
          self.activeLeft = false
        }, 200)
        self.page = self.page - 1
        self.getNewList()
      }
    },
    next() {
      if (!self.isLast) {
        self.activeRight = true
        setTimeout(() => {
          self.activeRight = false
        }, 200)
        self.page = self.page + 1
        self.getNewList()
      }
    },
    toDetail(row) {
      self.$router.push({
        path: '/wap/newDetail',
        query: {
          id: row.id
        }
      })
      // localStorage.setItem('newDetail', JSON.stringify(row))
    }
  },
  created() {
    self = this
  },
  mounted() {
    self.getNewList()
    this.$emit('setisWhite')
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

.new_container {
  background: #f8f9fb;
}

.new_list {
  padding: 1.88rem 1.25rem 1rem;
  box-sizing: border-box;

  .new_item {
    display: flex;
    margin-bottom: 1.88rem;

    .new_item_left {
      width: 6.31rem;
      height: 3.5rem;
      border-radius: 0.5rem;
      overflow: hidden;
      margin-right: 0.69rem;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .new_item_right {
      .time {
        display: flex;
        margin-bottom: 0.19rem;

        .time_txt {
          font-size: 0.69rem;
          font-weight: 500;
          color: rgba(22, 22, 22, 1);
          margin-right: 0.5rem;
        }

        .time_up {
          font-size: 0.69rem;
          font-weight: 500;
          color: rgba(0, 116, 255, 1);
        }
      }

      .title {
        font-size: 0.81rem;
        font-weight: 600;
        color: rgba(22, 22, 22, 1);
        line-height: 1.13rem;
      }
    }
  }

  .line {
    width: 100%;
    height: 0.06rem;
    background: rgba(212, 212, 212, 1);
  }
}

.new_footer {
  display: flex;
  align-items: center;
  padding: 2.44rem 0 2.44rem 1.25rem;
  box-sizing: border-box;
  .new_footer_l,
  .new_footer_r {
    width: 1.5rem;
    height: 1.5rem;
    .new_svg,
    .active_new_svg {
      width: 100%;
      height: 100%;
    }
  }
  .new_footer_l {
    margin-right: 2.63rem;
  }
  .new_footer_r {
    margin-left: 2.63rem;
  }
}
</style>
