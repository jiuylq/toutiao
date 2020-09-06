<template>
  <div class="detail_wrapper" v-if="productData">
    <goback :gotitle="'详情'" />
    <div class="carousel">
      <swipers :items="carouselList" />
    </div>
    <div class="bb-grey">
      <div class="goods-info">
        <div class="title android">
          <div>{{ productData.name }}</div>
        </div>
        <!--  -->
        <div class="price-area">
          <div class="price-container">
            <div class="amount">￥<span class="number">{{ formatPrice(productData.sku_max_price) }}</span></div>
            <div class="discount">
              <div class="money">￥{{ formatPrice(productData.sku_min_price) }}</div>
            </div>
          </div>
        </div>
      </div>
        <!--  -->
      <div class="extra-details">
        <div class="extra-item">{{ showPost }}</div>
        <div class="extra-item middle" v-if="hasSetFreight">{{ getPreight }}</div>
        <div class="extra-item right">已售{{ productData.sell_num }}件</div>
      </div>
      <!--  -->
      <div>
        <a href="javascript:;" class="sell-point hair-line top" @click="showParamsHandle('servicedes')">
          <div class="service">服务</div>
          <div class="wrap">
            <div class="item"><i></i>假一赔三</div>
            <div class="item"><i></i>货到付款</div>
            <div class="item"><i></i>7天退货</div>
            <div class="item"><i></i>消费者保障服务</div>
            <div class="item"><i></i>评价抽10元大礼包</div>
            <div class="item"></div>
          </div>
          <i class="arrow-right"></i>
        </a>
      </div>
      <!--  -->
      <div class="product_params bt-grey">
        <a href="javascript:;" class="product-format" @click="showParamsHandle('params')">
          <div>
            <span class="word">商品参数</span>
            <div class="_right"><i class="right-arrow"></i></div>
          </div>
        </a>
      </div>
    </div>
    <!--  -->
    <div class="comment bb-grey no-padding">
      <div class="no-comment f14">暂无评论</div>
    </div>
    <!--  -->
    <div class="dsr bb-grey">
      <div class="top-row">
        <img :src="productData.shop_logo" alt="" class="logo">
        <div class="right-part">
          <div class="shop-comm-info">
            <div class="shop-name">{{ productData.shop_name }}</div>
            <div class="shop-desc">精选店铺</div>
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="toshop-btn f14 hair-line all">进店逛逛</a>
          </div>
        </div>
      </div>
      <div class="center-row">
        <div class="all-goods">
          <div class="good-count">{{ companyData ? companyData.shop_product_count : ''}}</div>
          <div class="shop-info-text1">全部商品</div>
        </div>
        <div class="fans">
          <div class="fans-count">{{ companyData ? companyData.shop_follow_count : ''}}</div>
          <div class="shop-info-text1">关注人数</div>
        </div>
        <ul class="dsr-wrap">
          <li>
            <div class="shop-info-text1">用户口碑</div>
            <div class="shop-info-text2 high">{{ productData.dsrInfo.shop }}</div>
            <div class="shop-info-text3 hair-line all high"></div>
          </li>
          <li>
            <div class="shop-info-text1">服务态度</div>
            <div class="shop-info-text2 high">{{ productData.dsrInfo.product }}</div>
            <div class="shop-info-text3 hair-line all high"></div>
          </li>
          <li>
            <div class="shop-info-text1">发货速度</div>
            <div class="shop-info-text2 high">{{ productData.dsrInfo.logistics }}</div>
            <div class="shop-info-text3 hair-line all high"></div>
          </li>
        </ul>
      </div>
      <div class="bottom-row" v-if="sameItems.length > 0">
        <ul class="goods-lists">
          <li class="goods-box" v-for="(item, index) in sameItems" :key="index">
            <img v-lazy="item.img" :alt="item.name" class="goods-img">
            <div class="goods-price">￥{{ formatPrice(item.sku_min_price) }}</div>
          </li>
        </ul>
      </div>
      <div class="switch-tab-container">
        <div class="desc">
          <div class="desc-goods-params">
            <div class="desc-tit">
              <span>商品参数</span>
            </div>
            <div class="desc-params-info-wrap">
              <div class="desc-params-info  hair-line all" v-if="parameter.list.length > 0">
                <div  v-for="(item, index) in parameter.list" :key="index" :class="['params-item hair-line bottom', index > 6 ? parameter.hide : '']">
                  <div class="item-key hair-line right ellipsis">{{ item.type }}</div>
                  <div class="item-value ellipsis">{{ item.value }}</div>
                </div>
              </div>
              <div class="params-option hair-line" v-else>
                <span>暂无更多参数</span>
              </div>
              <div class="params-option hair-line all" v-if="parameter.list.length > 6" @click="toggleParams">
                <span :class="[parameter.hide === 'hide' ? 'open' : 'close']"><span :class="['arrow', parameter.hide === 'hide' ? 'arrow-down' : 'arrow-up']"></span>展开</span>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="desc-pics  float">
            <div class="desc-tit"><span>图文详情</span></div>
            <div v-html="productData.description">
              <!-- <p v-if="companyData">
                <img v-for="(item, index) in companyData.shop_product_info" :key="index" v-lazy="item.img" alt="">
              </p> -->
            </div>
          </div>
        </div>
      </div>
      <div id="bottom-bar" class="bottom-bar">
        <div class="btn-container">
          <a href="javascript:;" class="shop-link-btn">
            <i class="shop-link-icon"></i>店铺
          </a>
          <a href="javascript:void(0)" class="customer-service-btn">
            <i class="customer-service-icon with-phone"></i>咨询
          </a>
          <a href="javascript:void(0)" class="shop-cart-btn">
            <i class="shop-cart-icon"><i>1</i></i>购物车
          </a> 
        </div>
        <div class="add-shop-cart-btn">加入购物车</div>
        <div class=" buy-submit-btn">立即购买</div>
      </div>
    </div>
    <productparam :productparam="showParams" @maskHandle="hideMaskHandle" v-if="showParams.show"/>
  </div>
