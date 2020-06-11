/*
 * @Descripttion: 404
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-10 21:35:47
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-11 13:36:03
 */ 
import React from 'react'
import { Result } from 'antd'

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
  />
);

export default NoFoundPage;