<template>
  <div class="user"></div>
</template>

<script lang="ts" setup>
// user页面 -> page/search公共组件 -> table/form子组件

// pageName!!!当前页面的类型（请求接口需用到的区分参数）
// 搜索组件
// import PageSearch from '@/components/page-search';
// 表格内容组件
// import PageContent from '@/components/page-content';
// 表单组件
// import PageModal from '@/components/page-modal';
// 搜索配置
import { searchFormConfig } from './config/search.config';
// 表格配置
import { contentTableConfig } from './config/content.config';

// 表单配置
import { modalConfig } from './config/modal.config';

// hooks

import { usePageModal } from '@/hooks/use-page-modal';
// import { useStore } from '@/store';

// pageModel相关hook逻辑(单个表单项的显示和隐藏)
// 1. 处理密码的逻辑
const newCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  );
  passwordItem!.isHidden = false;
};
const editCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === 'password'
  );
  passwordItem!.isHidden = true;
};
// 2. 动态添加部门和角色列表(数据字典)
// const store = useStore();
// 通过计算属性来监听vuex数据的改变
// const modalFormConfig = computed(() => {
//   const departmentItem = modalConfig.formItems.find(
//     (item) => item.field === 'departmentId'
//   );
//   departmentItem!.options = store.state.entireDepartment.map(
//     (item: { name: any; id: any }) => {
//       return { title: item.name, value: item.id };
//     }
//   );

//   const roleItem = modalConfig.formItems.find(
//     (item) => item.field === 'roleId'
//   );
//   roleItem!.options = store.state.entireRole.map(
//     (item: { name: any; id: any }) => {
//       return { title: item.name, value: item.id };
//     }
//   );
//   return modalConfig;
// });

// 表单hooks(表单ref、表单初始值、新建、编辑、对话框标题编号)
const [handleNewData, handleEditData, dialogTitleIndex] = usePageModal(
  newCallBack,
  editCallBack
);

// // 修改对话框标题
const dialogTitle = ref('');
watch(
  () => dialogTitleIndex.value,
  (newValue) => {
    dialogTitle.value = newValue === 1 ? '新建用户' : '编辑用户';
  }
);
</script>

<style lang="scss" scoped></style>
