# ScrollBar 滚动条

:::doc
## 简介
主要用于辅助 pan 和 pinch 交互。
:::

:::doc
## 如何使用滚动条
```javascript
import { Chart } from 'nuc-mobile'
const ScrollBar = Chart.ScrollBar
```
```html
<nuc-chart :data="data">
    <nuc-scroll-bar mode="x" /> <!-- 在 x 轴上渲染滚动条 -->
</nuc-chart>
```
更多参数参照下方API
:::

## API
:::doc
### mode
* 类型：String
* 默认值：`x`
* 描述：用于确定进度条的渲染方向，可选值为 'x', 'y', 'xy'
### x-style
* 类型：Object
* 默认值：
```javascript
{
    backgroundColor: 'rgba(202, 215, 239, .2)',
    fillerColor: 'rgba(202, 215, 239, .5)',
    size: 4,
    lineCap: 'round',
    offsetX: 0,
    offsetY: 8
}
```
* 描述：用于设置 x 轴方向进度条的样式，其中：
    * `backgroundColor`：进度条背景色
    * `fillColor`: 范围进度条的背景色
    * `size`: 进度条线宽
    * `lineCap`: line 的图形属性
    * `offsetX`: 进度条 x 方向的偏移量
    * `offsetY`: 进度条 y 方向的偏移量
### y-style
* 类型：Object
* 默认值：
```javascript
{
    backgroundColor: 'rgba(202, 215, 239, .2)',
    fillerColor: 'rgba(202, 215, 239, .5)',
    size: 4,
    lineCap: 'round',
    offsetX: 0,
    offsetY: 8
}
```
* 描述：用于设置 x 轴方向进度条的样式，其中：
    * `backgroundColor`：进度条背景色
    * `fillColor`: 范围进度条的背景色
    * `size`: 进度条线宽
    * `lineCap`: line 的图形属性
    * `offsetX`: 进度条 x 方向的偏移量
    * `offsetY`: 进度条 y 方向的偏移量
:::
