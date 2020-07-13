/*
 * @Descripttion: 工作台
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-08 16:19:28
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-13 16:46:19
 */

import React from 'react'
import {
  Card,
  Tooltip
} from 'antd'
import {
  QuestionCircleOutlined,
  CaretUpOutlined,
  CaretDownOutlined
} from '@ant-design/icons';
import { 
  Chart,
  Axis,
  Tooltip as BizTooltip,
  Geom
} from 'bizcharts'
import styles from './Workbench.module.less'
import cls from 'classnames'
import { getLocale } from '@/Internationalization'
import Data from '@/data/workbench.json'
import Request from '@/Http'
import Api from '@/api'

class Workbench extends React.Component {
  state = {
    isLoading: false,
    data: {
      Sales: {
        name:'总销售额',
        totalSales: '¥ 190234',
        exp: '说明',
        YoYWeek: '23%',
        YoYDay: '12%',
        dailySales: 23990
      },
      Views: {
        name:'访问量',
        views: 8846,
        dailyVisits: 1089,
        exp: '说明',
        chatsData: [
          { day: '2020-07-01', num: 1011 },
          { day: '2020-07-02', num: 1200 },
          { day: '2020-07-03', num: 1211 },
          { day: '2020-07-04', num: 1078 },
          { day: '2020-07-05', num: 1010 },
          { day: '2020-07-06', num: 1088 },
          { day: '2020-07-07', num: 1111 },
          { day: '2020-07-08', num: 1211 },
          { day: '2020-07-09', num: 1091 },
          { day: '2020-07-10', num: 1061 },
          { day: '2020-07-11', num: 1071 },
          { day: '2020-07-12', num: 1001 },
          { day: '2020-07-13', num: 1011 },
          { day: '2020-07-14', num: 999 },
          { day: '2020-07-15', num: 1110 },
          { day: '2020-07-16', num: 1201 },
        ]
      },
      Pay: {
        name:'支付笔数',
        totalPay: 190234,
        exp: '说明',
        YoYWeek: '23%',
        YoYDay: '12%',
        conversionRates: '60%',
        chatsData:[
          { day: '2020-07-01', num: 5 },
          { day: '2020-07-02', num: 6 },
          { day: '2020-07-03', num: 8 },
          { day: '2020-07-04', num: 6 },
          { day: '2020-07-05', num: 5 },
          { day: '2020-07-06', num: 8 },
          { day: '2020-07-07', num: 7 },
          { day: '2020-07-08', num: 8 },
          { day: '2020-07-09', num: 8 },
          { day: '2020-07-10', num: 5 },
          { day: '2020-07-11', num: 3 },
          { day: '2020-07-12', num: 6 },
          { day: '2020-07-13', num: 9 },
          { day: '2020-07-14', num: 7 },
          { day: '2020-07-15', num: 4 },
          { day: '2020-07-16', num: 9 },
        ]
      },
      Operation: {
        name:'运营活动效果',
        operation: '88%',
        exp: '说明',
        YoYWeek: '23%',
        YoYDay: '12%',
        chatsData:[
          { day: '2020-07-01', value: '78%' },
          { day: '2020-07-02', value: '81%' },
          { day: '2020-07-03', value: '88%' },
          { day: '2020-07-04', value: '56%' },
          { day: '2020-07-05', value: '78%' },
          { day: '2020-07-06', value: '67%' },
          { day: '2020-07-07', value: '89%' },
          { day: '2020-07-08', value: '56%' },
          { day: '2020-07-09', value: '89%' },
          { day: '2020-07-10', value: '89%' },
          { day: '2020-07-11', value: '91%' },
          { day: '2020-07-12', value: '79%' },
          { day: '2020-07-13', value: '69%' },
          { day: '2020-07-14', value: '81%' },
          { day: '2020-07-15', value: '83%' },
          { day: '2020-07-16', value: '74%' },
        ]
      }
    }
  }
  componentDidMount(){
    console.log('Request->',Request)
    // Request.all([Api.getSales({
    //   appid:'65947596',
    //   appsecret:'xOUx1XVJ',
    //   version:'v9'
    // }),Api.getSales({
    //   appid:'65947596',
    //   appsecret:'xOUx1XVJ',
    //   version:'v3'
    // })]).then(res=>{
    //   console.log('all-Workbench->res',res)
    // })
    this.get7Tian()
  }
  get7Tian = () => {
    Api.getSales({
      appid:'65947596',
      appsecret:'xOUx1XVJ',
      version:'v3'
    }).then(res=>{
      console.log('get7Tian->',res)
    })
  }
  get40Tian = () => {
    return Request.http('api',{
      appid:'65947596',
      appsecret:'xOUx1XVJ',
      version:'v3'
    },'get')
    .then(res=>{
      console.log('get40Tian-Workbench->res:',res)
      return Promise.resolve(res)
    })
  }
  renderPoint = (chatsData) => {
    return (
      <Chart
        data={chatsData}
        autoFit
        placeholder
        animate
        padding={[12, 0]}
      >
        <Axis visible={false} />
        <BizTooltip
          showTitle={false}
          showMarkers
        />
        <Geom
          type='line'
          position='day*value'
          shape="hv"
          color='#9933FF'
          size={1}
        />
      </Chart>
    )
  }
  renderInterval = (chatsData) => {
    return (
      <Chart
        data={chatsData}
        autoFit
        placeholder
        animate
        padding={[12, 0]}
      >
        <Axis visible={false} />
        <BizTooltip
          showTitle={false}
          showMarkers
        />
        <Geom
          type='interval'
          position='day*num'
          color='#9933FF'
        />
      </Chart>
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
      <Chart
        data={chatsData}
        autoFit
        placeholder
        animate
        padding={[12, 0]}
        scale={scale}
      >
        <Axis visible={false} />
        <BizTooltip
          showTitle={false}
          showMarkers
        />
        <Geom
          type='area'
          position='day*num'
          color='#0066CC'
          shape='smooth'
        />
      </Chart>
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

  renderCardItem = (title,exp,quantity,component) => {
    const { isLoading } = this.state
    return (

      <div className={styles.card}>
        <Card
          loading={isLoading}
          bordered={false}
        >
          <div className={styles.item}>
            <p>{title}</p>
            <Tooltip title={exp}>
              <QuestionCircleOutlined className={styles.icon} />
            </Tooltip>
          </div>
          <span className={styles.title}>{quantity}</span>
          <div className={styles.content}>
            { component }
          </div>
        </Card>
      </div>

    )
  }
  renderCardBox = () => {
    const { data } = this.state
    const {
      Sales,
      Views,
      Pay,
      Operation
    } = data
    const { 
      name:salesName,
      exp:salesExp,
      totalSales,
      YoYWeek:salesYoYWeek,
      YoYDay:salesYoYDay
    } = Sales
    const {
      name:viewsName,
      exp:viewsExp,
      views,
      dailyVisits,
      chatsData:viewsChatsData
    } = Views
    const {
      name:payName,
      exp:payExp,
      totalPay,
      YoYWeek:payYoYWeek,
      YoYDay:payYoYDay,
      chatsData:payChatsData
    } = Pay
    const {
      name:operationName,
      exp:operationExp,
      operation,
      YoYWeek:operationYoYWeek,
      YoYDay:operationYoYDay,
      chatsData:operationChatsData
    } = Operation
    const TREND = this.renderTrend(salesYoYWeek,salesYoYDay)
    const CHAT_AREA = this.renderArea(viewsChatsData)
    const CHAT_INT = this.renderInterval(payChatsData)
    const CHAT_EDGE = this.renderPoint(operationChatsData)
    return (
      <div className={styles.cardBox}>
        {this.renderCardItem(
          salesName,
          salesExp,
          totalSales,
          TREND
        )}
        {this.renderCardItem(
          viewsName,
          viewsExp,
          views,
          CHAT_AREA
        )}
        {this.renderCardItem(
          payName,
          payExp,
          totalPay,
          CHAT_INT
        )}
        {this.renderCardItem(
          operationName,
          operationExp,
          operation,
          CHAT_EDGE
        )}
      </div>
    )
  }

  render() {
    console.log('styles->', styles)
    console.log('getLocale->', getLocale())
    return (
      <div>
        {this.renderCardBox()}
      </div>
    )
  }
}


export default Workbench