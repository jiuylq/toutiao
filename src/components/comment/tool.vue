<template>
  <div class="commnt_tool">
    <div ref="richwrap" class="rich_wrap">
      <div class="rich_box">
        <div ref="richinput" class="rich_input" :contenteditable="contenteditable" :placeholder="placeholder"></div>
      </div>
      <div ref="richsubmit" class="rich_submit">发布</div>
    </div>
    <div ref="comwrap" class="com_wrap">
      <div class="com_tool_item com_bj" data-id="bj">
         <svg-icon icon-class="bianji" class-name="bianji" />
         <span class="com_text">写评论...</span>
         <svg-icon icon-class="xiaolian" class-name="xiaolian" />
      </div>
      <div class="com_right">
        <a href="javascript:;" class="com_tool_item com_pl" data-id="pl">
          <svg-icon icon-class="pinglun" class-name="pinglun" />
        </a>
        <a href="javascript:;" class="com_tool_item com_collect" data-id="cl">
          <svg-icon icon-class="shouc" class-name="shouc" />
        </a>
        <a href="javascript:;" class="com_tool_item com_share" data-id="sh">
          <svg-icon icon-class="share" class-name="share" />
        </a>
      </div>
    </div>
    <share ref="sharebox" />
  </div>
</template>

<script>
import share from './share'
import { getCookie } from '@/utils/commont.js'

export default {
  components: {
    share
  },
  data() {
    return {
      editel: null,
      richinput: null,
      contenteditable: true,
      placeholder: '输入评论...',
      isSubmit: false
    }
  },
  computed: {
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
//       this.editel = this.$refs.comedit
//       this.richinput = this.$refs.richinput
      this.$refs.comwrap.addEventListener('click', this.eventTap, false)
      this.$refs.richinput.addEventListener('input', this.onInput, false)
      this.$refs.richinput.addEventListener('blur', this.onBlur, false)
      this.$refs.richsubmit.addEventListener('click', this.onSubmit, false)
    })
  },
  destroyed() {
//     this.$refs.comedit.removeEventListener('click', this.onFocus, false)
//     this.$refs.richinput.removeEventListener('input', this.onInput, false)
  },
  methods: {
    eventTap(e) {
      // 事件委托
      let target = e.target
      while (target !== this.$refs.comwrap) {
        if (target.classList.contains('com_tool_item')) {
          // console.log('li click~')
          this.clickType(target)
          break
        }
        target = target.parentNode
      }
    },
    clickType(e) {
      switch (e.getAttribute('data-id')) {
        case 'bj':
          this.onFocus()
          break
        case 'pl':
          // const bodyHeight = document.body.offsetHeight
          const eTop = document.querySelector('.comment_box').offsetTop
          const scrollTop = document.querySelector('#app').scrollTop
          if (scrollTop < eTop) {
            document.querySelector('#app').scrollTop = eTop - 45
          }
          break
        case 'cl':
          if (!this.checkToken()) {
            return
          }
          e.classList.toggle('isred')
          if (e.classList.contains('isred')) {
            const toast = this.$createToast({
              type: 'correct',
              time: 1000,
              txt: '收藏成功！'
            })
            toast.show()
          } else {
            const toast = this.$createToast({
              type: 'txt',
              time: 1000,
              txt: '取消收藏！'
            })
            toast.show()
          }
          break
        case 'sh':
          // console.log(this.$refs.sharebox)
          this.$refs.sharebox.onShow()
          break
      }
    },
    onFocus(e) {
      this.$refs.richwrap.classList.add('active')
      this.$refs.comwrap.style.display = 'none'
      this.$refs.richinput.focus()
      // this.moveToEnd(this.$refs.richinput)
    },
    moveToEnd(el) {
      // 将输入框的光标移到文本后面
      console.log(typeof el.selectionStart)
      console.log(typeof el.createTextRange)
      if (typeof el.selectionStart === 'number') {
        el.selectionStart = el.selectionEnd = el.value.length
      } else if (typeof el.createTextRange !== 'undefined') {
        el.focus()
        var range = el.createTextRange()
        range.collapse(false)
        range.select()
      }
    },
    onBlur(e) {
      // 适当延迟执行，用于在submit时间后触发
      setTimeout(() => {
        console.log(e.target)
        const inputText = e.target.innerHTML
        if (this.isSubmit) {
          if (inputText.length) {
            e.target.classList.add('empty')
            setTimeout(() => {
              this.$refs.richwrap.classList.remove('active')
              this.$refs.comwrap.style.display = 'flex'
            }, 1000)
          } else {
            e.target.classList.remove('empty')
          }
        } else {
          this.$refs.richwrap.classList.remove('active')
          this.$refs.comwrap.style.display = 'flex'
        }
        this.isSubmit = false
      }, 50)
    },
    onInput(e) {
      const inputText = e.target.innerHTML
      if (inputText.length) {
        e.target.classList.add('empty')
      } else {
        e.target.classList.remove('empty')
      }
    },
    onKeydown(e) {},
    onSubmit(e) {
      if (!this.checkToken()) {
        return
      }
      this.isSubmit = true
      const richinput = this.$refs.richinput
      if (richinput.innerHTML.length) {
        const richdata = {
          text: richinput.innerHTML,
          time: String(new Date().getTime()).slice(0, -3)
        }
        this.$root.$emit('addcomment', richdata)
        const toast = this.$createToast({
          type: 'correct',
          time: 1000,
          txt: '发表评论成功！',
          onTimeout: (e) => {
            richinput.innerHTML = ''
            richinput.classList.remove('empty')
          }
        })
        toast.show()
      } else {
        const toast = this.$createToast({
          type: 'error',
          time: 1000,
          txt: '请输入评论！'
        })
        toast.show()
      }
    },
    checkToken() {
      if (getCookie('token')) {
        return true
      } else {
        this.showDialog()
        return false
      }
    },
    showDialog() {
      // this.$login()
      this.$createDialog({
        type: 'alert',
        icon: 'cubeic-warn',
        showClose: true,
        title: '请先登陆!',
        onClose: (e) => {},
        onConfirm: (e) => {
          // 拷贝路由参数
          const querys = Object.assign({}, this.$route.query)
          querys.custom = 'login'
          this.$router.push({
            path: this.$route.path,
            query: querys
          })
          this.$login({showid: 'login'})
//           this.$message({
//             message: '恭喜你，这是一条成功消息',
//             type: 'success'
//           })
          // this.$msg({value: '我是构造组件'})
        }
      }).show()
    }
  }
}
</script>

