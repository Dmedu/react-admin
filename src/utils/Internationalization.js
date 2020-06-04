/*
 * @Descripttion: 国际化
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-04 17:03:26
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-04 22:26:04
 */ 
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// zhCN | enUS
const setlocale = (locale) => {
  switch(locale){
    case 'zhCN':
      moment.locale('zh-cn')
      return zhCN
    default:
      moment.locale('en')
      return enUS
  }
}

export default setlocale