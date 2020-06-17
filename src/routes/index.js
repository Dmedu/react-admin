/*
 * @Descripttion: 布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 11:54:20
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 14:57:01
 */
import React from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import BasicLayout from '../pages/BasicLayout'
import UserLayout from '../pages/UserLayout/Login'
import Not from '../pages/404'

import routeConfig from './router.config'

const Layout = () => {

  return (
    <Switch>
      <Redirect exact from="/" to="/basicLayout" />
      <Route path='/user/login' render={() => (<UserLayout />)} />
      <Route path='/404' render={() => (<Not />)} />
      <Route path='/basicLayout' render={() => (<BasicLayout routers={routeConfig} />)} />
    </Switch>
  )

}

export default Layout