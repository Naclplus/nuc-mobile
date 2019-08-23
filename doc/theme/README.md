# 修改主题

:::doc
## 样式变量
组件库样式基于Stylus开发，可通过全局和组件的样式变量对主题样式进行调整

完整的变量列表可以查看内置样式变量[样式变量](https://github.com/Naclplus/nuc-mobile/blob/master/components/_styles)
:::

:::doc
## 变量覆盖
* 首先，项目需要安装依赖，`babel-plugin-import` `stylus` `stylus-loader`
* 配置 `.babelrc` 或者 `babel.config.js`
```javascript
"plugins": [
  ["import", {
      "libraryName": "nuc-mobile",
      "libraryDirectory": "components"
  }]
]
```
* 创建自定义主题文件，如`theme.custom.styl`
```stylus
@import '~nuc-mobile/components/_styles/utils.styl'
@import '~nuc-mobile/components/_styles/basic.styl'
color-primary = red
@import '~nuc-mobile/components/_styles/variables.styl'
button-primary-color = green
```
* #### 如果使用 vue-cli 3.x 配置 `vue.config.js`
```javascript
const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
          import: [path.resolve(__dirname, 'src', 'theme.custom.styl')]
      }
    }
  }
}
```
* #### 如果使用 webpack
```javascript
const path = require('path')

module.exports = {
    // ...
    module: {
        rules: [
            // ...
            {
                test: /\.styl?(us)$/,
                use: [
                  'css-loader',
                  {
                    loader: 'stylus-loader',
                    options: {
                      import: [path.resolve(__dirname, 'src', 'theme.custom.styl')]
                    }
                  }
                ]
            }
            // ...
        ]        
    }
    // ...
}
```
:::
