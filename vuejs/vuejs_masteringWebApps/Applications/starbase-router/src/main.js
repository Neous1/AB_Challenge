import Vue from "vue"
import VueRouter from "vue-router" 
//path to specific component

Vue.use(VueRouter) 
// indicate that vue-router should manage its path

import App from "./App.vue"
import Data from "./components/Data.vue"

const routes =[
    {path: '/data/:type', component: Data}
]

const router = new VueRouter({
    routes
})
new Vue({
    el: "#app",
    router,
    render: h => h(App)
})