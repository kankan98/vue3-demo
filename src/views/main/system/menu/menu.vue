<template>
  <div class="menu">
    <!-- <kk-form v-bind="searchFormConfig" v-model="formData" ref="kkFormRef">
      <template v-slot:header></template>
      <template #footer>
        <el-button icon="Refresh" @click="handleReset">重置</el-button>
        <el-button type="primary" icon="search" @click="handleSearch"
          >搜索</el-button
        >
      </template>
    </kk-form> -->
    <div class="flex items-center justify-between p-5 pb-0">
      <div class="text-xl font-bold">菜单列表</div>
      <div class="items-center">
        <el-button type="primary" @click="handleAddClick">新增</el-button>
      </div>
    </div>
    <kk-table
      :data="tableData"
      :total="pageInfo.total"
      v-bind="contentTableConfig"
      @updatePage="updatePage"
      :pageInfo="pageInfo"
    >
      <!-- 具名作用域插槽 （表格列中）-->
      <!-- 具名插槽插入内容status，作用于插槽获取子组件内的row -->
      <!-- 通用插槽 -->
      <template v-slot:icon="{ row }">
        <el-icon><component :is="row.icon"></component></el-icon>
        <!-- <kk-icon name="Setting"></kk-icon> -->
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button type="primary" link size="small" icon="Edit" @click="handleEditClick(scope.row)"> 编辑 </el-button>
          <el-button type="danger" link size="small" icon="Delete" @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
    </kk-table>

    <!-- 显示对话框 -->
    <kk-dialog v-model="dialogVisible" center @confirm="handleConfirm" @cancel="handleCancel">
      <template v-slot:header>
        <div>{{ isEdit ? '编辑菜单' : '新增菜单' }}</div>
      </template>
      <kk-form v-bind="currentModalConfig" v-model="formData" ref="kkFormRef">
        <template #icon>
          <el-input v-model="formData.icon" clearable>
            <template #append>
              <el-popover placement="left" :width="362" trigger="click" ref="popoverRef">
                <el-input v-model="saerchIcon" clearable @input="handleInput($event)" class="pb-3">
                  <template #prefix>
                    <el-icon><Search /></el-icon
                  ></template>
                </el-input>
                <div class="flex flex-wrap items-center">
                  <div
                    v-for="item in currentIconList"
                    :key="item.name"
                    class="hover:text-[#409eff]] m-1 flex h-[40px] w-[40px] cursor-pointer items-center justify-center border border-[#e5e7eb] text-center transition-all duration-300 hover:border-[#409eff] hover:text-[#409eff]"
                    @click="handleIconClick(item.name)"
                  >
                    <el-icon size="18"><component :is="item.name"></component></el-icon>
                  </div>
                </div>

                <kk-pagination
                  :total="filterIconList.length"
                  :pageInfo="iconPageInfo"
                  size="small"
                  background
                  layout="prev, pager, next"
                  :page-sizes="[10, 20, 50, 100]"
                  @handlePageDataChange="handleIconPageDataChange"
                ></kk-pagination>

                <template #reference>
                  <el-button class="cursor-pointer">
                    <el-icon> <Search /> </el-icon>
                  </el-button>
                </template>
              </el-popover>
            </template>
          </el-input>
        </template>
      </kk-form>
    </kk-dialog>
  </div>
</template>

<script setup lang="ts">
import KkTable from '@/base-ui/table';
import KkDialog from '@/base-ui/dialog';
import KkPagination from '@/base-ui/pagination';
import KkIcon from '@/base-ui/icon/index.vue';
import KkForm from '@/base-ui/form';
import { contentTableConfig } from './config/content.config';
import { modalConfig } from './config/modal.config';
import type { FormDataType } from './config/types.ts';
import type { PageInfoType } from '@/base-ui/table/src/types.ts';
import { systemAPI } from '@/api/index.ts';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import type { FormInstance, PopoverInstance } from 'element-plus';
import type { menuItemType } from '@/api/system/types.ts';
// 是否显示新增/编辑菜单弹出框
const dialogVisible = ref(false);
// 是否是编辑状态
const isEdit = ref(false);
// 菜单列表
const tableData = reactive<any[]>([]);
// 编辑表单信息
const formOriginData: any = {};
for (const item of modalConfig.formItems) {
  formOriginData[item.field] = '';
}
// 表单信息
const formData = ref<FormDataType>(JSON.parse(JSON.stringify(formOriginData)));
// 表单配置项
const currentModalConfig = ref();
const kkFormRef = ref<FormInstance>();
// 分页信息
const pageInfo = reactive<PageInfoType>({
  currentPage: 1,
  pageSize: 10,
  total: 0
});

