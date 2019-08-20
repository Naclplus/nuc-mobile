# NucChart

:::doc
## 简介
NucChart是基于[F2@蚂蚁金服(MIT license)](https://antv.alipay.com/zh-cn/f2/3.x/index.html)封装的图表组件。   
组件部分属性可能未列出，可以直接参考[F2文档](https://www.yuque.com/antv/f2)  
:::

:::doc
## 引入
```javascript
import { Chart } from 'nuc-mobile'
```
该组件提供以下子组件  
[Geom 几何标记组件](#/chart/geom)  
[Axis 坐标轴组件](#/chart/axis)  
[Coord 坐标系组件](#/chart/coord)  
[Legend 图例组件]()  
[ScrollBar 滚动条组件]()  
[Tooltip 动态提示组件]()  
[Guide 辅助标记组件]()  
[Interaction 交互组件]()  
```javascript
const { Axis, Coord, Geom, Legend, ScrollBar, Tooltip, Guide, Interaction } = Chart
```
:::

:::doc
## 基础用法
```html
<nuc-chart :source="data" :scale="scale">
    <nuc-geom type="interval" position="year*sales" />
</nuc-chart>
```
```javascript
let data = [{
    year: '1951 年',
    sales: 38
}, {
    year: '1952 年',
    sales: 52
}, {
    year: '1956 年',
    sales: 61
}, {
    year: '1957 年',
    sales: 145
}, {
    year: '1958 年',
    sales: 48
}, {
    year: '1959 年',
    sales: 38
}, {
    year: '1960 年',
    sales: 38
}, {
    year: '1962 年',
    sales: 38
}]
export default {
    data () {
        return {
            data,
            scale: {
                sales: {
                    tickCount: 5
                }
            }
        }
    }
}
```
:::
