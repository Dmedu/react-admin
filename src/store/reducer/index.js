/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-04 18:20:48
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-11 15:42:10
 */ 
import { combineReducers } from 'redux'
import internationalization from './Internationalization'
import login from './login'
const reactAdminReducers = combineReducers({
  internationalization,
  login
})
export default reactAdminReducers