/*
 * @Descripttion: 列表
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:47:02
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-16 16:57:00
 */ 
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom"

const List = () => {
  let location = useLocation();
  console.log(location)
  return (
    <h1>列表</h1>
  )
}

export default List