<template>
    <nuc-page-container header-label="Legend 图例" no-footer>
        <nuc-chart :source="data" :scale="{ 'School Year': { tickCount: 3 } }">
            <nuc-geom
                type="line"
                position="School Year*value"
                color="type"
                :styles="['type', {
                    lineDash: function lineDash(val) {
                        if (val === 'Total') {
                            return [1, 4];
                        }
                        return null;
                    }
                }]"
            />
            <nuc-geom type="point" position="School Year*value" color="type" />
            <nuc-legend />
        </nuc-chart>
    </nuc-page-container>
</template>

<script>
let data = [{ 'School Year': '2007/08', 'type': 'Men', 'value': 6767.3 }, { 'School Year': '2007/08', 'type': 'Women', 'value': 1369.7 }, { 'School Year': '2007/08', 'type': 'Total', 'value': 8137 }, { 'School Year': '2008/09', 'type': 'Men', 'value': 7438 }, { 'School Year': '2008/09', 'type': 'Women', 'value': 1558.2 }, { 'School Year': '2008/09', 'type': 'Total', 'value': 8996.2 }, { 'School Year': '2009/10', 'type': 'Men', 'value': 8293.2 }, { 'School Year': '2009/10', 'type': 'Women', 'value': 1859.7 }, { 'School Year': '2009/10', 'type': 'Total', 'value': 10152.9 }, { 'School Year': '2010/11', 'type': 'Men', 'value': 8439.4 }, { 'School Year': '2010/11', 'type': 'Women', 'value': 1868.1 }, { 'School Year': '2010/11', 'type': 'Total', 'value': 10307.5 }, { 'School Year': '2011/12', 'type': 'Men', 'value': 7868 }, { 'School Year': '2011/12', 'type': 'Women', 'value': 1667.5 }, { 'School Year': '2011/12', 'type': 'Total', 'value': 9535.5 }, { 'School Year': '2012/13', 'type': 'Men', 'value': 7803.7 }, { 'School Year': '2012/13', 'type': 'Women', 'value': 1615.6 }, { 'School Year': '2012/13', 'type': 'Total', 'value': 9419.3 }, { 'School Year': '2013/14', 'type': 'Men', 'value': 7698.2 }, { 'School Year': '2013/14', 'type': 'Women', 'value': 1530.5 }, { 'School Year': '2013/14', 'type': 'Total', 'value': 9228.7 }, { 'School Year': '2014/15', 'type': 'Men', 'value': 8342.8 }, { 'School Year': '2014/15', 'type': 'Women', 'value': 1665.4 }, { 'School Year': '2014/15', 'type': 'Total', 'value': 10008.2 }, { 'School Year': '2015/16', 'type': 'Men', 'value': 8245.7 }, { 'School Year': '2015/16', 'type': 'Women', 'value': 1783.5 }, { 'School Year': '2015/16', 'type': 'Total', 'value': 10029.2 }, { 'School Year': '2016/17', 'type': 'Men', 'value': 8097.2 }, { 'School Year': '2016/17', 'type': 'Women', 'value': 1838.2 }, { 'School Year': '2016/17', 'type': 'Total', 'value': 9935.4 }]
export default {
    name: 'example-chart-legend',
    data () {
        return {
            data
        }
    }
}
</script>

<style scoped lang="scss">

</style>
