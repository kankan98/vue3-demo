import { service } from '@/service';
import type { IDataType, IUserList, menuItemType } from './types';

enum SystemAPI {
  UserMenus = '/sys/menu/nav', // 获取导航菜单（获取菜单权限用）
  UserMenu = '/role/', // role/1/menu  // 获取用户菜单
  UserMenuList = '/sys/menu/select', // 获取菜单列表(编辑菜单使用)
  UserMenuById = '/sys/menu/info/', // 获取单个菜单
  UserMenuSave = '/sys/menu/save', // 保存菜单
  UserMenuUpdate = '/sys/menu/update', // 修改菜单
  UserMenuDelete = '/sys/menu/delete/' // 删除菜单
}

// 获取导航菜单
export function getUserMenu() {
  return service.get<IDataType>({
    url: SystemAPI.UserMenus
  });
}

// 获取用户菜单
export function getUserMenuByRoleId(id: number) {
  return service.get<IDataType>({
    url: `${SystemAPI.UserMenu}${id}/menu`
  });
}

// 获取菜单列表（添加和修改用）
export function getUserMenuList() {
  return service.get<IDataType>({
    url: SystemAPI.UserMenuList
  });
}

// 获取单个菜单
export function getUserMenuById(id: number) {
  return service.get<IDataType>({
    url: `${SystemAPI.UserMenuById}/${id}`
  });
}

// 保存菜单
export function saveUserMenu(data: menuItemType) {
  return service.post<IDataType>({
    url: SystemAPI.UserMenuSave,
    data
  });
}

// 修改菜单
export function updateUserMenu(data: menuItemType) {
  return service.post<IDataType>({
    url: SystemAPI.UserMenuUpdate,
    data
  });
}
// 删除菜单
export function deleteUserMenu(id: number) {
  return service.post<IDataType>({
    url: `${SystemAPI.UserMenuDelete}${id}`
  });
}
