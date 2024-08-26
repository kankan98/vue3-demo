import type { IForm } from '@/base-ui/form';
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      // rules: [],
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      // rules: [],
      placeholder: '请输入角色介绍'
    }
  ],
  formStyle: {},

  itemStyle: {
    padding: 0,
    width: '100%'
  },
  colLayout: {
    span: 24
  }
};
