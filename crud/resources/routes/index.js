 import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue";
import NotFoundPage from "../components/NotFoundPage.vue";
import SohelPage from "../components/SohelPage.vue";
import AllStudent from "../components/AllStudent.vue";
import FormEdit from "../components/FormEdit.vue";

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
    path:'/students',
    name: "student",
    component:AllStudent
  },
  {
    path:'/edit/:id',
    name: "editstudent",
    component:FormEdit
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
