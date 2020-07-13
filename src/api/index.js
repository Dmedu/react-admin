/*
 * @Descripttion: 接口
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-13 16:31:19
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-13 16:48:23
 */
import Request from '../Http'

export default {
  /**销售额 */
  getSales(params) {

    const HOST = 'api'
    const METHOD = 'get'

    return Request.http(HOST,params,METHOD).then(res=>(
      Promise.resolve(res)
    ))
    
  },
  /**支付数据 */
  getPay() {

  },
}