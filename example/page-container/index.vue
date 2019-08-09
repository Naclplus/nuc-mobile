<template>
    <nuc-page-container header-label="页面头部标题" :footer-items="footerItems">
        <div class="background" />
    </nuc-page-container>
</template>

<script>
export default {
    name: 'example-flex-box',
    data () {
        return {
            headerOption: {
                noLeft: true
            },
            footerItems: [
                {
                    label: '首页',
                    icon: 'homepage-o'
                },
                {
                    label: '闹钟',
                    icon: 'clock-o'
                },
                {
                    label: '设定',
                    icon: 'setting-o'
                },
                {
                    label: '我的',
                    icon: 'mine-o'
                }
            ]
        }
    }
}
</script>

<style scoped lang="stylus">
    .background
        height 2000px
        background-image linear-gradient(#fff, color-primary)
</style>
