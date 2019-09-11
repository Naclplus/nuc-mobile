<template>
    <i class="nuc-icon" :class="{ [`nuc-icon--size-${size}`] : isPrepaidSize }" :style="sizeStyle">
        <svg
            class=""
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
        >
            <use :xlink:href="`#${prefix}-${type}`" />
        </svg>
    </i>
</template>

<script>
import './iconfont'
export default {
    name: 'nuc-icon',
    props: {
        prefix: {
            type: String,
            default: 'nuc'
        },
        type: {
            type: String,
            required: true
        },
        size: {
            type: [String, Number],
            default: 'md'
        }
    },
    computed: {
        isPrepaidSize () {
            return this.size === 'xs' || this.size === 'sm' || this.size === 'md' || this.size === 'lg' || this.size === 'xl' || this.size === 'xxl'
        },
        sizeStyle () {
            if (!this.isPrepaidSize) {
                let fontSize = isNaN(Number(this.size)) ? this.size : this.size + 'px'
                return {
                    fontSize
                }
            }
            return null
        }
    }
}
</script>

<style lang="stylus">
    .nuc-icon
        display inline-block
        font-style normal
        vertical-align middle
        text-align center
        text-transform none
        line-height 0
        text-rendering optimizeLegibility
        -webkit-font-smoothing antialiased
        &--size-xs
            font-size: icon-font-size-xs
        &--size-sm
            font-size: icon-font-size-sm
        &--size-md
            font-size: icon-font-size-md
        &--size-lg
            font-size: icon-font-size-lg
        &--size-xl
            font-size: icon-font-size-xl
        &--size-xxl
            font-size: icon-font-size-xxl
</style>
