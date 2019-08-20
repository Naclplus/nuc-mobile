<script>
import mixins from './mixin'

export default {
    name: 'nuc-guide-rect',
    mixins: [mixins],
    created () {
        this.init('rect')
    }
}
</script>
