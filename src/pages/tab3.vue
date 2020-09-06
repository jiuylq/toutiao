<template>
  <div id="">
    <!-- <app-header /> -->
    <div class="scrollBox">
      <pull-to-refresh>
        <div class="itemwrap">
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
          <div class="item">{{ 'startX: ' + Math.floor(startX) + ' startY: ' + Math.floor(startY) }}</div>
          <div class="item">{{ 'moveDistance: ' + Math.floor(moveDistance) }}</div>
          <div class="item">{{ 'endX: ' + Math.floor(endX) + 'endY: ' + Math.floor(endY) }}</div>
        </div>
      </pull-to-refresh>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/header'
import pullToRefresh from '@/components/scroll/pullToRefresh'

export default {
  name: '',
  components: {
    appHeader,
    pullToRefresh
  },
  data () {
    return {
      startX: '',
      startY: '',
      endX: '',
      endY: '',
      moveDistance: 0
    }
  },
  computed: {

  },
  watch: {

  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  destroyed() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.scrollBox{
  position: relative;
  height: 100%;
  overflow: hidden;
}
.itemwrap{
  width: 80%;
  margin: 0 auto;
  overflow-y: auto;
  text-align: center;
  border: 1px solid red;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.itemwrap .item {
  height: 35px;
  line-height: 35px;
  font-size: 13px;
}
</style>
