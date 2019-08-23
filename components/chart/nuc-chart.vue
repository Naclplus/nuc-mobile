<template>
    <div @touchstart.prevent>
        <canvas ref="chart" :style="{ width, height }" />
        <slot />
    </div>
</template>

<script>
import F2 from '@antv/f2/lib/index'
import ScrollBar from '@antv/f2/lib/plugin/scroll-bar'
import { camelAttrs } from './utils'

export default {
    name: 'nuc-chart',
    props: {
        width: { type: String, default: '100vw' },
        height: { type: String, default: '200px' },
        source: { type: Array, default: () => [] },
        scale: { type: Object, default: undefined },
        animate: { type: [Boolean, Object], default: undefined },
        alwaysShowTooltip: { type: Boolean, default: false }
    },
    data () {
        return {
            chart: null, // 图表实例
            coordOption: {}, // 坐标系
            geomOptions: [], // 几何标记
            axisOptions: [], // 轴线
            legendOptions: [], // 图例
            tooltipOption: {}, // 提示信息
            guideOptions: [], // 辅助元素
            interactionOptions: [], // Interaction
            scrollBarOptions: {} // ScrollBar
        }
    },
    watch: {
        source (val) {
            if (this.chart) {
                this.chart.changeData(val)
                if (this.alwaysShowTooltip && this.tooltipPoint) {
                    this.chart.showTooltip(this.tooltipPoint)
                }
            }
        }
    },
    mounted () {
        this.render()
    },
    beforeDestroy () {
        this.chart && this.chart.destroy()
    },
    methods: {
        // 初始化图表
        render () {
            const chartPlugins = []
            if (this.$children.find((item) => item.$options.name === 'nuc-scroll-bar')) {
                chartPlugins.push(ScrollBar)
            }
            const chart = new F2.Chart({
                el: this.$refs.chart,
                pixelRatio: window.devicePixelRatio,
                ...camelAttrs(this.$attrs),
                plugins: chartPlugins
            })
            this.chart = chart
            this.renderCoord()
            this.renderGeom()
            this.renderAxis()
            this.renderLegend()
            this.renderTooltip()
            this.renderGuide()
            this.renderInteraction()
            this.renderScrollBar()
            if (this.scale) {
                chart.source(this.source, this.scale)
            } else {
                chart.source(this.source)
            }
            if (typeof this.animate !== 'undefined') {
                chart.animate(this.animate)
            }
            chart.render()
            // 渲染 Interaction 存在default-selected属性的模块
            this.renderInteractionHasDefaultSelect()
        },
        // 渲染坐标系
        renderCoord () {
            const { type, ...config } = this.coordOption
            this.chart.coord(type, config)
        },
        // 渲染几何图形
        renderGeom () {
            this.geomOptions.forEach((option) => {
                const { generatePoints, sortable, startOnZero, connectNulls } = option
                // 设置属性
                const geometry = this.chart[option.type]({
                    generatePoints, sortable, startOnZero, connectNulls
                })
                geometry.position(option.position)
                // 设置color
                if (option.color) {
                    if (option.color instanceof Array) {
                        geometry.color(option.color[0], option.color[1])
                    } else {
                        geometry.color(option.color)
                    }
                }
                // 设置shape
                if (option.shape) {
                    if (option.shape instanceof Array) {
                        geometry.shape(option.shape[0], option.shape[1])
                    } else {
                        geometry.shape(option.shape)
                    }
                }
                // 设置size
                if (option.size) {
                    if (option.size instanceof Array) {
                        geometry.size(option.size[0], option.size[1])
                    } else {
                        geometry.size(option.size)
                    }
                }
                // 设置adjust
                if (option.adjust) {
                    geometry.adjust(option.adjust)
                }
                // 设置style
                if (option.styles) {
                    if (option.styles instanceof Array) {
                        geometry.style(option.styles[0], option.styles[1])
                    } else {
                        geometry.style(option.styles)
                    }
                }
                // 设置animate
                geometry.animate(option.animate)
            })
        },
        // 渲染轴线
        renderAxis () {
            this.axisOptions.forEach((option) => {
                const { name, visible, ...config } = option
                const parameter = !visible ? false : { ...config }
                if (name) {
                    this.chart.axis(name, parameter)
                } else {
                    this.chart.axis(parameter)
                }
            })
        },
        // 渲染图例
        renderLegend () {
            this.legendOptions.forEach((option) => {
                const { name, visible, onLegendClick, ...config } = option
                const parameter = !visible ? false : { ...config }
                // 添加事件监听
                if (parameter instanceof Object) {
                    // 判断是否传入@on-click事件
                    if (onLegendClick) {
                        parameter.onClick = onLegendClick
                    }
                }
                if (name) {
                    this.chart.legend(name, parameter)
                } else {
                    this.chart.legend(parameter)
                }
            })
        },
        // 渲染提示信息
        renderTooltip () {
            const { visible, onTooltipShow, onTooltipHide, onChange, ...config } = this.tooltipOption
            const parameter = !visible ? false : { ...config }
            // 添加事件监听
            if (parameter instanceof Object) {
                parameter.onShow = (ev) => {
                    this.tooltipPoint = { x: ev.x, y: ev.y }
                    if (onTooltipShow) {
                        onTooltipShow(ev)
                    }
                }
                if (onTooltipHide) {
                    parameter.onHide = onTooltipHide
                }
                if (onChange) {
                    parameter.onChange = onChange
                }
            }
            this.chart.tooltip(parameter)
        },
        // 渲染辅助元素
        renderGuide () {
            this.guideOptions.forEach((option) => {
                const { type, setInstance, styles: style, ...config } = option
                const guide = this.chart.guide()
                setInstance(guide[type]({ ...config, style }))
            })
        },
        // 渲染Interaction
        renderInteraction () {
            this.interactionOptions.forEach((option) => {
                const { type, styles: style, ...config } = option
                if (!config.defaultSelected) {
                    if (config.onStart) {
                        const func = config.onStart
                        config.onStart = function (ev) {
                            func(ev)
                        }
                    }
                    if (config.onProcess) {
                        const func = config.onProcess
                        config.onProcess = function (ev) {
                            func(ev)
                        }
                    }
                    if (config.onEnd) {
                        const func = config.onEnd
                        config.onEnd = function (ev) {
                            func(ev)
                        }
                    }
                    this.chart.interaction(type, {
                        style,
                        ...config
                    })
                }
            })
        },
        // 渲染ScrollBar
        renderScrollBar () {
            this.chart.scrollBar && this.chart.scrollBar(this.scrollBarOptions)
        },
        // 渲染Interaction
        renderInteractionHasDefaultSelect () {
            this.interactionOptions.forEach((option) => {
                const { type, styles: style, ...config } = option
                if (config.defaultSelected) {
                    if (config.onStart) {
                        const func = config.onStart
                        config.onStart = function (ev) {
                            func(ev)
                        }
                    }
                    if (config.onProcess) {
                        const func = config.onProcess
                        config.onProcess = function (ev) {
                            func(ev)
                        }
                    }
                    if (config.onEnd) {
                        const func = config.onEnd
                        config.onEnd = function (ev) {
                            func(ev)
                        }
                    }
                    this.chart.interaction(type, {
                        style,
                        ...config
                    })
                }
            })
        },
        setCoordOption (option) {
            this.coordOption = option
        },
        setGeomOptions (options) {
            this.geomOptions.push(options)
        },
        setAxisOptions (options) {
            this.axisOptions.push(options)
        },
        setLegendOptions (options) {
            this.legendOptions.push(options)
        },
        setTooltipOptions (option) {
            this.tooltipOption = option
        },
        setGuideOptions (option) {
            this.guideOptions.push(option)
        },
        setInteractionOptions (option) {
            this.interactionOptions.push(option)
        },
        setScrollBar (option) {
            this.scrollBarOptions = option
        }
    }
}
</script>

<style scoped lang="scss">

</style>
