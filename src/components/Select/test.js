/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-30 17:05:28
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-31 17:09:20
 */
import React, { useState, useEffect } from 'react'
const Test = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
  });

  return <div>
    <p>You clicked {value} times</p>
    <h1>{value}</h1>
    <button onClick={() => setCount(count + 1)}>
      Click me
  </button>
  </div>
}

export default Test