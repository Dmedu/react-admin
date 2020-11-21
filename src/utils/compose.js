/*
 * @Descripttion: 函数组合
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-20 19:54:05
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-23 13:50:32
 */

// ...args : right -> left
// Array.reduce : 累加器
// 参数：回调、初始值
// 回调 -> 参数：累加器、当前值、当前值索引、源数组
// 参数累加器 -> 值：回调返回的结果
export const pipe = (...args) => (
  result => (
    args.reduce(
      (result,fn)=>(fn(result)),
      result
    )
  )
)

// ...args : left -> right
export const compose = (...args) => (
  result => (
    args.reduceRight(
      (result,fn)=>( fn(result) ),
      result
    )
  )
)