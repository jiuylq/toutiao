<template>
  <!-- info-box -->
  <div class="info-box">
    <div class="info-title">服务说明</div>
    <div class="info-content notouch">
      <div class="info-item">
        <div class="icon pay-for"></div>
        <div class="info-text">
          <div class="info-text-title">假一赔三</div>
          <div class="info-text-desc">为了保障消费者权益，平台商品支持假一赔三。</div>
        </div>
      </div>
      <div class="info-item">
        <div class="icon seven-days"></div>
        <div class="info-text">
          <div class="info-text-title">7天退换</div>
          <div class="info-text-desc">消费者在满足7天无理由退换货申请条件的前提下,可以提出“7天无理由退换货”的申请。</div>
        </div>
      </div>
      <div class="info-item">
        <div class="icon service-provide"></div>
        <div class="info-text">
          <div class="info-text-title">消费者保障服务</div>
          <div class="info-text-desc">该卖家已缴纳保证金，如有商品质量问题，描述不符等，您有权申请退款或退货。</div>
        </div>
      </div>
      <div class="info-item">
        <div class="icon gift"></div>
        <div class="info-text">
          <div class="info-text-title">评价抽10元大礼包</div>
          <div class="info-text-desc">已完成的订单评价后支持抽取10元大礼包，原创且有价值的评价更容易获得大奖。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default{
  name: '',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}

.notouch{
  // touch-action: none;
}
.info-box {
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 10rem;
  margin: 0 auto;
  padding-top: .53333rem;
  padding-bottom: 1.92rem;
  border-radius: 15px 15px 0 0;
  z-index: 2;
  .info-title {
    font-size: .48rem;
    color: #f85959;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: .53333rem;
  }
  .info-content {
    height: 8rem;
    overflow: scroll;
    padding: 0 .8rem;
    .info-item {
      display: flex;
      .icon {
        width: .53333rem;
        height: .53333rem;
        flex-grow: 0;
        flex-shrink: 0;
        background-size: 100% 100%;
        background-position: 50%;
      }
      .pay-for {
        background-image: url(https://tms3.pstatp.com/foreground/static/img/product/compensate_icon@3x.png);
      }
      .seven-days {
        background-image: url(https://tms3.pstatp.com/foreground/static/img/product/7days_icon@3x.png);
      }
      .service-provide{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAgVBMVEUAAAD5Wlr5WVn4WVn5Wlr6W1v7XFz/XFz/bW35Wlr5WVn5Wlr5Wlr6Wlr5Wlr5W1v/gID5Wlr/XFz5WVn5Wlr5WVn5WVn5Wlr5Wlr/YmL5Wlr4Wlr7W1v/Zmb5Wlr5Wlr6Wlr/X1/5WVn5WVn5Wlr5Wlr5WVn6WVn7W1v5Wlr4WVnQipclAAAAKnRSTlMA6vjlooIyHAnw3niHX5RaBHsh89fUz8RXDa9xQwe4smwXv7qpTaaLP8ZYoCIyAAAClElEQVRIx7VX6ZqqMAwVBGTfRERBZBR1bt//AW8KStqGZebjm/xRaA45Wdtu/kZ2VdB4XhNUu18CLa/es0H2tWf9FPmVZIxIlnz9hG2o9+ra0Qh9PzSOWv+sh0v8bbODOkYgaO4Cw+ngpj3rq8uV8ogo2VHOV9wZ3wudK0Tji5HLjRdTWJMTLi9Ty5eSkzfH3T3D0iGd8yo9gMp5zHGOvZ7m43m6cvQ4Zz9eSmTsjzEvOHaEzvamvOHoQsmRDpxH7B7ZQbUNzHVLCpYLsUJ/JTDxG6Lm2rLDTkq0irB1Nff5quTspY7kdgqkSwX6qHVsq1biWQJxrN4QiMhft25v3OcLT4HYBZwMhx4EDbkmva6Qw0dqb05pYWjc+kOoVPjop0MT6AWpDg3ewFGM8Sw5PEGNHJ8yxXALmq9YDt65R6Pp7O0fhFoMfQKkkKPoyfDWhoBbn9eGoFWpJYTp3A9RA8e87s+dsUCoIPRHkVYwEjB27/7AnORZw9d5PD4YP1xBdkDj/asJKlB835txaQTTGljsfTwKxQZFPtnNe+bEQ9GzqudpSKVXUhiGqcK/QU8mxPUr+kUF7JhY0U2fKV+sHf0yPZmRpA+5IuAtY9tpYawWwIQ2W5BcoE0CpiniOPLzTQiYnCoqCV3DVJEiWQZjkZDyJN2gjF6lPDc10F8E04zXpCWXwKQlcRgsgukwwDFExYe2RZHGEB2AFFzjAxmAZPQugHH00qGPYn3z5ReClaGPWRvZbjLmdVFtCRa3m8mN7sz+wTR0+wamG938FltAGQQ4GsgWO7+5PxkIlg/Z3GePFXGT6ZmHHyTHihUHmhVHqRWHuBXHx9UH1/VH5vWH9fXXhPUXFLwa3cWr0d2zVlzK/kL+A+PhbRdVlKvkAAAAAElFTkSuQmCC);
      }
      .gift {
        background-image: url(https://tms3.pstatp.com/foreground/static/img/product/gift_icon@3x.png);
      }
      .info-text {
        flex: 1;
        margin-left: .37333rem;
      }
      .info-text-title{
        font-size: .37333rem;
        color: #505050;
        letter-spacing: 0;
        line-height: .53333rem;
      }
      .info-text-desc {
        font-size: .32rem;
        color: #999;
        letter-spacing: 0;
        line-height: .45333rem;
        margin-top: .05333rem;
      }
      &+.info-item {
          margin-top: .8rem;
      }
    }
  }
}

</style>
