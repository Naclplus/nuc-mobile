# Interaction
:::doc
## 简介
F2 提供一套交互机制，以达到通用交互行为的封装和复用。具体的概念介绍请参见 [F2 Interaction](https://www.yuque.com/antv/f2/api-interaction)
:::

:::doc
## 如何使用交互机制
```javascript
import { Chart } from 'nuc-mobile'
const Interaction = Chart.Interaction
const PieSelect = Interaction.PieSelect  // 饼图选中
const IntervalSelect = Interaction.IntervalSelect // 柱状图选中
const Pan = Interaction.Pan // 平移
const Pinch = Interaction.Pinch // 缩放
const Swipe = Interaction.Swipe // 快扫
```
```html
<nuc-chart :data="data">
    <nuc-interaction>
        <nuc-interaction-pie-select />
        <nuc-interaction-interval-select />
        <nuc-interaction-pan />
        <nuc-interaction-pinch />
        <nuc-interaction-swipe />
    </nuc-interaction>
</nuc-chart>
```
更多参数参照下方API
:::


## API
:::doc
## PieSelect 饼图选中
### start-event
* 类型：String
* 默认值：'tap'
* 描述：该交互原则上是手指点击后触发的，除去 'tap'，还可以使用 'touchstart'
### animate
* 类型：Boolean | Object
* 默认值：false
* 描述：动画配置，默认为 false，可将该属性设置为 true 来打开动画。当为 Object 类型时，用于进行动画配置。动画参数的设置详见 [Animation 动画](https://www.yuque.com/antv/f2/api-animate)
### offset
* 类型：Number
* 默认值：8
* 描述：选中后出现的光环的轴长。
### styles
* 类型：Object
* 默认值：`{ fillOpacity: 0.5 }`
* 描述：设置光环的样式。
### cancelable
* 类型：Boolean
* 默认值：true
* 描述：当 shape 被选中后，再次点击是否允许取消选中，默认为 true，表示会取消选中。
### default-selected
* 类型：Object
* 默认值：null
* 描述：用于设置初始化默认选中的数据，只要传入对应的数据即可
## Event
### @on-start(ev)
事件触发后的回调。
### @on-end(ev)
事件结束后的回调函数，用于可以基于该回调函数进行相应的操作。
:::

:::doc
## 柱状图选中
### start-event
* 类型：String
* 默认值：'tap'
* 描述：该交互原则上是手指点击后触发的，除去 'tap'，还可以使用 'touchstart'
### select-style
* 类型：Object
* 默认值：`{fillOpacity: 1}`
* 描述：用于设置被选中柱子的显示样式。
### un-select-style
* 类型：Object
* 默认值：`{fillOpacity: 0.4}`
* 描述：用于设置未被选中柱子的显示样式。如果不需要设置，可以直接设置为 `null`。
### select-axis
* 类型：Boolean
* 默认值：true
* 描述：是否高亮坐标轴文本，默认为 true，会高亮。如不需要，可以选择关闭。
### select-axis-style
* 类型：Object
* 默认值：`{ fontWeight: 'bold' }`
* 描述：设置坐标轴文本高亮的样式。默认只是文字加粗。
### cancelable
* 类型：Boolean
* 默认值：true
* 描述：当 shape 被选中后，再次点击是否允许取消选中，默认为 true，表示会取消选中。
### mode
* 类型：String
* 默认值：'shape'
* 描述：选中策略，默认为 'shape', 即击中柱子才会触发交互。另一个可选值为 'range'，即只要集中点落在该柱子的一定 x 方向范围内都会触发选中交互。
### default-selected
* 类型：Object
* 默认值：null
* 描述：用于设置初始化默认选中的数据，只要传入对应的数据即可
## Event
### @on-start(ev)
事件触发后的回调。
### @on-end(ev)
事件结束后的回调函数，用于可以基于该回调函数进行相应的操作。
:::

:::doc
## Pan 平移
### mode
* 类型：String
* 默认值：'x'
* 描述：图表的平移方向，可设置 x 轴、y 轴以及 x、y 两个方向的平移操作。默认值为 'x'，即 x 轴平移。
> 注意，对于分类类型或者 TimeCat 类型的数据，只支持 x 轴方向的平移。
### speed
* 类型：Number
* 默认值：5
* 描述：用于控制平移速度，数值越大，速度越快，<font color="red">仅适用于分类类型 'cat' 或者时间类型 'timeCat' 数据。</font>
### step
* 类型: Number
* 默认值：1
* 描述：用于控制每次平移的数据量，<font color="red">仅适用于分类类型 'cat' 或者时间类型 'timeCat' 数据。</font>
### pan-threshold
* 类型：Number
* 默认值：10
* 描述：hammer.js 设置，用于设置识别 pan 事件的最小移动距离，详见 [http://hammerjs.github.io/recognizer-pan/](http://hammerjs.github.io/recognizer-pan/)
### press-threshold
* 类型：Number
* 默认值：9
* 描述：hammer.js 设置，用于设置识别 press 事件的最小移动距离，详见 [http://hammerjs.github.io/recognizer-press/](http://hammerjs.github.io/recognizer-press/)
长按会触发 tooltip。
### press-time
* 类型：Number
* 默认值：251
* 描述：hammer.js 设置，用于设置识别 press 事件的最小时间差，详见 [http://hammerjs.github.io/recognizer-press/](http://hammerjs.github.io/recognizer-press/)
长按会触发 tooltip。
### limit-range
* 类型：Object
* 默认值： {}
* 描述：用于设置图表平移的最大最小范围，需要同 x 或者 y 轴对应的数据字段对应，使用如下：
```javascript
// 假设 x 轴对应的数据字段名为 fieldA
limitRange: {
  fieldA: {
    min: 0, // 最小值
    max: 100 // 最大值
  }
}
```
设置之后，图表只会在 x 轴的 0 - 100 数值范围内移动。
## Event
### @on-start(ev)
事件触发后的回调。
### @on-process(ev)
事件进行中的回调。
### @on-end(ev)
事件结束后的回调函数，用于可以基于该回调函数进行相应的操作。
:::

:::doc
## Pinch 缩放
### mode
* 类型：String
* 默认值：'x'
* 描述：图表的平移方向，可设置 x 轴、y 轴以及 x、y 两个方向的平移操作。默认值为 'x'，即 x 轴平移。
> 注意，对于分类类型或者 TimeCat 类型的数据，只支持 x 轴方向的平移。
## sensitivity
* 类型：Number
* 默认值：1
* 描述：用于控制缩放灵敏度，值越小越灵敏，<font color="red">仅适用于分类类型 'cat' 或者时间类型 'timeCat' 数据。</font>
## min-scale
* 类型：Number
* 默认值：linear 类型数据为 null，分类类型以及 TimeCat 类型数据默认为 1
* 描述：设置图表缩小时的最小倍数。
## max-scale
* 类型：Number
* 默认值：linear 类型数据为 null，分类类型以及 TimeCat 类型数据默认为 4
* 描述：设置图表放大时的最大倍数。
### press-threshold
* 类型：Number
* 默认值：9
* 描述：hammer.js 设置，用于设置识别 press 事件的最小移动距离，详见 [http://hammerjs.github.io/recognizer-press/](http://hammerjs.github.io/recognizer-press/)
长按会触发 tooltip。
### press-time
* 类型：Number
* 默认值：251
* 描述：hammer.js 设置，用于设置识别 press 事件的最小时间差，详见 [http://hammerjs.github.io/recognizer-press/](http://hammerjs.github.io/recognizer-press/)
长按会触发 tooltip。
## Event
### @on-start(ev)
事件触发后的回调。
### @on-process(ev)
事件进行中的回调。
### @on-end(ev)
事件结束后的回调函数，用于可以基于该回调函数进行相应的操作。
:::

:::doc
## Swipe 快扫
### speed
* 类型：Number
* 默认值：5
* 描述：用于控制平移速度，数值越大，速度越快，<font color="red">仅适用于分类类型 'cat' 或者时间类型 'timeCat' 数据。</font>
### press-threshold
* 类型：Number
* 默认值：9
* 描述：hammer.js 设置，用于设置识别 swipe 事件的最小移动距离，详见 [http://hammerjs.github.io/recognizer-swipe/](http://hammerjs.github.io/recognizer-swipe/)
### velocity
* 类型：Number
* 默认值：0.3
* 描述：hammer.js 设置，用于设置 swipe 移动的最小速度，详见 [http://hammerjs.github.io/recognizer-swipe/](http://hammerjs.github.io/recognizer-swipe/)
### limit-range
* 类型：Object
* 默认值： {}
* 描述：用于设置图表平移的最大最小范围，需要同 x 或者 y 轴对应的数据字段对应，使用如下：
```javascript
// 假设 x 轴对应的数据字段名为 fieldA
limitRange: {
  fieldA: {
    min: 0, // 最小值
    max: 100 // 最大值
  }
}
```
## Event
### @on-start(ev)
事件触发后的回调。
### @on-process(ev)
事件进行中的回调。
### @on-end(ev)
事件结束后的回调函数，用于可以基于该回调函数进行相应的操作。
:::
