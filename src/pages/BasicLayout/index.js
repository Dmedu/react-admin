/*
 * @Descripttion: admin-基本布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:16:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-14 17:13:01
 */
import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Content from './components/BasicContent'
import Footer from './components/BasicFooter'
import Header from './components/ContentHeader'
import Security from '../../components/Security'


import './index.less'

const BasicLayout = ({ routers }) => {

  const { menus } = routers
  
  return (
    <Security>
        <BrowserRouter>
          <Layout style={{ height: '100%' }}>
            <Sidebar routers={menus} />
            <Layout>
              <Header />
              <Content routers={menus} />
              <Footer />
            </Layout>
          </Layout>
        </BrowserRouter>
      </Security>
  )
}

export default BasicLayout