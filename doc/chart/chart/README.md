# Chart
:::doc
## 简介
渲染一个 chart 实例，其所有子组件的父级组件

通过 ref 可以获取到 chart 实例并调用实例方法，更多请参照 [F2 Chart](https://www.yuque.com/antv/f2/api-chart)
:::

:::doc
## 如何使用Chart
```javascript
import { Chart } from 'nuc-mobile'
```
```html
<nuc-chart :data="data">
    <!-- some component e.g. (geom, axis..) -->
</nuc-chart>
```
更多参数参照下方API
:::

## API
:::doc
### source
* 参数类型：Array
* 描述：数据源
* 默认值：[]
### scale
* 参数类型：Object
* 描述：scale度量配置，请参照[Scale 度量](https://www.yuque.com/antv/f2/api-scale)
* 默认值：null
### width
* 参数类型：Number | String
* 描述：图表的宽度
* 默认值：null
### height
* 参数类型：Number | String
* 描述：图表的高度
* 默认值：null
### padding
* 参数类型：Number | Array | String
* 描述：图表绘图区域和画布边框的间距，用于显示坐标轴文本、图例
* 默认值：'auto'，自动计算
```html
<!--默认值，自动计算 padding-->
<nuc-chart padding="auto"></nuc-chart>
<!--分别设置上、右、下、左边距-->
<nuc-chart :padding="[ 0, 10, 40, 100 ]"></nuc-chart> 
<!--单个值-->
<nuc-chart :padding="40"></nuc-chart>
<!--指定几个方向自动计算 padding-->
<nuc-chart :padding="[ 40, 10, 'auto', 'auto' ]"></nuc-chart> 
```
### append-padding
* 参数类型：Number/Array
* 描述：图表画布区域四边的预留边距，即我们会在 padding 的基础上，为四边再加上 append-padding 的数值，默认为 15。
* 默认值：15
### pixel-ratio
* 参数类型：Number
* 描述：屏幕画布的像素比
* 默认值：`window.devicePixelRatio`
### animate
* 参数类型：Boolean
* 描述：是否关闭 chart 的动画
* 默认值：null
### sync-y
* 参数类型: Boolean
* 描述：用于多 Y 轴的情况下，统一 Y 轴的数值范围。
* 默认值：false
### always-show-tooltip
* 参数类型: Boolean
* 描述：一般用于动态渲染数据时，tooltip会消失的问题
* 默认值：false
:::
