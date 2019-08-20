<script>
import mixins from './mixin'

export default {
    name: 'nuc-guide-text',
    mixins: [mixins],
    created () {
        this.init('text')
    }
}
</script>
