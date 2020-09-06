<template>
  <div ref="categorychoose" class="categorychoose">
    <goback :gotitle="$route.query.name" />
    <goodsfilter :eltop="scrolleltop" />
    <goodlist :goodsdata="categoryData" />
    <div class="_loading">{{ moretext }}</div>
  </div>
</template>

<script type="text/javascript">
import goback from '@/components/goback'
import { productcategory } from '@/api/shop.js'
import goodlist from './goodlist'
import goodsfilter from './goodsfilter'
import { loadmore } from '@/mixins/loadMore.js'

export default{
  name: 'CategoryChoose',
  components: {
    goback,
    goodlist,
    goodsfilter
  },
  mixins: [loadmore],
  data() {
    return {
      scrollEl: null,
      categoryData: [],
      ajaxquerys: {
        second_cid: '',
        type: 0,
        sort: 0,
        page: 0,
        size: 10
      },
      isload: false
    }
  },
  comuted: {
  },
  watch: {
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollEl = this.$refs.categorychoose
      this.ajaxquerys.second_cid = this.$route.query.content
      this.getProductcategory()
    })
  },
  activated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods: {
    getProductcategory() {
      this.isload = true
      productcategory(this.ajaxquerys).then(response => {
        console.log(response)
        this.categoryData = this.categoryData.concat(response.data.data.list)
        this.isload = false
        if (response.data.data.list.length > 0) {
          this.moretext = this.loadMoreText.loadText
        } else {
          this.moretext = '暂无更多内容'
        }
      })
      .catch(err => {
        this.isload = false
        this.moretext = this.loadMoreText.noMore
        console.log(err)
      })
    },
    getAjaxGetGoods() {
      this.getProductcategory()
    }
  }
}
</script>

<style lang="scss" scoped>
.categorychoose{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
._loading {
  width: 100%;
  text-align: center;
  background: transparent;
  color: #999;
  height: 40px;
  line-height: 40px;
  font-size: .32rem;
}
</style>