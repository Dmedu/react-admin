## react-admin
react后台管理系统解决方案。

- 首页：[https://github.com/Dmedu/react-admin](https://github.com/Dmedu/react-admin)
- 预览：[https://github.com/Dmedu/react-admin](https://github.com/Dmedu/react-admin)

## 特性

### 主题管理

react-admin使用[Ant Design](https://ant-design.gitee.io/docs/react/customize-theme-cn)的主题定制。

- 更改主题

```js
path : src/theme/index.less

// 暗黑主题
@import '~antd/lib/style/themes/dark.less';
// 白色主题
// @import '~antd/lib/style/themes/default.less';
// 紧凑主题
// @import '~antd/lib/style/themes/compact.less';
@import '~antd/dist/antd.less';

```
- 定制样式：

```js
import setTheme from './theme/theme.js'
import './App.less'

/**
 * @method 定制样式
 * @param { object } styles 样式对象
 * styles : {
 *  '@primary-color': '#1890ff', // 全局主色
 *  '@link-color': '#1890ff', // 链接色
 *  '@success-color': '#52c41a', // 成功色
 *  '@warning-color': '#faad14', // 警告色
 *  '@error-color': '#f5222d', // 错误色
 *  '@font-size-base': '14px', // 主字号
 *  '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
 *  '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
 *  '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
 *  '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
 *  '@border-radius-base': '4px', // 组件/浮层圆角
 *  '@border-color-base': '#d9d9d9', // 边框色
 *  '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
 *  ...
 * }
 */
setTheme(style)

const App = () => {
  return (
    <div></div>
  )
}

export default App;
```

### 国际化

目前只支持简体中文、美式英文。

- 设置语言

```js
import { setlocale } from './Internationalization/index'
/**
 * @method 设置语言
 * @param { string } language enUS | zhCN
*/
setlocale(language)
```

- 添加语言包

第一步：创建一个语言包

```js
path : './Internationalization/languagePack/zhTW.js'
/*
 * @Descripttion: 繁体中文
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-05 16:57:55
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-05 17:27:20
 */ 
const otherZhTWPack = {
  language:"中文繁體"
}
export default otherZhTWPack
```

第二步：添加语言包

```js
path : './Internationalization/index.js'

import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
/**引入antd中文繁体语言包 */
+ import zhTW from 'antd/es/locale/zh_TW'
import moment from 'moment'
import 'moment/locale/zh-cn'

import otherZhCN from './languagePack/zhCN'
import otherEnUS from './languagePack/enUS'
/**引入第一步创建的语言包 */
+ import otherZhTW from './languagePack/zhTW'
export const setlocale = (locale) => {
  switch(locale){
    case 'zhCN':
      moment.locale('zh-cn')
      return {...zhCN,languagePack:otherZhCN}
 +  case 'zhTW':
 +    moment.locale('zh-tw')
 +    return {...zhTW,languagePack:otherZhTW}
    default:
      moment.locale('en')
      return {...enUS,languagePack:otherEnUS}
  }
}
```
### 权限管理

开发中...

## 目录模板

```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/
|   --- index.html							---首页入口html文件
|   --- npm.json							---echarts测试数据
|   --- weibo.json							---echarts测试数据
+-- src/                                    ---核心代码目录
|   +-- api                                 ---Api目录
|   |    --- index.js
|   +-- assets                              ---静态资源文件
|   +-- components                          ---组件
|   |    +-- Authorized                      ---权限
|   |    |    --- ...
|   |    +-- charts                         ---图表组件
|   |    |    --- ...
|   |    +-- dashboard                      ---首页组件
|   |    |    --- ...
|   |    +-- forms                          ---表单组件
|   |    |    --- ...
|   |    +-- pages                          ---页面组件
|   |    |    --- ...
|   |    +-- tables                         ---表格组件
|   |    |    --- ...
|   |    +-- ui                             ---ui组件
|   |    |    --- ...
|   |    --- BreadcrumbCustom.jsx           ---面包屑组件
|   |    --- HeaderCustom.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCustom.jsx                ---左边菜单组件
|   +-- Internationalization                ---国际化
|   +-- pages                               ---页面
|   +-- routes                              ---路由配置
|   +-- store                               ---状态机
|   +-- theme                               ---主题管理
|   +-- utils                               ---工具类
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json
```

## 使用

```js
git clone git@github.com:Dmedu/react-admin.git
cd react-admin
npm install
npm start
```

### License

MIT

## 更新日志

### 0.1.0(bate)

`2020-06-07`

react-admin第一个版本。

- 提供
  - 国际化
  - 定制主题
  - 用户权限管理

## 结尾

项目不定时更新，为了方便开发，后续会添加更多模块

欢迎和感谢大家 PR~~👏👏

若有问题，可联系我

[Ethan zhang](https://dmedu.github.io/EthanZhang.me/)

如果对你有帮助，给个 star 哟~~❤️❤️❤️❤️
