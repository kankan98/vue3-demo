<template>
  <div class="login-panel">
    <h1 class="title">智能插座管理系统</h1>
    <el-tabs
      v-model="currentTab"
      type="border-card"
      stretch
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="tabs flex">快速登录</span>
        </template>
        <LoginAccount
          ref="accountRef"
          isKeepPassword="isKeepPassword"
        />
      </el-tab-pane>
      <!-- <el-tab-pane name="phone">
        <template #label>
          <span class="tabs flex">手机登录</span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane> -->
      <div class="account-control flex">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>

      <el-button
        type="primary"
        size="large"
        class="login-btn"
        @click="handleLoginClick"
      >
        立即登录
      </el-button>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import LoginPhone from './LoginPhone.vue';
import LoginAccount from './LoginAccount.vue';

export default defineComponent({
  components: {
    // LoginPhone,
    LoginAccount
  },
  setup() {
    // 定义属性
    const isKeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>(); //获取组件对象实例的类型
    // const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    const currentTab = ref<string>('account');
    // 定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value);
      } else {
        // phoneRef.value?.loginAction(isKeepPassword.value);
      }
    };
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      currentTab
    };
  }
});
</script>

<style lang="scss" scoped>
.login-panel {
  width: 400px;
  margin-top: -100px;

  .title {
    text-align: center;
    margin-bottom: 30px;
  }

  .el-tabs {
    .tabs .el-icon {
      margin-right: 5px;
    }

    .account-control {
      margin-bottom: 10px;
      justify-content: space-between;

      .el-checkbox {
        margin-right: 10px;
      }
    }

    .login-btn {
      margin-bottom: 10px;
      width: 100%;
    }
  }
}
</style>
