/*
 * @Descripttion: 基本布局-content
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:26:53
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-10 15:26:08
 */
import React from 'react'
import { Layout } from 'antd'
import PropTypes from 'prop-types'
import { 
  Switch,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthorizedRoute from '@/components/Authorized/AuthorizedRoute'

import styles from './Content.module.less'

const { Content } = Layout

class BasicContent extends React.Component {

  renderRoute = (routers) => {

    const { 
      userInfo,
      match
    } = this.props
    const { path: parentPath } = match

    return routers.map((item, index) => {
      
      const {
        sub,
        title,
        path,
        ...rest
      } = item
      let key = `BasicLayout_Content-Router-${title}-${index}`

      return sub ? this.renderRoute(sub) :
        <AuthorizedRoute
          key={key}
          userInfo={userInfo}
          path={`${parentPath}${path}`}
          {...rest}
        />

    })
  }

  render() {

    const { routers } = this.props

    return (
      <Content className={styles.contentLayoutBackground}>
        <Switch>
          {this.renderRoute(routers)}
        </Switch>
      </Content>
    )
  }

}

BasicContent.propTypes = {
  /**路由数组 */
  routers:PropTypes.arrayOf(
    PropTypes.shape({
      title:PropTypes.string,
      icon:PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.elementType
      ]),
      sub:PropTypes.array,
      component:PropTypes.elementType,
      path:PropTypes.string,
      authority:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ])
    })
  ).isRequired
}

export default connect(({ login }) => ({
  userInfo: login.userInfo
}))(withRouter(BasicContent))
