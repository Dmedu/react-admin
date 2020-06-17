/*
 * @Descripttion: admin-基本布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:16:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 14:45:33
 */
import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter, Route, useRouteMatch, Link, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Content from './components/BasicContent'
import Footer from './components/BasicFooter'
import Header from './components/ContentHeader'
import Security from '../../components/Security'
import Dashboard from './Dashboard'
import List from './List'
import './index.less'

const BasicLayout = ({ routers }) => {

  const { menus, otherRouter } = routers

  return (
    <Security>
      <Layout style={{ height: '100%' }}>
        <Sidebar routers={menus} />
        <Layout>
          <Header />
          <Content routers={menus.concat(otherRouter)} />
          <Footer />
        </Layout>
      </Layout>
    </Security>
  )
}

// const BasicLayout = () => {

//   const { url, path } = useRouteMatch()
//   console.log(url)
//   console.log(path)
//   return (
//     <div>
//       <div>
//         <Link to={`${url}/dashboard`}>Dashboard</Link>
//         <br />
//         <Link to={`${url}/list`}>List</Link>
//       </div>
//       <div>
//         <span>1234</span>
//         <Switch>
//           <Route path={`${path}/dashboard`} render={() => (<Dashboard />)} />
//           <Route path={`${path}/list`} render={() => (<List />)} />
//         </Switch>
//       </div>
//     </div>
//   )
// }

export default BasicLayout