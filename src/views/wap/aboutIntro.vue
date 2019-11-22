<template>
  <div class="wrapper">
    <div class="ab_header">
      <div class="name">优特智厨</div>
      <div class="ab">关于我们</div>
    </div>
    <AboutChose :title="'企业介绍'"></AboutChose>
    <div class="ab_content">
      <div class="cell">
        <div class="index">01</div>
        <div class="title">以智能解构中餐，用科技为餐饮业赋能</div>
        <div class="content margin_b">
          优特智厨隶属于优特集团，起步于2007年，经12年的发展，已经成长为一家集智能厨电产品研发、设计、生产和销售于一体的高新技术公司。目前公司员工超200人，珠海、杭州和深圳三地协同发展。优特智厨以“互联网+”、“智能+”为战略思路，以复制大厨烹饪技艺为核心技术，以推行中餐标准化为企业使命，致力于打造新型餐饮生态服务体系。
        </div>
        <div class="title">优特集团</div>
        <div class="content">
          珠海优特科技集团（简称“优特集团”）
          资产总值超100亿，员工1700人，子公司将近10个，覆盖工业安全与智能化、物联网、地产与商业运营等多个产业。集团先后获得2004年“国家规划布局重点软件企业”“国家火炬计划软件骨干企业”，2017年获“中国专利优秀奖”等称号。
        </div>
      </div>
      <div class="line"></div>
      <div class="cell">
        <div class="index">02</div>
        <div class="title">企业实力</div>
        <div class="content margin_b">
          珠海优特科技集团（简称“优特集团”）
          资产总值超100亿，员工1700人，子公司将近10个，覆盖工业安全、物联产业、云计算、地产及商业管理等多个行业。
          优特集团斥资2亿，投入员工200余人，历时12年深度研发智能炒菜机，2018年3月，正式成立优特智厨科技有限公司，公司现拥有440项专利技术。
        </div>
        <div class="title">研发背景</div>
        <div class="content">
          优特深耕电力安全领域30年,将综合自动化、智能化应用于电力、石化及轨道交通行业,覆盖三万座发电厂及变电站。
          在智能领域浸淫30多年，优特集团成立优特智厨科技有限公司，正式涉足餐饮领域，通过智能化与自动化，以智能解构中餐，推行中餐标准化，用科技为餐饮业赋能。
        </div>
      </div>
      <div class="line"></div>
      <div class="cell">
        <div class="index">03</div>
        <div class="title">发展历程</div>
        <div class="time_line">
          <el-timeline :reverse="false">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :class="`time_line_c${index}`"
              :size="activity.size"
              :color="activity.color"
            >
              <div class="t1">{{ activity.timestamp }}</div>
              <div>{{ activity.content }}</div>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import AboutChose from './compontents/aboutChose'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { AboutChose },
  data() {
    return {
      activities: [
        {
          content: '开启智能实验室',
          timestamp: '2018',
          size: 'large'
        },
        {
          content: '产品打磨迭代',
          timestamp: '2015-2017',
          size: 'large'
        },
        {
          content: '研发智能一体机，集调料机、灶、烟机、消毒柜于一体',
          timestamp: '2014',
          size: 'large'
        },
        {
          content: '研发商用智能灶',
          timestamp: '2013',
          size: 'large'
        },
        {
          content: '研发智能调料机，实现固体调料精准投放',
          timestamp: '2012',
          size: 'large'
        },
        {
          content: '自主研发智能电磁炉，实现电磁炉智能人机交互',
          timestamp: '2011',
          size: 'large'
        },
        {
          content: '项目启动',
          timestamp: '2007',
          size: 'large'
        }
      ]
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {},
  created() {},
  mounted() {
    this.$emit('setisWhite')
  }
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.wrapper {
  padding-top: 3rem;
  box-sizing: border-box;
}

.ab_header {
  height: 5.63rem;
  background: rgba(256, 256, 256, 0) url('../../assets/wap/about/about_top.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .name {
    font-size: 0.69rem;
    color: rgba(255, 255, 255, 1);
    line-height: 1rem;
    margin-top: 1.94rem;
  }

  .ab {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 1.38rem;
  }
}

.ab_content {
  padding: 0 1.88rem;
  box-sizing: border-box;

  .cell {
    padding: 2.44rem 0 2.56rem 0rem;
    box-sizing: border-box;

    .index {
      font-size: 1.75rem;
      font-weight: bold;
      color: rgba(44, 198, 192, 1);
      margin-bottom: 0.81rem;
    }

    .title {
      font-size: 1.13rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 1.06rem;
    }

    .margin_b {
      margin-bottom: 1rem;
    }
  }

  .line {
    height: 0.06rem;
    background: rgba(236, 236, 236, 1);
  }
}
</style>

<style lang="scss">
.time_line {
  .el-timeline-item__content {
    font-size: 0.88rem;
    color: rgba(51, 51, 51, 1);

    .t1 {
      font-size: 1.25rem;
      font-weight: bold;
      color: rgba(204, 204, 204, 1);
      margin-bottom: 0.63rem;
    }
  }

  .el-timeline-item__node {
    width: 0.55rem;
    height: 0.55rem;
    margin-left: -5.5px;
    margin-top: -0.5px;
    background: #fff;
    border-radius: 50%;
    border: 0.4rem solid #cccccc;
  }

  .el-timeline-item__tail {
    width: 0.38rem;
    margin-left: -0.19rem;
    background: #ececec;
    border: none;
  }

  .time_line_c0 {
    .el-timeline-item__tail {
      background: rgba(44, 198, 192, 1);
    }

    .el-timeline-item__node {
      border: 0.4rem solid #2cc6c0;
    }
  }

  .el-timeline-item__wrapper {
    padding-left: 2.38rem;
    top: -4px;
  }
}
</style>
