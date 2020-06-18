/*
 * @Descripttion: 仪表盘
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:47:02
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-19 00:09:44
 */ 
import React from 'react'
import {
  withRouter
} from "react-router-dom"
import { Pagination } from 'antd'
const Dashboard = () => {
  // let location = useLocation();
  // console.log(location)
  return (
    <div>
      <h1>仪表盘123</h1>
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </div>
  )
}

export default withRouter(Dashboard)