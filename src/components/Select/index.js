/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-29 20:31:38
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-31 17:09:02
 */
import React from 'react'
import cx from 'classnames'
import { Form, Input, Button, Radio } from 'antd';
import styles from './index.less'
import Test from './test'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
    this.head()
  }
  head = () => {
    const id = setInterval(() => {
      console.log('123')
      this.setState((state)=>({
        count:state.count + 1
      }))
    }, 1000);
  }
  render() {
    // console.log('this.state.list->', this.state.list)
    // console.log('this.state.isShow->',this.state.isShow)
    console.log('render')
    return (
      <ul>
        <Test
          value={this.state.count}
        />
      </ul>
    )
  }
}

export default Select