/*
 * @Descripttion: 工作台
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-08 16:19:28
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-11-22 11:03:31
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
        <CardBox />
        <TabsLarge />
        <Select
          defaultValue={'四川'}
          options={[
            {
              value:'西安'
            },
            {
              value:'北京'
            },
            {
              value:'上海'
            }
          ]}
        />
      </div>
    )
  }
}


export default Workbench