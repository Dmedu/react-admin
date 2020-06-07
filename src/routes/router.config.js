/*
 * @Descripttion: 路由配置
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-07 16:27:39
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-07 17:53:00
 */

// 登录
import Login from '../pages/Login'
// home
import Home from '../pages/Home'
//普通用户权限
import UserPage from '../pages/UserPage'
//管理员权限
import AdminPage from '../pages/AdminPage'

export default [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    path: '/user-page',
    component: UserPage,
    authority: ['user', 'admin'],
    redirectPath: '/login'
  },
  {
    path: '/admin-page',
    component: AdminPage,
    authority: ['admin'],
    redirectPath: '/403',
  }
]
