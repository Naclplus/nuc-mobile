<script>
import { camelAttrs } from './utils'
export default {
    name: 'nuc-scroll-bar',
    created () {
        this.$parent.setScrollBar({
            ...this.$props,
            ...camelAttrs(this.$attrs)
        })
    },
    render () {
        return null
    }
}
</script>
