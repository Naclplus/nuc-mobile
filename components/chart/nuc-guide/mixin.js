import { camelAttrs } from '../utils'
import _ from 'lodash'

export default {
    data () {
        return {
            instance: null
        }
    },
    watch: {
        '$attrs': function (val) {
            const { styles: style, ...option } = camelAttrs(val)
            const newOptions = {
                ...option,
                style
            }
            if (this.instance) {
                _.merge(this.instance, newOptions)
                this.instance.repaint()
            }
        }
    },
    methods: {
        init (type) {
            this.$parent.setGuideOptions(type, { setInstance: this.setInstance, ...camelAttrs(this.$attrs) })
        },
        setInstance (guide) {
            this.instance = guide
        }
    },
    render () {}
}
