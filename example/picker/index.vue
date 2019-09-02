<template>
    <nuc-page-container header-label="Picker 选择器" no-footer class="picker-example-warp">
        <h3 class="title">一般用法</h3>
        <nuc-picker :data="data1" @change="onChange" />
        <h3 class="title">双向绑定</h3>
        <div class="model-label">双向绑定的值为：{{ model1 }}</div>
        <nuc-picker v-model="model1" :data="data1" @change="onChange" />
        <h3 class="title">键值对模式</h3>
        <div class="model-label">双向绑定的值为：{{ model2 }}</div>
        <nuc-picker v-model="model2" :data="data2" @change="onChange" />
        <h3 class="title">多级联动</h3>
        <div class="model-label">双向绑定的值为：{{ model3 }}</div>
        <nuc-picker v-model="model3" :data="data3" @change="onChange" />
        <nuc-button type="primary" @click="setModel31">设定['河北省', '唐山市', '丰南区']</nuc-button>
        <nuc-button type="primary" @click="setModel32">设定['吉林省', '延边朝鲜族自治州', '延吉市']</nuc-button>
        <h3 class="title">展示顶部标题</h3>
        <div class="model-label">双向绑定的值为：{{ model4 }}</div>
        <nuc-picker
            v-model="model4" :data="data1" title="标题" show-toolbar
            @change="onChange"
        />
        <h3 class="title">配合弹出层使用</h3>
        <div class="model-label">双向绑定的值为：{{ model5 }}</div>
        <nuc-button type="primary" @click="isPopupShow = true">弹出省市区联动</nuc-button>
        <nuc-popup v-model="isPopupShow">
            <nuc-picker
                v-model="model5" :data="data3" show-toolbar title="请选择地址"
                @change="onChange" @confirm="onConfirm" @cancel="onCancel"
            />
        </nuc-popup>
    </nuc-page-container>
</template>

<script>
import city from './city'
export default {
    name: 'example-picker',
    data () {
        return {
            isPopupShow: false,
            model1: '',
            model2: 'xiaomi',
            model3: ['11', '1101', '110101'],
            model4: '小米',
            model5: '',
            data1: ['小米', '华为', '苹果', 'Oppo', 'Vivo', '三星', '联想', '魅族'],
            data2: [
                { text: '小米', value: 'xiaomi' },
                { text: '华为', value: 'huawei' },
                { text: '苹果', value: 'apple' },
                { text: 'Oppo', value: 'oppo' },
                { text: 'Vivo', value: 'vivo' },
                { text: '三星', value: 'sumsang' },
                { text: '联想', value: 'lenovo' },
                { text: '魅族', value: 'meizu' }
            ],
            data3: city
        }
    },
    methods: {
        setModel31 () {
            this.model3 = ['13', '1302', '130207']
        },
        setModel32 () {
            this.model3 = ['22', '2224', '222401']
        },
        onChange (val) {
            console.log(val)
        },
        onConfirm () {
            this.isPopupShow = false
        },
        onCancel () {
            this.isPopupShow = false
        }
    }
}
</script>

<style scoped lang="stylus">
    .picker-example-warp
        .title
            font-size 40px
            line-height 2
            color #3f536e
        .model-label
            line-height 60px
            font-size 30px
            margin-bottom 10px
</style>
