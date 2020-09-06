<template>
  <div ref="shopwrapper" class="">
    <!-- <app-header/> -->
    <div class="shop-wrapper">
      <!-- banner -->
      <div class="banner_wrap">
        <cube-slide :data="bannerList" :options="slideOptions"/>
      </div>
      <!-- menu -->
      <div class="menu_wrap">
        <router-link class="menu_item" v-for="(item, index) in categoryInfo" :key="index" :to="setLink(item)" tag="div">
          <div class="menu_item_top">
            <img :src="item.image" alt="" class="menu_item_img">
          </div>
          <div class="menu_item_bottom">{{ item.name }}</div>
        </router-link>
      </div>
      <!-- 限时抢购 -->
      <div class="_seckill-part">
        <div class="top-part">
          <div class="i">
            <span class="title">限时抢购</span>
            <span class="subtitle">{{ secKillStr }}</span>
            <span v-html="temp"></span>
          </div>
          <div class="j">
            查看全部
            <span class="right-arrow"></span>
          </div>
        </div>
        <div class="seckill-list">
          <div class="hair-line all sec-goods-container radius" v-for="(item, index) in currentGoods" :key="index" :data-pid="item.product_id">
            <div class="placeholder-1">
              <img :src="item.image" alt="">
            </div>
            <div class="title ellipsis">{{ item.goods_name }}</div>
            <div class="discount">
              <span class="red">
                <span style="font-size: 12px;">¥</span>{{ item.campaign_price/100 }}</span>
              <span class="origin-sec">¥{{ item.goods_price/100 }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 精选 -->
      <div class="stick-part">
        <div class="part_t" v-for="(val, k, index) in activityList" :key="index">
          <div :class="['list-column', 'column_' + k]" v-for="(item, i) in val" :key="i">
            <img :src="item.image_url" alt="">
          </div>
        </div>
      </div>
      <!-- 推荐 -->
      <div class="goods-feed goods-list col2 goods_0">
        <div class="goods-feed-title">
          <img src="https://tms3.bytecdn.cn/foreground/static/img/channel/list/recommend-new.jpeg" alt="">
          <div class="_sub">假一赔三 · 货到付款 · 7天退货</div>
        </div>
        <div class="goods_w">
          <goodlist :goodsdata="goodsList" />
        </div>
        <!-- more -->
        <div class="_loading">{{ moretext }}</div>
      </div>
    </div>
    <!-- <a href="javascript:" id="ball" class="ball">拖我</a> -->
  </div>
</template>

<script type="text/javascript">
import appHeader from '@/components/header'
// import { mapMutations, mapActions } from 'vuex'
import { newList, currentFourSeckillGoods, ajaxGetGoods } from '@/api/shop.js'
// import Inertia from '@/utils/Inertia.js'
import goodlist from './components/goodlist'
import { loadmore } from '@/mixins/loadMore.js'

export default {
  name: 'Shop',
  components: {
    appHeader,
    goodlist
  },
  mixins: [loadmore],
  data() {
    return {
      bannerList: [],
      categoryInfo: [],
      currentGoods: [],
      activityList: [],
      goodsList: [],
      tpl: '<span class="clock">%hh</span><span class="dots">:</span><span class="clock">%mm</span><span class="dots">:</span><span class="clock">%ss</span>',
      tickId: null,
      ddlTime: 0,
      secKillStr: '',
      innerDdlTime: 0,
      showSecKillTimer: !0,
      hour: '00',
      minute: '00',
      second: '00',
      msecond: '00',
      step: this.showSecKillTimer ? 100 : 1e3,
      scrollEl: null,
      loadMoreText: {
        loadText: '加载更多',
        loadingText: '加载中...',
        noMore: '让我歇会吧'
      },
      isload: true,
      moretext: '加载更多',
      ajaxquerys: {
        page: 0,
        pageSize: 10
      },
      slideOptions: {
        eventPassthrough: 'vertical' // 保留垂直方向的滚动
      }
    }
  },
  computed: {
    temp: function() {
      /* eslint-disable */
      var t = this.tpl.replace(/\%hh/, this.hour).replace(/\%mm/, this.minute).replace(/\%ss/, this.second);
      return this.showSecKillTimer ? t.replace(/%ms/, this.msecond) : t
      /* eslint-enable */
    }
  },
  watch: {
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.getNewList()
      this.getCurrentGoods()
      this.getAjaxGetGoods()
      this.scrollEl = this.$refs.shopwrapper
      // this.$refs.shopwrapper.addEventListener('scroll', this.getMoreGoods)
      // new Inertia(document.getElementById('ball'))
    })
  },
  activated() {
  },
  beforeDestroy() {
    clearTimeout(this.tickId)
    // this.$refs.shopwrapper.removeEventListener('scroll', this.getMoreGoods)
  },
  methods: {
    getNewList() {
      newList().then(response => {
        console.log(response)
        const resData = response.data.data
        if (resData) {
          resData.banner.forEach(item => {
            this.bannerList.push({
              url: 'javascript:;',
              image: item.image
            })
          })
          resData.category_info.forEach((item, index) => {
            if (index < 5 && item.id !== '10') {
              this.categoryInfo.push(item)
            }
          })
          // this.activityList = resData.activity_list[0]
          let arr = {}
          resData.activity_list.forEach((item, index) => {
            if (item instanceof Array) {
              item.forEach((val, k) => {
                !arr[val.size_type] ? (arr[val.size_type] = [], arr[val.size_type].push(val)) : arr[val.size_type].push(val)
              })
            } else {
              !arr[item.size_type] ? (arr[item.size_type] = [], arr[item.size_type].push(item)) : arr[item.size_type].push(item)
            }
          })
          this.activityList = arr
        }
      })
    },
    getCurrentGoods() {
      currentFourSeckillGoods().then(response => {
        console.log(response)
        this.currentGoods = response.data.data.list
        this.initCountDown(response.data.data.session)
      })
    },
    getAjaxGetGoods() {
      const params = {
        cids: '',
        classifyId: 0,
        page: this.ajaxquerys.page,
        pageSize: this.ajaxquerys.pageSize,
        addActivity: 1,
        app_id: 'undefined',
        area_type: 5,
        area_id: 0,
        b_type_new: 0
      }
      if (this.isload) {
        this.moretext = this.loadMoreText.loadingText
        ajaxGetGoods(params).then(response => {
          this.moretext = this.loadMoreText.loadText
          // console.log(response)
          this.goodsList = this.goodsList.concat(response.data.data.list)
          // console.log(this.goodsList)
          this.isload = false
        }).catch(err => {
          console.log(err)
          this.moretext = this.loadMoreText.noMore
          this.isload = false
        })
      }
    },
    setLink(e) {
      let link = ''
      switch (e.id) {
        case '1':
          link = '/product/shopsearch'
          break
        case '2':
          link = '/product/categories'
          break
        case '8':
          link = '/product/order'
          break
        case '9':
          link = '/product/collection'
          break
      }
      return link
    },
    initCountDown(t) {
      if (t) {
        /* eslint-disable */
        var e = new Date(t.current_time.replace(/\-/g, '/')),
          i = new Date(t.end_time.replace(/\-/g, '/')),
          s = new Date(t.begin_time.replace(/\-/g, '/')),
          a = i.getTime() - e.getTime()
        this.ddlTime = Math.floor(a / 1e3)
        this.secKillStr = s.getHours() + '点场'
        /* eslint-enable */
        this.check()
      }
    },
    tick() {
      /* eslint-disable */
      var t = (new Date).getTime(), e = this.showSecKillTimer ? 100 : 1e3
      if (Math.floor(this.innerDdlTime / e) === Math.floor(t / e) || t >= this.innerDdlTime) {
        this.hour = '00'
        this.minute = '00'
        this.second = '00'
        this.showSecKillTimer && (this.msecond = '0')
      }
      var i = this.innerDdlTime - t
      this.hour = Math.floor(i / 36e5)
      this.hour < 10 && (this.hour = '0' + this.hour)
      i %= 36e5
      this.minute = Math.floor(i / 6e4)
      this.minute < 10 && (this.minute = '0' + this.minute)
      i %= 6e4
      this.second = Math.floor(i / 1e3)
      this.second < 10 && (this.second = '0' + this.second)
      this.showSecKillTimer && (i %= 1e3, this.msecond = Math.floor(i / 100))
      this.tickId = setTimeout(this.tick, this.step)
      /* eslint-enable */
    },
    check() {
      var t = {}.toString.call(this.ddlTime)
      if (t === '[object Date]') {
        this.innerDdlTime = this.ddlTime.getTime()
      } else {
        t === '[object Number]' && (this.innerDdlTime = new Date(1e3 * this.ddlTime + (new Date()).getTime()).getTime())
      }
      this.tick()
    }
  }
}
</script>

