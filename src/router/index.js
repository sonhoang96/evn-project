import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/electricity-tracking',
        component: () => import("../views/MainLayout"),
        children: [
            {
                path: '/electricity-tracking',
                name: 'Electricity Tracking',
                component: () => import("../views/ElectricityView"),
            },
            {
                path: '/feedback',
                name: 'FeedBack',
                component: () => import("../views/FeedBack")
            },
            {
                path: '/notification',
                name: 'Notification',
                component: () => import("../views/NotificationView")
            },
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import("../views/NotFound")
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({y: 0}),
    routes
})
router.beforeEach((to, from, next) => {
    // ...
    if(to.path){
        localStorage.setItem("currentPath", to.path)
        return next()
    }
})

export default router
