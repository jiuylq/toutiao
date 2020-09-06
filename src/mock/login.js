import Mock from 'mockjs'
import {
  param2Obj
} from '@/utils/commont'

// for (let i = 0; i < count; i++) {
//   List.push(Mock.mock({
//     id: '@increment',
//     timestamp: +Mock.Random.date('T'),
//     author: '@first',
//     reviewer: '@first',
//     title: '@title(5, 10)',
//     content_short: '我是测试数据',
//     content: baseContent,
//     forecast: '@float(0, 100, 2, 2)',
//     importance: '@integer(1, 3)',
//     'type|1': ['CN', 'US', 'JP', 'EU'],
//     'status|1': ['published', 'draft', 'deleted'],
//     display_time: '@datetime',
//     comment_disabled: true,
//     pageviews: '@integer(300, 5000)',
//     image_uri,
//     platforms: ['a-platform']
//   }))
// }

export default {
  creatLogin: config => {
    const {
      account
    } = param2Obj(config.url)
    const logindata = {
      'code': '01',
      'msg': '登录成功',
      'data': {
        'account': account,
        'token|+1': 1121212155,
        'mobile': 13425678902,
        'username': '测试用户',
        'usermobile': '12354894521',
        'userid|+1': 3,
        'avatar': 'http://p1.pstatp.com/thumb/403c000414239ed51ea5',
        'level|+1': 1,
        'setting': '',
        'logintime': '@date("yyyy-MM-dd")',
        'creattime': '@date("yyyy-MM-dd")'
      }
    }
    return Mock.mock(logindata)
  }
}
