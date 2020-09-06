<template>
  <button ref="btn" class="btn" :style="{color: color}" @click.stop="handlClick">
    <slot/> <!-- 插槽 -->
  </button>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
      count: 0,
      _btn: null
    }
  },
  created () {
  },
  mounted () {
    this.$nextTick(e => {
      this._btn = this.$refs.btn
      this._btn.addEventListener('touchstart', this.start)
      this._btn.addEventListener('touchend', this.end)
    })
  },
  destroyed () {
    this._btn.removeEventListener('touchstart', this.start)
    this._btn.removeEventListener('touchend', this.start)
  },
  methods: {
    handlClick (e) {
      this.count++
      // console.log(this.count)
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
      // this.$msg({value: '我是构造组件'})
    },
    start (e) {
      this._btn.classList.add('btn-active')
    },
    end (e) {
      this._btn.classList.remove('btn-active')
    }
  }
}
</script>
<style lang="scss" scoped>
  .btn{
    width: 110px;
    height: 60px;
    border-radius: 10px;
    border: none;
    font-size: 15px;
    outline: none;
    user-select: unset;
    &-active{
      background: #ff00ff;
    }
  }
</style>