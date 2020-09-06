<template>
  <div class="scroll-list-wrapper">
    <section v-for="(item, index) in listData" :key="index" class="scroll-list-item">
      <p v-if="item.loading" class="list_loading">{{ item.loading }}</p>
      <router-link :to="{ path: '/article/newsdetail' , query: { groupid: item.group_id, itemid: item.item_id, hasvideo: item.has_video } }" class="list_link" v-else>
        <div class="list_detail" v-if="item.has_image && item.image_list.length > 0">
          <h3 class="list_title dotdot line2">{{ item.title }}</h3>
          <div class="list_img">
            <div v-for="(im, i) in item.image_list" :key="i">
              <img v-lazy="im.url" @load="onImgLoad" alt="">
            </div>
          </div>
          <div class="list_info">
            <span class="stick_label space" v-if="item.is_stick">置顶</span>
            <span class="hot_label space" v-if="item.hot">热</span>
            <span class="gg_label space" v-if="item.gg">广告</span>
            <span class="list_from space">{{ item.source }}</span>
            <span class="list_cmt space">评论 {{ item.comment_count }}</span>
            <span class="list_time space">{{ formTime(item.datetime, true) }}</span>
          </div>
        </div>
        
        <div class="list_detail_wrap" v-else-if="item.has_video && !item.is_stick">
          <div :class="['list_detail']">
            <div class="list_larget">
              <h3 class="list_title dotdot line2">{{ item.title }}</h3>
              <img class="large_image" :src="item.large_image_url" @load="onImgLoad" alt="">
              <span class="video-btn"></span>
            </div>
            <div class="list_info">
              <span class="stick_label space" v-if="item.is_stick">置顶</span>
              <span class="hot_label space" v-if="item.hot">热</span>
              <span class="gg_label space" v-if="item.gg">广告</span>
              <span class="list_from space">{{ item.source }}</span>
              <span class="list_cmt space">评论 {{ item.comment_count }}</span>
              <span class="list_time space">{{ formTime(item.datetime, true) }}</span>
            </div>
          </div>
        </div>
        
        <div class="list_detail_wrap" v-else-if="( index + 1) % 5 === 0">
          <div v-if="item.image_url" class="list_right">
            <img v-lazy="item.image_url" @load="onImgLoad" alt="">
          </div>
          <div :class="['list_detail', item.image_url ? 'list_left' : '']">
            <h3 class="list_title dotdot line2">{{ item.title }}</h3>
            <div class="list_info">
              <span class="stick_label space" v-if="item.is_stick">置顶</span>
              <span class="hot_label space" v-if="item.hot">热</span>
              <span class="gg_label space" v-if="item.gg">广告</span>
              <span class="list_from space">{{ item.source }}</span>
              <span class="list_cmt space">评论 {{ item.comment_count }}</span>
              <span class="list_time space">{{ formTime(item.datetime, true) }}</span>
            </div>
          </div>
        </div>
        
        <div class="list_detail_wrap" v-else>
          <div :class="['list_detail', item.image_url ? 'list_left' : '']">
            <h3 class="list_title dotdot line2">{{ item.title }}</h3>
            <div class="list_info">
              <span class="stick_label space" v-if="item.is_stick">置顶</span>
              <span class="hot_label space" v-if="item.hot">热</span>
              <span class="gg_label space" v-if="item.gg">广告</span>
              <span class="list_from space">{{ item.source }}</span>
              <span class="list_cmt space">评论 {{ item.comment_count }}</span>
              <span class="list_time space">{{ formTime(item.datetime, true) }}</span>
            </div>
          </div>
          <div v-if="item.image_url" class="list_right">
            <img v-lazy="item.image_url" @load="onImgLoad" alt="">
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script type="text/javascript">
import { getTimeStamp } from '@/utils/formatDate.js'

export default {
  props: ['listData'],
  data() {
    return {}
  },
  watch: {
    listData(newVal, oldVal) {
      // console.log(newVal)
    }
  },
  created() {},
  mounted() {},
  methods: {
    formTime(t, x) {
      return getTimeStamp(t, x)
    },
    onImgLoad() {
      // console.log('1')
      // this.$emit('loadimg', true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/onepx.scss";

  .scroll-list-wrapper {
    display: flex;
    flex-direction: column;
    // position: relative;
    background: #fff;
    .scroll-list-item {
      position: relative;
      margin: 0 15px;
      // border-bottom: 1px solid rgba(221, 221, 221, 0.6);
      &:after {
        @include onepx(#ececec, 'bottom')
      }
      white-space: normal;
      .list_link {
        width: 100%;
        display: block;
        padding: 10px 0;
        .list_detail_wrap {
          display: flex;
          align-items: center;
        }
        .list_left {
          flex: 1;
          margin: 0 3px;
        }
        .list_right {
          width: 33%;
          img {
            width: 100%;
            vertical-align: center;
          }
        }
        .list_larget{
          position: relative;
          width: 100%;
          min-height: 5.16rem;
          .dotdot {
            position: absolute;
            padding: 5px 5px 15px 5px;
            top: 0;
            left: 0;
            right: 0;
            color: #fff;
            font-size: 14px;
            line-height: 1.5;
            background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(0, 0, 0, 0)));
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
          }
          img {
            width: 100%;
            vertical-align: middle;
          }
          .video-btn {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background: url(//s3.pstatp.com/growth/mobile_list/image/playicon_video@3x_dcf536ff.png) no-repeat center center;
            background-size: 50px;
          }
        }
        .large_image{
          width: 100%;
          img {
            width: 100%;
            vertical-align: middle;
          }
        }
        .list_img {
          width: 100%;
          margin-top: 5px;
          display: flex;
          justify-content: space-between;
          div {
            width: 32.8%;
            img {
              width: 100%;
              vertical-align: middle;
            }
          }
        }
      }
      .list_detail {
        display: block;
        width: 100%;
        .list_title {
          color: #222;
          font-size: 18px;
          line-height: 1.2;
        }
      }
      .list_info {
        margin-top: 5px;
        color: #999;
        span {
          display: inline-block;
          font-size: 10px;
          line-height: 1;
          padding: 0 1px;
          vertical-align: middle;
        }
        .space {
          margin-right: 3px;
        }
      }
      .list_loading {
        line-height: 36px;
        text-align: center;
        color: #000;
        font-size: 15px;
      }
      .stick_label, .hot_label{
        display: inline-block;
        text-align: center;
        color: #f85959;
        border: 1px solid #fff;
        border-color: rgba(248, 89, 89, 0.5);
        border-radius: 3px;
        vertical-align: middle;
      }
      .gg_label {
          display: inline-block;
          text-align: center;
          border-radius: 3px;
          color: #2a90d7;
          border: 1px solid rgba(42, 144, 215, 0.5);
          vertical-align: middle;
      }
    }
  }
</style>
