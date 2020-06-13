/*
 * @Descripttion: 布局
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 11:54:20
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-13 16:49:11
 */
import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import routeConfig from './router.config'

const Layout = () => {
  return (
    <BrowserRouter>
      {
        routeConfig.map((item, index) => {
          
          const {
            path,
            component:Component,
            routers,
            ...rest
          } = item

          return (
              <Route
                key={`Layout_${index}`}
                path={path}
                render={(props)=>(
                  <Component {...props} routers={routers} />
                )}
                {...rest}
              />
          )

        })
      }
    </BrowserRouter>
  )
}

export default Layout