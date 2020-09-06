<template>
  <div class="article">
    <goback />
    <div class="article_header" v-if="articledata">
      <h1 class="article_title">{{ articledata.title }}</h1>
      <div class="article_author">
        <div class="article_header_left">
          <span class="avtatar"><img :src="articledata.media_user.avatar_url" alt=""></span>
          <span class="author">{{ articledata.media_user.screen_name }}</span>
        </div>
        <div class="article_header_right">
          <span class="article_time">{{ formTime(articledata.publish_time) }}</span>
          <span class="article_comment">{{ articledata.comment_count }}评论</span>
        </div>
      </div>
    </div>
    <div class="article_loading" v-else>{{ loadText }}</div>
    <article class="article_content" v-html="articledata.content"></article>
    <recommend :recdata="recdata" v-if="articledata" />
    <comment-compent :comment-date="comjson" @thumbsup="giveBui" />
  </div>
</template>

<script type="text/javascript">
import goback from '@/components/goback'
import recommend from '@/components/recommend'
import commentCompent from '@/components/comment'
import { articleDetail, comments } from '@/api/article.js'
import { getTimeStamp } from '@/utils/formatDate.js'
import Xgplayer from 'xgplayer'

export default {
  name: 'NewsDetails',
  props: {},
  components: {
    goback,
    recommend,
    commentCompent
  },
  data() {
    return {
      groupid: this.$route.query.groupid,
      itemid: this.$route.query.itemid,
      articledata: '',
      comjson: {},
      recdata: {},
      loadText: '内容正在加载中...'
    }
  },
  computed: {},
  watch: {
    '$route' (to, from) {
//       this.groupid = this.$route.query.groupid
//       this.itemid = this.$route.query.itemid
//       this.getDetail()
//       this.getComment()
//       document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  },
  created() {},
  mounted() {
    this.getDetail()
    this.$nextTick(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0) {
        document.documentElement.scrollTop = document.body.scrollTop = 0
      }
    })
  },
  destroyed() {
  },
  methods: {
    getDetail() {
      articleDetail(this.itemid)
        .then(response => {
          console.log(response)
          this.articledata = response.data.data
          if (this.$route.query.hasvideo) {
            this.$nextTick(() => {
              // 初始化视频数据
              setTimeout(() => {
                this.initXgplayer()
              }, 500)
            })
          }
          this.getComment()
        })
        .catch(err => {
          console.log(err)
          this.loadText = '加载数据失败!'
          this.$createToast({
            type: 'error',
            time: 1000,
            txt: '加载数据失败！'
          }).show()
        })
    },
    getComment() {
      const params = {
        group_id: this.groupid,
        item_id: this.itemid,
        offset: 0,
        count: 10
      }
      comments(params).then(response => {
        console.log(response)
        this.comjson = response.data.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    initXgplayer () {
      // 由于视频数据没抓取到，采用默认视频填充
      const _self = document.querySelector('.tt-video-box')
      if (!_self) {
        return
      }
      _self.innerHTML = ''
      const player = new Xgplayer({
        el: _self, // document.getElementById('xgplayer'),
        url: [
          {
            src: 'http://cdn.toxicjohann.com/lostStar.mp4',
            type: 'video/mp4'
          }
        ],
        fluid: true,
        poster: '//s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
        // playbackRate: [0.5, 0.75, 1, 1.5, 2],
        whitelist: ['']
      })
      player.emit('resourceReady', [
        { name: '高清', url: 'http://cdn.toxicjohann.com/lostStar.mp4' },
        { name: '超清', url: 'http://chimee.org/vod/1.mp4' }
      ])
    },
    formTime(t) {
      // 格式化时间
      return getTimeStamp(t, true, true)
    },
    formatComment(e) {
      // 格式化数字
      return Number(e) > 1e4 ? (Number(e) / 1e4).toFixed(1) + '万' : e
    },
    giveBui(e) {
      // 点赞
      const cjson = this.comjson.comments
      for (let i = 0; i < cjson.length; i++) {
        if (cjson[i].id === e.id && e.isbui) {
          cjson[i].reply_count = cjson[i].reply_count + 1
          const toast = this.$createToast({
            type: 'txt',
            time: 1000,
            txt: '+1'
          })
          toast.show()
        } else if (cjson[i].id === e.id && !e.isbui) {
          cjson[i].reply_count = cjson[i].reply_count - 1
          const toast = this.$createToast({
            type: 'txt',
            time: 1000,
            txt: '-1'
          })
          toast.show()
        }
      }
    }
  }
}
</script>

<style lang="scss">
img {
  max-width: 100%;
  min-width: 100%;
}
.article_content{
  p {
    // text-indent: 32px;
  }
  img{
    margin: 5px 0;
  }
}
.tt-video-box{
  margin: 5px 0;
}
.xgplayer{
  z-index: 10;
}
</style>

<style lang="scss" scoped>
.article{
  background: #fff;
}
.article_loading{
  margin: 20px 10px;
  text-align: center;
}
.article_header, .article_content{
  margin: 0 10px;
}
.article_title{
  margin-top: 15px;
}
.article_author{
  width: 100%;
  height: 24px;
  position: relative;
  margin-top: 15px;
  font-size: 13px;
  .article_header_left{
    position: absolute;
    top: 0;
    left: 0;
    .avtatar{
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-right: 5px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
        vertical-align: middle;
      }
    }
    .author{
      display: inline-block;
      line-height: 24px;
      overflow: hidden;
    }
  }
  .article_header_right{
    position: absolute;
    top: 0;
    right: 0;
  }
}
.article_content{
  margin-top: 15px;
  line-height: 1.4;
  font-size: 16px;
}
</style>
