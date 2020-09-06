<template>
  <div id="app">
    <!-- 默认视图 -->
    <page-view/>
  </div>
</template>

<script>
import pageView from '@/components/pageview/index.vue'
export default {
  name: 'app',
  components: {
    pageView
  }
}
</script>

<style lang="scss">
body,
html,
#app {
  width: 100%;
  height: 100%;
  font-size: 18px;
  color: #222;
}
#app {
  overflow-x: hidden;
}
</style>

<style lang="scss" scoped>

</style>

