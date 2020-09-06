<template>
  <div id="">
    <!-- <app-header /> -->
    <div ref="move" id="move" class="ly-h">
      <div ref="wrap" class="itemwrap">
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
        <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
        <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
      </div>
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
  data () {
    return {
      startX: '',
      startY: '',
      endX: '',
      endY: '',
      moveDistance: 0,
      boxHeight: '',
      el: '',
      wrap: '',
      moved: false,
      direction: '',
      swipe: 'cubic-bezier(0.23, 1, 0.32, 1)',
      bounce: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
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
      this.el = this.$refs.move
      this.wrap = this.$refs.wrap
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
      console.log('scrollHeight', this.el.scrollHeight)
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
      console.log('scrollTop', this.el.scrollTop)
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
      // 当位于顶部时，进行上拉，禁止执行事件处理
      if (!this.el.scrollTop && this.direction === 'up') {
        this.moved = false
      }
      // 限制可拖动的最大范围
      if (point.pageY > this.boxHeight) {
        this._touchEnd()
      }
      console.log(this.boxHeight + this.el.scrollTop >= this.el.scrollHeight)
      console.log(this.direction)
      console.log(this.moved)
      // this.boxHeight + this.el.scrollTop < this.el.scrollHeight
      if (!this.el.scrollTop && this.direction === 'down' && this.moved) {
        // 模拟一个阻尼系数0.85
        this.moveDistance = Math.pow(Math.abs(point.pageY - this.startY), 0.85)
        // 禁止默认事件
        // e.preventDefault()
        requestAnimationFrame(() => {
          this.wrap.style.transform = 'translate( 0, ' + this.moveDistance + 'px)'
        })
      } else if (this.boxHeight + this.el.scrollTop >= this.el.scrollHeight && this.direction === 'up' && this.moved) {
        this.moveDistance = -1 * Math.pow(Math.abs(point.pageY - this.startY), 0.85)
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
        this.wrap.style.transitionDuration = '500ms'
        this.wrap.style.transform = 'translate(0, 0)'
      }
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
  .ly-h{
    // margin-top: 45px;
    overflow: hidden;
  }
  #move{
    position: absolute;
    left: 3px;
    top: 3px;
    right: 3px;
    bottom: 3px;
    // height: 500px;
    z-index: 9999;
    width: 100%;
    // height: 100%;
    // border: 1px solid blue;
    overflow-y: scroll;
  }
  .itemwrap{
    width: 80%;
    margin: 0 auto;
    overflow-y: auto;
    text-align: center;
    border: 1px solid red;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  .itemwrap .item {
    height: 35px;
    line-height: 35px;
    font-size: 13px;
  }
</style>
