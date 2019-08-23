<template>
    <nuc-page-container header-label="Coord 坐标系" no-footer>
        <nuc-chart :source="data">
            <nuc-legend position="right" />
            <nuc-axis :visible="false" />
            <nuc-coord type="polar" :transposed="true" :inner-radius="0.7" />
            <nuc-geom type="interval" position="a*proportion" color="name" adjust="stack" />
        </nuc-chart>
        <nuc-chart :source="data">
            <nuc-legend position="bottom" align="center" />
            <nuc-axis :visible="false" />
            <nuc-coord type="polar" :transposed="true" :start-angle="-Math.PI" :end-angle="0" />
            <nuc-geom type="interval" position="a*proportion" color="name" adjust="stack" />
        </nuc-chart>
    </nuc-page-container>
</template>

<script>
const data = [
    { name: '芳华', proportion: 0.4, a: '1' },
    { name: '妖猫传', proportion: 0.2, a: '1' },
    { name: '机器之血', proportion: 0.18, a: '1' },
    { name: '心理罪', proportion: 0.15, a: '1' },
    { name: '寻梦环游记', proportion: 0.05, a: '1' },
    { name: '其他', proportion: 0.02, a: '1' }
]
export default {
    name: 'example-chart-coord',
    data () {
        return {
            data
        }
    }
}
</script>

<style scoped lang="scss">

</style>
