/*
 * @Descripttion: 定制样式
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-06-06 18:11:07
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-06-06 18:42:18
 */
import less from 'less'

/**
 * @method 定制样式
 * @param { object } styles 样式对象
 * styles : {
 *  '@primary-color': '#1890ff', // 全局主色
 *  '@link-color': '#1890ff', // 链接色
 *  '@success-color': '#52c41a', // 成功色
 *  '@warning-color': '#faad14', // 警告色
 *  '@error-color': '#f5222d', // 错误色
 *  '@font-size-base': '14px', // 主字号
 *  '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
 *  '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
 *  '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
 *  '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
 *  '@border-radius-base': '4px', // 组件/浮层圆角
 *  '@border-color-base': '#d9d9d9', // 边框色
 *  '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
 *  ...
 * }
 */
const setTheme = (styles) => {
  less.modifyVars(styles);
}

export default setTheme
