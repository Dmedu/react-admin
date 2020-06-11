/*
 * @Descripttion: 路由配置
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-07 16:27:39
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-11 18:52:06
 */

// 用户布局
import UserLayout from '../layouts/UserLayout'
// 登录
import Login from '../pages/Login'

//基本布局
import BasicLayout from '../layouts/BasicLayout'
//管理员主页
import AdminPage from '../pages/AdminPage'
//普通用户主页
import UserPage from '../pages/UserPage'


// 404
import NoFoundPage from '../pages/404'
export default [
  {
    path: '/user',
    component: UserLayout,
    routes:[
      {
        name:'login',
        path: '/user/login',
        component: Login
      }
    ]
  },
  {
    path:'/admin',
    exact:true,
    component:BasicLayout,
    routes:[
      {
        name:'管理员主页',
        path:'/admin/admin-page',
        component:AdminPage,
        authority:['admin']
      },
      {
        name:'普通用户主页',
        path:'/admin/user-page',
        component:UserPage,
        
      },
      {
        path:'/admin/404',
        component:NoFoundPage
      }
    ]
  }
]
