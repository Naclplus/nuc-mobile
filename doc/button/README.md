# Button 按钮

:::doc
## 引入
```javascript
import { Button } from 'nuc-mobile'
```
:::

:::doc
## 基础用法
支持`default`、`primary`、`success`、`warning`、`danger`五种类型，默认为`default`
```html
<nuc-button type="default">Default</nuc-button>
<nuc-button type="primary">Primary</nuc-button>
<nuc-button type="success">Success</nuc-button>
<nuc-button type="warning">Warning</nuc-button>
<nuc-button type="danger">Danger</nuc-button>
```
:::

:::doc
## 简洁按钮
通过`ghost`属性将按钮设置为朴素按钮, 透明背景
```html
<nuc-button type="default" ghost>Default</nuc-button>
<nuc-button type="primary" ghost>Primary</nuc-button>
<nuc-button type="success" ghost>Success</nuc-button>
<nuc-button type="warning" ghost>Warning</nuc-button>
<nuc-button type="danger" ghost>Danger</nuc-button>
```
:::

:::doc
## 禁用按钮
通过`disabled`属性将按钮禁用, 禁用状态下该按钮不可点击
```html
<nuc-button type="default" disabled>Default Disabled</nuc-button>
<nuc-button type="primary" disabled>Primary Disabled</nuc-button>
<nuc-button type="default" ghost disabled>Default Disabled</nuc-button>
<nuc-button type="primary" ghost disabled>Primary Disabled</nuc-button>
<nuc-button type="danger" ghost disabled>Danger Disabled</nuc-button>
```
:::

:::doc
## 圆角按钮
通过`radius`属性按按钮设置为圆角
```html
<nuc-button type="primary" radius>Primary Radius</nuc-button>
<nuc-button type="primary" ghost radius>Primary Ghost Radius</nuc-button>
<nuc-button type="default" radius>Default Radius</nuc-button>
<nuc-button type="danger" ghost radius>Danger Ghost Radius</nuc-button>
```
:::

:::doc
## 行内按钮
通过`inline`属性将按钮设置为行内样式按钮
```html
<nuc-button type="primary" inline>Inline Large</nuc-button>
<nuc-button type="success" inline>Inline Large</nuc-button>
<nuc-button type="warning" inline size="small">Inline Small</nuc-button>
<nuc-button type="danger" inline size="small">Inline Small</nuc-button>
```
:::

:::doc
## Loading 状态
通过`loading`属性, 使按钮进入加载状态, 此状态下该按钮不可点击
```html
<nuc-button type="primary" loading>Primary</nuc-button>
<nuc-button type="success" ghost loading>Success</nuc-button>
<nuc-button type="warning" inline loading>Inline Small</nuc-button>
<nuc-button type="danger" size="small" inline ghost loading>Inline Small</nuc-button>
```
:::

:::doc
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | `string`  |   `large` `small`            |    `large`     |
| type     | 类型   | `string`    |   `default` `primary` `success` `warning` `danger` |     `default`    |
| inline  | 是否为行内按钮    | `boolean`   | —   | `false`   |
| ghost  | 是否为简洁按钮    | `boolean`   | —   | `false`   |
| radius  | 是否为圆角按钮    | `boolean`   | —   | `false`   |
| disabled  | 是否禁用状态    | `boolean`   | —   | `false`   |
| loading  | 是否加载中状态    | `boolean`   | —   | `false`   |

### Event
| 事件名称 | 说明 |
| ------- | ---- |
| @click  | 按钮点击事件 |

### Slot
| 插槽名称 | 说明 |
| ------- | ---- |
| 默认插槽 | 按钮内容 |
:::
