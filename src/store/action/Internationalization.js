/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-04 17:13:30
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-18 22:47:11
 */ 
import {
  SET_LOCALE
} from './actionType/Internationalization'
export const setLocaleState = (locale) => ({
  type:SET_LOCALE,
  locale
})