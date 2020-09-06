<template>
  <div class="container">
    <!-- 主体视图 -->
    <!-- <router-view class="main" ></router-view> -->
    <page-view class="main" />
    <app-footer class="footer"/>
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
  .container {
    width: 100%;
    height: 100%;
  }
  .main{
    width: 100%;
    position: absolute;
    height: calc(100% - 45px);
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>


