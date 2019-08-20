<script>
import mixins from './mixin'
require('@antv/f2/lib/component/guide/point')

export default {
    name: 'nuc-guide-point',
    mixins: [mixins],
    created () {
        this.init('point')
    }
}
</script>
