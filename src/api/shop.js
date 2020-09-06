import request from '@/utils/request'

// 基础数据
export function newList(pardata) {
// https://haohuo.snssdk.com/channel/ajaxNewList?preview=&b_type_new=0
  return request({
    url: '/shopi/channel/ajaxNewList',
    method: 'get',
    params: {
      preview: '',
      b_type_new: 0
    }
  })
}

// 限时抢购
export function currentFourSeckillGoods(pardata) {
// https://haohuo.snssdk.com/seckill/currentFourSeckillGoods?b_type_new=0
  return request({
    url: '/shopi/seckill/currentFourSeckillGoods',
    method: 'get',
    params: {
      b_type_new: 0
    }
  })
}

// 推荐数据
export function ajaxGetGoods(pardata) {
// https://haohuo.snssdk.com/channel/ajaxGetGoods?cids=&classifyId=0&page=0&pageSize=10&addActivity=1&app_id=undefined&area_type=5&area_id=0&b_type_new=0
  return request({
    url: '/shopi/channel/ajaxGetGoods',
    method: 'get',
    params: pardata
  })
}

// 热搜
export function gethot(pardata) {
// https://haohuo.snssdk.com/search/gethot?b_type_new=0
  return request({
    url: '/shopi/search/gethot',
    method: 'get',
    params: {
      b_type_new: 0
    }
  })
}

// 搜索

export function searchsug(pardata) {
// https://haohuo.snssdk.com/search/getsug?b_type_new=0&query=%E5%A5%B3
  return request({
    url: '/shopi/search/getsug',
    method: 'get',
    params: pardata
  })
}

export function search(pardata) {
// https://haohuo.snssdk.com/search/getList?query=xx&type=0&sort=1&page=0&size=10&b_type_new=0
  return request({
    url: '/shopi/search/getList',
    method: 'get',
    params: pardata
  })
}

// 分类
export function ajaxCategoryAll(pardata) {
// https://haohuo.snssdk.com/channel/ajaxCategoryAll?version=1&is_category=1&b_type_new=0
  return request({
    url: '/shopi/channel/ajaxCategoryAll',
    method: 'get',
    params: {
      version: 1,
      is_category: 1,
      b_type_new: 0
    }
  })
}

// 某一类
export function productcategory(pardata) {
// https://haohuo.snssdk.com/productcategory/getList?second_cid=150&type=0&sort=1&page=0&size=10&b_type_new=0
  return request({
    url: '/shopi/productcategory/getList',
    method: 'get',
    params: pardata
  })
}

// 商品详情
export function fxgajaxstaticitem(pardata) {
// https://haohuo.snssdk.com/product/fxgajaxstaticitem?id=3341476926773709645&b_type_new=0
  return request({
    url: '/shopi/product/fxgajaxstaticitem',
    method: 'get',
    params: pardata
  })
}

//
export function samerecommend(pardata) {
// https://haohuo.snssdk.com/shop/samerecommend?shop_id=hqUCIe&product_id=3341476926773709645&b_type_new=0
  return request({
    url: '/shopi/shop/samerecommend',
    method: 'get',
    params: pardata
  })
}

// 店铺推荐
export function ajaxitem(pardata) {
// https://haohuo.snssdk.com/product/ajaxitem?id=3341476926773709645&origin_type=10000&b_type_new=0
  return request({
    url: '/shopi/product/ajaxitem',
    method: 'get',
    params: pardata
  })
}

// 获取商品具体参数的图片
export function getstock(pardata) {
// https://haohuo.snssdk.com/product/getstock?id=3341476926773709645&add_cart=0&origin_type=10000&b_type_new=0
  return request({
    url: '/shopi/product/getstock',
    method: 'get',
    params: pardata
  })
}
