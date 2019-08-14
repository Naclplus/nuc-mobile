import 'amfe-flexible'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'normalize.css'
import menu from '../menu'
import Nuc from '../components'

Vue.use(Nuc)
Vue.use(VueRouter)

const routes = [
]

menu.filter((nav) => nav.title === '组件').forEach((nav) => {
    if (nav.groups) {
        nav.groups.forEach((group) => {
            group.list.forEach((page) => {
                routes.push({
                    path: page.link,
                    component: () => import(`.${page.link}/index.vue`)
                })
            })
        })
    }
})

const router = new VueRouter({
    routes
})

new Vue({
    render: (h) => h(App),
    router
}).$mount('#app')
