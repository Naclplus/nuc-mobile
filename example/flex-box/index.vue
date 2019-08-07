<template>
    <div class="nuc-flexbox-example-view">
        <h3>基础用法</h3>
        <nuc-flexbox>
            <nuc-flexbox-item><div class="block-1">block-1</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2">block-2</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-1">block-1</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2">block-2</div></nuc-flexbox-item>
        </nuc-flexbox>
        <h3>自定义宽度</h3>
        <nuc-flexbox>
            <nuc-flexbox-item width="25%"><div class="block-1">block-1</div></nuc-flexbox-item>
            <nuc-flexbox-item width="20%"><div class="block-2">block-2</div></nuc-flexbox-item>
            <nuc-flexbox-item width="35%"><div class="block-1">block-1</div></nuc-flexbox-item>
        </nuc-flexbox>
        <h3>设置间距</h3>
        <nuc-flexbox gutter="20">
            <nuc-flexbox-item><div class="block-1">block-1</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2">block-2</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-1">block-1</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2">block-2</div></nuc-flexbox-item>
        </nuc-flexbox>
        <h3>主轴对齐</h3>
        <nuc-flexbox gutter="20">
            <nuc-flexbox-item width="30%"><div class="block-1">flex-start</div></nuc-flexbox-item>
            <nuc-flexbox-item width="30%"><div class="block-2">flex-start</div></nuc-flexbox-item>
        </nuc-flexbox>
        <nuc-flexbox gutter="20" justify="center">
            <nuc-flexbox-item width="30%"><div class="block-1">center</div></nuc-flexbox-item>
            <nuc-flexbox-item width="30%"><div class="block-2">center</div></nuc-flexbox-item>
        </nuc-flexbox>
        <nuc-flexbox gutter="20" justify="end">
            <nuc-flexbox-item width="30%"><div class="block-1">flex-end</div></nuc-flexbox-item>
            <nuc-flexbox-item width="30%"><div class="block-2">flex-end</div></nuc-flexbox-item>
        </nuc-flexbox>
        <nuc-flexbox gutter="20" justify="between">
            <nuc-flexbox-item width="30%"><div class="block-1">space-between</div></nuc-flexbox-item>
            <nuc-flexbox-item width="30%"><div class="block-2">space-between</div></nuc-flexbox-item>
        </nuc-flexbox>
        <nuc-flexbox gutter="20" justify="around">
            <nuc-flexbox-item width="30%"><div class="block-1">space-around</div></nuc-flexbox-item>
            <nuc-flexbox-item width="30%"><div class="block-2">space-around</div></nuc-flexbox-item>
        </nuc-flexbox>
        <h3>交叉轴对齐</h3>
        <nuc-flexbox align="start">
            <nuc-flexbox-item><div class="block-1" style="height:30px">flex-start</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2" style="height:60px">flex-start</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-1">flex-start</div></nuc-flexbox-item>
        </nuc-flexbox>
        <nuc-flexbox align="center">
            <nuc-flexbox-item><div class="block-1" style="height:30px">center</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2" style="height:60px">center</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-1">flex-start</div></nuc-flexbox-item>
        </nuc-flexbox>
        <nuc-flexbox align="end">
            <nuc-flexbox-item><div class="block-1" style="height:30px">flex-end</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2" style="height:60px">flex-end</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-1">flex-start</div></nuc-flexbox-item>
        </nuc-flexbox>
        <nuc-flexbox align="baseline">
            <nuc-flexbox-item><div class="block-1" style="height:30px;padding-top: 10px;">baseline</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2" style="height:60px">baseline</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-1">baseline</div></nuc-flexbox-item>
        </nuc-flexbox>
        <nuc-flexbox style="height: 30px;">
            <nuc-flexbox-item><div class="block-1">stretch</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-2">stretch</div></nuc-flexbox-item>
            <nuc-flexbox-item><div class="block-1">stretch</div></nuc-flexbox-item>
        </nuc-flexbox>
    </div>
</template>

<script>
export default {
    name: 'example-flex-box'
}
</script>

<style scoped lang="stylus">
    .nuc-flexbox-example-view
        padding: 20px
        h3
            font-size: 40px
            line-height: 2
            color: #3f536e
        .nuc-flexbox
            margin-bottom: 10px
    .block-1, .block-2
        height: 100%;
        padding: 10px 0
        background-size 50px 50px
        background-image linear-gradient(-45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)
        animation stripedAnimate 1s linear 0s infinite
        animation-delay 0
        color: #fff;
        text-align center
        box-sizing border-box
    .block-1
        background-color: color-primary
    .block-2
        background-color: color-info
    @keyframes stripedAnimate
        from
            background-position-x: 0
        to
            background-position-x: -100px
</style>
