# Flex 弹性盒子布局

:::doc
## 引入
```javascript
import { Flexbox } from 'nuc-mobile'
const FlexboxItem = Flexbox.Item
```
:::

:::doc
## 基础用法
`nacl-flexbox-item` 带有 `flex: 1 1` 属性
```html
<nuc-flexbox>
    <nuc-flexbox-item><div class="block-1">block-1</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2">block-2</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-1">block-1</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2">block-2</div></nuc-flexbox-item>
</nuc-flexbox>
```
:::

:::doc
## 自定义宽度
`nacl-flexbox-item` 通过 `width` 设定宽度, 同时会取消原本带有的属性`flex: 1 1`
```html
<nuc-flexbox>
    <nuc-flexbox-item width="25%"><div class="block-1">block-1</div></nuc-flexbox-item>
    <nuc-flexbox-item width="20%"><div class="block-2">block-2</div></nuc-flexbox-item>
    <nuc-flexbox-item width="35%"><div class="block-1">block-1</div></nuc-flexbox-item>
</nuc-flexbox>
```
:::

:::doc
## 设置间距
通过 `nuc-flexbox` 上的`gutter` 属性, 设置`nuc-flexbox-item`之间的间距
```html
<nuc-flexbox gutter="20">
    <nuc-flexbox-item><div class="block-1">block-1</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2">block-2</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-1">block-1</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2">block-2</div></nuc-flexbox-item>
</nuc-flexbox>
```
:::

:::doc
## 主轴对齐
通过 `nuc-flexbox` 上的 `justify` 属性, 设置主轴的对齐方式

可选值有`end`, `center`, `between`, `around`, 默认 `start`
```html
<nuc-flexbox gutter="20">
    <nuc-flexbox-item width="30%"><div class="block-1">flex-start</div></nuc-flexbox-item>
    <nuc-flexbox-item width="30%"><div class="block-2">flex-start</div></nuc-flexbox-item>
</nuc-flexbox>
<nuc-flexbox gutter="20" justify="center">
    <nuc-flexbox-item width="30%"><div class="block-1">center</div></nuc-flexbox-item>
    <nuc-flexbox-item width="30%"><div class="block-2">center</div></nuc-flexbox-item>
</nuc-flexbox>
<nuc-flexbox gutter="20" justify="end">
    <nuc-flexbox-item width="30%"><div class="block-1">flex-end</div></nuc-flexbox-item>
    <nuc-flexbox-item width="30%"><div class="block-2">flex-end</div></nuc-flexbox-item>
</nuc-flexbox>
<nuc-flexbox gutter="20" justify="between">
    <nuc-flexbox-item width="30%"><div class="block-1">space-between</div></nuc-flexbox-item>
    <nuc-flexbox-item width="30%"><div class="block-2">space-between</div></nuc-flexbox-item>
</nuc-flexbox>
<nuc-flexbox gutter="20" justify="around">
    <nuc-flexbox-item width="30%"><div class="block-1">space-around</div></nuc-flexbox-item>
    <nuc-flexbox-item width="30%"><div class="block-2">space-around</div></nuc-flexbox-item>
</nuc-flexbox>
```
:::

:::doc
## 交叉轴对齐方式
通过 `nuc-flexbox` 上的 `align` 属性, 设置交叉轴的对齐方式

可选值有`start`, `center`, `end`, `baseline`, 默认 `stretch`
```html
<nuc-flexbox align="start">
    <nuc-flexbox-item><div class="block-1" style="height:30px">flex-start</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2" style="height:60px">flex-start</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-1">flex-start</div></nuc-flexbox-item>
</nuc-flexbox>
<nuc-flexbox align="center">
    <nuc-flexbox-item><div class="block-1" style="height:30px">center</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2" style="height:60px">center</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-1">flex-start</div></nuc-flexbox-item>
</nuc-flexbox>
<nuc-flexbox align="end">
    <nuc-flexbox-item><div class="block-1" style="height:30px">flex-end</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2" style="height:60px">flex-end</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-1">flex-start</div></nuc-flexbox-item>
</nuc-flexbox>
<nuc-flexbox align="baseline">
    <nuc-flexbox-item><div class="block-1" style="height:30px;padding-top: 10px;">baseline</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2" style="height:60px">baseline</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-1">baseline</div></nuc-flexbox-item>
</nuc-flexbox>
<nuc-flexbox style="height: 30px;">
    <nuc-flexbox-item><div class="block-1">stretch</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-2">stretch</div></nuc-flexbox-item>
    <nuc-flexbox-item><div class="block-1">stretch</div></nuc-flexbox-item>
</nuc-flexbox>
```
:::


:::doc
### Attributes
#### Flexbox
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction | 主轴的方向, 同`flex-direction`  | `string`  | `row-reverse` `column` `column-reverse` |    `row`     |
| wrap     |  换行, 同`flex-wrap`  | `string`    |   `wrap` `wrap-reverse` |     `nowrap`    |
| justify  | 主轴上的对齐方式, 同`justify-content`    | `string`   | `end` `center` `between`, `around`   | `start`   |
| align  | 交叉轴上的对齐方式, 同`align-items`    | `string`   | `start` `end` `center` `baseline`  | `stretch`   |
| gutter  |  子元素(`nuc-flexbox-item`)之间的间距(单位px)  | `string` \| `number`   | —   | — |

#### FlexboxItem
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width | 元素的宽度  | `string`  | — |  —  |
:::
