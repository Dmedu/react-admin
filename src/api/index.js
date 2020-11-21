/*
 * @Descripttion: 接口
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-13 16:31:19
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-08-08 12:20:00
 */
import Request from '../Http'

export default {
  /**销售额 */
  getSales(params) {

    const HOST = 'sales.json'
    const METHOD = 'get'

    return Request.http(HOST,params,METHOD).then(res=>(
      Promise.resolve(res)
    ))
    
  },
  /**支付数据 */
  getPay(params) {

    const HOST = 'pay.json'
    const METHOD = 'get'

    return Request.http(HOST,params,METHOD).then(res=>(
      Promise.resolve(res)
    ))
    
  },
  /**运营 */
  getOperation(params) {

    const HOST = 'operation.json'
    const METHOD = 'get'

    return Request.http(HOST,params,METHOD).then(res=>(
      Promise.resolve(res) 
    ))
    
  },
  /**访问量 */
  getViews(params){

    const HOST = 'views.json'
    const METHOD = 'get'

    return Request.http(HOST,params,METHOD).then(res=>(
      Promise.resolve(res)
    ))

  }
}