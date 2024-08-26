<template>
  <div class="flex h-full w-full items-center justify-between">
    <el-icon size="20" @click="handleFoldChange" class="mr-2.5 h-3.5 w-3.5 cursor-pointer">
      <Operation />
    </el-icon>
    <kk-breadcrumb :breadcrumbs="breadcrumbs"></kk-breadcrumb>
    <user-Info></user-Info>
  </div>
</template>

<script lang="ts" setup>
import UserInfo from './UserInfo.vue';
import KkBreadcrumb from '@/base-ui/breadcrumb';

import { useLoginStore } from '@/stores/login';
import { useRoute } from 'vue-router';
import { pathMapBreadcrumbs } from '@/utils/map-menus';
const emit = defineEmits<{ (e: string, value: boolean): void }>();

const loginState = useLoginStore();
const isFold = ref(false);
const handleFoldChange = () => {
  isFold.value = !isFold.value;
  emit('foldChange', isFold.value);
};
// const store = useStore();
const route = useRoute();
const breadcrumbs = computed(() => {
  const userMenu = loginState.userMenu;
  console.log(userMenu);
  const currentPath = route.path;
  console.log(pathMapBreadcrumbs(userMenu, currentPath));
  return pathMapBreadcrumbs(userMenu, currentPath);
});
</script>

<style scoped></style>
