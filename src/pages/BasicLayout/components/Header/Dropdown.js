/*
 * @Descripttion: 下拉菜单
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-15 11:33:36
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-18 22:14:59
 */
import React from 'react'
import {
  Dropdown,
  Menu
} from 'antd'
import PropTypes from 'prop-types'

const renderMenu = ({
  menuItem,
  ...rest
},callBack) => {
  return (
    <Menu 
      style={{minWidth:160}}
      onClick={callBack}
      {...rest}
    >
      {menuItem.map((item, index) => {
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
            {Component ? Component : 
              <span className="antd-pro-components-global-header-index-name">{title}</span>
            }
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

const renderDropdown = ({ data, onPress }) => {
  const {
    menus,
    childrenComponent: Component,
    ...rest
  } = data
  console.log(data)
  return (
    <Dropdown
      {...rest}
      overlay={renderMenu(menus,onPress)}
      trigger={['click']}
    >
      <span className='dropdown-component-trigger ant-dropdown-trigger' onClick={e => e.preventDefault()}>
        {Component ? Component : null}
      </span>
    </Dropdown>
  )
}

renderDropdown.propTypes = {
  /**
   * 下拉数据
   * 支持Dropdown所有props ： https://ant-design.gitee.io/components/dropdown-cn/#API
   * 支持menu所有props ： https://ant-design.gitee.io/components/menu-cn/#API
   */
  data:PropTypes.shape({
    // 下拉组件Dropdown的子组件
    childrenComponent:PropTypes.element.isRequired,
    //下拉的列表值
    menus:PropTypes.arrayOf(PropTypes.shape({
      //下拉的menuItem的唯一标识
      key:PropTypes.string.isRequired,
      //下拉的menuItem标题
      title:PropTypes.string.isRequired,
      //下拉的menuItem的icon图标
      icon:PropTypes.elementType,
      //menuItem的子组件
      menuItemComponent:PropTypes.element
    }))
  }).isRequired,
  /**
   * dropdown menuItem的点击回调
   * ({ item, key, keyPath, domEvent }) => {}
  */
  onPress:PropTypes.func
}

export default renderDropdown