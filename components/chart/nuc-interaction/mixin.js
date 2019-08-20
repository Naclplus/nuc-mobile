import { camelAttrs } from '../utils'

export default {
    methods: {
        init (type, event) {
            this.$parent.setInteractionOptions(type, {
                ...camelAttrs(this.$attrs),
                ...event
            })
        }
    },
    render () {}
}
