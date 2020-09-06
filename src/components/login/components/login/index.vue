<template>
  <div class="wrap">
    <span class="closelogin" @click.stop="handleClose" >
      <svg-icon icon-class="guanbi" class-name="guanbi" />
    </span>
    <div class="login_wrap">
      <div class="login_icon">
        今日头条
      </div>
      <div class="login_box">
        <cube-input
          v-model="logindata.account"
          :placeholder="acplaceholder"
          :type="'text'"
          class="account"
        />
        <cube-input
          v-model="logindata.password"
          :placeholder="pasplaceholder"
          :type="'password'"
          :eye="eye"
          class="password"
          />
        <cube-button :primary="true" @click="loginfn">登陆</cube-button>
      </div>
      <div class="other_box">
        <div class="reg_wrap" @click="gotos">
          <a href="javascript:;" class="register" data-id="register">注册</a>
          <a href="javascript:;" class="forgot" data-id="forgot">忘记密码</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setCookie } from '@/utils/commont.js'
import { login } from '@/api/login.js'

export default {
  name: 'Login',
  data() {
    return {
      logindata: {
        account: '',
        password: ''
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
    },
    loginfn() {
      if (this.logindata.account && this.logindata.password) {
        if (this.logindata.password.length < 6) {
          this.$createToast({
            type: 'error',
            time: 1000,
            txt: '密码不能小于6位数！'
          }).show()
        } else {
          login(this.logindata).then(response => {
            // console.log(response)
            const data = response.data
            if (data.code === '01') {
              this.$emit('updateinfo', data.data)
              setCookie('token', data.data.token)
              console.log(JSON.stringify(data.data))
              setCookie('uinfo', JSON.stringify(data.data))
            }
          })
          this.handleClose()
          this.$createToast({
            type: 'correct',
            time: 1000,
            txt: '登录成功'
          }).show()
        }
      } else {
        this.$createToast({
          type: 'error',
          time: 1000,
          txt: '账号或密码不能为空！'
        }).show()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.closelogin{
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  .guanbi{
    font-size: 25px;
  }
}
.login_wrap {
  position: absolute;
  width: 100%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  .login_icon {
    text-align: center;
    color: red;
    padding: 20px 0;
    margin-bottom: 25px;
  }
  .login_box {
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
      &:active{
        color: #fb9090;
      }
    }
    .register{
      // margin-right: 1px;
      &:after{
        content:'';
        position: absolute;
        top: 5px;
        right: -3px;
        bottom: 5px;
        border-right: 1px solid #cecece;
      }
    }
  }
}
</style>
