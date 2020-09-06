<template>
  <div ref="collection" class="collection_wrapper">
    <a href="javascript:;" class="back">
      <i @click="back" class="cubeic-back"></i>
    </a>
    <cube-tab-bar
      v-model="selectedLabel"
      show-slider
      :use-transition="disabled"
      ref="tabNav"
      :data="tabLabels">
    </cube-tab-bar>
    <div class="tab-slide-container">
      <cube-slide
        ref="slide"
        :loop="loop"
        :initial-index="initialIndex"
        :auto-play="autoPlay"
        :show-dots="showDots"
        :options="slideOptions"
        @scroll="scroll"
        @change="changePage"
      >
        <!-- 商品 -->
        <cube-slide-item>
          <cube-scroll :data="productsData" :options="scrollOptions">
            <ul class="list-wrapper">
              <li class="list-item no-col-goods">
                <img src="https://tms3.bytecdn.cn/foreground/static/img/gift.png" alt="">
              </li>
              <div class="touch-item-loading">
                <div class="_loading">没有更多了</div>
              </div>
            </ul>
          </cube-scroll>
        </cube-slide-item>
        <!-- 店铺 -->
        <cube-slide-item>
          <cube-scroll :data="shopsData" :options="scrollOptions">
            <ul class="list-wrapper">
              <!-- <li class="list-item">
              </li> -->
              <div class="touch-item-loading">
                <div class="_loading">没有更多了</div>
              </div>
            </ul>
          </cube-scroll>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Collection',
  data() {
    return {
      selectedLabel: '商品',
      disabled: true,
      tabLabels: [{
        label: '商品'
      }, {
        label: '店铺'
      }],
      loop: false,
      autoPlay: false,
      showDots: false,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      },
      scrollOptions: {
        directionLockThreshold: 1
      },
      productsData: [],
      shopsData: []
    }
  },
  computed: {
    initialIndex () {
      let index = 0
      this.tabLabels.some((val, i) => {
        if (val.label === this.selectedLabel) {
          index = i
        }
      })
      console.log(index)
      // index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
      return index
    }
  },
  watch: {
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  methods: {
    back () { // back
      this.$router.animate = 2
      this.$router.back()
    },
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
    },
    scroll (pos) {
//       const x = Math.abs(pos.x)
//       const tabItemWidth = this.$refs.tabNav.$el.clientWidth
//       const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
//       const deltaX = x / slideScrollerWidth * tabItemWidth
//       this.$refs.tabNav.setSliderTransform(deltaX)
    }
  }
}
</script>

<style lang="scss">
.collection_wrapper{
  width: 100%;
  height: 100%;
  .cube-tab-bar{
    position: relative;
    width: 50%;
    padding: 0 25%;
    text-align: center;
    background-color: white;
    .cube-tab{
      height: 1.2rem;
      line-height: 1.2rem;
      padding: 0;
      font-size: .4rem;
      div {
        position: relative;
        display: inline-block;
      }
      &.cube-tab_active>div:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        z-index: 1;
        height: 2px;
        background: #f85959;
      }
    }
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background: #f3f3f3;
      width: 100%;
      height: 1px;
      -webkit-transform: scaleY(.5);
      -ms-transform: scaleY(.5);
      transform: scaleY(.5);
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
    }
  }
}
.tab-slide-container{
  position: absolute;
  top: 39px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 88;
}
.cube-tab-bar-slider{
  display: none;
  left: 25%;
  background-color: black
}
.no-col-goods {
  width: 100%;
  text-align: center;
  padding: 1.76rem 0 3.04rem;
  background: #fff;
  img{
    width: 2.4rem;
    height: 2.4rem;
  }
}
._loading {
  font-size: .32rem;
}

._loading, .loading {
  text-align: center;
  background: transparent;
  color: #999;
  height: 40px;
  line-height: 40px;
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
</style>