</template>

<script type="text/javascript">
import { fxgajaxstaticitem, ajaxitem, getstock, samerecommend } from '@/api/shop.js'
 // https://haohuo.snssdk.com/product/fxgajaxstaticitem?id=3341476926773709645&b_type_new=0
import swipers from './components/swiper'
import productparam from './components/productparam'
import goback from '@/components/goback'
import { mapActions } from 'vuex'

export default{
  name: 'ProductDetail',
  components: {
    goback,
    swipers,
    productparam
  },
  data() {
    return {
      id: this.$route.params.id,
      productData: null,
      companyData: null,
      carouselList: [],
      sameItems: [],
      parameter: {
        list: [],
        hide: 'hide'
      },
      showParams: {
        show: false,
        type: '',
        data: []
      }
    }
  },
  computed: {
    hasSetFreight() {
      return this.productData && this.productData.freight && this.productData.freight.product_province_name
    },
    showPost() {
      return this.hasSetFreight ? this.productData.freight && this.productData.freight.calculate_type === 2 ? this.productData.freight.product_province_name + '快递' : this.productData.freight && this.productData.freight.calculate_type === 1 ? '重量' + this.productData.weight + 'kg' : void 0 : '包邮'
    },
    getPreight() {
      return this.productData && this.productData.init_express_price && this.productData.init_express_price / 100
    }
  },
  watch: {
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.id)
      this.getProductDetails()
    })
  },
  activated() {
  },
  beforeDestroy() {
  },
  methods: {
    getProductDetails() {
      const params = {
        id: this.id,
        b_type_new: 0
      }
      fxgajaxstaticitem(params).then(response => {
        console.log(response)
        const datas = response.data.data
        this.productData = datas
        if (datas.img_list.length) {
          datas.img_list.forEach((item, index) => {
            this.carouselList.push({
              image: item,
              url: 'javascript:;'
            })
          })
        }
        if (datas.product_format) {
          // this.parameter
          for (let i in datas.product_format) {
            this.parameter.list.push({
              type: i,
              value: datas.product_format[i]
            })
          }
        }
        this.getAjaxitem()
        this.getSamerecommend()
      }).catch(err => {
        console.log(err)
      })
    },
    getAjaxitem() {
      // https://haohuo.snssdk.com/product/ajaxitem?id=3341476926773709645&origin_type=10000&b_type_new=0
      const params = {
        id: this.id,
        origin_type: 10000,
        b_type_new: 0
      }
      ajaxitem(params).then(response => {
        console.log(response)
        this.companyData = response.data.data
        this.getGetstock()
      }).catch(err => {
        console.log(err)
      })
    },
    getGetstock() {
      // https://haohuo.snssdk.com/product/getstock?id=3341476926773709645&add_cart=0&origin_type=10000&b_type_new=0
      const params = {
        id: this.id,
        add_cart: 0,
        origin_type: 10000,
        b_type_new: 0
      }
      getstock(params).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    },
    getSamerecommend() {
      // https://haohuo.snssdk.com/shop/samerecommend?shop_id=hqUCIe&product_id=3341476926773709645&b_type_new=0
      const params = {
        shop_id: this.productData.shop_id,
        product_id: this.id,
        b_type_new: 0
      }
      samerecommend(params).then(response => {
        console.log(response)
        if (response.data.data) {
          this.sameItems = response.data.data.slice(0, 9)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    formatPrice(num) {
      const price = (num / 100).toFixed(2)
      return price
    },
    toggleParams(e) {
      if (this.parameter.hide === 'hide') {
        this.parameter.hide = ''
      } else {
        this.parameter.hide = 'hide'
      }
    },
    showParamsHandle(e) {
      if (e === 'params') {
        this.showParams.type = e
        this.showParams.data = this.parameter.list
        this.showParams.show = true
      } else if (e === 'servicedes') {
        this.showParams.type = e
        this.showParams.data = []
        this.showParams.show = true
      }
    },
    hideMaskHandle() {
      this.showParams.show = false
    },
    ...mapActions([
      'addShopList'
    ])
  }
}
</script>
<style lang="scss">
  p img{
    max-width: 100%;
  }
</style>
<style lang="scss" scoped>
.detail_wrapper{
  width: 100%;
  padding-bottom: 1.2rem;
}
.carousel{
  width: 10rem;
  height: 10rem;
  background-color: #f4f5f6;
}
.bb-grey {
  border-bottom: .187rem solid #f4f5f6
}
.bt-grey {
  border-top: .187rem solid #f4f5f6
}
.goods-info .title.android {
    font-weight: 400;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.tab-container>div {
  width: 10rem;
  top: 0;
}
.desc {
  position: relative;
  left: 0;
  img {
    max-width: 10rem;
    width: 10rem;
    display: block;
  }
}
.hide {
  display: none;
}
.arrow {
  display: inline-block;
  width: .2rem;
  height: .2rem;
  border-top: 1px solid;
  border-right: 1px solid;
  color: #ccc;
  position: absolute;
  top: .13rem;
  right: .48rem;
}
.arrow-down {
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}
.arrow-up {
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.goods-info {
  position: relative;
  .title {
    color: #222;
    margin: .187rem .267rem 0;
    min-height: .533333rem;
    font-size: .453333rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 700;
    .android {
      font-weight: 400;
    }
  }
  .price-area {
    margin: .1rem .267rem .133rem;
    position: relative;
    height: 1.093333rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    .price-container {
      min-width: 6.8rem;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    .amount {
      color: #f85959;
      display: inline-block;
      font-size: .533333rem;
      .number {
        font-family: DINAlternate-Bold;
        font-weight: 700;
        font-size: .96rem;
      }
    }
    .discount {
      display: inline-block;
      color: #999;
      margin-left: px2rem750(19.2px);
      font-size: .373333rem;
    }
  }
  .money {
    text-decoration: line-through;
  }
}
.extra-details {
  display: flex;
  width: 9.3066rem;
  -webkit-text-size-adjust: none;
  color: #999;
  font-size: .32rem;
  margin: .3467rem .3467rem .24rem;
  .extra-item {
    flex: 1;
    &.middle {
      text-align: center;
    }
    &.right {
      text-align: right;
    }
  }
}
.hair-line {
    position: relative;
    &.bottom:after, &.top:before {
        position: absolute;
        height: 1px;
        left: 0;
        right: 0;
        z-index: 1;
        content: "";
        background: #e8e8e8;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }
}
@media (-webkit-min-device-pixel-ratio: 3) {
  .hair-line.bottom:after,.hair-line.top:before {
      transform: scaleY(.33333)
  }
}
@media (-webkit-min-device-pixel-ratio: 2){
  .hair-line.bottom:after, .hair-line.top:before {
    transform: scaleY(.5);  
  }
}
.hair-line.top:before {
  top: 0;
}

.hair-line.all:after {
    position: absolute;
    content: "";
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    border: 1px solid #ddd;
    -ms-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform: scale(.5);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    pointer-events: none
}

@media (-webkit-min-device-pixel-ratio: 3) {
  .hair-line.all:after {
    -webkit-transform:scale(.33333);
    -ms-transform: scale(.33333);
    transform: scale(.33333)
  }
}

@media (-webkit-min-device-pixel-ratio: 2) {
  .hair-line.all:after {
    -webkit-transform:scale(.5);
    -ms-transform: scale(.5);
    transform: scale(.5)
  }
}
.sell-point {
  display: flex;
  background: #fff;
  font-size: .32rem;
  box-sizing: border-box;
  padding-left: .37333rem;
  flex-wrap: wrap;
  padding-right: .37333rem;
  .service {
    margin-top: .24rem;
    font-size: .4rem;
    line-height: .50667rem;
    color: #222;
    letter-spacing: 0;
    margin-right: .24rem;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .wrap {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-top: .08rem;
    padding-bottom: .32rem;
  }
  .item {
    margin-top: .21333rem;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    text-align: center;
    color: #999;
    line-height: .37333rem;
    margin-right: .45333rem;
    font-size: .32rem;
    &>i {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAVFBMVEUAAAD5Wlr6Wlr5WVn5Wlr/c3P5WVn5Wlr/bW34Wlr5Wlr/YWH6XFz5Wlr5Wlr5WVn5Wlr5WVn6Wlr/W1v/Wlr5WVn5W1v5Wlr5XFz7XFz7WVn4WVmXJvbnAAAAG3RSTlMAtWX5TQXVbQqYiRcwf+/Lx6aRHBGjeVJWPTxN7R5+AAABLUlEQVQ4y52U25aDIAxFC+IFZKytjp1p//8/mxBpmoJlKS8qbJNzAuR0cHTe6EUb332Deq2qB41K6X6Dmt0KRdTNOawdwmqjrLOqCe9Dm+q64MLYTuv31I44cek+lJ0xlBFzBoOeexENsWv9kaO+IvgeEZJWOqNZV5D6zQL8x5gAYeVlZh4g6UaxIPUQy+PAQr3B1WDGrV5BhHAqXYP0PmoYs6H+/vExRu2KpQoM5j2ZVKF2kHbKYsRNkBhr6MHFBvYTXhviDcYN43ZLMdJlyIaNzn4z2MmSkQUKFDkEGePyLhwPfySQMY7H+hhkjPWxXwYlRn65fgwKjOsn98NKLO5Hur9WYLy/yXm5+/S87Dp/5fO8536U79v++1vuB+X+cqBflftfuZ+W+/Ox8QTx0CQNT9caegAAAABJRU5ErkJggg==) 50% no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    display: inline-block;
    width: .29333rem;
    height: .29333rem;
    vertical-align: bottom;
    margin-right: .08rem;
    padding: 1px;
   }
  }
  .arrow-right {
    display: block;
    width: .2rem;
    height: .2rem;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    transform: rotate(45deg);
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }
}
.form21 .sku, .hair-line {
  position: relative;
}
.product_params {
  padding: 0 .373rem;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: .373333rem;
  box-sizing: border-box;
  height: 1.31rem;
  .product-format {
    height: 1.31rem;
    width: 100%;
    position: relative;
    .word {
      color: #222;
      display: inline-block;
      font-size: .4rem;
      width: .8rem;
      white-space: nowrap;
      line-height: 1.31rem;
      height: 1.31rem;
    }
    ._right {
      display: inline-block;
      color: #999;
      position: absolute;
      top: .4rem;
      right: 0;
    }
  }
}
.f14 {
  font-size: .37333rem;
}
.left-arrow, .right-arrow {
  display: inline-block;
  width: .2rem;
  height: .2rem;
  border-top: 1px solid;
  border-right: 1px solid;
}
.right-arrow {
  transform: rotate(45deg);
}

.comment {
  background: #fff;
  .no-comment {
    padding: .293rem 0 .293rem .32rem;
    color: #222;
  }
}
.dsr {
  background: #fff;
  padding: 12px 0 0 6px;
  .top-row {
    margin-bottom: 10px;
    padding: 0 6px;
    overflow: hidden;
    padding-right: 12px;
    .logo {
      float: left;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .right-part {
      overflow: hidden;
      .shop-comm-info {
        width: 68%;
        display: inline-block;
        .shop-name {
          margin-bottom: 3px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #222;
          font-size: .4rem;
          height: 20px;
          line-height: 20px;
        }
        .shop-desc {
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: .34667rem;
          color: #999;
          height: 14px;
          line-height: 14px;
        }
      }
      .btn-box {
        float: right;
        margin-top: 2px;
        .toshop-btn.hair-line {
            display: block;
            text-align: center;
            width: 1.92rem;
            height: .69rem;
            line-height: .69rem;
            color: #f85959;
        }
      }
    }
  }
  .center-row {
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-right: 10px;
    margin-bottom: .35rem;
    .all-goods {
      position: relative;
      text-align: center;
      flex: 3;
      height: 65px;
      .good-count {
        font-size: .53333rem;
        height: 26px;
        line-height: 26px;
        color: #505050;
        margin-top: 4px;
      }
      .shop-info-text1 {
        display: inline-block;
        font-size: .34667rem;
        color: #505050;
        height: 18px;
        line-height: 18px;
      }
      &:after {
          content: "";
          position: absolute;
          transform: scaleX(.5);
          background: #e8e8e8;
          width: 1px;
          top: 0;
          bottom: 0;
          right: 0;
      }
    }
    .fans {
      position: relative;
      text-align: center;
      flex: 3;
      height: 65px;
      .fans-count {
        font-size: .53333rem;
        height: 26px;
        line-height: 26px;
        color: #505050;
        margin-top: 4px;
      }
      &:after {
        content: "";
        position: absolute;
        transform: scaleX(.5);
        background: #e8e8e8;
        width: 1px;
        top: 0;
        bottom: 0;
        right: 0;
      }
    }
    .shop-info-text1 {
      display: inline-block;
      font-size: .34667rem;
      color: #505050;
      height: 18px;
      line-height: 18px;
    }
    .dsr-wrap {
      text-align: center;
      margin: 0;
      padding: 0;
      flex: 4;
      li {
        list-style: none;
        overflow: hidden;
        .shop-info-text2 {
          display: inline-block;
          height: 22px;
          line-height: 22px;
          font-size: .37333rem;
          color: #f85959;
          width: .90667rem;
        }
        .shop-info-text3 {
          display: inline-block;
          color: #f85959;
          font-size: .48rem;
          line-height: 26px;
          background: #fff0f0;
          width: 10px;
          height: 10px;
          padding: 2px;
          text-align: center;
          position: relative;
          top: 3px;
          &:after {
            content: "\9AD8";
            border: 1px solid #ffcbcb;
            -webkit-border-radius: 2px;
            border-radius: 2px;
        }
      }
      }
    }
  }
  .bottom-row {
    overflow: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    .goods-lists {
      white-space: nowrap;
      font-size: 0;
      padding-left: .16rem;
      height: 2.81rem;
      .goods-box {
        vertical-align: bottom;
        display: inline-block;
        width: 2.4rem;
        margin-right: .16rem;
        position: relative;
        .goods-img {
          display: block;
          width: 2.4rem;
          height: 2.4rem;
        }
        .goods-price {
          color: #fff;
          font-size: .37333rem;
          height: .53rem;
          line-height: .53rem;
          height: .53333rem;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,.61);
          padding-left: .13333rem;
        }
      }
    }
  }
}
.switch-tab-container {
  padding-top: 1.333rem;
  position: relative;
  overflow: hidden;
  padding-top: 0;
}
.desc {
  width: 10rem;
  background: #fcfcfc;
  .desc-tit {
    background: #f4f5f6;
    width: 10rem;
    height: 1.17rem;
    text-align: center;
    span{
      display: block;
      font-size: .37rem;
      color: #999;
      position: relative;
      height: 1.17rem;
      line-height: 1.17rem;
      &:after, &:before {
        content: "";
        position: absolute;
        top: 52%;
        background: #999;
        width: .37rem;
        height: 1px;
      }
      &:before {
        left: 36%;
      }
      &:after {
        right: 36%;
      }
    }
    
  }
  .desc-params-info-wrap {
    background: #fff;
    padding: .32rem .4rem;
    .params-item {
      width: 9.2rem;
      height: .85rem;
      line-height: .85rem;
      font-size: .32rem;
      color: #222;
      .item-key {
        background: #f4f5f6;
        width: 2.4rem;
        float: left;
        text-align: center;
      }
      .item-value {
        width: 6.8rem;
        background: #fff;
        float: left;
        text-align: center;
      }
    }
    .params-option {
      height: .85rem;
      line-height: .85rem;
      font-size: .32rem;
      color: #999;
      text-align: center;
       .open {
        position: relative;
        .arrow {
          top: 1px;
          left: -.4rem;
        }
      }
      .close {
        position: relative;
        .arrow {
          top: .13rem;
          left: -.4rem;
        }
      }
    }
  }
}
.desc .desc-params-info-wrap .desc-params-info.hair-line.all:after {
  border-bottom: none;
}
.bottom-bar {
  width: 10rem;
  height: 1.333rem;
  line-height: 1.333rem;
  display: flex;
  background: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  box-shadow: 0 2px 7px 0 hsla(0,0%,75%,.5);
  z-index: 666;
  margin: 0 auto;
  .btn-container {
    display: flex;
    flex: 1;
    background: #fff;
    font-size: .37333rem;
    a {
      flex: 1;
      color: #505050;
      line-height: .693rem;
      font-size: .26667rem;
    }
    .customer-service-icon, .favorite-icon, .shop-cart-icon, .shop-link-icon {
      display: block;
      width: .48rem;
      height: .48rem;
      margin: .16rem auto 0;
      vertical-align: middle;
    }
    .shop-link-icon {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAhFBMVEUAAABRUVFTU1NQUFBRUVFYWFhRUVFRUVFQUFBRUVFjY2NQUFBQUFBQUFBQUFBQUFBRUVFRUVFVVVVQUFBQUFBRUVFRUVFQUFBRUVFQUFBRUVFTU1NQUFBUVFRRUVFRUVFRUVFRUVFRUVFRUVFQUFBRUVFTU1NXV1dQUFBRUVFTU1NQUFBP3sA9AAAAK3RSTlMAq015yQuXnvcTA7Dhwde6j2En8ejHM+zcbls+NiGih4F1aNHMVC0Pz0gbjencBAAAAXdJREFUSMftlNlu6jAQQIeCqQnORhKWsBda2p7//7+ra9k1UaQk7VtVztNoNMfKxJ6R30V0TjQdaJMpaTOll0Pb+gCSSQcXYNv6xARepJMNvEftXNzX/LV18qxAL6SHHaxujcwzZNLLFKZyxxJK1a/NVvAmgQpqGcBL4w/kUIwHoeHVW6rkGxjfzYlvMXbaOzp/GkhecHUazGUwc/iJNvpr2tYcfagmlfLx0Ww7tWe0D5/gw0+a5tCpjcAPcB2en4J5+95K1j6ZhMk4winMVaigdFEKbrL3wNllr1C5cMx9RRrmJo5sDymg9365+NWx0NxX5OKIIdlF0bICYFUr+cywZJ+i6gKAyf+KxM1pOE5roNjF1gQ4n7/CeFf4Cr1oPGtLspTbCIveiGw0ltFNlmtc3FxcqVmnubJXfriY6mQ73J8qcznYq1Z5ujYxTJuaNfqYPbSH9tACGSyGaG9wlEAN5WgAJbxKIJowBLfAAiozDMBkSn4P/wAI2mW4OBmWCAAAAABJRU5ErkJggg==) 50% no-repeat;
      background-size: contain;
    }
    .customer-service-icon.with-phone {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAjVBMVEUAAABQUFBRUVFSUlJTU1NUVFRRUVFRUVFQUFBpaWlRUVFRUVFZWVlRUVFQUFBQUFBQUFBVVVVQUFBQUFBRUVFSUlJRUVFQUFBRUVFeXl5QUFBRUVFSUlJTU1NRUVFRUVFRUVFQUFBRUVFSUlJTU1NWVlZQUFBRUVFQUFBRUVFRUVFWVlZRUVFQUFBQUFAdhexDAAAALnRSTlMAoY0xQy387PgF0rYPcPG5fhTYzYJLppxfDOBYUSTlxrKVhzspGty+rnpnHcC/pOndtgAAAfdJREFUSMftltmSojAYRiNKEkTQRsAVbde22+nz/o83bOO4YDJyN1V9Lqwi1Mn/J5EPRDOHaec7Uno1HjrJTPwbsyDiCvlrIey8bUPuOX55FitRFKxHy132tu8tnDkF472xv0k1+eFqzI2L8jp4bg3WgAq8+743Gtg8XdYYeB803NlHwKTZ8gpr+6SPIeA03toAX+IJXgdYNtxYVrWeemsIz4+bqPJ1GQ90Dv7D6CeogTDRA3YNxQJhxofh3VAAc8+iuRK6t0Nra7Gcd4hv1yvhYNUWML7Z3QDWwspAg3u56n5IcvpLs+Q5ihzlzKqVhtRMjdqQino7T6B8349AmfYyKR503y86K9tShOU5f4Br0LZ1N9P6Pw39ctyBnkHr1IfmQudHa9Q08zbaCt1G68OghTaEXQttBHELbQfjFpqnwbVrk1rrllo1T2rXRrD1iocVRqL2ZWbVuhKk1sVv95JI32XA5temchWX9Mp0Ufhwcixv2rQfRf00uZ5IGho05bRePoR+PPncmxOwD/I2uLIqqarGzS/g89VERypScz0fCEeXRE8hCnqxBsvXTKAB6U+7syq31VsV+0NhJkslJatorv58GYQoYcPdKGr+aithx0tifx5KJIYmDaRwnO5GGpJXtPOKipN4iWxMjpx44kWSeBPsxX/Lb8jIVmGR9LiTAAAAAElFTkSuQmCC) 50% no-repeat;
      background-size: contain;
    }
    .shop-cart-icon {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAkFBMVEUAAAB+fn5RUVFSUlJbW1tVVVVQUFBQUFBRUVFTU1NUVFRWVlZcXFxRUVFRUVFRUVFQUFBRUVFQUFBRUVFUVFRRUVFQUFBRUVFRUVFSUlJRUVFQUFBRUVFQUFBRUVFRUVFQUFBQUFBRUVFRUVFVVVVRUVFQUFBQUFBRUVFRUVFQUFBRUVFQUFBRUVFmZmZQUFA2mmmHAAAAL3RSTlMAA0k2Dx7320ArJRUJ049Q4YFWRRm5qXx0OzHz7M3DlW69mYkGyLGehWHnoV1pBfNFOOIAAAHQSURBVEjHxZbZkqIwGEaRfZVFRFEUd23tnvP+bzfpKScqdEngps8VVOWQ7fsTtKG4VycboG2BadBb+0CQ+L29OAGisLcX3oC51pvRFhytPxMg76+ZQDlglID+z093u7qux4L9fn+5pGk6E8wFG8HXV+b9pNV04mRtbYcCt1FTC+rTaSrYbrfr9fp4PK4EkcARJEly5Zvxi6aCmVWAoaxJfBsKdU1ygWqApgMDtInUDsBEVUvheq8BwFXVjnCTmVTWAuCzf5QzIHh8wVDUzrC6P+bAQlFLYH9/tNQ1D3CfNE9Nm8Py8D9n6toUTs89+0pWaMPmWbOUkyU7WChrY0g0qSkfeBHs5Ishd76DHIjlWwmYiveM/WjoqmoFrLUXLVSwRhXMXpf1j4JmvEZeB0YK2gyqp3alYkrWUDQqdtNtWbKwH59Zep0LchKtwmbU7NT1fcuy8jwPgsA0zTAMDyM5lYMxBepm1t5hf4MgMhsD2KOAY7X3pFh2SNX88OOUc9/zvMViYRhGWZau604muq7HgizL9GZPwzHORdxxre2Kz5ZlAx9vd3oJzFonrSDquAuhapdRx+/TGMGyEfcYQdpVMpxbxR456fvKiVfJONR+h7+cH16IQnJuKAAAAABJRU5ErkJggg==) 50% no-repeat;
      -webkit-background-size: contain;
      background-size: contain;
      position: relative;
      &>i {
        position: absolute;
        width: .37333rem;
        height: .37333rem;
        top: -.05333rem;
        right: -.18667rem;
        border-radius: 50%;
        background: #f85959;
        color: #fff;
        z-index: 1;
        font-size: .21333rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: normal
      }
    }
  }
  .add-shop-cart-btn{
    width: 2.82667rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff9c7c;
    color: #fff;
    font-size: .4rem;
  }
  .buy-submit-btn {
    width: 2.82667rem;
    background: #ff5c5c;
    color: #fff;
    font-size: .4rem;
    position: relative;
    overflow: hidden;
  }
}
</style>