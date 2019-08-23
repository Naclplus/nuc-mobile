# Tooltip 提示信息

:::doc 
## 简介
当鼠标悬停在某个点上时，会以提示框的形式显示当前点对应的数据的信息，比如该点的值，数据单位等，帮助用户从图表中获取具体的数据信息。 具体的概念介绍请参见 [F2 Legend](https://www.yuque.com/antv/f2/tooltip)
:::

:::doc
## 如何使用提示信息
```javascript
import { Tooltip } from 'nuc-mobile'
const Tooltip = Chart.Tooltip
```
```html
<nuc-chart :data="data">
    <nuc-tooltip :show-title="true" /> <!-- 设置提示信息显示标题 -->
</nuc-chart>
```
更多参数参照下方API
:::

## API
:::doc
### visible
* 类型：Boolean
* 描述：当前提示信息是否需要可见，默认值true

### always-show
* 类型：Boolean
* 描述：当移出触发区域，是否仍显示提示框内容，默认为 false，移出触发区域 tooltip 消失，设置为 true 可以保证一直显示提示框内容

### offset-x
* 类型：Number
* 描述：x 方向的偏移

### offset-y
* 类型：Number
* 描述：y 方向的偏移

### trigger-on
* 类型：Array 默认(`[ 'touchstart', 'touchmove' ]`)
* 描述：tooltip 出现的触发行为，可自定义，用法同 legend 的 triggerOn

### trigger-off
* 类型：String 默认(`'touchend'`)
* 描述：消失的触发行为，可自定义

### show-title
* 类型：Boolean
* 描述：是否展示标题，默认不展示

### show-crosshairs
* 类型：Boolean
* 描述：是否显示辅助线，点图、路径图、线图、面积图默认展示

### crosshairs-style
* 类型：Object
* 描述：配置辅助线的样式

### show-tooltip-marker
* 类型：Boolean
* 描述：是否显示 tooltipMarker 默认显示

### tooltip-marker-style
* 类型：Object
* 描述：设置 tooltipMarker 的样式

### background
* 类型：Object
* 描述：tooltip 内容框的背景样式

### title-style
* 类型：Object
* 描述：tooltip 标题的文本样式配置，`show-title` 属性为 `false` 时不生效

### name-style
* 类型：Object
* 描述：tooltip name 项的文本样式配置

### value-style
* 类型：Object
* 描述：tooltip value 项的文本样式配置

### show-item-marker
* 类型：Boolean
* 描述：是否展示每条记录项前面的 marker 默认展示

### item-marker-style
* 类型：Object
* 描述：每条记录项前面的 marker 的样式配置

### custom
* 类型：Boolean
* 描述：是否自定义 tooltip 提示框 默认`false`

### crosshairs-type
* 类型：String
* 描述：配置辅助线的类型，可选值为：`'x'` / `'y'` / `'xy'`。

### show-x-tip
* 类型：Boolean
* 描述：x 轴辅助信息的开关，默认关闭不展示。 默认`false`

### show-y-tip
* 类型：Boolean
* 描述：y 轴辅助信息的开关，默认关闭不展示。 默认`false`

### x-tip
* 类型：Object / Function
* 描述：配置 x 轴辅助信息的文本样式，可以是回调函数，用于格式化文本。

### y-tip
* 类型：Object / Function
* 描述：配置 x 轴辅助信息的文本样式，可以是回调函数，用于格式化文本。

### x-tip-background
* 类型：Object
* 描述：配置 x 轴辅助信息的背景框样式。

### y-tip-background
* 类型：Object
* 描述：配置 y 轴辅助信息的背景框样式。

### snap
* 类型：Boolean
* 描述：是否将辅助线准确定位至数据点，默认为 `false`。
:::

## Event
:::doc
### @on-show(ev)
* 描述：tooltip 显示时的回调函数

### @on-hide(ev)
* 描述：tooltip 隐藏时的回调函数

### @on-change(ev)
* 描述：tooltip 内容发生改变时的回调函数
:::
