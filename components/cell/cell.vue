<template>
    <div class="nuc-cell" @click="onClick">
        <nuc-flexbox :align="isVerticalCenter">
            <slot name="icon">
                <nuc-icon
                    v-if="showIcon" class="nuc-cell__icon" :type="icon"
                    :prefix="iconPrefix"
                />
            </slot>
            <nuc-flexbox-item v-if="showLabel" class="nuc-cell__label">
                <slot name="label">
                    <span>{{ label }}</span>
                </slot>
                <div v-if="showDescribe" class="nuc-cell__describe">
                    <slot name="describe">
                        {{ describe }}
                    </slot>
                </div>
            </nuc-flexbox-item>
            <nuc-flexbox-item class="nuc-cell__extra" :class="{ 'nuc-cell__extra--alone': isRightAlone }">
                <slot>
                    <span>{{ extra }}</span>
                </slot>
            </nuc-flexbox-item>
            <slot name="arrow">
                <nuc-icon v-if="showArrow" class="nuc-cell__arrow" :type="`arrow-${arrowDirection}`" size="xs" />
            </slot>
        </nuc-flexbox>
    </div>
</template>

<script>
import { ChildrenMixin } from '../mixins'
import Flexbox from '../flexbox'
import Icon from '../icon-font'
const FlexboxItem = Flexbox.Item
export default {
    name: 'nuc-cell',
    components: {
        [Flexbox.name]: Flexbox,
        [FlexboxItem.name]: FlexboxItem,
        [Icon.name]: Icon
    },
    mixins: [
        ChildrenMixin('nuc-cell-group')
    ],
    props: {
        label: {
            type: String,
            default: ''
        },
        extra: {
            type: String,
            default: ''
        },
        describe: {
            type: String,
            default: ''
        },
        verticalCenter: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        iconPrefix: {
            type: String,
            default: 'nuc'
        },
        arrow: {
            type: [Boolean, String],
            default: false
        }
    },
    computed: {
        showLabel () {
            return this.label || this.$slots.label || this.showDescribe
        },
        showIcon () {
            return this.icon || this.$slots.icon
        },
        showDescribe () {
            return this.describe || this.$slots.describe
        },
        showArrow () {
            return this.arrow || this.$slots.arrow
        },
        isRightAlone () {
            return !this.label && !this.$slots.label && !this.$slots.describe
        },
        isVerticalCenter () {
            return this.verticalCenter ? 'center' : ''
        },
        arrowDirection () {
            if (typeof this.arrow === 'boolean' && this.arrow) {
                return 'right'
            }
            return this.arrow
        }
    },
    methods: {
        onClick (e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style lang="stylus">
    .nuc-cell
        padding 26px 30px
        font-size 28px
        position relative
        background #fff
        min-height 42px
        line-height 48px
        -webkit-tap-highlight-color transparent
        &:active
            background #f2f3f5
        &:not(:last-child)::after
            content ''
            position absolute
            bottom 0
            left 30px
            right 0
            border-bottom 1px solid #ebedf0
            transform scaleY(0.5)
        &__label
            color #333
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
        &__arrow
            color #969799
            margin-left 10px
        &__extra
            color #969799
            text-align right
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            &--alone
                color #333
                text-align left
        &__describe
            font-size 24px
            color #969799
            margin-top 10px
            line-height 30px
            word-break break-all
            white-space normal
        &__icon
            margin-right 10px
</style>
