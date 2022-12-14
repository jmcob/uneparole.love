import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import ContactView from "./views/ContactView.vue";
import AboutView from "./views/AboutView.vue";
import GospelView from "./views/GospelView.vue";
import MonthView from "./views/MonthView.vue";
import PrintView from "./views/PrintView.vue";
import ImpressionEglise from "./views/ImpressionEglise.vue";
import Confidentialite from "./views/Confidentialite.vue";

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
            path: "/print",

            component: PrintView,
        },
        {
            path: "/impression",

            component: ImpressionEglise,
        },
        {
            path: "/privacy",

            component: Confidentialite,
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
