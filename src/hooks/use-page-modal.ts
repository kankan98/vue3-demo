import { ref } from 'vue';
import PageModal from '@/components/page-modal';

type CallBackFn = (item?: any) => void;

export function usePageModal(
  newCallBack?: CallBackFn,
  editCallBack?: CallBackFn
) {
  // 表单ref
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  // 表单初始值
  const initInfo = ref({});
  // 对话框标题序号（1为新建、2为编辑）
  const dialogTitleIndex = ref(0);
  const handleNewData: any = () => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
      initInfo.value = {};
      dialogTitleIndex.value = 1;
    }
    newCallBack && newCallBack();
  };
  const handleEditData: any = (item: any) => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
      initInfo.value = { ...item };
      dialogTitleIndex.value = 2;
    }
    editCallBack && editCallBack(item);
  };

  return [
    pageModalRef,
    initInfo,
    handleNewData,
    handleEditData,
    dialogTitleIndex
  ];
}
