<template>
  <el-dropdown trigger="click" size="large" class="pr-2">
    <div class="flex cursor-pointer items-center justify-center">
      <el-avatar :src="circleUrl" style="--el-avatar-size: 36px"></el-avatar>
      <span class="ml-2 leading-8"> {{ name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="User">用户信息</el-dropdown-item>
        <el-dropdown-item icon="Setting" @click="handleToSystemUser">系统管理</el-dropdown-item>
        <el-dropdown-item icon="SwitchButton" divided @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import localCache from '@/utils/cache';
import cache from '@/utils/cache';
import getImageUrl from '@/utils/methods/getImageUrl';

const circleUrl = getImageUrl('img', 'avatar');

const name = cache.getCache('username') || cache.getCache('username', false);
// const name = computed(() => store.state.login.userInfo.name);
const router = useRouter();

// 跳转到系统管理
const handleToSystemUser = () => {
  router.push('/sys/user');
};
const logout = () => {
  localCache.deleteCache('token');
  localCache.deleteCache('userMenu');
  localCache.deleteCache('userInfo');
  router.push('/');
};
</script>

<style scoped></style>
