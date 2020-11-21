/*
 * @Descripttion: 工作台
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-08 16:19:28
 * @LastEditors: Ethan Zhang
<<<<<<< Updated upstream
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
=======
 * @LastEditTime: 2020-08-08 09:36:17
 */

import React from 'react'
import styles from './Workbench.module.less'
import CardBox from './renderCard'
import TabsLarge from './renderTabsLarge'
import { compose } from '@/utils/compose'
import APromise from '@/utils/APromise'
import myFn from '@/utils/call-bind-apply'
import ThemeContext from '@/themeContext'
import Select from '@/components/Select'

class Workbench extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      count: 0
    }
  }
  static contextType = ThemeContext
  // 转大写
  stringToUpper = str => {
    return str.toUpperCase()
  }
  // 翻转
  stringReverse = str => {
    return str.split('').reverse().join('')
  }
  // 转数组
  stringToArray = str => {
    return str.split('')
  }
  componentDidMount() {
    let obj = [
      1,
      2,
      3,
      {
        name:null,
        age:18,
        sa:undefined,
        get:function(){ { return this.age } }
      },
      undefined
    ]
    let obj2 = JSON.parse(JSON.stringify(obj))
    console.log(obj2)
    console.log(obj[3].get())
  }
  shallowCopy = (target,source) => {
    if(!source || typeof source !== 'object' ){
      return
    }
    if(!target || typeof target !== 'object'){
      return 
    }
    if(target instanceof Array && source instanceof Array){
      for(let i = 0;i<source.length;i++){
        target[i] = source[i]
      }
      return target
    }
    if(target instanceof Object && source instanceof Object){
      for(let key in source){
        if(source.hasOwnProperty(key)){
          target[key] = source[key]
        }
      }
      return target
    }
  }
  deepCopy = (target,source) => {
    if(!source || typeof source !== 'object' ){
      return
    }
    if(!target || typeof target !== 'object'){
      return 
    }
    if(target instanceof Object && source instanceof Object){
      for(let key in source){
        if(source.hasOwnProperty(key)){
          if(source[key] && typeof source[key] === 'object'){
            target[key] = Array.isArray(source[key]) ? [] : {}
            this.deepCopy(target[key],source[key])
          }else{
            target[key] = source[key]
          }
        }
      }
      return target
    }
>>>>>>> Stashed changes
  }
  render() {
<<<<<<< Updated upstream
    console.log('styles->', styles)
    return (
=======
    return ( 
>>>>>>> Stashed changes
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