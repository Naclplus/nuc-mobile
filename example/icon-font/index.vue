<template>
    <nuc-page-container header-label="IconFont 图标" no-footer>
        <div class="icon-grid">
            <div v-for="(item, index) in list" :key="index" class="icon-grid-item" @click.stop="copy(item)">
                <nuc-icon :type="item" size="xxl" />
                <p>{{ item }}</p>
            </div>
        </div>
    </nuc-page-container>
</template>

<script>
export default {
    name: 'example-icon-font',
    data () {
        return {
            list: [
                'arrow-left',
                'arrow-right',
                'arrow-up',
                'arrow-down',
                'bar-chart',
                'line-chart',
                'setting',
                'setting-o',
                'alarm',
                'notification',
                'picture',
                'more',
                'cry',
                'smile',
                'plane',
                'plane-o',
                'checkbox',
                'checkbox-o',
                'un-checkbox',
                'radio',
                'radio-o',
                'un-radio',
                'wrong',
                'right',
                'minus',
                'plus',
                'circle-right',
                'circle-right-o',
                'circle-question',
                'circle-question-o',
                'circle-wrong',
                'circle-wrong-o',
                'circle-exclamatory',
                'circle-exclamatory-o',
                'circle-plus',
                'circle-plus-o',
                'qrcode',
                'homepage-o',
                'homepage',
                'sort',
                'go-down',
                'menu',
                'tag-o',
                'tag',
                'unlock',
                'lock',
                'form',
                'clip',
                'funnel',
                'todos',
                'quit',
                'flag',
                'magnifier',
                'folder',
                'planet',
                'chat',
                'mail',
                'mail-o',
                'clock',
                'clock-o',
                'good',
                'good-o',
                'star',
                'star-o',
                'message',
                'message-o',
                'project',
                'project-o',
                'group',
                'group-o',
                'mine',
                'mine-o'
            ]
        }
    },
    methods: {
        copy (text) {
            if (window.clipboardData) {
                window.clipboardData.setData('text', text)
            } else {
                (function (s) {
                    document.oncopy = function (e) {
                        e.clipboardData.setData('text', s)
                        e.preventDefault()
                        document.oncopy = null
                    }
                })(text)
                document.execCommand('Copy')
            }
            this.$toast.success('已复制至剪贴板')
        }
    }
}
</script>
<style lang="stylus">
    .icon-grid
        display flex
        flex-wrap wrap
        background #fff
        &-item
            display flex
            flex-direction column
            justify-content center
            width 33.333%
            height 200px
            border 2px solid #eaeaea
            box-sizing border-box
            color #666
            padding 0 10px
            p
                text-align center
                margin-bottom 0
                color #999
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
</style>
