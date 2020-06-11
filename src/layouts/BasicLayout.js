/*
 * @Descripttion: admin-基本布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:16:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-11 18:49:04
 */
import React from 'react'
import { Switch, Link, NavLink, Route } from 'react-router-dom'
import AuthorizedRoute from '../components/Authorized/AuthorizedRoute'
import UserPage from '../pages/UserPage'
const BasicLayout = ({
  routes,
  ...rest
}) => {
  console.log(routes)
  return (
    <div>
      {
        routes.map((item, index) => {
          console.log(item.path)
          return <Link to={item.path}>{item.name}</Link>
        })
      }
      <div>
        <Switch>
          {/* {routes.map((item, index) => {
          return <AuthorizedRoute
            key={`BasicLayout_${index}`}
            component={item.component}
            path={item.path}
            authority={item.authority}
            {...rest}
          />
        })} */}
          <Route path="/user-page" component={UserPage} />
        </Switch>
      </div>

    </div>
  )
}

export default BasicLayout