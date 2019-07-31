<template>
    <button
        class="nuc-button"
        :disabled="disabled || loading"
        :class="[
            size && `nuc-button--${size}`,
            type && `nuc-button--${type}`,
            inline ? `nuc-button--inline` : 'nuc-button--block',
            radius && `nuc-button--radius`,
            ghost && `nuc-button--ghost`,
            (disabled || loading) && `nuc-button--disabled`
        ]"
        @click="handleButtonClick"
    >
        <div class="nuc-button__inner">
            <svg
                v-if="loading" class="nuc-button__inner-loading" version="1.1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50" xml:space="preserve" fill="currentColor"
            >
                <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                    <animateTransform
                        attributeType="xml" attributeName="transform" type="rotate" from="0 25 25"
                        to="360 25 25" dur="0.6s" repeatCount="indefinite"
                    />
                </path>
            </svg>
            <p><slot /></p>
        </div>
    </button>
</template>

<script>
export default {
    name: 'nuc-button',
    props: {
        size: {
            type: String,
            default: 'large'
        },
        type: {
            type: String,
            default: 'default'
        },
        inline: {
            type: Boolean,
            default: false
        },
        ghost: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleButtonClick (e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style lang="stylus">
    .nuc-button
        display block
        -webkit-appearance: none
        outline: none
        white-space: nowrap
        border: none
        transition: all .3s
        -webkit-user-select: none
        -webkit-tap-highlight-color: transparent
        box-sizing border-box
        &__inner
            display flex
            align-items center
            justify-content center
            &-loading
                width 1.5em
                height 1.5em
                fill currentColor
                margin-right: 20px;
        &--disabled
            opacity .4
        &--large
            height button-large-height
            line-height button-large-height
            font-size button-large-font-size
            &^[0]--radius
                border-radius button-large-height
        &--small
            height button-small-height
            line-height button-small-height
            font-size button-small-font-size
            &^[0]--radius
                border-radius button-small-height
        &--block
            width: 100%
        &--inline
            padding: 0 30px;
            display inline-block
        &--default
            background-color: button-default-fill
            color: button-default-color
            border: 1px solid button-default-border-color
            &:enabled:active
                background-color: button-default-active-fill
        &--primary
            background-color: button-primary-fill
            color: button-primary-color
            border: 1px solid button-primary-border-color
            &:enabled:active
                background-color: button-primary-active-fill
        &--success
            background-color: button-success-fill
            color: button-success-color
            border: 1px solid button-success-border-color
            &:enabled:active
                background-color: button-success-active-fill
        &--warning
            background-color: button-warning-fill
            color: button-warning-color
            border: 1px solid button-warning-border-color
            &:enabled:active
                background-color: button-warning-active-fill
        &--danger
            background-color: button-danger-fill
            color: button-danger-color
            border: 1px solid button-danger-border-color
            &:enabled:active
                background-color: button-danger-active-fill
        &--ghost
            background-color: transparent
            &^[0]--default
                color: button-default-ghost-color
                &:enabled:active
                    background-color: button-default-ghost-active-fill
            &^[0]--primary
                color: button-primary-ghost-color
                &:enabled:active
                    background-color: button-primary-ghost-active-fill
            &^[0]--success
                color: button-success-ghost-color
                &:enabled:active
                   background-color: button-success-ghost-active-fill
            &^[0]--warning
                color: button-warning-ghost-color
                &:enabled:active
                   background-color: button-warning-ghost-active-fill
            &^[0]--danger
                color: button-danger-ghost-color
                &:enabled:active
                    background-color: button-danger-ghost-active-fill
</style>
