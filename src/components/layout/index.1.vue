<template>
  <div class="container">
    <!-- 默认视图 -->
    <page-view class="layoutview" />
    <app-footer class="footer"/>
    <transition name="page-move">
      <router-view name="page" class="move-view"></router-view>
    </transition>
  </div>
</template>

<script>
import pageView from '@/components/pageview'
import appFooter from '@/components/footer'
export default {
  name: 'Layout',
  components: {
    pageView,
    appFooter
  },
  data () {
    return {
    }
  },
  watch: {
    // '$route' (to, from) {
    //   let slide = to.meta.slide
    //   this.pagemove = slide === 1 ? 'page-move' : 'slide-right'
    // }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .ly-move-enter, .ly-move-leave-active{
    transform: translate(100%, 0)
  }
  .ly-move-enter-active, .ly-move-leave-active{
    transition: transform .3s
  }
  .ly-content{
    width: 100%;
    height: 100%;
    overflow-x: hidden;  
  }
  // 
  .ly-f{
    width: 100%;
    height: calc(100% - 50px);
    overflow-x: hidden;
    // border: 1px solid yellow;
    position: absolute;
    top: 0;
    left: 0;
    // right: 0;
    // bottom: 0;
    // -webkit-transition: visibility .38s,-webkit-transform .38s ease-in-out;
    // transition: visibility .38s,-webkit-transform .38s ease-in-out;
    // transition: transform .38s ease-in-out,visibility .38s;
    // transition: transform .38s ease-in-out,visibility .38s,-webkit-transform .38s ease-in-out;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .container{
    width: 100%;
    height: 100%;
    .layoutview{
      position: absolute;
      width: 100%;
      height: calc(100% - 50px);
      top: 0;
      left: 0;
      overflow-x: hidden;
    }
  }
  .move-view{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    // transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .page-move-enter{
    opacity: 0;
    transform: translate(100%, 0)
  }
  .page-move-leave-active{
    opacity: 0;
    transform: translate(100%, 0)
  }
  .page-move-enter-active{
    // transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .page-move-leave-active{
    // transition: transform .6s
    // transition: all .6s cubic-bezier(1, 0.05, 0.24, 1.01);
  }
</style>


