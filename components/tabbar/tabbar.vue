<template>
    <div class="nuc-tabbar" :class="{ 'nuc-tabbar--fixed': fixed }">
        <slot />
    </div>
</template>

<script>
import { ParentMixin } from '../mixins'

export default {
    name: 'nuc-tabbar',
    mixins: [ParentMixin('nuc-tabbar')],
    props: {
        fixed: {
            type: Boolean,
            default: true
        },
        value: {
            type: [String, Number],
            default: 0
        }
    },
    data () {
        return {
            index: this.value
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
        }
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
        }
    }
}
</script>

<style lang="stylus">
    .nuc-tabbar
        position relative
        display flex
        width 100%
        height tabbar-height
        background tabbar-fill
        color tabbar-text-color
        z-index tabbar-z-index
        &--fixed
            position fixed
            bottom 0
        &-item
            position relative
            flex 1
            display flex
            flex-direction column
            align-items center
            justify-content center
            &--active
                color tabbar-text-active-color
            &__icon
                position relative
                margin-bottom 10px
                img
                    height 36px
            &__dot
                position absolute
                top 0
                right -16px
                width 16px
                height 16px
                border-radius 100%
                background tabbar-badge-fill
            &__badge
                position absolute
                top -8px
                right 0
                min-width 28px
                height 28px
                line-height 28px
                border-radius 28px
                padding 0 8px
                font-size 24px
                box-sizing border-box
                background tabbar-badge-fill
                text-align center
                font-weight 500
                color tabbar-badge-color
                white-space nowrap
                transform translateX(50%)
                transform-origin 100%
</style>
