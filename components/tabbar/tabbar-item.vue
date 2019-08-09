<template>
    <div class="nuc-tabbar-item" :class="{ 'nuc-tabbar-item--active': isActive }" @click="onClick">
        <div class="nuc-tabbar-item__icon">
            <slot :active="isActive" name="icon">
                <nuc-icon v-if="icon" :type="icon" />
            </slot>
            <div v-if="badgeType === 'dot' && badge" class="nuc-tabbar-item__dot" />
            <div v-if="badgeType === 'badge' && badge" class="nuc-tabbar-item__badge">
                {{ badge }}
            </div>
        </div>
        <label class="nuc-tabbar-item__label">
            <slot />
        </label>
    </div>
</template>

<script>
import NucIcon from '../icon-font'
import { ChildrenMixin } from '../mixins'

export default {
    name: 'nuc-tabbar-item',
    components: {
        NucIcon
    },
    mixins: [ChildrenMixin('nuc-tabbar')],
    props: {
        name: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        badge: {
            type: [Boolean, Number, String],
            default: false
        },
        route: {
            type: [String, Object],
            default: ''
        }
    },
    data () {
        return {
            active: false
        }
    },
    computed: {
        badgeType () {
            if (typeof this.badge === 'boolean') {
                return 'dot'
            } else {
                return 'badge'
            }
        },
        routeActive () {
            if (this.$router) {
                const path = this.route && (this.route.path || this.route)
                return this.$route.path.includes(path)
            }
            return false
        },
        isActive () {
            return this.route ? this.routeActive : this.active
        }
    },
    methods: {
        onClick (event) {
            this.parent.onChange(this.name || this.index)
            this.$emit('click', event)
            if (this.route) {
                if (this.$router) {
                    if (this.route.replace) {
                        this.$router.replace(this.route)
                    } else {
                        this.$router.push(this.route)
                    }
                } else {
                    window.location.href = this.route
                }
            }
        }
    }
}
</script>
