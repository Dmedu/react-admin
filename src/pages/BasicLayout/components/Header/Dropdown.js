/*
 * @Descripttion: 下拉菜单
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-15 11:33:36
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 20:00:54
 */
import React from 'react'
import {
  Dropdown,
  Menu
} from 'antd'

const renderMenu = (menus,callBack) => {
  return (
    <Menu onClick={(e)=>callBack(e)}>
      {menus.map((item, index) => {
        const {
          title,
          icon: Icon,
          key,
          menuItemComponent: Component,
          ...rest
        } = item
        return (
          <Menu.Item
            key={key}
            icon={Icon && <Icon />}
            {...rest}
          >
            {Component ? Component : null}
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

const renderDropdown = ({ data,onPress }) => {
  const {
    menus,
    childrenComponent: Component,
    ...rest
  } = data
  return (
    <Dropdown
      overlay={renderMenu(menus,onPress)}
      {...rest}
    >
      <span className='dropdown-component-trigger ant-dropdown-trigger' onClick={e => e.preventDefault()}>
        {Component ? Component : null}
      </span>
    </Dropdown>
  )
}

export default renderDropdown