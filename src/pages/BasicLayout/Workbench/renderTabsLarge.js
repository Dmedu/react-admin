/*
 * @Descripttion: 大标签
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-16 11:31:16
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-21 12:58:33
 */
import React, { lazy } from 'react'
import styles from './renderTabsLarge.module.less'
import { useState } from 'react'
import { useEffect } from '@/utils/use'

const TabsLarge = ({ }) => {

  let [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      // alert(name);
    }
    return displayName;
  }

  var myFunc = makeFunc();
  myFunc();

  return (
    <div className={styles.tabLarge}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  )
}

export default TabsLarge