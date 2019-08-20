<script>
import mixins from './mixin'

export default {
    name: 'nuc-guide-tag',
    mixins: [mixins],
    created () {
        this.init('tag')
    }
}
</script>
