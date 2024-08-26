import { useLoginStore } from '@/stores/login';

export function usePermission(pageName: string, handleName: string) {
  const loginStore = useLoginStore();
  const permissions = loginStore.permissions;
  const verifyPermission = `system:${pageName}:${handleName}`;
  return !!permissions.find((item: string) => item === verifyPermission);
}
