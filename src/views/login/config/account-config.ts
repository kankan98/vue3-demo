import { reactive } from 'vue';

export const rules = reactive({
  username: [
    {
      required: true,
      message: '账号不能为空',
      trigger: 'blur'
    }
    // {
    //   pattern: /^[a-z0-9]{5,20}$/,
    //   message: '账号长度为5-20位字符',
    //   trigger: 'blur'
    // }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码长度应大于3',
      trigger: 'blur'
    }
  ]
});
