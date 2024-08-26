import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';
// 部分常用属性如下，如需添加自行去饿了么文档添加对应属性
export interface tableType<T> {
  /**
   * 表格tableColumn属性
   */
  tableColumnPropList: T[];
  /**
   * 是否展示序号列
   */
  showIndexColumn?: boolean;
  /**
   * 是否展示选择列
   */
  showSelectColumn?: boolean;
  /**
   * 需要求和的列索引数组
   */
  summaryIndexList?: number[];
  /**
   * 求和自定义文本前缀
   */
  summaryPrefix?: string;
  /**
   * 保留首页或其他选中数据时的选中状态
   */
  reserveSelection?: boolean;
  /**
   * 加载更多的防抖延时
   */
  delay?: number;
  /**
   * 数据改变是否回到顶部
   */
  isBackTop?: boolean;
  // 是否显示分页
  showPagination?: boolean;
  // 每页大小
  pageSizes?: number[];
  // 分页布局
  layout?: string;
  childrenProps?: IChildrenProps;
}
interface IChildrenProps {
  rowKey: string;
  treeProp: any;
}
export interface tableColumnPropType {
  /**
   * 字段名称 对应列内容的字段名(非操作选项必传)
   */
  prop?: string;
  /**
   * 表格header名称
   */
  label?: string;
  /**
   * 宽度
   */
  width?: string | number;
  /**
   * 最小宽度
   */
  minWidth?: string | number;
  /**
   * 是否显示排序
   */
  sortable?: boolean | string;
  /**
   * 是否居中
   */
  align?: string;
  /**
   * 是否固定列
   */
  fixed?: string | boolean;
  /**
   * 当内容过长被隐藏时显示 tooltip
   */
  showOverflowTooltip?: boolean;
  /**
   * 插槽名：若使用table的插槽时必传，作为kk-table的具名插槽的name
   */
  slotName?: string;
  /**
   * 表头插槽名： 使用自定义表头时需要在当前列添加该属性，值为具名插槽的name
   */
  slotHeaderName?: string;
}

export interface SummaryMethodProps<T = Product> {
  // T为表格的属性类型
  /**
   * 表格列信息
   */
  columns: TableColumnCtx<T>[];
  /**
   * 表格数据
   */
  data: T[];
}

interface Product {
  /**
   * 表格列属性
   */
  id?: string;
}

export interface PageInfoType {
  currentPage: number;
  pageSize: number;
  total: number;
}
