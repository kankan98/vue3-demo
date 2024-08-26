import { systemAPI } from '@/api';
import { defineStore } from 'pinia';
interface State {
  name: string;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}
export const useMainStore = defineStore('main', {
  state: (): State => ({
    name: 'kk',
    entireDepartment: [],
    entireRole: [],
    entireMenu: []
  }),
  getters: {},
  actions: {
    // 保存部门数据
    setEntireDepartment(list: any[]) {
      this.entireDepartment = list;
    },
    // 保存角色数据
    setEntireRole(list: any[]) {
      this.entireRole = list;
    },
    // 保存菜单数据
    setEntireMenu(list: any[]) {
      this.entireMenu = list;
    },
    // 请求部门数据
    async getInitDataAction() {
      const {
        data: { list: deptList }
      } = await systemAPI.getPageList('/department/list', {
        offset: 0,
        size: 1000
      });
      // 请求角色数据
      const {
        data: { list: roleList }
      } = await systemAPI.getPageList('/role/list', {
        offset: 0,
        size: 1000
      });
      // 请求菜单数据
      const {
        data: { list: menuList }
      } = await systemAPI.getPageList('/menu/list', {});
      // 保存部门数据
      this.setEntireDepartment(deptList);
      // 保存角色数据
      this.setEntireRole(roleList);
      // 保存菜单数据
      this.setEntireMenu(menuList);
    }
  }
});
