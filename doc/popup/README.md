# Popup 弹出层

:::doc
## 引入
```javascript
import { Popup } from 'nuc-mobile'
```
:::

:::doc
## 基础用法
通过v-model双向绑定控制是否显示弹出层
```html
<nuc-button type="primary" @click="show = true">底部弹出(默认)</nuc-button>
<nuc-popup v-model="show">
    <div style="height: 100px" />
</nuc-popup>
```
```javascript
export default {
    data () {
        return {
            show: false
        }
    }
}
```
:::

:::doc
## 显示位置
通过`position`属性设定弹出方向，可选值为`top`、`bottom`、`left`、`right`，默认值为`bottom`
```html
<nuc-popup v-model="show" position="top">
    <div style="height: 100px" />
</nuc-popup>       
<nuc-popup v-model="show3" position="left">
    <div style="height: 100%; width: 100px" />
</nuc-popup>
<nuc-popup v-model="show4" position="right">
    <div style="height: 100%; width: 100px" />
</nuc-popup>
```
:::

:::doc
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| v-model | 当前弹出层是否显示 | `Boolean` | - | `false` |
| mask-clickable | 遮罩层是否可以点击关闭弹出层 | `Boolean` | - | `true` |
| has-mask | 是否显示遮罩层 | `Boolean` | - | `true` |
| position | 弹出层显示的位置 | `top`、`bottom`、`left`、`right` | - | `bottom` |

### Event
| 事件名称 | 说明 |
| ------- | ---- |
| @open | 打开弹出层时触发 |
| @close | 关闭弹出层时触发 |

### Slot
| 插槽名称 | 说明 |
| ------- | ---- |
| 默认插槽 | 弹出层内容插槽 |
:::
