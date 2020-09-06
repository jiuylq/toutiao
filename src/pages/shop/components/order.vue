<template>
  <div class="orders_wrapper">
    <goback :gotitle="goTitle" />
    <div class="order_content">
      <cube-tab-bar v-model="selectedLabel" show-slider>
        <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label"></cube-tab>
      </cube-tab-bar>
      <div class="tab-slide-container">
        <cube-tab-panels v-model="selectedLabel">
          <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
            <ul>
              <li class="tab-panel-li">
                <div class="loading">暂无数据</div>
              </li>
            </ul>
          </cube-tab-panel>
        </cube-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import goback from '@/components/goback'

export default{
  name: 'Order',
  components: {
    goback
  },
  data() {
    return {
      goTitle: '我的订单',
      selectedLabel: '全部',
      tabs: [{
        label: '全部'
      }, {
        label: '待发货'
      }, {
        label: '待收货'
      }, {
        label: '评价'
      }]
    }
  },
  watch: {
    selectedLabel (newV) {
      console.log(newV)
    }
  },
  methods: {
    clickHandler (label) {
      console.log('tab was clicked', label)
    },
    changeHandler (label) {
      console.log('value has changed, now is', label)
    }
  }
}
</script>

<style lang="scss">
.order_content{
  position: relative;
  width: 100%;
  height: 100%;
  .cube-tab-bar{
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
  }
}
.tab-slide-container{
  position: fixed;
  top: 81px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
}
.cube-tab-bar{
  background-color: #fff;
}
.cube-tab-bar{
  text-align: center;
  background-color: white;
  .cube-tab{
    line-height: 36px;
    padding: 0;
    font-size: .4rem;
    div {
      position: relative;
      display: inline-block;
    }
    &.cube-tab_active>div:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      z-index: 1;
      height: 2px;
      background: #f85959;
    }
  }
}
.cube-tab-panels{
  background-color: #fff;
}
.tab-panel-li{
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
}
.cube-tab-bar-slider{
  display: none;
}
.loading{
  text-align: center;
  background: transparent;
  color: #999;
  height: 40px;
  line-height: 40px;
  font-size: .32rem;
}
</style>

<style lang="scss" scoped>
.orders_wrapper{
  width: 100%;
  height: 100%;
}
</style>