/*
 * @Descripttion: 基本布局-内容头部
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:19:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-18 21:34:54
 */

import React from 'react'
import { Layout,Select } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  NotificationOutlined
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
  personalData,
  personalOnPress,
  selectLangData,
  selectLangOnPress
}) => {

  const { collapsed } = responsiveLayout.sidebar
  const { options,defaultValue } = selectLangData
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
            data={personalData}
            onPress={(e) => personalOnPress(e)}
          />
          <Dropdown
            data={selectLangData}
            onPress={(e) => selectLangOnPress(e)}
          />
        </div>
      </div>
    </Header>
  )
}

ContentHeader.propTypes = {
  /**头部个人中心下拉 */
  personalDropdownData: PropTypes.object,
  /**
   * dropdown menuItem的点击回调
   * ({ item, key, keyPath, domEvent }) => {}
   */
  dropdownOnPress: PropTypes.func,
  /**国际化select */
  selectLangData: PropTypes.object,
  /**
   * 选中 option，或 input 的 value 变化时，调用此函数
   * (value, option:Option/Array<Option>) = {}
   */
  selectLangOnPress: PropTypes.func
}

export default connect(({ responsiveLayout }) => ({
  responsiveLayout
}))(ContentHeader)