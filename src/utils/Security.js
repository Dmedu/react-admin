/*
 * @Descripttion: 安全验证
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 13:50:40
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-11 17:37:40
 */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const Security = ({
  loginState,
  redirectPath,
  userInfo,
  children
}) => {

  const isLogin = loginState && userInfo.user_id
  console.log(isLogin)
  console.log(children)
  if(
    !isLogin &&
    window.location.pathname !== '/user/login'
  ) {
    console.log('未登录')
    return <Redirect to={{ pathname: redirectPath }} />
  }
  console.log('已登录')
  return children
}

Security.propTypes = {
  /**未登录定向到此位置 */
  redirectPath:PropTypes.string
}
Security.defaultProps = {
  redirectPath:'/user/login'
}

export default connect(({ login }) => ({
  loginState: login.loginState,
  userInfo: login.userInfo
}))(Security)