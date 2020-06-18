/*
 * @Descripttion: admin-基本布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:16:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-19 00:02:44
 */
import React from 'react'
import { 
  Layout,
  Avatar
} from 'antd'
import { 
  useRouteMatch,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  UserOutlined,
  SettingOutlined,
  PoweroffOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import {
  setLocale,
  getLocale
} from '../../Internationalization'
import Link from '../../components/Link'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Security from '../../components/Security'
import { signOut } from '../../store/action/login'

import './index.less'

const RenderLink = ({ title, path, ...rest }) => {
  const { path:parentPath } = useRouteMatch()
  return (
    <Link
      title={title}
      to={`${parentPath}${path}`}
    />
  )
}

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
    menuItem:[
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
}

const BasicLayout = ({ 
  routers,
  dispatch,
  history,
  match,
  localeState
}) => {

  const { menus, otherRouter } = routers
  const { path } = match
  const { locale } = localeState
  console.log(localeState)
  let selectedKeys = [ locale ]
  console.log(selectedKeys)
  const selectLangData = {
    childrenComponent:<div className="option"><GlobalOutlined/></div>,
    menus:{
      selectedKeys:selectedKeys,
      menuItem:[
        {
          key:'zh-cn',
          title:'简体中文',
          menuItemComponent:<span className="antd-pro-components-global-header-index-name username">简体中文</span>
        },
        {
          key:'en',
          title:'English',
          menuItemComponent:<span className="antd-pro-components-global-header-index-name username">English</span>
        }
      ]
    }
  }
  
  const clickPersonalCenter = (e) => {
    switch(e.key){
      case 'sign-out':
        dispatch(signOut())
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
  
  const selectLang = (e) => setLocale(e.key)

  return (
    // <Security>
      <Layout style={{ height: '100%' }}>
        <Sidebar routers={menus} />
        <Layout>
          <Header 
            personalData={personalData}
            personalOnPress={(e)=>clickPersonalCenter(e)}
            selectLangData={selectLangData}
            selectLangOnPress={(e)=>selectLang(e)}
          />
          <Content routers={menus.concat(otherRouter)} />
          <Footer />
        </Layout>
      </Layout>
    // </Security>
  )
}

export default connect(({ internationalization })=>({
  localeState:internationalization.locale
}))(withRouter(BasicLayout))