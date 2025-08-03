import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";

const routes = [
    {
        path: '/about',
        name:"Home",
        component:HomePage
    },
    {
        path: '/about',
        name:"about",
        component:AboutPage
    },
    {
        path: '/:pathMatch(.*)',
        name:"about",
        component:AboutPage
    }
]
const router = createRouter({
    history:createWebHistory(),routes
})
export default router;
