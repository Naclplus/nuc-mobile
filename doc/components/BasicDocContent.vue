<template>
    <div class="basic-doc-content">
        <div class="content-wrapper">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'basic-doc-content'
}
</script>

<style scoped lang="stylus">
    .basic-doc-content
        padding: 0 500px 0 300px;
        .content-wrapper
            padding: 20px;
</style>
