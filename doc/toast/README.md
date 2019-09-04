# Toast 轻提示

:::doc
## 引入
该组件使用插件方式引入，会自动在 Vue prototype 挂载`$toast`实例。全局引入直接挂载
```javascript
import { Toast } from 'nuc-mobile'
Vue.use(Toast)
```
:::

:::doc
## 基本用法
显示一个纯文本提示
```javascript
this.$toast('纯文本提示')
```
:::

:::doc
## 提示类型
通过`success`与`fail`方法，显示不同类型的提示框
```javascript
this.$toast.success('成功提示')
this.$toast.error({
    text: '失败提示'
})
```
:::

:::doc
## Loading 类型
通过`loading`方法，显示一个等待框
```javascript
this.$toast.loading({
    hasMask: true,
    text: '加载中...'
})
```
:::

:::doc
### Methods
| 方法名 | 参数 | 返回值 | 描述 |
| ---- | ---- | ---- | ---- |
| $toast | `options|text` | Toast 实例 | 展示提示 |
| $toast.success | `options|text` | Toast 实例 | 展示成功提示 |
| $toast.fail | `options|text` | Toast 实例 | 展示失败提示 |
| $toast.loading | `options|text` | Toast 实例 | 展示等待提示 |
| $toast.bottom | `options|text` | Toast 实例 | 在页面底部显示 |
| $toast.top | `options|text` | Toast 实例 | 在页面顶部显示 |
| $toast.hide | - | `void` | 关闭提示 |

### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 提示类型 | `string` | `success` `fail` `loading` | `text` |
| position | 提示位置 | `string` | `bottom` `top` | `center` |
| text | 显示文本内容 | `string` | - | - |
| hasMask | 是否显示背景遮罩 | `boolean` | - | `false` |
| duration | 展示时长毫秒(ms) | `number` | - | `2000` |
| onOpened | 完全展示后的回调函数 | `function` | - | - |
| onClose | 完全关闭后的回调函数 | `function` | - | - |
:::
