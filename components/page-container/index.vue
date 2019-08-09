<template>
    <div class="nuc-page-container">
        <div v-if="!noHeader" ref="page-header" class="nuc-page-container__header-wrap">
            <slot name="header">
                <nuc-header v-bind="headerOption">{{ headerLabel }}</nuc-header>
            </slot>
        </div>
        <section>
            <slot />
        </section>
        <div v-if="!noFooter" ref="page-footer" class="nuc-page-container__footer-wrap">
            <slot name="footer">
                <nuc-tabbar>
                    <nuc-tabbar-item v-for="(item, index) in footerItems" :key="index" v-bind="item">{{ item.label }}</nuc-tabbar-item>
                </nuc-tabbar>
            </slot>
        </div>
    </div>
</template>

<script>
import NucHeader from '../header'
import NucTabbar from '../tabbar'

const NucTabbarItem = NucTabbar.Item

export default {
    name: 'nuc-page-container',
    components: {
        NucHeader,
        NucTabbar,
        NucTabbarItem
    },
    props: {
        noHeader: {
            type: Boolean,
            default: false
        },
        noFooter: {
            type: Boolean,
            default: false
        },
        headerLabel: {
            type: String,
            default: ''
        },
        headerOption: {
            type: Object,
            default: () => ({})
        },
        footerItems: {
            type: Array,
            default: () => []
        }
    },
    mounted () {
        setTimeout(() => {
            const headerChildNodes = this.$refs['page-header'].childNodes
            const footerChildNodes = this.$refs['page-footer'].childNodes
            let headerWrapperHeight = 0
            let footerWrapperHeight = 0
            headerChildNodes.forEach((node) => {
                headerWrapperHeight += node.offsetHeight
            })
            footerChildNodes.forEach((node) => {
                footerWrapperHeight += node.offsetHeight
            })
            this.$refs['page-header'].style.height = `${headerWrapperHeight}px`
            this.$refs['page-footer'].style.height = `${footerWrapperHeight}px`
        }, 0)
    }
}
</script>

<style lang="stylus">
    .nuc-page-container
        &__footer-wrap
            padding-bottom constant(safe-area-inset-bottom)
            padding-bottom env(safe-area-inset-bottom)
            > *:last-child
                padding-bottom constant(safe-area-inset-bottom)
                padding-bottom env(safe-area-inset-bottom)
        &__header-wrap
            padding-top constant(safe-area-inset-top)
            padding-top env(safe-area-inset-top)
            > *:last-child
                padding-top constant(safe-area-inset-top)
                padding-top env(safe-area-inset-top)
</style>
