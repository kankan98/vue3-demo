<template>
  <el-breadcrumb
    separator="/"
    class="breadcrumb"
  >
    <template
      v-for="item in breadcrumbs"
      :key="item.name"
    >
      <el-breadcrumb-item :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import type { IBreadcrumb } from '../types';
interface IProps {
  breadcrumbs: IBreadcrumb[];
}
const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  flex: 1;

  .el-breadcrumb__inner {
    line-height: 60px;
    height: 60px;
  }
}
</style>
