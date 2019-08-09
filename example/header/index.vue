<template>
    <div>
        <nuc-header>基本用法</nuc-header>
        <div style="padding-top: 60px">
            <nuc-header :fixed="false">不锁定</nuc-header>
        </div>
        <div style="padding-top: 10px">
            <nuc-header :fixed="false" transparent>透明背景</nuc-header>
        </div>
        <div style="padding-top: 10px">
            <nuc-header :fixed="false" no-left>不显示左侧</nuc-header>
        </div>
        <div style="padding-top: 10px">
            <nuc-header :fixed="false" left-text="go back">更换左侧文字</nuc-header>
        </div>
        <div style="padding-top: 10px">
            <nuc-header :fixed="false">
                <div slot="left-label">
                    左侧插槽
                </div>
                左右侧插槽
                <div slot="right-label">
                    右侧插槽
                </div>
            </nuc-header>
        </div>
        <div style="padding-top: 10px">
            <nuc-header :fixed="false" @left-click="onLeftClick">左侧点击事件</nuc-header>
        </div>
        <div style="height: 400px" />
    </div>
</template>

<script>
export default {
    name: 'example-header',
    methods: {
        onLeftClick () {
            alert('点击了左侧 默认是返回上一级路由')
        }
    }
}
</script>

<style scoped lang="scss">

</style>
