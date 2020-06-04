/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-03 16:43:15
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-04 22:37:20
 */
import React, { useState } from 'react';
import './App.css';
import {
  Button,
  ConfigProvider,
  Pagination
} from 'antd';
import setlocale from './utils/Internationalization'

const App = () => {
  const [ locale, settinglocale ] = useState(setlocale('enUS'))
  return (
    <ConfigProvider locale={locale}>
      <div className="App">
        <header className="App-header">
          <Button type="primary" onClick={()=>settinglocale(setlocale('enUS'))}>english</Button>
          <Button type="primary" onClick={()=>settinglocale(setlocale('zhCN'))}>中文</Button>
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </header>
      </div>
    </ConfigProvider>
  )
}

export default App;
