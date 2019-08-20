import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'normalize.css'
import './md.styl'
import CodeCard from './components/CodeCard'
import menu from '../menu'

Vue.use(VueRouter)
Vue.component('code-card', CodeCard)

const routes = [
    {
        path: '*',
        redirect: () => `/intro`
    }
]

menu.forEach((nav) => {
    if (nav.groups) {
        nav.groups.forEach((group) => {
            group.list.forEach((page) => {
                routes.push({
                    path: page.link,
                    component: () => import(`.${page.link}/README.md`)
                })
            })
        })
    }
})

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
})

new Vue({
    render: (h) => h(App),
    router
}).$mount('#app')
