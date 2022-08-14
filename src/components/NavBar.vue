<template>
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
      <EvangileDuJour />
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

export default {
  components: {
    ContactForm,
    OfTheMonth,
    Informations,
    EvangileDuJour,
  },
  data() {
    return {
      paroles: paroles,
      aboutClick: false,
      soumission: false,
      paroleDuMois: false,
      evangileDuJour: false,
    };
  },
};
</script>
