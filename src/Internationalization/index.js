/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-05 16:55:57
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-05 17:37:25
 */ 
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import otherZhCN from './languagePack/zhCN'
import otherEnUS from './languagePack/enUS'

export const setlocale = (locale) => {
  switch(locale){
    case 'zhCN':
      moment.locale('zh-cn')
      return {...zhCN,languagePack:otherZhCN}
    default:
      moment.locale('en')
      return {...enUS,languagePack:otherEnUS}
  }
}