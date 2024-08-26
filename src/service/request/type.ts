/**
 * config 部分参数类型
 * interceptors
 * showLoading
 * */

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface MyRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: AxiosError) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (errpr: AxiosError) => any;
}
export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyRequestInterceptors<T>;
  showLoading?: boolean;
}

export interface responseType {
  code: number;
  data: any;
  msg: string;
}
