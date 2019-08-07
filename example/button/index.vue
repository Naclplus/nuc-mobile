<template>
    <div class="nuc-button-example-view">
        <h3>基础用法</h3>
        <nuc-button type="default">Default</nuc-button>
        <nuc-button type="primary">Primary</nuc-button>
        <nuc-button type="success">Success</nuc-button>
        <nuc-button type="warning">Warning</nuc-button>
        <nuc-button type="danger">Danger</nuc-button>
        <nuc-button type="default" disabled>Default Disabled</nuc-button>
        <nuc-button type="primary" disabled>Primary Disabled</nuc-button>
        <h3>简洁类型</h3>
        <nuc-button type="default" ghost>Default</nuc-button>
        <nuc-button type="primary" ghost>Primary</nuc-button>
        <nuc-button type="success" ghost>Success</nuc-button>
        <nuc-button type="warning" ghost>Warning</nuc-button>
        <nuc-button type="danger" ghost>Danger</nuc-button>
        <nuc-button type="default" ghost disabled>Default Disabled</nuc-button>
        <nuc-button type="primary" ghost disabled>Primary Disabled</nuc-button>
        <nuc-button type="danger" ghost disabled>Danger Disabled</nuc-button>
        <h3>圆角类型</h3>
        <nuc-button type="primary" radius>Primary Radius</nuc-button>
        <nuc-button type="primary" ghost radius>Primary Ghost Radius</nuc-button>
        <nuc-button type="default" radius>Default Radius</nuc-button>
        <nuc-button type="danger" ghost radius>Danger Ghost Radius</nuc-button>
        <h3>行内按钮</h3>
        <nuc-button type="primary" inline>Inline Large</nuc-button>
        <nuc-button type="success" inline>Inline Large</nuc-button>
        <nuc-button type="warning" size="small" inline>Inline Small</nuc-button>
        <nuc-button type="danger" size="small" inline>Inline Small</nuc-button>
        <h3>Loading状态</h3>
        <nuc-button type="primary" loading>Primary</nuc-button>
        <nuc-button type="success" ghost loading>Success</nuc-button>
        <nuc-button type="warning" inline loading>Inline Small</nuc-button>
        <nuc-button type="danger" size="small" inline ghost loading>Inline Small</nuc-button>
    </div>
</template>

<script>
export default {
    name: 'example-button'
}
</script>

<style scoped lang="stylus">
    .nuc-button-example-view
        padding: 20px
        h3
            font-size: 40px
            line-height: 2
            color: #3f536e
        .nuc-button
            margin-bottom: 10px
</style>
