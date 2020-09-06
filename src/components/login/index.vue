<template>
  <transition :name="selectdire" @after-leave="handleAfterLeave">
    <div ref="login" id="login" v-show="visible">
      <login v-if="showid === 'login'" @gotto="goTo" @closed="goBack" @updateinfo="updateInfo" />
      <forgot v-if="showid === 'forgot'" @gotto="goTo" @closed="goBack" />
      <register v-if="showid === 'register'" @gotto="goTo" @closed="goBack" />
    </div>
  </transition>
</template>

<script>
import login from './components/login/index'
import forgot from './components/forgot/index'
import register from './components/register/index'
import router from '@/router'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    login,
    forgot,
    register
  },
  data() {
    return {
      visible: false,
      loginel: null,
      onClose: null,
      direction: ['slide-left', 'slide-right', 'slide-top', 'slide-bottom'],
      selectdire: 'slide-left',
      postX: '',
      nowX: '',
      distanceX: '',
      divX: '',
      divY: '',
      moved: false,
      elIconLink: this.$refs.cloak,
      screenWidth: window.document.body.clientWidth
    }
  },
  created() {
    // this.randomDire()
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.route)
      setTimeout(() => {
//         const show = 'slide' + this.showAnimate.selectdire
        this.loginel = this.$refs.login
//         this.loginel.style.transition = 'all 0.3s'
//         this.loginel.style.transform = 'translate3d(0, 0, 0)'
        // this.loginel.classList.add('show')
        this.bindTouchEvent()
      }, 20)
      window.addEventListener('popstate', this.handleClose, false)
    })
  },
  activated() {},
  beforeDestroy () {
    this.removeTouchEvent()
    window.removeEventListener('popstate', this.handleClose, false)
    this.loginel.removeEventListener(this.aniopts.transitionend, this.destroyedComponent)
  },
  destroyed() {},
  methods: {
    handleAfterLeave () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    loginClose() {
      this.goBack()
      // this.handleClose()
    },
    handleClose(e) {
      let dire
      if (this.selectdire === 'slide-left') {
        dire = 'slide-right'
      } else if (this.selectdire === 'slide-right') {
        dire = 'slide-left'
      }
      e && e.dire ? (this.selectdire = e.dire) : (this.selectdire = dire)
      this.visible = false
//       const show = this.showAnimate.selectdire
      // this.$refs.login.classList.add('hidshow')
      // this.loginel.style.transform = 'translate3d(-100%, 0, 0)'
      console.log(this.aniopts.transitionend)
      // this.loginel.addEventListener(this.aniopts.transitionend, this.destroyedComponent)
    },
    destroyedComponent (e) {
      // setTimeout(() => {
      // this.onClose(this)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
      // }, 300)
    },
    goBack(e) {
      this.handleClose(e)
      history.back(-1)
    },
    randomDire() {
      let select
      if (!this.selectdire) {
        const num = Math.floor(Math.random() * this.direction.length)
        select = this.direction[num]
        this.selectdire = select
        console.log(select)
      } else {
        select = this.selectdire
      }
      return select
    },
    goTo(e) {
      console.log(e)
      if (e === 'register') {
        this.handleClose()
        this.selectdire = 'slide-left'
        this.replaceRouter(e)
//         this.$login({
//           showid: 'register',
//           selectdire: 'slide-left'
//         })
      } else if (e === 'forgot') {
        this.handleClose()
        this.selectdire = 'slide-left'
        this.replaceRouter(e)
//         this.$login({
//           showid: 'forgot',
//           selectdire: 'slide-left'
//         })
      } else if (e === 'login') {
        this.handleClose()
        this.selectdire = 'slide-left'
        this.replaceRouter(e)
//         this.$login({
//           showid: 'login',
//           selectdire: 'slide-left'
//         })
      }
    },
    replaceRouter(e) {
      const querys = Object.assign({}, this.route.query)
      querys.custom = e
      router.replace({
        path: this.route.path,
        query: querys
      })
    },
    bindTouchEvent () {
      this.loginel.addEventListener('touchstart', this.down, false)
      this.loginel.addEventListener('touchmove', this.move, false)
      this.loginel.addEventListener('touchend', this.end, false)
    },
    removeTouchEvent () {
      this.loginel.removeEventListener('touchstart', this.down, false)
      this.loginel.removeEventListener('touchmove', this.move, false)
      this.loginel.removeEventListener('touchend', this.end, false)
    },
    down (t) {
      t.stopPropagation()
      var e = (t.touches && t.touches[0]) || t
      this.postX = e.clientX
      this.divX = this.loginel.offsetLeft
      this.divY = this.loginel.offsetTop
      if (this.postX < 50) {
        this.loginel.style.transition = '0s'
        this.moved = true
      }
    },
    move (t) {
      if (this.moved) {
        var e = (t.touches && t.touches[0]) || t
        this.distanceX = e.clientX - this.postX
        var trX = this.distanceX + this.divX
        requestAnimationFrame(() => {
          // this.distanceX + this.divX > 0 && (this.loginel.style.webkitTransform = 'translate3d(' + trX + 'px, 0, 0)')
          this.distanceX + this.divX > 0 && (this.loginel.style.left = trX + 'px')
        })
        var s = {
          x: this.distanceX,
          y: e.clientY - this.divY
        }
        // 当垂直方向滚动大于横向滚动时，阻止浏览器默认行为
        if (Math.abs(s.x) < Math.abs(s.y)) {
          t.preventDefault()
        }
      }
    },
    end () {
      if (this.moved) {
        this.loginel.style.transition = 'all 0.3s ease-in-out'
        if (this.distanceX + this.divX < this.screenWidth / 3) {
          // this.loginel.style.webkitTransform = 'translate3d(0, 0, 0)'
          this.loginel.style.left = '0px'
        } else {
          // this.loginel.style.webkitTransform = 'translate3d(' + this.screenWidth + 'px, 0, 0)'
          this.loginel.style.left = this.screenWidth + 'px'
          // 销毁
          this.goBack()
//           this.destroyedComponent()
//           setTimeout(() => {
//             this.goBack()
//           }, 300)
        }
      }
      // 重置数据
      this.distanceX = 0
      this.divX = 0
      this.postX = 0
      this.moved = false
    },
    updateInfo (e) {
      this.setUserinfo(e)
    },
    ...mapActions([
      'setUserinfo'
    ])
  }
}
</script>

<style lang="scss" scoped>
#login {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 8px 6px rgba(7,17,27,.1);
  transition: all 0.3s ease-in-out;
  // transform: translate3d(100%, 0, 0);
  backface-visibility: hidden;
  transform-style: preserve-3d;
  &.slideleft{
    transform: translate3d(100%, 0, 0);
  }
  &.slideright{
    transform: translate3d(-100%, 0, 0);
  }
  &.slidetop{
    transform: translate3d(0, 100%, 0);
  }
  &.slidebottom{
    transform: translate3d(0, -100%, 0);
  }
  &.show{
    transform: translate3d(0, 0, 0);
  }
  &.hidshow{
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
