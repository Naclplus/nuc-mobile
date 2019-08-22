# 快速开始

:::doc
## 安装
使用npm安装
```bash
npm install nuc-mobile --save
```
:::

:::doc
## 使用前准备
入口页面 (html 或 模板) 相关设置：

```html
<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width, viewport-fit=cover" />
```

在主文件入口下引入

为标准化浏览器元素的样式，推荐引入[Normalize.css](http://necolas.github.io/normalize.css/)或[Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
```javascript
import 'normalize.css' // or
import 'reset.css'
```

解决移动端点击延迟，引入[FastClick](https://github.com/ftlabs/fastclick)

```javascript
import FastClick from 'fastclick'

if ('addEventListener' in document && 'ontouchstart' in window) {
    FastClick.prototype.focus = (ele) => { 'use strict'; ele.focus(); };
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
```
:::

:::doc
## rem适配
在主文件入口下引入：
```javascript
import 'amfe-flexible'
```
`postcss.config.js`
```javascript
module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'autoprefixer': { grid: true },
        'postcss-pxtorem': {
             rootValue: 75,
             minPixelValue: 2,
             propList: ['*']
        }
    }
}
```
:::


:::doc
## 开始使用
### 全局引入
```javascript
import Vue from 'vue'
import NucMobile from 'nuc-mobile'
import 'nuc-mobile/lib/nuc-mobile.css'
Vue.use(NucMobile)
```
### 按需引入
`babel.config.js`
```javascript
module.exports = {
  "plugins": [
      ["import", {
          "libraryName": "nuc-mobile",
          "libraryDirectory": "lib"
      }]
  ]
}
```
在页面中：
```html
<nuc-button type="primary">我是按钮</nuc-button>
```
```javascript
import { Button } from 'nuc-mobile'
export default {
    component: {
        [Button.name]: Button
    }
}
```
:::
