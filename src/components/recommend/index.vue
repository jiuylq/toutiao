<template>
  <div ref="recommend" id="recommend" class="recommend" @click="clickItem">
    <div class="rec_t">
      <ul v-if="!hasvideo">
        <li class="rec_item" v-for="(item, index) in rect" :key="index">
          <a href="javascript:;">
            <div class="rec_item_t">
              <span class="rec_t_v" v-if="item.type === 'video'">视频</span>{{ item.text }}
            </div>
          </a>
        </li>
      </ul>
      <ul v-else style="background: #fff;">
        <li class="rec_item" v-for="(item, index) in rect" :key="index">
          <a href="javascript:;">
            <div class="rec_item_o">
              <div class="rec_item_wrapper">
                <div class="rec_item_left">
                  <h3 class="rec_item_title dotdot line2">{{ item.text }}</h3>
                  <div class="rec_item_x">
                    <span>{{ item.media_info.name }}</span>
                    <span>{{ formatComment(item.playnum) }}次播放</span>
                  </div>
                </div>
                <div class="rec_item_right">
                  <img :src="item.img" alt="">
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="rec_v"></div>
    <div class="rec_i"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    recdata: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  data() {
    return {
      hasvideo: this.$route.query.hasvideo,
      rect: [{
        id: 1,
        text: '是的方式方法,的手法首发赛得分撒大大撒大大大大撒大大阿松大',
        media_info: {
          name: '头条新闻'
        },
        playnum: '313223',
        img: 'https://p3.pstatp.com/list/dfic-imagehandler/d9897024-9505-4b69-af49-6c647984f69c',
        type: 'text'
      },
      {
        id: 1,
        text: '是的方式方法,的手法首发赛得分',
        playnum: '233223',
        media_info: {
          name: '头条新闻'
        },
        img: 'https://p3.pstatp.com/list/dfic-imagehandler/d9897024-9505-4b69-af49-6c647984f69c',
        type: 'video'
      },
      {
        id: 1,
        text: '是的方式方法,的手法首发赛得分实打实大苏打阿松大',
        playnum: '231323',
        media_info: {
          name: '头条新闻'
        },
        img: 'https://p3.pstatp.com/list/dfic-imagehandler/d9897024-9505-4b69-af49-6c647984f69c',
        type: 'video'
      },
      {
        id: 1,
        text: '是的方式方法,的手法首发赛得分',
        playnum: '231323',
        media_info: {
          name: '头条新闻'
        },
        img: 'https://p3.pstatp.com/list/dfic-imagehandler/d9897024-9505-4b69-af49-6c647984f69c',
        type: 'text'
      },
      {
        id: 1,
        text: '是的方式方法,的手法首发赛得分',
        playnum: '231323',
        media_info: {
          name: '头条新闻'
        },
        img: 'https://p3.pstatp.com/list/dfic-imagehandler/d9897024-9505-4b69-af49-6c647984f69c',
        type: 'video'
      }]
    }
  },
  created() {},
  mounted() {
    console.log(this.hasvideo)
  },
  methods: {
    clickItem(e) {
      // let target = e.target
      // console.log(this.$route)
      // groupid=6678927834502660620&itemid=6678927834502660620&hasvideo=false
      // groupid=6678578388279493133&itemid=6678578388279493133&hasvideo=true
      let path
      switch (this.$route.path) {
        case '/article/newsdetail':
          path = '/article/newsdetails'
          break
        case '/article/newsdetails':
          path = '/article/newsdetail'
          break
      }
      this.$router.replace({
        path: path,
        query: {
          groupid: '6678578388279493133',
          itemid: '6678578388279493133',
          hasvideo: true
        }
      })
    },
    formatComment(e) {
      // 格式化数字
      return Number(e) > 1e4 ? (Number(e) / 1e4).toFixed(1) + '万' : e
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/onepx.scss";

.recommend{
  background: #fff;
  margin-top: 15px;
  padding: 10px;
  .rec_t{
    border-radius: 3px;
    background: #f8f8f8;
  }
  .rec_item{
    position: relative;
    a{
      display: block;
      padding: 0 10px;
      font-size: 16px;
      line-height: 1.4;
    }
    .rec_item_t{
      position: relative;
      padding: 10px 0;
      &:after {
        @include onepx(#cecece, 'bottom')
      }
    }
    .rec_item_o{
      position: relative;
      padding: 10px 0;
    }
    &:last-child .rec_item_t:after{
      display: none;
    }
    a:active{
      background: rgba(0, 0, 0, 0.05);
    }
    .rec_t_v{
      display: inline-block;
      position: relative;
      margin-right: 10px;
      &:after{
        content: '';
        position: absolute;
        right: -5px;
        top: 3px;
        bottom: 3px;
        display: block;
        border-right: 1px solid #c7c7c7;
      }
    }
  }
}
.rec_item_wrapper{
  display: flex;
  .rec_item_left{
    flex: 1;
    margin-right: 5px;
    .rec_item_x{
      margin-top: 10px;
      font-size: 12px;
      span{
        margin-right: 5px;
      }
    }
  }
  .rec_item_right{
    width: 33%;
    img{
      width:100%;
      vertical-align: middle;
    }
  }
}
</style>
