/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-12 22:02:34
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-17 20:29:38
 */
import React from 'react'
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
const { Footer } = Layout;
const BasicFooter = () => {
  return (
    <Footer className="ant-pro-global-footer" style={{ textAlign: 'center' }}>
      <div className="ant-pro-global-footer-links">
        <a title="github" target="_blank" href="https://github.com/Dmedu">
          <GithubOutlined />
        </a>
        <a style={{ marginLeft:'40px' }} title="Ant Design Pro" target="_blank" href="https://github.com/Dmedu/react-admin">react-admin</a>
      </div>
      <div className="ant-pro-global-footer-links">Copyright ©2020 Ethan zhang</div>
    </Footer>
  )
}

export default BasicFooter