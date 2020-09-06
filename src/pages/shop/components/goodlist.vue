<template>
  <!-- container -->
  <div class="filter-goods-wrap" v-if="goodsdata.length > 0">
    <router-link v-for="(item ,index) in goodsdata" :key="index" :class="[item.card_type === 'goods' || !item.card_type ? 'goods-box verySpecialCard goods' : item.card_type === 'category' ? 'fxg-recomm-category-row recomm-category row_w' : 'fxg-activity-card-row activity card_row_w'  ,'col2']" :to="'/product/detail/' + item.product_id" tag="div">
      <div class="inner-box inner-box-new" v-if="item.card_type === 'goods' || !item.card_type">
        <div class="figure">
          <img v-lazy="item.image" alt="" class="main main_lg">
        </div>
        <div class="detail">
          <div class="name android">
            <span data-v-3d3f9a9c="">{{ item.name }}</span>
          </div>
          <div class="left-part">
            <div class="other">
              <div class="price">
                <span class="num num_lg">
                  <span class="yuan-size">¥</span>{{ item.goods_price }}
                </span>
                <span class="coupon-label goods-coupon-label coupon_lg" v-if="item.coupon_label">
                  <span class="goods-coupon-label-text">{{ item.coupon_label }}</span>
                </span>
              </div>
            </div>
            <!--  -->
            <div class="sell">
              <span>{{ item.sell_num }}人付款</span>
              <span class="comment-agg" v-if="item.comment_agg.count">{{ item.comment_agg.count }}条评论</span>
            </div>
          </div>
        </div>
      </div>
      <!-- card_type: category -->
      <div class="inner-box inner_0" v-else-if="item.card_type === 'category'">
        <h3><span>细选</span></h3>
        <ul class="f13_w">
          <li class="f13" v-for="(ik, ins) in item.categories" :key="ins">{{ ik.name }}</li>
        </ul>
      </div>
      <!-- card_type: activity -->
      <div class="inner-box" v-else-if="item.card_type === 'activity'">
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
  </div>
</template>

