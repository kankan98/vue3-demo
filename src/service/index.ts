// service统一出口
import Request from './request';
import { BASE_URL, TIME_OUT } from './request/config';

import localCache from '@/utils/cache';

const service = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 当前实例的拦截器  创建实例时作为构造函数的参数config的一部分
    requestInterceptor: (config) => {
      // console.log('请求成功的拦截');
      const token = localCache.getCache('token');
      if (token && config.headers) {
        config.headers.token = token;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败的拦截');
      return err;
    },
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截');
      return res;
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败的拦截');
      return err;
    }
  }
});
export { service };
