<script>
import { camelAttrs } from './utils'

export default {
    name: 'nuc-coord',
    props: {
        type: {
            type: String,
            default: 'rect'
        }
    },
    created () {
        this.$parent.setCoordOption({
            ...this.$props,
            ...camelAttrs(this.$attrs)
        })
    },
    render () {
        return null
    }
}
</script>
