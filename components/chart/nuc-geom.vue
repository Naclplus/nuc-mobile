<script>
export default {
    name: 'nuc-geom',
    props: {
        type: {
            type: String,
            required: true
        },
        generatePoints: {
            type: Boolean,
            default: undefined
        },
        sortable: {
            type: Boolean,
            default: undefined
        },
        startOnZero: {
            type: Boolean,
            default: undefined
        },
        connectNulls: {
            type: Boolean,
            default: undefined
        },
        position: {
            type: [String, Array],
            required: true
        },
        color: {
            type: [String, Array],
            default: undefined
        },
        shape: {
            type: [String, Array],
            default: undefined
        },
        size: {
            type: [String, Number, Array],
            default: undefined
        },
        adjust: {
            type: [String, Array],
            default: undefined
        },
        styles: {
            type: [Object, Array],
            default: undefined
        },
        animate: {
            type: [Boolean, Object],
            default: true
        }
    },
    created () {
        this.$parent.setGeomOptions({
            ...this.$props
        })
    },
    render () {
        return null
    }
}
</script>
