<template>
  <transition :name="animate">
    <!-- <router-view class="view"></router-view> -->
    <!-- 如果页面中有绑定window,body,html等全局的事件的话不能用keep-alive缓存，因为缓存的页面不会触发destroyed等钩子的-->
    <!-- exclude 根据组件的name属性进行判断 -->
    <keep-alive :exclude="excludedRouter"> 
    <!-- :exclude="excludedComponents" -->
    <!-- :include="includedComponents" -->
      <router-view class="view"></router-view>
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
      animate: '',
      excludedComponents: ['newsdetail', 'newsdetails', 'ProductDetail', 'categorychoose'],
      includedComponents: ['home']
    }
  },
  computed: {
    ...mapGetters([
      'direction',
      'excludedRouter'
    ])
  },
  watch: {
    $route (to, from) {
      /*
      0: 不做动画
      1: 左切换
      2: 右切换
      3: 上切换
      4: 下切换
       */

      // 动画切换存在的问题：
      // 如果是浏览器的返回键，或者app的返回键的时候动画的效果不是按理想的实现的，当前暂时没找到什么好的解决方案

      // layout下的4个tab动画利用额外tab参数实现动画的额过度（O(∩_∩)O）

      let animate
      if (to.meta.tab && from.meta.tab) {
        if (to.meta.tab > from.meta.tab) {
          animate = this.$router.animate || to.meta.slide
        } else {
          animate = 2
        }
      } else {
        console.log(this.direction)
        if (this.direction === 'reverse') {
          animate = 2
        } else {
          animate = this.$router.animate || to.meta.slide
        }
      }

      if (!animate) {
        this.animate = ''
      } else {
        this.animate = animate === 1 ? 'slide-left' : animate === 2 ? 'slide-right' : animate === 3 ? 'slide-top' : animate === 4 ? 'slide-bottom' : ''
      }
      this.$router.animate = 0
    }
  },
  created() {},
  mounted() {
//     this.$nextTick(() => {
//       window.addEventListener('popstate', this.handleClose, false)
//     })
  },
  beforeDestroy () {
    // window.removeEventListener('popstate', this.handleClose, false)
  },
  methods: {
//     handleClose(e) {
//       this.$router.animate = 2
//       console.log('xx')
//     }
  }
}
</script>

<style lang="scss">
  .view{
    position: relative;
    top: 0;
    // transition: all 0.3s;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }
  // 转场动画
  .slide-right-leave-active,
  .slide-left-leave-active,
  .slide-top-leave-active,
  .slide-bottom-leave-active {
    will-change: transform;
    // transition: all 500ms;
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
</style>

