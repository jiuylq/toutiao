import Vue from 'vue'
import loginVue from './index.vue'
// 构造组件
let LoginConstructor = Vue.extend(loginVue)

let instance
let hasInstance = false
let zIndex = 200

// 检测当前支持那种前缀的transform，兼容性处理
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

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
  options.aniopts = {
    vendor: vendor,
    transitionend: prefixStyle('transitionEnd')
  }
  options.onClose = function (e) {
    // removeDom(e.$el)
    hasInstance = false
  }
  // 实例化组件
  instance = new LoginConstructor({
    // 不能创建el
    // el: document.createElement('div'),
    // 组件参数，运用到组件内的data
    data: options
  })
  instance.id = 'xx'
  instance.vm = instance.$mount()
  // 在body添加组件
  document.body.appendChild(instance.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = zIndex
  instance.dom.style[vendor + 'Transform'] = 'translate3d(100%, 0, 0)'
  hasInstance = true
//   Vue.nextTick(() => {
//     instance.timer = setTimeout(() => {
//       instance.close()
//     }, 3000)
//   })
  return instance.vm
}

export default Login
