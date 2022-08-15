<template>
  <div class="wrapper">
    <div class="about info" id="infos">
      <div id="infoContainer" class="center">
        {{ this.date }}, {{ this.desInfos.jour_liturgique_nom }}
      </div>
    </div>
    <router-link class="center about" to="/paroledumois"
      >Parole du mois</router-link
    >
    <router-link class="center about" to="/evangile"
      >Evangile du jour</router-link
    >
    <router-link class="center about" to="/about">À Propos</router-link>
    <router-link class="about" to="/contact">Soumettre une parole</router-link>
  </div>
</template>

<script>
import paroles from "../json/paroles.json";
import ContactForm from "./ContactForm.vue";
import OfTheMonth from "./OfTheMonth.vue";
import Informations from "./Informations.vue";
import EvangileDuJour from "./EvangileDuJour.vue";
import "dayjs/locale/fr";
import dayjs from "dayjs";
import axios from "axios";

export default {
  components: {
    ContactForm,
    OfTheMonth,
    Informations,
    EvangileDuJour,
  },
  data() {
    return {
      today: dayjs().format("YYYY-MM-DD"),
      date: dayjs().locale("fr").format("DD MMMM"),
      api: "",
      desInfos: [],
      paroles: paroles,
      paroleDuMois: false,
      color: "",
    };
  },
  methods: {
    async getInfos() {
      this.api =
        "https://api.aelf.org/v1/informations/" + this.today + "/france";
      await axios.get(this.api).then((res) => {
        this.desInfos = res.data.informations;
      });
    },
  },
  created() {
    this.getInfos();
  },
};
</script>
