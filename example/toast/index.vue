<template>
    <nuc-page-container header-label="Toast 轻提示" no-footer>
        <div class="nuc-toast-example-view">
            <div>
                <h3>基本用法</h3>
                <nuc-button type="primary" size="small" inline @click="text">文本提示</nuc-button>
            </div>
            <div>
                <h3>提示类型</h3>
                <nuc-button type="success" size="small" inline @click="success">成功提示</nuc-button>
                <nuc-button type="danger" size="small" inline @click="fail">失败提示</nuc-button>
            </div>
            <div>
                <h3>加载提示</h3>
                <nuc-button type="primary" size="small" inline @click="loading">加载框</nuc-button>
            </div>
            <div>
                <h3>显示位置</h3>
                <nuc-button type="primary" size="small" inline @click="top">在上方弹出</nuc-button>
                <nuc-button type="primary" size="small" inline @click="bottom">在下方弹出</nuc-button>
            </div>
        </div>
    </nuc-page-container>
</template>

<script>
export default {
    name: 'example-toast',
    methods: {
        text () {
            this.$toast('轻提示文本')
        },
        success () {
            this.$toast.success({
                text: 'success'
            })
        },
        fail () {
            this.$toast.fail({
                text: 'fail'
            })
        },
        loading () {
            this.$toast.loading({
                text: '加载中...',
                hasMask: true
            })
            setTimeout(() => {
                this.$toast.hide()
            }, 3000)
        },
        top () {
            this.$toast.top('在上方提示信息')
        },
        bottom () {
            this.$toast.bottom({
                type: 'success',
                text: '底部的成功信息'
            })
        }
    }
}
</script>

<style scoped lang="stylus">
    .nuc-toast-example-view
        padding 20px
        h3
            font-size 40px
            line-height 2
            color #3f536e
        > div
            margin-top 20px
</style>
