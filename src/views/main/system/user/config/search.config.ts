import type { IForm } from '@/base-ui/form';

export const searchFormConfig: IForm = {
  labelWidth: '80px',
  itemStyle: {
    width: '100%',
    padding: '5px 0'
  },
  colLayout: {
    xl: 6,
    lg: 6,
    md: 8,
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
      label: '用户名',
      // rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      // rules: [],
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号',
      // rules: [],
      placeholder: '请输入手机号',
      otherOptions: {
        style: 'width: 100%'
      }
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ],
      otherOptions: {
        style: 'width: 100%'
      }
    },
    {
      field: 'createAt',
      type: 'datepicker',
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
