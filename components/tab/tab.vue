<template>
    <div class="nuc-tab">
        <div
            ref="nav"
            class="nuc-tab-wrap"
            :class="[
                { 'nuc-tab-wrap--scrollable': scrollable }
            ]"
        >
            <slot />
            <div
                v-if="activeLine"
                class="nuc-tab-wrap__active-line"
                :class="{ 'nuc-tab-wrap__active-line--animate': activeLineAnimate }"
                :style="activeLinePositionStyle"
            />
        </div>
        <div class="nuc-tab-content" :class="{'nuc-tab-content--is-animate': contentAnimate}" :style="contentStyle">
            <nuc-tab-content />
        </div>
    </div>
</template>

<script>
import { ParentMixin } from '../mixins'

const Content = {
    functional: true,
    render: function (createElement, context) {
        const parentChildren = context.parent.children
        if (parentChildren) {
            const nodes = []
            for (let i = 0; i < parentChildren.length; i++) {
                if (parentChildren[i].$slots.default) {
                    nodes.push(createElement('div', {
                        class: {
                            'nuc-tab-content-item': true
                        }
                    }, parentChildren[i].$slots.default))
                }
            }
            return nodes
        }
        return null
    }
}

export default {
    name: 'nuc-tab',
    components: {
        'nuc-tab-content': Content
    },
    mixins: [ParentMixin('nuc-tab')],
    props: {
        value: {
            type: [String, Number],
            default: 0
        },
        scrollThreshold: {
            type: [String, Number],
            default: 4
        },
        inlineBar: {
            type: Boolean,
            default: false
        },
        activeLine: {
            type: Boolean,
            default: true
        },
        activeLineAnimate: {
            type: Boolean,
            default: true
        },
        contentAnimate: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            index: this.value,
            inited: false,
            direction: 'forward'
        }
    },
    computed: {
        currentChild () {
            return this.children[this.index] || this.children.find((item) => item.name === this.index)
        },
        currentChildIndex () {
            return this.children.indexOf(this.currentChild)
        },
        contentStyle () {
            return {
                transform: `translateX(-${100 * this.currentChildIndex}%)`
            }
        },
        scrollable () {
            return this.children.length > this.scrollThreshold
        },
        left () {
            if (this.inited) {
                const nav = this.$refs.nav
                const count = this.scrollable ? (nav.offsetWidth / this.currentChild.$el.getBoundingClientRect().width) : this.children.length
                return `${this.currentChildIndex * (100 / count)}%`
            }
            return null
        },
        right () {
            if (this.inited) {
                const nav = this.$refs.nav
                const count = this.scrollable ? (nav.offsetWidth / this.currentChild.$el.getBoundingClientRect().width) : this.children.length
                return `${(count - this.currentChildIndex - 1) * (100 / count)}%`
            }
            return null
        },
        inlineBarMargin () {
            if (this.inited && this.inlineBar) {
                const currentChildren = this.currentChild.$el
                return `${(currentChildren.getBoundingClientRect().width - currentChildren.children[0].getBoundingClientRect().width) / 2}px`
            }
            return null
        },
        activeLinePositionStyle () {
            return {
                left: this.left,
                right: this.right,
                margin: `0 ${this.inlineBarMargin}`
            }
        }
    },
    watch: {
        children () {
            this.setActiveItem()
        },
        value (val) {
            this.index = val
            this.setActiveItem()
        },
        index (val) {
            this.setActiveItem()
            this.$emit('input', val)
            this.$emit('change', val)
            this.scrollToActiveTab()
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.inited = true
            if (this.currentChild.disabled) {
                const availableTab = this.children.filter((item) => !item.disabled)
                this.index = availableTab.length ? availableTab[0].name || availableTab[0].index : -1
            }
        })
    },
    methods: {
        setActiveItem () {
            this.children.forEach((item, index) => {
                item.active = (item.name || index) === this.index
            })
        },
        onChange (active) {
            if (active !== this.index) {
                this.index = active
            }
        },
        scrollToActiveTab () {
            if (!this.scrollable || !this.children || !this.children.length) {
                return
            }
            const currentIndexTab = this.currentChild.$el
            let count = 0
            // scroll animation
            const step = () => {
                const scrollDuration = 15
                const nav = this.$refs.nav
                nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration
                if (++count < scrollDuration) {
                    window.requestAnimationFrame(step)
                }
            }
            window.requestAnimationFrame(step)
        }
    }
}
</script>

<style lang="stylus">
    .nuc-tab
        overflow hidden
    .nuc-tab-wrap
        position relative
        height tab-height
        background brand-primary
        display flex
        border-bottom tab-label-border
        user-select none
        &__active-line
            position absolute
            bottom 0
            height tab-active-line-height
            background tab-active-line-color
            &--animate
                transition all 0.3s cubic-bezier(0.35, 0, 0.25, 1)
        &--scrollable
            overflow hidden
            &::-webkit-scrollbar
                display none
            .nuc-tab-item
                flex-grow  0
                flex-shrink 0
                flex-basis 22%
    .nuc-tab-item
        color tab-label-color
        font-size tab-label-size
        flex 1
        height 100%
        display flex
        align-items center
        justify-content center
        cursor pointer
        padding 0 10px
        box-sizing border-box
        min-width 0
        span
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
        &--disabled
            color #ddd
        &--active
            color tab-label-active-color
    .nuc-tab-content
        display flex
        &--is-animate
            transition transform .3s
    .nuc-tab-content-item
        background brand-primary
        padding 50px 40px
        width 100%
        flex-shrink 0
        box-sizing border-box
</style>
