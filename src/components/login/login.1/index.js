import Vue from 'vue'
import login from './index.vue'
// 构造组件
const LoginConstructor = Vue.extend(login)

let hasInstance = false
let zIndex = 200

// 设置删除组件
const removeDom = (target) => {
  target.parentNode.removeChild(target)
  hasInstance = false
}

// 构造组件添加关闭方法
LoginConstructor.prototype.close = function () {
  this.visible = false
  removeDom(this.$el)
}

const Login = function (options) {
  if (hasInstance) {
    return
  }
  options = options || {}
  options.onClose = function (e) {
    // removeDom(e.$el)
    hasInstance = false
  }
  // 实例化组件
  const instance = new LoginConstructor({
    el: document.createElement('div'),
    // 组件参数，运用到组件内的data
    data: options
  })
  instance.vm = instance.$mount()
  // 在body添加组件
  document.body.appendChild(instance.$el)
  instance.dom = instance.$el
  instance.dom.style.zIndex = zIndex
  hasInstance = true
//   Vue.nextTick(() => {
//     instance.timer = setTimeout(() => {
//       instance.close()
//     }, 3000)
//   })
  return instance.vm
}

export default Login
