<template>
    <div class="emulator-wrapper">
        <iframe class="screen" frameborder="0" :src="currentRoute"></iframe>
    </div>
</template>

<script>
export default {
    name: 'emulator-wrapper',
    computed: {
        currentRoute () {
            const prefix = process.env.NODE_ENV === 'production' ? '../example/#' : 'http://localhost:8080/#'
            return prefix + this.$route.path
        }
    }
}
</script>

<style scoped lang="stylus">
    .emulator-wrapper
        position: fixed;
        right: 80px;
        top: 120px;
        bottom: 0;
        width: 375px;
        height: 667px;
        box-shadow: 0 4px 12px #ebedf0;
        .screen
            width: 100%;
            height: 100%;
            -webkit-overflow-scrolling: touch;
            overflow-y: auto;
            border-radius 5px;
</style>
