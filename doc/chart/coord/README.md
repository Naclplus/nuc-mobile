# Coord 坐标系
:::doc
## 简介
设置坐标系，F2 支持两种坐标系：笛卡尔坐标系和极坐标系，默认使用笛卡尔坐标系。具体的概念介绍请参见 [F2 Coordinate](https://www.yuque.com/antv/f2/api-coordinate)
:::

:::doc
## 如何使用坐标系
```javascript
import { Chart } from 'nuc-mobile'
const Coord = Chart.Coord
```
```html
<nuc-chart :data="data">
    <nuc-coord type="rect" /> <!-- 默认为rect 笛卡尔坐标系 -->
</nuc-chart>
<nuc-chart :data="data">
    <nuc-coord type="polar" /> <!-- 切换为极坐标系 -->
</nuc-chart>
```
更多参数参照下方API
:::

## API

:::doc
## 笛卡尔坐标系
### start
* 类型：Object
* 描述：坐标系的起始点，F2 图表的坐标系原点位于左下角。

### end
* 类型：Object
* 描述：坐标系右上角的画布坐标。

### transposed
* 类型：Boolean
* 描述：是否发生转置，true 表示发生了转置。

### isRect
* 类型：Boolean
* 描述：是否是直角坐标系，直角坐标系下为 true。
:::

:::doc
## 极坐标系
### start-angle
* 类型：Number
* 描述：极坐标的起始角度，弧度制。

### end-angle
* 类型：Number
* 描述：极坐标的结束角度，弧度制。

### inner-radius
* 类型：Number
* 描述：绘制环图时，设置内部空心半径，相对值，0 至 1 范围。

### radius
* 类型：Number
* 描述：设置圆的半径，相对值，0 至 1 范围。

### is-polar
* 类型：Boolean
* 描述：判断是否是极坐标，极坐标下为 true。

### transposed
* 类型：Boolean
* 描述：是否发生转置，true 表示发生了转置。

### center
* 类型：Object
* 描述：极坐标的圆心所在的画布坐标。

### circle-radius
* 类型：Number
* 描述：极坐标的半径值。
:::

## 示例
:::doc
### 环图
```html
<nuc-chart :source="data">
    <nuc-legend position="right" />
    <nuc-axis :visible="false" />
    <nuc-coord type="polar" :transposed="true" :inner-radius="0.7" />
    <nuc-geom type="interval" position="a*proportion" color="name" adjust="stack" />
</nuc-chart>
```
```javascript
const data = [
    { name: '芳华', proportion: 0.4, a: '1' },
    { name: '妖猫传', proportion: 0.2, a: '1' },
    { name: '机器之血', proportion: 0.18, a: '1' },
    { name: '心理罪', proportion: 0.15, a: '1' },
    { name: '寻梦环游记', proportion: 0.05, a: '1' },
    { name: '其他', proportion: 0.02, a: '1' }
]
export default {
    data () {
        return {
            data
        }
    }
}
```

### 半圆
```html
<nuc-chart :source="data">
    <nuc-legend position="bottom" align="center" />
    <nuc-axis :visible="false" />
    <nuc-coord type="polar" :transposed="true" :start-angle="-Math.PI" :end-angle="0" />
    <nuc-geom type="interval" position="a*proportion" color="name" adjust="stack" />
</nuc-chart>
```
```javascript
const data = [
    { name: '芳华', proportion: 0.4, a: '1' },
    { name: '妖猫传', proportion: 0.2, a: '1' },
    { name: '机器之血', proportion: 0.18, a: '1' },
    { name: '心理罪', proportion: 0.15, a: '1' },
    { name: '寻梦环游记', proportion: 0.05, a: '1' },
    { name: '其他', proportion: 0.02, a: '1' }
]
export default {
    data () {
        return {
            data
        }
    }
}
```
:::
