<template>
    <i class="nuc-loading">
        <svg class="nuc-loading__circular" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" />
        </svg>
    </i>
</template>

<script>
export default {
    name: 'nuc-loading',
    props: {
        size: {
            type: [String, Number],
            default: 20
        }
    },
    computed: {
        sizeStyle () {
            let fontSize = isNaN(Number(this.size)) ? this.size : this.size + 'px'
            return {
                fontSize
            }
        }
    }
}
</script>

<style lang="stylus">
    .nuc-loading
        position relative
        display inline-block
        line-height normal
        vertical-align middle
        width 1.5em
        height 1.5em
        &__circular
            fill none
            animation-duration 2s
            animation nuc-rotate 1s linear infinite
            width 100%
            height 100%
            circle
                animation nuc-circular 1.5s ease-in-out infinite
                stroke currentColor
                stroke-width 3
                stroke-linecap round
    @keyframes nuc-rotate
        0%
            transform rotate(0)
        100%
            transform rotate(360deg)
    @keyframes nuc-circular
        0%
            stroke-dasharray 1, 200
            stroke-dashoffset 0
        50%
            stroke-dasharray 90, 150
            stroke-dashoffset -40
        100%
            stroke-dasharray 90, 150
            stroke-dashoffset -120
</style>
