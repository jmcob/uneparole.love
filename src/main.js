import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createStore } from "vuex";

loadFonts();

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      user: "",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

import "./style.scss";

import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";

createApp(App)
  .use(vuetify)
  .use(router, VueAxios, axios)
  .use(store)
  .mount("#app");
