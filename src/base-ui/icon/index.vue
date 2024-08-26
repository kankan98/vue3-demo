<template>
  <el-icon :size="size">
    <component :is="name"></component>
  </el-icon>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    required: true,
    type: String
  },
  size: {
    type: [String, Number],
    default: 17
  }
});
</script>

<style lang="scss" scoped></style>
