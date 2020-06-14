/*
 * @Descripttion: 基本布局-内容头部
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:19:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-14 19:19:20
 */

import React, { useState } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import { setXs, setLg } from '../../../../store/action/Responsive'

import './ContentHeader.less'

const { Header } = Layout

const ContentHeader = ({
  responsiveLayout,
  dispatch
}) => {

  const { collapsed } = responsiveLayout.sidebar

  return (
    <Header style={{padding:0}}>
      <div className="header-box">
        <span className="left-icon">
          {collapsed ?
            <MenuFoldOutlined className="icon" onClick={() => dispatch(setLg())} /> :
            <MenuUnfoldOutlined className="icon" onClick={() => dispatch(setXs())} />
          }
        </span>
        <div className="right-option-box">
          
        </div>
      </div>

    </Header>
  )
}

export default connect(({ responsiveLayout }) => ({
  responsiveLayout
}))(ContentHeader)