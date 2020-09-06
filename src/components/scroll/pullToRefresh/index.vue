<template>
  <div ref="pullrefbox" class="pullrefbox">
    <!-- pulldown提示 -->
    <slot name="pulldown">
      <div class="pulldown-wrapper" v-if="pullText.down.show">
        <div class="trigger">
          <span>{{ pullText.down.text }}</span>
        </div>
      </div>
    </slot>
    <!--  需滚动的内容区域 -->
    <div ref="pullrefresh" class="pullrefresh">
      <!-- content -->
      <div class="listwrap">
        <slot></slot>
      </div>
      <!-- pullup提示 -->
      <slot name="pullup">
        <div class="pullup-wrapper" v-if="pullText.up.show">
          <div class="trigger">
            <span>{{ pullText.up.text }}</span>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/header'

export default {
  name: '',
  components: {
    appHeader
  },
  props: {
    pullDownOpts: {
      type: Object,
      default() {
        return {
          text: '下拉加载',
          more: '松手刷新',
          noMore: '暂时没有数据更新',
          loadY: 50,
          maxY: 90
        }
      }
    },
    pullUpOpts: {
      type: Object,
      default() {
        return {
          text: '加载更多',
          more: '加载中',
          noMore: '我是有底线的',
          maxY: 50
        }
      }
    }
  },
  data () {
    return {
      startX: '',
      startY: '',
      endX: '',
      endY: '',
      moveDistance: 0,
      boxHeight: '',
      el: null,
      wrap: null,
      moved: false,
      direction: '',
      swipe: 'cubic-bezier(0.23, 1, 0.32, 1)',
      bounce: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      pullText: {
        down: {
          show: false,
          Y: '-100%',
          text: ''
        },
        up: {
          show: false,
          Y: '100%',
          text: ''
        }
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created () {
    // https://github.com/qianbin01/lagou_vue
    // https://segmentfault.com/a/1190000017852497
    // https://github.com/ustbhuangyi/better-scroll
  },
  mounted () {
    // this.el = document.getElementById('move')
    this.$nextTick(() => {
      this.el = this.$refs.pullrefbox
      this.wrap = this.$refs.pullrefresh
      this.bindTouchEvent()
    })
  },
  destroyed() {
    console.log('1')
    this.removeTouchEvent()
  },
  methods: {
    bindTouchEvent () {
      this.wrap.addEventListener('touchstart', this._touchStart, {passive: false, capture: false})
      this.el.addEventListener('touchmove', this._touchMove, {passive: false, capture: false})
      this.el.addEventListener('touchend', this._touchEnd, {passive: false, capture: false})
    },
    removeTouchEvent () {
      this.wrap.removeEventListener('touchstart', this._touchStart, false)
      this.el.removeEventListener('touchmove', this._touchMove, false)
      this.el.removeEventListener('touchend', this._touchend, false)
    },
    _touchStart (e) {
      // e.preventDefault()
      // e.stopPropagation()
      // console.log(e)
      let point = e.touches ? e.touches[0] : e
      this.startX = point.pageX
      this.startY = point.pageY
      console.log('scrollHeight', this.wrap.scrollHeight)
      // console.log(this.el.clientHeight)
      // console.log(this.el.offsetHeight)
      // const preDiv = this.el.parentNode
      // console.log(preDiv.scrollHeight)
      this.boxHeight = this.el.offsetHeight
      this.wrap.style.transitionDuration = '0ms'

      this.moved = true
    },
    _touchMove (e) {
      console.log('scrollHeight', this.el.scrollHeight)
      console.log('offsetHeight', this.el.offsetHeight)
      console.log('scrollTop', this.wrap.scrollTop)
      console.log('offsetTop', this.wrap.offsetTop)
      console.log('getBoundingClientRect', this.wrap.getBoundingClientRect().top)
      let point = e.touches ? e.touches[0] : e
      // 差值，判断上拉还是下拉
      const dy = point.pageY - this.startY
      if (dy > 0) {
        // 下拉
        this.direction = 'down'
      } else if (dy < 0) {
        // 上拉
        this.direction = 'up'
      }
      console.log(this.direction)
      // 当位于顶部时，进行上拉，禁止执行事件处理
      if (!this.wrap.scrollTop && this.direction === 'up') {
        this.moved = false
        return
      } else if (this.wrap.scrollTop > 0 && this.direction === 'up') {
        this.moved = true
      } else if (this.wrap.scrollTop <= 0 && this.direction === 'down') {
        this.moved = true
      } else {
        return
      }
      console.log('xxx')
      // 限制可拖动的最大范围
      if (point.pageY > this.boxHeight) {
        this._touchEnd()
      }
      console.log(this.boxHeight + this.wrap.scrollTop >= this.wrap.scrollHeight)
      console.log(this.direction)
      console.log(this.moved)
      // e.preventDefault()
      // this.boxHeight + this.el.scrollTop < this.el.scrollHeight
      if (!this.wrap.scrollTop && this.direction === 'down' && this.moved) {
        // 模拟一个阻尼系数0.85
        this.moveDistance = Math.pow(Math.abs(point.pageY - this.startY), 0.85)
        if (this.moveDistance < 50) {
          this.pullText.down.show = true
          this.pullText.down.text = this.pullDownOpts.text
        } else if (this.moveDistance > 50) {
          // this.pullText.down.show = true
          this.pullText.down.text = this.pullDownOpts.more
        }
        // 禁止默认事件
        e.preventDefault()
        requestAnimationFrame(() => {
          this.wrap.style.transform = 'translate( 0, ' + this.moveDistance + 'px)'
        })
      } else if (this.boxHeight + this.wrap.scrollTop >= this.wrap.scrollHeight && this.direction === 'up' && this.moved) {
        this.moveDistance = -1 * Math.pow(Math.abs(point.pageY - this.startY), 0.85)
        e.preventDefault()
        requestAnimationFrame(() => {
          this.wrap.style.transform = 'translate( 0, ' + this.moveDistance + 'px)'
        })
      }
    },
    _touchEnd (e) {
      // let point = e.changedTouches ? e.changedTouches[0] : e
      // this.endX = point.pageX
      // this.endY = point.pageY
      if (this.moved) {
        this.wrap.style.transitionTimingFunction = this.bounce
        this.wrap.style.transitionDuration = '800ms'
        this.wrap.style.transform = 'translate(0, 0)'
      }
      this.pullText.down.show = false
      this.pullText.down.text = ''
      // reset
      // setTimeout(() => {
      this.startX = 0
      this.startY = 0
      this.moveDistance = 0
      this.moved = false
      this.direction = ''
      // }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.pullrefbox{
  position: relative;
  height: 100%;
  overflow: hidden;
}
.pullrefresh{
  position: relative;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  z-index: 1;
  overflow: auto;
}
.pulldown-wrapper{
  position: absolute;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all;
  .after-trigger{
    margin-top: 10px;
  }
}
.pullup-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
}
</style>
