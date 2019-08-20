<script>
import mixins from './mixin'
require('@antv/f2/lib/interaction/swipe')

export default {
    name: 'nuc-interaction-swipe',
    mixins: [mixins],
    created () {
        this.init('swipe', {
            onStart: this._events['on-start'] && this.onStart,
            onProcess: this._events['on-process'] && this.onProcess,
            onEnd: this._events['on-end'] && this.onEnd
        })
    },
    methods: {
        onStart () {
            this.$emit('on-start')
        },
        onProcess (ev) {
            this.$emit('on-process', ev)
        },
        onEnd () {
            this.$emit('on-end')
        }
    }
}
</script>
