<script>
import { camelAttrs } from './utils'

export default {
    name: 'nuc-tooltip',
    props: {
        visible: {
            type: Boolean,
            default: true
        }
    },
    created () {
        this.$parent.setTooltipOptions({
            ...this.$props,
            ...camelAttrs(this.$attrs),
            onTooltipShow: this._events['on-show'] && this.onTooltipShow,
            onTooltipHide: this._events['on-hide'] && this.onTooltipHide,
            onChange: this._events['on-change'] && this.onChange
        })
    },
    methods: {
        onTooltipShow (obj) {
            this.$emit('on-show', obj)
        },
        onTooltipHide (obj) {
            this.$emit('on-hide', obj)
        },
        onChange (obj) {
            this.$emit('on-change', obj)
        }
    },
    render () {
        return null
    }
}
</script>
