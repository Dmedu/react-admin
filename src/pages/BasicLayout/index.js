/*
 * @Descripttion: admin-基本布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:16:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 20:12:52
 */
import React from 'react'
import { 
  Layout,
  Avatar
} from 'antd'
import { 
  Link, 
  useRouteMatch,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined
} from '@ant-design/icons'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Security from '../../components/Security'
import { signOut } from '../../store/action/login'

import './index.less'

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

const RenderLink = ({ title, path, ...rest }) => {
  const { path:parentPath } = useRouteMatch()
  return (
    <Link
      className='antd-pro-components-global-header-index-name'
      to={`${parentPath}${path}`}
      {...rest}
    >
      {title}
    </Link>
  )
}
const data = {
  childrenComponent: <PersonalDropdownTextComponent />,
  menus: [
    {
      key: 'personal-center',
      title: '个人中心',
      icon: UserOutlined,
      menuItemComponent: <RenderLink title='个人中心' path='/personal-center' />,
    },
    {
      key: 'personal-settings',
      title: '个人设置',
      icon: SettingOutlined,
      menuItemComponent: <RenderLink title='个人设置' path='/personal-settings' />,
    },
    {
      key: 'sign-out',
      title: '退出登录',
      icon: PoweroffOutlined,
      menuItemComponent:<span className="antd-pro-components-global-header-index-name username">退出登录</span>
    }
  ]
}
const BasicLayout = ({ routers,dispatch,history }) => {

  const { menus, otherRouter } = routers

  const onClickMenuItem = (e) => {
    console.log(e)
    if (e.key && e.key === 'sign-out') {
      dispatch(signOut())
      history.replace('/user/login')
    }
  }

  return (
    // <Security>
      <Layout style={{ height: '100%' }}>
        <Sidebar routers={menus} />
        <Layout>
          <Header 
            personalDropdownData={data}
            dropdownOnPress={(e)=>onClickMenuItem(e)}
          />
          <Content routers={menus.concat(otherRouter)} />
          <Footer />
        </Layout>
      </Layout>
    // </Security>
  )
}

export default connect()(withRouter(BasicLayout))