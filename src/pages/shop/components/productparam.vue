<template>
  <div :class="['modal-mask bottom-slide', isshow ? 'show' : '']">
    <div :class="['content-container', isshow ? 'show' : '']">
      <div class="container-prevent-modal" @click.stop="clickMaskHandle"></div>
      <div class="contain">
        <!-- info-box -->
        <servicedes v-if="productparam.type === 'servicedes'"/>
        <!-- pro-params -->
        <parameter :paramdata="productparam.data" v-if="productparam.type === 'params'"/>
        <div class="button" @click.stop="buttonHandle">完成</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import servicedes from './servicedes'
import parameter from './parameter'

export default{
  name: '',
  props: {
    productparam: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    servicedes,
    parameter
  },
  data() {
    return {
      isshow: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isshow = this.productparam.show
      }, 20)
    })
  },
  methods: {
    clickMaskHandle() {
      this.isshow = false
      setTimeout(() => {
        this.$emit('maskHandle', { close: true })
      }, 200)
    },
    buttonHandle() {
      this.clickMaskHandle()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask{
  position: fixed;
  z-index: 888;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,.5);
}
.bottom-slide {
  opacity: 0;
  transition: all .2s linear;
  transform: translateZ(0);
  &.show {
    opacity: 1;
  }
}
.hide {
  display: none;
}
.content-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10rem;
  z-index: 999;
  transition: all .3s linear;
  transform: translateY(100%);
  height: 100%;
  &.show {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
.notouch{
  // touch-action: none;
}
.container-prevent-modal{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10rem;
  margin: 0 auto;
  z-index: 1;
}
.button {
  position: fixed;
  bottom: 0;
  left: 10px;
  right: 10px;
  background: #f85959;
  line-height: 1rem;
  height: 1rem;
  text-align: center;
  font-size: .48rem;
  color: #fff;
  letter-spacing: 0;
  z-index: 5;
  border-radius: 0.6rem;
}

</style>
