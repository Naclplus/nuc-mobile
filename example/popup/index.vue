<template>
    <nuc-page-container header-label="Popup 弹出层" no-footer>
        <nuc-button type="primary" @click="show1 = true">底部弹出(默认)</nuc-button>
        <nuc-button type="primary" @click="show2 = true">顶部弹出</nuc-button>
        <nuc-button type="primary" @click="show3 = true">左侧弹出</nuc-button>
        <nuc-button type="primary" @click="show4 = true">右侧弹出</nuc-button>
        <nuc-popup v-model="show1" @open="open" @close="close">
            <div style="height: 100px" />
        </nuc-popup>
        <nuc-popup v-model="show2" position="top">
            <div style="height: 100px" />
        </nuc-popup>
        <nuc-popup v-model="show3" position="left">
            <div style="height: 100%; width: 100px" />
        </nuc-popup>
        <nuc-popup v-model="show4" position="right">
            <div style="height: 100%; width: 100px" />
        </nuc-popup>
    </nuc-page-container>
</template>

<script>
export default {
    name: 'example-popup',
    data () {
        return {
            show1: false,
            show2: false,
            show3: false,
            show4: false
        }
    },
    methods: {
        open () {
            console.log('open')
        },
        close () {
            console.log('close')
        }
    }
}
</script>

<style scoped lang="stylus">
    .nuc-button
        margin-bottom 20px
</style>
