# Cell 单元格

:::doc
## 引入
```javascript
import { Cell } from 'nuc-mobile'
const CellGroup = Cell.Group
```
:::

:::doc
## 基础用法
```html
<nuc-cell-group title="基础用法">
    <nuc-cell label="标题" />
    <nuc-cell label="标题" extra="内容" />
</nuc-cell-group>
```
:::

:::doc
## 图标左侧
通过`icon`属性在标题左侧展示图标
```html
<nuc-cell-group title="左侧图标">
    <nuc-cell label="标题" icon="setting-o" />
    <nuc-cell label="标题" extra="内容" icon="homepage" />
</nuc-cell-group>
```
:::

:::doc
## 只设置 extra
只设置`extra`时，内容会靠左对齐
```html
<nuc-cell extra="内容" />
```
:::

:::doc
## 添加标题下方描述内容
```html
<nuc-cell-group title="描述内容">
    <nuc-cell label="标题" extra="内容" describe="描述内容" />
    <nuc-cell label="标题" extra="内容" describe="描述内容" icon="setting-o" />
</nuc-cell-group>
```
:::

:::doc
## 添加右侧箭头
通过`arrow`属性设置右侧箭头。默认向右
```html
<nuc-cell-group title="右侧箭头">
    <nuc-cell label="标题" icon="setting-o" arrow />
    <nuc-cell label="标题" extra="内容" icon="homepage" arrow />
    <nuc-cell label="标题" extra="内容" icon="homepage-o" arrow="down" />
</nuc-cell-group>
```
:::

:::doc
### Attributes
#### CellGroup
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| title | 单元格组的标题 | `String` | - | - |

#### Cell
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| label | 单元格左侧文字内容 | `String` | - | - |
| extra | 单元格右侧文字内容 | `String` | - | - |
| describe | 单元格左下方文字描述内容 | `String` | - | - |
| icon | 单元格左侧icon的`type` 参见[Icon](#/icon-font) | `String` | - | - |
| icon-prefix | 单元格左侧icon的`prefix` 参见[Icon](#/icon-font) | `String` | - | - |
| arrow | 单元格右侧箭头以及方向 | `String` `Boolean` | `top` `bottom` `left` | `false` |
| vertical-center | 是否垂直居中 | `Boolean` | - | `false` |

### Event
#### Cell
| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ---- |
| @click | 单元格点击事件 | `e:Event` |

### Slot
#### CellGroup
| 插槽名称 | 说明 |
| ------- | ---- |
| 默认插槽 | 可放入`Cell` |

### Cell
| 插槽名称 | 说明 |
| ------- | ---- |
| 默认插槽 | 单元格右侧文字内容插槽 |
| label | 单元格做侧文字内容插槽 |
| icon | 单元格做侧icon内容插槽 |
| arrow | 单元格右侧箭头内容插槽 |
:::
