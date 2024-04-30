import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ShowProject from './pages/ShowProject.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects/:id',
            name: 'show-project',
            component: ShowProject
        }
    ]

})

export { router };