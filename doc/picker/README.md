# Picker 选择器

:::doc
## 引入
```javascript
import { Picker } from 'nuc-mobile'
```
:::

:::doc
## 基础用法
通过`data`属性设定picker的选项值
```html
<nuc-picker :data="data" />
```
```javascript
export default {
    data () {
        return {
            data: ['小米', '华为', '苹果', 'Oppo', 'Vivo', '三星', '联想', '魅族'],
        }
    }
}
```
:::

:::doc
## 双向绑定
通过`v-model`指定双向绑定 picker的选中值
```html
<nuc-picker v-model="model" :data="data" />
```
```javascript
export default {
    data () {
        return {
            model: '小米',
            data: ['小米', '华为', '苹果', 'Oppo', 'Vivo', '三星', '联想', '魅族'],
        }
    }
}
```
:::

:::doc
### Key-Value 模式
使用键值对模式渲染picker的选项值，可以设定`data`属性为以下格式：
```javascript
export default {
    data () {
        return {
            data2: [
                { text: '小米', value: 'xiaomi' },
                { text: '华为', value: 'huawei' },
                { text: '苹果', value: 'apple' },
                { text: 'Oppo', value: 'oppo' },
                { text: 'Vivo', value: 'vivo' },
                { text: '三星', value: 'sumsang' },
                { text: '联想', value: 'lenovo' },
                { text: '魅族', value: 'meizu' }
            ]
        }
    }
}
```
:::

:::doc
### 多级联动
根据`tree`树形格式渲染picker的多级联动模式， 绑定值为包含各列`value`的数组
```javascript
export default {
    data () {
        return {
            data: [
                {
                    value: "11",
                    text: "北京市",
                    children: [
                        {
                            value: "1101",
                            text: "市辖区",
                            children: [
                                {
                                    value: "110101",
                                    text: "东城区"
                                }
                                // ... more
                            ]
                        }
                        // ... more
                    ]
                }
                // ... more
            ]
        }
    }
}
```
:::

:::doc
## 展示头部标题栏
通过使用属性`show-toolbar`是否显示头部标题栏，标题栏的确定取消分别暴露两个事件`@cancel`、`@confirm`

<font color="red">注意：如果显示了标题栏，当选中项改变时不会进行双向绑定，会更改为在`@confirm`执行后进行绑定</font>
```html
<nuc-picker v-model="model1" :data="data1" title="标题" show-toolbar />
```
:::

:::doc
## 搭配弹出层使用
```html
<nuc-button type="primary" @click="isPopupShow = true">弹出省市区联动</nuc-button>
<nuc-popup v-model="isPopupShow">
    <nuc-picker v-model="model" :data="data" show-toolbar title="请选择地址" />
</nuc-popup>
```
:::


:::doc
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| v-model | 当前选中项的绑定值:<br> 单列模式下的值为选中项的值或者`value` <br> 联动模式下为包含全部选中项`value`的数组 | `String`、`Array` | - | - |
| data | 选项列表数据 | `Array` | - | - |
| item-height | 选项高度 | `Number` | - | `44` |
| max-count | 基础展示多少个选中项(请设置为奇数) | `Number` | - | `5` |
| show-toolbar | 是否显示标题栏 | `Boolean` | - | `false` |
| title | 标题栏文本 | `String` | - | - | 

### Event
| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ---- |
| @change | 选项改变时触发 | `val`: 当前选中值 |
| @confirm | 点击标题栏确认按钮时触发 | `val`: 当前选中值 |
| @cancel | 点击标题栏取消按钮时触发 | - |
:::
