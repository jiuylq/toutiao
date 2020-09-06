import Mock from 'mockjs'
import {
  param2Obj
} from '@/utils/commont'

const List = []
const count = 100

const baseContent =
  '<p>我是测试数据我是测试数据</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: '我是测试数据',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}

export default {
  getList: config => {
    const {
      importance,
      type,
      title,
      page = 1,
      limit = 20,
      sort
    } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{
      key: 'PC',
      pv: 1024
    }, {
      key: 'mobile',
      pv: 1024
    }, {
      key: 'ios',
      pv: 1024
    }, {
      key: 'android',
      pv: 1024
    }]
  }),
  getArticle: (config) => {
    const {
      id
    } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  createArticle: () => ({
    data: 'success'
  }),
  updateArticle: () => ({
    data: 'success'
  }),
  creatbusflight: (e) => {
    // workid          //(id)
    // useronwork      //(上班时间)
    // useroffwork     //（下班时间）
    // busroute        //（路线）
    // buscarnumber    //（车牌）
    // username        //（姓名）
    // usermobile      //（手机号）
    // mmcid           //（设备号）
    // console.log(e)

    // function getRequest(url) {
    //   var request = {}
    //   if (url.indexOf('?') !== -1) {
    //     var str = url.split('?')[1]
    //     var strs = str.split('&')
    //     for (var i = 0; i < strs.length; i++) {
    //       request[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
    //     }
    //   }
    //   return request
    // }

    // const data = getRequest(e.url)

    // const pi = data.pi || 1
    // const pv = data.pv || 10

    const flight = {
      'code': 0,
      'msg': 'success',
      'totalnumber': 13,
      'data|10-20': [{
        'workid|+1': 1,
        'macid|+1': 1213131212,
        'username': '@cname()',
        'usermobile': '12354894521',
        'useronwork': '@datetime()',
        'useroffwork': '@datetime()',
        'busroute|+1': 1,
        'buscarnumber|+1': 100001,
        'rewardtype|1': ['绿色出行好司机', '绿色出行老司机'],
        'creattime': '@date("yyyy-MM-dd")'
      }]
    }
    return Mock.mock(flight)
  },
  creatLogin: () => {
    const logindata = {
      'code': 0,
      'msg': 'success',
      'data': {
        'token|+1': 1121212155,
        'mobile': 13425678902,
        'username': '@cname()',
        'usermobile': '12354894521',
        'companyid': 2,
        'company': '信息显示得瑟得瑟',
        'userid': 3,
        'icon': '',
        'level': 1,
        'is_remove': true,
        'is_sos': false,
        'setting': '',
        'creattime': '@date("yyyy-MM-dd")'
      }
    }
    return Mock.mock(logindata)
    // const data = response.data.data
    // commit('SET_TOKEN', data.token)
    // setToken(data.token)
    // setcookie('usermobile', data.usermobile)
    // setcookie('userid', data.userid)
    // setcookie('companyid', data.companyid)
    // setcookie('username', encodeURI(data.username))
    // setcookie('avatar', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif') // data.icon
    // setcookie('userlevel', data.userlevel)
  },
  creatworklist: (e) => {
    const count = 50
    const params = param2Obj(e.url)
    console.log(param2Obj(e.url))
    // const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)
    const limit = 'data|' + params.pv
    const data = [{
      'workid|+1': 1,
      'userid|+1': 1,
      'username': '@cname()',
      'sex|1': ['0', '1'],
      'cellphone|+1': 13245798651,
      'useronwork': '@datetime()',
      'macid|+1': 60173254621,
      'carnumber|+1': 95273256,
      'busroute|+1': 100,
      'onwork': '@datetime()',
      'offwork': '@datetime()',
      'totalxssc|+1': 30,
      'totalrqxhl|+1': 10,
      'totalrunkm|+1': 33,
      'totalzgcs|+1': 120,
      'totalzgzs|+1': 150,
      'totalzgsw|+1': 66,
      'totalzdjzgsw|+1': 33,
      'totalfdjzgsw|+1': 55,
      'totaldjkzzgsw|+1': 122,
      'totaljiasu|+1': 86,
      'totaljiansu|+1': 66,
      'totaljzw|+1': 78,
      'totalksbd|+1': 96,
      'totaldby|+1': 96,
      'totalcs|+1': 78,
      'creattime': '@date("yyyy-MM-dd")'
    }]
    const flight = {
      'code': 0,
      'msg': 'success',
      'count': count
    }
    flight[limit] = data
    return Mock.mock(flight)
  },
  creatworkinfo(e) {
    const params = param2Obj(e.url)
    console.log(params)
    const data = {
      'workid|+1': 1,
      'userid|+1': 12,
      'username': '@cname()',
      'sex|1': ['0', '1'],
      'cellphone|+1': 13245798651,
      'useronwork': '@datetime()',
      'macid|+1': 60173254621,
      'carnumber|+1': 95273256,
      'busroute|+1': 100,
      'onwork': '@datetime()',
      'offwork': '@datetime()',
      'totalxssc|+1': 30,
      'totalrqxhl|+1': 10,
      'totalrunkm|+1': 33,
      'totalzgcs|+1': 120,
      'totalzgzs|+1': 150,
      'totalzgsw|+1': 66,
      'totalzdjzgsw|+1': 33,
      'totalfdjzgsw|+1': 55,
      'totaldjkzzgsw|+1': 122,
      'totaljiasu|+1': 86,
      'totaljiansu|+1': 66,
      'totaljzw|+1': 78,
      'totalksbd|+1': 96,
      'totaldby|+1': 96,
      'totalcs|+1': 78,
      'creattime': '@date("yyyy-MM-dd")'
    }
    const recorddata = {
      'recordid|+1': 1,
      'starttime': '@datetime()',
      'dhstarttime': '@datetime()',
      'startaddress': '@county(true)',
      'endaddress': '@county(true)',
      'totalxssc|+1': 30,
      'totalrqxhl|+1': 10,
      'totaldcdlxh|+1': 11,
      'totalrunkm|+1': 33,
      'totalzgcs|+1': 120,
      'totalzgzs|+1': 150,
      'totalzgsw|+1': 66,
      'totalzdjzgsw|+1': 33,
      'totalfdjzgsw|+1': 55,
      'totaldjkzzgsw|+1': 122,
      'totaljiasu|+1': 86,
      'totaljiansu|+1': 66,
      'totaldssj|+1': 22,
      'totaljzw|+1': 78,
      'totalksbd|+1': 96,
      'totaldby|+1': 96,
      'totalcs|+1': 78,
      'totalrcsc|+1': 33
    }
    const flight = {
      'code': 0,
      'msg': 'success',
      'count': count,
      'data': {
        'work': {},
        'record|20': []
      }
    }
    flight['data'].work = data
    flight.data['record|20'].push(recorddata)
    return Mock.mock(flight)
  },
  creatrecordinfo(e) {
    const params = param2Obj(e.url)
    console.log(params)
    const flight = {
      'code': 0,
      'msg': 'success',
      'data|10': [{
        'gps_lng|113.1-7': 113.145692,
        'gps_lat|23.1-7': 23.079895,
        'warn|1': ['0', '1', '2', '3', '4', '5'] // , '1', '2', '3', '4', '5'
      }]
    }
    return Mock.mock(flight)
  },
  creatbestuser(e) {
    console.log(e)
    const count = 50
    // const params = param2Obj(e.url)
    console.log(param2Obj(e.url))
    // const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)
    // const limit = 'data|' + params.pv
    const data = [{
      'workid|+1': 1,
      'userid|+1': 1,
      'workstatus|1': ['上班', '下班'],
      'workcount|1': [5, 11, 33, 7, 10, 1],
      'username': '@cname()',
      'sex|1': ['0', '1'],
      'cellphone|+1': 13245798651,
      'useronwork': '@datetime()',
      'macid|+1': 60173254621,
      'carnumber|+1': 95273256,
      'busroute|+1': 100,
      'onwork': '@datetime()',
      'offwork': '@datetime()',
      'totalxssc|+1': 30,
      'totalrqxhl|+1': 10,
      'totalrunkm|+1': 33,
      'totalzgcs|+1': 120,
      'totalzgzs|+1': 150,
      'totalzgsw|+1': 66,
      'totalzdjzgsw|+1': 33,
      'totalfdjzgsw|+1': 55,
      'totaldjkzzgsw|+1': 122,
      'totaljiasu|+1': 86,
      'totaljiansu|+1': 66,
      'totaljzw|+1': 78,
      'totalksbd|+1': 96,
      'totaldby|+1': 96,
      'totalcs|+1': 78,
      'creattime': '@date("yyyy-MM-dd")'
    }]
    const flight = {
      'code': 0,
      'msg': 'success',
      'count': count,
      'data|10': data
    }
    // flight[limit] = data
    return Mock.mock(flight)
  },
  creatworstuser(e) {
    console.log(e)
    const count = 50
    // const params = param2Obj(e.url)
    console.log(param2Obj(e.url))
    // const { importance, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)
    // const limit = 'data|' + params.pv
    const data = [{
      'workid|+1': 1,
      'userid|+1': 1,
      'workstatus|1': ['上班', '下班'],
      'workcount|1': [5, 11, 33, 7, 10, 1],
      'username': '@cname()',
      'sex|1': ['0', '1'],
      'cellphone|+1': 13245798651,
      'useronwork': '@datetime()',
      'macid|+1': 60173254621,
      'carnumber|+1': 95273256,
      'busroute|+1': 100,
      'onwork': '@datetime()',
      'offwork': '@datetime()',
      'totalxssc|+1': 30,
      'totalrqxhl|+1': 10,
      'totalrunkm|+1': 33,
      'totalzgcs|+1': 120,
      'totalzgzs|+1': 150,
      'totalzgsw|+1': 66,
      'totalzdjzgsw|+1': 33,
      'totalfdjzgsw|+1': 55,
      'totaldjkzzgsw|+1': 122,
      'totaljiasu|+1': 86,
      'totaljiansu|+1': 66,
      'totaljzw|+1': 78,
      'totalksbd|+1': 96,
      'totaldby|+1': 96,
      'totalcs|+1': 78,
      'creattime': '@date("yyyy-MM-dd")'
    }]
    const flight = {
      'code': 0,
      'msg': 'success',
      'count': count,
      'data|10': data
    }
    // flight[limit] = data
    return Mock.mock(flight)
  },
  creataddadmin(e) {
    const addadmin = {
      'code': 6,
      'msg': '权限不足',
      'data': {}
    }
    return Mock.mock(addadmin)
  },
  createMenu(e) {
    const menu = {
      'code': 0,
      'msg': 'xxxxx',
      'data': [{
        'menu': 'adminlist',
        'title': '管理员列表',
        'isshow': true,
        'children': []
      }, {
        'menu': 'carlist',
        'title': '车辆列表',
        'isshow': true,
        'children': []
      }, {
        'menu': 'companylist',
        'title': '企业列表',
        'isshow': true,
        'children': []
      }, {
        'menu': 'driverdata',
        'title': '驾驶数据',
        'isshow': true,
        'children': []
      }, {
        'menu': 'driverlist',
        'title': '司机列表',
        'isshow': true,
        'children': []
      }, {
        'menu': 'excel',
        'title': '数据导出导入',
        'isshow': true,
        'children': [{
          'menu': 'export',
          'title': '数据导出',
          'isshow': true,
          'children': null
        }, {
          'menu': 'import',
          'title': '数据导入',
          'isshow': true,
          'children': null
        }]
      }, {
        'menu': 'worklist',
        'title': '上班列表',
        'isshow': true,
        'children': []
      }]
    }
    return Mock.mock(menu)
  },
  creatmaclist(e) {
    const list = {
      'code': 0,
      'data': [{
        'macid': '711710000299',
        'username': '粤E00001',
        'carnumber': '粤E00001',
        'busroute': '测试线路2',
        'macstate': '在线',
        'gpslng': '113.098333',
        'gpslat': '23.047305'
      }, {
        'macid': '711710000300',
        'username': '粤E00002',
        'carnumber': '粤E00002',
        'busroute': '测试线路3',
        'macstate': '在线',
        'gpslng': '113.107325',
        'gpslat': '23.046483'
      }, {
        'macid': '711766660001',
        'username': '粤E00000',
        'carnumber': '粤E00000',
        'busroute': '测试线路1',
        'macstate': '在线',
        'gpslng': '113.281578',
        'gpslat': '22.799327'
      }, {
        'macid': '711766660002',
        'username': '',
        'carnumber': '',
        'busroute': '',
        'macstate': '',
        'gpslng': '',
        'gpslat': ''
      }, {
        'macid': '711766660003',
        'username': '',
        'carnumber': '',
        'busroute': '',
        'macstate': '',
        'gpslng': '',
        'gpslat': ''
      }],
      'msg': ''
    }
    return Mock.mock(list)
  }
}