<style lang="scss" scoped>
.commnt_tool{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #eceaea;
  z-index: 100;
  background-color: #fff;
}
.rich_wrap{
  position: relative;
  margin: 8px 10px;
  display: none;
  &.active{
    display: block;
  }
  .rich_box{
    margin-right: 50px;
    border: 1px solid #f1f1f1;
    border-radius: 15px;
    .rich_input{
      display: block;
      padding: 8px 10px;
      outline: none;
      font-size: 14px;
      line-height: 1.3;
      max-height: 30px;
      overflow: auto;
    }
    .empty:before {
      display: none;
    }
    .rich_input:before {
      content: attr(placeholder);
      position: absolute;
      opacity: .4;
      pointer-events: none;
      user-select: none;
    }
  }
  .rich_submit{
    width: 45px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 15px;
    text-align: center;
  }
}
.com_wrap {
  display: flex;
  margin: 0 10px;
  align-items: center;
  height: 40px;
  background: #fff;
  .com_tool_item{
  }
  .com_bj {
    position: relative;
    width: 50%;
    height: 25px;
    line-height: 25px;
    border-radius: 20px;
    background: #eaeaea;
    color: #222;
    .bianji{
      margin-left: 5px;
      color: #222;
    }
    .com_text{
      margin-left: 3px;
      font-size: 12px;
    }
    .xiaolian{
      position: absolute;
      top: 3px;
      right: 7px;
      vertical-align: middle;
      color: #ababab;
    }
  }
  .com_right {
    flex: 1;
    display: flex;
    // width: 45%;
    margin-left: 10%;
    align-items: center;
    justify-content: space-around;
    a {
      color: #222;
      &:active {
        color: #ababab;
      }
    }
  }
  .isred {
    svg {
      color: red;
    }
  }
}
</style>
