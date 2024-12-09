import Vue from 'vue'
import type { RouteConfig } from 'vue-router'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

export const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   // NOTE: you can also apply meta information
  //   // meta: {authRequired: false }
  //   component: Home,
  //   // NOTE: you can also lazy-load the component
  //   // component: () => import("@/views/About.vue")
  // },
  {
    path: '/',
    name: 'exchange',
    component: () => import('@/views/exchange/index.vue'),
    meta: {
      title: '交易',
      requireAuth: false,
      pageType: 'exchange',
    },
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue'),
    meta: {
      title: '个人中心',
      requireAuth: false,
      pageType: 'my',
    },
  },
  {
    path: '/wrap',
    name: 'wrap',
    component: () => import('@/views/wrap/index.vue'),
    meta: {
      title: '兑换代币',
      requireAuth: false,
      pageType: 'wrap',
    },
  },
  {
    path: '/symbol/:symbol(\\w+)',
    name: 'exchange-symbol',
    component: () => import('@/views/exchange/index.vue'),
    meta: {
      title: '交易',
      requireAuth: false,
      pageType: 'exchange',
    },
  },
  {
    path: '/dice',
    name: 'dice',
    // component: () => import('@/views/dice/index.vue'), // 确保有对应组件
    meta: {
      title: '投资',
      requireAuth: false,
      pageType: 'dice',
    },
  },
  {
    path: '/Rule',
    name: 'Rule',
    component: () => import('@/views/Rule/index.vue'),
    meta: {
      title: '交易规则',
      requireAuth: false,
      pageType: 'Rule',
    },
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/notice/index.vue'),
    meta: {
      title: '公告',
      requireAuth: false,
      pageType: 'notice',
    },
  },
  {
    path: '/arena',
    name: 'arena',
    // component: () => import('@/views/arena/index.vue'), // 确保有对应组件
    meta: {
      title: '竞价',
      requireAuth: false,
      pageType: 'arena',
    },
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
})

export default router
