<template>
    <div class="nuc-carousel">
        <div
            ref="carousel"
            class="nuc-carousel-wrap"
            :style="trackStyle"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
        >
            <slot />
        </div>
    </div>
</template>

<script>

function range (num, min, max) {
    return Math.min(Math.max(num, min), max)
}

export default {
    name: 'nuc-carousel',
    props: {
        value: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: 'default'
        },
        loop: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 500
        },
        delay: {
            type: Number,
            default: 2000
        },
        autoplay: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            index: 0,
            computedWidth: 0,
            computedHeight: 0,
            offset: 0,
            tempOffset: 0,
            active: 0,
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0,
            direction: '-',
            swipes: [],
            swiping: false
        }
    },
    computed: {
        count () {
            return this.swipes.length
        },
        trackStyle () {
            return {
                transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
                transform: `translateX(${this.offset - this.index * this.computedWidth}px)`
            }
        },
        size () {
            return this['computedWidth']
        },
        trackSize () {
            return this.count * this.size
        },
        minOffset () {
            const rect = this.$el.getBoundingClientRect()
            return rect.width - this.size * this.count
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.initialize()
        })
    },
    methods: {
        resetTouchStatus () {
            this.deltaX = 0
            this.deltaY = 0
        },
        onTouchStart (event) {
            this.resetTouchStatus()
            this.clear()
            this.swiping = true
            this.startX = event.touches[0].clientX
            this.startY = event.touches[0].clientY
            this.correctPosition()
        },
        onTouchMove (event) {
            if (!this.swiping) return
            const touch = event.touches[0]
            this.deltaX = touch.clientX - this.startX
            this.deltaY = touch.clientY - this.startY
            this.move({ offset: this.deltaX, isEmit: false })
        },
        onTouchEnd () {
            if (!this.swiping) return
            // Todo 未满足阈值回弹
            if (this.deltaX < 0) {
                this.move({ step: 1 })
            }
            if (this.deltaX > 0) {
                this.move({ step: -1 })
            }
            this.swiping = false
            this.autoPlay()
        },
        clear () {
            clearTimeout(this.timer)
        },
        getTargetActive (pace) {
            const { index, count } = this

            if (pace) {
                if (this.loop) {
                    return range(index + pace, -1, count)
                }

                return range(index + pace, 0, count - 1)
            }

            return index
        },
        getTargetOffset (targetActive, offset) {
            let currentPosition = targetActive * this.size
            if (!this.loop) {
                currentPosition = Math.min(currentPosition, -this.minOffset)
            }

            let targetOffset = Math.round(offset - currentPosition)
            if (!this.loop) {
                targetOffset = range(targetOffset, this.minOffset, 0)
            }

            return targetOffset
        },
        move ({ step = 0, offset = 0, isEmit = true }) {
            const { loop, count, swipes, trackSize } = this
            if (count <= 1) {
                return
            }
            let active = this.getTargetActive(step)
            const targetOffset = this.getTargetOffset(active, offset)
            if (loop) {
                if (swipes[0]) {
                    swipes[0].offset = targetOffset < this.minOffset ? trackSize : 0
                }
                if (swipes[count - 1]) {
                    swipes[count - 1].offset = targetOffset > 0 ? -trackSize : 0
                }
            }
            this.index = active
            this.offset = offset
            if (isEmit) {
                this.$emit('input', (this.index + this.count) % this.count)
            }
        },
        correctPosition () {
            if (this.index <= -1) {
                this.move({ step: this.count })
            }
            if (this.index >= this.count) {
                this.move({ step: -this.count })
            }
        },
        autoPlay () {
            if (this.autoplay) {
                this.clear()
                this.timer = setTimeout(() => {
                    this.swiping = true
                    this.correctPosition()
                    setTimeout(() => {
                        this.swiping = false
                        this.move({ step: 1 })
                        this.autoPlay()
                    }, 0)
                }, this.delay)
            }
        },
        initialize () {
            this.swiping = true
            this.index = this.value
            this.clear()
            if (this.$el) {
                const rect = this.$el.getBoundingClientRect()
                this.computedWidth = this.width || rect.width
                this.computedHeight = this.height || rect.height
            }
            this.autoPlay()
        }
    }
}
</script>

<style lang="stylus">
    .nuc-carousel
        position relative
        overflow hidden
        user-select none
    .nuc-carousel-wrap
        display flex
        user-select none
    .nuc-carousel-item
        flex-shrink 0
        width 100%
</style>
