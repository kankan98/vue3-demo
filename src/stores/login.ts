import { defineStore } from 'pinia';
import router from '@/router';
import { loginAPI, systemAPI } from '@/api';
import localCache from '@/utils/cache';
import { mapMenusToPermissions, mapMenusToRoutes } from '@/utils/map-menus';
import type { IAccount } from '@/api/login/type';
import type { IMenuItem } from '@/components/nav-menu/types';
import { ElMessage } from 'element-plus';

interface State {
  token: string;
  userInfo: any;
  userMenu: IMenuItem[];
  permissions: string[];
}
export const useLoginStore = defineStore('main', {
  state: (): State => ({
    token: '',
    userInfo: {},
    userMenu: [],
    permissions: []
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
    },
    async setUserMenu(userMenu: any) {
      this.userMenu = userMenu;
      // userMenu => routes
      const routes = await mapMenusToRoutes(userMenu);
      // 将routes => router.home.children
      console.log(routes);
      routes.forEach((route) => {
        router.addRoute('Main', route);
      });

      // 获取用户按钮权限
      // const permissions = mapMenusToPermissions(userMenu);
      // this.permissions = permissions;
    },
    async accountLoginAction(payload: IAccount) {
      // 1.实现登录逻辑
      const account = {
        username: payload.username,
        password: payload.password,
        captcha: payload.captcha,
        uuid: payload.uuid
      };
      try {
        const loginResult = await loginAPI.accountLogin(account);
        console.log(loginResult);
        const { id, token } = loginResult.data;
        if (loginResult.code === 0) {
          this.setToken(token);
          localCache.setCache('token', token);

          // 2. 请求用户信息
          // const userInfoResult = await loginAPI.getUserInfoById(id);
          // const userInfo = userInfoResult.data;
          // const userInfo = {
          //   username: account.username
          // };
          // this.setUserInfo(userInfo);
          // localCache.setCache('userInfo', userInfo);

          // 3. 获取菜单
          const {
            data: { menuList, permissions }
          } = await systemAPI.getUserMenu();
          console.log(menuList, permissions);

          const sysMenu = menuList.find(
            (item: { name: string }) => item.name === '系统管理'
          );
          console.log(sysMenu);
          sysMenu.list.push(
            {
              icon: 'admin',
              list: null,
              menuId: 65,
              name: '角色管理',
              open: null,
              orderNum: 1,
              parentId: 63,
              parentName: null,
              perms: null,
              type: 1,
              url: 'sys/role'
            },
            {
              icon: 'admin',
              list: null,
              menuId: 666,
              name: '菜单管理',
              open: null,
              orderNum: 1,
              parentId: 63,
              parentName: null,
              perms: null,
              type: 1,
              url: 'sys/menu'
            }
          );
          await this.setUserMenu(menuList);

          localCache.setCache('userMenu', menuList);
          console.log(router);
          // 4. 跳转页面
          router.push({
            path: payload.redirect ?? '/'
          });
          return true;
        } else if (loginResult.code === 500) {
          ElMessage({
            type: 'error',
            message: loginResult.msg
          });
          return false;
        }
      } catch (err) {
        console.log(err);
      }
    },

    // 方式1：在应用启动时加载用户信息和动态路由
    // 方式2：在路由守卫中拦截加载用户信息和动态路由（需要注释掉/:patchMatch(.*)*路由，手写跳转404路由）
    async loadLocalLogin() {
      const token = localCache.getCache('token');
      if (token) {
        this.setToken(token);
      }
      const userInfo = localCache.getCache('userInfo');
      if (userInfo) {
        this.setUserInfo(userInfo);
      }
      const userMenu = localCache.getCache('userMenu');
      if (userMenu) {
        await this.setUserMenu(userMenu);
      }
    }
  }
});
