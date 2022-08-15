<template>
  <p>Il y a actuellement {{ paroles.length }} paroles différentes.</p>
  <br />
  <p>
    Les extraits ont été initialement choisis pour l'adoration eucharistique :
    sous la houlette et avec la participation active de la coordinatrice de
    l’adoration perpétuelle au Sacré-Cœur à Bordeaux.
  </p>
  <br />
  <p>
    Version 1.1, août 2022 – A terme, 65 extraits courants de la Bible puis 83
    extraits de psaumes,
    <strong>traduction liturgique <a href="aelf.org">AELF</a></strong
    >.
  </p>
  <p>
    <a href="http://www.uneparole.love/pains/pains-de-vie.pdf"
      >Télécharger le PDF complet des paroles de Dieu sélectionnées</a
    >
  </p>
  <br />
  <p>
    Ici vous êtes libres : pas de télémétrie, pas de cookie, pas de pub, pas de
    suivi inter-site, pas de copyright, un simple service, que du bonheur !
  </p>
  <br />
  <p>
    Voici le lien pour
    <router-link class="about" to="/contact"
      >soumettre une nouvelle parole</router-link
    >
    de la Bible sur le site.
  </p>
  <br />
  <p><a href="http://jmxi.art">jeanmaxime</a></p>
</template>

<script>
import paroles from "../json/paroles.json";

export default {
  data() {
    return {
      paroles: paroles,
    };
  },
};
</script>
