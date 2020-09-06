<template>
  <div class="carousel_wrapper">
    <cube-slide ref="slide" :data="items" :options="slideOptions" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
       <template slot="dots" slot-scope="props">
         <div class="carousel_dot">
           {{ props.current + 1 + '/' + props.dots.length}}</a>
         </div>
        <!-- <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots" :key="index">{{index + 1}}</span> -->
      </template>
    </cube-slide>
  </div>
</template>

<script type="text/javascript">
export default{
  name: '',
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      slideOptions: {
        eventPassthrough: 'vertical' // 保留垂直方向的滚动
      },
      item: [
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    changePage(current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      // console.log(item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel_wrapper{
  overflow: hidden;
  a {
    img {
      width: 10rem;
      height: 10rem;
    }
  }
}
.carousel_dot{
  position: absolute;
  z-index: 1;
  bottom: .32rem;
  right: .32rem;
  color: #101010;
  background: rgba(244,245,246,.8);
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 16px;
  letter-spacing: 1px;
  font-size: .37333rem;
}
</style>
