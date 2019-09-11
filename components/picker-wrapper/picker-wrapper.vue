<template>
    <div class="nuc-picker-wrap">
        <nuc-flexbox v-if="showToolbar" class="nuc-picker-wrap-toolbar" justify="between">
            <a class="nuc-picker-wrap-toolbar__left" @click="onCancel">取消</a>
            <div class="nuc-picker-wrap-toolbar__title">{{ title }}</div>
            <a class="nuc-picker-wrap-toolbar__right" @click="onConfirm">确定</a>
        </nuc-flexbox>
        <div class="nuc-picker-content" :style="mainStyle">
            <div class="nuc-picker-content__mask-top" :style="maskStyle" />
            <div class="nuc-picker-content__mask-bottom" :style="maskStyle" />
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'nuc-picker-wrapper',
    props: {
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
    computed: {
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
    methods: {
        onCancel () {
            this.$emit('cancel', this.selfValue)
        },
        onConfirm () {
            this.$emit('confirm', this.selfValue)
        }
    }
}
</script>

<style lang="stylus">
    .nuc-picker-wrap
        background #fff
        &-toolbar
            font-size picker-toolbar-title-font-size
            border-bottom 2px solid picker-toolbar-border-color
            height picker-toolbar-height
            line-height picker-toolbar-height
            &__left, &__right
                padding 0 30px
                color color-primary
            &__title
                color color-text-regular
    .nuc-picker-content
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
