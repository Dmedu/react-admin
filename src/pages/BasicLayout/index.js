/*
 * @Descripttion: admin-基本布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:16:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-13 16:55:53
 */
import React from 'react'
import { connect } from 'react-redux'

import { Layout, Menu } from 'antd'
import Sidebar from './components/Sidebar'
import Content from './components/BasicContent'
import Footer from './components/BasicFooter'
import Header from './components/ContentHeader'

import Security from '../../components/Security'
import './index.less'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    const {
      routers,
      loginState
    } = this.props

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
}
// return (
//   <>
//       {loginState ? <div>
//         {
//           routes.map((item, index) => {
//             console.log(item.path)
//             return <Link to={item.path}>{item.name}</Link>
//           })
//         }
//         <Link to={'/admin/user-page'}>用户</Link>
//         <div style={{ width: 200, height: 200, backgroundColor: 'cyan' }}>
          // <Switch>
          //   {routes.map((item, index) => {
          //     return <AuthorizedRoute
          //       key={`BasicLayout_${index}`}
          //       component={item.component}
          //       path={item.path}
          //       authority={item.authority}
          //       {...rest}
          //     />
          //   })}
          // </Switch>
//         </div>
//       </div> : <Redirect to='/user/login' />}
//   </>
// )

export default connect(({ login }) => ({
  loginState: login.loginState
}))(BasicLayout)