/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: Ethan Zhang
 * @Email: 610558983@qq.com
 * @WeChat: 610558983
 * @GitHub: https://github.com/Dmedu
 * @Date: 2020-07-15 15:57:08
 * @LastEditors: Ethan Zhang
 * @LastEditTime: 2020-07-15 16:08:41
 */
import React from 'react'
import {
  Chart,
  Axis,
  Tooltip as BizTooltip,
  Geom
} from 'bizcharts'

const renderGeom = ({
  data,
  scale,
  ...rest
}) => {
  return (
    <Chart
      data={data}
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
      <Geom {...rest} />
    </Chart>
  )
}

export default renderGeom