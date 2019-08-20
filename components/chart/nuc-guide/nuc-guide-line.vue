<script>
import mixins from './mixin'

export default {
    name: 'nuc-guide-line',
    mixins: [mixins],
    created () {
        this.init('line')
    }
}
</script>
