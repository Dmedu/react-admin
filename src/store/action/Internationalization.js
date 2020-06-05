/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-04 17:13:30
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-05 17:04:19
 */ 
import {
  SET_LOCALE
} from './actionType/Internationalization'
export const setlocale = (locale) => ({
  type:SET_LOCALE,
  locale
})