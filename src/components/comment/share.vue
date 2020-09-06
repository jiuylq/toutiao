<template>
  <div class="share_box">
    <div ref="sharemask" class="share_mask" @click="onClose"></div>
    <div ref="share" class="share_wrap">
      <div  class="share_w">
        <div class="share" v-if="shareopts.opts1">
          <div class="share_item" v-for="(item, index) in shareopts.opts1" :key="item.id" :data-id="item.id">
            <a href="javascript:;">
              <svg-icon :icon-class="item.icon" :class-name="item.icon" />
              <p>{{ item.text }}</p>
            </a>
          </div>
        </div>
        <div class="share" v-if="shareopts.opts2">
          <div class="share_item" v-for="(item, index) in shareopts.opts2" :key="item.id" :data-id="item.id">
            <a href="javascript:;">
              <svg-icon :icon-class="item.icon" :class-name="item.icon" />
              <p>{{ item.text }}</p>
            </a>
          </div>
        </div>
      </div>
      <a class="share_close" href="javascript:;" data-id="close">取消分享</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      shareopts: {
        opts1: [{
          icon: 'xiaolian',
          text: '分享',
          id: '1'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '2'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '3'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '4'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '5'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '6'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '7'
        }],
        opts2: [{
          icon: 'xiaolian',
          text: '分享',
          id: '8'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '9'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '10'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '11'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '12'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '13'
        },
        {
          icon: 'xiaolian',
          text: '分享',
          id: '14'
        }]
      }
    }
  },
  computed: {
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$refs.share.addEventListener('click', (e) => {
        let target = e.target
        while (target !== this.$refs.share) {
//           if (target.classList.contains('share_item')) {
//             const toast = this.$createToast({
//               type: 'txt',
//               time: 1000,
//               txt: '你还真点啊！'
//             })
//             toast.show()
//             break
//           }
          if (target.getAttribute('data-id')) {
            if (target.getAttribute('data-id') === 'close') {
              this.onClose()
              break
            } else {
              this.$createToast({
                type: 'txt',
                time: 1000,
                txt: '嘿嘿嘿' + target.getAttribute('data-id')
              }).show()
              break
            }
          }
          target = target.parentNode
        }
      }, false)
    })
  },
  destroyed() {
  },
  methods: {
    onClose(e) {
      this.$refs.share.classList.remove('show')
      this.$refs.sharemask.classList.remove('show')
      document.body.classList.remove('hidden')
    },
    onShow(e) {
      this.$refs.share.classList.add('show')
      this.$refs.sharemask.classList.add('show')
      document.body.classList.add('hidden')
    }
  }
}
</script>

<style lang="scss">
.hidden{
  height: 100%;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.share_mask{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 996;
  background: rgba(0, 0, 0, .5);
  opacity: 0;
  display: none;
  transition: all .5s;
  &.show{
    opacity: 1;
    display: block;
  }
}
.share_wrap{
  position: fixed;
  left: 0;
  right: 0;
  bottom: -100%;
  z-index: 999;
  background: #fbfbfb;
  transition: all .3s;
  &.show{
    bottom: 0;
  }
  .share_close{
    display: block;
    text-align: center;
    background: #fff;
    font-size: 17px;
    color: #222;
    padding: 10px 0;
    &:active{
      background: rgba(0, 0, 0, 0.05);
    }
    div{
      
    }
  }
}
.share{
  padding: 10px 0;
  margin: 0 15px;
  overflow-x: scroll;
  white-space: nowrap;
  border-top: 1px solid #eceaea;
  &::-webkit-scrollbar {
    display: none;
  }
  .share_item{
    display: inline-block;
    width: 75px;
    height: 75px;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    // border: 1px solid red;
    a{
      display: block;
      padding: 5px;
      &:active{
        background: rgba(0, 0, 0, 0.05);
      }
    }
    .xiaolian{
      font-size: 35px;
    }
    p{
      margin: 10px 0 5px;
      font-size: 12px;
    }
  }
}
</style>
