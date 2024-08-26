interface IPropType {
  prop?: string;
  label?: string;
  width?: string;
  minWidth?: string;
  align?: string;
  slotName?: string; // 插槽名
}

interface ITableConfig<T> {
  title: string;
  propList: T[];
  showIndexColumn?: boolean;
  showSelectColumn?: boolean;
}
export const contentTableConfig: ITableConfig<IPropType> = {
  // 表格标题
  title: '角色列表',

  // 表格props配置
  propList: [
    { prop: 'id', label: 'ID', minWidth: '100', align: 'center' },
    { prop: 'name', label: '角色', minWidth: '100', align: 'center' },
    { prop: 'intro', label: '权限介绍', minWidth: '100', align: 'center' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      align: 'center',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      align: 'center',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handler'
    }
  ],
  // 是否展示序号
  showIndexColumn: true,
  showSelectColumn: true
};
