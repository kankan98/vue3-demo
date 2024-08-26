<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      :model="phone"
      :rules="rules"
      size="large"
    >
      <el-form-item prop="num">
        <el-input
          v-model="phone.num"
          placeholder="手机号"
          prefix-icon="Iphone"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <div class="flex verify-code">
          <el-input
            type="password"
            v-model="phone.code"
            placeholder="验证码"
          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <svg
                  class="icon"
                  aria-hidden="true"
                >
                  <use xlink:href="#icon-yanzhengma"></use>
                </svg>
              </el-icon>
            </template>
          </el-input>
          <el-button
            type="primary"
            class="get-code"
          >获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { ElForm } from 'element-plus';
import localCache from '@/utils/cache';

import { rules } from '../config/phone-config';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const phone = reactive({
      num: localCache.getCache('phonenum') ?? '',
      code: ''
    });

    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (!valid) return;
        // 1.判断是否需要记住密码
        if (isKeepPassword) {
          // 本地缓存
          localCache.setCache('phonenum', phone.num);
        } else {
          localCache.deleteCache('phonenum');
        }
        // 2.进行登陆
        store.dispatch('login/phoneLoginAction', { ...phone });
      });
    };
    return {
      phone,
      rules,
      loginAction,
      formRef
    };
  }
});
</script>

<style lang="scss" scoped>
.login-account {
  margin-top: 20px;

  :deep(.el-form) {
    .el-form-item {
      .verify-code {
        width: 100%;
      }

      .get-code {
        margin-left: 20px;
      }

      .el-form-item__label {
        line-height: 40px;
      }
    }
  }
}
</style>
