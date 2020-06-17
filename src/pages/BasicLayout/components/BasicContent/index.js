/*
 * @Descripttion: 基本布局-content
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 21:26:53
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 14:20:07
 */
import React from 'react'
import { Layout } from 'antd'
import { Switch,withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthorizedRoute from '../../../../components/Authorized/AuthorizedRoute'

import './BasicContent.less'

const { Content } = Layout

class BasicContent extends React.Component {

  renderRoute = (routers) => {

    const { userInfo } = this.props
    const { path:parentPath } = this.props.match
    console.log(this.props)
    return routers.map((item, index) => {
      const {
        sub,
        title,
        path,
        ...rest
      } = item
      sub ? console.log('2333') : console.log(`${parentPath}${path}`)
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
      <Content className="content-layout-background">
        <Switch>
          {this.renderRoute(routers)}
        </Switch>
      </Content>
    )
  }

}
export default connect(({ login }) => ({
  userInfo: login.userInfo
}))(withRouter(BasicContent))
