<template>
    <div class="code-card"><slot /></div>
</template>

<script>
export default {
    name: 'code-card'
}
</script>

<style scoped lang="stylus">
    .code-card
        padding: 24px;
        margin-bottom: 24px;
        border-radius: 6px;
        background-color: #fff;
        box-shadow: 0 8px 12px #ebedf0;
</style>
