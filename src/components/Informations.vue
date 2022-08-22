<template>
  <div class="informations">
    <div class="count">
      <p>
        Il y a actuellement
        <strong>{{ wordcount }} paroles</strong> différentes.
      </p>
    </div>
    <div class="adoration">
      <p>
        Les extraits ont été initialement choisis pour l'adoration eucharistique
        : sous la houlette et avec la participation active de la coordinatrice
        de l’adoration perpétuelle au Sacré-Cœur à Bordeaux.
      </p>
    </div>
    <div class="148">
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
    </div>
    <div class="cookie">
      <p>
        Ce site ne vous suit pas, ni par des cookies, ni par de la télémétrie,
        ou de l'analyse. C'est un simple service perfectible, qui ne veut que
        votre sainteté.
      </p>
    </div>
    <div class="ajout">
      <p>
        Voici le lien pour
        <router-link class="about" to="/contact"
          >soumettre une nouvelle parole</router-link
        >
        de la Bible sur le site.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // arrow functions can make the code very succinct!
    wordcount() {
      return this.$store.state.wordcount;
    },
  },
};
</script>
<style scoped>
div {
  margin: 20px 0px;
}
</style>
