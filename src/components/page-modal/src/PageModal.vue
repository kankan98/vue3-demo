<template>
  <el-dialog
    v-model="dialogVisible"
    :title="dialogTitle"
    width="30%"
    destroy-on-close
    center
  >
    <kk-form v-model="formData" v-bind="modalFormConfig"></kk-form>
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmClick"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
// 表单
import KkForm from '@/base-ui/form/src/index.vue';

const emit = defineEmits(['add', 'edit']);
const props = defineProps({
  modalFormConfig: {
    type: Object,
    required: true
  },
  // 表单初始值
  initInfo: {
    type: Object,
    default: () => ({})
  },
  // 菜单权限相关信息
  otherInfo: {
    type: Object,
    default: () => ({})
  },
  dialogTitle: {
    type: String,
    default: '新建'
  },
  pageName: {
    type: String,
    required: true
  }
});
// 对话框
const dialogVisible = ref(false);

const formData = ref<any>({});
// 监听表单初始值动态添加到formData
watch(
  () => props.initInfo,
  (newValue) => {
    for (const item of props.modalFormConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`];
    }
  }
);

// 点击确定之后的逻辑

// 发送初始化请求（完整的role/department)

const handleConfirmClick = () => {
  if (Object.keys(props.initInfo).length) {
    // 编辑
    emit('edit');
  } else {
    // 新建
    emit('add');
  }
  dialogVisible.value = false;
};
defineExpose({
  dialogVisible
});
</script>
