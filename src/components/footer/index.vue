<template>
  <footer id="footer">
    <div class="footer-wrap">
      <div class="footer-item">
        <router-link v-waves to="/index" class="footer-icon" >
          <svg-icon icon-class="shouye" class-name="shouye icon_footer" />
        </router-link>
      </div>
      <div class="footer-item">
        <router-link v-waves to="/video" class="footer-icon">
          <svg-icon icon-class="bofang_1" class-name="bofang_1 icon_footer" />
        </router-link>
      </div>
      <div class="footer-item">
        <router-link v-waves to="/shop" class="footer-icon">
          <svg-icon icon-class="shop" class-name="shop icon_footer" />
        </router-link>
      </div>
      <div class="footer-item">
        <router-link v-waves to="/user" class="footer-icon">
          <svg-icon icon-class="wodedangxuan" class-name="wodedangxuan icon_footer" />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
import waves from '@/directive/waves/index.js' // 水波纹指令

export default {
  name: 'Footer',
  directives: {
    waves
  },
  methods: {
  }
}
</script>

<style lang="scss">
 .router-link-active{
   color: orangered;
 } 
</style>


<style lang="scss" scoped>
  #footer{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45px;
    line-height: 45px;
    background: #fbfbfb;
  }
  .footer-wrap{
    display: flex;
    justify-content: space-around;
    .footer-item{
      width: 25%;
      text-align: center;
      overflow: hidden;
      border-radius: 5%;
      .footer-icon{
        display: block;
        .icon_footer{
          font-size: 23px;
          vertical-align: middle;
        }
      }
    }
  }
</style>