const popoverRef = ref<PopoverInstance>();
const saerchIcon = ref();
const filterIconList = reactive(Object.keys(ElementPlusIconsVue));
const handleInput = (e: any) => {
  console.log(e);
  const res = Object.keys(ElementPlusIconsVue).filter((item: any) => {
    if (String(item).toLowerCase().includes(e.toLowerCase())) {
      return item;
    }
  });
  filterIconList.length = 0;
  filterIconList.push(...res);
};
// 图标分页
const iconPageInfo = reactive({
  currentPage: 1,
  pageSize: 49
});
// 当前图标列表
const currentIconList = computed(() => {
  return filterIconList
    .slice((iconPageInfo.currentPage - 1) * iconPageInfo.pageSize, iconPageInfo.currentPage * iconPageInfo.pageSize)
    .map((item) => {
      return {
        name: item
      };
    });
});
// 翻页图标
const handleIconPageDataChange = (e: any) => {
  console.log('翻页图标');
  iconPageInfo.currentPage = e.currentPage;
  iconPageInfo.pageSize = e.pageSize;
};

// 分页切换
const updatePage = (e: PageInfoType) => {
  console.log('updatePage');
  pageInfo.currentPage = e.currentPage;
  pageInfo.pageSize = e.pageSize;
};
const handleIconClick = (name: string) => {
  formData.value.icon = name;
  popoverRef.value?.hide();
};
// 获取菜单列表
const getMenuList = async () => {
  const res = await systemAPI.getUserMenu();
  console.log(res);
  tableData.length = 0;
  tableData.push(...traverseArray(res.data.menuList));
  console.log(tableData);
};
const traverseArray = (arr: any[]) => {
  return arr.map((item: any): any => {
    if (item.list && Array.isArray(item.list)) {
      const { list, ...other } = item;
      return {
        ...other,
        children: traverseArray(list)
      };
    } else {
      const { list, ...other } = item;
      return {
        ...other,
        children: []
      };
    }
  });
};
// 新增菜单
const handleAddClick = () => {
  console.log('新增菜单');
  dialogVisible.value = true;
  isEdit.value = false;
  for (let i in formData.value) {
    formData.value[i as keyof FormDataType] = formOriginData[i];
  }
};
// 编辑菜单
const handleEditClick = (e: any) => {
  console.log(e);
  dialogVisible.value = true;
  isEdit.value = true;
  for (let i in formData.value) {
    formData.value[i as keyof FormDataType] = e[i];
  }
  formData.value.menuId = e.menuId;
};
// 删除菜单
const handleDeleteClick = (e: any) => {
  console.log(e);
};

// 提交对话框
const handleConfirm = async () => {
  console.log('关闭对话框');
  const params: menuItemType = {
    name: formData.value.name,
    type: Number(formData.value.type),
    url: formData.value.url,
    realm: 0,
    orderNum: Number(formData.value.orderNum),
    icon: formData.value.icon,
    parentId: formData.value.parentId,
    perms: formData.value.perms
  };
  if (isEdit.value) {
    params.menuId = formData.value.menuId;
    const res = await systemAPI.updateUserMenu(params);
    getMenuList();
    console.log(res);
  } else {
    const res = await systemAPI.saveUserMenu(params);
    getMenuList();
    console.log(res);
  }
};
// 关闭对话框
const handleCancel = () => {
  console.log('关闭对话框');
};

const traverseData = (arr: any[]) => {
  return arr.map((item: any): any => {
    if (item.children && item.children.length > 0) {
      return {
        value: item.menuId,
        label: item.name,
        children: traverseData(item.children)
      };
    } else {
      return {
        value: item.menuId,
        label: item.name
      };
    }
  });
};
watch(
  () => tableData,
  () => {
    console.log(tableData);
    currentModalConfig.value = {
      ...modalConfig,
      formItems: modalConfig.formItems.map((item) => {
        if (item.field === 'parentId') {
          item.otherOptions = {
            ...item.otherOptions,
            data: traverseData(tableData)
          };
          console.log(item);
        }

        return item;
      })
    };
    console.log(currentModalConfig.value);
  },
  {
    deep: true
  }
);

getMenuList();
</script>

<style scoped lang="scss">
.header {
  padding: 20px 20px 0 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    display: flex;
    align-items: center;
  }
}
</style>
