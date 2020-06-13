/*
 * @Descripttion: 安全验证
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-13 15:09:24
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-13 15:25:39
 */ 
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Security = ({ loginState,children }) => {

  // 安全验证可以在任何需要验证的地方包裹此组件
  // 请区分开权限验证组件和安全验证组件
  // 这里可换成自己的安全验证方式
  // 例如：可以把 loginState 更换为 token_id || user_id

  if(!loginState && window.location.pathname !== '/user/login'){
    return <Redirect to={`/user/login`} />
  }

  return children
  
}

export default connect(({ login })=>({
  loginState:login.loginState
}))(Security)

