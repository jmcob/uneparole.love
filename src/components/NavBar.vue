<template>
  <div class="about info" id="infos">
    <div id="infoContainer">
      {{ this.desInfos.fete }}
    </div>
  </div>
  <div>
    <div id="about" v-if="aboutClick">
      <p class="center" @click="this.aboutClick = !this.aboutClick">
        Fermer l'à propos
      </p>
      <Informations />
    </div>
    <div v-else>
      <p class="about" @click="this.aboutClick = !this.aboutClick">À propos</p>
    </div>
    <div v-if="soumission">
      <p class="center" @click="this.soumission = !this.soumission">
        Fermer le formulaire
      </p>
      <ContactForm />
    </div>
    <div class="center" v-else>
      <p @click="this.soumission = !this.soumission">Soumettre une parole</p>
    </div>
    <div v-if="paroleDuMois">
      <p class="center" @click="this.paroleDuMois = !this.paroleDuMois">
        Fermer la parole du mois
      </p>
      <OfTheMonth />
    </div>
    <div class="center" v-else>
      <p @click="this.paroleDuMois = !this.paroleDuMois">La parole du mois</p>
    </div>
    <div id="evangileDuJour" v-if="evangileDuJour">
      <p class="center" @click="this.evangileDuJour = !this.evangileDuJour">
        Fermer l'évangile du jour
      </p>
      <EvangileDuJour :desInfos="this.desInfos" />
    </div>
    <div class="center" v-else>
      <p @click="this.evangileDuJour = !this.evangileDuJour">
        L'évangile du jour
      </p>
    </div>
  </div>
</template>

<script>
import paroles from "../json/paroles.json";
import ContactForm from "./ContactForm.vue";
import OfTheMonth from "./OfTheMonth.vue";
import Informations from "./Informations.vue";
import EvangileDuJour from "./EvangileDuJour.vue";
import dayjs from "dayjs";

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
      await this.axios.get(this.api).then((res) => {
        this.desInfos = res.data.informations;
        console.log(this.desInfos);
      });
    },
  },
  created() {
    this.getInfos();
  },
};
</script>
