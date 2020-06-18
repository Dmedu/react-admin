/*
 * @Descripttion: react-admin
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-03 16:43:15
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-18 23:47:07
 */
import React from 'react'
import { ConfigProvider } from 'antd'

// 设置语言
import { setLocale } from './Internationalization'
import './App.less'

import Layout from './routes/index'

import Test from './Test'

//test
// const App = () => {
//   return (
//     <div className="App">
//       <Test/>
//     </div>
//   )
// }

const App = () => {

  return (
    <div className="App">
      <ConfigProvider locale={setLocale('zh-cn')}>
        <Layout />
      </ConfigProvider>
    </div>
  )
  
}

export default App
