import { service } from '@/service';
import type { IAccount, IDataType, ILoginResult } from './type';

enum LoginAPI {
  AccountLogin = '/sys/login', // 登录接口
  LoginUserInfo = '/users/' // 登录用户信息
}

// 登录接口
export function accountLogin(account: IAccount) {
  return service.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}
// 登录用户信息
export function getUserInfoById(id: number) {
  return service.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  });
}
