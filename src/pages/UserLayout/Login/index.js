/*
 * @Descripttion: 登录
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 17:17:29import React from 'react'
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-10 15:30:27
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
import { setUserInfo } from '@/store/action/login'
import user from '@/utils/user'

import styles from './login.module.less'

const Login = ({ dispatch, history }) => {
  const onFinish = (values) => {
    let userInfo = { user_id: 1 }
    user.save(userInfo,['admin'])
    history.replace('/')
  }
  return (
    <div className={styles.login}>
      <div className={styles.userLoginComponents}>
        <h1>react admin</h1>
        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className={styles.loginFormForgot} href="">
              Forgot password
        </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
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