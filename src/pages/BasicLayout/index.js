/*
 * @Descripttion: admin-基本布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:16:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-19 16:01:58
 */
import React from 'react'
import { Layout } from 'antd'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Security from '../../components/Security'

import './index.less'

const BasicLayout = ({ routers }) => {

  const { menus, otherRouter } = routers
  const allRouter = menus.concat(otherRouter)
  
  return (
    // <Security>
      <Layout style={{ height: '100%' }}>
        <Sidebar routers={menus} />
        <Layout>
          <Header />
          <Content routers={allRouter} />
          <Footer />
        </Layout>
      </Layout>
    // </Security>
  )
}

export default BasicLayout