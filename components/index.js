import Button from './button'
import Flexbox from './flexbox'
import PageContainer from './page-container'
import Header from './header'
import Tabbar from './tabbar'

const FlexboxItem = Flexbox.Item
const TabbarItem = Tabbar.Item

const components = {
    Button,
    Flexbox,
    FlexboxItem,
    PageContainer,
    Header,
    Tabbar,
    TabbarItem
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
    Button,
    Flexbox,
    PageContainer,
    Header,
    Tabbar
}

export default components
