/*
 * @Descripttion: 基本布局-内容头部
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:19:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-04 17:53:19
 */

import React from 'react'
import { 
  Layout,
  Avatar
} from 'antd'
import { connect } from 'react-redux'
import { 
  withRouter,
  useRouteMatch
} from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  NotificationOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from '@ant-design/icons'
import Dropdown from './Dropdown'
import {
  setXs,
  setLg
} from '../../../../store/action/Responsive'
import user from '../../../../utils/user'
import Link from '../../../../components/Link'
import { signOut } from '../../../../store/action/login'

import './Header.less'

const { Header } = Layout

const PersonalDropdownTextComponent = () => (
  <div className="option personal">
    <Avatar
      shape="square"
      size="small"
      icon={<UserOutlined />}
    />
    <span className="antd-pro-components-global-header-index-name username">Serati Ma</span>
  </div>
)
const personalData = {
  childrenComponent: <PersonalDropdownTextComponent />,
  menus: {
    menuItem: [
      {
        key: 'personal-center',
        title: '个人中心',
        icon: UserOutlined
      },
      {
        key: 'personal-settings',
        title: '个人设置',
        icon: SettingOutlined
      },
      {
        key: 'sign-out',
        title: '退出登录',
        icon: PoweroffOutlined,
        menuItemComponent: <span className="antd-pro-components-global-header-index-name username">退出登录</span>
      }
    ]
  }
}

const ContentHeader = ({
  responsiveLayout,
  dispatch,
  history,
  match
}) => {

  const { collapsed } = responsiveLayout.sidebar
  const { path } = match
  
  const clickPersonalCenter = (e) => {
    switch(e.key){
      case 'sign-out':
        user.delete()
        history.replace('/user/login')
        break;
      case 'personal-center':
        history.push(`${path}/personal-center`)
        break;
      case 'personal-settings':
        history.push(`${path}/personal-settings`)
        break;
    }
  }
  
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
          <Dropdown
            data={personalData}
            onPress={clickPersonalCenter}
          />
        </div>
      </div>
    </Header>
  )
}

export default connect(({ responsiveLayout }) => ({
  responsiveLayout
}))(withRouter(ContentHeader))