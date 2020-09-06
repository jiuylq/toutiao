<template>
  <div id="">
    <app-header />
    <div class="ly-h">
      <div class="circle isDisplay" v-if="!isShow" @click="switchBtn">
      </div>
      <!-- <div ref="cloak" @touchstart="down" @touchmove="move" @touchend="end" :class="['cloak', isShow ? 'isShow' : 'isHidden']">
        <img src="@/assets/logo.png" alt="">
      </div> -->
      <div ref="cloak" @touchstart="down" @touchmove="move" @touchend="end" :class="['cloak', isShow ? 'isShow' : 'isHidden']">
        <div class="content">
          <div class="img">
            <img src="https://static.geekbang.org/infoq/5c2f36b770377.png" alt="">
          </div>
          <div class="word">想要批量报名或更多优惠？</div>
          <div class="word">立即联系票务小姐姐Joy</div>
          <div class="word">或致电：<a href="tel:13269078023" class="tel">13269078023</a></div>
        </div>
        <btn color="blue">按钮2</btn>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/header'
import btns from '@/components/button/btn.vue'

export default {
  name: '',
  components: {
    appHeader,
    btns
  },
  data () {
    return {
      isShow: 0,
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
  methods: {
    switchBtn () {
      this.isShow = !this.isShow
    },
    down (t) {
      var e = (t.touches && t.touches[0]) || t
      this.postX = e.clientX
      this.divX = this.$refs.cloak.offsetLeft
      this.divY = this.$refs.cloak.offsetTop
      this.$refs.cloak.style.transition = ''
      this.moved = true
    },
    move (t) {
      if (this.moved) {
        var e = (t.touches && t.touches[0]) || t
        this.distanceX = e.clientX - this.postX
        // this.distanceX + this.divX > 0 && (this.$refs.cloak.style.left = this.distanceX + this.divX + 'px')
        console.log(this.distanceX + this.divX)
        var trX = this.distanceX + this.divX
        requestAnimationFrame(() => {
          this.distanceX + this.divX > 0 && (this.$refs.cloak.style.webkitTransform = 'translate3d(' + trX + 'px, 0, 0)')
        })
        // this.distanceX + this.divX > 0 && (this.$refs.cloak.style.webkitTransform = 'translate3d('+ trX +'px, 0, 0)')
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
      this.$refs.cloak.style.transition = 'all 0.3s ease-in-out'
      if (this.distanceX + this.divX < this.screenWidth / 3) {
        // this.$refs.cloak.style.left = '0px'
        this.$refs.cloak.style.webkitTransform = 'translate3d(0, 0, 0)'
      } else {
        // this.$refs.cloak.style.left = this.screenWidth + 'px'
        this.$refs.cloak.style.webkitTransform = 'translate3d(' + this.screenWidth + 'px, 0, 0)'
        // this.switchBtn()
        // this.$refs.cloak.addEventListener('webkitTransitionEnd', function (e) {
        //   console.log('end')
        // })
        window.setTimeout(() => {
          // this.$refs.cloak.style.left = '0px'
          this.switchBtn()
          this.$refs.cloak.style.webkitTransform = 'translate3d(0, 0, 0)'
        }, 300)
        // 重置数据
        this.distanceX = 0
        this.divX = 0
        this.postX = 0
        this.moved = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .ly-h{
    margin-top: 45px;
  }
   .circle.isDisplay{
    opacity: 1;
  }
  .circle{
    width: 65px;
    height: 65px;
    padding: 14px;
    background-color: red;
    box-shadow: 0 0 8px 6px rgba(7,17,27,.1);
    border-radius: 50%;
    text-align: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 12px;
    position: fixed;
    right: 10px;
    bottom: 30%;
    z-index: 99;
    opacity: 0;
  }
  @keyframes cloakDisplay {
    0% {
        -webkit-clip-path: circle(20vw at 50vw 50vh);
        clip-path: circle(20vw at 50vw 50vh)
    }

    to {
        -webkit-clip-path: circle(100vh at 50vw 50vh);
        clip-path: circle(100vh at 50vw 50vh)
    }
  }
  .cloak{
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100vh;
    background-color: yellow;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-shadow: 0 0 8px 6px rgba(7,17,27,.1);
    // transition: all 0.3s ease-in-out 0s;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  .cloak.isHidden {
    display: none
  }
  .cloak.isShow {
    display: -ms-flexbox;
    display: flex;
    animation: cloakDisplay 1s 1;
  }

  .content {
    text-align: justify;
    color: #3e3a39;
    font-size: 16px;
    line-height: 1.8;
  }
  .cloak .content .img {
    width: 200px;
  }
  img {
    max-width: 100%;
  }
  .cloak .content .word {
    text-align: center;
}
</style>
