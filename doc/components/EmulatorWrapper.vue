<template>
    <div class="emulator-wrapper">
        <iframe class="screen" frameborder="0" :src="`http://localhost:8080/#${currentRoute}`"></iframe>
    </div>
</template>

<script>
export default {
    name: 'emulator-wrapper',
    computed: {
        currentRoute () {
            return this.$route.path
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
        width: 320px;
        height: 640px;
        box-shadow: 0 4px 12px #ebedf0;
        .screen
            width: 100%;
            height: 100%;
            -webkit-overflow-scrolling: touch;
            overflow-y: auto;
            border-radius 5px;
</style>
