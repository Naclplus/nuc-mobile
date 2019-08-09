<template>
    <i class="nuc-icon" :class="[`nuc-icon--size-${size}`]">
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
