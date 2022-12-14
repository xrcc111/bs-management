import Request from './request/index'
import { AxiosResponse } from 'axios'

import type { RequestConfig } from './request/type'

export interface Response<T> {
  code?: number,
  data: T,
}

// 重写返回类型
interface FinallRequestConfig<T, R> extends RequestConfig<Response<R>> {
  data?: T
}
console.log(import.meta.env);
const request = new Request({
  baseURL: '/admin',
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {FinallRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const finallRequest = <D = any, T = any>(config: FinallRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<Response<T>>(config)
}
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default finallRequest