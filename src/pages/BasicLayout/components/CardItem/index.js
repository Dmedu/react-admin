/*
 * @Descripttion: 卡片
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-15 15:23:17
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-15 15:54:27
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Tooltip
} from 'antd'
import {
  QuestionCircleOutlined
} from '@ant-design/icons';
import styles from './card-item.module.less'

const componentPropType = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.func,
  PropTypes.node
])

const CardItem = ({
  topComponent,
  bottomComponent,
  title,
  exp,
  quantity,
  isLoading,
  ...rest
}) => {
  return (
    <Card {...rest}>
      <div className={styles.item}>
        <p>{title}</p>
        <Tooltip title={exp}>
          <QuestionCircleOutlined className={styles.icon} />
        </Tooltip>
      </div>
      <span className={styles.title}>{quantity}</span>
      <div className={styles.topCom}>
        {topComponent && topComponent}
      </div>
      <div className={styles.bottomCom}>
        {bottomComponent && bottomComponent}
      </div>
    </Card>
  )
}

CardItem.defaultProps = {
  title:'标题',
  exp:'说明',
  quantity:'$ 8,888'
}

CardItem.propTypes = {
  /**横线上组件 */
  topComponent:componentPropType,
  /**横线下组件 */
  bottomComponent:componentPropType,
  /**标题 */
  title:PropTypes.string,
  /**说明 */
  exp:PropTypes.string,
  /**数量 */
  quantity:PropTypes.string
}

export default CardItem