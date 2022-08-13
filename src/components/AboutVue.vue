<template>
  <div>
    <div id="about" v-if="aboutClick">
      <p class="center" @click="toggleAbout()">Fermer l'à propos</p>
      <p>Actuellement {{ paroles.length }} paroles différentes.</p>
      <p>
        Les extraits ont été initialement choisis pour l'adoration eucharistique
        : sous la houlette et avec la participation active de la coordinatrice
        de l’adoration perpétuelle au Sacré-Cœur à Bordeaux.
      </p>
      <p>
        Version 1.1, août 2022 – A terme, 65 extraits courants de la Bible puis
        83 extraits de psaumes,
        <strong>traduction liturgique <a href="aelf.org">AELF</a></strong
        >.
      </p>
      <p>
        <a href="http://www.uneparole.love/pains/pains-de-vie.pdf"
          >Télécharger le PDF complet des paroles de Dieu sélectionnées</a
        >
      </p>
      <p>
        Ici vous êtes libres : pas de télémétrie, pas de cookie, pas de pub, pas
        de suivi inter-site, pas de copyright, un simple service, que du bonheur
        !
      </p>
      <p><a href="http://jmxi.art">jeanmaxime</a></p>
    </div>
    <div v-else><p class="about" @click="toggleAbout()">À propos</p></div>
    <div v-if="soumission">
      <p class="center" @click="toggleSoumission()">Fermer le formulaire</p>
      <ContactForm />
    </div>
    <div class="center" v-else>
      <p @click="toggleSoumission()">Soumettre une parole</p>
    </div>
  </div>
</template>

<script>
import paroles from "../json/paroles.json";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: { ContactForm },
  data() {
    return {
      paroles: paroles,
      aboutClick: false,
      soumission: false,
    };
  },
  methods: {
    toggleAbout() {
      this.aboutClick = !this.aboutClick;
    },
    toggleSoumission() {
      this.soumission = !this.soumission;
    },
  },
};
</script>
