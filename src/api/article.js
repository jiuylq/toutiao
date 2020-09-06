import request from '@/utils/request'

export function article(pardata) {
  return request({
    url: '/mapi/list/',
    method: 'get',
    params: pardata
  })
}

export const txts = [
  {
    tag: '__all__',
    label: '推荐'
  },
//   {
//     tag: 'video',
//     label: '视频'
//   },
  {
    tag: 'news_hot',
    label: '热点'
  },
  {
    tag: 'news_society',
    label: '社会'
  },
  {
    tag: 'news_entertainment',
    label: '娱乐'
  },
  {
    tag: 'news_military',
    label: '军事'
  },
  {
    tag: 'news_tech',
    label: '科技'
  },
  {
    tag: 'news_sports',
    label: '体育'
  },
  {
    tag: 'news_finance',
    label: '财经'
  },
  {
    tag: 'news_world',
    label: '国际'
  },
  {
    tag: 'news_fashion',
    label: '时尚'
  },
  {
    tag: 'news_game',
    label: '游戏'
  },
  {
    tag: 'news_travel',
    label: '旅游'
  },
  {
    tag: 'news_history',
    label: '历史'
  },
  {
    tag: 'news_discovery',
    label: '探索'
  },
  {
    tag: 'news_food',
    label: '美食'
  },
  {
    tag: 'news_baby',
    label: '育儿'
  },
  {
    tag: 'news_regimen',
    label: '养生'
  },
  {
    tag: 'news_story',
    label: '故事'
  },
  {
    tag: 'news_essay',
    label: '美文'
  }
]

export function articleDetail(pardata) {
  return request({
    url: '/mapi/i' + pardata + '/info/',
    method: 'get'
  })
}

export function comments(pardata) {
  return request({
    url: '/papsi/api/comment/list/',
    method: 'get',
    params: pardata
  })
}

// export const xigualist = {
//   video_new: '推荐',
//   subv_voice: '音乐',
//   subv_funny: '搞笑',
//   subv_society: '社会',
//   subv_comedy: '小品',
//   subv_life: '生活',
//   subv_movie: '影视',
//   subv_entertainment: '娱乐',
//   subv_cute: '呆萌',
//   subv_game: '游戏',
//   subv_boutique: '原创',
//   subv_broaden_view: '开眼'
// }

export const xigualist = [
  {
    tag: 'video_new',
    label: '推荐'
  },
  {
    tag: 'subv_voice',
    label: '音乐'
  },
  {
    tag: 'subv_funny',
    label: '搞笑'
  },
  {
    tag: 'subv_society',
    label: '社会'
  },
  {
    tag: 'subv_comedy',
    label: '小品'
  },
  {
    tag: 'subv_life',
    label: '生活'
  },
  {
    tag: 'subv_movie',
    label: '影视'
  },
  {
    tag: 'subv_entertainment',
    label: '娱乐'
  },
  {
    tag: 'subv_cute',
    label: '呆萌'
  },
  {
    tag: 'subv_broaden_view',
    label: '开眼'
  }
]

export function videoList(pardata) {
  return request({
    url: '/video/list/',
    method: 'get',
    params: pardata
  })
}
