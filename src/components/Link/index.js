/*
 * @Descripttion: 链接
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-18 21:42:29
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-18 22:13:53
 */ 
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Link.less'

const RenderLink = ({ title, to, ...rest }) => {
  return (
    <Link
      className='antd-pro-components-global-header-index-name link'
      to={to}
      {...rest}
    >
      {title}
    </Link>
  )
}
RenderLink.propTypes = {
  /**链接title */
  title:PropTypes.string.isRequired,
  /**链接路径 */
  to:PropTypes.string.isRequired
}
export default RenderLink