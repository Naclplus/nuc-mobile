<template>
    <nuc-page-container header-label="Carousel 轮播" no-footer>
        <nuc-carousel v-model="model">
            <nuc-carousel-item v-for="item in 2" :key="item" class="item">{{ item }}</nuc-carousel-item>
        </nuc-carousel>
        <nuc-button @click="model = 0">{{ model }}</nuc-button>
    </nuc-page-container>
</template>

<script>
export default {
    name: 'example-carousel',
    data () {
        return {
            model: 0
        }
    }
}
</script>

<style scoped lang="stylus">
    .item
        background #007bfa
        line-height 300px
        color #fff
        font-size 40px
        text-align center
</style>
