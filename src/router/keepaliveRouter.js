export const keepaliveRouter = [
  {
    path: '/product/detail/:id(\\d+)',
    name: 'ProductDetail',
    component: () => import('@/pages/shop/detail'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  },
  {
    path: '/product/order',
    name: 'Order',
    component: () => import('@/pages/shop/components/order'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  },
  {
    path: '/product/categories',
    name: 'Categories',
    component: () => import('@/pages/shop/components/categories'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  },
  {
    path: '/product/categorychoose',
    name: 'CategoryChoose',
    component: () => import('@/pages/shop/components/categorychoose'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  },
  {
    path: '/product/collection',
    name: 'Collection',
    component: () => import('@/pages/shop/components/collection'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  },
  {
    path: '/product/shopsearch',
    name: 'ProductSearch',
    component: () => import('@/pages/shop/components/search'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  },
  {
    path: '/article/newsdetail',
    name: 'NewsDetail',
    component: () => import('@/pages/detail/newsdetail'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  },
  {
    path: '/article/newsdetails',
    name: 'NewsDetails',
    component: () => import('@/pages/detail/newsdetails'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  },
  {
    path: '/user/mycollection',
    name: 'MyCollection',
    component: () => import('@/pages/user/components/collection'),
    meta: {
      slide: 1,
      keepAlive: false
    }
  }
]
