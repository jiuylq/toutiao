<template>
  <!-- pro-params -->
  <div class="pro-params">
    <div class="title f15">商品参数</div>
    <div class="body f15">
      <div class="item hair-line bottom" v-for="(item, index) in paramdata" :key="index">
        <div class="param-left">
          <div class="param-key">{{ item.type }}</div>
        </div>
        <div class="param-right">
          <div class="param-value">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

export default{
  name: '',
  props: {
    paramdata: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}
.notouch{
  // touch-action: none;
}
.hair-line {
  position: relative;
}
.pro-params {
  background: #fff;
  color: #222;
  overflow: hidden;
  width: 10rem;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 1.28rem;
  border-radius: 15px 15px 0 0;
  z-index: 2;
  .title {
    padding: .53rem;
    text-align: center;
    line-height: .64rem;
    height: .64rem;
  }
  .body {
    padding: 0 .4rem;
    height: 8.3rem;
    overflow: hidden;
    .item {
      display: flex;
      align-items: center;
      height: 1.33rem;
      .param-left {
        width: 34%;
        margin-right: 2%;
        .param-key {
          color: #999;
        }
      }
      .param-right {
        width: 63%;
      }
      .param-key, .param-value{
        line-height: .59rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: left;
        color: #222;
      }
    }
  }
}
.f15 {
  font-size: .4rem;
}
.hair-line.bottom:after, .hair-line.top:before {
  position: absolute;
  height: 1px;
  left: 0;
  right: 0;
  z-index: 1;
  content: "";
  background: #e8e8e8;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.hair-line.bottom:after {
    bottom: 0;
}
.hair-line.bottom:after, .hair-line.top:before {
  position: absolute;
  height: 1px;
  left: 0;
  right: 0;
  z-index: 1;
  content: "";
  background: #e8e8e8;
  pointer-events: none;
}
@media (-webkit-min-device-pixel-ratio: 3) {
  .hair-line.bottom:after,.hair-line.top:before {
    -webkit-transform:scaleY(.33333);
    -ms-transform: scaleY(.33333);
    transform: scaleY(.33333)
  }
}

@media (-webkit-min-device-pixel-ratio: 2) {
  .hair-line.bottom:after,.hair-line.top:before {
    -webkit-transform:scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5)
  }
}
.hair-line.bottom:after {
  bottom: 0;
}
</style>
