import Vue from 'vue'

// function flattenVNodes (vnodes) {
//     const result = []
//     function traverse (vnodes) {
//         vnodes.forEach((vnode) => {
//             result.push(vnode)
//
//             if (vnode.children) {
//                 traverse(vnode.children)
//             }
//         })
//     }
//
//     traverse(vnodes)
//     return result
// }

export function ParentMixin (parent) {
    return {
        provide () {
            return {
                [parent]: this
            }
        },
        data () {
            return {
                children: []
            }
        }
    }
}

export function ChildrenMixin (parent, options = {}) {
    const indexKey = options.indexKey || 'index'

    return Vue.extend({
        inject: {
            [parent]: {
                default: null
            }
        },

        computed: {
            parent () {
                return this[parent]
            },

            [indexKey] () {
                this.bindRelation()
                return this.parent.children.indexOf(this)
            }
        },

        mounted () {
            this.bindRelation()
        },

        beforeDestroy () {
            if (this.parent) {
                this.parent.children = this.parent.children.filter((item) => item !== this)
            }
        },

        methods: {
            bindRelation () {
                if (!this.parent || this.parent.children.indexOf(this) !== -1) {
                    return
                }
                const children = [...this.parent.children, this]
                // const vnodes = flattenVNodes(this.parent.$slots.default)
                // children.sort((a, b) => vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode))

                this.parent.children = children
            }
        }
    })
}
