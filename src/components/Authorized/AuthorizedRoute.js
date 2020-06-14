/*
 * @Descripttion: Route权限封装
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 12:14:52
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-14 16:49:26
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { Result } from 'antd'
import Authorized from './Authorized'
import PropTypes from 'prop-types'

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
  />
)

const AuthorizedRoute = ({
  component: Component,
  authority,
  userInfo,
  ...rest
}) => {
  console.log(userInfo)
  return (
    <Authorized 
      authority={authority}
      userInfo={userInfo}
    >
      <Route
        {...rest}
        render={props => (
          Component ? 
          <Component {...props} /> :
          <NoFoundPage />
        )}
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
  ])
}
export default AuthorizedRoute