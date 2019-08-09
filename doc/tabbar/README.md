# Tabbar 标签栏

:::doc
## 引入
```javascript
import { Tabbar } from 'nuc-mobile'
const TabbarItem = Tabbar.Item
```
:::

:::doc
## 基础用法
```html
<nuc-tabbar>
    <nuc-tabbar-item icon="homepage-o">首页</nuc-tabbar-item>
    <nuc-tabbar-item icon="clock-o">闹钟</nuc-tabbar-item>
    <nuc-tabbar-item icon="setting-o">设定</nuc-tabbar-item>
    <nuc-tabbar-item icon="mine-o">我的</nuc-tabbar-item>
</nuc-tabbar>
```
:::

:::doc
## 双向绑定
通过指令`v-model`进行双向绑定, 值为当前选中标签的索引值
```html
<nuc-tabbar v-model="index">
    <nuc-tabbar-item icon="homepage-o">首页</nuc-tabbar-item>
    <nuc-tabbar-item icon="clock-o">闹钟</nuc-tabbar-item>
    <nuc-tabbar-item icon="setting-o">设定</nuc-tabbar-item>
    <nuc-tabbar-item icon="mine-o">我的</nuc-tabbar-item>
</nuc-tabbar>
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
## 不显示Icon
不设定标签项的`icon`属性, 则不显示icon
```html
<nuc-tabbar>
   <nuc-tabbar-item>标签a</nuc-tabbar-item>
   <nuc-tabbar-item>标签b</nuc-tabbar-item>
   <nuc-tabbar-item>标签c</nuc-tabbar-item>
</nuc-tabbar>
```
:::

:::doc
## 绑定name
当标签指定了`name`属性, 双向绑定的值为当前标签的`name`值
```html
<nuc-tabbar v-model="active">
    <nuc-tabbar-item name="homepage" icon="homepage-o" @click="onClick">首页</nuc-tabbar-item>
    <nuc-tabbar-item name="clock" icon="clock-o">闹钟</nuc-tabbar-item>
    <nuc-tabbar-item icon="setting-o">设定</nuc-tabbar-item>
    <nuc-tabbar-item icon="mine-o">我的</nuc-tabbar-item>
</nuc-tabbar>
```
```javascript
export default {
    data () {
        return {
            active: 'clock'
        }
    }
}
```
:::


:::doc
## 显示角标
通过设定`badge`属性, 设置标签项的角标。 如果选项为true，那么会显示红点。如果是string || number类型，则会显示带有该值的角标
```html
<nuc-tabbar>
   <nuc-tabbar-item icon="homepage-o">首页</nuc-tabbar-item>
   <nuc-tabbar-item icon="clock-o" badge>闹钟</nuc-tabbar-item>
   <nuc-tabbar-item icon="setting-o" badge="1">设定</nuc-tabbar-item>
   <nuc-tabbar-item icon="mine-o" badge="new">我的</nuc-tabbar-item>
</nuc-tabbar>
```
:::


:::doc
## 自定义图标
通过 `icon` 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中
```html
<nuc-tabbar>
    <nuc-tabbar-item>
        <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
        >
        自定义
    </nuc-tabbar-item>
    <nuc-tabbar-item icon="clock-o">闹钟</nuc-tabbar-item>
</nuc-tabbar>
```
:::

:::doc
## 传入route
标签项传入route属性，搭配`vue-router`。会根据路径匹配选中对应标签
```html
<nuc-tabbar>
    <nuc-tabbar-item icon="homepage-o" :route="/a">首页</nuc-tabbar-item>
    <nuc-tabbar-item icon="clock-o" :route="{ path: '/b' }">闹钟</nuc-tabbar-item>
    <nuc-tabbar-item icon="setting-o" :route="{ path: '/c', replace: true }">设定</nuc-tabbar-item>
    <nuc-tabbar-item icon="mine-o" :route="{ path: '/d', query: { a: 1 } }">我的</nuc-tabbar-item>
</nuc-tabbar>
```
:::

:::doc
### Attributes
#### Tabbar
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| fixed | 是否固定在底部 | boolean | - | true |

#### TabbarItem
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| name | 标签名称 | `string | number` | - | 当前标签索引值 |
| icon | 标签icon 参考 [IconFont](#/icon-font) | `string` | - | - |
| badge | 右上角角标 无内容则显示红点 | `boolean | string | number` | - | `false` |
| route | 路由跳转对象，类似`vue-router`的`router-link`的`to`选项。<br>可设定 `replace`项替换掉当前的 history 记录 | `string | object` | - | - |

### Event
### Tabbar
| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| @change | 切换标签时触发 | index: 选中标签的名称或者索引值 |

### TabbarItem
| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| @click | 点击改标签项时触发 | Event |

### Slots
### Tabbar
| 插槽名称 | 说明 |
| ------- | ---- |
| 默认插槽 | 可放入`TabbarItem` |

### TabbarItem
| 插槽名称 | 说明 | SlotScope |
| ------- | ---- | --------- |
| 默认插槽 | 下方文字插槽 | - |
| icon | 图标位置插槽 | active: 是否选中标签 |
:::
