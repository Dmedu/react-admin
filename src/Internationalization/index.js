/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-05 16:55:57
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-10 16:13:14
 */
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
// import moment from 'moment'
import Store from '../store'
// import { setLocaleState } from '../store/action/Internationalization'
import 'moment/locale/zh-cn'

import otherZhCN from './languagePack/zhCN'
import otherEnUS from './languagePack/enUS'

// 此版本语言包只支持中文简体和英文
export const localePackage = {
  'zh-cn': { ...zhCN, languagePack: otherZhCN },
  'en': { ...enUS, languagePack: otherEnUS }
}
//获取当前语言
export const getLocale = (id) => {
  const { internationalization: lang } = Store.getState()
  return id ? lang.languagePack[id] : lang
}
// 设置语言
// export const setLocale = (locale) => {
//   Store.dispatch(setLocaleState(localePackage[locale]))
// }