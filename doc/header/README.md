# Header 头部导航条

:::doc
## 引入
```javascript
import { Header } from 'nuc-mobile'
```
:::

:::doc
## 基础用法
```html
<nuc-header>基础用法</nuc-header>
```
:::

:::doc
## 不锁定头部
通过`fixed`属性设置为`false` 取消锁定头部
```html
<nuc-header :fixed="false">不锁定头部</nuc-header>
```
:::

:::doc
## 透明背景
通过`transparent`属性设置背景颜色为透明
```html
<nuc-header transparent>透明背景</nuc-header>
```
:::

:::doc
## 不显示左侧
通过`no-left`属性取消显示左侧内容
```html
<nuc-header no-left>不显示左侧</nuc-header>
```
:::

:::doc
## 更换左侧文字
通过`left-text`属性设置左侧文字
```html
<nuc-header left-text="go back">更换左侧文字</nuc-header>
```
:::

:::doc
## 左右侧插槽
通过`left-label`与`right-label`插槽分别设置左右侧内容
```html
<nuc-header>
    <div slot="left-label">左侧插槽</div>
    左右侧插槽
    <div slot="right-label">右侧插槽</div>
</nuc-header>
```
:::

:::doc
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| fixed | 是否锁定在顶部 | `boolean` | - | `true` |
| transparent | 是否显示透明背景 | `boolean` | - | `false` |
| no-left | 是否隐藏左侧默认容器 | `boolean` | - | `false` |
| left-icon | 默认容器左侧的Icon, 参考 [IconFont](#/icon-font) | `string` | - | `return` |
| left-text | 默认容器左侧的文字 | `string` | - | `返回` |

### Event
| 事件名称 | 说明 |
| ------- | ---- |
| @left-click  | 默认左侧容器的点击事件, 默认事件为window.history.go(-1) <br>如果使用`vue-router`则是`$router.history-go(-1)`, 传入事件则替换 |

### Slot
| 插槽名称 | 说明 |
| ------- | ---- |
| 默认插槽 | 头部主体部分插槽 |
| left-label | 左侧部分插槽 |
| right-label | 右侧部分插槽 |
:::
