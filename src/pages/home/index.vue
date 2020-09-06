<template>
  <div class="article-content">
    <app-header/>
    <div ref="navScrollWrap" class="nav-scroll-list-wrap">
      <cube-scroll ref="navScroll" direction="horizontal">
        <ul ref="navList" class="nav-wrapper">
          <li
            v-for="(item, index) in navTxts"
            :key="index"
            :class="['nav-item', index === slidIndex ? 'active' : '']"
          >
            {{ item.label }}
          </li>
        </ul>
      </cube-scroll>
      <div class="more-wrapper">
        <svg-icon icon-class="gengduo" class-name="gengduo" />
      </div>
    </div>
    <cube-slide
        ref="slide"
        :loop="loop"
        :initial-index="initialIndex"
        :refresh-reset-current="false"
        :auto-play="autoPlay"
        :show-dots="showDots"
        :options="slideOptions"
        @scroll="scroll"
        @change="changePage"
      >
      <cube-slide-item 
        v-for="(item, index) in navTxts"
        :key="index">
        <div class="article-scroll-wrapper">
          <list-scroll
            ref="scrollEl"
            :scroll-data="dataList[item.tag]"
            :tag="item.tag"
            :itemlen="itemlen"
            :pull-downtxt="pullTxt"
            :avtive-tab="avtiveTab"
            @getDownlist="getNewdata"
            @getUplist="getMoredata"
            class="article-list"
          />
        </div>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script type="text/javascript">
import appHeader from '@/components/header'
import listScroll from '@/components/scroll/index'
import { txts, article } from '@/api/article.js'
import { mapMutations, mapActions } from 'vuex'
// import { getTimeStamp } from '@/utils/formatDate.js'

export default {
  name: 'Home',
  props: {},
  components: {
    appHeader,
    listScroll
  },
  data() {
    const josnData = {}
    for (let i = 0; i < txts.length; i++) {
      josnData[txts[i].tag] = [
        {
          loading: '加载中...' // 页面初始化时显示的状态数据，后期看看改用loading显示吧
        }
      ]
    }
    return {
      firstload: true,
      dataList: josnData,
      itemlen: 8,
      navTxts: txts,
      avtiveTab: '',
      navList: null,
      slidIndex: 0,
      loop: false,
      autoPlay: false,
      showDots: false,
      pullTxt: '',
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      tt: String(new Date().getTime()).slice(0, -3)
    }
  },
  computed: {
    initialIndex() {
      let index = 0
      index = this.slidIndex
      this.avtiveTab = this.navTxts[index].tag
      return index
    }
  },
  watch: {
  },
  created() {
    this.getArticle()
  },
  mounted() {
    this.$nextTick(() => {
      this.navList = this.$refs.navList
      this.addNavclass()
      this.firstload = false
    })
  },
  activated() {
    this.sliderefresh()
  },
  methods: {
    sliderefresh() {
      !this.firstload && this.$refs.slide.refresh()
    },
    getArticle(e, t) {
      const num = e || this.slidIndex
      const tag = this.navTxts[num].tag
      // const time = String(new Date().getTime()).slice(0, -3)
      const params = {
        tag: tag,
        ac: 'wap',
        count: 20,
        format: 'json_raw',
        as: 'A1252C39EF448A2',
        cp: '5C9F74287AF26E1',
        max_behot_time: 1553941563,
        _signature: '6rsdHwAAti.j92cKIP7Skuq7HQ',
        i: 1553941563
      }
      return new Promise((resolve, reject) => {
        article(params).then(response => {
          console.log(response.data.data)
          if (response.data.data) {
            this.itemlen = response.data.data.length
            this.pullTxt = '今日头条推荐引擎有' + response.data.data.length + '条更新'
            if (t) {
              this.dataList[tag] = response.data.data.concat(this.dataList[tag])
            } else {
              // this.dataList[tag] = this.dataList[tag].concat(response.data.data)
              if (this.dataList[tag][0].loading) {
                this.dataList[tag] = response.data.data
              } else {
                this.dataList[tag] = this.dataList[tag].concat(response.data.data)
              }
            }
            console.log(this.dataList[tag])
            // this.$set(this.dataList, tag, response.data.data)
          } else {
            // this.dataList[tag][0].loading = '获取数据失败!'
          }
          resolve()
        }).catch(err => {
          const toast = this.$createToast({
            type: 'txt',
            time: 1000,
            txt: '加载失败!'
          })
          toast.show()
          this.$refs.scrollEl[0].scrollForce() // 取巧的方式，实际不能这么用，得改
          // console.log(err)
          reject(err)
        })
      })
    },
    getRefArticle(e, t) {
      const num = e || this.slidIndex
      const tag = this.navTxts[num].tag
      const time = String(new Date().getTime()).slice(0, -3)
      const params = {
        tag: tag,
        ac: 'wap',
        count: '20',
        format: 'json_raw',
        as: 'A195AC093EB7CF5',
        cp: '5C9EA60905D07E1',
        min_behot_time: time,
        _signature: 'htI72AAA2lmPnkHNorS9YobSO8',
        i: time
      }
      return new Promise((resolve, reject) => {
        article(params).then(response => {
          console.log(response.data.data)
          if (response.data.data) {
            this.itemlen = response.data.data.length
            this.pullTxt = '今日头条推荐引擎有' + response.data.data.length + '条更新'
            if (t) {
              this.dataList[tag] = response.data.data.concat(this.dataList[tag])
            } else {
              this.dataList[tag] = this.dataList[tag].concat(response.data.data)
            }
            // this.$set(this.dataList, tag, response.data.data)
          }
          resolve()
        }).catch(err => {
          this.pullTxt = '加载失败'
          this.$refs.scrollEl[0].scrollForce()
          console.log(err)
          reject(err)
        })
      })
    },
    changePage(current) {
      const tag = this.navTxts[current].tag
      this.slideTonav(current)
      this.slidIndex = current
      if (this.dataList[tag][0].loading) {
        this.getArticle(current)
      }
    },
    scroll(pos) {
//       const x = Math.abs(pos.x)
//       const tabItemWidth = this.$refs.tabNav.$el.clientWidth
//       const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
//       const deltaX = x / slideScrollerWidth * tabItemWidth
    },
    getNewdata() {
      setTimeout(() => {
        this.getRefArticle(this.slidIndex, true)
      }, 1000)
//       this.upIsload(true)
//       setTimeout(() => {
//         this.getRefArticle(this.slidIndex, true).then(() => {
//           setTimeout(() => {
//             this.setIsload(false)
//           }, 1000)
//         })
//       }, 1000)
    },
    getMoredata() {
      setTimeout(() => {
        this.getArticle(this.slidIndex)
      }, 1000)
    },
    addNavclass() {
      const _self = this
      this.navList.addEventListener('click', function(e) {
        const target = e.target
        const childrens = this.children
        for (let i = 0; i < childrens.length; i++) {
          childrens[i].classList.remove('active')
        }
        if (target.nodeName.toLowerCase() === 'li') {
          target.classList.add('active')
          for (let i = 0; i < childrens.length; i++) {
            if (childrens[i].classList.contains('active')) {
              _self.slidIndex = i
              break
            }
          }
        }
      }, false)
    },
    slideTonav(index) {
      const childrens = this.navList.children
      for (let i = 0; i < childrens.length; i++) {
        if (i === index) {
          childrens[i].classList.add('active')
          const navScrollWrap = this.$refs.navScrollWrap
          const _navWrapW = navScrollWrap.offsetWidth
          const _navListW = this.navList.clientWidth
          const _itemL = childrens[i].offsetLeft
          const _itemW = childrens[i].offsetWidth
          // console.log(_navWrapW, _navListW, _itemW, _itemL)
          if (_navWrapW < _navListW) {
            // 安全距离
            const itemCL = (_navWrapW - _itemW) / 2
            // console.log(_navListW - _itemL, itemCL)
            if ((_navListW - _itemL - _itemW / 2) > itemCL && _itemL > itemCL) { // 元素在右边
              // 需滚动的距离
              const scrollL = _itemL - itemCL
              this.$refs.navScroll.scrollTo(-scrollL, 0, 300)
            } else if ((_navListW - _itemL - _itemW / 2) <= itemCL) {
              // console.log(-_navListW + _navWrapW - _itemW)
              this.$refs.navScroll.scrollTo(-_navListW + _navWrapW - 30, 0, 300)
            } else if ((_navListW - _itemL - _itemW / 2) > itemCL && _itemL < itemCL) { // 元素在左边
              this.$refs.navScroll.scrollTo(0, 0, 300)
            }
          }
          // this.navList.scrollTo(0, this.secondStop, 300)
        } else {
          childrens[i].classList.remove('active')
        }
      }
    },
    ...mapMutations({
      upIsload: 'UPDATE_ISLOAD'
    }),
    ...mapActions({
      setIsload: 'setIsload'
    })
  }
}
</script>

