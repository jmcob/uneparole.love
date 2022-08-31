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
      user: "",
      // Nombre de paroles total
      wordcount: 0,
      // length of ps, gosp, nt and at are in informations; they could be filters too.
      ps: [],
      gosp: [],
      at: [],
      nt: [],
      // le fichier des paroles telechargée brut :
      querySnapshot: {},
      // si la parole est demandée :
      wordClick: false,
      // si nous ne sommes pas sur la page d'accueil :
      outOfHome: false,
    };
  },
  mutations: {
    // pour sauvegarder un user dans le Localstorage
    whoAmI(state) {
      if (localStorage.getItem("user")) {
        state.user = JSON.parse(localStorage.getItem("user"));
      }
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
