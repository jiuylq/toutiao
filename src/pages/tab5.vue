<template>
  <div class="tab5">
    <app-header/>
    55555555555555555555
    <router-link to="/tab6" class="matop" tag="div">tab6</router-link>
    <!-- <div @click="linkrp" class="matop">tab6</div> -->
  </div>
</template>

<script>
import appHeader from '@/components/header'
export default {
  name: '',
  components: {
    appHeader
  },
  methods: {
//     linkrp() {
//       this.$router.replace('/tab6')
//     }
  }
}
</script>

<style lang="scss" scoped>
.tab5 {
  background: #fff;
}
.matop{
  margin-top: 50px;
}
</style>
