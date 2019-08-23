# Axis 坐标轴

:::doc
## 简介
每个图表通常包含两个坐标轴，在直角坐标系（笛卡尔坐标系）下，分别为 x 轴和 y 轴，在极坐标轴下，则分别由角度和半径 2 个维度构成。每个坐标轴由坐标轴线（line）、刻度线（tickLine）、刻度文本（label）以及网格线（grid）组成。具体的概念介绍请参见 [F2 Axis](https://www.yuque.com/antv/f2/api-axis)

坐标轴配置。F2 的坐标轴的组成如下：

<img src="https://gw.alipayobjects.com/zos/rmsportal/YhhBplZmzxzwvUBeEvPE.png" width="500">

| 术语 | 英文 |
|-----|------|
| 坐标轴文本 | label |
| 坐标轴线 | line |
| 坐标轴刻度线 | tickLine |
| 坐标轴网格线 | grid |
:::

:::doc
## 如何使用坐标轴
```javascript
import { Chart } from 'nuc-mobile'
const Axis = Chart.Axis
```
```html
<nuc-chart :data="data">
    <nuc-axis :visible="false" /> <!-- 设置全部坐标轴 不可见 -->
</nuc-chart>
<nuc-chart :data="data">
    <nuc-axis name="x" :visible="false" />  <!-- 设置 x 属性字段坐标轴 不可见 -->
</nuc-chart>
```
更多参数参照下方API
:::


:::doc
## API
### name
* 类型：String
* 描述：当前坐标轴对应数据源中的字段名

### visible
* 类型：Boolean
* 描述：当前坐标轴是否需要可见，默认值true，如未指定name则生效与所有坐标轴

### line
* 类型：Object / null
* 描述：坐标轴线的配置信息，设置 null 时不显示，支持所有的 canvas 属性，参考[绘图属性](https://www.yuque.com/antv/f2/canvas)，如需调整显示层级，可设置 top: true 展示在最上层图形或者 top: false 展示在最下层图形。

### labelOffset
* 类型：Number
* 描述：坐标轴文本距离轴线的距离

### grid
* 类型：Object / Function / null
* 描述：坐标轴网格线的配置项，设置 null 时不显示，支持所有的 canvas 属性，参考[绘图属性](https://www.yuque.com/antv/f2/canvas)，支持回调函数，另外在极坐标下，可以通过配置 type: 'arc' 将其绘制为圆弧；如需调整显示层级，可设置 top: true 展示在最上层图形或者 top: false 展示在最下层图形。

### tickLine
* 类型：Object / null
* 描述：坐标轴刻度线的样式配置，设置 null 不显示，支持所有的 canvas 属性 ，参考[绘图属性](https://www.yuque.com/antv/f2/canvas)，如需调整显示层级，可设置 top: true 展示在最上层图形或者 top: false 展示在最下层图形。

### label
* 类型：Object / Function / null
* 描述：坐标轴文本配置，设置 null 不显示, 支持所有的 canvas 属性，参考[绘图属性](https://www.yuque.com/antv/f2/canvas)，支持回调函数，如需调整显示层级，可设置 top: true 展示在最上层图形或者 top: false 展示在最下层图形。

### position
* 类型：String
* 描述：坐标轴显示位置配置，x 轴默认位于底部 'bottom'，y 轴可设置 position 为 'left'、'right'

:::
