<template>
  <div>
    <div id="about" v-if="aboutClick">
      <p class="center" @click="toggleAbout()">Fermer l'à propos</p>
      <Informations />
    </div>
    <div v-else><p class="about" @click="toggleAbout()">À propos</p></div>
    <div v-if="soumission">
      <p class="center" @click="toggleSoumission()">Fermer le formulaire</p>
      <ContactForm />
    </div>
    <div class="center" v-else>
      <p @click="toggleSoumission()">Soumettre une parole</p>
    </div>
    <div v-if="paroleDuMois">
      <p class="center" @click="toggleMois()">Fermer la parole du mois</p>
      <OfTheMonth />
    </div>
    <div class="center" v-else>
      <p @click="toggleMois()">La parole du mois</p>
    </div>
  </div>
</template>

<script>
import paroles from "../json/paroles.json";
import ContactForm from "./ContactForm.vue";
import OfTheMonth from "./OfTheMonth.vue";
import Informations from "./Informations.vue";

export default {
  components: { ContactForm, OfTheMonth, Informations },
  data() {
    return {
      paroles: paroles,
      aboutClick: false,
      soumission: false,
      paroleDuMois: false,
    };
  },
  methods: {
    toggleAbout() {
      this.aboutClick = !this.aboutClick;
    },
    toggleSoumission() {
      this.soumission = !this.soumission;
    },
    toggleMois() {
      this.paroleDuMois = !this.paroleDuMois;
    },
  },
};
</script>
