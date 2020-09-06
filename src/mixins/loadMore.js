
export const loadmore = {
  data () {
    return {
      loadMoreText: {
        loadText: '加载更多',
        loadingText: '加载中...',
        noMore: '让我歇会吧'
      },
      isload: true,
      moretext: '加载更多',
      scrolleltop: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.scrollEl.addEventListener('scroll', this.getMoreGoods)
      }, 500)
    })
  },
  beforeDestroy() {
    this.scrollEl.removeEventListener('scroll', this.getMoreGoods)
  },
  destroyed() {
  },
  methods: {
    getMoreGoods(e) {
      // console.log(e)
      this.scrolleltop = e.target.scrollTop
      // console.log(this.$refs.shopwrapper.getBoundingClientRect())
      const maxTop = e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight
      // console.log(maxTop)
      if (maxTop < 80 && !this.isload) {
        this.isload = true
        this.moretext = this.loadMoreText.loadingText
        this.ajaxquerys.page += 1
        this.getAjaxGetGoods()
      }
//       // getBoundingClientRect()
//       document.body.scrollTop
    }
  }
}
