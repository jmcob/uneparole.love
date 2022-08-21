import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      firebaseConfig: {
        apiKey: "AIzaSyAOSzAed7cVr8lQU2NmJAfr432KyYyW0S8",

        authDomain: "une-parole.firebaseapp.com",

        projectId: "une-parole",

        storageBucket: "une-parole.appspot.com",

        messagingSenderId: "31289144640",

        appId: "1:31289144640:web:570d29ed82c5cba10a76a5",
      },
    };
  },
  mutations: {},
});

loadFonts();

import "./style.scss";

import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";

createApp(App)
  .use(vuetify)
  .use(router, VueAxios, axios)
  .use(store)
  .mount("#app");
