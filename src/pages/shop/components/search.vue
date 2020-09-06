<template>
  <div ref="scrollwrap" class="scroll_wrapper">
    <goback :gotitle="'搜索'" />
    <!-- search input -->
    <searchinput :inputval.sync="ajaxquerys.query" :fixedsearch="fixedinput" @handleSuggestion="getSuggestion" @handleQueryData="getQueryData" @clearInputText="clearSearchData"/>
    <!--  -->
    <div class="search-bottom-area">
      <!--  -->
      <div class="search-tag-area" v-if="!ajaxquerys.query && !showsearchlist">
        <!-- 历史 -->
        <div class="search-tag-area-section">
          <div class="search-tag-title">
            <div class="search-tag-title-start">历史记录</div>
            <div class="search-tag-title-end" @click="clearHistory">
              <img src="https://tms3.bytecdn.cn/foreground/static/img/search/delete@3x.png" class="search-tag-title-icon" />
            </div>
          </div>
          <!--  -->
          <div ref="searchtag" @click="getSearchtag" class="search-tags">
            <span class="search-tag" v-for="(item, index) in history" :key="index">{{ item }}</span>
          </div>
        </div>
        <!-- 热搜 -->
        <div class="search-tag-area-section">
          <div class="search-tag-title"><div class="search-tag-title-start">热门搜索</div></div>
          <div ref="hottag" @click="getHottag" class="search-tags" v-if="hotsList.length > 0">
            <span class="search-tag" v-for="(item, index) in hotsList" :key="index">{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="search-list" v-else-if="ajaxquerys.query && showsearchlist" >
        <goodsfilter :fixheight="fixedheight" :eltop="scrolleltop" />
        <goodlist :goodsdata="searchData" />
        <div class="_loading">{{ moretext }}</div>
      </div>
      <!-- 搜索 -->
      <div class="search-suggestions" v-else @click="clickSugHandle">
        <p class="search-suggestions-item" v-for="(item, index) in searchugList" :key="index">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import goback from '@/components/goback'
import searchinput from './searchinput'
import { search, gethot, searchsug } from '@/api/shop.js'
// import { debounce } from '@/utils/commont.js'
import goodlist from './goodlist'
import goodsfilter from './goodsfilter'
import { loadmore } from '@/mixins/loadMore.js'

export default {
  name: 'ProductSearch',
  components: {
    goback,
    searchinput,
    goodlist,
    goodsfilter
  },
  mixins: [loadmore],
  data() {
    return {
      suggestions: [],
      hotsList: [],
      history: [],
      searchugList: [],
      searchData: [],
      histroyKey: 'SEARCH_HISTORY',
      inputVal: '',
      fixedinput: true,
      showsearchlist: false,
      scrollEl: null,
      fixedheight: 48,
      ajaxquerys: {
        query: '',
        type: 0, // 0,1,2,3,4
        sort: 0, // 0,1
        page: 0, // 页码
        size: 10 // 数量
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.scrollEl = this.$refs.scrollwrap
      this.getHotsData()
      this.getHistory()
    })
  },
  beforeDestory() {},
  destroyed() {},
  methods: {
    getQueryData() {
      this.showsearchlist = true
      if (!this.ajaxquerys.query) {
        this.$createToast({
          type: 'warn',
          time: 1000,
          txt: '请输入你要搜索的商品'
        }).show()
        return
      }
      this.isload = true
      this.moretext = this.loadMoreText.loadingText
      this.fixedinput = false
      this.setHistory(this.ajaxquerys.query)
      console.log(this.ajaxquerys)
      search(this.ajaxquerys)
        .then(response => {
          console.log(response)
          this.searchData = this.searchData.concat(response.data.data.list)
          console.log(this.searchData)
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
      if (this.showsearchlist) {
        this.getQueryData()
      }
    },
    getSuggestion(e) {
      console.log(this.ajaxquerys)
      if (!e.inputText || this.showsearchlist) {
        return
      }
      searchsug({ query: e.inputText }).then(response => {
        console.log(response)
        if (response.data.data) {
          this.searchugList = response.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    clearSearchData() {
//       this.inputVal = ''
//       this.$refs.input.focus()
      this.ajaxquerys.query = ''
      this.ajaxquerys.type = 0 // 0,1,2,3,4
      this.ajaxquerys.sort = 0 // 0,1
      this.ajaxquerys.page = 0 // 页码
      this.ajaxquerys.size = 10 // 数量
      this.searchData = []
      this.showsearchlist = false
      this.fixedinput = true
    },
    getHotsData() {
      gethot()
        .then(response => {
          console.log(response)
          if (response.data.data) {
            this.hotsList = response.data.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getSearchtag(e) {
      console.log(e.target)
      const target = e.target
      if (target.nodeName.toLowerCase() === 'span') {
        this.ajaxquerys.query = target.innerText
        this.getQueryData()
      }
    },
    getHottag(e) {
      console.log(e.target)
      const target = e.target
      if (target.nodeName.toLowerCase() === 'span') {
        this.ajaxquerys.query = target.innerText
        this.getQueryData()
      }
    },
    clickSugHandle(e) {
      console.log(e.target)
      const target = e.target
      if (target.nodeName.toLowerCase() === 'p') {
        this.ajaxquerys.query = target.innerText
        this.getQueryData()
      }
    },
    getHistory() {
      // const aaa = ['参数都是', '法国德国', '要让他']
      // localStorage.setItem(this.histroyKey, JSON.stringify(aaa))
      const list = localStorage.getItem(this.histroyKey)
      if (list && list !== '[]') {
        this.history = JSON.parse(list)
      } else {
        this.history = []
      }
      // console.log(this.history)
    },
    setHistory(val) {
      const list = localStorage.getItem(this.histroyKey)
      if (list && list !== '[]') {
        const history = JSON.parse(list)
        console.log(history.indexOf(val))
        if (history.indexOf(val) === -1) {
          history.unshift(val)
          localStorage.setItem(this.histroyKey, JSON.stringify(history))
        }
      } else {
        localStorage.setItem(this.histroyKey, JSON.stringify([val]))
      }
      this.getHistory()
    },
    clearHistory() {
      localStorage.removeItem(this.histroyKey)
      this.getHistory()
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll_wrapper{
  height: 100%;
  overflow-y: scroll;
}
.search-input-area {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.search-input-area {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 15px;
  position: relative;
  height: 48px;
  width: 100%;
  background-color: #fff;
}
.search-input-area-fixed {
  position: fixed;
  z-index: 10;
}
.search-input-area-with-line:before {
  content: ' ';
  display: block;
  position: absolute;
  transform: scale(0.5);
  width: 200%;
  height: 1px;
  background-color: #e8e8e8;
  transform-origin: 0 0;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.search-input-container {
  position: relative;
  box-sizing: border-box;
  height: 28px;
  background-color: #f4f5f6;
  flex: 1;
  color: #505050;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  &:before {
    content: ' ';
    display: block;
    border: 1px solid #e8e8e8;
    position: absolute;
    transform: scale(0.5);
    width: 200%;
    height: 200%;
    border-radius: 10px;
    transform-origin: 0 0;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
.search-input-cancel-icon-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 7px;
  padding-left: 7px;
  z-index: 2;
  margin-right: 1px;
  height: 26px;
}
.search-input-cancel-icon {
  width: 14px;
  height: 14px;
}
.search-input-icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 3;
  width: 24px;
  height: 24px;
  margin-right: 2px;
  margin-left: 2px;
}
.search-input-icon-icon {
  width: 14px;
  height: 14px;
  opacity: 0.6;
}
.search-input-input::placeholder {
  color: #cacaca;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.search-input-input {
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  z-index: 2;
  appearance: none;
  border: 0;
  box-sizing: border-box;
  height: 26px;
  background-color: transparent;
  -ms-flex: 1;
  color: #505050;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 0;
  line-height: normal;
  flex: 1;
  position: relative;
  padding-left: 0;
  padding-right: 0;
  outline: none;
}
.search-input-cancel {
  font-size: 14px;
  color: #222;
  letter-spacing: -0.15px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  letter-spacing: 0;
  text-align: right;
  line-height: 17px;
  height: 26px;
}
.search-fixed-margin {
  height: 48px;
  background-color: transparent;
}
.search-bottom-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
}
.search-tag-area {
  padding: 0.65333rem 0.48rem;
}
.search-tag-area-section {
  margin-bottom: 0.8rem;
}
.search-tag-title {
  font-size: 0.4rem;
  color: #505050;
  letter-spacing: -0.00427rem;
  margin-bottom: 0.32rem;
  justify-content: space-between;
}
.search-tag-title,
.search-tag-title-end {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search-tag-title-end {
  justify-content: center;
  position: relative;
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    background-color: transparent;
    left: -0.18667rem;
    right: -0.18667rem;
    bottom: -0.18667rem;
    top: -0.18667rem;
  }
}
.search-tag-title-icon {
  width: 0.34667rem;
  height: 0.4rem;
}
.search-tags {
  justify-content: flex-start;
  flex-wrap: wrap;
}
.search-tag,
.search-tags {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search-tag {
  background: #f4f5f6;
  border-radius: 0.10667rem;
  height: 0.8rem;
  padding: 0.26667rem;
  min-width: 1.84rem;
  justify-content: center;
  box-sizing: border-box;
  margin-right: 0.26667rem;
  margin-bottom: 0.26667rem;
  font-size: 0.34667rem;
  color: #505050;
  letter-spacing: -0.00373rem;
}
.search-suggestions-item {
  font-size: 0.37333rem;
  color: #505050;
  letter-spacing: -0.004rem;
  height: 1.17333rem;
  padding: 0.29333rem 0.4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    transform: scale(0.5);
    width: 200%;
    height: 1px;
    background-color: #e8e8e8;
    transform-origin: 0 0;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    z-index: 1;
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
</style>