<script type="text/javascript">
export default{
  name: '',
  props: {
    goodsdata: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  comuted: {
  },
  watch: {
  },

  created() {
  },
  mounted() {
  },
  updated() {
  },
  activated() {
  },
  deactivated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods: {
    setBoxClass(e) {
      if (e.card_type) {
        let boxClass = ''
        switch (e.card_type) {
          case 'goods':
            boxClass = 'goods-box verySpecialCard col2'
            break
          case 'fxg-recomm-category-row recomm-category col2 row_w':
            break
          case 'fxg-activity-card-row activity col2 card_row_w':
            break
        }
        return boxClass
      } else {
        return 'goods-box verySpecialCard col2'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bt-grey {
  border-top: .187rem solid #fff;
}
.hair-line {
  position: relative;
}
.hide {
  display: none;
}
.filter-top-wrap {
  height: 1.12rem;
  position: relative;
}
#filter-top {
  width: 10rem;
  height: 1.12rem;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  background: #fff;
  &.filter-fixed {
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 100;
  }
}
.hair-line.bottom:after, .hair-line.top:before {
  position: absolute;
  height: 1px;
  left: 0;
  right: 0;
  z-index: 1;
  content: "";
  background: #e8e8e8;
  transform: scaleY(.5);
}
.hair-line.top:before {
  top: 0;
}
.hair-line.bottom:after {
  bottom: 0;
}
.dropdown-item {
  flex: 1;
  text-align: center;
  font-size: .37rem;
  line-height: 1.12rem;
  position: relative;
  color: #222;
  &.active {
    color: #f85959;
    .dropdown-text:after {
      border-color: #f85959 transparent transparent;
    }
  }
  .dropdown-text {
    display: inline-block;
    height: 1.12rem;
    width: 100%;
    &:after {
      content: "";
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 4px 3px 0;
      border-color: #999 transparent transparent;
      position: absolute;
      top: .51rem;
      margin-left: 4px;
    }
  }
}
.down-list {
  width: 10rem;
  position: absolute;
  left: 0;
  top: 1.09rem;
  background: #fff;
  z-index: 3;
  min-height: 3.63rem;
  .list-item {
    text-align: left;
    text-indent: .53rem;
    color: #222;
    position: relative;
    &.active {
      color: #f85959;
      .checked {
        position: absolute;
        top: 50%;
        right: .48rem;
        margin-top: -8px;
        width: 17px;
        height: 9px;
        display: inline-block;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAbCAYAAADRXrdxAAAAAXNSR0IArs4c6QAAAXFJREFUWAnV2NlxwjAQBmAvDwmtMekAnnLQh/uA5A13EKgFOoEXZf8dpHHwocOSjDTDjK1zPyRLBqoKS0opuq3Xe1VVHyZ0ordl0xwXJqOAiwHI9+vhcEL4VIBBQhyBbImIJ6oQjAukCIwr5OkxPpCnxvhCDAYNr5vNChnYGfQDhfs5kqrrxe1y2XNc72Z8Iuxa5mE3+a0L2ZoFotRvxR/ZwxnXqpP1UmbkfN75QhBk55zBYTQXSCDdA9E6I/rbFowcOjyNOnMO0FQIYjfLCZ3xctvxUvvUKC78eWmar9TPUAzIPwxu5gDFgnQwuUExIb2YXKDYkEFMalAKyCgmFSgVxIqJDUoJccLEAqWGOGOmgnJAvDAa9Pj723aw9kFsbTBWSDJvAK6NfYLzqes6/lg9bww6cwnSpc5YYCFlQRgbCOW+yzEk+Mc2wRh0NPTtS1nrfy0eJMsL6yTMEAj5OuWCYLzJGHTSN0P3zrPMCMZC+gME8b8Y5AtW/wAAAABJRU5ErkJggg==);
        -webkit-background-size: 17px 9px;
        background-size: 17px 9px;
      }
    }
  }
}
@media (min-width: 375px){
  .down-list {
    top: 41px;
  }
}
.single-item {
  flex: 1;
  text-align: center;
  font-size: .37rem;
  line-height: 1.12rem;
  color: #222;
  .single-text {
    display: inline-block;
    height: 1.12rem;
    width: 100%;
  }
  &.active .single-text {
    color: #f85959;
  }
}
.toggle-item {
  flex: 1;
  text-align: center;
  font-size: .37rem;
  line-height: 1.12rem;
  position: relative;
  color: #222;
  &.active .toggle-text {
    color: #f85959;
  }
  .toggle-text {
    display: inline-block;
    height: 1.12rem;
    width: 100%;
  }
  .up-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 3px 4px;
    border-color: transparent transparent #999;
    position: absolute;
    top: .4rem;
    margin-left: .11rem;
    &.active {
      border-color: transparent transparent #f85959;
    }
  }
  .down-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 3px 0;
    border-color: #999 transparent transparent;
    position: absolute;
    top: .59rem;
    margin-left: .11rem;
    &.active {
      border-color: #f85959 transparent transparent;
    }
  }
}
.verySpecialCard {
  box-shadow: 0 1px 8px 0 hsla(0,0%,87%,.5)!important;
  width: 4.53333rem;
  height: 6.90667rem;
  border-radius: .24rem!important;
  margin-bottom: .29333rem!important;
  background-color: #fff!important;
}
.main_lg {
  margin: .18667rem .16rem 0;
  width: 4.21333rem!important;
  height: 4.21333rem!important;
}
.filter-goods-wrap {
  display: flex;
  flex-wrap: wrap;
  padding-left: .24rem;
  padding-right: .24rem;
  justify-content: space-between;
}
.goods-box {
  position: relative;
  width: 10rem;
  overflow: hidden;
  background-color: #fff;
  &.col2 {
    vertical-align: top;
    display: inline-block;
    width: 4.53333rem;
    background: #f4f5f6;
    &:nth-child(2n), &:nth-child(odd) {
      margin: 0 4px 4px 2px;
    }
    .inner-box-new, &:nth-child(2n) .inner-box-new {
      margin: 0!important;
    }
  }
  .inner-box {
    position: relative;
    margin: .24rem .4rem .293333rem;
    overflow: hidden;
    background: #fff;
  }
  .inner-box {
    margin: 0 2px 4px 0;
    .figure {
      float: left;
      position: relative;
      width: 4.66667rem;
      height: 4.66667rem;
      margin-right: .32rem;
      background-color: #f4f5f6;
      background-image: url(https://tms3.bytecdn.cn/foreground/static/img/zd-bg.png);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    .figure {
      float: none;
      position: relative;
      width: 100%;
      height: auto;
      margin: 0;
      .main {
        position: absolute;
        left: 0;
        top: 0; 
        width: 100%;
        height: 100%;
      }
      &:before {
        content: "";
        display: block;
        padding-bottom: 100%;
        background-color: #fff;
      }
    }
    .detail {
      .name {
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
      .name {
        display: block!important;
        margin: .16rem .21333rem;
        font-size: .37333rem;
        line-height: .48rem;
        height: .48rem;
      }
      .left-part {
        position: absolute;
        left: 3.52rem;
        bottom: 0;
      }
      .left-part {
        position: static;
        margin-left: 8px;
        .other {
          margin-bottom: 2px;
          color: #ef5151;
        }
        .other {
          margin-bottom: 0;
          overflow: hidden;
          .price {
            font-size: 0;
            line-height: .64rem;
            height: .64rem;
            float: left;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .num {
              margin-left: .05333rem;
              font-size: .4rem;
              line-height: .53333rem;
              margin-right: .133333rem;
            }
            .yuan-size {
              font-size: .32rem;
            }
          }
        }
        .sell {
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
        .sell {
          height: 16px;
          line-height: 16px;
          font-size: .34667rem;
          margin-bottom: 6px;
          color: #b0b0b0;
        }
      }
    }
  }
}
.num_lg {
  color: #ef5151;
}
.coupon_lg {
  height: .42667rem!important;
  background-color: #fee!important;
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
.goods-coupon-label:after {
    content: " ";
    display: block;
    border: 1px solid #ffe0df;
    background: #fff5f5;
    position: absolute;
    transform: scale(.49);
    width: 200%;
    height: 200%;
    border-radius: 4px;
    transform-origin: 0 0;
    box-sizing: border-box;
    top: 0;
    left: 0;
}
.coupon_lg:after {
  -webkit-box-sizing: content-box!important;
  box-sizing: content-box!important;
}
._loading, .loading {
  text-align: center;
  background: transparent;
  color: #999;
  height: 40px;
  line-height: 40px;
}

.f12 {
  font-size: .32rem;
}
.row_w {
  width: 4.66667rem !important;
  height: 6.77333rem !important;
  overflow: hidden;
  border-radius: .10667rem;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 0.16rem !important;
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
.goods-feed.goods-list .col2 .inner-box {
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
</style>