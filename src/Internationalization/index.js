/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-05 16:55:57
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-19 00:07:30
 */ 
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import Store from '../store'
import { setLocaleState } from '../store/action/Internationalization'
import 'moment/locale/zh-cn'

import otherZhCN from './languagePack/zhCN'
import otherEnUS from './languagePack/enUS'

const localePackage = {
  'zh-cn':{...zhCN,languagePack:otherZhCN},
  'en':{...enUS,languagePack:otherEnUS}
}

// export const setLocale = (locale) => {
//   switch(locale){
//     case 'zhCN':
//       moment.locale('zh-cn')
//       return localePackage[locale]
//     default:
//       moment.locale('en')
//       return localePackage[locale]
//   }
// }

export const setLocale = (locale) => {
  console.log(locale)
  moment.locale(locale)
  Store.dispatch(setLocaleState(localePackage[locale]))
}
export const getLocale = () => {
  const { locale } = Store.getState().internationalization
  return locale
}