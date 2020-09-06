<template>
  <div class="header_wrapper">
    <div class="header">
      <a href="javascript:;" class="back">
        <i @click="back" class="cubeic-back"></i>
      </a>
      <div class="header_title"><span ref="scrollTitle">{{ gotitle }}</span></div>
    </div>
    <div class="header_h"></div>
  </div>
</template>

<script>
import waves from '@/directive/waves/index.js' // 水波纹指令
import { totop } from '@/mixins/scrollTop.js'
// import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  directives: {
    waves
  },
  mixins: [totop],
  props: {
    gotitle: {
      type: String,
      default: '今日头条'
    }
  },
  data () {
    return {
      title: 'header',
      gotopel: null,
      clickTimer: null,
      lastClickTime: 0
    }
  },
  computed: {
//     ...mapGetters([
//       'username'
//     ])
  },
  mounted() {
//     this.$nextTick(() => {
//       this.gotopel = this.$refs.scrollTitle
//       this.gotopel.addEventListener('touchstart', this.goToTop)
//     })
  },
  destroyed() {
    this.gotopel.removeEventListener('touchstart', this.goToTop)
  },
  methods: {
    back () { // back
      this.$router.animate = 2
      console.log(this.$router)
      this.$router.back()
    }
//     goToTop() {
//       let nowTime = new Date().getTime()
//       if (nowTime - this.lastClickTime < 400) {
//         /* 双击 */
//         this.lastClickTime = 0
//         this.clickTimer && clearTimeout(this.clickTimer)
//         let timer = setInterval(() => {
//           let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//           let ispeed = Math.floor(-scrollTop / 6)
//           if (scrollTop === 0) {
//             clearInterval(timer)
//           }
//           document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed
//         }, 10)
//       } else {
//         this.lastClickTime = nowTime
//       }
//     }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/onepx.scss";
  .header{
    width: 100%;
    // position: sticky;
    position: fixed;
    top: 0;
    height: 45px;
    background: #fff;
    // border-bottom: 1px solid #eceaea;
    z-index: 99;
    &:after {
      @include onepx(#cecece, 'bottom')
    }
    .back {
      position: absolute;
      left: 0;
      top: 0;
      display: inline-block;
      width: 45px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      z-index: 99;
      overflow: hidden;
      &:active{
        background: rgba(0, 0, 0, 0.05);
      }
    }
    
    .header_title{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      line-height: 45px;
      text-align: center;
      span{
        display: inline-block;
      }
    }
  }
  .header_h{
    height: 45px;
  }
</style>
