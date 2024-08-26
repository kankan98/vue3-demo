<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      :model="account"
      :rules="rules"
      size="large"
    >
      <el-form-item prop="username">
        <el-input
          v-model="account.username"
          placeholder="账号"
          prefix-icon="User"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="account.password"
          placeholder="密码"
          prefix-icon="Lock"
        ></el-input>
      </el-form-item>
      <el-form-item prop="identifycode">
        <el-input
          name="identifycode"
          style="width: 178px"
          type="text"
          v-model="account.captcha"
          :maxlength="6"
          autoComplete="on"
          placeholder="请输入验证码"
        />
        <img
          id="captcha_code"
          :src="captchaCode"
          class="login_indentify_img"
          @click="refreshCaptcha"
        />
        <!-- &lt;!&ndash; <s-identify v-on:refreshCode="refreshCode" :identifyCode="loginForm.identifyCode"></s-identify> &ndash;&gt; -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ElForm } from 'element-plus';
import localCache from '@/utils/cache';
import { rules } from '../config/account-config';
import { useRoute, useRouter } from 'vue-router';
import { BASE_URL } from '../../../service/request/config';
import { useLoginStore } from "@/stores/login"
import CryptoJS from 'crypto-js'
import type { IAccount } from '@/api/login/type';
const loginState = useLoginStore()

const route = useRoute();
// 路由守卫 query: { redirect:  }
const account = reactive({
  username: localCache.getCache('username') ?? '',
  password: localCache.getCache('password') ?? '',
  captcha: '',
  uuid: ''
});
// 验证码
const captchaCode = ref();
const formRef = ref<InstanceType<typeof ElForm>>();
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate(async (valid) => {
    if (!valid) return;
    // 1.进行登陆
    const currentAccount: IAccount = {
      username: encryptedDes(account.username),
      password: encryptedDes(account.password),
      captcha: account.captcha,
      uuid: account.uuid
    }
    const result = await loginState.accountLoginAction({
      ...currentAccount,
      ...route.query,

    });
    // 2.判断是否需要记住密码
    if (result && isKeepPassword) {
      // 本地缓存
      localCache.setCache('username', account.username);
      localCache.setCache('password', account.password);
    } else {
      refreshCaptcha();
      localCache.deleteCache('username');
      localCache.deleteCache('password');
    }
  });
};
//dse加密
const encryptedDes = (plaintext: string) => {
  // 假设key是你的密钥
  const key = CryptoJS.enc.Utf8.parse('BVCAGB9XpI17%K#c');
  const srcs = CryptoJS.enc.Utf8.parse(plaintext);

  // 使用des方法加密
  const encrypted = CryptoJS.DES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });

  const bytes = atob(encrypted.toString()).split('').map(char => char.charCodeAt(0));
  const hexString = bytes.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hexString;
};
// 刷新验证码
const refreshCaptcha = () => {
  account.uuid = getUUID();
  captchaCode.value = BASE_URL + '/captcha.jpg?uuid=' + account.uuid + '&t=' + new Date().getTime();
};
// const getUUID = () => {

//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
//     return (
//       c === 'x' ? (Math.random() * 16) | 0 : (r & 0x3) | 0x8
//     ).toString(16);
//   });
// };
const getUUID = () => {
  // captcha 生成的uuid
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  }
  );
};
onMounted(() => {
  refreshCaptcha()
})

defineExpose({
  loginAction
});

</script>

<style lang="scss" scoped>
.login-account {
  margin-top: 20px;

  :deep(.el-form) {
    .el-form-item {
      .el-form-item__content {
        display: flex;
        justify-content: space-between;
      }


      .el-form-item__label {
        line-height: 40px;
      }
    }
  }

  .login_indentify_img {
    width: 160px;
    height: 40px;
    margin: 0;

    cursor: pointer;
  }
}
</style>
