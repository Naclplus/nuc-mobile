<template>
    <div class="nuc-toast" @touchmove.prevent>
        <transition name="nuc-toast__mask">
            <div v-if="isMaskShow" class="nuc-toast__mask" />
        </transition>
        <transition name="nuc-toast-animate-fade" @after-enter="onAfterEnter" @after-leave="onAfterLeave">
            <div v-if="selfValue" class="nuc-toast-content" :class="[`nuc-toast-content--${position}`, `nuc-toast-content--${type}`]">
                <div v-if="hasIcon">
                    <nuc-icon :type="iconType" :size="45" />
                </div>
                <div v-if="type === 'loading'" class="nuc-toast-content__loading">
                    <nuc-loading />
                </div>
                <div class="nuc-toast-content__text">{{ text }}</div>
            </div>
        </transition>
    </div>
</template>

<script>
import Icon from '../icon-font'
import Loading from '../loading'

export default {
    name: 'nuc-toast',
    components: {
        [Icon.name]: Icon,
        [Loading.name]: Loading
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 2000
        },
        position: {
            type: String,
            default: 'center'
        },
        type: {
            type: String,
            default: 'text'
        },
        hasMask: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            selfValue: this.value
        }
    },
    computed: {
        isMaskShow () {
            return this.hasMask && this.selfValue
        },
        hasIcon () {
            return this.type === 'success' || this.type === 'fail'
        },
        iconType () {
            if (this.type === 'success') {
                return 'circle-right-o'
            } else if (this.type === 'fail') {
                return 'circle-wrong-o'
            }
            return null
        }
    },
    watch: {
        value (val) {
            this.selfValue = val
        },
        selfValue (val) {
            this.$emit('input', val)
        }
    },
    methods: {
        onAfterEnter () {
            this.$emit('opened')
            if (this.onOpened) {
                this.onOpened()
            }
        },
        onAfterLeave () {
            this.$emit('closed')
            if (this.onClose) {
                this.onClose()
            }
        }
    }
}
</script>

<style lang="stylus">
    .nuc-toast__mask
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        z-index toast-mask-zindex
        background-color toast-mask-color
        &-enter-active, &-leave-active
            transition: opacity toast-transition-duration;
        &-enter, &-leave-to
            opacity 0
    .nuc-toast-content
        position fixed
        display flex
        flex-direction column
        align-items center
        justify-content center
        left 50%
        color toast-font-color
        padding 32px
        font-size toast-font-size
        transform translate(-50%, -50%)
        text-align center
        width toast-square-side
        max-width 80%
        min-height toast-square-side
        background-color toast-background-color
        border-radius toast-border-radius
        line-height 40px
        white-space pre-wrap
        word-break break-all
        z-index toast-zindex
        &--text
            padding 16px 24px
            min-width toast-text-min-width
            width fit-content
            min-height unset
            .nuc-toast-content__text
                margin-top 0
        &--center
            top toast-position-center
        &--top
            transform translate(-50%, 0)
            top toast-position-top
        &--bottom
            transform translate(-50%, 0)
            bottom toast-position-bottom
        &__text
            margin-top 16px
        &__loading
            font-size 50px
    .nuc-toast-animate-fade-enter-active, .nuc-toast-animate-fade-leave-active {
        transition: opacity toast-transition-duration
    }
    .nuc-toast-animate-fade-enter, .nuc-toast-animate-fade-leave-to {
        opacity: 0
    }
</style>
