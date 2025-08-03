 import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
import SohelPage from "../components/SohelPage.vue";

const routes = [
  {
    path: '/',
    name: "Home",
    component: HomePage
  },
  {
    path: '/about',
    name: "about",
    component: AboutPage
  },
  {
    path: '/sohel',
    name: "sohel",
    component:SohelPage
  },
  {
    path: '/:pathMatch(.*)*', // ✅ updated
    name: "notFound",
    component: NotFoundPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
