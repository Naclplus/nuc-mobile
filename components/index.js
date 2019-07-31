import Button from './button'

const components = {
    Button
}

const install = function (Vue) {
    if (!Vue || install.installed) {
        return
    }
    // Register global components
    const componentsNames = Object.keys(components)
    componentsNames.forEach((name) => {
        const component = components[name]
        if (component.name) {
            Vue.component(component.name, component) // kebab-case
        }
    })
}

components.install = install

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    Button
}

export default components
