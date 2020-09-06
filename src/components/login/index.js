import Vue from 'vue'
import loginVue from './index.vue'
import store from '@/store'

// 构造组件
let LoginConstructor = Vue.extend(loginVue)

let instance
// 窗口唯一性的验证，未完成，暂留测BUG
// let instances = []
// let hasInstance = false
let zIndex = 200

// 检测当前支持那种前缀的transform，兼容性处理
let elementStyle = document.createElement('div').style

let transformNames = {
  webkit: 'webkitTransform',
  Moz: 'MozTransform',
  O: 'OTransform',
  ms: 'msTransform',
  standard: 'transform'
}

let vendor = (() => {
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend'
    }
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

// 设置删除组件
const removeDom = (target) => {
  target.parentNode.removeChild(target)
  // hasInstance = false
}

// 构造组件添加关闭方法
LoginConstructor.prototype.close = function () {
  this.visible = false
  removeDom(this.$el)
}

const Login = function (options) {
//   if (hasInstance) {
//     return
//   }
  options = options || {}
  options.aniopts = {
    vendor: vendor,
    transform: transformNames[vendor],
    transitionend: prefixStyle('transitionEnd')
  }
  options.onClose = function (e) {
    // removeDom(e.$el)
    // hasInstance = false
  }
  // 实例化组件
  instance = new LoginConstructor({
    // 不能创建el,会重复触发created和mounted钩子函数的
    // el: document.createElement('div'),
    // 组件参数，运用到组件内的data
    data: options
  })
  instance.id = options.showid
  instance.vm = instance.$mount()
  // 在body添加组件
  document.body.appendChild(instance.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = zIndex
  instance.$store = store
  // instance.dom.style.transform = 'translate3d(100%, 0, 0)'
  // hasInstance = true
//   Vue.nextTick(() => {
//     instance.timer = setTimeout(() => {
//       instance.close()
//     }, 3000)
//   })
  return instance.vm
}

export default Login
