# Legend 图例

:::doc 
## 简介
F2 图例的生成是由图形语法中的图形属性决定的，我们会根据图形属性映射以及数据的类型自动生成不同类型的图例。具体的概念介绍请参见 [F2 Legend](https://www.yuque.com/antv/f2/api-legend)
:::

:::doc
## 如何使用图例
```javascript
import { Chart } from 'nuc-mobile'
const Legend = Chart.Legend
```
```html
<nuc-chart :data="data">
    <nuc-legend position="right" /> <!-- 设置图例位置在右侧 -->
</nuc-chart>
```
更多参数参照下方API
:::

## API
:::doc
### name
* 类型：String
* 描述：当前图例对应数据源中的字段名

### visible
* 类型：Boolean
* 描述：当前图例是否需要可见，默认值true，如未指定name则生效与所有图例

### position
* 类型：String
* 描述：设置图例的显示位置，可设置的值为：'top'、'right'、'bottom'、'left'，分别表示上、右、下、左。默认为 top。

### align
* 类型：String
* 描述：当 position 为 'top'，'bottom' 时生效，用于设置水平方向上图例的对齐方式，可设置的值为：'left'、'center'、'right' ，默认为 'left' ，左对齐。

| left(默认) | center | right |
|----|----|----|
|<img src="https://gw.alipayobjects.com/zos/skylark/14e43b86-b0d3-46bf-aa61-d9d35e40afc3/2018/png/58dffd37-ac70-466a-8ab0-7ff729927c52.png" width="100%"> | <img src="https://gw.alipayobjects.com/zos/skylark/8b616505-6336-4423-b600-ef0eda5e43cf/2018/png/71cffe7e-2cec-4a64-98d0-30dc25e601a5.png" width="100%"> | <img src="https://gw.alipayobjects.com/zos/skylark/a954ed14-8b32-4cdd-8e7e-c018d642cd2c/2018/png/d58b8647-c5b2-4f03-906d-4438665369b9.png" width="100%"> |

### vertical-align
* 类型：String
* 描述：当 position 为 'left'、'right' 时生效，用于设置垂直方向上图例的对齐方式，可设置的值为：'top'、'middle'、'bottom'，默认为 'middle'，居中对齐。

| middle(默认) | top | bottom |
|----|----|----|
|<img src="https://gw.alipayobjects.com/zos/skylark/3e351090-9e91-44b7-9c79-9fae1576a83e/2018/png/90d4ab82-0baa-429c-a92a-eb06c51e9b0d.png" width="100%"> | <img src="https://gw.alipayobjects.com/zos/skylark/a6d8e7cd-951b-409e-96c7-b76a49ec0405/2018/png/6504d001-3bd8-4e3d-acd9-0c1fda595a0f.png" width="100%"> | <img src="https://gw.alipayobjects.com/zos/skylark/e5a77ada-f4bc-4acd-9611-aac5f9769a41/2018/png/795f70b0-89bc-4b1b-a8d6-b26b543521c4.png" width="100%"> |

### item-width
* 类型：Number / 'auto' / null
* 描述：用于设置每个图例项的宽度，默认为 'auto'，即使用 F2 默认的图例布局计算 itemWidth。如果 itemWidth 为 null，则会根据每个图例项自身的宽度计算，另外用户也可以自己设置 itemWidth 的数值。

### show-title
* 类型：Boolean
* 描述：是否显示图例标题，默认值为 false，即不展示。

### title-style
* 类型：Object
* 描述：图例标题的显示样式设置，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)。

### offset-x
* 类型：Number
* 描述：图例 x 方向的整体偏移值，数值类型，数值单位为 'px'，默认值为 0。

### offset-y
* 类型：Number
* 描述：图例 y 方向的整体偏移值，数值类型，数值单位为 'px'，默认值为 0。

### title-gap
* 类型：Number
* 描述：标题距离图例项的间距，默认为 12px，如果不展示标题，不生效。

### item-gap
* 类型：Number
* 描述：每个图例项水平方向上的间距，默认值为 12px。

### item-margin-bottom
* 类型：Number
* 描述：每个图例项下方留白间距，默认值为 12px。

### word-space
* 类型：Number
* 描述：marker 和文本之间的间距，默认值为 6px。

