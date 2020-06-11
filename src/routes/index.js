/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-11 11:54:20
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-11 18:31:38
 */
import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom'
import Security from '../utils/Security'
import routeConfig from './router.config'

const Router = () => {
  return (
    <BrowserRouter>
      {
        routeConfig.map((item, index) => {
          console.log(item)
          const { 
            path,
            component:Component,
            routes,
            ...rest
          } = item
          return (
            <Security key={`SecurityLayout_${index}`}>
              <Route
                path={path}
                render={(props) => (
                  Component ? <Component {...props} routes={routes} />
                    : <Redirect to={'../pages/404'} />)
                }
                {...rest}
              />
            </Security>
          )
        })
      }
    </BrowserRouter>
  )
}

export default Router