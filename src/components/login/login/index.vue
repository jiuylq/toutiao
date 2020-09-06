<template>
  <div ref="login" id="login" :class="showAnimate.selectdire">
    <span class="closelogin" @click.stop="loginClose" >
      <svg-icon icon-class="guanbi" class-name="guanbi" />
    </span>
    <div class="login_wrap">
      <div class="login_icon">
        今日头条
      </div>
      <div class="login_box">
        <cube-input
          v-model="logindata.account"
          :placeholder="acplaceholder"
          :type="'text'"
          class="account"
        />
        <cube-input
            v-model="logindata.password"
            :placeholder="pasplaceholder"
            :type="'password'"
            :eye="eye"
            class="password"
          />
        <cube-button :primary="true">登陆</cube-button>
      </div>
      <div class="other_box">
        <div class="reg_wrap" @click="goTo">
          <a href="javascript:;" class="register" data-id="register">注册</a>
          <a href="javascript:;" class="forgot" data-id="forgot">忘记密码</a>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginel: null,
      logindata: {
        account: '',
        password: ''
      },
      acplaceholder: '请输入登陆账号',
      pasplaceholder: '请输入密码',
      eye: {
        open: false,
        reverse: false
      },
      onClose: null,
      showAnimate: {
        direction: ['left', 'right', 'top', 'bottom'],
        selectdire: ''
      },
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
      setTimeout(() => {
//         const show = 'slide' + this.showAnimate.selectdire
        this.loginel = this.$refs.login
        console.log('2')
        this.loginel.style[this.aniopts.vendor + 'Transition'] = 'all 0.3s ease-in-out'
        this.loginel.style[this.aniopts.vendor + 'Transform'] = 'translate3d(0, 0, 0)'
        // this.loginel.classList.add(show)
        this.bindTouchEvent()
      }, 50)
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
    loginClose() {
      this.goBack()
      // this.handleClose()
    },
    handleClose() {
//       const show = 'slide' + this.showAnimate.selectdire
//       this.$refs.login.classList.remove(show)
      // this.loginel.style.transform = 'translate3d(100%, 0, 0)'
      // console.log(this.aniopts.transitionend)
      this.loginel.addEventListener(this.aniopts.transitionend, this.destroyedComponent)
    },
    destroyedComponent (e) {
      setTimeout(() => {
        this.onClose(this)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }, 300)
    },
    goBack() {
      history.back(-1)
    },
    randomDire() {
      const num = Math.floor(Math.random() * this.showAnimate.direction.length)
      const select = this.showAnimate.direction[num]
      this.showAnimate.selectdire = select
      console.log(select)
      return select
    },
    goTo(e) {
      const target = e.target
      if (target.nodeName.toLowerCase() === 'a') {
        const id = target.getAttribute('data-id')
        if (id === 'register') {
          this.handleClose()
          this.$register()
        } else if (id === 'forgot') {
          this.handleClose()
          this.$forgot()
        }
      }
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
        this.loginel.style.transition = ''
        this.moved = true
      }
    },
    move (t) {
      if (this.moved) {
        var e = (t.touches && t.touches[0]) || t
        this.distanceX = e.clientX - this.postX
        var trX = this.distanceX + this.divX
        requestAnimationFrame(() => {
          this.distanceX + this.divX > 0 && (this.loginel.style.webkitTransform = 'translate3d(' + trX + 'px, 0, 0)')
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
          this.loginel.style.webkitTransform = 'translate3d(0, 0, 0)'
        } else {
          this.loginel.style.webkitTransform = 'translate3d(' + this.screenWidth + 'px, 0, 0)'
          // 销毁
          this.destroyedComponent()
          setTimeout(() => {
            this.goBack()
          }, 300)
        }
      }
      // 重置数据
      this.distanceX = 0
      this.divX = 0
      this.postX = 0
      this.moved = false
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 8px 6px rgba(7,17,27,.1);
  // transition: all 0.3s ease-in-out 0s;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  &.left{
    left: 100%;
    top: 0;
  }
  &.right{
    right: 100%;
    top: 0;
  }
  &.top{
    left:0;
    top: 100%;
  }
  &.bottom{
    left: 0;
    bottom: 100%;
  }
  &.slideleft{
    left: 0;
  }
  &.slideright{
    right: 0;
  }
  &.slidetop{
    top: 0;
  }
  &.slidebottom{
    bottom: 0;
  }
}
.closelogin{
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  .guanbi{
    font-size: 25px;
  }
}
.login_wrap {
  position: absolute;
  width: 100%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  .login_icon {
    text-align: center;
    color: red;
    padding: 20px 0;
    margin-bottom: 25px;
  }
  .login_box {
    margin: 0 10px;
    padding: 0 10%;
    .cube-input{
      margin-bottom: 20px;
    }
  }
  .cube-btn{
    padding: 10px 16px;
    &.cube-btn-primary{
      background: #ff5e5e;
    }
    &:active{
      background: #f37676;
    }
  }
}
.other_box{
  margin-top: 15px;
  .reg_wrap{
    text-align: center;
    font-size: 14px;
    a{
      position: relative;
      display: inline-block;
      padding: 5px;
      color: red;
      &:active{
        color: #fb9090;
      }
    }
    .register{
      // margin-right: 1px;
      &:after{
        content:'';
        position: absolute;
        top: 5px;
        right: -3px;
        bottom: 5px;
        border-right: 1px solid #cecece;
      }
    }
  }
}
</style>
