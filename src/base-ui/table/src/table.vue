<template>
  <div class="kk-table">
    <el-table
      ref="tableRef"
      :data="data"
      v-loadMore.expand="{
        func: loadMore,
        target: '.el-scrollbar__wrap',
        delay
      }"
      border
      style="width: 100%"
      :summaryMethod="handleSummaryMethod"
      header-align="center"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column v-if="showSelectColumn" type="selection" align="center" width="60"></el-table-column>
      <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80"></el-table-column>
      <!-- 主体部分 -->
      <template v-for="propItem in tableColumnPropList as any" :key="propItem.prop">
        <el-table-column align="center" show-overflow-tooltip v-bind="propItem">
          <!-- 该区域普通文本内容不传 -->
          <!-- 饿了么的作用域插槽 -->
          <template #default="scope">
            <!-- 具名作用域插槽 -->
            <!-- 用具名插槽代替默认内容, 作用域插槽向父组件传入row -->
            <slot :name="propItem.slotName" :row="scope.row">
              <!-- 当插槽激活时，下面的默认内容会被替换 -->
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-if="showPagination"
          v-model:currentPage="pageInfo.currentPage"
          :page-sizes="pageSizes"
          :page-size="pageInfo.pageSize"
          :layout="layout"
          :total="pageInfo.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PageInfoType, tableColumnPropType, SummaryMethodProps } from './types';

const props = defineProps({
  //表格数据列表
  data: {
    type: Array,
    required: true
  },

  // 以下为配置文件props
  // 表格每行的属性列表
  tableColumnPropList: {
    type: Array as PropType<tableColumnPropType[]>,
    required: true
  },
  //是否展示序号列
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  //是否展示选择列
  showSelectColumn: {
    type: Boolean,
    default: false
  },

  // 保留首页或其他选中数据时的选中状态(el-table-column的reserve-selecetion属性)
  reserveSelection: {
    type: Boolean,
    default: false
  },
  // 需要求和的列的索引数组
  summaryIndexList: {
    type: Array as PropType<number[]>,
    default: () => []
  },
  // 求和前缀
  summaryPrefix: {
    type: String,
    default: ''
  },
  // 数据改变是否回到顶部
  isBackTop: {
    type: Boolean,
    default: true
  },
  // 加载更多的防抖延时
  delay: {
    type: Number,
    default: 200
  },
  // checkbox可选数据表格索引列表
  checkList: {
    type: Array as PropType<number[]>
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  // 是否显示分页
  showPagination: {
    type: Boolean,
    default: true
  },
  // 分页数据
  pageInfo: {
    type: Object as PropType<PageInfoType>,
    default: () => ({ currentPage: 1, pageSize: 10, total: 0 })
  },
  // 每页大小
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 50, 100]
  },
  // 分页布局
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  }
});

const emit = defineEmits<{
  (e: 'updatePage', pageInfo: PageInfoType): void;
  (e: 'selectionChange', val: any[]): void;
  (e: 'loadMore'): void;
}>();

const tableRef = ref();

// 列求和方法
const handleSummaryMethod = (params: SummaryMethodProps<keyof typeof props.data>): string[] => {
  const { columns, data } = params;
  const sums: string[] = [];
  columns.forEach((column, index) => {
    if (props.summaryIndexList.includes(index)) {
      const values = data.map((item: keyof typeof props.data) =>
        Number(item[column.property as keyof (keyof typeof props.data)])
      );
      if (!values.every((value) => Number.isNaN(value))) {
        sums[index] = `${props.summaryPrefix}${values
          .reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0)
          .toFixed(2)}`;
      } else {
        sums[index] = '——';
      }
    }
  });
  return sums;
};
const loadMore = () => {
  emit('loadMore');
};
const pageInfo = reactive(props.pageInfo);

watch(
  props.pageInfo,
  () => {
    pageInfo.currentPage = props.pageInfo.currentPage;
    pageInfo.pageSize = props.pageInfo.pageSize;
    pageInfo.total = props.pageInfo.total;
  },
  {
    deep: true
  }
);
// 	当选择项发生变化时会触发该事件
const handleSelectionChange = (val: any[]) => {
  emit('selectionChange', val);
};
const handleCurrentChange = (value: any) => {
  // currentPage已双向绑定，无需赋值
  emit('updatePage', pageInfo);
};
const handleSizeChange = (value: any) => {
  pageInfo.pageSize = value;
  pageInfo.currentPage = 1;
  emit('updatePage', pageInfo);
};
</script>

<style lang="scss" scoped>
.kk-table {
  padding: 20px;

  .footer {
    margin-top: 20px;
  }
}
</style>
