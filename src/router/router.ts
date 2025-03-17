import Layout from '@/components/Layout.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
