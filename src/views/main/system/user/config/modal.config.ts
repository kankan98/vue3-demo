import type { IForm } from '@/base-ui/form';
export const modalConfig: IForm = {
  formItems: [
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
      field: 'password',
      type: 'input',
      label: '密码',
      // rules: [],
      placeholder: '请输入密码',
      isHidden: true
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
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: [],
      otherOptions: {
        style: 'width: 100%'
      }
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: [],
      otherOptions: {
        style: 'width: 100%'
      }
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
