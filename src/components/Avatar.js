/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-05 16:09:06
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-06 18:32:36
 */ 
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    console.log(state)
}

const mapDispatchToProps  = dispatch => {
    
}

let Avatar = (props) => {
    console.log(props)
    return <div>123</div>
}

Avatar = connect(mapStateToProps,mapDispatchToProps)(Avatar)

export default Avatar