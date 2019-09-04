<template>
    <div class="nuc-popup">
        <transition name="nuc-popup__mask">
            <div v-if="isMaskShow" class="nuc-popup__mask" @click="onMaskClick" @touchmove.prevent />
        </transition>
        <transition :name="contentTransitionName">
            <div v-if="isContentShow" class="nuc-popup__content" :class="`nuc-popup__content--${position}`">
                <div>
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'nuc-popup',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        maskClickable: {
            type: Boolean,
            default: true
        },
        hasMask: {
            type: Boolean,
            default: true
        },
        position: {
            type: String,
            default: 'bottom'
        }
    },
    data () {
        return {
            show: this.value
        }
    },
    computed: {
        isMaskShow () {
            return this.hasMask && this.show
        },
        isContentShow () {
            return this.show
        },
        contentTransitionName () {
            return `nuc-popup__content--${this.position}`
        }
    },
    watch: {
        show (val) {
            this.$emit('input', val)
            if (val) {
                this.$emit('open')
            } else {
                this.$emit('close')
            }
        },
        value (val) {
            this.show = val
        }
    },
    mounted () {
        document.body.appendChild(this.$el)
    },
    destroyed () {
        this.show = false
        document.body.removeChild(this.$el)
    },
    deactivated () {
        this.show = false
        document.body.removeChild(this.$el)
    },
    methods: {
        onMaskClick () {
            if (this.maskClickable) {
                this.show = false
            }
        }
    }
}
</script>

<style lang="stylus">
    .nuc-popup
        &__mask
            position fixed
            top 0
            bottom 0
            left 0
            right 0
            z-index popup-mask-zindex
            background-color popup-mask-color
            &-enter-active, &-leave-active
                transition: opacity popup-transition-duration;
            &-enter, &-leave-to
                opacity 0
        &__content
            position fixed
            background popup-content-background
            z-index popup-content-zindex
            overflow hidden
            &--bottom
                left 0
                bottom 0
                width 100%
                border-radius popup-content-radius popup-content-radius 0 0
                &-enter-active, &-leave-active
                    transition all popup-transition-duration
                    transform translateY(0)
                &-enter, &-leave-to
                    transform translateY(100%)
                    opacity 0
            &--top
                left 0
                top 0
                width 100%
                border-radius 0 0 popup-content-radius popup-content-radius
                &-enter-active, &-leave-active
                    transition all popup-transition-duration
                    transform translateY(0)
                &-enter, &-leave-to
                    transform translateY(-100%)
                    opacity 0
            &--left
                left 0
                top 0
                height 100%
                border-radius 0 popup-content-radius popup-content-radius 0
                &-enter-active, &-leave-active
                    transition all popup-transition-duration
                    transform translateX(0)
                &-enter, &-leave-to
                    transform translateX(-100%)
                    opacity 0
            &--right
                right 0
                top 0
                height 100%
                border-radius popup-content-radius 0 0 popup-content-radius
                &-enter-active, &-leave-active
                    transition all popup-transition-duration
                    transform translateX(0)
                &-enter, &-leave-to
                    transform translateX(100%)
                    opacity 0
</style>
