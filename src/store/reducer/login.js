/*
 * @Descripttion: 设置用户信息
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 13:59:43
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-04 18:10:48
 */
import { SET_USER_INFO, SIGN_OUT } from '../action/actionType/login'

const defaultState = {
  loginState: false,
  userInfo: {}
}

const setUserInfo = (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case SET_USER_INFO:
      return {
        loginState: true,
        userInfo: action.userInfo
      }
    case SIGN_OUT:
      return defaultState
    default:
      return state
  }
}

export default setUserInfo