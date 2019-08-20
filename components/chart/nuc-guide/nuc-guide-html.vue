<script>
import mixins from './mixin'

export default {
    name: 'nuc-guide-html',
    mixins: [mixins],
    created () {
        this.init('html')
    }
}
</script>
