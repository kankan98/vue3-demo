import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import localCache from '@/utils/cache';
import { firstMenu } from '@/utils/map-menus';

const Layout = () => import('../views/main/index.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/:patchMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/notFound/NotFound.vue')
  },
  // {
  //   path: '/',
  //   name: 'name',
  //   redirect: '/home',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'Home',
  //       component: () => import('../views/main/home/index.vue')
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'Main',
    component: Layout,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});
// let hasRoute = false;
router.beforeEach(async (to: RouteLocationNormalized) => {
  NProgress.start();
  if (to.path !== '/login') {
    const token = localCache.getCache('token');
    if (to.meta.requiresAuth && !token) {
      return {
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      };
    }
  }
  if (to.path === '/') {
    // firstMenu.url
    return firstMenu.url;
    // 刷新页面动态添加路由
    // } else {
    //   if (!hasRoute) {
    //     const loginStore = useLoginStore();
    //     if (loginStore) {
    //       const userMenu = localCache.getCache('userMenu');
    //       await loginStore.setUserMenu(userMenu);
    //       next({ ...to, replace: true });
    //       hasRoute = true;
    //     }
    //   } else {
    //     if (to.matched.length === 0) {
    //       next('/404');
    //       return;
    //     }
    //   }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
