export interface IMenuItem {
  list?: IMenuItem[] | null;
  icon: string;
  menuId: number;
  name: string;
  parentId: number;
  sort: number;
  type: number;
  url: string;
  path?: string;
}
