<template>
  <div id="">
    <app-header />
    <div class="ly-h">
      4444444
      <router-link to="/tab5">tab5</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import appHeader from '@/components/header'
export default {
  name: 'Tab4',
  components: {
    appHeader
  }
}
</script>

<style lang="scss" scoped>
  .ly-h{
    margin-top: 45px;
  }
</style>
