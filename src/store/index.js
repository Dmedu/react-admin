/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-04 17:17:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-04 21:46:00
 */ 
import { createStore } from 'redux'
import reactAdminReducers from './reducer'
const store = createStore(reactAdminReducers)
export default store