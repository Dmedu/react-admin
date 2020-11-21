/*
 * @Descripttion: 代理服务器
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-15 14:27:36
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-15 14:42:35
 */
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const options = {
  // 目标服务器 host
  target: 'http://www.example.org',
  // 默认false，是否需要改变原始主机头为目标URL
  changeOrigin: true,
  // 是否代理websockets 
  ws: true,
  // 请求重写
  // 比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path
  pathRewrite: {
    '^/api/old-path': '/api/new-path',
    '^/api/remove/path': '/path'
  },
  // 如果请求主机 == 'dev.localhost:3000'
  // 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'
  router: {
    'dev.localhost:3000': 'http://localhost:8000'
  }
}

/**
 * @return {Boolean}
 */
let filter = (pathname, req) => {
  return (pathname.match('^/api') && req.method === 'GET');
}


let proxy = createProxyMiddleware(filter,options)

app.use('/api', proxy);
app.listen(3000);