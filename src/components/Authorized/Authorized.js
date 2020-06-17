/*
 * @Descripttion: 权限组件
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-07 16:42:13
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-15 18:46:23
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Result } from 'antd'
import CheckPermissions from './CheckPermissions'

const Authorized = ({
  children,
  userInfo,
  authority,
  noMatch = (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  )
}) => {
  // 你的权限
  const { currentAuthority } = userInfo || []
  const childrenRender = typeof children === 'undefined' ? null : children
  return CheckPermissions(authority, currentAuthority, childrenRender, noMatch)
}

Authorized.propTypes = {
  /**
   * 准入渲染的子组件
   * 如果没有值默认null
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType
  ]),
  /**
   * 用户信息对象
   * 用户信息对象要包含currentAuthority值
   * currentAuthority的值可以是字符串或字符串数组
   * currentAuthority的值应该和authority的值是映射关系
   */
  userInfo: PropTypes.object,
  /**
   * 准入权限
   * 如果不传值默认子组件全部准入
   */
  authority: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**不准入渲染的组件 */
  noMatch: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType
  ])
}
export default Authorized