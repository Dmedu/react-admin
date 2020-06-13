/*
 * @Descripttion: 路由配置
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-07 16:27:39
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-13 14:33:33
 */
import React from 'react'
// 用户布局
import UserLayout from '../pages/UserLayout/Login'

//基本布局
import BasicLayout from '../pages/BasicLayout'
//仪表盘
import Dashboard from '../pages/BasicLayout/Dashboard'
//列表
import List from '../pages/BasicLayout/List'


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

export default [
  {
    path: '/user/login',
    component: UserLayout
  },
  {
    path: '/',
    exact: true,
    component: BasicLayout,
    routers: {
      menus: [
        {
          title: '仪表盘',
          icon: UserOutlined,
          sub: [
            {
              title: '分析',
              path: '/dashboard/analysis',
              icon: UploadOutlined,
              authority: ['admin', 'user'],
              component: A
            },
            {
              title: '监控',
              path: '/dashboard/monitor',
              authority: ['user'],
              component: B
            },
            {
              title: '工作台',
              path: '/dashboard/workbench',
              component: C
            }
          ]
        },
        {
          title: '列表',
          icon: VideoCameraOutlined,
          sub: [
            {
              title: '查询列表',
              path: '/list/query',
              component: D
            },
            {
              title: '搜索列表',
              icon: MenuFoldOutlined,
              sub: [
                {
                  title: '文章',
                  path: '/list/post',
                  authority: ['user'],
                  component: E
                },
                {
                  title: '项目',
                  path: '/list/project',
                  component: F
                },
                {
                  title: '应用',
                  path: '/list/app',
                  component: G
                }
              ]
            }
          ]
        },
        {
          title:'nav 1',
          icon:MenuUnfoldOutlined,
          path:'/nav',
          component:()=> <h1>nav 1</h1>
        }
      ],
      otherRouter: [
        {
          title: '个人中心',
          path: '/personal-center',
          component: H
        }
      ]
    }
  },
  {
    title: 'noFoundPage',
    path: '/404',
    component: NoFoundPage
  }
]
