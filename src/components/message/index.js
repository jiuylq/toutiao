import Vue from 'vue'
import MessageVue from './message.vue'

let MessageConstructor = Vue.extend(MessageVue)

let instance
let instances = []
let seed = 1
let zIndex = 2000

const hasOwnProperty = Object.prototype.hasOwnProperty

function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function isVNode (node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions')
}

const Message = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  let userOnClose = options.onClose
  let id = 'message_' + seed++

  options.onClose = function () {
    Message.close(id, userOnClose)
  }
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id
  if (isVNode(instance.message)) {
    instance.$slots.default = [instance.message]
    instance.message = null
  }
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = zIndex++
  instances.push(instance)
  return instance.vm
}

const ttype = ['success', 'warning', 'info', 'error']
ttype.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Message
