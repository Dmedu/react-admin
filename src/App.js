/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-03 16:43:15
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-11 18:11:58
 */
import React, { useState } from 'react';
import {
  Button,
  ConfigProvider,
  Pagination
} from 'antd';
import { Provider } from 'react-redux'
// 设置语言
import { setlocale } from './Internationalization/index'
// react-redux
import Store from './store'

import Avatar from './components/Avatar'
import './App.less'

import Routers from './routes/index'
import { setUserInfo } from './store/action/login'
const App = () => {
  console.log(Store)
  Store.dispatch(setUserInfo({user_id:1}))
  const [locale, settinglocale] = useState(setlocale('enUS'))
  
  return (
    <ConfigProvider locale={locale}>
      <Provider store={Store}>
        <div className="App">
            {/* <Button type="primary" onClick={() => settinglocale(setlocale('enUS'))}>english</Button>
            <Button type="primary" onClick={() => settinglocale(setlocale('zhCN'))}>中文</Button>
            <div>现在语言是：{locale.languagePack.language}</div>
            <Pagination defaultCurrent={1} total={50} showSizeChanger />
            <Avatar /> */}
            <Routers/>
        </div>
      </Provider>
    </ConfigProvider>
  )
}

export default App;
