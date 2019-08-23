<template>
    <div class="basic-slider-menu" :class="{ 'is-hide': isHide }">
        <div v-for="(m, mkey) in menu" :key="mkey" class="menu-item">
            <a>{{ m.title }}</a>
            <div v-for="(g, gkey) in m.groups" :key="gkey">
                <div class="menu-item__group-title">{{ g.groupName }}</div>
                <div
                    v-for="(l, lkey) in g.list"
                    :key="lkey" class="menu-item__subitem"
                    :class="{ 'menu-item__subitem--active': $route.path === l.link }"
                >
                    <router-link :to="l.link">{{ l.title }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import menu from '../../menu'
export default {
    name: 'basic-slider-menu',
    data () {
        return {
            menu,
            isHide: false

        }
    },
    mounted () {
        window.addEventListener('scroll', () => {
            var t = document.documentElement.scrollTop || document.body.scrollTop // 变量t就是滚动条滚动时，到顶部的距离
            if (t > 20) {
                this.isHide = true
            } else {
                this.isHide = false
            }
        })
    }
}
</script>

<style scoped lang="stylus">
    .basic-slider-menu
        padding: 30px 0;
        position: fixed;
        left: 0;
        top: 60px;
        bottom: 0;
        width: 300px;
        overflow-y scroll;
        box-shadow: 0 8px 12px #eaeaea;
        background: #fff;
        &.is-hide
            top 0

    .menu-item > a
        font-weight: 700;
        display: block;
        color: #455a64;
        font-size: 16px;
        padding: 10px 10px 10px 30px;
    .menu-item__group-title
        font-size: 12px;
        line-height: 40px;
        padding-left: 30px;
        color: rgba(69,90,100,.6);
    .menu-item__subitem
        color: #455a64;
        &--active
            color #007BFA
        &:hover
            color #9DCDFF
        > a
            color inherit
            font-size: 14px;
            display: block;
            padding: 10px 10px 10px 30px;
            text-decoration: none;
</style>
