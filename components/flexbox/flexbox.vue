<template>
    <div
        class="nuc-flexbox"
        :class="[
            direction && `nuc-flexbox--direction-${direction}`,
            wrap && `nuc-flexbox--wrap-${wrap}`,
            justify && `nuc-flexbox--justify-${justify}`,
            align && `nuc-flexbox--align-${align}`
        ]"
        :style="getGutter"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'nuc-flexbox',
    props: {
        direction: {
            type: String,
            default: ''
        },
        wrap: {
            type: String,
            default: ''
        },
        justify: {
            type: String,
            default: ''
        },
        align: {
            type: String,
            default: ''
        },
        gutter: {
            type: [String, Number],
            default: undefined
        }
    },
    computed: {
        getGutter () {
            const style = {}
            if (this.gutter) {
                style.marginLeft = `-${this.gutter / 2}px`
                style.marginRight = `-${this.gutter / 2}px`
            }
            return style
        }
    }
}
</script>

<style lang="stylus">
    .nuc-flexbox
        display: flex
        &--directoin-row-reverse
            flex-direction row-reverse
        &--direction-column
            flex-direction column
        &--direction-column-reverse
            flex-direction column-reverse
        &--wrap-wrap
            flex-wrap wrap
        &--wrap-wrap-reverse
            flex-wrap wrap-reverse
        &--justify-end
            justify-content flex-end
        &--justify-center
            justify-content center
        &--justify-between
            justify-content space-between
        &--justify-around
            justify-content space-around
        &--align-start
            align-items flex-start
        &--align-end
            align-items flex-end
        &--align-center
            align-items center
        &--align-baseline
            align-items baseline
        &__item
            flex: 1
</style>
