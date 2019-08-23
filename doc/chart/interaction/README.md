# Interaction
:::doc
## 简介
F2 提供一套交互机制，以达到通用交互行为的封装和复用。具体的概念介绍请参见 [F2 Interaction](https://www.yuque.com/antv/f2/api-interaction)
:::

:::doc
## 如何使用交互机制
```javascript
import { Interaction } from 'nuc-mobile'
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
