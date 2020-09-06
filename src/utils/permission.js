import router from '@/router'
import { keepaliveRouter } from '@/router/keepaliveRouter'
import store from '@/store'
import Vue from 'vue'
import { getCookie } from '@/utils/commont.js'

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

// 参考vux
// const hstorage = window.sessionStorage
// let hstorageCount = hstorage.getItem('count') * 1 || 0
// hstorage.setItem('/index', 0)

router.beforeEach(async(to, from, next) => { // async(to, from, next)
//   const toIndex = hstorage.getItem(to.path)
//   const fromIndex = hstorage.getItem(from.path)
//   let direction
//   console.log(toIndex)
//   if (toIndex) {
//     if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
//       direction = 'forward'
//     } else {
//       direction = 'reverse'
//     }
//   } else {
//     ++hstorageCount
//     hstorage.setItem('count', hstorageCount)
//     to.path !== '/index' && hstorage.setItem(to.path, hstorageCount)
//     direction = 'forward'
//   }
//
//   if (toIndex && toIndex !== '0') {
//     store.commit('UPDATE_DIRECTION', '')
//   } else {
//     store.commit('UPDATE_DIRECTION', direction)
//   }

  // determine whether the user has logged in
  const islogin = getCookie('token')
  // keep-alive
  if (!store.getters.excludedRouter.length) {
    let excluded = []
    keepaliveRouter.forEach((item, index) => {
      if (!item.meta.keepAlive) {
        excluded.push(item.name) // .toLowerCase()
      }
    })
    await store.dispatch('setExcludedRouter', excluded)
  }

  // 判断当前页面是否需要登陆才能进入
  if (islogin) {
    if (!store.getters.token) {
      // 更新用户信息
      await store.dispatch('updateUserinfo', JSON.parse(getCookie('uinfo')))
      next()
    } else {
      next()
    }
  } else {
    if (to.query.custom) {
      Vue.prototype.$login({showid: to.query.custom, route: to})
    }
    next()
//     if (to.meta.login) {
//       // 拷贝路由参数
//       const querys = Object.assign({}, from.query)
//       querys.custom = 'login'
//       router.push({
//         path: from.path,
//         query: querys
//       })
//       Vue.prototype.$login({showid: 'login'})
//     } else {
//       next()
//     }
  }
})

router.afterEach(() => {
})
