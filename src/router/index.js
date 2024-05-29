import {createRouter,createWebHistory} from 'vue-router';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/',
            name:'homeScreen',
            component: () => import('@/views/HomeScreen.vue')
        },
        {
            path:'/:catchAll(.*)',
            name:'NotFound',
            component: () => import('@/views/NotFound.vue')
        }
    ]
})
export default router;