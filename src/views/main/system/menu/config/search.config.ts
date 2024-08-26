import type { IForm } from '@/base-ui/form';

export const searchFormConfig: IForm = {
  labelWidth: '80px',
  itemStyle: {
    width: '100%',
    padding: '10px 0'
  },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 12,
    xs: 24
  },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'ID',
      // rules: [],
      placeholder: '请输入ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '角色',
      // rules: [],
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限',
      // rules: [],
      placeholder: '请输入权限'
    },
    {
      field: 'createAt',
      type: 'datePicker',
      label: '创建时间',
      // rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange',
        rangeSeparator: '-',
        style: 'width: 100%'
      }
    }
  ]
};
