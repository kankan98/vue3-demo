type IFormType = 'input' | 'password' | 'select' | 'datePicker' | 'treeSelect' | 'custom';

export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  // 针对select
  options?: any[];
  // 针对单个表单项的特殊属性
  otherOptions?: any;
  // 是否隐藏部分表单项
  isHidden?: boolean;
  // 插槽名称
  slotName?: string;
  // 输入框头部内容插槽
  prefixSlotName?: string;
  // 输入框尾部内容插槽
  suffixSlotName?: string;
  // 前置插槽名称
  prependSlotName?: string;
  //后置插槽名称
  appendSlotName?: string;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
  formStyle?: any;
}
