import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/ElectricityView"),
        redirect: '/electricity-tracking',
        children: [
            {
                path: '/electricity-tracking',
                name: 'Electricity Tracking',
                component: () => import("../views/ElectricityView"),
            }
        ]
    },
    {
        path: '/feedback',
        name: 'Feedback',
    },
    {
        path: '/notification',
        name: 'Notification',
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
