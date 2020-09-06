<template>
  <div ref="shopwrapper" class="">
    <!-- <app-header/> -->
    <div class="shop-wrapper">
      <!-- banner -->
      <div class="banner_wrap">
        <cube-slide :data="bannerList"/>
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
        <div class="part_t">
          <div class="list-column column_i" v-for="(item, index) in activityList" :key="index">
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
          <router-link v-for="(item ,index) in goodsList" :key="index" :class="[item.card_type === 'goods' ? 'goods-box verySpecialCard goods' : item.card_type === 'category' ? 'fxg-recomm-category-row recomm-category row_w' : 'fxg-activity-card-row activity card_row_w'  ,'col2']" :to="'/product/detail/' + item.product_id" tag="div">
            <div class="inner-box inner-box-new" v-if="item.card_type === 'goods'">
              <div class="figure">
                <img v-lazy="item.image" alt="" class="main inner_i">
              </div>
              <div class="detail">
                <div class="name android">
                  <!--  -->
                  <!-- <span class="activity-label">预热</span> -->
                  <span>{{ item.name }}</span>
                </div>
                <div class="left-part">
                  <div class="other">
                    <div class="price">
                      <span class="num num_s">
                        <span class="yuan-size">¥</span>{{ item.goods_price }}
                      </span>
                      <!--  -->
                      <span v-if="item.coupon_label" class="coupon-label goods-coupon-label coupon_s">
                        <span class="goods-coupon-label-text">{{ item.coupon_label }}</span>
                      </span>
                    </div>
                  </div>
                  <div class="sell">
                    <span>{{ item.sell_num }}人付款</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="inner-box inner_0" v-else-if="item.card_type === 'category'">
              <h3><span>xx</span></h3>
              <ul class="f13_w">
                <li class="f13" v-for="(ik, index) in item.categories" :key="index">{{ ik.name }}</li>
              </ul>
            </div>
            <div class="inner-box"  v-else-if="item.card_type === 'activity'">
              <div class="figure figure_w">
                <img v-lazy="item.feed_image_url" alt="" class="main figure_w">
              </div>
              <div class="detail">
                <div class="title">
                  <span class="text">{{ item.feed_title }}</span>
                </div>
                <div class="subtitle">
                  <span>{{ item.feed_subtitle }}</span>
                </div>
                <div class="checkAllBtn">查看全部</div>
              </div>
            </div>
          </router-link>
          
          <!-- card_type: goods -->
          <!-- <div class="goods-box verySpecialCard goods col2">
            <div class="inner-box inner-box-new">
              <div class="figure">
                <img src="" alt="" class="main inner_i">
              </div>
              <div class="detail">
                <div class="name android">
                  <span class="activity-label">预热</span>
                  <span></span>
                </div>
                <div class="left-part">
                  <div class="other">
                    <div class="price">
                      <span class="num num_s">
                        <span class="yuan-size">¥</span>35
                      </span>
                      <span class="coupon-label goods-coupon-label coupon_s">
                        <span class="goods-coupon-label-text">满198减5券</span>
                      </span>
                    </div>
                  </div>
                  <div class="sell">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- card_type: category -->
          <!-- <div class="fxg-recomm-category-row recomm-category col2 row_w">
            <div class="inner-box inner_0">
              <h3><span>xx</span></h3>
              <ul class="f13_w">
                <li class="f13"></li>
              </ul>
            </div>
          </div> -->
          <!-- card_type: activity -->
          <!-- div class="fxg-activity-card-row activity col2 card_row_w">
            <div class="inner-box">
              <div class="figure figure_w">
                <img src="" alt="" class="main figure_w">
              </div>
              <div class="detail">
                <div class="title">
                  <span class="text"></span>
                </div>
                <div class="subtitle">
                  <span></span>
                </div>
                <div class="checkAllBtn"></div>
              </div>
            </div>
          </div> -->
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

