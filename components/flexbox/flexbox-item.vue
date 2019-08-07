<template>
    <div
        :class="[
            {'nuc-flexbox__item': Boolean(!width) }
        ]"
        :style="getStyle"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'nuc-flexbox-item',
    props: {
        width: {
            type: String,
            default: undefined
        }
    },
    computed: {
        getStyle () {
            const style = {}
            if (this.$parent.gutter) {
                style.paddingLeft = `${this.$parent.gutter / 2}px`
                style.paddingRight = `${this.$parent.gutter / 2}px`
            }
            if (this.width) {
                style.width = this.width
            }
            return style
        }
    }
}
</script>
