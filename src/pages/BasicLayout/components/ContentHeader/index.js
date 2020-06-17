/*
 * @Descripttion: 基本布局-内容头部
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:19:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-15 18:46:57
 */

import React from 'react'
import {
  Layout,
  Avatar
} from 'antd'
import { connect } from 'react-redux'
import { Link,withRouter } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  NotificationOutlined,
  GlobalOutlined,
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined
} from '@ant-design/icons'
import Dropdown from './Dropdown'
import { setXs, setLg } from '../../../../store/action/Responsive'

import './ContentHeader.less'

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

const RenderLink = ({ title, path, ...rest }) => (
  <Link 
    className='antd-pro-components-global-header-index-name' 
    to={path}
    {...rest}
  >
    {title}
  </Link>
)
const personalDropdownData = {
  childrenComponent: <PersonalDropdownTextComponent />,
  menus: [
    {
      key:'personal-center',
      title: '个人中心',
      icon: UserOutlined,
      menuItemComponent: <RenderLink title='个人中心' path='/personal-center' />,
    },
    {
      key:'personal-settings',
      title: '个人设置',
      icon: SettingOutlined,
      menuItemComponent: <RenderLink title='个人设置' path='/personal-settings' />,
    },
    {
      key:'sign-out',
      title: '退出登录',
      icon: PoweroffOutlined,
      menuItemComponent: <RenderLink title='退出登录' replace path='/user/login' />,
    }
  ]
}

class ContentHeader extends React.Component {
  _onClickMenuItem = (e) => {
    console.log(e)
    if(e.key && e.key === 'sign-out'){
      console.log('退出')
      // this.props.history.push('/user/login')
    }
  }
  render() {

    const {
      responsiveLayout,
      dispatch
    } = this.props
    const { collapsed } = responsiveLayout.sidebar

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
              data={personalDropdownData}
              onPress={(e)=>this._onClickMenuItem(e)}
            />
            <GlobalOutlined onClick={() => console.log('123')} className="option internationalization" />
          </div>
        </div>
      </Header>
    )
  }
}

export default connect(({ responsiveLayout }) => ({
  responsiveLayout
}))(withRouter(ContentHeader))