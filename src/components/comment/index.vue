<template>
  <div class="comment_box" v-if="commentDate.comments">
    <p class="comment_text">评论</p>
    <ul ref="comment" v-if="commentDate.comments.length > 0">
      <li class="comment_item" v-for="(item, index) in commentDate.comments" :key="index" :data-id="item.id">
        <a href="javascript:;">
          <span class="comment_avatar">
            <img :src="item.user.avatar_url" alt="">
          </span>
          <div class="comment_content">
            <div class="comment_top">
              <div class="comment_author">
                <span class="item_span">{{ item.user.name }}</span>
                <span class="item_span">{{ formTime(item.create_time) }}</span>
              </div>
              <div class="comment_bui">
                <svg-icon icon-class="nice-line" class-name="nice-line" /><span class="item_span">{{ item.reply_count }}</span>
              </div>
            </div>
            <div class="comment_info">
              <p>{{ item.text }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="no_more" v-else>暂时没有更多评论！</div>
    <tool />
  </div>
  <!-- <div class="article_loading" v-else>评论正在加载中...</div> -->
</template>

<script>
import { getTimeStamp } from '@/utils/formatDate.js'
import tool from './tool'

export default {
  name: 'comment',
  props: {
    commentDate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    tool
  },
  data() {
    return {
      commentEl: null,
      wNum: 0
    }
  },
  computed: {},
  watch: {
    commentDate(nVal, oVal) {
      if (!this.wNum) {
        this.$nextTick(() => {
          this.wNum++ // 用于首次绑定
          this.commentEl = this.$refs.comment
          this.commentEl.addEventListener('click', this.clickBui, false)
        })
      }
    }
  },
  created() {},
  mounted() {
//     this.$nextTick(() => {
//     })
  },
  destroyed() {
    this.commentEl.removeEventListener('click', this.clickBui)
  },
  methods: {
    formTime(t) {
      return getTimeStamp(t, true, true)
    },
    clickBui(e) {
      const target = e.target
      let isbui = false
      if (target.nodeName.toLowerCase() === 'svg') {
        const tarParent = target.parentNode
        // toggle className
        tarParent.classList.toggle('active_bui')
        // 判断是点赞还是取消点赞
        if (tarParent.classList.contains('active_bui')) {
          isbui = true
        }
        // 获取当前评论的id
        const parEle = this.findParent(target, 'li').getAttribute('data-id')
        // 触发父级数据更新
        this.$emit('thumbsup', {'id': parEle, 'isbui': isbui})
      }
    },
    findParent(e, n) { // 查找父级节点，当前写法需优化，如果不存在n的话，嘿嘿嘿
      let parName = e.nodeName.toLowerCase()
      let parEle = e
      while (parName !== n) {
        parEle = parEle.parentNode
        parName = parEle.nodeName.toLowerCase()
      }
      return parEle
    }
  }
}
</script>

<style>
</style>
<style lang="scss" scoped>
.article_loading{
  margin: 20px 10px;
  text-align: center;
}
.no_more{
  margin: 10px 10px;
  text-align: center;
  font-size: 15px;
}
.comment_box{
  margin: 15px 0 50px;
}
.comment_text{
  padding: 0 5px;
  margin: 15px 0 10px 10px;
  border-left: 3px solid #ff0000;
  line-height: 35px;
  padding-left: 5px;
  position: sticky;
  top: 45px;
  background: #fff;
  z-index: 99;
}
.comment_item{
  position: relative;
  a{
    display: block;
    padding: 10px 10px;
    color: #222;
  }
  a:active{
    // background: rgba(0, 0, 0, 0.05);
  }
  .comment_avatar{
    float: left;
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  .comment_content{
    margin-left: 30px;
    .comment_top{
      position: relative;
      height: 24px;
      .comment_author{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 14px;
      }
      .active_bui{
        color: #ff0000;
      }
      .comment_bui{
        position: absolute;
        top: 0;
        right: 0;
        .item_span{
          font-size: 14px;
        }
      }
      .item_span{
        display: inline-block;
        line-height: 24px;
      }
    }
    .comment_info{
      margin-top: 5px;
      font-size: 14px;
      line-height: 1.4;
      p{
        word-break: break-all;
      }
    }
  }
}
.comment_item:before{
  content: '';
  position:absolute;
  left: 45px;
  right: 10px;
  top: -1px;
  height: 1px;
  background: #f2f2f2;
}
</style>
