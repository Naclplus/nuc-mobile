# IconFont 图标

:::doc
## 引入
```javascript
import { Icon } from 'nuc-mobile'
```
:::

:::doc
## 基础用法
`type` 属性传入图标的名称
```html
<nuc-icon type="setting" />
```
:::

:::doc
## 图标大小
通过`size`属性指定图标的大小  
可以通过预设值`xs` `sm` `md` `lg` `xl` `xxl`指定  
也可以通过单位指定 如`20px` `2em` 等
```html
<nuc-icon type="setting" size="xs" />
<nuc-icon type="setting" size="xxl" />
<nuc-icon type="setting" size="20" />
<nuc-icon type="setting" :size="20" />
<nuc-icon type="setting" size="20px" />
<nuc-icon type="setting" size="2em" />
```
:::

:::doc
## 自定义图标
图标组件基于Symbol引用方式。  
如果需要在现有的Icon基础上使用更多的图标，可以引入你需要的iconfont对应的js文件，之后通过修改Icon的Symbol前缀就可以使用了  
更多请查看 [Iconfont symbol引用](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)
```javascript
import 'custom-iconfont.js'
```
```html
<nuc-icon prefix="custom" type="location" />
```
:::

:::doc
### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|------|------|-------|-------|
| prefix | 图标库的前缀 | `string` | - | `nuc` |
| type | 图标的名称 | `string` | - | - |
| size | 图标的大小 | `string | number` | `xs` `sm` `md` `lg` `xl` `xxl` | `md` |
:::
