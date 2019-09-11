<template>
    <div class="nuc-picker">
        <picker-wrapper
            :item-height="itemHeight" :max-count="maxCount" :show-toolbar="showToolbar" :title="title"
            @cancel="onCancel" @confirm="onConfirm"
        >
            <nuc-flexbox>
                <nuc-flexbox-item v-for="c in columns" :key="c" class="nuc-picker-column">
                    <scroller :item-height="itemHeight" :value="multiIndex[`wheel${c}`]" @change="(index) => onChange(index, c)">
                        <li v-for="(item, index) in multiData[`wheel${c}`]" :key="index" :style="itemStyle">{{ item.text || item }}</li>
                    </scroller>
                </nuc-flexbox-item>
            </nuc-flexbox>
        </picker-wrapper>
    </div>
</template>

<script>
import Flexbox from '../flexbox'
import Scroller from '../scroller'
import PickerWrapper from '../picker-wrapper'

const FlexboxItem = Flexbox.Item

export function deepClone (obj) {
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item))
    }
    return obj
}

export default {
    name: 'nuc-picker',
    components: {
        Scroller,
        PickerWrapper,
        [Flexbox.name]: Flexbox,
        [FlexboxItem.name]: FlexboxItem
    },
    props: {
        value: {
            type: [String, Number, Array],
            default: undefined
        },
        data: {
            type: Array,
            default: () => []
        },
        itemHeight: {
            type: Number,
            default: 44
        },
        maxCount: {
            type: Number,
            default: 5
        },
        showToolbar: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            columns: 1,
            multiData: {},
            multiIndex: {},
            isInit: false,
            selfValue: deepClone(this.value)
        }
    },
    computed: {
        isMultiple () {
            return this.columns > 1
        },
        itemStyle () {
            return {
                lineHeight: this.itemHeight + 'px'
            }
        }
    },
    watch: {
        value (val) {
            this.selfValue = val
        },
        selfValue (val) {
            this.setWheels(val)
            if (this.isInit) {
                this.$emit('change', val)
                if (!this.showToolbar) {
                    this.$emit('input', val)
                }
            }
        }
    },
    mounted () {
        this.initial()
    },
    methods: {
        onChange (index, columns) {
            const currentObject = this.multiData[`wheel${columns}`][index]
            if (this.isMultiple) {
                const each = (data, columns) => {
                    this.selfValue.splice(columns - 1, 1, data.value || data)
                    if (data.children) {
                        each(data.children[0], columns + 1)
                    }
                }
                each(currentObject, columns)
            } else {
                this.selfValue = currentObject.value || currentObject
            }
        },
        setWheels (val) {
            let array = this.isMultiple ? val : [val]
            for (let i = 0; i < array.length; i++) {
                if (i === 0) {
                    this.$set(this.multiData, `wheel${i + 1}`, this.data)
                    const index = this.data.findIndex((item) => {
                        if (item.value) {
                            return item.value === array[i]
                        }
                        return item === array[i]
                    })
                    this.$set(this.multiIndex, `wheel${i + 1}`, index !== -1 ? index : 0)
                } else {
                    const data = this.multiData[`wheel${i}`].find((item) => {
                        return item.value ? item.value === array[i - 1] : item === array[i - 1]
                    })
                    const index = data.children.findIndex((item) => {
                        if (item.value) {
                            return item.value === array[i] || 0
                        }
                        return item === array[i] || 0
                    })
                    this.$set(this.multiData, `wheel${i + 1}`, data.children)
                    this.$set(this.multiIndex, `wheel${i + 1}`, index !== -1 ? index : 0)
                }
            }
        },
        calcColumns () {
            let max = 0
            function each (data, floor) {
                data.forEach((e) => {
                    if (floor > max) {
                        max = floor
                    }
                    if (e.children) {
                        each(e.children, floor + 1)
                    }
                })
            }
            each(this.data, 1)
            this.columns = max
        },
        setMultipleDefaultValue () {
            // 未传入绑定， 赋初始值
            if (!this.selfValue) {
                this.selfValue = []
                const each = (data) => {
                    if (data) {
                        this.selfValue.push(data[0].value || data[0])
                        each(data[0].children)
                    }
                }
                each(this.data)
                if (!this.isMultiple) {
                    this.selfValue = this.selfValue[0]
                }
            }
            this.setWheels(this.selfValue)
        },
        initial () {
            this.calcColumns()
            this.setMultipleDefaultValue()
            setTimeout(() => {
                this.isInit = true
            }, 0)
        },
        onCancel () {
            this.$emit('cancel', this.selfValue)
        },
        onConfirm () {
            this.$emit('confirm', this.selfValue)
            this.$emit('input', this.selfValue)
        }
    }
}
</script>

<style lang="stylus">
    .nuc-picker-column
        overflow hidden
</style>
