/*
 * @Descripttion: 封装路由
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 12:14:52
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-13 15:43:46
 */
import React from 'react'
import { 
  Route,
  Redirect
} from 'react-router-dom'
import Authorized from './Authorized'
import PropTypes from 'prop-types'

const AuthorizedRoute = ({
  component: Component,
  authority,
  userInfo,
  ...rest
}) => {
  return (
    <Authorized 
      authority={authority}
      userInfo={userInfo}
    >
      <Route
        {...rest}
        render={props => (Component ? <Component {...props} /> : null)} 
      />
    </Authorized>
  )
}
AuthorizedRoute.propTypes = {
  /**组件 */
  component:PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.node
  ]),
  /**组件权限 */
  authority:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**没有权限重定向到此路由 */
  redirectPath:PropTypes.string
}
export default AuthorizedRoute