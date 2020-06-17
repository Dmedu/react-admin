/*
 * @Descripttion: 设置用户信息
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 13:56:38
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 19:11:46
 */ 
import { 
  SET_USER_INFO,
  SIGN_OUT
} from './actionType/login'

export const setUserInfo = (info) => ({
  type:SET_USER_INFO,
  userInfo:info
})

export const signOut = () => ({
  type:SIGN_OUT
})