<template>
    <div class="nuc-picker-wrap">
        <nuc-flexbox v-if="showToolbar" class="nuc-picker-toolbar" justify="between">
            <a class="nuc-picker-toolbar__left" @click="onCancel">取消</a>
            <div class="nuc-picker-toolbar__title">{{ title }}</div>
            <a class="nuc-picker-toolbar__right" @click="onConfirm">确定</a>
        </nuc-flexbox>
        <div class="nuc-picker" :style="mainStyle">
            <div class="nuc-picker__mask-top" :style="maskStyle" />
            <div class="nuc-picker__mask-bottom" :style="maskStyle" />
            <nuc-flexbox>
                <nuc-flexbox-item v-for="c in columns" :key="c">
                    <scroller :item-height="itemHeight" :value="multiIndex[`wheel${c}`]" @change="(index) => onChange(index, c)">
                        <ul class="nuc-picker__list-wrap" :style="listWrapStyle">
                            <li v-for="(item, index) in multiData[`wheel${c}`]" :key="index" :style="itemStyle">{{ item.text || item }}</li>
                        </ul>
                    </scroller>
                </nuc-flexbox-item>
            </nuc-flexbox>
        </div>
    </div>
</template>

<script>
import Flexbox from '../flexbox'
import Scroller from './scroller'

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
        mainStyle () {
            return {
                height: this.itemHeight * this.maxCount + 'px'
            }
        },
        listWrapStyle () {
            return {
                marginTop: (this.maxCount - 1) / 2 * this.itemHeight + 'px'
            }
        },
        itemStyle () {
            return {
                lineHeight: this.itemHeight + 'px'
            }
        },
        maskStyle () {
            return {
                height: (this.maxCount - 1) / 2 * this.itemHeight + 'px'
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
                    this.$set(this.multiIndex, `wheel${i + 1}`, this.data.findIndex((item) => {
                        if (item.value) {
                            return item.value === array[i]
                        }
                        return item === array[i]
                    }))
                } else {
                    const data = this.multiData[`wheel${i}`].find((item) => {
                        return item.value ? item.value === array[i - 1] : item === array[i - 1]
                    })
                    this.$set(this.multiData, `wheel${i + 1}`, data.children)
                    this.$set(this.multiIndex, `wheel${i + 1}`, data.children.findIndex((item) => {
                        if (item.value) {
                            return item.value === array[i]
                        }
                        return item === array[i]
                    }))
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
    .nuc-picker-wrap
        background #fff
    .nuc-picker-toolbar
        font-size picker-toolbar-title-font-size
        border-bottom 2px solid picker-toolbar-border-color
        height picker-toolbar-height
        line-height picker-toolbar-height
        &__left, &__right
            padding 0 30px
            color color-primary
        &__title
            color color-text-regular
    .nuc-picker
        position relative
        overflow hidden
        &__mask-top, &__mask-bottom
            position: absolute;
            width 100%
            z-index 2
            pointer-events: none
        &__mask-top
            top 0
            background linear-gradient(0deg, picker-mask-start-color, picker-mask-end-color)
            border-bottom: 2px solid picker-indicator-border-color
        &__mask-bottom
            bottom 0
            background linear-gradient(180deg, picker-mask-start-color, picker-mask-end-color)
            border-top 2px solid picker-indicator-border-color
        &__list-wrap
            margin 0
            padding 0
            list-style none
            text-align center
            font-size picker-font-size
</style>
