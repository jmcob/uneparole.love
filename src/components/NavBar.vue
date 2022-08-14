<template>
  <div class="wrapper">
    <div class="about info" id="infos">
      <div id="infoContainer">
        {{ this.desInfos.jour_liturgique_nom }}
      </div>
    </div>
    <div>
      <div v-if="paroleDuMois">
        <p class="center about" @click="this.paroleDuMois = !this.paroleDuMois">
          Fermer la parole du mois
        </p>
        <OfTheMonth />
      </div>
      <div class="center about" v-else>
        <p @click="this.paroleDuMois = !this.paroleDuMois">La parole du mois</p>
      </div>
      <div id="evangileDuJour" v-if="evangileDuJour">
        <p
          class="center about"
          @click="this.evangileDuJour = !this.evangileDuJour"
        >
          Fermer l'évangile du jour
        </p>
        <EvangileDuJour :desInfos="this.desInfos" />
      </div>
      <div class="center about" v-else>
        <p @click="this.evangileDuJour = !this.evangileDuJour">
          L'évangile du jour
        </p>
      </div>
    </div>
    <router-link class="center about" to="/about">À Propos</router-link>
    <br /><br /><br />
    <router-link class="about" to="/contact">Soumettre une parole</router-link>
  </div>
</template>

<script>
import paroles from "../json/paroles.json";
import ContactForm from "./ContactForm.vue";
import OfTheMonth from "./OfTheMonth.vue";
import Informations from "./Informations.vue";
import EvangileDuJour from "./EvangileDuJour.vue";
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
      api: "",
      desInfos: [],
      paroles: paroles,
      aboutClick: false,
      soumission: false,
      paroleDuMois: false,
      evangileDuJour: false,
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
