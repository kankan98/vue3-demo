// axios配置详情页

import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { MyRequestInterceptors, MyRequestConfig, responseType } from './type';
import { ElLoading, ElMessage } from 'element-plus';

const DEFAULT_LOADING = false;

class Request {
  instance: AxiosInstance;
  // 拦截器函数
  interceptors?: MyRequestInterceptors;
  // loading实例
  loadingInstance?: any;
  // 是否显示loading页面
  showLoading: boolean;

  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;

    // 1、从 config 中取出的拦截器是对应的实例的拦截器（最普通的用法(参考ruoyi,就是在实例添加拦截器)，该处是用类做了封装，传入的为拦截器函数）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 2、添加所有实例都有的拦截器
    // 全部实例请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例都有的拦截器:请求拦截成功');
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            fullscreen: true,
            body: true,
            background: 'rgba(0,0,0,0.5)'
          });
        }
        return config;
      },
      (err) => {
        // console.log('所有实例都有的拦截器:请求拦截失败', err);
      }
    );
    // 全部实例响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例都有的拦截器:响应拦截成功', res);
        // Loading should be closed asynchronously
        // 关闭loading
        this.loadingInstance?.close();
        const data = res.data;
        switch (data.code) {
          case 200:
            console.log('请求成功');
          case 401:
            window.location.href = '/login';
            break;
          case 403:
            console.log('没有权限');
            break;
          case 404:
            console.log('请求地址错误');
            break;
          case 500:
            console.log('服务器错误');
            break;
        }
        return data;
      },
      (err) => {
        // console.log('所有实例都有的拦截器:响应拦截失败', err);
        // Loading should be closed asynchronously
        this.loadingInstance?.close();
        if (err.response.status === 404) {
          // console.log('404错误');
        }
        return err;
      }
    );
  }
  // 3. 对 request方式的每一个单独的请求进行拦截（用的较少）
  // request方法
  request<T extends responseType>(config: MyRequestConfig<T>): Promise<T> {
    // 通过promise将请求的结果返回出去
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      /**
       * 单个接口是否需要显示loading页面
       * showloading为true进入修改showloading值为true展示loading */
      if (config.showLoading) {
        this.showLoading = config.showLoading;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单独接口的拦截器因为类型（AxiosResponse）和请求返回的泛型数据类型不一致，下面为临时处理方式(把响应拦截器的类型改为any)
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }

          this.showLoading = DEFAULT_LOADING; // 设置为false不影响后续接口（否则showloading恒为true）
          // 请求的最后结果
          if (res.code === 0) {
            if (res.msg !== 'success')
              ElMessage.success({
                showClose: true,
                message: res.msg,
                grouping: true
              });
            resolve(res);
          } else {
            ElMessage.error({ message: res.msg, grouping: true });
            resolve(res);
          }
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING;
          ElMessage.error({ grouping: true, message: err?.msg || config.url + '请求失败' });
          reject(err);
          return err;
        });
    });
  }
  //以下方法都是通过借用request方法执行获取promise返回值（结果）
  // get方法
  get<T extends responseType>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
  // post方法
  post<T extends responseType>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }
  // delete方法
  delete<T extends responseType>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }
  // patch方法
  patch<T extends responseType>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
  // put方法
  put<T extends responseType>(config: MyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' });
  }
}

export default Request;
