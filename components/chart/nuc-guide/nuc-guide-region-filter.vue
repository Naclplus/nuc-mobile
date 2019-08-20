<script>
import mixins from './mixin'
require('@antv/f2/lib/component/guide/region-filter')

export default {
    name: 'nuc-guide-region-filter',
    mixins: [mixins],
    created () {
        this.init('regionFilter')
    }
}
</script>
