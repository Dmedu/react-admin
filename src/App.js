/*
 * @Descripttion: react-admin
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-03 16:43:15
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-13 15:01:01
 */
import React, { useState } from 'react'
import { ConfigProvider } from 'antd'

// 设置语言
import { setlocale } from './Internationalization/index'
import './App.less'

import Layout from './routes/index'


const App = () => {

  return (
    <div className="App">
      <ConfigProvider locale={setlocale('zhCN')}>
        <Layout />
      </ConfigProvider>
    </div>
  )
  
}

export default App
