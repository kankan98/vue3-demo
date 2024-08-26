<template>
  <!-- 搜索部分所有内容 -->
  <div class="page-search">
    <kk-form v-bind="searchFormConfig" v-model="formData" ref="kkFormRef">
      <template v-slot:header></template>
      <template #footer>
        <el-button icon="Refresh" @click="handleReset">重置</el-button>
        <el-button type="primary" icon="search" @click="handleSearch"
          >搜索</el-button
        >
      </template>
    </kk-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import KkForm from '@/base-ui/form';

// import { useStore } from '@/store';

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'searchBtnClick'],
  components: {
    KkForm
  },
  setup(props, { emit }) {
    // const store = useStore();
    // 1.优化一： formData中的属性应该由当前页面的配置文件动态决定
    const formItems = props.searchFormConfig.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = '';
    }
    // 双向绑定值formData  属性为自己定义的，需要和配置文件config的field属性对应（按需导入）
    const formData = ref(formOriginData);

    // 2. 优化二： 当用户点击重置(调用子组件的重置方法清空数据)
    // tip: 此处也可以在子组件中不采用双向绑定v-model，手动书写emit事件提交到父组件进行绑定，当输入框内容修改时，emit整个新的 modelValue 到当前页面
    const kkFormRef = ref<InstanceType<typeof KkForm>>();
    const handleReset = () => {
      // 清空表单(此处调用的子组件为setup（）方式，所以有可选链)
      kkFormRef.value?.handleSonReset();
      // 此处也可用element的resetForm方法进行重置，方式同上
      // 重新获取数据(提交到父组件（如user）)
      emit('resetBtnClick');
    };

    // 3. 优化三： 当用户点击搜索
    const handleSearch = () => {
      emit('searchBtnClick', formData.value);
    };

    return {
      kkFormRef,
      formData,
      handleReset,
      handleSearch
    };
  }
});
</script>

<style lang="scss" scoped></style>
