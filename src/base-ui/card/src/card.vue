<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  }
});
</script>

<style scoped lang="scss">
.box-card {
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05) !important;

  .card-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
  }
}
</style>