<style lang="scss">
.ball {
	position: fixed;
  line-height: 1.75rem;
  width: 1.75rem;
  height: 1.75rem;
  padding: .25rem;
  text-align: center;
  border-radius: 99px;
  color: #fff;
  /*border: 1rem solid transparent;*/
  background-color: #ed424b;
  background-clip: padding-box;
  text-decoration: none;
  top: 2em;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shop-wrapper .cube-slide-item > a > img {
  width: 100%;
  height: 3.53125rem;
}
.hair-line {
  position: relative;
}
._seckill-part{
  .top-part{
    span.dots {
      font-weight: 700;
      vertical-align: middle;
      margin: 0 .05333rem
    }
    span.clock {
      border-radius: .05333rem;
      background: #f3f3f3;
      color: #333;
      height: 20px;
      line-height: 20px;
      width: .45333rem;
      text-align: center
    }
  }
}
</style>

<style lang="scss" scoped>
.shop-wrapper{
  width: 100%;
  // height: 100%;
  background: #f4f5f6;
  .menu_wrap{
    width: 10rem;
    display: flex;
    flex-flow: wrap;
    color: #666;
    background: #fff;
    margin-bottom: .18667rem;
    .menu_item{
      width: 2.5rem;
      height: 2.4rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      .menu_item_top{
        position: relative;
        width: 1.22667rem;
        height: 1.22667rem;
        border-radius: 1.22667rem;
        margin: .34667rem 0 .13333rem;
        .menu_item_img{
          width: 1.22667rem;
          height: 1.22667rem;
        }
      }
      .menu_item_bottom {
        height: .45333rem;
        text-align: center;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .32rem;
        color: #666;
      }
    }
  }
  ._seckill-part{
    background: #fff;
    border-bottom: .18667rem solid #f4f5f6;
    img{
      width: 100%;
    }
    .top-part{
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      padding: .56rem .29333rem 0;
      color: #505050;
      font-size: .34667rem;
      letter-spacing: .33px;
      margin-bottom: .32rem;
      .i {
        font-size: 0;
        span {
            font-size: .34667rem;
            display: inline-block;
            vertical-align: middle
        }
        .title {
            color: #333;
            font-weight: 700;
            font-size: 19px;
            margin-right: .24rem
        }
        .subtitle {
            margin-right: .18667rem;
            color: #666
        }
      }
      .j {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: right;
        font-size: 13px;
        color: #666;
        .right-arrow{
          margin-left: -.13333rem;
          width: .18667rem;
          height: .18667rem;
          transform: rotate(45deg);
          display: inline-block;
          width: .2rem;
          height: .2rem;
          border-top: 1px solid;
          border-right: 1px solid;
        }
      }
    }
    .seckill-list {
      display: flex;
      justify-content: space-between;
      height: 3.22667rem;
      margin-bottom: .29333rem;
      margin-right: .29333rem;
      margin-left: .29333rem;
      .sec-goods-container {
        width: 2.21333rem;
        height: 3.2rem;
      }
      .sec-goods-container.hair-line.all.radius:after {
        -webkit-border-radius: 12px;
        border-radius: 12px;
        -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.08);
        box-shadow: 0 1px 1px 0 rgba(0,0,0,.08);
        border-color: hsla(0,0%,91%,.8);
      }
      &>div {
        text-align: center;
        img {
            width: 1.70667rem;
            height: 1.70667rem;
        }
        .placeholder-1 {
            margin: .13333rem auto 0
        }
        .title {
            margin: .18667rem .08rem .10667rem;
            font-size: 12px
        }
        .red-yuan {
            width: .26667rem;
            height: .26667rem
        }
        .grey-yuan {
            width: .21333rem;
            height: .21333rem
        }
        .discount {
            letter-spacing: .38px;
            line-height: .45333rem;
            font-size: 0
        }
        .red {
            font-size: 14px;
            color: #e22020
        }
        .origin-sec {
            font-size: 12px;
            text-decoration: line-through;
            color: #999
        }
      }
    }
    .right-arrow {
        margin-left: -.13333rem;
        width: .18667rem;
        height: .18667rem
    }
  }
}
._seckill-part .seckill-list .sec-goods-container.hair-line.all.radius:after {
  border-radius: 12px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.08);
  border-color: hsla(0,0%,91%,.8);
}
.hair-line.all:after {
  position: absolute;
  content: "";
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  border: 1px solid #ddd;
  transform: scale(.5);
  box-sizing: border-box;
}

