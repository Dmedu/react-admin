/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-03 16:43:15
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-05 18:30:26
 */
import React, { useState } from 'react';
import './App.css'
import {
  Button,
  ConfigProvider,
  Pagination
} from 'antd';
import { setlocale } from './Internationalization/index'
import Store from './store'
import Avatar from './components/Avatar'
const App = () => {
  const [ locale, settinglocale ] = useState(setlocale('enUS'))
  console.log(locale)
  return (
    <ConfigProvider locale={locale} store={Store}>
      <div className="App">
        <header className="App-header">
          <Button type="primary" onClick={()=>settinglocale(setlocale('enUS'))}>english</Button>
          <Button type="primary" onClick={()=>settinglocale(setlocale('zhCN'))}>中文</Button>
          <div>现在语言是：{locale.languagePack.language}</div>
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
          <Avatar/>
        </header>
      </div>
    </ConfigProvider>
  )
}

export default App;
