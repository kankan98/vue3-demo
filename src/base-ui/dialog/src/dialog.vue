<template>
  <div class="kk-dialog">
    <el-dialog :model-value="modelValue" v-bind="{ ...$attrs, ...$props }" @close="handleCancel">
      <template #header="{ close, titleId, titleClass }">
        <slot name="header" :close="close" :title-id="titleId" :title-class="titleClass">
          <div>{{ title }}</div>
        </slot>
      </template>
      <slot name="default"> </slot>
      <template #footer>
        <slot name="footer">
          <div class="dialog-footer">
            <el-button @click="handleCancel">取消</el-button>
            <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
          </div>
        </slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    showClose?: boolean; // 	是否显示关闭按钮
    title?: string; // 	标题
    width?: string | number; // 	Dialog 的宽度，单位像素
    center?: boolean; // 	是否将弹层居中
    alignCenter?: boolean; // 	是否将弹层居中
    appendToBody?: boolean; // 	Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true
    draggable?: boolean; // 	是否可以通过拖拽 Dialog 的头部来移动 Dialog
  }>(),
  {
    modelValue: false,
    showClose: true,
    title: '标题',
    width: '500',
    center: false,
    alignCenter: true,
    appendToBody: true,
    draggable: true
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
  (e: 'cancel'): void;
  (e: 'confirm'): void;
}>();

const handleCancel = () => {
  emit('update:modelValue', false);
  emit('cancel');
};
const handleConfirm = () => {
  emit('update:modelValue', false);
  emit('confirm');
};
</script>

<style scoped></style>
