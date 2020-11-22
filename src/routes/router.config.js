/*
 * @Descripttion: 基本布局理由配置
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-07 16:27:39
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-11-22 14:20:56
 */
import React from 'react'
//仪表盘
import Dashboard from '../pages/BasicLayout/Dashboard'

// 404
import NoFoundPage from '../pages/404'


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'


const A = () => <h1>A</h1>
const B = () => <h1>B</h1>
const C = () => <h1>C</h1>
const D = () => <h1>D</h1>
const E = () => <h1>E</h1>
const F = () => <h1>F</h1>
const G = () => <h1>G</h1>
const H = () => <h1>H</h1>

export default {
  menus: [
    {
      title: '导航1',
      icon: MenuUnfoldOutlined,
      path: '/',
      component: () => <h1>导航1</h1>
    },
    {
      title: '导航2',
      icon: UserOutlined,
      sub: [
        {
          title: '一级菜单',
          exact: true,
          path: '/nav2/menu1',
          icon: UploadOutlined,
          component:<h1>一级菜单</h1>
        },
        {
          title: '二级菜单',
          icon: MenuFoldOutlined,
          sub: [
            {
              title: '三级菜单',
              path: '/nav2/menu3',
              authority: ['user'],
              component: <h1>三级菜单</h1>
            }
          ]
        }
      ]
    }
  ],
  otherRouter: [
    {
      title: '个人中心',
      path: '/personal-center',
      component: () => <h1>个人中心</h1>
    },
    {
      title: '个人设置',
      path: '/personal-settings',
      component: () => <h1>个人设置</h1>
    }
  ]
}
