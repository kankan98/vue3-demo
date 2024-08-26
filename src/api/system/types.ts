export interface IUserList {
  list: any[];
  totalCount: number;
}

export interface IDataType<T = any> {
  code: number;
  data: T;
  msg: string;
}

export interface menuItemType {
  menuId?: number;
  type: number;
  name: string;
  parentId: number;
  /** 菜单域，0-内部菜单，1-项目菜单 */
  realm?: number;
  url: string;
  perms?: string;
  orderNum: number;
  icon?: any;
}
