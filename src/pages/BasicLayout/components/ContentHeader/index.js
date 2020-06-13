/*
 * @Descripttion: 基本布局-内容头部
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:19:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-12 23:05:04
 */

import React,{ useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
const { Header, Sider, Content } = Layout
const ContentHeader = () => {

  const [collapsed,setCollapsed] = useState(false)
  
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      { collapsed ? 
        <MenuUnfoldOutlined onClick={()=>setCollapsed(true)}/> : 
        <MenuFoldOutlined onClick={()=>setCollapsed(false)}/>
      }
    </Header>
  )
}

export default ContentHeader