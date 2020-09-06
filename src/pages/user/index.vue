<template>
  <div class="user_warpper">
    <div class="account-wrap">
      <div class="account-top account-list" v-if="token">
        <img :src="avatar" alt="" class="user-avatar">
        <span class="account-name">{{ username }}</span>
      </div>
      <div class="account-top account-list login" v-else><span class="account-name" @click="loginHandle">请先登录!</span></div>
      <div class="account-i">
        <div class="account-it">
          <div class="account-it-name">动态：</div>
          <span>{{ token ? accdata.trends : 0 }}</span>
        </div>
        <div class="account-it">
          <div class="account-it-name">关注：</div>
          <span>{{ token ? accdata.follow : 0 }}</span>
        </div>
        <div class="account-it">
          <div class="account-it-name">粉丝：</div>
          <span>{{ token ? accdata.fans : 0 }}</span>
        </div>
      </div>
    </div>
    <div class="half-wrap">
      <router-link to="/user/mycollection" class="half-item" tag="div">
        <svg-icon icon-class="shouc" class-name="shoucang icon-i" />
        <div class="half-text">收藏</div>
      </router-link>
      <router-link to="/user/mycollection" class="half-item" tag="div">
        <svg-icon icon-class="lishiguiji" class-name="lishiguiji icon-i" />
        <div class="half-text">历史</div>
      </router-link>
      <div class="half-item">
        <svg-icon icon-class="yejianmoshi" class-name="yejianmoshi icon-i" />
        <div class="half-text">夜间</div>
      </div>
    </div>
    <ul class="list-view">
      <li class="list-view-cell">
        <a href="javascript:;" class="navigate-right">我的钱包</a>
      </li>
      <li class="list-view-cell">
        <a href="javascript:;" class="navigate-right">消息通知</a>
      </li>
    </ul>
    <ul class="list-view">
      <router-link to="/product/order" class="list-view-cell" tag="li">
        <a href="javascript:;" class="navigate-right">我的订单</a>
      </router-link>
    </ul>
    <ul class="list-view">
      <li class="list-view-cell">
        <a href="javascript:;" class="navigate-right">用户反馈</a>
      </li>
    </ul>
    <ul class="list-view">
      <li class="list-view-cell">
        <a href="javascript:;" class="navigate-right">系统设置</a>
      </li>
    </ul>
    <div class="logout" v-if="token">
      <button @click="logOut">退出登陆</button>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'User',
  components: {
  },
  data() {
    return {
      accdata: {
        trends: 363,
        follow: 62,
        fans: 352
      }
    }
  },
  computed: {
    ...mapGetters([
      'avatar',
      'mobile',
      'userid',
      'username',
      'token'
    ])
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    loginHandle() {
      const querys = Object.assign({}, this.$route.query)
      querys.custom = 'login'
      this.$router.push({
        path: this.$route.path,
        query: querys
      })
    },
    ...mapActions([
      'logOut'
    ])
  }
}
</script>

<style lang="scss" scoped>
.user_warpper{
  background: #efeff4;
}
.account-list{
  display: flex;
  align-items: center;
}
.account-wrap{
  background-color: #777;
}
.account-top {
  padding: 0.46875rem;
  color: #fff;
  .user-avatar{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .account-name{
    margin-left: 10px;
    font-size: 0.46875rem;
  }
}
.login{
  padding-top: 1rem;
  .account-name{
    font-size: .6rem;
  }
}
.account-i{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #666;
  padding: 0.46875rem 0 0.8375rem;
  .account-it{
    width: 33.3333%;
    display: flex;
    align-items: center;
    justify-content: center;
    // flex-direction: column;
    span{
      color: #fff;
    }
    .account-it-name{
      color: #aaa;
    }
  }
}
.half-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .2rem 0;
  background: #fff;
  .half-item{
    width: 33.3333%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .shoucang{
      color: #ffd402;
    }
    .lishiguiji{
      color: #f85959;
    }
    .yejianmoshi{
      color: #409eff;
    }
    .icon-i{
      font-size: 0.5625rem;
    }
    .half-text{
      margin-top: .2rem;
      font-size: 0.40625rem;
    }
  }
}
.list-view {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  background-color: #fff;
  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
  .list-view-cell {
    position: relative;
    overflow: hidden;
    padding: 11px 15px;
    -webkit-touch-callout: none;
    &:after {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 15px;
      height: 1px;
      content: '';
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      background-color: #c8c7cc;
    }
    &>a {
      position: relative;
      display: block;
      overflow: hidden;
      margin: -11px -15px;
      padding: inherit;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: inherit;
      font-size: 0.46875rem;
      &:active{
        background: #eee;
      }
    }
  }
}
.list-view-chevron {
  .list-view-cell {
    padding-right: 65px;
    &>a {
      margin-right: -65px;
    }
  }
}
.list-view:before {
  position: absolute;
  right: 0;
  left: 0;
  height: 1px;
  content: '';
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
  background-color: #c8c7cc;
  top: -1px;
}
.list-view {
    margin-top: 10px;
}
.navigate-right:after {
  font-size: inherit;
  line-height: 1;
  position: absolute;
  top: 50%;
  right: 15px;
  content: '';
  width: 7px;
  height: 7px;
  border-top: 2px solid #bbb;
  border-right: 2px solid #bbb;
  display: inline-block;
  transform: translateY(-50%) rotate(45deg);
  text-decoration: none;
  color: #bbb;
  -webkit-font-smoothing: antialiased;
}
.logout{
  margin-top: 15px;
  text-align: center;
  margin-bottom: 20px;
  button{
    width: 100%;
    margin: 0 auto;
    color: #f83e3e;
    background: #fff;
    padding: 10px 0;
    outline: none;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
  }
}
</style>
