import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ShowProject from './pages/ShowProject.vue';
import ContactUsPage from './pages/ContactUsPage.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects/:slug',
            name: 'show-project',
            component: ShowProject
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactUsPage
        }
    ]

})

export { router };