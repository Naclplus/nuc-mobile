<template>
    <div class="nuc-tabbar-example-view">
        <h3>基础用法(不吸底)</h3>
        <nuc-tabbar v-model="model1" :fixed="false" @change="onChange">
            <nuc-tabbar-item icon="homepage-o">首页</nuc-tabbar-item>
            <nuc-tabbar-item icon="clock-o">闹钟</nuc-tabbar-item>
            <nuc-tabbar-item icon="setting-o">设定</nuc-tabbar-item>
            <nuc-tabbar-item icon="mine-o">我的</nuc-tabbar-item>
        </nuc-tabbar>
        <div class="model-label">
            当前选中值: {{ model1 }}
        </div>
        <h3>无Icon</h3>
        <nuc-tabbar :fixed="false">
            <nuc-tabbar-item>标签a</nuc-tabbar-item>
            <nuc-tabbar-item>标签b</nuc-tabbar-item>
            <nuc-tabbar-item>标签c</nuc-tabbar-item>
        </nuc-tabbar>
        <h3>设置标签名称</h3>
        <nuc-tabbar v-model="model2" :fixed="false">
            <nuc-tabbar-item name="homepage" icon="homepage-o" @click="onClick">首页</nuc-tabbar-item>
            <nuc-tabbar-item name="clock" icon="clock-o">闹钟</nuc-tabbar-item>
            <nuc-tabbar-item icon="setting-o">设定</nuc-tabbar-item>
            <nuc-tabbar-item icon="mine-o">我的</nuc-tabbar-item>
        </nuc-tabbar>
        <div class="model-label">
            当前选中值: {{ model2 }}
        </div>
        <h3>显示角标</h3>
        <nuc-tabbar :fixed="false">
            <nuc-tabbar-item icon="homepage-o">首页</nuc-tabbar-item>
            <nuc-tabbar-item icon="clock-o" badge>闹钟</nuc-tabbar-item>
            <nuc-tabbar-item icon="setting-o" :badge="1">设定</nuc-tabbar-item>
            <nuc-tabbar-item icon="mine-o" badge="new">我的</nuc-tabbar-item>
        </nuc-tabbar>
        <h3>自定义图标</h3>
        <nuc-tabbar :fixed="false">
            <nuc-tabbar-item>
                <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png' : 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png'"
                >
                自定义
            </nuc-tabbar-item>
            <nuc-tabbar-item icon="clock-o">闹钟</nuc-tabbar-item>
        </nuc-tabbar>
        <nuc-tabbar>
            <nuc-tabbar-item icon="homepage-o">首页</nuc-tabbar-item>
            <nuc-tabbar-item icon="clock-o">闹钟</nuc-tabbar-item>
            <nuc-tabbar-item icon="setting-o">设定</nuc-tabbar-item>
            <nuc-tabbar-item icon="mine-o">我的</nuc-tabbar-item>
        </nuc-tabbar>
    </div>
</template>

<script>
export default {
    name: 'example-tabbar',
    data () {
        return {
            model1: 0,
            model2: 'clock'
        }
    },
    methods: {
        onChange (active) {
            console.log('当前选中的值是:' + active)
        },
        onClick (active) {
            console.log(active)
        }
    }
}
</script>

<style scoped lang="stylus">
    .nuc-tabbar-example-view
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
