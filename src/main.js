import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(VueAxios, axios).mount("#app");
