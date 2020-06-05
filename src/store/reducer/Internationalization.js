/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-04 17:14:10
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-05 17:07:24
 */ 
import { SET_LOCALE } from '../action/actionType/Internationalization'

// 默认英文
const defaultState = {
  locale:'en_US'
}
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