.stick-part {
    background: #fff;
    margin-bottom: .18667rem;

  .list-column{
    img{
      width: 100%;
    }
  }
  .part_t {
    padding-left: .26667rem;
    padding-right: .26667rem;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }
  .column_2{
    position: relative;
    width: 4.66667rem;
    height: 3.01333rem;
    -webkit-border-radius: .13333rem;
    border-radius: .13333rem;
    margin-bottom: .13333rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  .column_1 {
    position: relative;
    width: 9.46667rem;
    height: 2.90667rem;
    -webkit-border-radius: .13333rem;
    border-radius: .13333rem;
    margin-bottom: .13333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  }
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
  
.goods_w {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.goods-feed {
   background: #fff;
   &.goods-list {
    margin-top: .16rem;
    color: #000;
  }
   &.goods_0 {
    background-color: #fff!important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &.goods-list.col2 {
    background: #f4f5f6;
  }
  .goods-feed-title {
      padding: .16rem 0 .3467rem;
      text-align: center;
      img{
        width: 100%;
      }
  }

  .goods-feed-title ._main {
      position: relative;
      color: #f85959;
      height: .64rem;
      line-height: .64rem;
      font-size: .45333rem;
  }

  .goods-feed-title ._main ._line {
      position: absolute;
      background-color: #f85959;
      height: 1px;
      width: .3733rem;
      top: 50%;
  }

  .goods-feed-title ._main ._right {
      left: 36%;
  }

  .goods-feed-title ._main ._left {
      left: 60%;
  }

  .goods-feed-title ._sub {
      color: #999;
      height: .4533rem;
      line-height: .4533rem;
      font-size: .32rem;
  }

  .card_row_w {
      width: 4.66667rem!important;
      height: 6.90667rem!important;
      overflow: hidden;
      border-radius: .24rem;
      box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
      margin-bottom: .16rem!important;
      margin-top: -.13333rem;
  }

  .figure_w {
      width: 4.66667rem!important;
      height: 4.66667rem!important;
  }
}

</style>
