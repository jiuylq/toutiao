<template>
  <header id="header">
    <div class="header_content">
      <span ref="scrollTitle">今日头条</span>
    </div>
    <!-- <router-link to="/search" class="header_search"> -->
    <a href="javascript:;" class="header_search" @click="searchHandle">
      <svg-icon icon-class="sousuo" class-name="sousuo" />
    </a>
    <!-- </router-link> -->
  </header>
</template>

<script>
import { totop } from '@/mixins/scrollTop.js'

export default {
  name: 'Header',
  mixins: [totop],
  data () {
    return {
      title: 'header'
    }
  },
  methods: {
    back () { // back
      this.$router.animate = 2
      // console.log(this.$router)
      this.$router.back()
    },
    searchHandle() {
      this.$createToast({
        type: 'warn',
        time: 3000,
        txt: '当前功能尚未完善，敬请期待！'
      }).show()
    }
  }
}
</script>

<style lang="scss" scoped>
  #header{
    position: relative;
    height: 45px;
    background: #d43d3d;
    .header_content{
      text-align: center;
      margin: 0 55px;
      line-height: 45px;
      span{
        display: inline-block;
        font-weight: 600;
        color: #fff;
      }
    }
    .header_search{
      position: absolute;
      top: 0;
      right: 10px;
      width: 45px;
      text-align: center;
      line-height: 45px;
      z-index: 99;
      .sousuo{
        font-size: 30px;
        vertical-align: middle;
        color: #fff;
      }
    }
  }
</style>
