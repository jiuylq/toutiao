<template>
  <div id="filter-wrap">
    <!-- top -->
    <div class="filter-top-wrap">
      <div id="filter-top" class="hair-line top bottom">
        <!--  -->
        <div class="dropdown-item filter-item active">
          <span class="dropdown-text">评价数</span>
          <div class="down-list hair-line bottom top hide">
            <div class="list-item">
              <span>综合排序</span>
              <span class="checked"></span>
            </div>
            <div class="list-item">
              <span>商家信誉优先</span>
              <span class="checked"></span>
            </div>
            <div class="list-item active">
              <span>评论数从高到低</span>
              <span class="checked"></span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="single-item filter-item ">
          <span class="single-text">销量</span>
        </div>
        <!--  -->
        <div class="toggle-item filter-item active">
          <span class="toggle-text">价格<span class="up-arrow active"></span><span class="down-arrow"></span></span>
        </div>
        <!--  -->
        <div class="single-item filter-item active">
          <span class="single-text">好评</span>
        </div>
        <!--  -->
        <div class="single-item filter-item">
          <span class="single-text">有券</span>
        </div>
      </div>
    </div>
    <!-- top end -->
    <div class="bt-grey"></div>
    <!-- container -->
    <div class="filter-goods-wrap">
      <div class="goods-box verySpecialCard col2">
        <div class="inner-box inner-box-new">
          <div class="figure">
            <img src="https://sf6-ttcdn-tos.pstatp.com/img/temai/FqlQLNIUDLviURoiY3hPG5n-F1DJ.jpg~360x360_q75.webp" alt="" class="main _cNfFeJ0S_EF737KMQdsR_0">
          </div>
          <div class="detail">
            <div class="name android">
              <span data-v-3d3f9a9c="">牛皮平底凉鞋女复古夏季软底舒适女鞋防滑百搭大码妈妈鞋</span>
            </div>
            <div class="left-part">
              <div class="other">
                <div class="price">
                  <span class="num _299HLs9bRw49CpKbhS50sw_0">
                    <span class="yuan-size">¥</span>168
                  </span>
                  <span class="coupon-label goods-coupon-label _1g7wvJK9ijplS3cZQrfjYl_0">
                    <span class="goods-coupon-label-text">减5券</span>
                  </span>
                </div>
              </div>
              <!--  -->
              <div class="sell">
                <span>1057人付款</span>
                <span class="comment-agg">99.62%好评</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-box verySpecialCard col2">
        <div class="inner-box inner-box-new">
          <div class="figure">
            <img src="https://sf6-ttcdn-tos.pstatp.com/img/temai/FqlQLNIUDLviURoiY3hPG5n-F1DJ.jpg~360x360_q75.webp" alt="" class="main _cNfFeJ0S_EF737KMQdsR_0">
          </div>
          <div class="detail">
            <div class="name android">
              <span data-v-3d3f9a9c="">牛皮平底凉鞋女复古夏季软底舒适女鞋防滑百搭大码妈妈鞋</span>
            </div>
            <div class="left-part">
              <div class="other">
                <div class="price">
                  <span class="num _299HLs9bRw49CpKbhS50sw_0">
                    <span class="yuan-size">¥</span>168
                  </span>
                  <span class="coupon-label goods-coupon-label _1g7wvJK9ijplS3cZQrfjYl_0">
                    <span class="goods-coupon-label-text">减5券</span>
                  </span>
                </div>
              </div>
              <!--  -->
              <div class="sell">
                <span>1057人付款</span>
                <span class="comment-agg">99.62%好评</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-box verySpecialCard col2">
        <div class="inner-box inner-box-new">
          <div class="figure">
            <img src="https://sf6-ttcdn-tos.pstatp.com/img/temai/FqlQLNIUDLviURoiY3hPG5n-F1DJ.jpg~360x360_q75.webp" alt="" class="main _cNfFeJ0S_EF737KMQdsR_0">
          </div>
          <div class="detail">
            <div class="name android">
              <span data-v-3d3f9a9c="">牛皮平底凉鞋女复古夏季软底舒适女鞋防滑百搭大码妈妈鞋</span>
            </div>
            <div class="left-part">
              <div class="other">
                <div class="price">
                  <span class="num _299HLs9bRw49CpKbhS50sw_0">
                    <span class="yuan-size">¥</span>168
                  </span>
                  <span class="coupon-label goods-coupon-label _1g7wvJK9ijplS3cZQrfjYl_0">
                    <span class="goods-coupon-label-text">减5券</span>
                  </span>
                </div>
              </div>
              <!--  -->
              <div class="sell">
                <span>1057人付款</span>
                <span class="comment-agg">99.62%好评</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loading f12">加载更多</div>
  </div>
</template>

<script>
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
._cNfFeJ0S_EF737KMQdsR_0 {
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
._1mrIvc4d0404wlTy5WF_2H_0, ._299HLs9bRw49CpKbhS50sw_0 {
  color: #ef5151;
}
._1g7wvJK9ijplS3cZQrfjYl_0 {
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
._1g7wvJK9ijplS3cZQrfjYl_0:after {
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
</style>