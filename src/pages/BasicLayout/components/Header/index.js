/*
 * @Descripttion: 基本布局-内容头部
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:19:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 20:07:22
 */

import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  NotificationOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import Dropdown from './Dropdown'
import {
  setXs, 
  setLg
} from '../../../../store/action/Responsive'

import './Header.less'

const { Header } = Layout

const ContentHeader = ({
  responsiveLayout,
  dispatch,
  personalDropdownData,
  dropdownOnPress
}) => {

  const { collapsed } = responsiveLayout.sidebar
  
  return (
    <Header style={{ padding: 0 }}>
        <div className="header-box">
          <span className="left-icon">
            {
              collapsed ? <MenuFoldOutlined className="icon" onClick={() => dispatch(setLg())} /> :
                <MenuUnfoldOutlined className="icon" onClick={() => dispatch(setXs())} />
            }
          </span>
          <div className="right-option-box">
            <QuestionCircleOutlined className="option" />
            <NotificationOutlined className="option" />
            <Dropdown
              data={personalDropdownData}
              onPress={(e) => dropdownOnPress(e)}
            />
            <GlobalOutlined onClick={() => console.log('123')} className="option internationalization" />
          </div>
        </div>
      </Header>
  )
}

ContentHeader.propTypes = {
  /**头部个人中心下拉 */
  personalDropdownData:PropTypes.shape({
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
  dropdownOnPress:PropTypes.func
}

export default connect(({ responsiveLayout }) => ({
  responsiveLayout
}))(ContentHeader)