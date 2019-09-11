<template>
    <nuc-page-container header-label="DatePicker 时间选择器" no-footer class="date-picker-example-warp">
        <h3 class="title">基础用法</h3>
        <nuc-date-picker @change="onChange" />
        <h3 class="title">双向绑定</h3>
        <div class="model-label">双向绑定的值为：{{ model1 }}</div>
        <nuc-date-picker v-model="model1" @change="onChange" />
        <nuc-button type="primary" @click="model1 = '2010-01-01'">设定为'2010-01-01'</nuc-button>
        <nuc-button type="primary" @click="model1 = new Date()">设定为new Date()</nuc-button>
        <h3 class="title">Picker 类型</h3>
        <nuc-date-picker type="month" @change="onChange" />
        <nuc-date-picker type="month-time" @change="onChange" />
        <h3 class="title">年份上限下限</h3>
        <nuc-date-picker min-year="1990" max-year="2050" @change="onChange" />
        <h3 class="title">展示顶部标题</h3>
        <nuc-date-picker title="标题" show-toolbar @change="onChange" />
        <h3 class="title">配合弹出层使用</h3>
        <div class="model-label">双向绑定的值为：{{ model2 }}</div>
        <nuc-button type="primary" @click="isPopupShow = true">弹出生日选择</nuc-button>
        <nuc-popup v-model="isPopupShow">
            <nuc-date-picker
                v-model="model2" show-toolbar title="选择出生年月"
                @change="onChange" @confirm="isPopupShow = false" @cancel="isPopupShow = false"
            />
        </nuc-popup>
    </nuc-page-container>
</template>

<script>
export default {
    name: 'example-date-picker',
    data () {
        return {
            model1: '2020-02-02',
            model2: '',
            model3: '',
            isPopupShow: false
        }
    },
    methods: {
        onChange (val, moment) {
            console.log(moment)
        },
        onClick () {
            this.model = '2009-03-02'
        },
        onConfirm () {
        },
        onCancel () {
        }
    }
}
</script>

<style scoped lang="stylus">
    .date-picker-example-warp
        .title
            padding 0 20px
            font-size 40px
            line-height 2
            color #3f536e
        .model-label
            padding 0 20px
            line-height 60px
            font-size 30px
            margin-bottom 10px
</style>
