<template>
    <div
        class="nuc-scroller-wrap"
        @touchstart="onTouchStart"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'scroller',
    props: {
        value: {
            type: Number,
            default: 0
        },
        itemHeight: {
            type: Number,
            required: true
        }
    },
    data () {
        return {
            duration: 300,
            content: null,
            prevMove: 0,
            currentMove: 0,
            startY: 0,
            offsetY: 0,
            oldIndex: 0
        }
    },
    computed: {
        index () {
            const max = -((this.content.childNodes.length - 1) * this.itemHeight)
            let base = this.currentMove
            if (this.currentMove >= 0) {
                base = 0
            } else if (this.currentMove <= max) {
                base = max
            }
            return Math.floor(Math.abs(base / this.itemHeight))
        },
        max () {
            if (this.content) {
                return -((this.content.childNodes.length - 1) * this.itemHeight)
            }
            return 0
        }
    },
    watch: {
        value (val) {
            this.oldIndex = val
            this.moveTo(val)
        }
    },
    mounted () {
        this.$nextTick(this.initial)
    },
    beforeDestory () {
        this.$el.removeEventListener('touchstart', this.onTouchStart, false)
        this.$el.removeEventListener('touchmove', this.onTouchMove, false)
        this.$el.removeEventListener('touchend', this.onTouchEnd, false)
    },
    methods: {
        moveTo (index) {
            const move = -(index * this.itemHeight)
            this.currentMove = move
            if (this.content) {
                this.content.style.transform = `translateY(${move}px)`
                // this.content.style.transitionDuration = `${this.duration}ms`
                // setTimeout(() => {
                //     this.content.style.transitionDuration = '0ms'
                // }, this.duration)
            }
        },
        initial () {
            this.content = this.$slots.default[0].elm
            this.moveTo(this.value)
            this.$el.addEventListener('touchstart', this.onTouchStart, false)
            this.$el.addEventListener('touchmove', this.onTouchMove, false)
            this.$el.addEventListener('touchend', this.onTouchEnd, false)
        },
        resetTouchStatus () {
            this.startY = 0
            this.offsetY = 0
        },
        onTouchStart (event) {
            event.stopPropagation()
            event.preventDefault()
            this.resetTouchStatus()
            this.startY = event.touches[0].clientY
            this.prevMove = this.currentMove
        },
        onTouchMove (event) {
            event.stopPropagation()
            event.preventDefault()
            const max = -((this.content.childNodes.length - 1) * this.itemHeight)
            const touch = event.touches[0]
            this.offsetY = touch.clientY - this.startY
            let move = this.prevMove + this.offsetY
            if (move > this.itemHeight) {
                move = this.itemHeight
            } else if (move < max - this.itemHeight) {
                move = max - this.itemHeight
            }
            this.currentMove = move
            this.content.style.transform = `translateY(${move}px)`
        },
        onTouchEnd () {
            event.stopPropagation()
            event.preventDefault()
            const move = -this.index * this.itemHeight
            this.content.style.transitionDuration = `${this.duration}ms`
            this.content.style.transform = `translateY(${move}px)`
            this.currentMove = move
            setTimeout(() => {
                this.content.style.transitionDuration = '0ms'
            }, this.duration)
            if (this.oldIndex !== this.index) {
                this.$emit('change', this.index)
            }
            this.oldIndex = this.index
        }
    }
}
</script>

<style lang="stylus">
    .nuc-scroller-wrap
        height 100%
</style>
