/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-04 18:20:48
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-14 17:51:37
 */ 
import { combineReducers } from 'redux'
import internationalization from './Internationalization'
import login from './login'
import responsiveLayout from './Responsive'
const reactAdminReducers = combineReducers({
  internationalization,
  login,
  responsiveLayout
})
export default reactAdminReducers