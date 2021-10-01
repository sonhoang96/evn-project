import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/electricity-tracking',
        component: () => import("../views/ElectricityView"),
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
        component: () => import("../views/NotificationView")
    },
    {
        path: '*',
        name: 'NotFourd',
        component: () => import("../views/NotFound")
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
