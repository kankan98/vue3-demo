import type { tableColumnPropType, tableType } from '@/base-ui/table/src/types';

export const contentTableConfig: tableType<tableColumnPropType> = {
  // 表格props配置
  tableColumnPropList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '菜单级别', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100', slotName: 'icon' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    // {
    //   prop: 'createAt',
    //   label: '创建时间',
    //   minWidth: '200',
    //   slotName: 'createAt'
    // },
    // {
    //   prop: 'updateAt',
    //   label: '更新时间',
    //   minWidth: '200',
    //   slotName: 'updateAt'
    // },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handler'
    }
  ],
  // 是否展示序号
  showIndexColumn: false,
  showSelectColumn: false,
  showPagination: false,
  layout: 'total, sizes, prev, pager, next, jumper',
  pageSizes: [10, 20, 30, 40],
  childrenProps: {
    rowKey: 'menuId',
    treeProp: {
      children: 'list',
      hasChildren: 'hasList'
    }
  }
};
