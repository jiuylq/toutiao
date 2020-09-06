<template>
  <!-- top -->
  <div class="filter-top-wrap">
    <div id="filter-top" :class="['hair-line top bottom', eltop > fixheight ? 'filter-fixed' : '']">
      <!--  -->
      <div class="dropdown-item filter-item active">
        <span class="dropdown-text">综合</span>
        <div class="down-list hair-line bottom top hide">
          <div class="list-item">
            <span>综合排序</span>
            <span class="checked"></span>
          </div>
          <div class="list-item">
            <span>商家信誉优先</span>
            <span class="checked"></span>
          </div>
          <div class="list-item ">
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
      <div class="toggle-item filter-item ">
        <span class="toggle-text">价格<span class="up-arrow "></span><span class="down-arrow"></span></span>
      </div>
      <!--  -->
      <div class="single-item filter-item ">
        <span class="single-text">好评</span>
      </div>
      <!--  -->
      <div class="single-item filter-item">
        <span class="single-text">有券</span>
      </div>
    </div>
  </div>
  <!-- top end -->
</template>


<script type="text/javascript">
export default{
  name: '',
  props: {
    eltop: {
      type: Number,
      default: 0
    },
    fixheight: {
      type: Number,
      default: 3
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
  activated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods: {
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
    top: 45px;
    background: #fff;
    z-index: 9;
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

.f12 {
  font-size: .32rem;
}
</style>