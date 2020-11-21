/*
 * @Descripttion: react-admin
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-03 16:43:15
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-29 20:18:53
 */
import React from 'react'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store'
import { getLocale } from './Internationalization'
import Layout from './routes/index'
import ThemeContext from './themeContext'

import './App.less'

const App = () => {
  const locale = getLocale()
  console.log(Store)
  return (
    <ConfigProvider locale={locale}>
      <ThemeContext.Provider user={{
        name:'zhangsan'
      }}>
        <BrowserRouter>
          <Provider store={Store}>
            <div className='App'>
              <Layout />
            </div>
          </Provider>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ConfigProvider>
  )

}

export default App
