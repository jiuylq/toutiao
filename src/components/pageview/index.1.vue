<template>
  <transition :name="animate">
    <keep-alive>
      <router-view class="pageview"></router-view>
    </keep-alive>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageView',
  components: {
  },
  data () {
    return {
      animate: ''
    }
  },
  computed: {
    ...mapGetters([
      'direction'
    ])
  },
  watch: {
    // '$route' (to, from) {
    //   console.log(to)
    //   const toIndex = to.meta.index
    //   const fromIndex = from.meta.index
    //   this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
    // }
    '$route' (to, from) {
      /*
      1: 左切换
      2: 右切换
      3: 上切换
      4: 下切换
        */
      let slidenum
      // const toDepth = to.path.split('/')
      // const fromDepth = from.path.split('/')
      // console.log(toDepth, fromDepth)

      // if (toDepth.length < fromDepth) {
      //   slidenum = 2
      // }

      if (to.meta.tab && from.meta.tab) {
        if (to.meta.tab > from.meta.tab) {
          slidenum = 1
        } else {
          slidenum = 2
        }
      } else {
        if (from.meta != '/tab5' || from.meta != 'tab6') {
        slidenum = this.$router.animate || to.meta.slide
        } else {
          slidenum = 1
        }
      }

      // slidenum = this.$router.animate || to.meta.slide
      if (!slidenum) {
        this.animate = ''
      } else {
        this.animate = slidenum === 1 ? 'slide-left' : slidenum === 2 ? 'slide-right' : slidenum === 3 ? 'slide-top' : slidenum === 4 ? 'slide-bottom' : ''
      }
      this.$router.animate = 0
      // this.$store.commit('UPDATE_DIRECTION', {direction: 0})
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  // 转场动画
  .slide-right-leave-active,
  .slide-left-leave-active,
  .slide-top-leave-active,
  .slide-bottom-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 0;
    position: absolute;
    transform:translate3d(0 ,0, 0);
    backface-visibility: hidden;
    perspective: 1000;
  }

  .slide-left-enter,
  .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
  }
  .slide-top-enter,
  .slide-bottom-leave-active {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
  }
  .slide-top-leave-active,
  .slide-bottom-enter {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
  }

  .pageview{
    // position: absolute;
    // left: 0;
    // top: 0;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
</style>

