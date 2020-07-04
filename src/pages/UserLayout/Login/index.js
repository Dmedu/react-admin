/*
 * @Descripttion: 登录
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 17:17:29import React from 'react'
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-04 18:32:06
 */
import React from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd'
import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setUserInfo } from '../../../store/action/login'
import user from '../../../utils/user'

import './login.less'

const Login = ({ dispatch, history }) => {
  const onFinish = (values) => {
    let userInfo = { user_id: 1 }
    user.save(userInfo,['admin'])
    history.replace('/')
  }
  return (
    <div className="login">
      <div className="user-login-components">
        <h1>react admin</h1>
        <Form
          name="normal_login"
          className='login-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
        </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
        </Button>
        Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default connect()(withRouter(Login))