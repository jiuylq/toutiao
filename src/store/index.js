import Vue from 'vue'
import Vuex from 'vuex'
import { removeCookie } from '@/utils/commont.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    direction: '',
    isload: false,
    username: '',
    token: '',
    userid: '',
    mobile: '',
    level: '',
    avatar: '',
    shopcar: [],
    shopcount: 0,
    excludedRouter: []
  },
  getters: {
    direction: state => state.direction,
    username: state => state.username,
    token: state => state.token,
    userid: state => state.userid,
    mobile: state => state.mobile,
    level: state => state.level,
    avatar: state => state.avatar,
    isload: state => state.isload,
    shopcar: state => state.shopcar,
    shopcount: state => state.shopcount,
    excludedRouter: state => state.excludedRouter
  },
  mutations: {
    UPDATE_DIRECTION: (state, payload) => {
      state.direction = payload
    },
    UPDATE_ISLOAD: (state, isload) => {
      state.isload = isload
    },
    UPDATE_USERNAME: (state, username) => {
      state.username = username
    },
    UPDATE_USERID: (state, userid) => {
      state.userid = userid
    },
    UPDATE_LEVEL: (state, level) => {
      state.level = level
    },
    UPDATE_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    UPDATE_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    UPDATE_TOKEN: (state, token) => {
      state.token = token
    },
    UPDATE_EXCLUDEDROUTER: (state, ROUTER) => {
      state.excludedRouter = ROUTER
    },
    ADD_SHOPCAR: (state, shopcar) => {
      // 添加购物车
      // 购买同一件商品，规格一样，视为一次购买
      // 不同规格商品规格通过具体id区分
      // 具体格式为：
//       {
//         product_id: 11111,
//         img: '',
//         name: '',
//         count: 1,
//         price: 111,
//         shop_id: '',
//         shop_logo: '',
//         shop_name: '',
//         shop_tel: '',
//         freight: {}, // 运费
//         spec_info: {
//         '63444507': {
//           name: '颜色',
//           list: {
//             "id": "63444507",
//             "name": "黑色"
//          },
//         },
//         '63444514': {
//           name: '颜色',
//            list: {
//              "id": "63444507",
//              "name": "39"
//           },
//         }
//        }
//       }
      // state.shopcar.push(shopcar)
      // 添加购物车的两种情况
      // 1、当购物车为空
      if (state.shopcar.length === 0) {
        state.shopcar.push(shopcar)
      } else {
      // 不为空时
      // 需判断product_id, shop_id, spec_info等参数是否相同，相同则在原商品基础上累加上当前购买的数量，新添加一条商品记录
        let isPush = true // 是否添加数据,默认为true
        for (let i = 0; i < state.shopcar.length; i++) {
          // 商品product_id，shop_id唯一性，可以不用判断shop_id的
          if (state.shopcar[i].product_id === shopcar.product_id && state.shopcar[i].shop_id === shopcar.shop_id) {
            // spec_info 默认必须选每一个规格的参数才能加入购物车，所以不能通过length来判断
            let specinfo = state.shopcar[i].spec_info
            let isspecnum = 0
            let selectSpeckey = Object.keys(shopcar.spec_info)
            for (let k = 0; k < selectSpeckey.length; k++) {
              if (specinfo[selectSpeckey[k]]) {
                isspecnum++
              }
            }
            if (isspecnum === Object.keys(specinfo).length) {
              state.shopcar[i].count += shopcar.count
              isPush = false
            }
            // 跳出
            return
          }
        }
        if (isPush) {
          state.shopcar.push(shopcar)
        }
      }
    },
    REDUCE_SHOPCAR: (state, shopcar) => {
      // 删除购物车的数据，shopcar为数组，根据product_id, shop_id, spec_info是否相同来进行删除操作
      // 需删除的商品可能有多个
      // 方法一： 双循环遍历进行删除（暂时采用）（性能问题）
      // 方法二： 先归类再删除
      for (let i = 0; i < state.shopcar.length; i++) {
        // 商品product_id，shop_id唯一性，可以不用判断shop_id的
        for (let j = 0; i < shopcar.length; j++) {
          if (state.shopcar[i].product_id === shopcar[j].product_id && state.shopcar[i].shop_id === shopcar[j].shop_id) {
            let specinfo = state.shopcar[i].spec_info
            let isspecnum = 0
            let selectSpeckey = Object.keys(shopcar[j].spec_info)
            for (let k = 0; k < selectSpeckey.length; k++) {
              if (specinfo[selectSpeckey[k]]) {
                isspecnum++
              }
            }
            if (isspecnum === Object.keys(specinfo).length) {
              state.shopcar.splice(i, 1)
            }
          }
        }
      }
      // Object.prototype.toString.call(shopcar) === '[object Array]'
    },
    CLEAR_SHOPCAR: (state, shopcar) => {
      state.shopcar = []
    },
    UPDATE_SHOPCOUNT: (state, shopcount) => {
      if (state.shopcar.length > 0) {
        let count = state.shopcar.reduce((prev, cur) => {
          return cur.count + prev
        })
        state.shopcount = count
      } else {
        state.shopcount = 0
      }
    }
  },
  actions: {
    setExcludedRouter({ commit }, data) {
      return new Promise(resolve => {
        commit('UPDATE_EXCLUDEDROUTER', data)
        resolve()
      })
    },
    setIsload({ commit }, data) {
      return new Promise(resolve => {
        commit('UPDATE_ISLOAD', data)
        resolve()
      })
    },
    setUserinfo({commit}, json) {
      return new Promise(resolve => {
        console.log(json)
        commit('UPDATE_USERNAME', json.username)
        commit('UPDATE_USERID', json.userid)
        commit('UPDATE_TOKEN', json.token)
        commit('UPDATE_LEVEL', json.level)
        commit('UPDATE_AVATAR', json.avatar)
        commit('UPDATE_MOBILE', json.usermobile)
        resolve()
      })
    },
    updateUserinfo({commit}, data) {
      return new Promise(resolve => {
        for (let i in data) {
          switch (i) {
            case 'username':
              commit('UPDATE_USERNAME', data.username)
              break
            case 'userid':
              commit('UPDATE_USERID', data.userid)
              break
            case 'token':
              commit('UPDATE_TOKEN', data.token)
              break
            case 'level':
              commit('UPDATE_LEVEL', data.level)
              break
            case 'mobile':
              commit('UPDATE_MOBILE', data.usermobile)
              break
            case 'avatar':
              commit('UPDATE_AVATAR', data.avatar)
              break
          }
        }
        resolve()
      })
    },
    logOut({commit}, json) {
      return new Promise(resolve => {
        removeCookie('token')
        removeCookie('uinfo')
        commit('UPDATE_USERNAME', '')
        commit('UPDATE_USERID', '')
        commit('UPDATE_TOKEN', '')
        commit('UPDATE_LEVEL', '')
        commit('UPDATE_AVATAR', '')
        commit('UPDATE_MOBILE', '')
        resolve()
      })
    },
    addShopList({commit}, data) {
      return new Promise(resolve => {
        commit('ADD_SHOPCAR', data)
        // 更新购物车的数量
        commit('UPDATE_SHOPCOUNT', null)
        resolve()
      })
    },
    reduceShopList({commit}, data) {
      return new Promise(resolve => {
        commit('REDUCE_SHOPCAR', data)
        // 更新购物车的数量
        commit('UPDATE_SHOPCOUNT', null)
        resolve()
      })
    },
    clearShopList({commit}, data) {
      return new Promise(resolve => {
        commit('CLEAR_SHOPCAR', null)
        commit('UPDATE_SHOPCOUNT', null)
        resolve()
      })
    }
  }
})

export default store
