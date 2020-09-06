<template>
  <div class="wrap">
    <span class="closeregister" @click.stop="handleClose" >
      <svg-icon icon-class="guanbi" class-name="guanbi" />
    </span>
    <div class="register_wrap">
      <div class="register_icon">
        注册
      </div>
      <div class="register_box">
        <cube-input
          v-model="registerdata.account"
          :placeholder="acplaceholder"
          :type="'text'"
          class="account"
        />
        <cube-input
          v-model="registerdata.password"
          :placeholder="pasplaceholder"
          :type="'password'"
          :eye="eye"
          class="password"
          />
        <cube-input
          v-model="registerdata.repassword"
          :placeholder="pasplaceholder"
          :type="'password'"
          :eye="eye"
          class="password"
          />
        <cube-button :primary="true">注册</cube-button>
      </div>
      <div class="other_box">
        <div class="reg_wrap" @click="gotos">
          <a href="javascript:;" class="login" data-id="login">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      registerdata: {
        account: '',
        password: '',
        repassword: ''
      },
      acplaceholder: '请输入登陆账号',
      pasplaceholder: '请输入密码',
      eye: {
        open: false,
        reverse: false
      }
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
    })
  },
  activated() {},
  beforeDestroy () {
  },
  destroyed() {},
  methods: {
    handleClose() {
      this.$emit('closed', {dire: 'slide-right'})
    },
    gotos(e) {
      const target = e.target
      if (target.nodeName.toLowerCase() === 'a') {
        const id = target.getAttribute('data-id')
        this.$emit('gotto', id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.closeregister{
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  .guanbi{
    font-size: 25px;
  }
}
.register_wrap {
  position: absolute;
  width: 100%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  .register_icon {
    text-align: center;
    color: red;
    padding: 20px 0;
    margin-bottom: 25px;
  }
  .register_box {
    margin: 0 10px;
    padding: 0 10%;
    .cube-input{
      margin-bottom: 20px;
    }
  }
  .cube-btn{
    padding: 10px 16px;
    &.cube-btn-primary{
      background: #ff5e5e;
    }
    &:active{
      background: #f37676;
    }
  }
}
.other_box{
  margin-top: 15px;
  .reg_wrap{
    text-align: center;
    font-size: 14px;
    a{
      position: relative;
      display: inline-block;
      padding: 5px;
      color: red;
      // text-decoration: ;
      &:active{
        color: #fb9090;
      }
    }
  }
}
</style>
