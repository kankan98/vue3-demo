import type { IForm } from '@/base-ui/form';
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '菜单名称',
      // rules: [],
      placeholder: '请输入菜单名称'
    },
    {
      field: 'type',
      type: 'select',
      label: '菜单级别',
      // rules: [],
      placeholder: '请选择菜单级别',
      options: [
        {
          label: '一级菜单',
          value: 0
        },
        {
          label: '二级菜单',
          value: 1
        },
        {
          label: '按钮',
          value: 2
        }
      ]
    },
    {
      field: 'url',
      label: '菜单路径',
      type: 'input',
      // rules: [],
      placeholder: '请输入菜单路径(例如：sys/menu)'
    },
    {
      field: 'orderNum',
      label: '排序',
      type: 'input',
      // rules: [],
      placeholder: '请输入排序(例如：1)'
    },
    {
      field: 'icon',
      label: '菜单图标',
      type: 'custom',
      slotName: 'icon'
      // rules: [],
      // placeholder: '请选择菜单图标'
    },
    {
      field: 'parentId',
      label: '上级菜单',
      type: 'treeSelect',
      options: [],
      placeholder: '请选择父级菜单',
      otherOptions: {
        data: [],
        checkStrictly: true,
        renderAfterExpand: false,
        showCheckbox: true,
        checkOnClickNode: true
      }
    },
    {
      field: 'perms',
      label: '权限',
      type: 'input',
      // rules: [],
      placeholder: '请输入权限（例如：system:menu:add）'
    }
    // {
    //   field: 'test',
    //   label: 'custom',
    //   type: 'custom',
    //   slotName: 'custom'
    // }
  ],
  formStyle: {
    padding: '0 20px'
  },

  itemStyle: {
    padding: 0,
    width: '100%'
  },
  colLayout: {
    span: 24
  }
};
