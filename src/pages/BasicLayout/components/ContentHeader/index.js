/*
 * @Descripttion: 基本布局-内容头部
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:19:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-14 22:14:47
 */

import React, { useState } from 'react'
import {
  Layout,
  Avatar,
  Dropdown,
  Menu
} from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  NotificationOutlined,
  GlobalOutlined,
  UserOutlined,
  DownOutlined,
  SettingOutlined,
  PoweroffOutlined
} from '@ant-design/icons'
import { setXs, setLg } from '../../../../store/action/Responsive'

import './ContentHeader.less'

const { Header } = Layout

const renderMenu = (menus) => {
  return (
    <Menu>
      {menus.map((item, index) => {
        const {
          title,
          icon: Icon,
          component: Component
        } = item
        return (
          <Menu.Item
            key={`${title}-${index}`}
            icon={Icon && <Icon />}
          >
            {Component && <Component />}
          </Menu.Item>
        )
      })}
    </Menu>
  )
}
const renderDropdown = (dropdownData) => {
  const {
    menus,
    component:Component,
    ...rest
  } = dropdownData
  return (
    <Dropdown
      overlay={renderMenu(menus)}
      {...rest}
    >
      { Component && <Component/> }
    </Dropdown>
  )
}
const renderPersonal = () => {
  return (

  )
}

const ContentHeader = ({
  responsiveLayout,
  dispatch
}) => {

  const { collapsed } = responsiveLayout.sidebar
  const userNameMenuData = [
    {
      title: '个人中心',
      icon: UserOutlined,
      component: Link
    },
    {
      title: '个人设置',
      icon: SettingOutlined,
      component: Link
    },
    {
      title: '退出登录',
      icon: PoweroffOutlined,

    }
  ]
  return (
    <Header style={{ padding: 0 }}>
      <div className="header-box">
        <span className="left-icon">
          {
            collapsed ? <MenuFoldOutlined className="icon" onClick={() => dispatch(setLg())} /> :
              <MenuUnfoldOutlined className="icon" onClick={() => dispatch(setXs())} />
          }
        </span>
        <div className="right-option-box">
          <QuestionCircleOutlined className="option" />
          <NotificationOutlined className="option" />
          <div className="option personal">
            <Avatar
              shape="square"
              size="small"
              icon={<UserOutlined />}
            />
            <Dropdown overlay={renderMenu(userNameMenuData)}>
              <span className="antd-pro-components-global-header-index-name username">Serati Ma</span>
            </Dropdown>
          </div>
          <GlobalOutlined onClick={() => console.log('123')} className="option internationalization" />
        </div>
      </div>

    </Header>
  )
}

export default connect(({ responsiveLayout }) => ({
  responsiveLayout
}))(ContentHeader)