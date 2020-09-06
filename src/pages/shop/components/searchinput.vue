<template>
  <div>
    <!-- search input -->
    <div :class="['search-input-area', fixedsearch ? fixedClass : '']">
      <form action="#" class="search-input-container">
        <div class="search-input-icon"><img src="https://tms3.bytecdn.cn/foreground/static/img/search/search@3x_toutiao.png" class="search-input-icon-icon" /></div>
        <input ref="input" v-model="inputText" @input="handleInput" @keydown="handleKeyDown" type="input" autocomplete="off" placeholder="搜你想搜的商品" class="search-input-input fastclick-pass" />
        <div class="search-input-cancel-icon-container" v-if="inputText" @click="handleInputCancel('close')"><img src="https://tms3.pstatp.com/foreground/static/img/search/cancel@3x.png" class="search-input-cancel-icon" /></div>
      </form>
      <div class="search-input-cancel" @click="handleInputCancel('cancel')">取消</div>
    </div>
    <!--  -->
    <div class="search-fixed-margin" v-if="fixedsearch"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'searchInput',
  props: {
    inputval: {
      type: String, // [String, Number]
      default: ''
    },
    fixedsearch: {
      type: Boolean,
      default: true
    }
  },
  components: {
  },
  data() {
    return {
      lastTimestamp: 0,
      currentTimeout: null,
      fixedClass: 'search-input-area-fixed search-input-area-with-line',
      showlist: false
    }
  },
  computed: {
    inputText: {
      get() {
        return this.inputval
      },
      set(val) {
        this.$emit('update:inputval', val)
      }
    }
  },
  created() {},
  mounted() {
  },
  beforeDestory() {},
  destroyed() {},
  methods: {
    handleInput(t) {
      var e = t.target.value
      // this.inputText = e
      console.log(this.inputText)
      if (this.showlist) {
        return
      }
      // 节流
      if (Date.now() - this.lastTimestamp > 500) {
        this.currentTimeout && clearTimeout(this.currentTimeout)
        this.fetchSuggestion(e)
      } else {
        this.currentTimeout && clearTimeout(this.currentTimeout)
        this.currentTimeout = setTimeout(this.fetchSuggestion.bind(this, e), 200)
      }
    },
    handleKeyDown(t) {
      if (t.which === 13) {
        // emit getQueryData
        this.showlist = true
        this.$emit('handleQueryData', { inputText: this.inputText })
        t.preventDefault()
      }
    },
    fetchSuggestion(e) {
      this.lastTimestamp = Date.now()
      // emit getSuggestion
      this.$emit('handleSuggestion', { inputText: e })
    },
    clearInput() {
      this.inputText = ''
      this.showlist = false
      this.$refs.input.focus()
    },
    handleInputCancel(t) {
      // emit clearInputText
      this.$emit('clearInputText', { type: t })
      this.clearInput()
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
