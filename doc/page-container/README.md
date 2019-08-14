# 页面容器
:::doc
## 引入
```javascript
import { PageContainer } from 'nuc-mobile'
```
:::

:::doc
## 基础用法
通过设定`header-label`，`header-option`，`footer-items` 构建完整页面  
`header-option` 与 `nuc-header` 属性相同  
`footer-items` 是 `nuc-tabbar-item` 属性数组  
底部会自动适应iphoneX
```html
<nuc-page-container header-label="页面头部标题" :header-option="headerOption" :footer-items="footerItems">
    内容
</nuc-page-container>
```
```javascript
export default {
    data () {
        return {
            headerOption: {
                noLeft: true
            },
            footerItems: [
                {
                    label: '首页',
                    icon: 'homepage-o',
                    route: '/a'
                },
                {
                    label: '闹钟',
                    icon: 'clock-o',
                    route: '/b'
                },
                {
                    label: '设定',
                    icon: 'setting-o',
                    route: '/c'
                },
                {
                    label: '我的',
                    icon: 'mine-o',
                    route: '/d'
                }
            ]
        }
    }
}
```
:::
