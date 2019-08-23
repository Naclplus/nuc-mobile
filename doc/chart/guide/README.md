# Guide 辅助元素
:::doc
## 简介
用于绘制图表的辅助元素 具体的概念介绍请参见 [F2 Guide](https://www.yuque.com/antv/f2/api-guide)
:::

:::doc
## 如何使用辅助元素
```javascript
import { Chart } from 'nuc-mobile'
const Guide = Chart.Guide
const Arc = Guide.Arc // 辅助圆弧，只适用于极坐标
const Html = Guide.Html // 辅助html
const Text = Guide.Text // 辅助文本
const Rect = Guide.Rect // 辅助背景框
const Line = Guide.Line // 辅助线
const Tag = Guide.Tag // 辅助 Tag
const Point = Guide.Point // 辅助点
const RegionFilter = Guide.RegionFilter // 辅助过滤区域
```
```html
<nuc-chart :data="data">
    <nuc-guide>
        <nuc-guide-arc />
        <nuc-guide-html />
        <nuc-guide-text />
        <nuc-guide-rect />
        <nuc-guide-line />
        <nuc-guide-tag />
        <nuc-guide-point />
        <nuc-guide-region-filter />
    </nuc-guide>
</nuc-chart>
```
更多参数参照下方API
:::

## API
:::doc
## Line 辅助线
### top
* 类型：Boolean
* 描述：指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层

### start
* 类型：Function | Array
* 描述：指定辅助线的起始位置，该值的类型如下：
* Array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    * x，y 都是原始数据 [ '2010-01-01', 200 ];
    * x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
    * x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
    * 如果 x 或者 y 对应的数据类型为 cat（分类）或者 timeCat（时间分类），还可以直接使用索引值
* Function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

### end
* 类型：Function | Array
* 描述：辅助线结束位置，值为原始数据值，使用同start

### styles
* 类型：Object
* 描述：图形样式配置，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)

### limit-in-plot
* 类型：Boolean
* 描述：是否将 guide 元素限制在绘图区域图，默认为 false
:::

:::doc
## Text 辅助文本
### top
* 类型：Boolean
* 描述：指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
### position
* 类型：Function | Array
* 描述：指定辅助文本的显示位置，该值的类型如下：
* Array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    * x，y 都是原始数据 [ '2010-01-01', 200 ];
    * x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
    * x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
    * 如果 x 或者 y 对应的数据类型为 cat（分类）或者 timeCat（时间分类），还可以直接使用索引值
* Function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景
### content
* 类型：String
* 描述：显示的文本内容
### styles
* 类型：Object
* 描述：图形样式配置，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)
### offset-x
* 类型：Number
* 描述：x 方向的偏移量
### offset-y
* 类型：Number
* 描述：y 方向的偏移量
### limit-in-plot
* 类型：Boolean
* 描述：是否将 guide 元素限制在绘图区域图，默认为 false
:::

:::doc
## Point 辅助点
### top
* 类型：Boolean
* 描述：指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
### position
* 类型：Function | Array
* 描述：指定辅助点的显示位置，该值的类型如下：
* Array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    * x，y 都是原始数据 [ '2010-01-01', 200 ];
    * x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
    * x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
    * 如果 x 或者 y 对应的数据类型为 cat（分类）或者 timeCat（时间分类），还可以直接使用索引值
* Function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景
### styles
* 类型：Object
* 描述：图形样式配置，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)
### offset-x
* 类型：Number
* 描述：x 方向的偏移量
### offset-y
* 类型：Number
* 描述：y 方向的偏移量
### limit-in-plot
* 类型：Boolean
* 描述：是否将 guide 元素限制在绘图区域图，默认为 false
:::

:::doc
## Tag 辅助标签
### top
* 类型：Boolean
* 描述：指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
### position
* 类型：Function | Array
* 描述：指定tag的显示位置，该值的类型如下：
* Array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    * x，y 都是原始数据 [ '2010-01-01', 200 ];
    * x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
    * x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
    * 如果 x 或者 y 对应的数据类型为 cat（分类）或者 timeCat（时间分类），还可以直接使用索引值
