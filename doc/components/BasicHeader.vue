<template>
    <div class="basic-header" :class="{ 'is-hide': isHide }">
        假装有Logo
    </div>
</template>

<script>
export default {
    name: 'basic-header',
    data () {
        return {
            isHide: false
        }
    },
    mounted () {
        window.addEventListener('scroll', () => {
            var t = document.documentElement.scrollTop || document.body.scrollTop // 变量t就是滚动条滚动时，到顶部的距离
            if (t > 20) {
                this.isHide = true
            } else {
                this.isHide = false
            }
        })
    }
}
</script>

<style scoped lang="stylus">
    .basic-header
        height 60px
        line-height 60px
        padding 0 40px
        box-shadow 0 3px 5px #eaeaea
        background #007bfa
        position fixed
        width 100%
        color #fff
        overflow hidden
        &.is-hide
            height 0
</style>
