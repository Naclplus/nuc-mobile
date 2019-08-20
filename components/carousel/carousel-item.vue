<template>
    <div class="nuc-carousel-item" :style="itemStyle">
        <slot />
    </div>
</template>

<script>

export default {
    name: 'nuc-carousel-item',
    data () {
        return {
            offset: 0
        }
    },
    computed: {
        itemStyle () {
            return {
                transform: `translateX(${this.offset}px)`
            }
        }
    },
    beforeCreate () {
        this.$parent.swipes.push(this)
    },
    destroyed () {
        this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1)
    }

}
</script>
