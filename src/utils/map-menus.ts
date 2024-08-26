import type { IBreadcrumb } from '@/base-ui/breadcrumb';
import type { IMenuItem } from '@/components/nav-menu/types';
import type { RouteRecordRaw } from 'vue-router';

let firstMenu: IMenuItem;
// 动态生成路由
export async function mapMenusToRoutes(
  userMenus: any[]
): Promise<RouteRecordRaw[]> {
  return new Promise(async (resolve, reject) => {
    const routes: RouteRecordRaw[] = [];
    // 1.先去加载默认所有的routes
    const allRoutes: (RouteRecordRaw & { url: string })[] = [];
    // webpack 依赖管理https://webpack.docschina.org/guides/dependency-management/#require-with-expression
    // const routeFiles = require.context('../router/main', true, /\.ts$/)
    // 获取上下文文件
    const routeFiles = import.meta.glob('../router/main/**/*.ts', {
      eager: true
    });
    try {
      for (const key of Object.keys(routeFiles)) {
        const route = await import(/* @vite-ignore */ key);
        allRoutes.push(route.default);
      }
      console.log(allRoutes);
      // 2.根据菜单获取需要添加的routes
      // type === 0表示为目录 递归调用 children -> type
      // type === 1 -> url -> route

      const _recurseGetRoute = (menus: any[]) => {
        for (const menu of menus) {
          if (menu.type === 1) {
            const currentRoute = allRoutes.find(
              (route) => route.path === '/' + menu.url
            );
            if (currentRoute) routes.push(currentRoute);
            if (!firstMenu) {
              firstMenu = menu;
            }
          } else {
            _recurseGetRoute(menu.list);
          }
        }
      };
      console.log(userMenus);
      _recurseGetRoute(userMenus);
      console.log(routes);
      resolve(routes);
    } catch (err) {
      console.log(err);
    }
  });
}

// 导出路径对应菜单树
export function pathMapBreadcrumbs(
  userMenus: IMenuItem[],
  currentPath: string
): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

// 导出路径对应菜单
export function pathMapToMenu(
  userMenu: IMenuItem[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenu) {
    if (menu.type === 0 && menu.list?.length) {
      const findMenu = pathMapToMenu(menu.list ?? [], currentPath);
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: '/' + menu.url });
        breadcrumbs?.push({ name: findMenu.name, path: '/' + findMenu.url });
        return findMenu;
      }
    } else if ('/' + menu.url === currentPath) {
      return menu;
    }
  }
}
export { firstMenu };
// 菜单权限列表
export function mapMenusToPermissions(userMenus: IMenuItem[]) {
  const permission: string[] = [];
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 0 || menu.type === 1) {
        _recurseGetPermission(menu.list ?? []);
      } else if (menu.type === 2) {
        permission.push(menu.permission);
      }
    }
  };

  _recurseGetPermission(userMenus);
  return permission;
}

// 获取菜单叶子节点key
export function getMenuLeafKeys(menuList: any[]) {
  const leafKeys: number[] = [];
  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children);
      }
      leafKeys.push(menu.id);
    }
  };
  _recurseGetLeaf(menuList);
  return leafKeys;
}
