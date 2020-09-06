import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import { keepaliveRouter } from './keepaliveRouter'

const index = () => import('@/pages/home/index')

/**
 * slide 动画
 * tab 底部4个tab用于判断转场动画
**/

let constantRouter = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Layout,
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: index,
        meta: {
          slide: 1,
          tab: 1
        }
      }
    ]
  },
  {
    path: '/video',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Videos',
        component: () => import('@/pages/video'),
        meta: {
          slide: 1,
          tab: 2
        }
      }
    ]
  },
  {
    path: '/shop',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Shop',
        component: () => import('@/pages/shop'),
        meta: {
          slide: 1,
          tab: 3
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: '',
        name: 'User',
        component: () => import('@/pages/user/index'),
        meta: {
          slide: 1,
          tab: 4,
          login: true
        }
      }
    ]
  }
]

constantRouter = constantRouter.concat(keepaliveRouter)

Vue.use(Router)
Router.prototype.animate = 0
export default new Router({
  // mode: 'history',
  routes: constantRouter
})
