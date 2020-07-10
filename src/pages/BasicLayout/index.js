/*
 * @Descripttion: admin-基本布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:16:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-10 15:02:18
 */
import React from 'react'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Security from '../../components/Security'

import styles from './index.module.less'

const BasicLayout = ({ routers }) => {

  const { menus, otherRouter } = routers
  const allRouter = menus.concat(otherRouter)

  return (
    <Security>
      <Layout className={styles.wrapper}>
        <Sidebar routers={menus} />
        <Layout>
          <Header />
          <Content routers={allRouter} />
          <Footer />
        </Layout>
      </Layout>
    </Security>
  )
}

export default BasicLayout