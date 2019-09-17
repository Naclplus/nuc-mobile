<template>
    <nuc-page-container header-label="Cell 单元格" no-footer class="cell-example-warp">
        <nuc-cell-group title="基础用法">
            <nuc-cell label="标题" />
            <nuc-cell label="标题" extra="内容" />
            <nuc-cell extra="只设置内容" />
        </nuc-cell-group>
        <nuc-cell-group title="左侧图标">
            <nuc-cell label="标题" icon="setting-o" />
            <nuc-cell label="标题" extra="内容" icon="homepage" />
        </nuc-cell-group>
        <nuc-cell-group title="描述内容">
            <nuc-cell label="标题" extra="内容" describe="描述内容" />
            <nuc-cell label="标题" extra="内容" describe="描述内容" icon="setting-o" />
        </nuc-cell-group>
        <nuc-cell-group title="右侧箭头">
            <nuc-cell label="标题" icon="setting-o" arrow />
            <nuc-cell label="标题" extra="内容" icon="homepage" arrow />
            <nuc-cell label="标题" extra="内容" icon="homepage-o" arrow="down" />
        </nuc-cell-group>
        <nuc-cell-group title="垂直居中">
            <nuc-cell
                label="标题" extra="内容" describe="描述内容" icon="setting-o"
                vertical-center
            />
            <nuc-cell
                label="标题" extra="内容" describe="描述内容" icon="setting-o"
                arrow vertical-center
            />
        </nuc-cell-group>
    </nuc-page-container>
</template>

<script>
export default {
    name: 'example-cell'
}
</script>

<style scoped lang="stylus">
</style>
