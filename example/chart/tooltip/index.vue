<template>
    <nuc-page-container header-label="Tooltip 提示信息" no-footer>
        <nuc-chart ref="chart" :source="data" :scale="{ 'School Year': { tickCount: 3 } }">
            <nuc-geom type="interval" position="月份*月均降雨量" color="name" adjust="dodge" />
            <nuc-tooltip :custom="true" @on-change="onChange" @on-hide="onHide" />
        </nuc-chart>
    </nuc-page-container>
</template>

<script>
import F2 from '@antv/f2'
let data = [
    { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
    { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
    { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
    { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
    { name: 'London', 月份: 'May.', 月均降雨量: 47 },
    { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
    { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
    { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
    { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
    { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
    { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
    { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
    { name: 'Berlin', 月份: 'May.', 月均降雨量: 52.6 },
    { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
    { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
    { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }
]
export default {
    name: 'example-chart-tooltip',
    data () {
        return {
            data
        }
    },
    methods: {
        onChange (obj) {
            const chart = this.$refs.chart.chart
            const legend = chart.get('legendController').legends.top[0] // 获取 legend
            const tooltipItems = obj.items
            const legendItems = legend.items
            const map = {}
            legendItems.map((item) => {
                map[item.name] = F2.Util.mix({}, item)
            })
            tooltipItems.map((item) => {
                const { name, value } = item
                if (map[name]) {
                    map[name].value = value
                }
            })
            legend.setItems(Object.values(map))
        },
        onHide (tooltip) {
            const chart = this.$refs.chart.chart
            const legend = chart.get('legendController').legends.top[0]
            legend.setItems(chart.getLegendItems().country)
        }
    }
}
</script>

<style scoped lang="scss">

</style>
