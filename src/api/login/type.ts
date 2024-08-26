export interface IAccount {
  username: string;
  password: number | string;
  captcha: string;
  uuid: string;
  redirect?: string;
}
export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}

export interface IDataType<T = any> {
  code: number;
  data: T;
  msg: string;
}
