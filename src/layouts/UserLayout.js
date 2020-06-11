/*
 * @Descripttion: 用户布局-登录注册
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 17:15:52
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-11 18:08:44
 */ 
import React from 'react'
import {
  Route
} from 'react-router-dom'
const UserLayout = ({routes}) => {
  console.log(routes)
  return (
    <>
      {
        routes.map((item,index)=>(
          <Route
            key={`UserLayout_${index}`}
            path={item.path} 
            component={item.component}
          />
        ))
      }
    </>
  )
}

export default UserLayout