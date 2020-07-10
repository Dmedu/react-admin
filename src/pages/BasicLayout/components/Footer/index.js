/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 22:02:34
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-10 14:49:07
 */
import React from 'react'
import { Layout } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import styles from './Footer.module.less'

const { Footer } = Layout

const BasicFooter = () => {
  return (
    <Footer className={styles.antProGlobalFooter}>
      <div className={styles.antProGlobalFooterLinks}>
        <a title="github" target="_blank" href="https://github.com/Dmedu">
          <GithubOutlined />
        </a>
        <a title="react-admin" target="_blank" href="https://github.com/Dmedu/react-admin">react-admin</a>
      </div>
      <div className={styles.antProGlobalFooterLinks}>Copyright ©2020 610558983@qq.com</div>
    </Footer>
  )
}

export default BasicFooter