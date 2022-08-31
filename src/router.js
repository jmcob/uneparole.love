import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ContactView from "./views/ContactView.vue";
import AboutView from "./views/AboutView.vue";
import GospelView from "./views/GospelView.vue";
import MonthView from "./views/MonthView.vue";
import LogInView from "./views/LogInView.vue";
import PrintView from "./views/PrintView.vue";
import ImpressionEglise from "./views/ImpressionEglise.vue";

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
    {
      path: "/evangile",
      component: GospelView,
    },
    {
      path: "/data",
      component: MonthView,
    },
    {
      path: "/ajout",

      component: LogInView,
    },
    {
      path: "/print",

      component: PrintView,
    },
    {
      path: "/impression",

      component: ImpressionEglise,
    },
    {
      // path: "*",
      path: "/:catchAll(.*)",
      name: "404",
      component: HomeView,
      meta: {
        requiresAuth: false,
      },
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});
