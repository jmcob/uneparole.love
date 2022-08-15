import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

import "./style.scss";

import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";

createApp(App).use(vuetify).use(router, VueAxios, axios).mount("#app");
