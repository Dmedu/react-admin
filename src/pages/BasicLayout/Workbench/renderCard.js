/*
 * @Descripttion: 工作台
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-08 16:19:28
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-08-08 09:38:15
 */

import React from 'react'
import {
  CaretUpOutlined,
  CaretDownOutlined
} from '@ant-design/icons';
import styles from './renderCard.module.less'
import cls from 'classnames'
import { getLocale } from '@/Internationalization'
import Request from '@/Http'
import Api from '@/api'
import CardItem from '../components/CardItem'
import Geom from '../components/charts/Geom'
import HttpInterceptors from '@/Http/interceptors'

class CardBox extends React.Component {
  state = {
    isLoading: false,
    sales: {},
    views: {},
    pay: {},
    operation: {}
  }
  componentDidMount() {
    this.getAllData()
  }
  getAllData = () => {
    const {
      getSales,
      getPay,
      getOperation,
      getViews
    } = Api
    Request.all([
      getSales(),
      getPay(),
      getOperation(),
      getViews()
    ])
      .then(res => {
        console.log('getAllData->', res)
        this.setState({
          sales: res[0].data,
          pay: res[1].data,
          operation: res[2].data,
          views: res[3].data
        })
      })
  }
  renderPoint = (chatsData) => {
    return (
      <Geom
        data={chatsData}
        type='line'
        position='day*value'
        shape="hv"
        color='#9933FF'
        size={1}
      />
    )
  }
  renderInterval = (chatsData) => {
    return (
      <Geom
        data={chatsData}
        type='interval'
        position='day*num'
        color='#9933FF'
      />
    )
  }

  renderArea = (chatsData) => {
    const scale = {
      num: {
        min: 900,
        nice: true,
      },
      day: {
        range: [0, 1],
      },
    };
    return (
      <Geom
        data={chatsData}
        type='area'
        position='day*num'
        color='#0066CC'
        shape='smooth'
        scale={scale}
      />
    )
  }

  renderField = (name,value) => {
    return (
      <div className={styles.field}>
        <span>{name}</span>
        <span className={styles.value}>{value}</span>
      </div>
    )
  }
  renderTrend = (YoYDay, YoYWeek) => {
    return (
      <div className={styles.trend}>
        <div className={styles.trendItem}>
          <span className={styles.trendFont}>
            {getLocale('workbench.card.trend.Week')}
            <span className={styles.num}>{YoYWeek}</span>
          </span>
          <CaretUpOutlined className={cls(styles.icon, styles.upOut)} />
        </div>
        <div className={styles.trendItem}>
          <span className={styles.trendFont}>
            {getLocale('workbench.card.trend.day')}
            <span className={styles.num}>{YoYDay}</span>
          </span>
          <CaretDownOutlined className={cls(styles.icon, styles.downOut)} />
        </div>
      </div>
    )
  }

  renderCardItem = (title, exp, quantity, topComponent,bottomComponent) => {
    const { isLoading } = this.state
    return (

      <div className={styles.card}>
        <CardItem
          title={title}
          exp={exp}
          quantity={quantity}
          topComponent={topComponent}
          bottomComponent={bottomComponent}
          loading={isLoading}
          bordered={false}
        />
      </div>

    )
  }
  render = () => {
    const {
      sales,
      views,
      pay,
      operation
    } = this.state
    const {
      name: salesName,
      exp: salesExp,
      totalSales,
      YoYWeek: salesYoYWeek,
      YoYDay: salesYoYDay,
      dailySales
    } = sales
    const {
      name: viewsName,
      exp: viewsExp,
      views:viewsNum,
      dailyVisits,
      chatsData: viewsChatsData
    } = views
    const {
      name: payName,
      exp: payExp,
      totalPay,
      chatsData: payChatsData,
      conversionRates
    } = pay
    const {
      name: operationName,
      exp: operationExp,
      operation:operationNum,
      YoYWeek: operationYoYWeek,
      YoYDay: operationYoYDay,
      chatsData: operationChatsData
    } = operation
    const TREND = this.renderTrend(salesYoYWeek, salesYoYDay)
    const CHAT_AREA = this.renderArea(viewsChatsData)
    const CHAT_INT = this.renderInterval(payChatsData)
    const CHAT_EDGE = this.renderPoint(operationChatsData)
    const FIELD_BTM_S = this.renderField('日销售量',dailySales)
    const FIELD_BTM_V = this.renderField('日访问量',dailyVisits)
    const FIELD_BTM_P = this.renderField('转化率',conversionRates)
    const TREND_BTM_O = this.renderTrend(operationYoYWeek, operationYoYDay)
    return (
      <div className={styles.cardBox}>
        {this.renderCardItem(
          salesName,
          salesExp,
          totalSales,
          TREND,
          FIELD_BTM_S
        )}
        {this.renderCardItem(
          viewsName,
          viewsExp,
          viewsNum,
          CHAT_AREA,
          FIELD_BTM_V
        )}
        {this.renderCardItem(
          payName,
          payExp,
          totalPay,
          CHAT_INT,
          FIELD_BTM_P
        )}
        {this.renderCardItem(
          operationName,
          operationExp,
          operationNum,
          CHAT_EDGE,
          TREND_BTM_O
        )}
      </div>
    )
  }
}


export default CardBox