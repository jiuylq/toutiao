<template>
  <div class="scroll-wrap" ref="scrollWrapper">
    <cube-scroll
      ref="contentScroll"
      :scroll-events="['scroll']"
      :data="content"
      :options="options"
      @scroll="onScrollHandle"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
    >
      <ul class="imgs-wrapper">
        <li v-for="(item, index) in content" :key="index" class="imgs-item">
          <img :src="item.url" @load="onImgLoad" />
        </li>
      </ul>
      <template slot="pulldown" slot-scope="props">
        <div
          v-if="props.pullDownRefresh"
          class="cube-pulldown-wrapper"
          :style="props.pullDownStyle"
        >
          <div
            v-if="props.beforePullDown"
            class="before-trigger"
            :style="{ paddingTop: props.bubbleY + 'px' }"
          >
            <span :class="{ rotate: props.bubbleY > 0 }">↓</span>
          </div>
          <div class="after-trigger" v-else>
            <div v-show="props.isPullingDown" class="loading"><cube-loading></cube-loading></div>
            <transition name="success">
              <div v-show="!props.isPullingDown" class="text-wrapper">
                <span class="refresh-text">今日头条推荐引擎有{{ item }}条更新</span>
              </div>
            </transition>
          </div>
        </div>
      </template>
    </cube-scroll>
  </div>
</template>

<script type="text/javascript">
const imgs = [
  {
    url: 'https://dpubstatic.udache.com/static/dpubimg/GR0Piaf5sz/toutiao_21.JPG'
  }
]

export default {
  props: {},
  components: {},
  data() {
    return {
      content: imgs.slice(),
      options: {
        pullDownRefresh: {
          threshold: 60,
          // stop: 44,
          stopTime: 1000,
          txt: '更新成功'
        },
        pullUpLoad: true,
        scrollbar: {
          fade: true
        }
      },
      secondStop: 26,
      pullDownY: 0,
      item: 8
    }
  },
  computed: {
    pullDownTip() {
      if (this.pullDownY <= 60) {
        return '下拉刷新...'
      } else if (this.pullDownY <= 90) {
        return '继续下拉有惊喜...'
      } else {
        return '松手得惊喜！'
      }
    }
  },
  mounted() {},
  methods: {
    onScrollHandle(pos) {
      this.pullDownY = pos.y
    },
    onPullingDown() {
      setTimeout(() => {
        this.content.unshift(imgs[0])
        // this.$refs.contentScroll.scrollTo(0, this.secondStop, 300)
      }, 1000)
    },
    onPullingUp() {
      setTimeout(() => {
        this.content = this.content.concat(imgs)
      }, 1000)
    },
    onImgLoad() {
      const contentScroll = this.$refs.contentScroll
      // contentScroll.scroll.beforePullDown && contentScroll.refresh()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.scroll-wrap
  height: 100%
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  position: absolute
  top: 0
  bottom: 0
  overflow: hidden
  .imgs-wrapper
    .imgs-item
      >img
        width: 100%
.cube-pulldown-wrapper
  text-align: center
  .before-trigger
    height: auto
    font-size: 30px
    align-self: flex-end
    span
      display: inline-block
      line-height: 1
      transition: all 0.3s
      color: #666
      padding: 15px 0
      &.rotate
        transform: rotate(180deg)
  .after-trigger
    flex: 1
    margin: 0
    .text-wrapper
      margin: 0 auto
      margin-top: 1px
      margin-bottom: 1px
      padding: 10px 0
      color: #498ec2;
      font-size: 13px
      background-color: #d6eaf8
    .cube-loading-spinners
      margin: auto
.success-enter-active, .success-leave-active
  transition: width .5s
.success-enter, .success-leave-to
  width: 70%
.success-enter-to, .success-leave
  width: 100%
</style>
