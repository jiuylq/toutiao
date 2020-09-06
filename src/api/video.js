// 首页api
const api = 'https://m.toutiao.com/list/'

const params = {
    tag: 'video',
    ac: 'wap',
    count: '20',
    format: 'json_raw',
    as: 'A1E5FC292BF5756',
    cp: '5C9BC54705263E1',
    max_behot_time: '',
    _signature: '',
    i: ''
}
const list = {
  __all__: "推荐",
  video: "视频",
  news_hot: "热点",
  news_society: "社会",
  news_entertainment: "娱乐",
  news_military: "军事",
  news_tech: "科技",
  news_car: "汽车",
  news_house: "房产",
  news_sports: "体育",
  news_finance: "财经",
  news_world: "国际",
  news_fashion: "时尚",
  news_game: "游戏",
  news_travel: "旅游",
  news_history: "历史",
  news_discovery: "探索",
  news_food: "美食",
  news_baby: "育儿",
  news_regimen: "养生",
  news_story: "故事",
  news_essay: "美文"
}

// https://m.toutiao.com/i6671079243700503043/info/?_signature=DOkjKRAYUHcFpVk8pvJ7QAzpIz&i=6671079243700503043

//toutiao.com/m/detail/?

//m.toutiao.com/user_log/

// 西瓜视频api
const xigua = 'http://m.ixigua.com/list/'

const xigualist = {
	video_new: "推荐",
	subv_voice: "音乐",
	subv_funny: "搞笑",
	subv_society: "社会",
	subv_comedy: "小品",
	subv_life: "生活",
	subv_movie: "影视",
	subv_entertainment: "娱乐",
	subv_cute: "呆萌",
	subv_game: "游戏",
	subv_boutique: "原创",
	subv_broaden_view: "开眼"
}

const xiparams = {
    tag: 'video_new',
    ac: 'wap',
    count: '20',
    format: 'json_raw',
    as: 'A165BC595B86271',
    cp: '5C9BD6E25781DE1',
    max_behot_time: '1553687081',
    _signature: 'kyegewAAz8iaa9pui5YQWpMnoG',
    i: '1553687081'
}

// search 貌似直接返回一个HTML的源码
const search ='//m.toutiao.com/search/'

const sparams ={
    'keyword': '黄梅戏'
}