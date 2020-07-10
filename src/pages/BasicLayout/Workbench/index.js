/*
 * @Descripttion: 工作台
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-08 16:19:28
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-10 14:37:19
 */

import React from 'react'
import { Card } from 'antd'
import styles from './Workbench.module.less'

class Workbench extends React.Component {

  renderCardBox = () => {
    return (
      <div className={styles.cardBox}>
        <div className={styles.item}>
          <Card />
        </div>
        <div className={styles.item}>
          <Card />
        </div>
      </div>
    )
  }

  render() {
    console.log('styles->', styles)
    return (
      <div>
        {this.renderCardBox()}
      </div>
    )
  }
}


export default Workbench