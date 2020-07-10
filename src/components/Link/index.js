/*
 * @Descripttion: 链接
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-18 21:42:29
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-10 14:44:06
 */ 
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Link.module.less'
// 'antd-pro-components-global-header-index-name link'
const RenderLink = ({ title, to, ...rest }) => {
  return (
    <Link
      className={styles.link}
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