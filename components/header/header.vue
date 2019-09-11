<template>
    <header class="nuc-header" :class="{ 'nuc-header--fixed': fixed, 'nuc-header--transparent': transparent }">
        <div class="nuc-header__left-label-wrap" @click.stop="handleLeftClick">
            <slot v-if="!noLeft" name="left-label">
                <div class="nuc-header__default-left-label">
                    <nuc-icon :type="leftIcon" />
                    <span>{{ leftText }}</span>
                </div>
            </slot>
        </div>
        <h1 class="nuc-header__main-content-wrap">
            <slot />
        </h1>
        <div class="nuc-header__right-label-wrap">
            <slot name="right-label" />
        </div>
    </header>
</template>

<script>
import NucIcon from '../icon-font'
export default {
    name: 'nuc-header',
    components: {
        NucIcon
    },
    props: {
        fixed: {
            type: Boolean,
            default: true
        },
        transparent: {
            type: Boolean,
            default: false
        },
        noLeft: {
            type: Boolean,
            default: false
        },
        leftIcon: {
            type: String,
            default: 'arrow-left'
        },
        leftText: {
            type: String,
            default: '返回'
        }
    },
    methods: {
        handleLeftClick () {
            if (this._events['left-click']) {
                this.$emit('left-click')
            } else {
                this.$router ? this.$router.history.go(-1) : window.history.go(-1)
            }
        }
    }
}
</script>

<style lang="stylus">
    .nuc-header
        position: relative
        width: 100%
        height header-height
        line-height header-height
        background header-fill
        box-sizing border-box
        &--fixed
            position fixed
            z-index: header-z-index
        &--transparent
            background transparent
        &__left-label-wrap, &__right-label-wrap
            position absolute
            white-space nowrap
            width 20%
            color header-label-default-color
        &__left-label-wrap
            padding-left header-horizontal-space-between
        &__right-label-wrap
            right 0
            top 0
            text-align right
            padding-right header-horizontal-space-between
        &__main-content-wrap
            width 60%
            margin 0 auto
            text-align center
            color header-text-color
            font-size header-title-font-size
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
        &__default-left-label
            span
                font-size header-left-label-font-size
                vertical-align middle
</style>
