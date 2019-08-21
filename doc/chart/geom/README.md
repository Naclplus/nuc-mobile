# Geom 几何标记

:::doc
## 简介
几何标记对象，决定了图表的类型，具体的概念介绍请参见 [F2 Geometry](https://www.yuque.com/antv/f2/api-geometry)
:::

:::doc
## 什么是几何标记
几何标记即我们所说的点、线、面这些几何图形。F2 中并没有特定的图表类型（柱状图、散点图、折线图等）的概念，但是通过图形语法用户可以单独绘制某一种类型的图表，如饼图，也可以绘制混合图表，比如折线图和柱状图的组合。

F2 生成的图表的类型，都是由几何标记决定的。可以通过下图直观得理解什么是几何标记：

<img src="https://gw.alipayobjects.com/zos/rmsportal/ffXoDNzwnXNHoaxtjbfY.png" width="100%">
:::

:::doc
## 如何使用几何标记
这里举例使用 point 类型的 geom
```html
<nuc-geom type="point" />
```
虽然 F2 没有特定的图表类型概念，但是仍支持所有传统图表类型的绘制。

下表展示了 F2 中的 geom 几何标记类型和传统图表的对应关系
| 类型 | 图表类型 | 备注 |
| ---- | ---- | ---- |
| point | 点图、气泡图、散点图 | 点的形状有很多，同时点也可以在不同坐标系下显示，所以还可以扩展出非常多的图表类型。 |
| path | 路径图 | 路径图是无序的线图。 |
| line | 折线图、曲线图 | 在极坐标系下可以转换成雷达图。 |
| area | 区域图（面积图）、层叠区域图、百分比层叠区域图、区间区域图 | 极坐标系下可用于绘制雷达区域图。 |
| interval | 柱状图、分组柱状图、瀑布图、层叠柱状图、百分比层叠柱状图、直方图、南丁格尔玫瑰图、饼图、条形环图（玉缺图）、漏斗图等 | 通过坐标系的转置、变化，可以生成各种常见的图表类型；所有的图表都可以进行层叠、分组。 |
| polygon | 色块图、地图 | 多个点可以构成多边形。 |
| schema | k 线图 | 自定义的图表类型。 |
:::

:::doc
## API

#### generate-points
* 参数类型：Boolean
* 描述：是否生成多个点来绘制图形，true 时会生成多个点
* 默认值：line、path 默认为 false，其他 geom 类型均为 true
```html
<nuc-geom generate-points />
```

### sortable
* 参数类型：Boolean
* 描述：是否对数据按照 x 轴对应字段进行排序，true 时会进行排序
* 默认值：默认 area 和 line 类型会进行排序（即值为 true），其他类型均为 false。
```html
<nuc-geom sortable />
```

### start-on-zero
* 参数类型：Boolean
* 描述：用于设置图形的 Y 轴基线是否从 0 开始，默认为 true，以 0 为基线
* 默认值：true
```html
<nuc-geom start-on-zero />
```

### connect-nulls
* 参数类型：Boolean
* 描述：用于设置是否将空数据连接起来（用于 line，area 以及 path 类型）
* 默认值： false
```html
<nuc-geom connect-nulls />
```

### position
* 类型： String | Array
* 描述：将数据值映射到图形的位置上的方法。

使用 * 连接，position 属性会对多个字段进行数据的映射，如：cut\*price，x\*y 等，用于二维坐标系图表的绘制。

```html
<nuc-geom type="line" position="x*y" />
```
另外，也可以以数组格式传入：
```html
<nuc-geom type="line" position="['x', 'y']" />
```

### color
* 类型： String | Array
* 描述： 将数据值映射到图形的颜色上的方法。

1. #### color=value
* `value`: String
    * 映射至颜色属性的数据源字段名，如果数据源中不存在这个字段名的话，则按照常量进行解析，这个时候会使用 F2 默认提供的颜色。
    * 也可以直接指定某一个具体的颜色值 color，如 '#fff', 'white', 'l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' 等。
```html
<!-- 对 x 字段进行映射，使用内置颜色-->
<nuc-geom type="point" position="x*y" color="x" />

<!-- 所有点用红色渲染 -->
<nuc-geom type="point" position="x*y" color="red" />

<!-- 定义渐变色 -->
<nuc-geom type="point" position="x*y" color="l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff" />
```
2. #### color=[field, colors]

* `field`：String 即映射至颜色属性的数据源字段名，也支持指定多个参数。
* `colors`：String/Array<br>colors 的参数有以下情况：
    * 如果为空，即未指定颜色的数组，那么使用内置的全局的颜色；
    * 如果需要指定颜色，则需要以数组格式传入，那么分类的颜色按照数组中的颜色确定。对于颜色的分配顺序，会默认按照原始数据源中字段的顺序进行分配；
    * 还支持渐变颜色设置：'color1-color2'，用于指定一个渐变色，数据根据分类或者连续类型，在渐变的颜色区间内取颜色。目前只支持 'red'、'#ddd'、'#dddddd'、'rgb(255, 10, 30)' 这几种格式。
```html
<!-- 使用传入的指定颜色 -->
<nuc-geom type="point" position="x*y" :color="color1" />

<!-- 使用渐变色 -->
<nuc-geom type="point" position="x*y" :color="color2" />
```
```javascript
export default {
    data () {
        return {
            color1: ['z', ['red', 'blue']],
            color2: ['z', 'red-blue']
        }
    }
}
```
3. #### color=[field, callback]
* `field`：String 即映射至颜色属性的数据源字段名，也支持指定多个参数。
* `callback`：Function 回调函数
    * 如果是回调函数，则该回调函数的参数为对应字段的数值，具体使用如下，当 color 映射为多个字段时，参数按照字段声明的顺序传入
```html
<!-- 使用回调函数 -->
<nuc-geom type="point" position="x*y" :color="color3" />
```
```javascript
export default {
    data () {
        return {
            color3: ['z', (z) => z === 1 ? 'red' : 'blue']
        }
    }
}
```

### shape
* 类型： String | Array
* 描述： 将数据值映射到图形的形状上的方法。

1. #### shape=value
    * `value`：String<br><br>只支持接收一个参数，指定几何图像对象绘制的形状。下表列出了不同的 geom 几何图形对象支持的 shape 形状：
    
| geom类型 | shape类型 | 解释 |
|----|----|----|
| point | `circle`,`hollowCircle`,`rect` | 默认为`circle` |
| line | `line`,`smooth`,`dash` | `dash`：虚线，`smooth`：平滑线 |
| area | `area`,`smooth` | 填充内容的区域图 |
| interval | `rect` | |
| polygon | `polygon` | |
| schema | `candle` | 目前仅K线图 |
```html
<nuc-geom type="point" position="x*y" shape="rect" />
```

2. #### shape=[field, shapes]
    * `field`：String<br>field 为映射至颜色属性的数据源字段名。
    * shapes：String | Array<br>shapes 是一个可选参数，如果没有声明会按照 F2 默认为特定 geom 类型配置的形状进行渲染，当然用户也可自己指定渲染的形状，具体的形状已在上面列出
```html
<nuc-geom type="line" position="x*y" :shape="shape1" />
<nuc-geom type="point" position="x*y" :shape="shape2" />
```
```javascript
export default {
    data () {
        return {
            shape1: ['z', 'dash'],
            shape2: ['z', ['circle', 'hollowCircle']]
        }
    }
}
```
3. #### shape=[field, callback]
    * `field`：String <br> field 为映射至颜色属性的数据源字段名。
    * `callback`：Function <br> 回调函数
```html
<nuc-geom type="point" position="x*y" :shape="shape3" />
```
```javascript
export default {
    data () {
        return {
            shape3: ['z', (z) => z === 1 ? 'circle' : 'rect'],
        }
    }
}
```

### size
* 类型： String | Array
* 描述： 将数据值映射到图形的大小上的方法。

1. #### size=value

通过数字常量设置大小
```html
<nuc-geom type="point" position="x*y" size="20" />
```
2. #### size=field

根据 field 字段的值映射大小。
```html
<nuc-geom type="point" position="x*y" size="z" />
```
3. #### size=[field, [min, max]]

根据 field 字段的值映射大小，使用声明的最大值 max（默认 10） 和最小值 min（默认 1）。
```html
<nuc-geom type="point" position="x*y" :size="size1"/>
```
```javascript
export default {
    data () {
        return {
            size1: ['z', [10, 100]]
        }
    }
}
```
4. #### size=[field, callback]

使用回调函数控制图形大小。
```html
<nuc-geom type="point" position="x*y" :size="size2"/>
```
```javascript
export default {
    data () {
        return {
            size2: ['z', (z) => z === 1 ? 5 : 10]
        }
    }
}
```
### adjust
声明几何标记对象的数据调整方式，可用于绘制层叠图、分组图等。支持单一的数据调整方式也支持各种数据调整方式的组合。

F2 支持的调整类型包括：`stack`, `dodge`。
```html
<nuc-geom type="interval" adjust="stack" />
<nuc-geom type="interval" :adjust="{ type: 'stack' }" />
<nuc-geom type="interval" :adjust="[{ type: 'dodge', marginRatio: 0 }]" />
```

### styles
用于配置几何标记显示的图形属性，详见 [绘图属性](https://www.yuque.com/antv/f2/canvas?_blank)。

1. #### styles=cfg
    * `cfg`：Object 配置绘图属性
```html
<nuc-geom type="line" :styles="{ lineWidth: 2 }" />
```
2. #### styles=[field, cfg]
    * field：String 映射的字段名
    * cfg：Object 配置绘图属性，此时属性值也可以是回调函数
```html
<nuc-geom type="line" :styles="style" />
```
```javascript
export default {
    data () {
        return {
            style: ['city', {
                  lineDash(val) {
                    if (val === 'HZ') {
                      return [ 2, 2 ];
                    }
                    return null;
                  }
            }]
        }
    }
}
```
### animate
用于配置具体的动画。参见 [Animation](https://www.yuque.com/antv/f2/api-animate)。

:::
