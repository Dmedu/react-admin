/*
 * @Descripttion: 基本布局-内容
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:26:53
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-13 16:32:43
 */
import React from 'react'
import { Layout } from 'antd'
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import AuthorizedRoute from '../../../../components/Authorized/AuthorizedRoute'

import './BasicContent.less'

const { Content } = Layout;

const K = () => <h1>K</h1>
const L = () => <h1>L</h1>
const renderRoute = (routers) => {
  return <Route path={'/nav'} component={K} />
  // return routers.map((item,index) => {
  //   const { sub,path,component:Component } = item
  //   sub ? console.log(1) : console.log(item)
  //   return sub ? renderRoute(sub) : <Route
  //   path={path}
  //   component={<Component/>}
  // />
    // return sub ? renderRoute(sub) :
    // <AuthorizedRoute
    //   key={`BasicLayout_Content-Router-${index}`}
    //   component={item.component}
    //   path={item.path}
    //   authority={item.authority}
    // />

}

const BasicContent = ({
  routers,
  ...rest
}) => {

  return (
    <Content className="content-layout-background">
      {/* <Switch> */}
        <Route path={'/nav'} component={K} />
        <Route path={'/list/query'} component={L} />
      {/* </Switch> */}
    </Content>
  )
}

export default BasicContent
