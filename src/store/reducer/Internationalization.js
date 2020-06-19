/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-04 17:14:10
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-19 15:36:35
 */ 
import { SET_LOCALE } from '../action/actionType/Internationalization'
import { localePackage } from '../../Internationalization'
// 默认中文简体
// 如果要修改默认语言可修改此处
// 此版本不支持设置语言
const defaultState = localePackage['zh-cn']

const internationalization = (state = defaultState,action) => {
  switch(action.type){
    case SET_LOCALE:
      return {
        locale:action.locale
      }
    default:
      return state
  }
}
export default internationalization