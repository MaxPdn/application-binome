import AboutView from "@/views/AboutView.vue";
import BlogView from "@/views/BlogView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/About",
      name: "About",
      component: AboutView,
    },
    {
      path: "/BlogView",
      name: "BlogView",
      component: BlogView,
    },
  ],
});

export default router;
