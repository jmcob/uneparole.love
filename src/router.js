import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ContactView from "./views/ContactView.vue";
import AboutView from "./views/AboutView.vue";
import GospelView from "./views/GospelView.vue";
import MonthView from "./views/MonthView.vue";
import LogInView from "./views/LogInView.vue";

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
      path: "/writeData",
      component: MonthView,
    },
    {
      path: "/login",
      component: LogInView,
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});
