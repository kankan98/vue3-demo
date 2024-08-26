export type FormDataType = {
  /** 菜单名称 */
  name: string;
  /** 菜单级别 */
  type: string;
  /** 菜单路径 */
  url: string;
  /** 排序 */
  orderNum: number;
  /** 图标 */
  icon?: string;
  /** 父级菜单 */
  parentId: number;
  /** 权限 */
  perms?: string;

  [key: string]: any; // 添加字符串索引签名
  menuId?: number;
};