* Function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景
### content
* 类型：String
* 描述：tag 的文本内容，支持文本换行，只需要在文本中写入 '\n'，如 '最大值\n200'
### direct
* 类型：String
* 描述：箭头朝向，默认为 'tl'，但是当 tag 超出画布范围时，会进行自动调整
### auto-adjust
* 类型：Boolean
* 描述：当 tag 超出画布范围时，是否进行自动调整。默认为 true
### side
* 类型：Number
* 描述：三角标的边长，默认为 4
### offset-x
* 类型：Number
* 描述：x 方向的偏移量
### offset-y
* 类型：Number
* 描述：y 方向的偏移量
### background
* 类型：Object
* 描述：tag 背景样式，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)
### text-style
* 类型：Object
* 描述：tag 文本样式，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)
### with-point
* 类型：Boolean
* 描述：是否带点，默认带
### point-style
* 类型：Object
* 描述：点的样式，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)
### limit-in-plot
* 类型：Boolean
* 描述：是否将 guide 元素限制在绘图区域图，默认为 false
:::

:::doc
## Rect 辅助框
### top
* 类型：Boolean
* 描述：指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
### start
* 类型：Function | Array
* 描述：指定辅助框的起始位置，该值的类型如下：
* Array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    * x，y 都是原始数据 [ '2010-01-01', 200 ];
    * x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
    * x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
    * 如果 x 或者 y 对应的数据类型为 cat（分类）或者 timeCat（时间分类），还可以直接使用索引值
* Function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景
### end
* 类型：Function | Array
* 描述：辅助框结束位置，值为原始数据值，用法同 start。
### styles
* 类型：Object
* 描述：图形样式配置，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)
### limit-in-plot
* 类型：Boolean
* 描述：是否将 guide 元素限制在绘图区域图，默认为 false
:::

:::doc
## Html 辅助html
### position
* 类型：Function | Array
* 描述：指定html的显示位置，该值的类型如下：
* Array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    * x，y 都是原始数据 [ '2010-01-01', 200 ];
    * x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
    * x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
    * 如果 x 或者 y 对应的数据类型为 cat（分类）或者 timeCat（时间分类），还可以直接使用索引值
* Function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景
### align-x
* 类型：String
* 描述：x 反向对齐方式 可选`left` `center` `right`
### align-y
* 类型：String
* 描述：x 反向对齐方式 可选`top` `middle` `bottom`
### offset-x
* 类型：Number
* 描述：x 方向的偏移量
### offset-y
* 类型：Number
* 描述：y 方向的偏移量
### html
* 类型：String
* 描述：html 代码
### limit-in-plot
* 类型：Boolean
* 描述：是否将 guide 元素限制在绘图区域图，默认为 false
:::

:::doc
## Arc 辅助框
### top
* 类型：Boolean
* 描述：指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
### start
* 类型：Function | Array
* 描述：指定圆弧的起始位置，该值的类型如下：
* Array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
    * x，y 都是原始数据 [ '2010-01-01', 200 ];
    * x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
    * x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
    * 如果 x 或者 y 对应的数据类型为 cat（分类）或者 timeCat（时间分类），还可以直接使用索引值
* Function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景
### end
* 类型：Function | Array
* 描述：辅助圆弧结束位置，值为原始数据值，用法同 start。
### styles
* 类型：Object
* 描述：图形样式配置，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)
### limit-in-plot
* 类型：Boolean
* 描述：是否将 guide 元素限制在绘图区域图，默认为 false
:::

:::doc
## RegionFilter 辅助框
### top
* 类型：Boolean
* 描述：指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
### start
* 类型：Function | Array
* 描述：指定起始位置，该值的类型如下：
* Array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
     * x，y 都是原始数据 [ '2010-01-01', 200 ];
     * x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
     * x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
     * 如果 x 或者 y 对应的数据类型为 cat（分类）或者 timeCat（时间分类），还可以直接使用索引值
* Function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景
### end
* 类型：Function | Array
* 描述：结束位置，值为原始数据值，用法同 start。
### color
* 类型：String
* 描述：设置过滤区域的颜色
### styles
* 类型：Object
* 描述：过滤区域 shape 附加的样式设置，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)
:::