<style lang="scss">
@import "../../styles/onepx.scss";

.article-content {
  margin: 0 !important;
  height: 100%;
  display: flex;
  flex-flow: column;
  .article-scroll-wrapper {
    flex: 1;
    height: 100%;
    position: relative;
    // background-color: #edf0f4;
    background: #fff;
  }
}
.nav-scroll-list-wrap {
  transform: rotate(0deg); // fix 子元素超出边框圆角部分不隐藏的问题
  position: relative;
  background-color: white;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:after {
    @include onepx(#ececec, 'bottom')
  }
  padding-right: 30px;
  vertical-align: top;
  display: inline-block;
  .cube-scroll-content {
    vertical-align: middle;
    display: inline-block;
    .nav-wrapper {
      // display: inline-block;
      white-space: nowrap;
      // line-height: 30px;
      padding: 0 5px;
      font-size: 17px;
      .nav-item {
        display: inline-block;
        padding: 8px 5px;
        &.active {
          color: #fa7b7a;
        }
      }
    }
  }
  .more-wrapper {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-52%);
    z-index: 1;
    background-color: #fff;
    opacity: 0.95;
    // border: 1px solid red;
    .more {
      display: inline-block;
      height: 1px;
      width: 20px;
      padding: 5px 0;
      border: 1px solid #000;
      border-right: transparent;
      border-left: transparent;
      background-color: #000;
      background-clip: content-box;
      margin: 5px 11px;
      vertical-align: middle;
    }
    .gengduo{
      font-size: 22px;
      margin-right: 4px;
      vertical-align: middle;
    }
  }
}
</style>

<style lang="scss" scoped>
  @media screen and (min-width:425px) {
    .nav-scroll-list-wrap {
      .cube-scroll-content .nav-wrapper {
        font-size:20px;
      }
      .more-wrapper .gengduo {
        font-size: 23px;
      }
    }
  }
</style>
