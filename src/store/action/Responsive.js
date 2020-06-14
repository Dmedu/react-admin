/*
 * @Descripttion: 响应式
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-14 17:28:02
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-14 17:36:51
 */ 
import {
  XS,
  SM,
  MD,
  LG
} from './actionType/Responsive'

export const setXs = () => ({ type:XS })
export const setSM = () => ({ type:SM })
export const setMd = () => ({ type:MD })
export const setLg = () => ({ type:LG })