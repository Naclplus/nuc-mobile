<script>
import mixins from './mixin'
require('@antv/f2/lib/interaction/pie-select')

export default {
    name: 'nuc-interaction-pie-select',
    mixins: [mixins],
    created () {
        this.init('pie-select', {
            onStart: this._events['on-start'] && this.onStart,
            onEnd: this._events['on-end'] && this.onEnd
        })
    },
    methods: {
        onStart (ev) {
            this.$emit('on-start', ev)
        },
        onEnd (ev) {
            this.$emit('on-end', ev)
        }
    }
}
</script>
