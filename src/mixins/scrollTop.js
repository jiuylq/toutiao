
export const totop = {
  data () {
    return {
      gotopel: null,
      clickTimer: null,
      lastClickTime: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.gotopel = this.$refs.scrollTitle
      this.gotopel.addEventListener('touchstart', this.goToTop)
    })
  },
  destroyed() {
    this.gotopel.removeEventListener('touchstart', this.goToTop)
  },
  methods: {
    goToTop() {
      // 判断当前是否是双击事件
      let nowTime = new Date().getTime()
      if (nowTime - this.lastClickTime < 400) {
        /* 双击 */
        this.lastClickTime = 0
        this.clickTimer && clearTimeout(this.clickTimer)
        let timer = setInterval(() => {
          // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          let scrollTop = document.querySelector('#app').scrollTop
          let ispeed = Math.floor(-scrollTop / 6)
          console.log(scrollTop)
          if (scrollTop === 0) {
            clearInterval(timer)
          }
          // document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed
          document.querySelector('#app').scrollTop = scrollTop + ispeed
        }, 10)
      } else {
        this.lastClickTime = nowTime
      }
    }
  }
}
