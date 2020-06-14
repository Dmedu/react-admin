/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-14 17:37:15
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-14 18:52:47
 */
import {
  XS,
  SM,
  MD,
  LG
} from '../action/actionType/Responsive'

const defaultState = {
  sidebar: {
    collapsed: false
  }
}

const ResponsiveLayout = (state = defaultState, action) => {
  switch (action.type) {
    case XS:
      return {
        sidebar: {
          collapsed: true
        }
      }
    case SM:
      return {
        sidebar: {
          collapsed: true
        }
      }
    case MD:
      return {
        sidebar: {
          collapsed: true
        }
      }
    case LG:
      return {
        sidebar: {
          collapsed: false
        }
      }
    default:
      return state
  }
}

export default ResponsiveLayout