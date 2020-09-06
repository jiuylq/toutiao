<template>
  <div class="wrap">
    <span class="closeforgot" @click.stop="handleClose" >
      <svg-icon icon-class="guanbi" class-name="guanbi" />
    </span>
    <div class="forgot_wrap">
      <div class="forgot_icon">
        忘记密码
      </div>
      <div class="forgot_box">
        <cube-input
          v-model="forgotdata.account"
          :placeholder="acplaceholder"
          :type="'text'"
          class="account forget_item"
        />
        <cube-input
          v-model="forgotdata.password"
          :placeholder="pasplaceholder"
          :type="'password'"
          :eye="eye"
          class="password forget_item"
          />
        <div class="identcode forget_item">
          <div class="iden_left">
            <cube-input
              v-model="forgotdata.password"
              :placeholder="codeplaceholder"
              :type="'text'"
              class="code"
              />
            </div>
            <div class="iden_right">
              <input type="submit" v-model="code" class="sendcode" @click="getcode">
            </div>
          </div>
        <cube-button :primary="true">确定</cube-button>
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
  name: 'forgot',
  data() {
    return {
      forgotdata: {
        account: '',
        password: ''
      },
      acplaceholder: '请输入手机号',
      pasplaceholder: '请输入新密码',
      codeplaceholder: '请输入验证码',
      eye: {
        open: false,
        reverse: false
      },
      code: '验证码'
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
    },
    getcode(e) {
      const target = e.target
      let time = 60
      target.setAttribute('disabled', true)
      let intime = setInterval(() => {
        if (time < 0) {
          clearInterval(intime)
          time = 60
          this.code = '重新获取'
          target.removeAttribute('disabled')
          return
        }
        this.code = time
        time--
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.closeforgot{
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  .guanbi{
    font-size: 25px;
  }
}
.forgot_wrap {
  position: absolute;
  width: 100%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  .forgot_icon {
    text-align: center;
    color: red;
    padding: 20px 0;
    margin-bottom: 25px;
  }
  .forgot_box {
    margin: 0 10px;
    padding: 0 10%;
    .cube-input{
      // margin-bottom: 20px;
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
  .forget_item{
    margin-bottom: 20px;
  }
}
.identcode{
  display: flex;
  align-items: center;
  .iden_left{
    flex: 1;
    margin-right: 5px;
  }
  .iden_right{
    width: 75px;
    .sendcode{
      width: 100%;
      display: block;
      background: transparent;
      outline: none;
      font-size: 14px;
      line-height: 1.429;
      padding: 10px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      box-sizing: border-box;
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
