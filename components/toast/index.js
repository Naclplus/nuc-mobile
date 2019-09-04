import VueToast from './toast'

let vm
let defaultConfig = {
    duration: 2000,
    position: 'center',
    type: 'text',
    hasMask: false,
    onOpened: null,
    onClose: null
}

function parseOptions (options) {
    if (typeof options === 'object') {
        return options
    }
    return { text: options }
}

const Toast = (options = {}) => {
    options = {
        ...defaultConfig,
        ...parseOptions(options)
    }
    Object.assign(vm, options)
    vm.selfValue = true
    clearTimeout(vm.timer)
    if (options.type !== 'loading') {
        vm.timer = setTimeout(() => {
            vm.selfValue = false
        }, vm.duration)
    }
    return vm
}

Toast.show = Toast
Toast.hide = function () {
    clearTimeout(vm.timer)
    vm.selfValue = false
}
const createMethod = (key, value) => (options) => {
    return Toast({
        ...parseOptions(options),
        [key]: value
    })
}
['bottom', 'top'].forEach((position) => {
    Toast[position] = createMethod('position', position)
});

['success', 'fail', 'loading'].forEach((type) => {
    Toast[type] = createMethod('type', type)
})

Toast.install = function (Vue) {
    if (!vm) {
        vm = new (Vue.extend(VueToast))({
            el: document.createElement('div')
        })
        document.body.appendChild(vm.$el)
    }

    Vue.prototype.$toast = Toast
}

export default Toast
