# Tab 标签

:::doc
## 引入
```javascript
import { Tab } from 'nuc-mobile'
const TabItem = Tab.Item
```
:::

:::doc
## 基础用法
```html
<nuc-tab>
    <nuc-tab-item label="标签A" />
    <nuc-tab-item label="标签B" />
    <nuc-tab-item label="标签C" />
    <nuc-tab-item label="标签D" />
</nuc-tab>
```
:::

:::doc
## 双向绑定
通过指令`v-model`进行双向绑定, 值为当前选中标签的索引值
```html
<nuc-tab v-model="index">
    <nuc-tab-item label="标签A" />
    <nuc-tab-item label="标签B" />
    <nuc-tab-item label="标签C" />
    <nuc-tab-item label="标签D" />
</nuc-tab>
```
```javascript
export default {
    data () {
        return {
            index: 0
        }
    }
}
```
:::

:::doc
## 绑定name
当标签指定了`name`属性, 双向绑定的值为当前标签的`name`值
```html
<nuc-tab v-model="active">
    <nuc-tab-item label="标签A" name="a" />
    <nuc-tab-item label="标签B" name="b" />
    <nuc-tab-item label="标签C" name="c" />
    <nuc-tab-item label="标签D" name="d" />
</nuc-tab>
```
```javascript
export default {
    data () {
        return {
            active: 'b'
        }
    }
}
```
:::

:::doc
## 禁用标签
通过标签属性`disabled`，设置标签禁用状态
```html
<nuc-tab>
    <nuc-tab-item label="标签A" disabled />
    <nuc-tab-item label="标签B" />
    <nuc-tab-item label="标签C" disabled />
    <nuc-tab-item label="标签D" />
</nuc-tab>
```
:::

:::doc
## 超出阈值滚动
默认滚动阈值为4，超出该值标签栏可以在水平方向上滚动
```html
<nuc-tab>
    <nuc-tab-item label="标签A" />
    <nuc-tab-item label="标签B" />
    <nuc-tab-item label="标签C" />
    <nuc-tab-item label="标签D" />
    <nuc-tab-item label="标签E" />
    <nuc-tab-item label="标签F" />
    <nuc-tab-item label="标签G" />
</nuc-tab>
```
:::

:::doc
## 设置标签内容
通过默认的插槽设置标签的主体内容
```html
<nuc-tab>
    <nuc-tab-item label="标签A">内容 A</nuc-tab-item>
    <nuc-tab-item label="标签B">内容 B</nuc-tab-item>
    <nuc-tab-item label="标签C">内容 C</nuc-tab-item>
    <nuc-tab-item label="标签D">内容 D</nuc-tab-item>
    <nuc-tab-item label="标签E">内容 E</nuc-tab-item>
</nuc-tab>
```
:::


:::doc
### Attributes
#### Tab
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| v-model | 绑定当前选中标签的标识符 | `string | number` | - | - |
| inline-bar | 设置底部条宽度与标签文字同宽 | `boolean` | - | `false` |
| active-line | 设置是否显示底部条 | `boolean` | - | `true` |
| active-line-animate | 设置是否显示底部条过渡动画 | `boolean` | - | `true` |
| content-animate | 设置是否显示标签主体内容过渡动画 | `boolean` | - | `true` |
| scroll-threshold | 设置滚动阈值 | `string | number` | - | `4` |

#### TabItem
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| label | 标签标题 | `string` | - | - |
| name | 标签名称 | `string | number` | - | 当前标签索引值 |
| disabled | 是否禁用该标签 | `boolean` | - | `false` |

### Event
### Tab
| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| @change | 切换标签时触发 | index: 选中标签的名称或者索引值 |

### TabItem
| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| @click | 点击改标签项时触发 | Event |

### Slots
### Tab
| 插槽名称 | 说明 |
| ------- | ---- |
| 默认插槽 | 可放入`TabItem` |

### TabItem
| 插槽名称 | 说明 | SlotScope |
| ------- | ---- | --------- |
| 默认插槽 | 标签主体内容 | - |
| label | 标签名称插槽 | active: 是否选中标签 |

:::