### un-check-style
* 类型：Object
* 描述：用于设置取消选中的图例 marker 以及文本的样式。默认值为：
```javascript
unCheckStyle: {
  fill: '#bfbfbf'
}
```

### item-formatter
* 类型：Function
* 描述：回调函数，用于格式化图例每项的文本显示。
```javascript
function itemFormatter (val) {
  return val; // val 为每个图例项的文本值
}
```

### marker
* 类型：String / Function / Object
* 描述：用于设置图例的 marker 样式，默认为 'circle' 即圆形。
    * String 类型<br>
    当为 String 类型时，即表示使用 F2 默认提供的类型，支持的类型如下：
    
    | marker 类型 | 样式 |
    | ---- | ---- |
    | circle | <img src="https://gw.alipayobjects.com/zos/skylark/9f52dd0d-104a-451d-9e56-8423e20c4581/2018/png/6780ea94-a9ca-452d-b9c8-8a1e74f8b73d.png" width="84px" /> |
    | square | <img src="https://gw.alipayobjects.com/zos/skylark/a31497a6-23ae-4512-8eb8-7d697f158be9/2018/png/406e0df1-7d97-4361-be25-0f20e85418f7.png" width="67px" /> |
    
    * Object 类型<br>
    marker 为 Object 时，可以配置 symbol、radius 以及一些绘图属性。
    ```javascript
      let marker = {
        symbol: 'circle', // marker 的形状
        radius: 5 // 半径大小
      }
    ```
    
    * Function 类型<br>
    用于自定义 shape，使用方式如下：
    ```javascript
    /**
    * 自定义 marker 形状
    * @param  {number} x   该 marker 的横轴坐标
    * @param  {number} y   该 marker 的纵轴坐标
    * @param  {number} r   该 marker 的半径大小
    * @param  {object} ctx canvas 的上下文对象
    * @return {null}
    */
    function marker(x, y, r, ctx) {}
    ```
    以下代码绘制了如图所示的 marker：
    
    <img src="https://gw.alipayobjects.com/zos/skylark/041d2fef-a068-4012-ac28-2439e15bdbda/2018/png/c541e6b3-8f37-4cc9-b8bb-fd97345ef7da.png" width="121" />
    
    ```javascript
    function marker(x, y, r, ctx) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.moveTo(x - r - 3, y);
        ctx.lineTo(x + r + 3, y);
        ctx.stroke();
        ctx.arc(x, y, r, 0, Math.PI * 2, false);
        ctx.fill();
    }
    ```
### name-style
* 类型：Object
* 描述：用于设置图例项的文本样式，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)。

### value-style
* 类型：Object
* 描述：用于设置图例项的文本样式，详见[绘图属性](https://www.yuque.com/antv/f2/canvas)。

### trigger-on
* 类型：String
* 描述：图例筛选行为的触发事件，默认为 click。该属性只能通过以下方式声明才可生效：
```html
<!--生效-->
<nuc-legend trigger-on="click" />

<!--不会生效-->
<nuc-legend name="fieldName" trigger-on="click" />
```

### selected-mode
* 类型：String
* 描述：设置图例项的选中模式，提供两种模式： 多选`multiple`(默认) 、单选`single`

### clickable
* 类型：Boolean
* 描述：设置图例项是否允许点击，默认为 true，即允许点击。

### custom
* 类型：Boolean
* 描述：默认为 false，当 custom 为 true，表示不使用默认生成的图例，允许用户自定义图例，包括具体的图例项以及点击交互行为。

自定义图例时需要用户自己声明具体的图例项 items(该属性是一个对象数组，数组中每一项为一个对象类型，结构为：
```javascript
{
    {
        name: 'legend-a',
        value: 12,
        marker: {
            fill: 'red'
        } 
    },
    checked: true 
}
```
以及图例项的 onClick 事件。
```html
<nuc-legend
    :custom="true"
    :items="[
        { name: 'legend-a', marker: { fill: 'red' } },
        { name: 'legend-b', marker: { fill: 'blue' } },
        { name: 'legend-c', marker: { fill: 'green' } }
    ]"
/>
```
:::

## Event
:::doc
### @on-click
* 回调参数：ev 事件对象
* 描述：用于自定义鼠标点击图例项的交互，当 clickable 为 false 不生效。
:::
