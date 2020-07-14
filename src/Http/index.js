/*
 * @Descripttion: 请求
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-12 20:15:26
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-14 11:56:10
 */
import axios from "axios"
import { message } from 'antd'
import Config from './config'
import { getLocale } from '@/Internationalization'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

class Request {
  constructor(params) {
    this.instance = axios.create({
      ...params
    })
  }

  http = (url, params, method) => {
    let axiosConfig = {
      url,
      method
    }

    if (
      method === 'post' ||
      method === 'put' ||
      method === 'delete'
    ) {
      if (
        typeof FormData !== 'undefined' &&
        !(params instanceof FormData)
      ) {
        // 上传文件并没有处理
        // 上传前请自行处理FormData对象
        axiosConfig.headers = {
          'Content-Type': 'multipart/form-data'
        }
      }
      axiosConfig.data = params
    } else if (method === 'get') {
      axiosConfig.params = params
    }

    return this.instance.request(axiosConfig)
      .then(Request.checkStatus)
      .then(res => (Promise.resolve(res)))
      .catch(error => {
        const {
          response,
          message: errMsg
        } = error
        if (response.status >= 500) {
          message.error(getLocale('Http.codeMessage.error'))
        }
        message.error(errMsg)
        return Promise.reject({
          errMsg,
          statusText: false
        })
      })

  }
  // 并发请求
  all = (t) => {
    return Promise.all(t)
      .then(res => (Promise.resolve(res)))
      .catch(error => (Promise.reject(error)))
  }

  static checkStatus = (response) => {
    console.log('checkStatus->', response)
    const {
      status,
      statusText
    } = response

    if (
      status >= 200 &&
      status < 400
    ) {
      return response
    }

    const errortext = codeMessage[status] || statusText

    const error = new Error(errortext)
    error.name = status
    error.response = response

    throw error

  }

}

export default new Request(Config)