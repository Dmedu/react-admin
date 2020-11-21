/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-08-08 09:28:53
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-08-08 10:10:07
 */

import axios from "axios"

class HttpInterceptors{
  constructor(params){

    this.instance = axios.create({
      ...params
    })

    this.stopHttp = null

    this.instance.interceptors.request.use( (config)=> {
      // 在发送请求之前做些什么
      console.log('requestInterceptors',config)
      config.cancelToken = new axios.CancelToken((c) =>{
        this.stopHttp = c
      })
      return config;
    }, (error) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    this.instance.interceptors.response.use( (response) => {
      // 对响应数据做点什么
      console.log('responseInterceptors->',response)
      return response;
    }, (error) => {
      // 对响应错误做点什么
      return Promise.reject(error);
    });

  }

  // 取消请求
  stopHttpReq = () => {
    this.stopHttp()
  }
}

export default HttpInterceptors