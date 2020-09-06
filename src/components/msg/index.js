import Vue from 'vue'
import Msg from './Msg.vue'
// 构造组件
const MessageConstructor = Vue.extend(Msg)
// 设置删除组件
const removeDom = (target) => {
  target.parentNode.removeChild(target)
}
let zIndex = 2000
// 构造组件添加关闭方法
MessageConstructor.prototype.close = function () {
  this.visible = false
  removeDom(this.$el)
}

const MessageDiv = (options) => {
  // 实例化组件
  const instance = new MessageConstructor({
    el: document.createElement('div'),
    // 组件参数，运用到组件内的data
    data: options
  })
  instance.vm = instance.$mount()
  // 在body添加组件
  document.body.appendChild(instance.$el)
  instance.dom = instance.$el
  instance.dom.style.zIndex = zIndex++
  Vue.nextTick(() => {
    instance.timer = setTimeout(() => {
      // 定时关闭组件
      instance.close()
    }, 3000)
  })
  return instance
}

export default MessageDiv
