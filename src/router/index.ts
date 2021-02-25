import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../components/Layout.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: (_) => {
      return { path: '/home' }
    },
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: 'Home' */ '../views/home/index.vue'),
        meta: {
          title: '主页',
        },
      },
      {
        path: 'about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: 'About' */ '../views/about/index.vue'),
        meta: {
          title: '关于',
        },
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () =>
          import(
            /* webpackChunkName: 'Profile' */ '../views/profile/index.vue'
          ),
        meta: {
          title: '个人中心',
        },
      },
      {
        path: 'data',
        name: 'Data',
        component: () =>
          import(/* webpackChunkName: 'Data' */ '../views/data/index.vue'),
        meta: {
          title: '数据',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'Login' */ '../views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/404',
    component: () =>
      import(/* webpackChunkName: 'Error' */ '../views/error/404.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/',
    redirect: (_) => {
      return { path: '/home' }
    },
  },
  {
    path: '/:currentPath(.*)*',
    redirect: (_) => {
      return { path: '/404' }
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
