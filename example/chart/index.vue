<template>
    <nuc-page-container header-label="Chart 介绍" no-footer>
        <nuc-chart :source="data" :scale="scale">
            <nuc-geom type="interval" position="year*sales" />
        </nuc-chart>
    </nuc-page-container>
</template>

<script>
let data = [{
    year: '1951 年',
    sales: 38
}, {
    year: '1952 年',
    sales: 52
}, {
    year: '1956 年',
    sales: 61
}, {
    year: '1957 年',
    sales: 145
}, {
    year: '1958 年',
    sales: 48
}, {
    year: '1959 年',
    sales: 38
}, {
    year: '1960 年',
    sales: 38
}, {
    year: '1962 年',
    sales: 38
}]
export default {
    name: 'example-chart-component',
    data () {
        return {
            data,
            scale: {
                sales: {
                    tickCount: 5
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">

</style>
