import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ContactView from "./views/ContactView.vue";
import AboutView from "./views/AboutView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/contact",
      component: ContactView,
    },
    {
      path: "/about",
      component: AboutView,
    },
  ],
});
