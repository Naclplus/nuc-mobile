<template>
    <div class="nuc-cell-group-wrap">
        <h5 v-if="title" class="nuc-cell-group__title">{{ title }}</h5>
        <div class="nuc-cell-group">
            <slot />
        </div>
    </div>
</template>

<script>
import { ParentMixin } from '../mixins'
export default {
    name: 'nuc-cell-group',
    mixins: [ParentMixin('nuc-cell-group')],
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="stylus">
    .nuc-cell-group
        border-bottom 1px solid #ebedf0
        border-top 1px solid #ebedf0
        &__title
            font-size 26px
            font-weight normal
            color #969799
            padding 26px 30px
</style>
