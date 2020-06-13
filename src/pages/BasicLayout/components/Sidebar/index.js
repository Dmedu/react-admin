/*
 * @Descripttion: 侧边栏
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:08:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-13 14:51:23
 */
import React from 'react'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Sidebar.less'

const { SubMenu } = Menu

class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  renderSubMenu = ({
    sub: subRouters,
    key,
    icon: Icon,
    ...rest
  }) => {

    return (
      <SubMenu
        key={key}
        icon={Icon && <Icon />}
        {...rest}
      >
        {
          subRouters.map((subItem, subIndex) => {

            const {
              sub: subChildRouter,
              ...subRest
            } = subItem

            let subKey = `${key}-${subIndex}`

            return subChildRouter ?
              this.renderSubMenu({
                sub: subChildRouter,
                key: subKey,
                ...subRest
              }) :
              this.renderMenu({
                key: subKey,
                ...subRest
              })

          })
        }
      </SubMenu>
    )
  }

  renderMenu = ({
    path,
    title,
    icon: Icon,
    key
  }) => {

    return (
      <Menu.Item
        key={key}
        icon={Icon && <Icon />}
      >
        <Link to={path}>{title}</Link>
      </Menu.Item>
    )
  }

  render() {

    const { routers } = this.props
    const { collapsed } = this.state
    
    return (
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={256}
      >
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          theme="dark"
        >
          {
            routers.map((parentItem, parentIndex) => {

              const {
                sub:subParent,
                ...rest
              } = parentItem

              let key = `Sidebar-${parentIndex}`

              return subParent ?
                this.renderSubMenu({
                  sub:subParent,
                  key,
                  ...rest
                }) :
                this.renderMenu({
                  key,
                  ...rest
                })

            })
          }
        </Menu>
      </Layout.Sider>
    )
  }
}

Sidebar.propTypes = {
  /**路由数组 */
  routers: PropTypes.array
}

export default Sidebar