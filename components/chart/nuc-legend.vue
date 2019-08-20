<script>
import { camelAttrs } from './utils'

export default {
    name: 'nuc-legend',
    props: {
        name: {
            type: String,
            default: undefined
        },
        visible: {
            type: Boolean,
            default: true
        }
    },
    created () {
        this.$parent.setLegendOptions({
            ...this.$props,
            ...camelAttrs(this.$attrs),
            onLegendClick: this._events['on-click'] && this.onLegendClick
        })
    },
    methods: {
        onLegendClick (ev) {
            this.$emit('on-click', ev)
        }
    },
    render () {
        return null
    }
}
</script>
