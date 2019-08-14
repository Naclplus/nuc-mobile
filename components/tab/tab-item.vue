<template>
    <div class="nuc-tab-item" :class="{ 'nuc-tab-item--active': active, 'nuc-tab-item--disabled': disabled }" @click="onClick">
        <span>
            <slot name="label" :active="active">
                {{ label }}
            </slot>
        </span>
    </div>
</template>

<script>
import { ChildrenMixin } from '../mixins'

export default {
    name: 'nuc-tab-item',
    mixins: [ChildrenMixin('nuc-tab')],
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            active: false
        }
    },
    methods: {
        onClick (event) {
            if (!this.disabled) {
                this.parent.onChange(this.name || this.index)
                this.$emit('click', event)
            }
        }
    }
}
</script>
