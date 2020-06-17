/*
 * @Descripttion: 仪表盘
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:47:02
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-16 16:44:12
 */ 
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  // useLocation,
  withRouter
} from "react-router-dom"
const Dashboard = () => {
  // let location = useLocation();
  // console.log(location)
  return (
    <h1>仪表盘123</h1>
  )
}

export default withRouter(Dashboard)