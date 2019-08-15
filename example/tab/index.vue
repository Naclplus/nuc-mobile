<template>
    <nuc-page-container header-label="Tab 标签" no-footer>
        <div class="nuc-tab-example-view">
            <h3>基础用法</h3>
            <nuc-tab v-model="model1">
                <nuc-tab-item label="标签A" />
                <nuc-tab-item label="标签B" />
                <nuc-tab-item label="标签C" />
                <nuc-tab-item label="标签D" />
            </nuc-tab>
            <div class="model-label">
                当前选中值: {{ model1 }}
            </div>
            <h3>设置标签名称</h3>
            <nuc-tab v-model="model2">
                <nuc-tab-item label="标签A" name="a" />
                <nuc-tab-item label="标签B" name="b" />
                <nuc-tab-item label="标签C" name="c" />
                <nuc-tab-item label="标签D" name="d" />
            </nuc-tab>
            <div class="model-label">
                当前选中值: {{ model2 }}
            </div>
            <h3>禁用标签</h3>
            <nuc-tab>
                <nuc-tab-item label="标签A" disabled />
                <nuc-tab-item label="标签B" />
                <nuc-tab-item label="标签C" disabled />
                <nuc-tab-item label="标签D" />
            </nuc-tab>
            <h3>超出阈值滚动</h3>
            <nuc-tab>
                <nuc-tab-item label="标签A" />
                <nuc-tab-item label="标签B" />
                <nuc-tab-item label="标签C" />
                <nuc-tab-item label="标签D" />
                <nuc-tab-item label="标签E" />
                <nuc-tab-item label="标签F" />
                <nuc-tab-item label="标签G" />
            </nuc-tab>
            <h3>设置标签页内容</h3>
            <nuc-tab>
                <nuc-tab-item label="标签A">内容 A</nuc-tab-item>
                <nuc-tab-item label="标签B">内容 B</nuc-tab-item>
                <nuc-tab-item label="标签C">内容 C</nuc-tab-item>
                <nuc-tab-item label="标签D">内容 D</nuc-tab-item>
                <nuc-tab-item label="标签E">内容 E</nuc-tab-item>
            </nuc-tab>
        </div>
    </nuc-page-container>
</template>

<script>
export default {
    name: 'example-tab',
    data () {
        return {
            model1: 0,
            model2: 'a'
        }
    }
}
</script>

<style scoped lang="stylus">
    .nuc-tab-example-view
        h3
            font-size 40px
            line-height 2
            color #3f536e
            padding 0 20px
        .nuc-button
            margin-bottom 10px
        .model-label
            line-height 60px
            padding: 0 20px
            font-size 30px
            margin-bottom 10px
</style>
