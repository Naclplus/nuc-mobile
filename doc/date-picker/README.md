# DatePicker 时间选择器

:::doc
## 引入
```javascript
import { DatePicker } from 'nuc-mobile'
```
:::

:::doc
## 基础用法
构建一个包含`年` `月` `日`的日期选择器
```html
<nuc-date-picker />
```
:::

:::doc
## 双向绑定
通过`v-model`指定双向绑定 picker的选中值
```html
<nuc-date-picker v-model="model" />        
<nuc-button type="primary" @click="model = '2010-01-01'">设定为'2010-01-01'</nuc-button>
<nuc-button type="primary" @click="model = new Date()">设定为new Date()</nuc-button>
```
```javascript
export default {
    data () {
        return {
            model: ''
        }
    }
}
```
:::

:::doc
## Picker 类型
通过设置属性`type`设置picker类型。 可选值有`month` `time` `date-time` `month-time`，默认值是`date`
```html
<nuc-date-picker type="month" /> 
<nuc-date-picker type="time" /> 
<nuc-date-picker type="date-time" /> 
<nuc-date-picker type="month-time" /> 
```
:::

:::doc
## 设置年份选择上限下限
通过属性`max-year` `min-year`设置年份区间的上限下限。默认今年前后10年
```html
<nuc-date-picker max-year="2040" min-year="1990" /> 
```
:::

:::doc
## format 格式化选中值
通过属性`format`格式化选中值，包括各事件的回调参数值，格式化方式基于[momentjs](http://momentjs.cn/)

`date`模式下，默认值是`YYYY-MM-DD`

`month`模式下，默认值是`MM-DD`

`time`模式下，默认值是`HH:mm`

`date-time`模式下，默认值是`YYYY-MM-DD HH:mm`

`month-time`模式下，默认值是`MM-DD HH:mm`
```html
<nuc-date-picker format="YYYY年MM月DD日" /> 
<nuc-date-picker type="month" format="MM月DD日" /> 
<nuc-date-picker type="time" format="HH时mm分" /> 
<nuc-date-picker type="date-time" format="YYYY年MM月DD日 HH时mm分" /> 
<nuc-date-picker type="month-time" format="MM月DD日 HH时mm分" /> 
```
:::

:::doc
## 展示头部标题栏
通过使用属性`show-toolbar`是否显示头部标题栏，标题栏的确定取消分别暴露两个事件`@cancel`、`@confirm`

<font color="red">注意：如果显示了标题栏，当选中项改变时不会进行双向绑定，会更改为在`@confirm`执行后进行绑定</font>
```html
<nuc-date-picker title="标题" show-toolbar />
```
:::

:::doc
## 搭配弹出层使用
```html
<nuc-button type="primary" @click="isPopupShow = true">弹出生日选择</nuc-button>
<nuc-popup v-model="isPopupShow">
    <nuc-date-picker show-toolbar title="选择出生年月" @confirm="isPopupShow = false" @cancel="isPopupShow = false" />
</nuc-popup>
```
```javascript
export default {
    data () {
        return {
            isPopupShow: false
        }
    }
}
```
:::

:::doc
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| v-model | 当前选中项的被格式化后的绑定值 | `String` `Date` `Moment` | - | - |
| min-year | 年份区间最小年份 | `String` `Number` | - | 当前年份前10年 |
| max-year | 年份区间最大年份 | `String` `Number` | - | 当前年份后10年 |
| format | 格式化选项 | `String` | - | `date`模式下，默认值是`YYYY-MM-DD`<br>`month`模式下，默认值是`MM-DD`<br>`time`模式下，默认值是`HH:mm`<br>`date-time`模式下，默认值是`YYYY-MM-DD HH:mm`<br>`month-time`模式下，默认值是`MM-DD HH:mm` |
| type | picker类型 | `String` | `date` `month` `time` `date-time` `month-time` | `date` |
| item-height | 选项高度 | `Number` | - | `44` |
| max-count | 基础展示多少个选中项(请设置为奇数) | `Number` | - | `5` |
| show-toolbar | 是否显示标题栏 | `Boolean` | - | `false` |
| title | 标题栏文本 | `String` | - | - | 
| prefix-zero | 选项是否补零 | `Boolean` | - | `true` |
| suffix | 选项后缀 | `Object` | - | { <br>year: '年', <br>month: '月',  <br>date: '日', <br>hour: '时', <br>minute: '分' <br>} |

### Event
| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ---- |
| @change | 选项改变时触发 | `val`: 当前选中的格式化值, `moment`: 当前选中Moment对象 |
| @confirm | 点击标题栏确认按钮时触发 | `val`: 当前选中的格式化值, `moment`: 当前选中Moment对象 |
| @cancel | 点击标题栏取消按钮时触发 | `val`: 当前选中的格式化值, `moment`: 当前选中Moment对象 |
:::