export default {
  name: 'shop',
  props: {},
  components: {
    appHeader
  },
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
      this.$refs.shopwrapper.addEventListener('scroll', this.getMoreGoods)
      // new Inertia(document.getElementById('ball'))
    })
  },
  activated() {
  },
  beforeDestroy() {
    clearTimeout(this.tickId)
    this.$refs.shopwrapper.removeEventListener('scroll', this.getMoreGoods)
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
          this.activityList = resData.activity_list[0]
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
    getMoreGoods(e) {
      console.log(e)
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
    },
    setLink(e) {
      let link = ''
      switch (e.id) {
        case '1':
          link = 'shopsearch'
          break
        case '2':
          link = 'categories'
          break
        case '8':
          link = 'order'
          break
        case '9':
          link = 'collection'
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
      vertical-align: top;
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
        .placeholder-1,._seckill-part .seckill-list>div img {
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
  .column_i{
    position: relative;
    -webkit-border-radius: .13333rem;
    border-radius: .13333rem;
    margin-bottom: .13333rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  .column_i {
    width: 4.66667rem;
    height: 3.01333rem;
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
    padding-left: .24rem;
    padding-right: .24rem;
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
  .verySpecialCard {
    box-shadow: 0 1px 8px 0 hsla(0,0%,87%,.5)!important;
    width: 4.53333rem;
    height: 6.90667rem;
    border-radius: .24rem!important;
    margin-bottom: .29333rem!important;
    background-color: #fff!important;
  }
  .goods-box {
    position: relative;
    width: 10rem;
    overflow: hidden;
    background-color: #fff;
  }
  .goods-box.col2 {
    vertical-align: top;
    display: inline-block;
    width: 4.53333rem;
    background: #f4f5f6;
  }
  .goods-box.col2:nth-child(2n), .goods-box.col2:nth-child(odd) {
    margin: 0 4px 4px 2px;
  }
  .goods-box .inner-box {
    position: relative;
    margin: .24rem .4rem .293333rem;
    overflow: hidden;
    background: #fff;
  }
  .goods-box .inner-box-new {
    margin: 0!important;
  }
  .goods-list .col2 .inner-box {
    margin: 0 2px 4px 0!important;
  }
  .goods-box.col2 .inner-box {
    margin: 0 2px 4px 0;
  }
  .goods-box.col2:nth-child(2n) .inner-box {
    margin: 0 0 4px 2px;
  }
  .goods-box.col2 .inner-box-new, .goods-box.col2:nth-child(2n) .inner-box-new {
    margin: 0!important;
  }
  .goods-box .inner-box .figure {
    float: left;
    position: relative;
    width: 4.66667rem;
    height: 4.66667rem;
    margin-right: .32rem;
    background-color: #f4f5f6;
    background-image: url(https://tms3.bytecdn.cn/foreground/static/img/zd-bg.png);
    background-repeat: no-repeat;
    background-position: 50%;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .goods-box.col2 .inner-box .figure {
    float: none;
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
  }
  .goods-box.col2 .inner-box .figure:before {
    content: "";
    display: block;
    padding-bottom: 100%;
    background-color: #fff;
  }
  .inner_i {
    margin: .18667rem .16rem 0;
    width: 4.21333rem!important;
    height: 4.21333rem!important;
  }
  .goods-box .inner-box .figure .main {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .goods-box .inner-box .detail .name {
    font-size: .4rem;
    color: #333;
    line-height: .64rem;
    height: 1.28rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box!important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .goods-box.col2 .inner-box .detail .name {
    display: block!important;
    margin: .16rem .21333rem;
    font-size: .37333rem;
    line-height: .48rem;
    height: .48rem;
  }
  .goods-box .inner-box .detail .left-part {
    position: absolute;
    left: 3.52rem;
    bottom: 0;
  }
  .goods-box.col2 .inner-box .detail .left-part {
    position: static;
    margin-left: 8px;
  }
  .goods-box .inner-box .detail .left-part .other {
    margin-bottom: 2px;
    color: #ef5151;
  }
  .goods-box.col2 .inner-box .detail .left-part .other {
    margin-bottom: 0;
    overflow: hidden;
  }
  .goods-box .inner-box .detail .left-part .other .price {
    font-size: 0;
    line-height: .64rem;
    height: .64rem;
    float: left;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .num_s {
    color: #ef5151;
  }
  .goods-box .inner-box .detail .left-part .other .price .num {
    margin-left: .05333rem;
    font-size: .4rem;
    line-height: .53333rem;
    margin-right: .133333rem;
  }
  .goods-box .inner-box .detail .left-part .other .price {
    font-size: .32rem;
  }
  .goods-box .inner-box .detail .left-part .sell {
    float: left;
    bottom: 0;
    color: #999;
    height: .346667rem;
    line-height: .346667rem;
    min-width: 1px;
    margin-top: .106667rem;
    font-size: .32rem;
    padding-left: .08rem;
  }
  .goods-box.col2 .inner-box .detail .left-part .sell {
    height: 16px;
    line-height: 16px;
    font-size: .34667rem;
    margin-bottom: 6px;
    color: #b0b0b0;
  }
  .coupon_s {
    height: .42667rem!important;
    background-color: #fee!important;
    -webkit-border-radius: .05333rem!important;
    border-radius: .05333rem!important;
    line-height: .42667rem!important;
    color: #e55f5a!important;
    font-size: .29333rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .coupon-label {
    display: inline-block;
    vertical-align: top;
    position: relative;
    font-size: .26667rem;
    text-align: center;
    height: .37333rem;
    line-height: .37333rem;
    -webkit-border-radius: 1px;
    border-radius: 1px;
    top: 0;
    padding: .05333rem .13333rem;
    max-width: 2.66667rem;
    white-space: nowrap;
    color: #f85959;
  }
  .goods-coupon-label-text {
    z-index: 1;
    position: relative;
    display: block;
  }
  
  .fxg-recomm-category-row {
    padding: .48rem .4rem 0;
    position: relative;
    top: -1px;
    overflow: hidden;
    width: -webkit-calc(100%-30px);
    width: calc(100%-30px);
    width: -moz-calc(100% - 30px);
    background: #f4f5f6;
  }
  .row_w {
    width: 4.66667rem!important;
    height: 6.77333rem!important;
    overflow: hidden;
    -webkit-border-radius: .10667rem;
    border-radius: .10667rem;
    -webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
    background-color: #fff;
    margin-bottom: .16rem!important;
  }
  .fxg-recomm-category-row {
    padding: .48rem .4rem 0;
    position: relative;
    top: -1px;
    overflow: hidden;
    width: -webkit-calc(100%-30px);
    width: calc(100%-30px);
    width: -moz-calc(100% - 30px);
    background: #f4f5f6;
  }
  .fxg-recomm-category-row.col2 {
    vertical-align: top;
    display: inline-block;
    width: 5rem;
    padding: 0;
    margin: 0;
  }
  .fxg-recomm-category-row.col2 {
    vertical-align: top;
    display: inline-block;
    width: 5rem;
    padding: 0;
    margin: 0;
  }
  .inner_0 {
    padding: 0!important;
  }
  .fxg-recomm-category-row.col2 .inner-box {
    margin: 0 2px 4px 0;
    padding: 0 0 0 .25rem;
    overflow: hidden;
    background: #f4f5f6;
  }
  &.goods-list .col2 .inner-box {
    margin: 0 2px 4px 0!important;
  }
  .fxg-recomm-category-row.col2 .inner-box {
    margin: 0 2px 4px 0;
    padding: 0 0 0 .25rem;
    overflow: hidden;
    background: #f4f5f6;
  }
  .fxg-recomm-category-row.col2:nth-child(2n) .inner-box {
    margin: 0 0 4px 2px;
  }
  .fxg-recomm-category-row.col2:nth-child(2n) .inner-box {
    margin: 0 0 4px 2px;
  }
  .fxg-recomm-category-row h3 {
    display: none;
  }
  .fxg-recomm-category-row h3 {
    display: none;
  }
  .fxg-recomm-category-row.col2 .inner-box h3 {
    position: relative;
    display: block;
    text-align: center;
    margin: .53333rem .24rem .58667rem 0;
  }
  .fxg-recomm-category-row.col2 .inner-box h3 {
    position: relative;
    display: block;
    text-align: center;
    margin: .53333rem .24rem .58667rem 0;
  }
  .fxg-recomm-category-row.col2 .inner-box h3:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 9px;
    margin-left: -50px;
    width: 100px;
    height: 1px;
    background: #d8d8d8;
  }
  .fxg-recomm-category-row.col2 .inner-box h3:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 9px;
    margin-left: -50px;
    width: 100px;
    height: 1px;
    background: #d8d8d8;
  }
  .fxg-recomm-category-row.col2 .inner-box h3 span {
    position: relative;
    z-index: 1;
    padding: 0 8px;
    background: #f4f5f6;
    font-size: 17px;
    color: #999;
    font-weight: 400;
  }
  .fxg-recomm-category-row.col2 .inner-box h3 span {
    position: relative;
    z-index: 1;
    padding: 0 8px;
    background: #f4f5f6;
    font-size: 17px;
    color: #999;
    font-weight: 400;
  }
  .f13_w {
    padding-left: .16rem!important;
  }
  .fxg-recomm-category-row ul {
    padding: 0;
    margin: 0;
  }
  .f13 {
    font-size: .34667rem;
  }
  .fxg-recomm-category-row ul li {
    margin: 0 .4rem .48rem 0;
    float: left;
    list-style: none;
    background: #fff;
    -webkit-border-radius: .11rem;
    border-radius: .11rem;
    width: 2rem;
    height: .75rem;
    line-height: .75rem;
    text-align: center;
    color: #505050;
    white-space: nowrap;
  }
  .fxg-recomm-category-row ul li {
    margin: 0 .4rem .48rem 0;
    float: left;
    list-style: none;
    background: #fff;
    -webkit-border-radius: .11rem;
    border-radius: .11rem;
    width: 2rem;
    height: .75rem;
    line-height: .75rem;
    text-align: center;
    color: #505050;
    white-space: nowrap;
  }
  .fxg-recomm-category-row.col2 .inner-box ul li:nth-child(2n) {
      margin-right: 0;
  }
  .fxg-recomm-category-row.col2 .inner-box ul li:nth-child(2n) {
    margin-right: 0;
  }

  .fxg-activity-card-row {
    position: relative;
    width: 10rem;
    overflow: hidden;
    background-color: #fff;
  }
  .card_row_w {
    width: 4.66667rem!important;
    height: 6.90667rem!important;
    overflow: hidden;
    -webkit-border-radius: .24rem;
    border-radius: .24rem;
    -webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 8px 0 rgba(0,0,0,.1);
    margin-bottom: .16rem!important;
    margin-top: -.13333rem;
  }
  .fxg-activity-card-row.col2 {
    vertical-align: top;
    display: inline-block;
    width: 5rem;
    background: #f4f5f6;
  }
  .fxg-activity-card-row {
    position: relative;
    width: 10rem;
    overflow: hidden;
    background-color: #fff;
  }
  .fxg-activity-card-row.col2 {
    vertical-align: top;
    display: inline-block;
    width: 5rem;
    background: #f4f5f6;
  }
  .fxg-activity-card-row .inner-box {
    position: relative;
    margin: .24rem .4rem .293333rem;
    overflow: hidden;
    background: #fff;
  }
  .fxg-activity-card-row.col2 .inner-box {
    margin: 0 2px 4px 0;
  }
  .goods-list .col2 .inner-box {
    margin: 0 2px 4px 0!important;
  }
  .fxg-activity-card-row .inner-box {
    position: relative;
    margin: 0!important;
    overflow: hidden;
    background: #fff;
  }
  .goods-list .col2:nth-child(odd) .inner-box {
    margin: 0 0 4px 2px;
  }
  .fxg-activity-card-row.col2 .inner-box {
    margin: 0 2px 4px 0;
  }
  .figure_w {
    width: 4.66667rem!important;
    height: 4.66667rem!important;
  }
  .fxg-activity-card-row .inner-box .figure {
    float: left;
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
    margin-right: .32rem;
    background-color: #f4f5f6;
    background-image: url(https://tms3.bytecdn.cn/foreground/static/img/zd-bg.png);
    background-repeat: no-repeat;
    background-position: 50%;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .fxg-activity-card-row.col2 .inner-box .figure {
    float: none;
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
  }
  .fxg-activity-card-row .inner-box .figure {
    float: left;
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
    margin-right: .32rem;
    background-color: #f4f5f6;
    background-image: url(https://tms3.bytecdn.cn/foreground/static/img/zd-bg.png);
    background-repeat: no-repeat;
    background-position: 50%;
    -webkit-background-size: cover;
    background-size: cover;
  }
  .fxg-activity-card-row.col2 .inner-box .figure {
    float: none;
    position: relative;
    width: 100%;
    height: auto;
    margin: 0;
  }
  .fxg-activity-card-row.col2 .inner-box .figure:before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .fxg-activity-card-row.col2 .inner-box .figure:before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  .figure_w {
    width: 4.66667rem!important;
    height: 4.66667rem!important;
  }
  .fxg-activity-card-row .inner-box .figure .main {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .fxg-activity-card-row .inner-box .figure .main {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .fxg-activity-card-row.col2 .inner-box .detail {
    text-align: center;
    background: #f85959;
    background-image: -webkit-linear-gradient(335deg,#ff9898 11%,#f85959);
    background-image: linear-gradient(115deg,#ff9898 11%,#f85959);
    height: 2.13333rem;
  }
  .fxg-activity-card-row.col2 .inner-box .detail {
    text-align: center;
    background: #f85959;
    background-image: -webkit-linear-gradient(335deg,#ff9898 11%,#f85959);
    background-image: linear-gradient(115deg,#ff9898 11%,#f85959);
    height: 2.23333rem;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .title {
    padding-top: .13333rem;
    font-size: 0;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .title {
    padding-top: .13333rem;
    font-size: 0;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .title .text {
    position: relative;
    display: inline-block;
    color: #fff;
    font-size: .32rem;
    line-height: .45333rem;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .title .text {
    position: relative;
    display: inline-block;
    color: #fff;
    font-size: .32rem;
    line-height: .45333rem;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .title .text:before {
    content: "";
    position: absolute;
    left: -21px;
    top: 44%;
    width: 14px;
    height: 1px;
    background: #fff;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .title .text:before {
    content: "";
    position: absolute;
    left: -21px;
    top: 44%;
    width: 14px;
    height: 1px;
    background: #fff;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .title .text:after {
    content: "";
    position: absolute;
    right: -21px;
    top: 44%;
    width: 14px;
    height: 1px;
    background: #fff;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .title .text:after {
    content: "";
    position: absolute;
    right: -21px;
    top: 44%;
    width: 14px;
    height: 1px;
    background: #fff;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .subtitle {
    color: #fff;
    font-size: .32rem;
    line-height: .45333rem;
    margin: .08rem 0 .13333rem;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .subtitle{
    color: #fff;
    font-size: .32rem;
    line-height: .45333rem;
    margin: .08rem 0 .13333rem;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .subtitle {
    color: #fff;
    font-size: .32rem;
    line-height: .45333rem;
    margin: .08rem 0 .13333rem;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .subtitle {
    color: #fff;
    font-size: .32rem;
    line-height: .45333rem;
    margin: .08rem 0 .13333rem;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .checkAllBtn {
    position: relative;
    color: #fff;
    font-size: 12px;
    width: 66px;
    height: 24px;
    line-height: 24px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .checkAllBtn {
    position: relative;
    color: #fff;
    font-size: 12px;
    width: 66px;
    height: 24px;
    line-height: 24px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .checkAllBtn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 132px;
    height: 48px;
    border: 1px solid #fff;
    border-radius: 8px;
    box-sizing: border-box;
    transform: scale(.5);
    transform-origin: left top;
  }
  .fxg-activity-card-row.col2 .inner-box .detail .checkAllBtn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 132px;
    height: 48px;
    border: 1px solid #fff;
    border-radius: 8px;
    box-sizing: border-box;
    transform: scale(.5);
    transform-origin: left top;
    }
}

</style>
