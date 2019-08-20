<script>
export default {
    name: 'nuc-axis',
    props: {
        name: {
            type: String,
            default: undefined
        },
        visible: {
            type: Boolean,
            default: true
        },
        line: {
            type: [Object, null],
            default: undefined
        },
        labelOffset: {
            type: [Number],
            default: undefined
        },
        grid: {
            type: [Object, Function, null],
            default: undefined
        },
        tickLine: {
            type: [Object, null],
            default: undefined
        },
        label: {
            type: [Object, Function, null],
            default: undefined
        },
        position: {
            type: String,
            default: undefined
        }
    },
    created () {
        this.$parent.axis = this
        this.$parent.setAxisOptions({
            ...this.$props
        })
    },
    render () {
        return null
    }
}
</script>
